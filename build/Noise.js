import{S as n,i as s,s as t,e,a as i,b as a,c,d as o,f as l,g as r,t as u,h as m,l as g,j as d,k as p,m as f,r as v,n as x}from"./main2.js";import{f as h}from"./index.js";function b(n){let s,t,r,u;return{c(){s=e("img"),i(s,"class","content-img center"),s.src!==(t="images/noise_existing.png")&&i(s,"src","images/noise_existing.png"),i(s,"alt","Noise Existing")},m(n,t){a(n,s,t),u=!0},i(n){u||(c((()=>{r||(r=o(s,h,{},!0)),r.run(1)})),u=!0)},o(n){r||(r=o(s,h,{},!1)),r.run(0),u=!1},d(n){n&&l(s),n&&r&&r.end()}}}function w(n){let s,t,r,u;return{c(){s=e("img"),i(s,"class","content-img center"),s.src!==(t="images/noise_option2.png")&&i(s,"src","images/noise_option2.png"),i(s,"alt","Noise Option 2")},m(n,t){a(n,s,t),u=!0},i(n){u||(c((()=>{r||(r=o(s,h,{},!0)),r.run(1)})),u=!0)},o(n){r||(r=o(s,h,{},!1)),r.run(0),u=!1},d(n){n&&l(s),n&&r&&r.end()}}}function M(n){let s,t,c,o,h,M,_,j,k,N,C,E=1==n[0]&&b(),$=2==n[0]&&w();return{c(){s=e("main"),t=e("div"),c=e("button"),c.textContent="EIA No Mitigation Measures",o=r(),h=e("button"),h.textContent="With Mitigation Measures",M=r(),_=e("div"),E&&E.c(),j=r(),$&&$.c(),i(c,"class","nav-btn"),u(c,"active",1==n[0]),i(h,"class","nav-btn"),u(h,"active",2==n[0]),i(t,"class","nav-2"),i(_,"class","content svelte-1labnw4"),i(s,"class","text-center")},m(e,i){a(e,s,i),m(s,t),m(t,c),m(t,o),m(t,h),m(s,M),m(s,_),E&&E.m(_,null),m(_,j),$&&$.m(_,null),k=!0,N||(C=[g(c,"click",n[2]),g(h,"click",n[3])],N=!0)},p(n,[s]){1&s&&u(c,"active",1==n[0]),1&s&&u(h,"active",2==n[0]),1==n[0]?E?1&s&&d(E,1):(E=b(),E.c(),d(E,1),E.m(_,j)):E&&(x(),p(E,1,1,(()=>{E=null})),f()),2==n[0]?$?1&s&&d($,1):($=w(),$.c(),d($,1),$.m(_,null)):$&&(x(),p($,1,1,(()=>{$=null})),f())},i(n){k||(d(E),d($),k=!0)},o(n){p(E),p($),k=!1},d(n){n&&l(s),E&&E.d(),$&&$.d(),N=!1,v(C)}}}function _(n,s,t){let{show:e}=s;function i(n){t(0,e=n)}return n.$$set=n=>{"show"in n&&t(0,e=n.show)},[e,i,()=>i(1),()=>i(2)]}export default class extends n{constructor(n){super(),s(this,n,_,M,t,{show:0})}}
//# sourceMappingURL=Noise.js.map
