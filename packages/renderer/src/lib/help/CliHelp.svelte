<script lang="ts">
import { Checkbox, Input } from '@podman-desktop/ui-svelte';

import SealRocket from '../images/SealRocket.svelte';
import CliField from './CliHelpComponents/CliField.svelte';
import CliOption from './CliHelpComponents/CliOption.svelte';
import CliOptions from './CliHelpComponents/CliOptions.svelte';
import CommandDiv from './CliHelpComponents/CommandDiv.svelte';
import CommandHeader from './CliHelpComponents/CommandHeader.svelte';
import type { CommandUI } from './CommandUI';

let pullCommand: CommandUI = {
  startCommand: 'podman pull ',
  firstCommand: 'podman pull quay.io/podman/hello',
  commandLine: 'podman pull quay.io/podman/hello',
  checked: {
    image: false,
  },
  values: {
    image: '',
  },
};

let runCommand: CommandUI = {
  startCommand: 'podman run',
  firstCommand: 'podman run quay.io/podman/hello',
  commandLine: 'podman run quay.io/podman/hello',
  checked: {
    image: false,
    volumes: false,
    name: false,
    ports: false,
    pod: false,
  },
  values: {
    image: '',
    volumeLocal: '',
    containerDir: '',
    name: '',
    localPort: '',
    containerPort: '',
    pod: '',
  },
};

let buildCommand: CommandUI = {
  startCommand: 'podman build',
  firstCommand: 'podman build .',
  commandLine: 'podman build .',
  checked: {
    file: false,
    tag: false,
    cred: false,
  },
  values: {
    context: '.',
    file: '',
    tag: '',
    username: '',
    password: '',
  },
};

let podCreateCommand: CommandUI = {
  startCommand: 'podman pod create',
  firstCommand: 'podman pod create',
  commandLine: 'podman pod create',
  checked: {
    name: false,
    label: false,
    volumes: false,
  },
  values: {
    name: '',
    key: '',
    value: '',
    volumeLocal: '',
    containerDir: '',
  },
};

let inspectCommand: CommandUI = {
  startCommand: 'podman inspect ',
  firstCommand: 'podman inspect quay.io/podman/hello',
  commandLine: 'podman inspect quay.io/podman/hello',
  checked: {
    name: false,
  },
  values: {
    name: '',
  },
};

function eventValue(event: Event) {
  let target = event.target as HTMLInputElement;
  return target.value;
}

function runChecked() {
  let emptyImage = runCommand.values.image === '';
  let emptyVolumes = runCommand.values.volumeLocal === '' || runCommand.values.containerDir === '';
  let emptyName = runCommand.values.name === '';
  let emptyContainerPort = runCommand.values.containerPort === '';
  let emptyPod = runCommand.values.pod === '';
  runCommand.commandLine = runCommand.startCommand;
  runCommand.commandLine +=
    runCommand.checked.volumes && !emptyVolumes
      ? ` -v ${runCommand.values.volumeLocal}:${runCommand.values.containerDir} `
      : '';
  runCommand.commandLine += runCommand.checked.name && !emptyName ? ` --name ${runCommand.values.name} ` : '';
  runCommand.commandLine +=
    runCommand.checked.ports && !emptyContainerPort
      ? ` -p ${runCommand.values.localPort}:${runCommand.values.containerPort} `
      : '';
  runCommand.commandLine += runCommand.checked.pod && !emptyPod ? ` --pod=${runCommand.values.pod} ` : '';
  runCommand.commandLine += runCommand.checked.image && !emptyImage ? runCommand.values.image : 'quay.io/podman/hello';

  if (runCommand.commandDiv) {
    runCommand.commandDiv.textContent = runCommand.commandLine;
  }
}

function pullChecked() {
  let emptyImage = pullCommand.values.image === '';
  pullCommand.commandLine = pullCommand.startCommand;
  pullCommand.commandLine +=
    pullCommand.checked.image && !emptyImage ? pullCommand.values.image : 'quay.io/podman/hello';

  if (pullCommand.commandDiv) {
    pullCommand.commandDiv.textContent = pullCommand.commandLine;
  }
}

function buildChecked() {
  let emptyFile = buildCommand.values.file === '';
  buildCommand.commandLine = buildCommand.startCommand;
  buildCommand.commandLine += buildCommand.checked.file && !emptyFile ? ` -f ${buildCommand.values.file} ` : '';

  buildCommand.commandLine += buildCommand.values.context;

  if (buildCommand.commandDiv) {
    buildCommand.commandDiv.textContent = buildCommand.commandLine;
  }
}

