import{p as ie,q as l,I as q,l as a,J as b,v as S,K as se,i as ne,k as re,f as P,r as j,a as x,b as oe,w as B,e as V,u as E,j as z,g as de,s as Q,t as fe}from"./props-CgX5WNIy.js";import{s as i,a as ye,t as p}from"./class-KDfw0akG.js";import{b as ue}from"./index-client-_dJy68IQ.js";function xe(s,e,t,y,m){var u;var f=(u=e.$$slots)==null?void 0:u[t],c=!1;f===!0&&(f=e[t==="default"?"children":t],c=!0),f===void 0||f(s,c?()=>y:y)}function he(s){const e={};s.children&&(e.default=!0);for(const t in s.$$slots)e[t]=!0;return e}function R(s,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?s.style.fontSize=e.replace("x","em"):s.style.fontSize=""}function pe(s,e,t,y,m,f=1,c="",u=""){let k=1,o=1;m&&(m=="horizontal"?k=-1:m=="vertical"?o=-1:k=o=-1),typeof s=="string"&&(s=parseFloat(s)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const g=`${e*f}${c}`,C=`${t*f}${c}`;let w=`translate(${g},${C}) scale(${k*s},${o*s})`;return y&&(w+=` rotate(${y}${u})`),w}var ce=fe('<title class="svelte-bvo74f"> </title>'),ve=E('<path class="svelte-bvo74f"></path>'),be=E('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),me=E('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function ke(s,e){ie(e,!1);const t=B(),y=B();let m=l(e,"class",24,()=>{}),f=l(e,"id",24,()=>{}),c=l(e,"style",24,()=>{}),u=l(e,"icon",8),k=l(e,"title",24,()=>{}),o=l(e,"size",24,()=>{}),g=l(e,"color",24,()=>{}),C=l(e,"fw",8,!1),w=l(e,"pull",24,()=>{}),I=l(e,"scale",8,1),J=l(e,"translateX",8,0),K=l(e,"translateY",8,0),X=l(e,"rotate",24,()=>{}),Y=l(e,"flip",24,()=>{}),T=l(e,"spin",8,!1),W=l(e,"pulse",8,!1),A=l(e,"primaryColor",8,""),Z=l(e,"secondaryColor",8,""),D=l(e,"primaryOpacity",8,1),G=l(e,"secondaryOpacity",8,.4),H=l(e,"swapOpacity",8,!1),_=B();q(()=>(a(_),b(o()),R),()=>{a(_)&&o()&&R(a(_),o())}),q(()=>b(u()),()=>{S(t,u()&&u().icon||[0,0,"",[],""])}),q(()=>(b(I()),b(J()),b(K()),b(X()),b(Y())),()=>{S(y,pe(I(),J(),K(),X(),Y(),512))}),se(),ne();var L=re(),U=P(L);{var $=O=>{var n=me(),M=z(n);{var ee=r=>{var d=ce(),v=z(d);V(()=>de(v,k())),x(r,d)};j(M,r=>{k()&&r(ee)})}var F=Q(M),N=z(F),te=z(N);{var le=r=>{var d=ve();V(()=>{i(d,"d",a(t)[4]),i(d,"fill",g()||A()||"currentColor"),i(d,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),x(r,d)},ae=r=>{var d=be(),v=P(d),h=Q(v);V(()=>{i(v,"d",a(t)[4][0]),i(v,"fill",Z()||g()||"currentColor"),i(v,"fill-opacity",H()!=!1?D():G()),i(v,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`),i(h,"d",a(t)[4][1]),i(h,"fill",A()||g()||"currentColor"),i(h,"fill-opacity",H()!=!1?G():D()),i(h,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),x(r,d)};j(te,r=>{typeof a(t)[4]=="string"?r(le):r(ae,!1)})}ue(n,r=>S(_,r),()=>a(_)),V(()=>{i(n,"id",f()),ye(n,`svelte-fa svelte-fa-base ${m()??""} svelte-bvo74f`),i(n,"style",c()),i(n,"viewBox",`0 0 ${a(t)[0]??""} ${a(t)[1]??""}`),p(n,"pulse",W()),p(n,"svelte-fa-size-lg",o()==="lg"),p(n,"svelte-fa-size-sm",o()==="sm"),p(n,"svelte-fa-size-xs",o()==="xs"),p(n,"svelte-fa-fw",C()),p(n,"svelte-fa-pull-left",w()==="left"),p(n,"svelte-fa-pull-right",w()==="right"),p(n,"spin",T()),i(F,"transform",`translate(${a(t)[0]/2} ${a(t)[1]/2})`),i(F,"transform-origin",`${a(t)[0]/4} 0`),i(N,"transform",a(y))}),x(O,n)};j(U,O=>{a(t)[4]&&O($)})}x(s,L),oe()}ke.__docgen={version:3,name:"fa.svelte",data:[{name:"class",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"style",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"color",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"fw",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pull",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"scale",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"translateX",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"translateY",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"rotate",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"flip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"spin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"primaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"secondaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"primaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"secondaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0.4"},{name:"swapOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{ke as F,xe as a,he as s};
