function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),l=u?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((n=>{n.c(t)||(f.delete(n),n.f())})),0!==f.size&&l(p)}function d(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const E=new Set;let x,k=0;function j(t,n,e,o,r,s,i,c=0){const u=16.666/o;let a="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*s(t);a+=100*t+`%{${i(o,1-o)}}\n`}const l=a+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${c}`,p=t.ownerDocument;E.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(g("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${l}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,k+=1,f}function C(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),k-=r,k||l((()=>{k||(E.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),E.clear())})))}function O(t){x=t}function S(){if(!x)throw new Error("Function called outside component initialization");return x}function A(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const L=[],P=[],R=[],q=[],D=Promise.resolve();let N=!1;function I(){N||(N=!0,D.then(F))}function M(t){R.push(t)}let T=!1;const z=new Set;function F(){if(!T){T=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];O(n),B(n.$$)}for(O(null),L.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];z.has(n)||(z.add(n),n())}R.length=0}while(L.length);for(;q.length;)q.pop()();N=!1,T=!1,z.clear()}}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}let H;function W(t,n,e){t.dispatchEvent(w(`${n?"intro":"outro"}${e}`))}const Y=new Set;let U;function X(){U={r:0,c:[],p:U}}function G(){U.r||s(U.c),U=U.p}function J(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),U.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Q={duration:0};function V(e,o,r,c){let u=o(e,r),d=c?0:1,h=null,m=null,g=null;function $(){g&&C(e,g)}function y(t,n){const e=t.b-d;return n*=Math.abs(e),{a:d,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function b(o){const{delay:r=0,duration:i=300,easing:c=n,tick:b=t,css:_}=u||Q,v={start:a()+r,b:o};o||(v.group=U,U.r+=1),h||m?m=v:(_&&($(),g=j(e,d,o,i,r,c,_)),o&&b(0,1),h=y(v,i),M((()=>W(e,o,"start"))),function(t){let n;0===f.size&&l(p),new Promise((e=>{f.add(n={c:t,f:e})}))}((t=>{if(m&&t>m.start&&(h=y(m,i),m=null,W(e,h.b,"start"),_&&($(),g=j(e,d,h.b,h.duration,0,c,u.css))),h)if(t>=h.end)b(d=h.b,1-d),W(e,h.b,"end"),m||(h.b?$():--h.group.r||s(h.group.c)),h=null;else if(t>=h.start){const n=t-h.start;d=h.a+h.d*c(n/h.duration),b(d,1-d)}return!(!h&&!m)})))}return{run(t){i(u)?(H||(H=Promise.resolve(),H.then((()=>{H=null}))),H).then((()=>{u=u(),b(t)})):b(t)},end(){$(),h=m=null}}}function Z(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function tt(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function et(t,n,e,r){const{fragment:c,on_mount:u,on_destroy:a,after_update:l}=t.$$;c&&c.m(n,e),r||M((()=>{const n=u.map(o).filter(i);a?a.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(M)}function ot(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(n,e,o,i,c,u,a=[-1]){const l=x;O(n);const f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(L.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&J(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),F()}O(l)}class st{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||"function"!=typeof t.conditions[n])throw Error("Invalid parameter conditions["+n+"]")}t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0);return{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const ct=[];function ut(t,n){return{subscribe:at(t,n).subscribe}}function at(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!ct.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),ct.push(e,n)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function lt(n,e,o){const r=!Array.isArray(n),c=r?[n]:n,u=e.length<2;return ut(o,(n=>{let o=!1;const a=[];let l=0,f=t;const p=()=>{if(l)return;f();const o=e(r?a[0]:a,n);u?n(o):f=i(o)?o:t},d=c.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{a[e]=t,l&=~(1<<e),o&&p()}),(()=>{l|=1<<e}))));return o=!0,p(),function(){s(d),f()}}))}function ft(t){let n,o,r;const s=[t[2]];var i=t[0];function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",t[7])),{c(){n&&nt(n.$$.fragment),o=b()},m(t,e){n&&et(n,t,e),h(t,o,e),r=!0},p(t,e){const r=4&e?Z(s,[tt(t[2])]):{};if(i!==(i=t[0])){if(n){X();const t=n;K(t.$$.fragment,1,0,(()=>{ot(t,1)})),G()}i?(n=new i(c()),n.$on("routeEvent",t[7]),nt(n.$$.fragment),J(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&K(n.$$.fragment,t),r=!1},d(t){t&&m(o),n&&ot(n,t)}}}function pt(t){let n,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c()),n.$on("routeEvent",t[6])),{c(){n&&nt(n.$$.fragment),o=b()},m(t,e){n&&et(n,t,e),h(t,o,e),r=!0},p(t,e){const r=6&e?Z(s,[2&e&&{params:t[1]},4&e&&tt(t[2])]):{};if(i!==(i=t[0])){if(n){X();const t=n;K(t.$$.fragment,1,0,(()=>{ot(t,1)})),G()}i?(n=new i(c()),n.$on("routeEvent",t[6]),nt(n.$$.fragment),J(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else i&&n.$set(r)},i(t){r||(n&&J(n.$$.fragment,t),r=!0)},o(t){n&&K(n.$$.fragment,t),r=!1},d(t){t&&m(o),n&&ot(n,t)}}}function dt(t){let n,e,o,r;const s=[pt,ft],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=b()},m(t,e){i[n].m(t,e),h(t,o,e),r=!0},p(t,[r]){let u=n;n=c(t),n===u?i[n].p(t,r):(X(),K(i[u],1,1,(()=>{i[u]=null})),G(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),J(e,1),e.m(o.parentNode,o))},i(t){r||(J(e),r=!0)},o(t){K(e),r=!1},d(t){i[n].d(t),t&&m(o)}}}function ht(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const mt=ut(null,(function(t){t(ht());const n=()=>{t(ht())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));lt(mt,(t=>t.location)),lt(mt,(t=>t.querystring));const gt=at(void 0);function $t(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let u=null,a=null,l={};const f=function(){const t=S();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=w(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}();async function p(t,n){await(I(),D),f(t,n)}let d=null,h=null;var m;s&&(h=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},S().$$.after_update.push(m));let g=null,$=null;const y=mt.subscribe((async t=>{g=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[n].checkConditions(r))return e(0,u=null),$=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=c[n].component;if($!=s){s.loading?(e(0,u=s.loading),$=s,e(1,a=s.loadingParams),e(2,l={}),p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:a}))):(e(0,u=null),$=null);const n=await s();if(t!=g)return;e(0,u=n&&n.default||n),$=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,a=o):e(1,a=null),e(2,l=c[n].props),void p("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:a})).then((()=>{gt.set(a)}))}e(0,u=null),$=null,gt.set(void 0)}));return function(t){S().$$.on_destroy.push(t)}((()=>{y(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,a,l,o,r,s,function(n){A(t,n)},function(n){A(t,n)}]}class yt extends st{constructor(t){super(),rt(this,t,$t,dt,c,{routes:3,prefix:4,restoreScrollState:5})}}function bt(n){let e;return{c(){e=g("div"),e.innerHTML="<h1>Hello World!</h1>"},m(t,n){h(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}var _t={"/bridge":it({asyncComponent:()=>import("./Bridge.js"),props:{show:1}}),"/noise":it({asyncComponent:()=>import("./Noise.js"),props:{show:1}}),"*":class extends st{constructor(t){super(),rt(this,t,null,bt,c,{})}}};function vt(n){let e,o;return e=new yt({props:{routes:_t}}),{c(){nt(e.$$.fragment)},m(t,n){et(e,t,n),o=!0},p:t,i(t){o||(J(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){ot(e,t)}}}const wt=new class extends st{constructor(t){super(),rt(this,t,null,vt,c,{})}}({target:document.body});export{st as S,v as a,h as b,M as c,V as d,g as e,m as f,y as g,d as h,rt as i,K as j,G as k,_ as l,X as m,n,wt as o,s as r,c as s,J as t};
//# sourceMappingURL=main2.js.map
