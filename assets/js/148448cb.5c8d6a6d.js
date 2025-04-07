"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40611],{70936:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"interfaces/ContainerCreateOptions","title":"Interface: ContainerCreateOptions","description":"Defined in3164","source":"@site/api/interfaces/ContainerCreateOptions.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerCreateOptions","permalink":"/api/interfaces/ContainerCreateOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerAuthInfo","permalink":"/api/interfaces/ContainerAuthInfo"},"next":{"title":"ContainerCreateResult","permalink":"/api/interfaces/ContainerCreateResult"}}');var a=s(62540),t=s(43023);const d={},o="Interface: ContainerCreateOptions",r={},c=[{value:"Properties",id:"properties",level:2},{value:"ArgsEscaped?",id:"argsescaped",level:3},{value:"AttachStderr?",id:"attachstderr",level:3},{value:"AttachStdin?",id:"attachstdin",level:3},{value:"AttachStdout?",id:"attachstdout",level:3},{value:"Cmd?",id:"cmd",level:3},{value:"Detach?",id:"detach",level:3},{value:"Domainname?",id:"domainname",level:3},{value:"Entrypoint?",id:"entrypoint",level:3},{value:"Env?",id:"env",level:3},{value:"EnvFiles?",id:"envfiles",level:3},{value:"ExposedPorts?",id:"exposedports",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"HealthCheck?",id:"healthcheck",level:3},{value:"HostConfig?",id:"hostconfig",level:3},{value:"Hostname?",id:"hostname",level:3},{value:"Image?",id:"image",level:3},{value:"Labels?",id:"labels",level:3},{value:"Index Signature",id:"index-signature-1",level:4},{value:"MacAddress?",id:"macaddress",level:3},{value:"name?",id:"name",level:3},{value:"NetworkConfig?",id:"networkconfig",level:3},{value:"NetworkDisabled?",id:"networkdisabled",level:3},{value:"OnBuild?",id:"onbuild",level:3},{value:"OpenStdin?",id:"openstdin",level:3},{value:"platform?",id:"platform",level:3},{value:"pod?",id:"pod",level:3},{value:"Shell?",id:"shell",level:3},{value:"start?",id:"start",level:3},{value:"StdinOnce?",id:"stdinonce",level:3},{value:"StopSignal?",id:"stopsignal",level:3},{value:"StopTimeout?",id:"stoptimeout",level:3},{value:"Tty?",id:"tty",level:3},{value:"User?",id:"user",level:3},{value:"Volumes?",id:"volumes",level:3},{value:"Index Signature",id:"index-signature-2",level:4},{value:"WorkingDir?",id:"workingdir",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"interface-containercreateoptions",children:"Interface: ContainerCreateOptions"})}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3164",children:"packages/extension-api/src/extension-api.d.ts:3164"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"argsescaped",children:"ArgsEscaped?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"ArgsEscaped"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3295",children:"packages/extension-api/src/extension-api.d.ts:3295"})]}),"\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"false"})]}),"\n",(0,a.jsx)(n.p,{children:"Command is already escaped (Windows only)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"attachstderr",children:"AttachStderr?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"AttachStderr"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3263",children:"packages/extension-api/src/extension-api.d.ts:3263"})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to attach to ",(0,a.jsx)(n.code,{children:"stderr"})," (default false)"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"attachstdin",children:"AttachStdin?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"AttachStdin"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3253",children:"packages/extension-api/src/extension-api.d.ts:3253"})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to attach to ",(0,a.jsx)(n.code,{children:"stdin"})," (default false)"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"attachstdout",children:"AttachStdout?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"AttachStdout"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3258",children:"packages/extension-api/src/extension-api.d.ts:3258"})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to attach to ",(0,a.jsx)(n.code,{children:"stdout"}),"(default false)"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"cmd",children:"Cmd?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Cmd"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3241",children:"packages/extension-api/src/extension-api.d.ts:3241"})]}),"\n",(0,a.jsx)(n.p,{children:"Command to run specified as an array of strings"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"detach",children:"Detach?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Detach"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3278",children:"packages/extension-api/src/extension-api.d.ts:3278"})]}),"\n",(0,a.jsx)(n.p,{children:"Run the container in the background"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"domainname",children:"Domainname?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Domainname"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3195",children:"packages/extension-api/src/extension-api.d.ts:3195"})]}),"\n",(0,a.jsx)(n.p,{children:"The domain name to use for the container."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"entrypoint",children:"Entrypoint?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Entrypoint"}),": ",(0,a.jsx)(n.code,{children:"string"})," | ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3248",children:"packages/extension-api/src/extension-api.d.ts:3248"})]}),"\n",(0,a.jsx)(n.p,{children:"The entry point for the container as a string or an array of strings."}),"\n",(0,a.jsxs)(n.p,{children:["If the array consists of exactly one empty string (",(0,a.jsx)(n.code,{children:'[""]'}),") then the entry point is reset to system default (i.e., the entry point used by docker when there is no ENTRYPOINT instruction in the Containerfile)."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"env",children:"Env?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Env"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3205",children:"packages/extension-api/src/extension-api.d.ts:3205"})]}),"\n",(0,a.jsxs)(n.p,{children:["A list of environment variables to set inside the container in the form ",(0,a.jsx)(n.code,{children:'["VAR=value", ...]'}),". A variable without ",(0,a.jsx)(n.code,{children:"="})," is removed from the environment, rather than to have an empty value"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"envfiles",children:"EnvFiles?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"EnvFiles"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3210",children:"packages/extension-api/src/extension-api.d.ts:3210"})]}),"\n",(0,a.jsx)(n.p,{children:"Environment files to use"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"exposedports",children:"ExposedPorts?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"ExposedPorts"}),": ",(0,a.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3221",children:"packages/extension-api/src/extension-api.d.ts:3221"})]}),"\n",(0,a.jsxs)(n.p,{children:["An object mapping ports to an empty object in the form: ",(0,a.jsx)(n.code,{children:'{"<port>/<tcp|udp|sctp>": {}}'})]}),"\n",(0,a.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,a.jsxs)(n.p,{children:["[",(0,a.jsx)(n.code,{children:"port"}),": ",(0,a.jsx)(n.code,{children:"string"}),"]: ",(0,a.jsx)(n.code,{children:"object"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"healthcheck",children:"HealthCheck?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"HealthCheck"}),": ",(0,a.jsx)(n.a,{href:"/api/interfaces/HealthConfig",children:(0,a.jsx)(n.code,{children:"HealthConfig"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3288",children:"packages/extension-api/src/extension-api.d.ts:3288"})]}),"\n",(0,a.jsxs)(n.p,{children:["A test to perform to check that the container is healthy. See ",(0,a.jsx)(n.a,{href:"/api/interfaces/HealthConfig",children:"HealthConfig"})," for usage details"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"hostconfig",children:"HostConfig?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"HostConfig"}),": ",(0,a.jsx)(n.a,{href:"/api/interfaces/HostConfig",children:(0,a.jsx)(n.code,{children:"HostConfig"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3226",children:"packages/extension-api/src/extension-api.d.ts:3226"})]}),"\n",(0,a.jsx)(n.p,{children:"Container configuration that depends on the host we are running on"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"hostname",children:"Hostname?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Hostname"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3190",children:"packages/extension-api/src/extension-api.d.ts:3190"})]}),"\n",(0,a.jsx)(n.p,{children:"The hostname to use for the container, as a valid RFC 1123 hostname"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"image",children:"Image?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Image"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3231",children:"packages/extension-api/src/extension-api.d.ts:3231"})]}),"\n",(0,a.jsx)(n.p,{children:"The name (or reference) of the image to use when creating the container"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"labels",children:"Labels?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Labels"}),": ",(0,a.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3215",children:"packages/extension-api/src/extension-api.d.ts:3215"})]}),"\n",(0,a.jsx)(n.p,{children:"User-defined key/value metadata"}),"\n",(0,a.jsx)(n.h4,{id:"index-signature-1",children:"Index Signature"}),"\n",(0,a.jsxs)(n.p,{children:["[",(0,a.jsx)(n.code,{children:"label"}),": ",(0,a.jsx)(n.code,{children:"string"}),"]: ",(0,a.jsx)(n.code,{children:"string"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"macaddress",children:"MacAddress?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"MacAddress"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3315",children:"packages/extension-api/src/extension-api.d.ts:3315"})]}),"\n",(0,a.jsx)(n.p,{children:"MAC address of the container."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"name?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"name"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3168",children:"packages/extension-api/src/extension-api.d.ts:3168"})]}),"\n",(0,a.jsxs)(n.p,{children:["Assign the specified name to the container. Must match the regular expression",(0,a.jsx)(n.code,{children:"/?[a-zA-Z0-9][a-zA-Z0-9_.-]+"}),". If not speficied, the platform assigns a unique name to the container"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"networkconfig",children:"NetworkConfig?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"NetworkConfig"}),": ",(0,a.jsx)(n.a,{href:"/api/interfaces/NetworkingConfig",children:(0,a.jsx)(n.code,{children:"NetworkingConfig"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3339",children:"packages/extension-api/src/extension-api.d.ts:3339"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"networkdisabled",children:"NetworkDisabled?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"NetworkDisabled"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3310",children:"packages/extension-api/src/extension-api.d.ts:3310"})]}),"\n",(0,a.jsx)(n.p,{children:"Disable networking for the container."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"onbuild",children:"OnBuild?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"OnBuild"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3320",children:"packages/extension-api/src/extension-api.d.ts:3320"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ONBUILD"})," metadata that were defined in the image's ",(0,a.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"openstdin",children:"OpenStdin?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"OpenStdin"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3268",children:"packages/extension-api/src/extension-api.d.ts:3268"})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to open ",(0,a.jsx)(n.code,{children:"stdin"})," (default false)"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"platform",children:"platform?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"platform"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3185",children:"packages/extension-api/src/extension-api.d.ts:3185"})]}),"\n",(0,a.jsx)(n.p,{children:'Default: ""'}),"\n",(0,a.jsxs)(n.p,{children:["Platform in the format ",(0,a.jsx)(n.code,{children:"os[/arch[/variant]]"})," used for image lookup."]}),"\n",(0,a.jsxs)(n.p,{children:["When specified, the daemon checks if the requested image is present in the local image cache with the given OS and Architecture, and otherwise returns a ",(0,a.jsx)(n.code,{children:"404"})," status."]}),"\n",(0,a.jsxs)(n.p,{children:["If the option is not set, the host's native OS and Architecture are used to look up the image in the image cache. However, if no platform is passed and the given image does exist in the local image cache, but its OS or architecture does not match, the container is created with the available image, and a warning is added to the ",(0,a.jsx)(n.code,{children:"Warnings"})," field in the response, for example;"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"WARNING: The requested image's platform (linux/arm64/v8) does not\n         match the detected host platform (linux/amd64) and no\n         specific platform was requested\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"pod",children:"pod?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"pod"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3344",children:"packages/extension-api/src/extension-api.d.ts:3344"})]}),"\n",(0,a.jsx)(n.p,{children:"Pod where to create the container in"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"shell",children:"Shell?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Shell"}),": ",(0,a.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3337",children:"packages/extension-api/src/extension-api.d.ts:3337"})]}),"\n",(0,a.jsxs)(n.p,{children:["Shell for when ",(0,a.jsx)(n.code,{children:"RUN"}),", ",(0,a.jsx)(n.code,{children:"CMD"}),", and ",(0,a.jsx)(n.code,{children:"ENTRYPOINT"})," uses a shell."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"start",children:"start?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"start"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3283",children:"packages/extension-api/src/extension-api.d.ts:3283"})]}),"\n",(0,a.jsx)(n.p,{children:"Start the container immediately (default true)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stdinonce",children:"StdinOnce?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"StdinOnce"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3273",children:"packages/extension-api/src/extension-api.d.ts:3273"})]}),"\n",(0,a.jsxs)(n.p,{children:["Close ",(0,a.jsx)(n.code,{children:"stdin"})," after one attached client disconnects (deafult false)"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stopsignal",children:"StopSignal?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"StopSignal"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3325",children:"packages/extension-api/src/extension-api.d.ts:3325"})]}),"\n",(0,a.jsx)(n.p,{children:"Signal to stop a container as a string or unsigned integer."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stoptimeout",children:"StopTimeout?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"StopTimeout"}),": ",(0,a.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3332",children:"packages/extension-api/src/extension-api.d.ts:3332"})]}),"\n",(0,a.jsxs)(n.p,{children:["Default: ",(0,a.jsx)(n.code,{children:"10"})]}),"\n",(0,a.jsx)(n.p,{children:"Timeout to stop a container in seconds."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"tty",children:"Tty?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Tty"}),": ",(0,a.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3236",children:"packages/extension-api/src/extension-api.d.ts:3236"})]}),"\n",(0,a.jsx)(n.p,{children:"Attach standard streams to a TTY, including stdin if it is not closed (default false)"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"user",children:"User?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"User"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3200",children:"packages/extension-api/src/extension-api.d.ts:3200"})]}),"\n",(0,a.jsx)(n.p,{children:"The user that commands are run as inside the container"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"volumes",children:"Volumes?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"Volumes"}),": ",(0,a.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3300",children:"packages/extension-api/src/extension-api.d.ts:3300"})]}),"\n",(0,a.jsx)(n.p,{children:"An object mapping mount point paths inside the container to empty objects."}),"\n",(0,a.jsx)(n.h4,{id:"index-signature-2",children:"Index Signature"}),"\n",(0,a.jsxs)(n.p,{children:["[",(0,a.jsx)(n.code,{children:"volume"}),": ",(0,a.jsx)(n.code,{children:"string"}),"]: ",(0,a.jsx)(n.code,{children:"object"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"workingdir",children:"WorkingDir?"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"optional"})," ",(0,a.jsx)(n.strong,{children:"WorkingDir"}),": ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Defined in: ",(0,a.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/afd935e3a8e0fe34f27aa13a8054b5fc55ae2548/packages/extension-api/src/extension-api.d.ts#L3305",children:"packages/extension-api/src/extension-api.d.ts:3305"})]}),"\n",(0,a.jsx)(n.p,{children:"The working directory for commands to run in."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(63696);const a={},t=i.createContext(a);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);