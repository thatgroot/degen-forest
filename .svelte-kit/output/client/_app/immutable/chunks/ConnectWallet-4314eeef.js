import{S as ve,i as _e,s as be,k as $,a as D,q as z,l as x,m as V,c as C,r as K,h as b,n as u,H,b as T,F as i,u as se,A as ae,v as M,e as fe,w as S,x as P,f as L,g as we,t as R,d as $e,y as W,J as ke}from"./index-b4efb8f8.js";import{T as Ee,a as ce}from"./Tab-d306698a.js";import{s as xe}from"./solana-a3b509b0.js";import{a as De}from"./arrow-down-69e715f6.js";import{c as me}from"./copy-c895f45c.js";import{s as Ce}from"./stack-95b6bae1.js";import{e as Ie}from"./eth-3f270e3b.js";import{i as Ve}from"./info-0af65f24.js";import{L as Y}from"./ListItem-3477da3c.js";import{P as Le}from"./Popup-e0eed476.js";const Re=""+new URL("../assets/brave-8998d646.svg",import.meta.url).href,ye=""+new URL("../assets/metamask-26b8617d.svg",import.meta.url).href,Ue=""+new URL("../assets/walletconnect-1d8996a9.svg",import.meta.url).href,Me=""+new URL("../assets/coinbase-f0aa38c1.svg",import.meta.url).href,Se=""+new URL("../assets/trustwallet-ef7c1c4d.svg",import.meta.url).href,Pe=""+new URL("../assets/bell-7e387961.svg",import.meta.url).href,We=""+new URL("../assets/avatar-3dfd2373.png",import.meta.url).href,Ge=""+new URL("../assets/sell-10b6dd1d.svg",import.meta.url).href,je=""+new URL("../assets/refresh-active-f45b5527.svg",import.meta.url).href,Be=""+new URL("../assets/poweroff-bf8b5d16.svg",import.meta.url).href;function ue(o){let e,l,s;return{c(){e=$("div"),l=$("img"),this.h()},l(r){e=x(r,"DIV",{});var t=V(e);l=x(t,"IMG",{class:!0,src:!0,alt:!0}),t.forEach(b),this.h()},h(){u(l,"class","w-4 h-4"),H(l.src,s=o[1])||u(l,"src",s),u(l,"alt","postfix")},m(r,t){T(r,e,t),i(e,l)},p(r,t){t&2&&!H(l.src,s=r[1])&&u(l,"src",s)},d(r){r&&b(e)}}}function ge(o){let e,l;return{c(){e=$("div"),l=z(o[4]),this.h()},l(s){e=x(s,"DIV",{class:!0});var r=V(e);l=K(r,o[4]),r.forEach(b),this.h()},h(){u(e,"class","absolute right-6 -top-6 rounded-full border-2 border-transparent group-hover:border-2 group-hover:border-accent bg-secondary px-6 py-3 text-xs text-accent")},m(s,r){T(s,e,r),i(e,l)},p(s,r){r&16&&se(l,s[4])},d(s){s&&b(e)}}}function Te(o){let e,l,s,r,t,a,n,d,g,f,p,m,h,k,_,v=o[1]&&ue(o),w=o[4]&&ge(o);return{c(){e=$("div"),l=$("div"),s=$("img"),a=D(),n=$("div"),d=$("span"),g=z(o[2]),f=D(),p=$("span"),m=z(o[3]),h=D(),v&&v.c(),k=D(),w&&w.c(),this.h()},l(c){e=x(c,"DIV",{class:!0});var I=V(e);l=x(I,"DIV",{class:!0});var G=V(l);s=x(G,"IMG",{class:!0,src:!0,alt:!0}),a=C(G),n=x(G,"DIV",{class:!0});var U=V(n);d=x(U,"SPAN",{class:!0});var J=V(d);g=K(J,o[2]),J.forEach(b),f=C(U),p=x(U,"SPAN",{class:!0});var j=V(p);m=K(j,o[3]),j.forEach(b),U.forEach(b),h=C(G),v&&v.l(G),G.forEach(b),k=C(I),w&&w.l(I),I.forEach(b),this.h()},h(){u(s,"class",r=`${o[5]==="sm"?"w-7 h-7":"w-14 h-14"}`),H(s.src,t=o[0])||u(s,"src",t),u(s,"alt","phantom wallet"),u(d,"class","text-primary text-sm font-bold"),u(p,"class","text-primary text-sm"),u(n,"class","flex flex-col items-start justify-center"),u(l,"class","flex items-center gap-6"),u(e,"class",_=`group w-full flex relative border-2 border-transparent  hover:border-accent ${o[5]==="sm"?"px-1.5 py-1 rounded-md gap-2":"px-8 py-4 rounded-xl gap-4"}   justify-between cursor-pointer`)},m(c,I){T(c,e,I),i(e,l),i(l,s),i(l,a),i(l,n),i(n,d),i(d,g),i(n,f),i(n,p),i(p,m),i(l,h),v&&v.m(l,null),i(e,k),w&&w.m(e,null)},p(c,[I]){I&32&&r!==(r=`${c[5]==="sm"?"w-7 h-7":"w-14 h-14"}`)&&u(s,"class",r),I&1&&!H(s.src,t=c[0])&&u(s,"src",t),I&4&&se(g,c[2]),I&8&&se(m,c[3]),c[1]?v?v.p(c,I):(v=ue(c),v.c(),v.m(l,null)):v&&(v.d(1),v=null),c[4]?w?w.p(c,I):(w=ge(c),w.c(),w.m(e,null)):w&&(w.d(1),w=null),I&32&&_!==(_=`group w-full flex relative border-2 border-transparent  hover:border-accent ${c[5]==="sm"?"px-1.5 py-1 rounded-md gap-2":"px-8 py-4 rounded-xl gap-4"}   justify-between cursor-pointer`)&&u(e,"class",_)},i:ae,o:ae,d(c){c&&b(e),v&&v.d(),w&&w.d()}}}function qe(o,e,l){let{prefix:s=Ve}=e,{postfix:r=""}=e,{title:t=""}=e,{subtitle:a=""}=e,{badge:n=""}=e,{insets:d="md"}=e;return o.$$set=g=>{"prefix"in g&&l(0,s=g.prefix),"postfix"in g&&l(1,r=g.postfix),"title"in g&&l(2,t=g.title),"subtitle"in g&&l(3,a=g.subtitle),"badge"in g&&l(4,n=g.badge),"insets"in g&&l(5,d=g.insets)},[s,r,t,a,n,d]}class re extends ve{constructor(e){super(),_e(this,e,qe,Te,be,{prefix:0,postfix:1,title:2,subtitle:3,badge:4,insets:5})}}function de(o,e,l){const s=o.slice();return s[8]=e[l],s}function Ae(o){let e,l,s,r;return e=new ce({props:{title:"Solana",icon:xe,active:o[4]==="solana",onclick:o[6]}}),s=new ce({props:{title:"Ethereum",active:o[4]==="ethereum",icon:Ie,onclick:o[7]}}),{c(){M(e.$$.fragment),l=D(),M(s.$$.fragment)},l(t){S(e.$$.fragment,t),l=C(t),S(s.$$.fragment,t)},m(t,a){P(e,t,a),T(t,l,a),P(s,t,a),r=!0},p(t,a){const n={};a&16&&(n.active=t[4]==="solana"),a&24&&(n.onclick=t[6]),e.$set(n);const d={};a&16&&(d.active=t[4]==="ethereum"),a&24&&(d.onclick=t[7]),s.$set(d)},i(t){r||(L(e.$$.fragment,t),L(s.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),R(s.$$.fragment,t),r=!1},d(t){W(e,t),t&&b(l),W(s,t)}}}function he(o){var s;let e,l;return e=new re({props:{title:o[8].name,subtitle:"Detected",prefix:o[8].logo,badge:(s=o[8].badge)!=null?s:""}}),{c(){M(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,t){P(e,r,t),l=!0},p(r,t){var n;const a={};t&8&&(a.title=r[8].name),t&8&&(a.prefix=r[8].logo),t&8&&(a.badge=(n=r[8].badge)!=null?n:""),e.$set(a)},i(r){l||(L(e.$$.fragment,r),l=!0)},o(r){R(e.$$.fragment,r),l=!1},d(r){W(e,r)}}}function Ne(o){let e,l,s,r,t,a,n,d;t=new Ee({props:{$$slots:{default:[Ae]},$$scope:{ctx:o}}});let g=o[3],f=[];for(let m=0;m<g.length;m+=1)f[m]=he(de(o,g,m));const p=m=>R(f[m],1,1,()=>{f[m]=null});return{c(){e=$("div"),l=$("p"),s=z("Connect a wallet to continue"),r=D(),M(t.$$.fragment),a=D(),n=$("div");for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){e=x(m,"DIV",{class:!0});var h=V(e);l=x(h,"P",{class:!0});var k=V(l);s=K(k,"Connect a wallet to continue"),k.forEach(b),r=C(h),S(t.$$.fragment,h),a=C(h),n=x(h,"DIV",{class:!0});var _=V(n);for(let v=0;v<f.length;v+=1)f[v].l(_);_.forEach(b),h.forEach(b),this.h()},h(){u(l,"class","text-gradient text-center"),u(n,"class","flex flex-col"),u(e,"class","flex flex-col bg-secondary px-6 py-12 gap-6 h-fit min-w-[420px] relative")},m(m,h){T(m,e,h),i(e,l),i(l,s),i(e,r),P(t,e,null),i(e,a),i(e,n);for(let k=0;k<f.length;k+=1)f[k].m(n,null);d=!0},p(m,h){const k={};if(h&2072&&(k.$$scope={dirty:h,ctx:m}),t.$set(k),h&8){g=m[3];let _;for(_=0;_<g.length;_+=1){const v=de(m,g,_);f[_]?(f[_].p(v,h),L(f[_],1)):(f[_]=he(v),f[_].c(),L(f[_],1),f[_].m(n,null))}for(we(),_=g.length;_<f.length;_+=1)p(_);$e()}},i(m){if(!d){L(t.$$.fragment,m);for(let h=0;h<g.length;h+=1)L(f[h]);d=!0}},o(m){R(t.$$.fragment,m),f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)R(f[h]);d=!1},d(m){m&&b(e),W(t),ke(f,m)}}}function pe(o){let e,l,s,r,t,a,n,d,g,f,p,m,h,k,_,v,w,c,I,G,U,J,j,Z,q,ee,A,te,N,le,F,O;return I=new re({props:{title:"Main Wallet",subtitle:"1.04",prefix:xe,postfix:me,insets:"sm"}}),U=new re({props:{title:"Bidding Wallet",subtitle:"1.04",prefix:Ie,postfix:me,insets:"sm"}}),q=new Y({props:{title:"Sell",title_prefix:Ge}}),A=new Y({props:{title:"My Items",title_prefix:Ce}}),N=new Y({props:{title:"Connect a different wallet",title_prefix:je}}),F=new Y({props:{title:"Sign out",title_prefix:Be}}),{c(){e=$("div"),l=$("div"),s=$("img"),t=D(),a=$("div"),n=$("img"),g=D(),f=$("div"),p=$("p"),m=z("0x1234567890"),h=D(),k=$("img"),v=D(),w=$("div"),c=$("div"),M(I.$$.fragment),G=D(),M(U.$$.fragment),J=D(),j=$("div"),Z=D(),M(q.$$.fragment),ee=D(),M(A.$$.fragment),te=D(),M(N.$$.fragment),le=D(),M(F.$$.fragment),this.h()},l(E){e=x(E,"DIV",{class:!0});var B=V(e);l=x(B,"DIV",{class:!0});var ne=V(l);s=x(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(b),t=C(B),a=x(B,"DIV",{class:!0});var Q=V(a);n=x(Q,"IMG",{src:!0,alt:!0,class:!0}),g=C(Q),f=x(Q,"DIV",{class:!0});var X=V(f);p=x(X,"P",{class:!0});var oe=V(p);m=K(oe,"0x1234567890"),oe.forEach(b),h=C(X),k=x(X,"IMG",{src:!0,alt:!0}),X.forEach(b),Q.forEach(b),v=C(B),w=x(B,"DIV",{class:!0});var ie=V(w);c=x(ie,"DIV",{class:!0});var y=V(c);S(I.$$.fragment,y),G=C(y),S(U.$$.fragment,y),J=C(y),j=x(y,"DIV",{class:!0}),V(j).forEach(b),Z=C(y),S(q.$$.fragment,y),ee=C(y),S(A.$$.fragment,y),te=C(y),S(N.$$.fragment,y),le=C(y),S(F.$$.fragment,y),y.forEach(b),ie.forEach(b),B.forEach(b),this.h()},h(){H(s.src,r=Pe)||u(s,"src",r),u(s,"alt","notification"),u(s,"class","w-8 h-8"),u(l,"class","flex items-center gap-x-2"),H(n.src,d=We)||u(n,"src",d),u(n,"alt","user"),u(n,"class","rounded-full w-8 h-8"),u(p,"class","text-sm text-primary"),H(k.src,_=De)||u(k,"src",_),u(k,"alt","change wallet"),u(f,"class","flex items-center gap-6"),u(a,"class","flex gap-3 items-center px-3 py-1.5 hover:rounded-lg hover:bg-secondary cursor-pointer"),u(j,"class","w-full h-[0.0625rem] rounded-full border-[0.0625rem] border-secondary"),u(c,"class","flex flex-col justify-start gap-2 w-full"),u(w,"class","group-hover:block hidden absolute top-[100%] bg-primary right-0 left-0 px-2 py-2 border-2 border-secondary rounded-lg shadow-lg"),u(e,"class","flex items-center gap-x-4 group relative")},m(E,B){T(E,e,B),i(e,l),i(l,s),i(e,t),i(e,a),i(a,n),i(a,g),i(a,f),i(f,p),i(p,m),i(f,h),i(f,k),i(e,v),i(e,w),i(w,c),P(I,c,null),i(c,G),P(U,c,null),i(c,J),i(c,j),i(c,Z),P(q,c,null),i(c,ee),P(A,c,null),i(c,te),P(N,c,null),i(c,le),P(F,c,null),O=!0},p:ae,i(E){O||(L(I.$$.fragment,E),L(U.$$.fragment,E),L(q.$$.fragment,E),L(A.$$.fragment,E),L(N.$$.fragment,E),L(F.$$.fragment,E),O=!0)},o(E){R(I.$$.fragment,E),R(U.$$.fragment,E),R(q.$$.fragment,E),R(A.$$.fragment,E),R(N.$$.fragment,E),R(F.$$.fragment,E),O=!1},d(E){E&&b(e),W(I),W(U),W(q),W(A),W(N),W(F)}}}function Fe(o){let e,l,s,r;e=new Le({props:{toggle:o[0],onClosed:o[2],$$slots:{default:[Ne]},$$scope:{ctx:o}}});let t=o[1]&&pe();return{c(){M(e.$$.fragment),l=D(),t&&t.c(),s=fe()},l(a){S(e.$$.fragment,a),l=C(a),t&&t.l(a),s=fe()},m(a,n){P(e,a,n),T(a,l,n),t&&t.m(a,n),T(a,s,n),r=!0},p(a,[n]){const d={};n&1&&(d.toggle=a[0]),n&4&&(d.onClosed=a[2]),n&2072&&(d.$$scope={dirty:n,ctx:a}),e.$set(d),a[1]?t?(t.p(a,n),n&2&&L(t,1)):(t=pe(),t.c(),L(t,1),t.m(s.parentNode,s)):t&&(we(),R(t,1,1,()=>{t=null}),$e())},i(a){r||(L(e.$$.fragment,a),L(t),r=!0)},o(a){R(e.$$.fragment,a),R(t),r=!1},d(a){W(e,a),a&&b(l),t&&t.d(a),a&&b(s)}}}function He(o,e,l){const s=[{name:"Phantom",chain:"solana",subtitle:"Detected",badge:"Recommended",url:"https://phantom.app/",logo:"https://phantom.app/img/logo.svg"},{name:"Solflare",chain:"solana",url:"https://solflare.com/",logo:"https://solflare.com/assets/logo.26659b6d..svg"},{name:"Math Wallet",chain:"solana",url:"https://mathwallet.org/",logo:"https://doc.mathwallet.org/images/logo.svg"},{name:"Brave",chain:"solana",url:"https://brave.com/",logo:Re},{name:"Metamask",chain:"ethereum",url:"https://metamask.io/",logo:ye},{name:"WalletConnect",chain:"ethereum",url:"https://walletconnect.org/",logo:Ue},{name:"Coinbase Wallet",chain:"ethereum",url:"https://wallet.coinbase.com/",logo:Me},{name:"Trust Wallet",chain:"ethereum",url:"https://trustwallet.com/",logo:Se}];let r=s.filter(p=>p.chain==="solana"),t="solana",{toggle:a=!1}=e,{connected:n=!1}=e,{onClosed:d=()=>{}}=e;const g=()=>{l(4,t="solana"),l(3,r=s.filter(p=>p.chain==="solana"))},f=()=>{l(4,t="ethereum"),l(3,r=s.filter(p=>p.chain==="ethereum"))};return o.$$set=p=>{"toggle"in p&&l(0,a=p.toggle),"connected"in p&&l(1,n=p.connected),"onClosed"in p&&l(2,d=p.onClosed)},[a,n,d,r,t,s,g,f]}class lt extends ve{constructor(e){super(),_e(this,e,He,Fe,be,{toggle:0,connected:1,onClosed:2})}}export{lt as C,je as r};