function podCreateChecked() {
  let emptyName = podCreateCommand.values.name === '';
  let emptyKey = podCreateCommand.values.key === '';
  let emptyValue = podCreateCommand.values.value === '';
  let emptyVolumes = podCreateCommand.values.containerDir === '';
  podCreateCommand.commandLine = podCreateCommand.startCommand;
  podCreateCommand.commandLine +=
    podCreateCommand.checked.label && !emptyKey
      ? ` -l ${podCreateCommand.values.key}` + (!emptyValue ? `=${podCreateCommand.values.value}` : '')
      : '';
  podCreateCommand.commandLine +=
    podCreateCommand.checked.volumes && !emptyVolumes
      ? ` -v ${podCreateCommand.values.volumeLocal}:${podCreateCommand.values.containerDir} `
      : '';
  podCreateCommand.commandLine += podCreateCommand.checked.name && !emptyName ? podCreateCommand.values.name : '';

  if (podCreateCommand.commandDiv) {
    podCreateCommand.commandDiv.textContent = podCreateCommand.commandLine;
  }
}

function inspectChecked() {
  let emptyName = inspectCommand.values.name === '';
  inspectCommand.commandLine = inspectCommand.startCommand;
  inspectCommand.commandLine +=
    inspectCommand.checked.name && !emptyName ? inspectCommand.values.name : 'quay.io/podman/hello';

  if (inspectCommand.commandDiv) {
    inspectCommand.commandDiv.textContent = inspectCommand.commandLine;
  }
}
</script>

