const $r="5.2.3",Vn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Vn);let ae=!1;function Hn(){ae=!0}Hn();const Wr=1,Gr=2,zr=4,Zr=8,Xr=16,Un=1,Kn=2,rn=4,Yn=8,$n=16,tn=1,Wn=2,T=Symbol(),un=!1;var sn=Array.isArray,Gn=Array.from,zn=Object.defineProperty,j=Object.getOwnPropertyDescriptor,Zn=Object.getOwnPropertyDescriptors,Xn=Object.prototype,Jn=Array.prototype,ln=Object.getPrototypeOf;function ie(e){return typeof e=="function"}const Se=()=>{};function Qn(e){return e()}function Ae(e){for(var n=0;n<e.length;n++)e[n]()}function Jr(e,n,r=!1){return e===void 0?r?n():n:e}const N=2,fn=4,oe=8,Ne=16,C=32,ce=64,Y=128,we=256,b=512,B=1024,ee=2048,J=4096,_e=8192,er=16384,me=32768,an=65536,nr=1<<18,on=1<<19,M=Symbol("$state"),cn=Symbol("legacy props"),Qr=Symbol("");function _n(e){return e===this.v}function rr(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Re(e){return!rr(e,this.v)}function tr(e){throw new Error("effect_in_teardown")}function ur(){throw new Error("effect_in_unowned_derived")}function ir(e){throw new Error("effect_orphan")}function sr(){throw new Error("effect_update_depth_exceeded")}function et(e){throw new Error("lifecycle_legacy_only")}function lr(e){throw new Error("props_invalid_value")}function fr(){throw new Error("state_descriptors_fixed")}function ar(){throw new Error("state_prototype_fixed")}function or(){throw new Error("state_unsafe_local_read")}function cr(){throw new Error("state_unsafe_mutation")}function P(e){return{f:0,v:e,reactions:null,equals:_n,version:0}}function nt(e){return vn(P(e))}function Le(e,n=!1){var t;const r=P(e);return n||(r.equals=Re),ae&&p!==null&&p.l!==null&&((t=p.l).s??(t.s=[])).push(r),r}function rt(e,n=!1){return vn(Le(e,n))}function vn(e){return h!==null&&h.f&N&&(D===null?xr([e]):D.push(e)),e}function Ke(e,n){return A(e,K(()=>E(e))),n}function A(e,n){return h!==null&&ke()&&h.f&(N|Ne)&&(D===null||!D.includes(e))&&cr(),_r(e,n)}function _r(e,n){return e.equals(n)||(e.v=n,e.version=In(),dn(e,B),ke()&&d!==null&&d.f&b&&!(d.f&C)&&(g!==null&&g.includes(e)?(I(d,B),be(d)):k===null?Tr([e]):k.push(e))),n}function dn(e,n){var r=e.reactions;if(r!==null)for(var t=ke(),u=r.length,i=0;i<u;i++){var s=r[i],c=s.f;c&B||!t&&s===d||(I(s,n),c&(b|Y)&&(c&N?dn(s,ee):be(s)))}}function ye(e){var n=N|B;d===null?n|=Y:d.f|=on;const r={children:null,ctx:p,deps:null,equals:_n,f:n,fn:e,reactions:null,v:null,version:0,parent:d};if(h!==null&&h.f&N){var t=h;(t.children??(t.children=[])).push(r)}return r}function vr(e){const n=ye(e);return n.equals=Re,n}function pn(e){var n=e.children;if(n!==null){e.children=null;for(var r=0;r<n.length;r+=1){var t=n[r];t.f&N?Me(t):re(t)}}}function hn(e){var n,r=d;R(e.parent);try{pn(e),n=Dn(e)}finally{R(r)}return n}function wn(e){var n=hn(e),r=(z||e.f&Y)&&e.deps!==null?ee:b;I(e,r),e.equals(n)||(e.v=n,e.version=In())}function Me(e){pn(e),fe(e,0),I(e,_e),e.v=e.children=e.deps=e.ctx=e.reactions=null}function yn(e){d===null&&h===null&&ir(),h!==null&&h.f&Y&&ur(),je&&tr()}function dr(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function ne(e,n,r,t=!0){var u=(e&ce)!==0,i=d,s={ctx:p,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|B,first:null,fn:n,last:null,next:null,parent:u?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var c=Z;try{We(!0),ve(s),s.f|=er}catch(a){throw re(s),a}finally{We(c)}}else n!==null&&be(s);var o=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&on)===0;if(!o&&!u&&t&&(i!==null&&dr(s,i),h!==null&&h.f&N)){var l=h;(l.children??(l.children=[])).push(s)}return s}function En(e){const n=ne(oe,null,!1);return I(n,b),n.teardown=e,n}function Ye(e){yn();var n=d!==null&&(d.f&C)!==0&&p!==null&&!p.m;if(n){var r=p;(r.e??(r.e=[])).push({fn:e,effect:d,reaction:h})}else{var t=gn(e);return t}}function pr(e){return yn(),qe(e)}function hr(e){const n=ne(ce,e,!0);return()=>{re(n)}}function gn(e){return ne(fn,e,!1)}function tt(e,n){var r=p,t={effect:null,ran:!1};r.l.r1.push(t),t.effect=qe(()=>{e(),!t.ran&&(t.ran=!0,A(r.l.r2,!0),K(n))})}function ut(){var e=p;qe(()=>{if(E(e.l.r2)){for(var n of e.l.r1){var r=n.effect;r.f&b&&I(r,ee),te(r)&&ve(r),n.ran=!1}e.l.r2.v=!1}})}function qe(e){return ne(oe,e,!0)}function it(e){return Fe(e)}function Fe(e,n=0){return ne(oe|Ne|n,e,!0)}function Ee(e,n=!0){return ne(oe|C,e,!0,n)}function mn(e){var n=e.teardown;if(n!==null){const r=je,t=h;Ge(!0),V(null);try{n.call(null)}finally{Ge(r),V(t)}}}function bn(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var r=0;r<n.length;r+=1)Me(n[r])}}function xn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;re(r,n),r=t}}function wr(e){for(var n=e.first;n!==null;){var r=n.next;n.f&C||re(n),n=r}}function re(e,n=!0){var r=!1;if((n||e.f&nr)&&e.nodes_start!==null){for(var t=e.nodes_start,u=e.nodes_end;t!==null;){var i=t===u?null:He(t);t.remove(),t=i}r=!0}xn(e,n&&!r),bn(e),fe(e,0),I(e,_e);var s=e.transitions;if(s!==null)for(const o of s)o.stop();mn(e);var c=e.parent;c!==null&&c.first!==null&&Tn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Tn(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Oe(e,n){var r=[];Sn(e,r,!0),yr(r,()=>{re(e),n&&n()})}function yr(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var u of e)u.out(t)}else n()}function Sn(e,n,r){if(!(e.f&J)){if(e.f^=J,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&n.push(s);for(var t=e.first;t!==null;){var u=t.next,i=(t.f&me)!==0||(t.f&C)!==0;Sn(t,n,i?r:!1),t=u}}}function $e(e){An(e,!0)}function An(e,n){if(e.f&J){te(e)&&ve(e),e.f^=J;for(var r=e.first;r!==null;){var t=r.next,u=(r.f&me)!==0||(r.f&C)!==0;An(r,u?n:!1),r=t}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let ge=!1,Pe=[];function On(){ge=!1;const e=Pe.slice();Pe=[],Ae(e)}function Er(e){ge||(ge=!0,queueMicrotask(On)),Pe.push(e)}function gr(){ge&&On()}function mr(e){throw new Error("lifecycle_outside_component")}const Pn=0,br=1;let he=Pn,le=!1,Z=!1,je=!1;function We(e){Z=e}function Ge(e){je=e}let U=[],X=0;let h=null;function V(e){h=e}let d=null;function R(e){d=e}let D=null;function xr(e){D=e}let g=null,S=0,k=null;function Tr(e){k=e}let Cn=0,z=!1,F=null,p=null;function In(){return++Cn}function ke(){return!ae||p!==null&&p.l===null}function te(e){var s,c;var n=e.f;if(n&B)return!0;if(n&ee){var r=e.deps,t=(n&Y)!==0;if(r!==null){var u;if(n&we){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(e);e.f^=we}for(u=0;u<r.length;u++){var i=r[u];if(te(i)&&wn(i),t&&d!==null&&!z&&!((c=i==null?void 0:i.reactions)!=null&&c.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}t||I(e,b)}return!1}function Sr(e,n,r){throw e}function Dn(e){var _;var n=g,r=S,t=k,u=h,i=z,s=D,c=p,o=e.f;g=null,S=0,k=null,h=o&(C|ce)?null:e,z=!Z&&(o&Y)!==0,D=null,p=e.ctx;try{var l=(0,e.fn)(),a=e.deps;if(g!==null){var f;if(fe(e,S),a!==null&&S>0)for(a.length=S+g.length,f=0;f<g.length;f++)a[S+f]=g[f];else e.deps=a=g;if(!z)for(f=S;f<a.length;f++)((_=a[f]).reactions??(_.reactions=[])).push(e)}else a!==null&&S<a.length&&(fe(e,S),a.length=S);return l}finally{g=n,S=r,k=t,h=u,z=i,D=s,p=c}}function Ar(e,n){let r=n.reactions;if(r!==null){var t=r.indexOf(e);if(t!==-1){var u=r.length-1;u===0?r=n.reactions=null:(r[t]=r[u],r.pop())}}r===null&&n.f&N&&(g===null||!g.includes(n))&&(I(n,ee),n.f&(Y|we)||(n.f^=we),fe(n,0))}function fe(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Ar(e,r[t])}function ve(e){var n=e.f;if(!(n&_e)){I(e,b);var r=d;d=e;try{n&Ne?wr(e):xn(e),bn(e),mn(e);var t=Dn(e);e.teardown=typeof t=="function"?t:null,e.version=Cn}catch(u){Sr(u)}finally{d=r}}}function Nn(){X>1e3&&(X=0,sr()),X++}function Rn(e){var n=e.length;if(n!==0){Nn();var r=Z;Z=!0;try{for(var t=0;t<n;t++){var u=e[t];u.f&b||(u.f^=b);var i=[];Ln(u,i),Or(i)}}finally{Z=r}}}function Or(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];!(t.f&(_e|J))&&te(t)&&(ve(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Tn(t):t.fn=null))}}function Pr(){if(le=!1,X>1001)return;const e=U;U=[],Rn(e),le||(X=0)}function be(e){he===Pn&&(le||(le=!0,queueMicrotask(Pr)));for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(r&(ce|C)){if(!(r&b))return;n.f^=b}}U.push(n)}function Ln(e,n){var r=e.first,t=[];e:for(;r!==null;){var u=r.f,i=(u&C)!==0,s=i&&(u&b)!==0;if(!s&&!(u&J))if(u&oe){i?r.f^=b:te(r)&&ve(r);var c=r.first;if(c!==null){r=c;continue}}else u&fn&&t.push(r);var o=r.next;if(o===null){let f=r.parent;for(;f!==null;){if(e===f)break e;var l=f.next;if(l!==null){r=l;continue e}f=f.parent}}r=o}for(var a=0;a<t.length;a++)c=t[a],n.push(c),Ln(c,n)}function Mn(e){var n=he,r=U;try{Nn();const u=[];he=br,U=u,le=!1,Rn(r);var t=e==null?void 0:e();return gr(),(U.length>0||u.length>0)&&Mn(),X=0,t}finally{he=n,U=r}}async function st(){await Promise.resolve(),Mn()}function E(e){var c;var n=e.f,r=(n&N)!==0;if(r&&n&_e){var t=hn(e);return Me(e),t}if(F!==null&&F.add(e),h!==null){D!==null&&D.includes(e)&&or();var u=h.deps;g===null&&u!==null&&u[S]===e?S++:g===null?g=[e]:g.push(e),k!==null&&d!==null&&d.f&b&&!(d.f&C)&&k.includes(e)&&(I(d,B),be(d))}else if(r&&e.deps===null){var i=e,s=i.parent;s!==null&&!((c=s.deriveds)!=null&&c.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return r&&(i=e,te(i)&&wn(i)),e.v}function lt(e){var n=F;F=new Set;var r=F,t;try{if(K(e),n!==null)for(t of F)n.add(t)}finally{F=n}for(t of r)if(t.f&an)for(const u of t.deps||[])u.f&N||Ke(u,null);else Ke(t,null)}function K(e){const n=h;try{return h=null,e()}finally{h=n}}const Cr=~(B|ee|b);function I(e,n){e.f=e.f&Cr|n}function ft(e){return Be().get(e)}function at(e,n){return Be().set(e,n),n}function ot(e){return Be().has(e)}function Be(e){return p===null&&mr(),p.c??(p.c=new Map(Ir(p)||void 0))}function Ir(e){let n=e.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ze(e,n=1){var r=+E(e);return A(e,r+n),r}function ct(e,n){var r={};for(var t in e)n.includes(t)||(r[t]=e[t]);return r}function Dr(e,n=!1,r){p={p,c:null,e:null,m:!1,s:e,x:null,l:null},ae&&!n&&(p.l={s:null,u:null,r1:[],r2:P(!1)})}function Nr(e){const n=p;if(n!==null){e!==void 0&&(n.x=e);const s=n.e;if(s!==null){var r=d,t=h;n.e=null;try{for(var u=0;u<s.length;u++){var i=s[u];R(i.effect),V(i.reaction),gn(i.fn)}}finally{R(r),V(t)}}p=n.p,n.m=!0}return e||{}}function Rr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(M in e)Ce(e);else if(!Array.isArray(e))for(let n in e){const r=e[n];typeof r=="object"&&r&&M in r&&Ce(r)}}}function Ce(e,n=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!n.has(e)){n.add(e),e instanceof Date&&e.getTime();for(let t in e)try{Ce(e[t],n)}catch{}const r=ln(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const t=Zn(r);for(let u in t){const i=t[u].get;if(i)try{i.call(e)}catch{}}}}}function G(e,n=null,r){if(typeof e!="object"||e===null||M in e)return e;const t=ln(e);if(t!==Xn&&t!==Jn)return e;var u=new Map,i=sn(e),s=P(0);i&&u.set("length",P(e.length));var c;return new Proxy(e,{defineProperty(o,l,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&fr();var f=u.get(l);return f===void 0?(f=P(a.value),u.set(l,f)):A(f,G(a.value,c)),!0},deleteProperty(o,l){var a=u.get(l);if(a===void 0)l in o&&u.set(l,P(T));else{if(i&&typeof l=="string"){var f=u.get("length"),_=Number(l);Number.isInteger(_)&&_<f.v&&A(f,_)}A(a,T),Ze(s)}return!0},get(o,l,a){var w;if(l===M)return e;var f=u.get(l),_=l in o;if(f===void 0&&(!_||(w=j(o,l))!=null&&w.writable)&&(f=P(G(_?o[l]:T,c)),u.set(l,f)),f!==void 0){var v=E(f);return v===T?void 0:v}return Reflect.get(o,l,a)},getOwnPropertyDescriptor(o,l){var a=Reflect.getOwnPropertyDescriptor(o,l);if(a&&"value"in a){var f=u.get(l);f&&(a.value=E(f))}else if(a===void 0){var _=u.get(l),v=_==null?void 0:_.v;if(_!==void 0&&v!==T)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return a},has(o,l){var v;if(l===M)return!0;var a=u.get(l),f=a!==void 0&&a.v!==T||Reflect.has(o,l);if(a!==void 0||d!==null&&(!f||(v=j(o,l))!=null&&v.writable)){a===void 0&&(a=P(f?G(o[l],c):T),u.set(l,a));var _=E(a);if(_===T)return!1}return f},set(o,l,a,f){var O;var _=u.get(l),v=l in o;if(i&&l==="length")for(var w=a;w<_.v;w+=1){var m=u.get(w+"");m!==void 0?A(m,T):w in o&&(m=P(T),u.set(w+"",m))}_===void 0?(!v||(O=j(o,l))!=null&&O.writable)&&(_=P(void 0),A(_,G(a,c)),u.set(l,_)):(v=_.v!==T,A(_,G(a,c)));var x=Reflect.getOwnPropertyDescriptor(o,l);if(x!=null&&x.set&&x.set.call(f,a),!v){if(i&&typeof l=="string"){var H=u.get("length"),q=Number(l);Number.isInteger(q)&&q>=H.v&&A(H,q+1)}Ze(s)}return!0},ownKeys(o){E(s);var l=Reflect.ownKeys(o).filter(_=>{var v=u.get(_);return v===void 0||v.v!==T});for(var[a,f]of u)f.v!==T&&!(a in o)&&l.push(a);return l},setPrototypeOf(){ar()}})}function Ze(e,n=1){A(e,e.v+n)}function Xe(e){return e!==null&&typeof e=="object"&&M in e?e[M]:e}function _t(e,n){return Object.is(Xe(e),Xe(n))}var Je,qn,Fn;function Lr(){if(Je===void 0){Je=window;var e=Element.prototype,n=Node.prototype;qn=j(n,"firstChild").get,Fn=j(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ve(e=""){return document.createTextNode(e)}function L(e){return qn.call(e)}function He(e){return Fn.call(e)}function vt(e,n){return L(e)}function dt(e,n){{var r=L(e);return r instanceof Comment&&r.data===""?He(r):r}}function pt(e,n=1,r=!1){let t=e;for(;n--;)t=He(t);return t}function ht(e){e.textContent=""}let Qe=!1;function Mr(){Qe||(Qe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const r of e.target.elements)(n=r.__on_r)==null||n.call(r)})},{capture:!0}))}function jn(e){var n=h,r=d;V(null),R(null);try{return e()}finally{V(n),R(r)}}function wt(e,n,r,t=r){e.addEventListener(n,()=>jn(r));const u=e.__on_r;u?e.__on_r=()=>{u(),t()}:e.__on_r=t,Mr()}const kn=new Set,Ie=new Set;function qr(e,n,r,t){function u(i){if(t.capture||se.call(n,i),!i.cancelBubble)return jn(()=>r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Er(()=>{n.addEventListener(e,u,t)}):n.addEventListener(e,u,t),u}function yt(e,n,r,t,u){var i={capture:t,passive:u},s=qr(e,n,r,i);(n===document.body||n===window||n===document)&&En(()=>{n.removeEventListener(e,s,i)})}function Et(e){for(var n=0;n<e.length;n++)kn.add(e[n]);for(var r of Ie)r(e)}function se(e){var q;var n=this,r=n.ownerDocument,t=e.type,u=((q=e.composedPath)==null?void 0:q.call(e))||[],i=u[0]||e.target,s=0,c=e.__root;if(c){var o=u.indexOf(c);if(o!==-1&&(n===document||n===window)){e.__root=n;return}var l=u.indexOf(n);if(l===-1)return;o<=l&&(s=o)}if(i=u[s]||e.target,i!==n){zn(e,"currentTarget",{configurable:!0,get(){return i||r}});var a=h,f=d;V(null),R(null);try{for(var _,v=[];i!==null;){var w=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+t];if(m!==void 0&&!i.disabled)if(sn(m)){var[x,...H]=m;x.apply(i,[e,...H])}else m.call(i,e)}catch(O){_?v.push(O):_=O}if(e.cancelBubble||w===n||w===null)break;i=w}if(_){for(let O of v)queueMicrotask(()=>{throw O});throw _}}finally{e.__root=n,delete e.currentTarget,V(a),R(f)}}}function Bn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Q(e,n){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function gt(e,n){var r=(n&tn)!==0,t=(n&Wn)!==0,u,i=!e.startsWith("<!>");return()=>{u===void 0&&(u=Bn(i?e:"<!>"+e),r||(u=L(u)));var s=t?document.importNode(u,!0):u.cloneNode(!0);if(r){var c=L(s),o=s.lastChild;Q(c,o)}else Q(s,s);return s}}function mt(e,n,r="svg"){var t=!e.startsWith("<!>"),u=(n&tn)!==0,i=`<${r}>${t?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var c=Bn(i),o=L(c);if(u)for(s=document.createDocumentFragment();L(o);)s.appendChild(L(o));else s=L(o)}var l=s.cloneNode(!0);if(u){var a=L(l),f=l.lastChild;Q(a,f)}else Q(l,l);return l}}function bt(e=""){{var n=Ve(e+"");return Q(n,n),n}}function xt(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Ve();return e.append(n,r),Q(n,r),e}function Tt(e,n){e!==null&&e.before(n)}const Fr=["touchstart","touchmove"];function jr(e){return Fr.includes(e)}function St(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function At(e,n){return kr(e,n)}const W=new Map;function kr(e,{target:n,anchor:r,props:t={},events:u,context:i,intro:s=!0}){Lr();var c=new Set,o=f=>{for(var _=0;_<f.length;_++){var v=f[_];if(!c.has(v)){c.add(v);var w=jr(v);n.addEventListener(v,se,{passive:w});var m=W.get(v);m===void 0?(document.addEventListener(v,se,{passive:w}),W.set(v,1)):W.set(v,m+1)}}};o(Gn(kn)),Ie.add(o);var l=void 0,a=hr(()=>{var f=r??n.appendChild(Ve());return Ee(()=>{if(i){Dr({});var _=p;_.c=i}u&&(t.$$events=u),l=e(f,t)||{},i&&Nr()}),()=>{var w;for(var _ of c){n.removeEventListener(_,se);var v=W.get(_);--v===0?(document.removeEventListener(_,se),W.delete(_)):W.set(_,v)}Ie.delete(o),De.delete(l),f!==r&&((w=f.parentNode)==null||w.removeChild(f))}});return De.set(l,a),l}let De=new WeakMap;function Ot(e){const n=De.get(e);n&&n()}function Pt(e,n,r,t=null,u=!1){var i=e,s=null,c=null,o=null,l=u?me:0;Fe(()=>{o!==(o=!!n())&&(o?(s?$e(s):s=Ee(()=>r(i)),c&&Oe(c,()=>{c=null})):(c?$e(c):t&&(c=Ee(()=>t(i))),s&&Oe(s,()=>{s=null})))},l)}function Ct(e,n,r){var t=e,u,i;Fe(()=>{u!==(u=n())&&(i&&(Oe(i),i=null),u&&(i=Ee(()=>r(t,u))))},me)}function It(e=!1){const n=p,r=n.l.u;if(!r)return;let t=()=>Rr(n.s);if(e){let u=0,i={};const s=ye(()=>{let c=!1;const o=n.s;for(const l in o)o[l]!==i[l]&&(i[l]=o[l],c=!0);return c&&u++,u});t=()=>E(s)}r.b.length&&pr(()=>{en(n,t),Ae(r.b)}),Ye(()=>{const u=K(()=>r.m.map(Qn));return()=>{for(const i of u)typeof i=="function"&&i()}}),r.a.length&&Ye(()=>{en(n,t),Ae(r.a)})}function en(e,n){if(e.l.s)for(const r of e.l.s)E(r);n()}function Br(e,n,r){if(e==null)return n(void 0),Se;const t=K(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}let pe=!1;function Dt(e,n,r){const t=r[n]??(r[n]={store:null,source:Le(void 0),unsubscribe:Se});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=Se;else{var u=!0;t.unsubscribe=Br(e,i=>{u?t.source.v=i:A(t.source,i)}),u=!1}return E(t.source)}function Nt(){const e={};return En(()=>{for(var n in e)e[n].unsubscribe()}),e}function Vr(e){var n=pe;try{return pe=!1,[e(),pe]}finally{pe=n}}const Hr={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Rt(e,n,r){return new Proxy({props:e,exclude:n},Hr)}const Ur={get(e,n){if(!e.exclude.includes(n))return E(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,r){return n in e.special||(e.special[n]=Yr({get[n](){return e.props[n]}},n,rn)),e.special[n](r),ze(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),ze(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Lt(e,n){return new Proxy({props:e,exclude:n,special:{},version:P(0)},Ur)}const Kr={get(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(ie(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t)return t[n]}},set(e,n,r){let t=e.props.length;for(;t--;){let u=e.props[t];ie(u)&&(u=u());const i=j(u,n);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,n){let r=e.props.length;for(;r--;){let t=e.props[r];if(ie(t)&&(t=t()),typeof t=="object"&&t!==null&&n in t){const u=j(t,n);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,n){if(n===M||n===cn)return!1;for(let r of e.props)if(ie(r)&&(r=r()),r!=null&&n in r)return!0;return!1},ownKeys(e){const n=[];for(let r of e.props){ie(r)&&(r=r());for(const t in r)n.includes(t)||n.push(t)}return n}};function Mt(...e){return new Proxy({props:e},Kr)}function nn(e){for(var n=d,r=d;n!==null&&!(n.f&(C|ce));)n=n.parent;try{return R(n),e()}finally{R(r)}}function Yr(e,n,r,t){var Ue;var u=(r&Un)!==0,i=!ae||(r&Kn)!==0,s=(r&Yn)!==0,c=(r&$n)!==0,o=!1,l;s?[l,o]=Vr(()=>e[n]):l=e[n];var a=M in e||cn in e,f=((Ue=j(e,n))==null?void 0:Ue.set)??(a&&s&&n in e?y=>e[n]=y:void 0),_=t,v=!0,w=!1,m=()=>(w=!0,v&&(v=!1,c?_=K(t):_=t),_);l===void 0&&t!==void 0&&(f&&i&&lr(),l=m(),f&&f(l));var x;if(i)x=()=>{var y=e[n];return y===void 0?m():(v=!0,w=!1,y)};else{var H=nn(()=>(u?ye:vr)(()=>e[n]));H.f|=an,x=()=>{var y=E(H);return y!==void 0&&(_=void 0),y===void 0?_:y}}if(!(r&rn))return x;if(f){var q=e.$$legacy;return function(y,$){return arguments.length>0?((!i||!$||q||o)&&f($?x():y),y):x()}}var O=!1,xe=!1,de=Le(l),ue=nn(()=>ye(()=>{var y=x(),$=E(de);return O?(O=!1,xe=!0,$):(xe=!1,de.v=y)}));return u||(ue.equals=Re),function(y,$){if(F!==null&&(O=xe,x(),E(de)),arguments.length>0){const Te=$?E(ue):i&&s?G(y):y;return ue.equals(Te)||(O=!0,A(de,Te),w&&_!==void 0&&(_=Te),K(()=>E(ue))),y}return E(ue)}}export{nt as $,K as A,Er as B,p as C,mr as D,ae as E,Ye as F,sn as G,et as H,tt as I,Rr as J,ut as K,yt as L,Qr as M,ln as N,Zn as O,rr as P,Nt as Q,Dt as R,M as S,Fe as T,me as U,Ee as V,re as W,at as X,G as Y,ot as Z,ft as _,Tt as a,Rt as a0,ye as a1,At as a2,Ot as a3,Ve as a4,Gn as a5,J as a6,$e as a7,Oe as a8,d as a9,Wr as aa,_r as ab,Gr as ac,Sn as ad,ht as ae,yr as af,zr as ag,h as ah,Zr as ai,Le as aj,P as ak,Xr as al,He as am,ke as an,wt as ao,En as ap,j as aq,_t as ar,Et as as,Je as at,ze as au,Ke as av,st as aw,lt as ax,$r as ay,Jr as az,Nr as b,Mt as c,bt as d,it as e,dt as f,St as g,ct as h,It as i,vt as j,xt as k,E as l,vr as m,Se as n,Lt as o,Dr as p,Yr as q,Pt as r,pt as s,gt as t,mt as u,A as v,Ct as w,rt as x,gn as y,qe as z};
