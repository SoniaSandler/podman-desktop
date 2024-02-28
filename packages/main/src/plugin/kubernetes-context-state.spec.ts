/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { beforeEach, afterEach, expect, test, vi } from 'vitest';
import type { ContextState } from './kubernetes-context-state.js';
import { ContextsManager } from './kubernetes-context-state.js';
import type { ApiSenderType } from './api.js';
import * as kubeclient from '@kubernetes/client-node';
import type { ErrorCallback, KubernetesObject, ObjectCallback } from '@kubernetes/client-node';

export class FakeInformer {
  private onCb: Map<string, ObjectCallback<KubernetesObject>>;
  private offCb: Map<string, ObjectCallback<KubernetesObject>>;
  private onErrorCb: Map<string, ErrorCallback>;

  constructor(
    private resourcesCount: number,
    private connectResponse: Error | undefined,
  ) {
    this.onCb = new Map<string, ObjectCallback<KubernetesObject>>();
    this.offCb = new Map<string, ObjectCallback<KubernetesObject>>();
    this.onErrorCb = new Map<string, ErrorCallback>();
  }
  async start(): Promise<void> {
    this.onErrorCb.get('connect')?.();
    if (this.connectResponse) {
      this.onErrorCb.get('error')?.(this.connectResponse);
    }
    if (this.connectResponse === undefined) {
      for (let i = 0; i < this.resourcesCount; i++) {
        this.onCb.get('add')?.({});
      }
    }
  }
  stop() {}
  on(
    verb: 'change' | 'add' | 'update' | 'delete' | 'error' | 'connect',
    cb: ErrorCallback | ObjectCallback<KubernetesObject>,
  ) {
    switch (verb) {
      case 'error':
      case 'connect':
        this.onErrorCb.set(verb, cb as ErrorCallback);
        break;
      default:
        this.onCb.set(verb, cb as ObjectCallback<KubernetesObject>);
    }
  }
  off(
    verb: 'change' | 'add' | 'update' | 'delete' | 'error' | 'connect',
    cb: ErrorCallback | ObjectCallback<KubernetesObject>,
  ) {
    this.offCb.set(verb, cb);
  }
  get() {}
  list() {}
}

// fakeMakeInformer describes how many resources are in the different namespaces and if cluster is reachable
function fakeMakeInformer(
  kubeconfig: kubeclient.KubeConfig,
  path: string,
  _listPromiseFn: kubeclient.ListPromise<kubeclient.KubernetesObject>,
) {
  let connectResult: Error | undefined;
  switch (kubeconfig.currentContext) {
    case 'context1':
      connectResult = new Error('connection error');
      break;
    default:
      connectResult = undefined;
  }
  switch (path) {
    case '/api/v1/namespaces/ns1/pods':
      return new FakeInformer(1, connectResult);
    case '/api/v1/namespaces/ns2/pods':
      return new FakeInformer(2, connectResult);
    case '/api/v1/namespaces/default/pods':
      return new FakeInformer(3, connectResult);

    case '/apis/apps/v1/namespaces/ns1/deployments':
      return new FakeInformer(4, connectResult);
    case '/apis/apps/v1/namespaces/ns2/deployments':
      return new FakeInformer(5, connectResult);
    case '/apis/apps/v1/namespaces/default/deployments':
      return new FakeInformer(6, connectResult);
  }
  return new FakeInformer(0, connectResult);
}

const apiSenderSendMock = vi.fn();
const apiSender: ApiSenderType = {
  send: apiSenderSendMock,
  receive: vi.fn(),
};

vi.mock('@kubernetes/client-node', async importOriginal => {
  const actual = await importOriginal<typeof kubeclient>();
  return {
    ...actual,
    makeInformer: fakeMakeInformer,
  };
});

vi.mock('./kubernetes-context-state-constants.js', () => {
  return {
    connectTimeout: 1,
    backoffInitialValue: 1000,
    backoffLimit: 1000,
    backoffJitter: 1,
  };
});

const originalConsoleDebug = console.debug;
const consoleDebugMock = vi.fn();

beforeEach(() => {
  vi.resetAllMocks();
  console.debug = consoleDebugMock;
});

afterEach(() => {
  console.debug = originalConsoleDebug;
});