<div class="flex flex-col h-full justify-start text-center space-y-3 overflow-auto">
  <div class="flex justify-center text-[var(--pd-details-empty-icon)] py-4">
    <svelte:component this="{SealRocket}" size="55" />
  </div>
  <h1 class="text-2xl text-[var(--pd-details-empty-header)]">Need help starting with Podman CLI commands?</h1>

  <div class="flex flex-col h-full p-3 justify-start items-center">
    <CommandDiv>
      <CommandHeader>Pull an image</CommandHeader>
      <CliField
        bind:commandDiv="{pullCommand.commandDiv}"
        firstCommand="{pullCommand.firstCommand}"
        onClick="{() => window.clipboardWriteText(pullCommand.commandLine)}" />
      <CliOptions>
        <CliOption>
          <Checkbox
            bind:checked="{pullCommand.checked.image}"
            on:click="{() => {
              pullCommand.checked.image = !pullCommand.checked.image;
              pullChecked();
            }}"
            class="ml-2">
            Image to Pull
          </Checkbox>
          <Input
            bind:value="{pullCommand.values.image}"
            on:input="{event => {
              pullCommand.values.image = eventValue(event);
              pullChecked();
            }}"
            placeholder="Image to pull"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
      </CliOptions>
    </CommandDiv>
    <CommandDiv>
      <CommandHeader
        >Build an image using instructions from one or more Containersfiles or Dockerfiles (found in the build context)</CommandHeader>
      <CliField
        bind:commandDiv="{buildCommand.commandDiv}"
        firstCommand="{buildCommand.firstCommand}"
        onClick="{() => window.clipboardWriteText(buildCommand.commandLine)}" />
      <CliOptions>
        <CliOption>
          Context for Containerfile/Dockerfile
          <Input
            bind:value="{buildCommand.values.context}"
            on:input="{event => {
              buildCommand.values.context = eventValue(event);
              buildChecked();
            }}"
            placeholder="Build context"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{buildCommand.checked.file}"
            on:click="{() => {
              buildCommand.checked.file = !buildCommand.checked.file;
              buildChecked();
            }}"
            class="ml-2">Pathname</Checkbox>
          <Input
            bind:value="{buildCommand.values.file}"
            on:input="{event => {
              buildCommand.values.file = eventValue(event);
              buildChecked();
            }}"
            placeholder="Pathname or URL"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
      </CliOptions>
    </CommandDiv>
    <CommandDiv>
      <CommandHeader>Run a container</CommandHeader>
      <CliField
        bind:commandDiv="{runCommand.commandDiv}"
        firstCommand="{runCommand.firstCommand}"
        onClick="{() => window.clipboardWriteText(runCommand.commandLine)}" />
      <CliOptions>
        <CliOption>
          <Checkbox
            bind:checked="{runCommand.checked.image}"
            on:click="{() => {
              runCommand.checked.image = !runCommand.checked.image;
              runChecked();
            }}"
            class="ml-2">Image name</Checkbox>
          <Input
            bind:value="{runCommand.values.image}"
            on:input="{event => {
              runCommand.values.image = eventValue(event);
              runChecked();
            }}"
            placeholder="Image to use"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{runCommand.checked.name}"
            on:click="{() => {
              runCommand.checked.name = !runCommand.checked.name;
              runChecked();
            }}"
            class="ml-2">Container name</Checkbox>
          <Input
            bind:value="{runCommand.values.name}"
            on:input="{event => {
              runCommand.values.name = eventValue(event);
              runChecked();
            }}"
            placeholder="Image to use"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{runCommand.checked.volumes}"
            on:click="{() => {
              runCommand.checked.volumes = !runCommand.checked.volumes;
              runChecked();
            }}"
            class="ml-2">Add a local volume to the container</Checkbox>
          <Input
            bind:value="{runCommand.values.volumeLocal}"
            on:input="{event => {
              runCommand.values.volumeLocal = eventValue(event);
              runChecked();
            }}"
            placeholder="Local Volume or path"
            class="ml-2 max-w-[400px] w-fit" />
          <Input
            bind:value="{runCommand.values.containerDir}"
            on:input="{event => {
              runCommand.values.containerDir = eventValue(event);
              runChecked();
            }}"
            placeholder="Path in container"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{runCommand.checked.ports}"
            on:click="{() => {
              runCommand.checked.ports = !runCommand.checked.ports;
              runChecked();
            }}"
            class="ml-2">Add a port binding</Checkbox>
          <Input
            bind:value="{runCommand.values.localPort}"
            on:input="{event => {
              runCommand.values.localPort = eventValue(event);
              runChecked();
            }}"
            placeholder="Local Port (Optional)"
            class="ml-2 max-w-[400px] w-fit" />
          <Input
            bind:value="{runCommand.values.containerPort}"
            on:input="{event => {
              runCommand.values.containerPort = eventValue(event);
              runChecked();
            }}"
            placeholder="Container Port"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{runCommand.checked.pod}"
            on:click="{() => {
              runCommand.checked.pod = !runCommand.checked.pod;
              runChecked();
            }}"
            class="ml-2">Run in a pod</Checkbox>
          <Input
            bind:value="{runCommand.values.pod}"
            on:input="{event => {
              runCommand.values.pod = eventValue(event);
              runChecked();
            }}"
            placeholder="Pod name"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
      </CliOptions>
    </CommandDiv>
    <CommandDiv>
      <CommandHeader>Create a pod</CommandHeader>
      <CliField
        bind:commandDiv="{podCreateCommand.commandDiv}"
        firstCommand="{podCreateCommand.firstCommand}"
        onClick="{() => window.clipboardWriteText(podCreateCommand.commandLine)}" />
      <CliOptions>
        <CliOption>
          <Checkbox
            bind:checked="{podCreateCommand.checked.name}"
            on:click="{() => {
              podCreateCommand.checked.name = !podCreateCommand.checked.name;
              podCreateChecked();
            }}"
            class="ml-2">
            Name
          </Checkbox>
          <Input
            bind:value="{podCreateCommand.values.name}"
            on:input="{event => {
              podCreateCommand.values.name = eventValue(event);
              podCreateChecked();
            }}"
            placeholder="Pod name"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{podCreateCommand.checked.label}"
            on:click="{() => {
              podCreateCommand.checked.label = !podCreateCommand.checked.label;
              podCreateChecked();
            }}"
            class="ml-2">
            label
          </Checkbox>
          <Input
            bind:value="{podCreateCommand.values.key}"
            on:input="{event => {
              podCreateCommand.values.key = eventValue(event);
              podCreateChecked();
            }}"
            placeholder="Label key"
            class="ml-2 max-w-[400px] w-fit" />
          <Input
            bind:value="{podCreateCommand.values.value}"
            on:input="{event => {
              podCreateCommand.values.value = eventValue(event);
              podCreateChecked();
            }}"
            placeholder="Label value"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
        <CliOption>
          <Checkbox
            bind:checked="{podCreateCommand.checked.volumes}"
            on:click="{() => {
              podCreateCommand.checked.volumes = !podCreateCommand.checked.volumes;
              podCreateChecked();
            }}"
            class="ml-2">Add a local volume to the container</Checkbox>
          <Input
            bind:value="{podCreateCommand.values.volumeLocal}"
            on:input="{event => {
              podCreateCommand.values.volumeLocal = eventValue(event);
              podCreateChecked();
            }}"
            placeholder="Local Volume or path"
            class="ml-2 max-w-[400px] w-fit" />
          <Input
            bind:value="{podCreateCommand.values.containerDir}"
            on:input="{event => {
              podCreateCommand.values.containerDir = eventValue(event);
              podCreateChecked();
            }}"
            placeholder="Path in container"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
      </CliOptions>
    </CommandDiv>
    <CommandDiv>
      <CommandHeader>Inspect</CommandHeader>
      <CliField
        bind:commandDiv="{inspectCommand.commandDiv}"
        firstCommand="{inspectCommand.firstCommand}"
        onClick="{() => window.clipboardWriteText(inspectCommand.commandLine)}" />
      <CliOptions>
        <CliOption>
          <Checkbox
            bind:checked="{inspectCommand.checked.name}"
            on:click="{() => {
              inspectCommand.checked.name = !inspectCommand.checked.name;
              inspectChecked();
            }}"
            class="ml-2">
            Name
          </Checkbox>
          <Input
            bind:value="{inspectCommand.values.name}"
            on:input="{event => {
              inspectCommand.values.name = eventValue(event);
              inspectChecked();
            }}"
            placeholder="Item to inspect"
            class="ml-2 max-w-[400px] w-fit" />
        </CliOption>
      </CliOptions>
    </CommandDiv>
  </div>
</div>
