import{p as ie,q as l,I as q,J as se,i as ne,k as re,f as P,u as S,a as _,b as oe,l as a,w as j,L as v,v as B,r as z,j as h,s as Q,e as V,m as de,g as fe}from"./props-Cs52APQW.js";import{s as i,a as ye,b as ue}from"./attributes-CQwYBthq.js";import{b as pe}from"./index-client-BG3fyLW7.js";function he(s,e,t,f,b){var y;var d=(y=e.$$slots)==null?void 0:y[t],u=!1;d===!0&&(d=e[t==="default"?"children":t],u=!0),d===void 0||d(s,u?()=>f:f)}function Ve(s){const e={};s.children&&(e.default=!0);for(const t in s.$$slots)e[t]=!0;return e}function R(s,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?s.style.fontSize=e.replace("x","em"):s.style.fontSize=""}function ce(s,e,t,f,b,d=1,u="",y=""){let m=1,r=1;b&&(b=="horizontal"?m=-1:b=="vertical"?r=-1:m=r=-1),typeof s=="string"&&(s=parseFloat(s)),typeof e=="string"&&(e=parseFloat(e)),typeof t=="string"&&(t=parseFloat(t));const k=`${e*d}${u}`,C=`${t*d}${u}`;let g=`translate(${k},${C}) scale(${m*s},${r*s})`;return f&&(g+=` rotate(${f}${y})`),g}var ve=z('<title class="svelte-bvo74f"> </title>'),be=z('<path class="svelte-bvo74f"></path>'),me=z('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),ke=z('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function ge(s,e){ie(e,!1);const t=j(),f=j();let b=l(e,"class",24,()=>{}),d=l(e,"id",24,()=>{}),u=l(e,"style",24,()=>{}),y=l(e,"icon",8),m=l(e,"title",24,()=>{}),r=l(e,"size",24,()=>{}),k=l(e,"color",24,()=>{}),C=l(e,"fw",8,!1),g=l(e,"pull",24,()=>{}),E=l(e,"scale",8,1),I=l(e,"translateX",8,0),J=l(e,"translateY",8,0),L=l(e,"rotate",24,()=>{}),X=l(e,"flip",24,()=>{}),T=l(e,"spin",8,!1),W=l(e,"pulse",8,!1),Y=l(e,"primaryColor",8,""),Z=l(e,"secondaryColor",8,""),A=l(e,"primaryOpacity",8,1),D=l(e,"secondaryOpacity",8,.4),G=l(e,"swapOpacity",8,!1),w=j();q(()=>(a(w),v(r()),R),()=>{a(w)&&r()&&R(a(w),r())}),q(()=>v(y()),()=>{B(t,y()&&y().icon||[0,0,"",[],""])}),q(()=>(v(E()),v(I()),v(J()),v(L()),v(X())),()=>{B(f,ce(E(),I(),J(),L(),X(),512))}),se(),ne();var H=re(),U=P(H);{var $=O=>{var p=ke();let K;var M=h(p);{var ee=n=>{var o=ve(),c=h(o);V(()=>fe(c,m())),_(n,o)};S(M,n=>{m()&&n(ee)})}var F=Q(M),N=h(F),te=h(N);{var le=n=>{var o=be();V(()=>{i(o,"d",a(t)[4]),i(o,"fill",k()||Y()||"currentColor"),i(o,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),_(n,o)},ae=n=>{var o=me(),c=P(o),x=Q(c);V(()=>{i(c,"d",a(t)[4][0]),i(c,"fill",Z()||k()||"currentColor"),i(c,"fill-opacity",G()!=!1?A():D()),i(c,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`),i(x,"d",a(t)[4][1]),i(x,"fill",Y()||k()||"currentColor"),i(x,"fill-opacity",G()!=!1?D():A()),i(x,"transform",`translate(${a(t)[0]/-2} ${a(t)[1]/-2})`)}),_(n,o)};S(te,n=>{typeof a(t)[4]=="string"?n(le):n(ae,!1)})}pe(p,n=>B(w,n),()=>a(w)),V(n=>{i(p,"id",d()),K=ye(p,0,`svelte-fa svelte-fa-base ${b()??""}`,"svelte-bvo74f",K,n),ue(p,u()),i(p,"viewBox",`0 0 ${a(t)[0]??""} ${a(t)[1]??""}`),i(F,"transform",`translate(${a(t)[0]/2} ${a(t)[1]/2})`),i(F,"transform-origin",`${a(t)[0]/4} 0`),i(N,"transform",a(f))},[()=>({pulse:W(),"svelte-fa-size-lg":r()==="lg","svelte-fa-size-sm":r()==="sm","svelte-fa-size-xs":r()==="xs","svelte-fa-fw":C(),"svelte-fa-pull-left":g()==="left","svelte-fa-pull-right":g()==="right",spin:T()})],de),_(O,p)};S(U,O=>{a(t)[4]&&O($)})}_(s,H),oe()}ge.__docgen={version:3,name:"fa.svelte",data:[{name:"class",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"style",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"icon",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"color",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"fw",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pull",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"scale",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"translateX",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"translateY",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"rotate",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"flip",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1,defaultValue:"..."},{name:"spin",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"pulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"primaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"secondaryColor",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"primaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"secondaryOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0.4"},{name:"swapOpacity",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{ge as F,he as a,Ve as s};