test('should send info of resources in all reachable contexts and nothing in non reachable', async () => {
  const client = new ContextsManager(apiSender);
  const kubeConfig = new kubeclient.KubeConfig();
  kubeConfig.loadFromOptions({
    clusters: [
      {
        name: 'cluster1',
        server: 'server1',
      },
      {
        name: 'cluster2',
        server: 'server2',
      },
    ],
    users: [
      {
        name: 'user1',
      },
      {
        name: 'user2',
      },
    ],
    contexts: [
      {
        name: 'context1',
        cluster: 'cluster1',
        user: 'user1',
      },
      {
        name: 'context2',
        cluster: 'cluster2',
        user: 'user2',
      },
      {
        name: 'context2-1',
        cluster: 'cluster2',
        user: 'user2',
        namespace: 'ns1',
      },
      {
        name: 'context2-2',
        cluster: 'cluster2',
        user: 'user2',
        namespace: 'ns2',
      },
    ],
    currentContext: 'context2-1',
  });
  await client.update(kubeConfig);
  let expectedMap = new Map<string, ContextState>();
  expectedMap.set('context1', {
    reachable: false,
    error: 'Error: connection error',
    resources: {
      pods: [],
      deployments: [],
    },
  } as ContextState);
  expectedMap.set('context2', {
    reachable: true,
    error: undefined,
    resources: {
      pods: [{}, {}, {}],
      deployments: [{}, {}, {}, {}, {}, {}],
    },
  } as ContextState);
  expectedMap.set('context2-1', {
    reachable: true,
    error: undefined,
    resources: {
      pods: [{}],
      deployments: [{}, {}, {}, {}],
    },
  } as ContextState);
  expectedMap.set('context2-2', {
    reachable: true,
    error: undefined,
    resources: {
      pods: [{}, {}],
      deployments: [{}, {}, {}, {}, {}],
    },
  } as ContextState);
  await new Promise(resolve => setTimeout(resolve, 2));
  expect(apiSenderSendMock).toHaveBeenCalledWith('kubernetes-contexts-state-update', expectedMap);

  // => removing contexts, should remving clusters from sent info
  kubeConfig.loadFromOptions({
    clusters: [
      {
        name: 'cluster1',
        server: 'server1',
      },
      {
        name: 'cluster2',
        server: 'server2',
      },
    ],
    users: [
      {
        name: 'user1',
      },
      {
        name: 'user2',
      },
    ],
    contexts: [
      {
        name: 'context1',
        cluster: 'cluster1',
        user: 'user1',
      },
      {
        name: 'context2',
        cluster: 'cluster2',
        user: 'user2',
      },
      {
        name: 'context2-1',
        cluster: 'cluster2',
        user: 'user2',
        namespace: 'ns1',
      },
    ],
    currentContext: 'context2-1',
  });

  vi.clearAllMocks();
  await client.update(kubeConfig);
  expectedMap = new Map<string, ContextState>();
  expectedMap.set('context1', {
    reachable: false,
    error: 'Error: connection error',
    resources: {
      pods: [],
      deployments: [],
    },
  } as ContextState);
  expectedMap.set('context2', {
    reachable: true,
    error: undefined,
    resources: {
      pods: [{}, {}, {}],
      deployments: [{}, {}, {}, {}, {}, {}],
    },
  } as ContextState);
  expectedMap.set('context2-1', {
    reachable: true,
    error: undefined,
    resources: {
      pods: [{}],
      deployments: [{}, {}, {}, {}],
    },
  } as ContextState);
  await new Promise(resolve => setTimeout(resolve, 2));
  expect(apiSenderSendMock).toHaveBeenCalledWith('kubernetes-contexts-state-update', expectedMap);
});

test('should write logs when connection fails', async () => {
  const client = new ContextsManager(apiSender);
  const kubeConfig = new kubeclient.KubeConfig();
  kubeConfig.loadFromOptions({
    clusters: [
      {
        name: 'cluster1',
        server: 'server1',
      },
    ],
    users: [
      {
        name: 'user1',
      },
    ],
    contexts: [
      {
        name: 'context1',
        cluster: 'cluster1',
        user: 'user1',
      },
    ],
    currentContext: 'context1',
  });
  await client.update(kubeConfig);
  expect(consoleDebugMock).toHaveBeenCalledWith(
    expect.stringMatching(
      /Trying to watch pods on the kubernetes context named "context1" but got a connection refused, retrying the connection in [0-9]*s. Error: connection error/,
    ),
  );
});