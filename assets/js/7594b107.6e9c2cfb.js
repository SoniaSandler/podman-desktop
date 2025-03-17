"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97172],{73594:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"@podman-desktop/namespaces/authentication/functions/getSession","title":"Function: getSession()","description":"Call Signature","source":"@site/api/@podman-desktop/namespaces/authentication/functions/getSession.md","sourceDirName":"@podman-desktop/namespaces/authentication/functions","slug":"/@podman-desktop/namespaces/authentication/functions/getSession","permalink":"/api/@podman-desktop/namespaces/authentication/functions/getSession","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"onDidChangeSessions","permalink":"/api/@podman-desktop/namespaces/authentication/variables/onDidChangeSessions"},"next":{"title":"registerAuthenticationProvider","permalink":"/api/@podman-desktop/namespaces/authentication/functions/registerAuthenticationProvider"}}');var t=i(62540),o=i(43023);const r={},c="Function: getSession()",d={},a=[{value:"Call Signature",id:"call-signature",level:2},{value:"Parameters",id:"parameters",level:3},{value:"providerId",id:"providerid",level:4},{value:"scopes",id:"scopes",level:4},{value:"options",id:"options",level:4},{value:"Returns",id:"returns",level:3},{value:"Call Signature",id:"call-signature-1",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"providerId",id:"providerid-1",level:4},{value:"scopes",id:"scopes-1",level:4},{value:"options?",id:"options-1",level:4},{value:"Returns",id:"returns-1",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-getsession",children:"Function: getSession()"})}),"\n",(0,t.jsx)(n.h2,{id:"call-signature",children:"Call Signature"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"getSession"}),"(",(0,t.jsx)(n.code,{children:"providerId"}),", ",(0,t.jsx)(n.code,{children:"scopes"}),", ",(0,t.jsx)(n.code,{children:"options"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/89a4a47f0a22d942f5b80b6f12dee72093ec358b/packages/extension-api/src/extension-api.d.ts#L4180",children:"packages/extension-api/src/extension-api.d.ts:4180"})]}),"\n",(0,t.jsx)(n.p,{children:"Get an authentication session matching the desired scopes. Rejects if a provider with providerId is not\nregistered, or if the user does not consent to sharing authentication information with\nthe extension. If there are multiple sessions with the same scopes, the user will be shown a\nquickpick to select which account they would like to use."}),"\n",(0,t.jsx)(n.p,{children:"Currently, there are only two authentication providers that are contributed from built in extensions\nto VS Code that implement GitHub and Microsoft authentication: their providerId's are 'github' and 'microsoft'."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"providerid",children:"providerId"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The id of the provider to use"}),"\n",(0,t.jsx)(n.h4,{id:"scopes",children:"scopes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"A list of scopes representing the permissions requested. These are dependent on the authentication provider"}),"\n",(0,t.jsx)(n.h4,{id:"options",children:"options"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions",children:(0,t.jsx)(n.code,{children:"AuthenticationGetSessionOptions"})})," & ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"#GetSessionOptions",children:"getSessionOptions"})," to use"]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"A promise that resolves to an authentication session"}),"\n",(0,t.jsx)(n.h2,{id:"call-signature-1",children:"Call Signature"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"getSession"}),"(",(0,t.jsx)(n.code,{children:"providerId"}),", ",(0,t.jsx)(n.code,{children:"scopes"}),", ",(0,t.jsx)(n.code,{children:"options"}),"?): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/SoniaSandler/podman-desktop/blob/89a4a47f0a22d942f5b80b6f12dee72093ec358b/packages/extension-api/src/extension-api.d.ts#L4199",children:"packages/extension-api/src/extension-api.d.ts:4199"})]}),"\n",(0,t.jsx)(n.p,{children:"Get an authentication session matching the desired scopes. Rejects if a provider with providerId is not\nregistered, or if the user does not consent to sharing authentication information with\nthe extension. If there are multiple sessions with the same scopes, the user will be shown a\nquickpick to select which account they would like to use."}),"\n",(0,t.jsx)(n.p,{children:"Currently, there are only two authentication providers that are contributed from built in extensions\nto VS Code that implement GitHub and Microsoft authentication: their providerId's are 'github' and 'microsoft'."}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.h4,{id:"providerid-1",children:"providerId"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The id of the provider to use"}),"\n",(0,t.jsx)(n.h4,{id:"scopes-1",children:"scopes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"A list of scopes representing the permissions requested. These are dependent on the authentication provider"}),"\n",(0,t.jsx)(n.h4,{id:"options-1",children:"options?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationGetSessionOptions",children:(0,t.jsx)(n.code,{children:"AuthenticationGetSessionOptions"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"#GetSessionOptions",children:"getSessionOptions"})," to use"]}),"\n",(0,t.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.a,{href:"/api/interfaces/AuthenticationSession",children:(0,t.jsx)(n.code,{children:"AuthenticationSession"})}),">"]}),"\n",(0,t.jsx)(n.p,{children:"A promise that resolves to an authentication session if available, or undefined if there are no sessions"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(63696);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);