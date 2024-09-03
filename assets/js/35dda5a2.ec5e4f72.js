"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3724],{96378:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(62540),t=r(43023);const a={sidebar_position:4,title:"Starting an inference server",description:"Starting an inference server for a model.",keywords:["podman desktop","podman","ai","llm","generative ai"],tags:["ai","llm","generative ai"]},s="Starting an inference server for a model",o={id:"ai-lab/start-inference-server",title:"Starting an inference server",description:"Starting an inference server for a model.",source:"@site/docs/ai-lab/start-inference-server.md",sourceDirName:"ai-lab",slug:"/ai-lab/start-inference-server",permalink:"/docs/ai-lab/start-inference-server",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/ai-lab/start-inference-server.md",tags:[{inline:!0,label:"ai",permalink:"/docs/tags/ai"},{inline:!0,label:"llm",permalink:"/docs/tags/llm"},{inline:!0,label:"generative ai",permalink:"/docs/tags/generative-ai"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Starting an inference server",description:"Starting an inference server for a model.",keywords:["podman desktop","podman","ai","llm","generative ai"],tags:["ai","llm","generative ai"]},sidebar:"mySidebar",previous:{title:"Downloading a model",permalink:"/docs/ai-lab/download-model"},next:{title:"Creating a playground",permalink:"/docs/ai-lab/create-playground"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}];function d(e){const n={a:"a",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"starting-an-inference-server-for-a-model",children:"Starting an inference server for a model"})}),"\n",(0,i.jsx)(n.p,{children:"Once a model is downloaded, a model service can be started. A model service is an inference server that is running in a container and exposing the model through the well-known chat API common to many providers."}),"\n",(0,i.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ai-lab/installing",children:"Podman AI Lab installed"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ai-lab/download-model",children:"Model downloaded"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"procedure",children:"Procedure"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Click the Podman AI Lab icon in the navigation bar"}),"\n",(0,i.jsxs)(n.li,{children:["In the Podman AI Lab navigation bar, click ",(0,i.jsx)(n.strong,{children:"Models > Services"})," menu item."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"New Model Service"})," button on the top right."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the model you want to start an inference server for in the ",(0,i.jsx)(n.strong,{children:"Model"})," list and click the ",(0,i.jsx)(n.strong,{children:"Create Service"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["The inference server for the model is being started and after a while, click on the ",(0,i.jsx)(n.strong,{children:"Open service details"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verification",children:"Verification"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Once the inference server is started, the details for the inference server allows you to generate code snippets in various languages to access the model through the inference server.\n",(0,i.jsx)(n.img,{alt:"inference server",src:r(56925).A+"",width:"1060",height:"711"})]}),"\n",(0,i.jsxs)(n.li,{children:["You can change the target language, here for Java and Quarkus.\n",(0,i.jsx)(n.img,{alt:"inference server",src:r(13217).A+"",width:"1060",height:"711"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},56925:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/inference-server-curl-edff4cc6c909f2c28f7cf29550e7a41d.png"},13217:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/inference-server-quarkus-808ad6018ca2a7a7e10bb39a1286e98d.png"},43023:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(63696);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);