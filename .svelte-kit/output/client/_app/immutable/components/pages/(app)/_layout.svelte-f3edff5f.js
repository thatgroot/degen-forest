import{S as te,i as le,s as se,k as v,a as T,l as b,m as y,h,c as L,H as O,n as i,b as P,F as o,I as ie,f as F,g as $e,d as xe,t as q,J as X,K as ke,e as ce,q as Z,r as z,A as Q,v as H,w as J,x as K,y as W,B as ye,C as Ee,D as Ie,E as De,G as Ve}from"../../../chunks/index-3819e20c.js";/* empty css                          */import{F as Ae,l as Te}from"../../../chunks/Footer-98a2829d.js";import{A as Le}from"../../../chunks/Accordion-0b4ce9ea.js";import{a as Ue}from"../../../chunks/arrow-down-69e715f6.js";import{d as Ne}from"../../../chunks/discord-cf51daee.js";import{t as Se}from"../../../chunks/twitter-c05a8360.js";import{c as Re}from"../../../chunks/Popup-3e3c5e21.js";import{a as Ce}from"../../../chunks/AccordionHeader-f172d88c.js";import{S as Ge}from"../../../chunks/search-f89746f8.js";import{C as je}from"../../../chunks/ConnectWallet-48fe6bb1.js";import{d as we}from"../../../chunks/degods-0182fab0.js";import{p as Me}from"../../../chunks/stores-7b2dff73.js";import"../../../chunks/search-3a7c4821.js";import"../../../chunks/Tab-80011dc4.js";import"../../../chunks/solana-a3b509b0.js";import"../../../chunks/copy-c895f45c.js";import"../../../chunks/stack-95b6bae1.js";import"../../../chunks/eth-3f270e3b.js";import"../../../chunks/info-0af65f24.js";import"../../../chunks/ListItem-d45827eb.js";import"../../../chunks/web3-wallet-d1b119eb.js";import"../../../chunks/index-441f76bf.js";import"../../../chunks/singletons-9a94afa0.js";const Pe=""+new URL("../../../assets/dex-db1e6bc0.svg",import.meta.url).href,Ze=""+new URL("../../../assets/marketplace-eb29da77.svg",import.meta.url).href,ze=""+new URL("../../../assets/analytics-40d6869f.svg",import.meta.url).href,Fe=""+new URL("../../../assets/launchpad-6642ec81.svg",import.meta.url).href,qe=""+new URL("../../../assets/airdrop-27006a3d.svg",import.meta.url).href,Be=""+new URL("../../../assets/staking-a8c1b098.svg",import.meta.url).href,Qe=""+new URL("../../../assets/news-1e9733bb.svg",import.meta.url).href,Oe=""+new URL("../../../assets/guide-book-25abfc48.svg",import.meta.url).href,Ye=""+new URL("../../../assets/support-d7765be5.svg",import.meta.url).href,He=""+new URL("../../../assets/ios-0f901282.svg",import.meta.url).href,Je=""+new URL("../../../assets/tiktok-49d063f3.svg",import.meta.url).href,Ke=""+new URL("../../../assets/youtube-b3f5cb7f.svg",import.meta.url).href,We=""+new URL("../../../assets/instagram-995ce057.svg",import.meta.url).href,ee=""+new URL("../../../assets/fries-menu-1a0c02f2.svg",import.meta.url).href;function fe(a,e,t){const l=a.slice();return l[7]=e[t].title,l[8]=e[t].icon,l}function ue(a,e,t){const l=a.slice();return l[7]=e[t].title,l[8]=e[t].icon,l[11]=e[t].childs,l[12]=e[t].href,l}function de(a,e,t){const l=a.slice();return l[7]=e[t].title,l[12]=e[t].href,l}function Xe(a){let e,t,l,n,r,s,m=a[7]+"",u,p;return{c(){e=v("a"),t=v("span"),l=v("img"),r=T(),s=v("span"),u=Z(m),p=T(),this.h()},l(_){e=b(_,"A",{href:!0,class:!0});var x=y(e);t=b(x,"SPAN",{class:!0});var k=y(t);l=b(k,"IMG",{src:!0,alt:!0}),k.forEach(h),r=L(x),s=b(x,"SPAN",{});var E=y(s);u=z(E,m),E.forEach(h),p=L(x),x.forEach(h),this.h()},h(){O(l.src,n=a[8])||i(l,"src",n),i(l,"alt",`${a[7]} app`),i(t,"class","w-4 h-4"),i(e,"href",a[12]),i(e,"class","flex items-center gap-2 text-primary text-sm px-2 py-3 rounded-xl cursor-pointer")},m(_,x){P(_,e,x),o(e,t),o(t,l),o(e,r),o(e,s),o(s,u),o(e,p)},p:Q,i:Q,o:Q,d(_){_&&h(e)}}}function et(a){let e,t,l,n;return t=new Le({props:{header:{title:a[7],show:"both",size:"full",postfix:Ue,prefix:a[8]},href:a[12],$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){e=v("div"),H(t.$$.fragment),l=T()},l(r){e=b(r,"DIV",{});var s=y(e);J(t.$$.fragment,s),l=L(s),s.forEach(h)},m(r,s){P(r,e,s),K(t,e,null),o(e,l),n=!0},p(r,s){const m={};s&131072&&(m.$$scope={dirty:s,ctx:r}),t.$set(m)},i(r){n||(F(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){r&&h(e),W(t)}}}function he(a){let e,t=a[7]+"",l,n;return{c(){e=v("a"),l=Z(t),n=T(),this.h()},l(r){e=b(r,"A",{href:!0,class:!0});var s=y(e);l=z(s,t),n=L(s),s.forEach(h),this.h()},h(){i(e,"href",a[12]),i(e,"class","w-full tablet:bg-primary hover:bg-secondary text-xs px-2 py-1 rounded-md cursor-pointer")},m(r,s){P(r,e,s),o(e,l),o(e,n)},p:Q,d(r){r&&h(e)}}}function tt(a){let e,t=a[11],l=[];for(let n=0;n<t.length;n+=1)l[n]=he(de(a,t,n));return{c(){e=v("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var r=y(e);for(let s=0;s<l.length;s+=1)l[s].l(r);r.forEach(h),this.h()},h(){i(e,"class","flex flex-col text-secondary-light gap-2 py-3 px-1 w-full")},m(n,r){P(n,e,r);for(let s=0;s<l.length;s+=1)l[s].m(e,null)},p(n,r){if(r&8){t=n[11];let s;for(s=0;s<t.length;s+=1){const m=de(n,t,s);l[s]?l[s].p(m,r):(l[s]=he(m),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(n){n&&h(e),X(l,n)}}}function pe(a){let e,t,l,n;const r=[et,Xe],s=[];function m(u,p){return u[11].length>0?0:1}return e=m(a),t=s[e]=r[e](a),{c(){t.c(),l=ce()},l(u){t.l(u),l=ce()},m(u,p){s[e].m(u,p),P(u,l,p),n=!0},p(u,p){t.p(u,p)},i(u){n||(F(t),n=!0)},o(u){q(t),n=!1},d(u){s[e].d(u),u&&h(l)}}}function me(a){let e,t,l,n,r,s=a[7]+"",m,u;return{c(){e=v("button"),t=v("img"),n=T(),r=v("span"),m=Z(s),u=T(),this.h()},l(p){e=b(p,"BUTTON",{class:!0});var _=y(e);t=b(_,"IMG",{src:!0,class:!0,alt:!0}),n=L(_),r=b(_,"SPAN",{});var x=y(r);m=z(x,s),x.forEach(h),u=L(_),_.forEach(h),this.h()},h(){O(t.src,l=a[8])||i(t,"src",l),i(t,"class","h-4 w-4"),i(t,"alt",`${a[8]}`),i(e,"class","flex gap-2 items-center tablet:border-2 border-secondary px-2 py-1 text-xs transition-colors duration-300 hover:bg-secondary")},m(p,_){P(p,e,_),o(e,t),o(e,n),o(e,r),o(r,m),o(e,u)},p:Q,d(p){p&&h(e)}}}function lt(a){let e,t,l,n,r,s,m,u,p,_,x,k,E,N,D,S,U,d,A,c,R,j,G=a[3],w=[];for(let f=0;f<G.length;f+=1)w[f]=pe(ue(a,G,f));const $=f=>q(w[f],1,1,()=>{w[f]=null});let C=a[4],V=[];for(let f=0;f<C.length;f+=1)V[f]=me(fe(a,C,f));return{c(){e=v("div"),t=v("button"),l=v("img"),m=T(),u=v("div"),p=v("div"),_=v("div");for(let f=0;f<w.length;f+=1)w[f].c();x=T(),k=v("div");for(let f=0;f<V.length;f+=1)V[f].c();D=T(),S=v("div"),U=v("button"),d=v("img"),this.h()},l(f){e=b(f,"DIV",{class:!0});var I=y(e);t=b(I,"BUTTON",{class:!0});var g=y(t);l=b(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(h),m=L(I),u=b(I,"DIV",{class:!0});var M=y(u);p=b(M,"DIV",{class:!0});var B=y(p);_=b(B,"DIV",{class:!0});var re=y(_);for(let Y=0;Y<w.length;Y+=1)w[Y].l(re);re.forEach(h),x=L(B),k=b(B,"DIV",{class:!0});var ae=y(k);for(let Y=0;Y<V.length;Y+=1)V[Y].l(ae);ae.forEach(h),B.forEach(h),M.forEach(h),I.forEach(h),D=L(f),S=b(f,"DIV",{class:!0});var oe=y(S);U=b(oe,"BUTTON",{class:!0});var ne=y(U);d=b(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(h),oe.forEach(h),this.h()},h(){O(l.src,n=Ce)||i(l,"src",n),i(l,"alt","collapse"),i(l,"class",r="w-6 h-4 transition-all duration-500 ease-in-out "+(a[1]==="hidden"?"rotate-180":"")),i(t,"class",s="flex justify-end px-2 pt-4 "+(a[1]==="hidden"?"w-max":"w-full")),i(_,"class","flex flex-col gap-2 px-3"),i(k,"class","grid grid-cols-2 gap-2 text-primary border-t-0 tablet:border-t-2 border-t-secondary w-max px-3 py-6"),i(p,"class","flex flex-col gap-2 "),i(u,"class",E="flex flex-col py-6 gap-6 sticky top-0 laptop:"+a[1]),i(e,"class",N="w-full "+a[0]+" laptop:block left-0 right-0 top-0 bottom-0 z-[9999] bg-primary tablet:max-w-min transition-all duration-300 "+(a[1]==="block"?"border-r-2 border-r-brown relative":"absolute w-fit h-fit")),O(d.src,A=a[2])||i(d,"src",A),i(d,"alt","menu"),i(d,"class","w-6 h-6"),i(U,"class","flex items-center justify-center w-12 h-12 rounded-full bg-secondary"),i(S,"class","fixed bottom-6 right-2 laptop:hidden z-[999999]")},m(f,I){P(f,e,I),o(e,t),o(t,l),o(e,m),o(e,u),o(u,p),o(p,_);for(let g=0;g<w.length;g+=1)w[g].m(_,null);o(p,x),o(p,k);for(let g=0;g<V.length;g+=1)V[g].m(k,null);P(f,D,I),P(f,S,I),o(S,U),o(U,d),c=!0,R||(j=[ie(t,"click",a[5]),ie(U,"click",a[6])],R=!0)},p(f,[I]){if((!c||I&2&&r!==(r="w-6 h-4 transition-all duration-500 ease-in-out "+(f[1]==="hidden"?"rotate-180":"")))&&i(l,"class",r),(!c||I&2&&s!==(s="flex justify-end px-2 pt-4 "+(f[1]==="hidden"?"w-max":"w-full")))&&i(t,"class",s),I&8){G=f[3];let g;for(g=0;g<G.length;g+=1){const M=ue(f,G,g);w[g]?(w[g].p(M,I),F(w[g],1)):(w[g]=pe(M),w[g].c(),F(w[g],1),w[g].m(_,null))}for($e(),g=G.length;g<w.length;g+=1)$(g);xe()}if(I&16){C=f[4];let g;for(g=0;g<C.length;g+=1){const M=fe(f,C,g);V[g]?V[g].p(M,I):(V[g]=me(M),V[g].c(),V[g].m(k,null))}for(;g<V.length;g+=1)V[g].d(1);V.length=C.length}(!c||I&2&&E!==(E="flex flex-col py-6 gap-6 sticky top-0 laptop:"+f[1]))&&i(u,"class",E),(!c||I&3&&N!==(N="w-full "+f[0]+" laptop:block left-0 right-0 top-0 bottom-0 z-[9999] bg-primary tablet:max-w-min transition-all duration-300 "+(f[1]==="block"?"border-r-2 border-r-brown relative":"absolute w-fit h-fit")))&&i(e,"class",N),(!c||I&4&&!O(d.src,A=f[2]))&&i(d,"src",A)},i(f){if(!c){for(let I=0;I<G.length;I+=1)F(w[I]);c=!0}},o(f){w=w.filter(Boolean);for(let I=0;I<w.length;I+=1)q(w[I]);c=!1},d(f){f&&h(e),X(w,f),X(V,f),f&&h(D),f&&h(S),R=!1,ke(j)}}}function st(a,e,t){const l=[{title:"Dex",href:"/dex",icon:Pe,childs:[]},{title:"Marketplace",icon:Ze,childs:[{title:"Popular Collections",href:"/marketplace/popular-collections"},{title:"Drop calendar",href:"/marketplace/drop-calendar"},{title:"Auctions",href:"/marketplace/auctions"}]},{title:"Insights",icon:ze,childs:[{title:"NFT Insights",href:"/analytics/nft"},{title:"Defi Insights",href:"/analytics/defi"}]},{title:"Launchpad",icon:Fe,href:"/launchpad",childs:[{title:"Apply for Launchpad",href:"/launchpad/apply"},{title:"Launches",href:"/launchpad/launches"}]},{title:"Airdrops",href:"/airdrops",icon:qe,childs:[]},{title:"NFT Staking",href:"/staking",icon:Be,childs:[]},{title:"News",href:"/news",icon:Qe,childs:[]},{title:"Intro To NFT",href:"/intro-to-nft",icon:Oe,childs:[]},{title:"Support",href:"/support",icon:Ye,childs:[]}],n=[{title:"iOS App",icon:He,href:"https://apps.apple.com/us/app/collectible-world/id1562570008"},{title:"Discord",icon:Ne,href:"https://discord.gg/collectibleworld"},{title:"TikTok",icon:Je,href:"https://www.tiktok.com/@collectibleworld"},{title:"YouTube",icon:Ke,href:"https://www.youtube.com/channel/UCZ5Z5YQZQZ5Z5YQZQZ5Z5YQ"},{title:"Twitter",icon:Se,href:"https://twitter.com/collectiblew"},{title:"Instagram",icon:We,href:"https://www.instagram.com/collectibleworld/"}];let r="hidden",s="block",m=ee;return[r,s,m,l,n,()=>{t(1,s=s==="hidden"?"block":"hidden")},()=>{t(0,r=r==="hidden"?"fixed":"hidden"),t(2,m=m===ee?Re:ee)}]}class rt extends te{constructor(e){super(),le(this,e,st,lt,se,{})}}function _e(a,e,t){const l=a.slice();return l[0]=e[t],l}function ge(a,e,t){const l=a.slice();return l[3]=e[t],l}function ve(a){let e,t,l,n,r,s,m,u,p,_;return{c(){e=v("div"),t=v("span"),l=Z("#"),n=Z(a[3]),r=T(),s=v("img"),u=T(),p=v("span"),_=Z("De Gods"),this.h()},l(x){e=b(x,"DIV",{class:!0});var k=y(e);t=b(k,"SPAN",{class:!0});var E=y(t);l=z(E,"#"),n=z(E,a[3]),E.forEach(h),r=L(k),s=b(k,"IMG",{class:!0,src:!0,alt:!0}),u=L(k),p=b(k,"SPAN",{class:!0});var N=y(p);_=z(N,"De Gods"),N.forEach(h),k.forEach(h),this.h()},h(){i(t,"class","text-accent"),i(s,"class","h-5 w-5 rounded-full"),O(s.src,m=we)||i(s,"src",m),i(s,"alt","collection avatar"),i(p,"class","text-primary"),i(e,"class","flex x-6 justify-around min-w-max gap-2 mx-2")},m(x,k){P(x,e,k),o(e,t),o(t,l),o(t,n),o(e,r),o(e,s),o(e,u),o(e,p),o(p,_)},p:Q,d(x){x&&h(e)}}}function be(a){let e,t,l,n,r,s,m,u,p,_,x;return{c(){e=v("div"),t=v("span"),l=Z("#"),n=Z(a[0]),r=T(),s=v("img"),u=T(),p=v("span"),_=Z("De Gods"),x=T(),this.h()},l(k){e=b(k,"DIV",{class:!0});var E=y(e);t=b(E,"SPAN",{class:!0});var N=y(t);l=z(N,"#"),n=z(N,a[0]),N.forEach(h),r=L(E),s=b(E,"IMG",{class:!0,src:!0,alt:!0}),u=L(E),p=b(E,"SPAN",{class:!0});var D=y(p);_=z(D,"De Gods"),D.forEach(h),x=L(E),E.forEach(h),this.h()},h(){i(t,"class","text-accent"),i(s,"class","h-5 w-5 rounded-full"),O(s.src,m=we)||i(s,"src",m),i(s,"alt","collection avatar"),i(p,"class","text-primary"),i(e,"class","flex justify-around min-w-max gap-2 px-2")},m(k,E){P(k,e,E),o(e,t),o(t,l),o(t,n),o(e,r),o(e,s),o(e,u),o(e,p),o(p,_),o(e,x)},p:Q,d(k){k&&h(e)}}}function at(a){let e,t,l,n,r,s,m,u,p,_,x,k,E,N=[1,2,3,4,5,6,7,8,9,10],D=[];for(let d=0;d<10;d+=1)D[d]=ve(ge(a,N,d));let S=[1,2,3,4,5,6,7,8,9,10],U=[];for(let d=0;d<10;d+=1)U[d]=be(_e(a,S,d));return{c(){e=v("div"),t=v("div"),l=Z("Trending Collections"),n=T(),r=v("div");for(let d=0;d<10;d+=1)D[d].c();s=T(),m=v("span"),u=Z("|"),p=T(),_=v("div");for(let d=0;d<10;d+=1)U[d].c();x=T(),k=v("div"),E=Z("Trending Coins"),this.h()},l(d){e=b(d,"DIV",{class:!0});var A=y(e);t=b(A,"DIV",{class:!0});var c=y(t);l=z(c,"Trending Collections"),c.forEach(h),n=L(A),r=b(A,"DIV",{class:!0});var R=y(r);for(let $=0;$<10;$+=1)D[$].l(R);s=L(R),m=b(R,"SPAN",{class:!0});var j=y(m);u=z(j,"|"),j.forEach(h),R.forEach(h),p=L(A),_=b(A,"DIV",{class:!0});var G=y(_);for(let $=0;$<10;$+=1)U[$].l(G);G.forEach(h),x=L(A),k=b(A,"DIV",{class:!0});var w=y(k);E=z(w,"Trending Coins"),w.forEach(h),A.forEach(h),this.h()},h(){i(t,"class","text-primary bg-secondary z-10 px-6 min-w-max absolute left-0 bottom-0 top-0 flex items-center"),i(m,"class","text-lg text-primary font-bold mx-4"),i(r,"class","flex justify-around items-center animate-marquee"),i(_,"class","flex justify-around items-center animate-marquee"),i(k,"class","text-primary bg-secondary z-10 px-6 min-w-max absolute right-0 bottom-0 top-0 flex items-center"),i(e,"class","flex w-full justify-between relative overflow-hidden text-xs bg-secondary")},m(d,A){P(d,e,A),o(e,t),o(t,l),o(e,n),o(e,r);for(let c=0;c<10;c+=1)D[c].m(r,null);o(r,s),o(r,m),o(m,u),o(e,p),o(e,_);for(let c=0;c<10;c+=1)U[c].m(_,null);o(e,x),o(e,k),o(k,E)},p(d,[A]){if(A&0){N=[1,2,3,4,5,6,7,8,9,10];let c;for(c=0;c<10;c+=1){const R=ge(d,N,c);D[c]?D[c].p(R,A):(D[c]=ve(R),D[c].c(),D[c].m(r,s))}for(;c<10;c+=1)D[c].d(1)}if(A&0){S=[1,2,3,4,5,6,7,8,9,10];let c;for(c=0;c<10;c+=1){const R=_e(d,S,c);U[c]?U[c].p(R,A):(U[c]=be(R),U[c].c(),U[c].m(_,null))}for(;c<10;c+=1)U[c].d(1)}},i:Q,o:Q,d(d){d&&h(e),X(D,d),X(U,d)}}}class ot extends te{constructor(e){super(),le(this,e,null,at,se,{})}}function nt(a){let e,t,l,n,r,s,m,u,p,_,x,k,E,N,D,S,U,d,A,c,R,j;l=new ot({}),x=new Ge({props:{bg:"secondary"}}),E=new je({props:{toggle:a[0],onClosed:a[4]}}),S=new rt({});const G=a[3].default,w=ye(G,a,a[2],null);return c=new Ae({}),{c(){e=v("main"),t=v("div"),H(l.$$.fragment),n=T(),r=v("div"),s=v("a"),m=v("img"),p=T(),_=v("div"),H(x.$$.fragment),k=T(),H(E.$$.fragment),N=T(),D=v("div"),H(S.$$.fragment),U=T(),d=v("div"),w&&w.c(),A=T(),H(c.$$.fragment),this.h()},l($){e=b($,"MAIN",{class:!0});var C=y(e);t=b(C,"DIV",{});var V=y(t);J(l.$$.fragment,V),n=L(V),r=b(V,"DIV",{class:!0});var f=y(r);s=b(f,"A",{href:!0});var I=y(s);m=b(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(h),p=L(f),_=b(f,"DIV",{class:!0});var g=y(_);J(x.$$.fragment,g),g.forEach(h),k=L(f),J(E.$$.fragment,f),f.forEach(h),N=L(V),D=b(V,"DIV",{class:!0});var M=y(D);J(S.$$.fragment,M),U=L(M),d=b(M,"DIV",{class:!0});var B=y(d);w&&w.l(B),A=L(B),J(c.$$.fragment,B),B.forEach(h),M.forEach(h),V.forEach(h),C.forEach(h),this.h()},h(){O(m.src,u=Te)||i(m,"src",u),i(m,"alt","degen forest"),i(m,"class","max-w-[15rem]"),i(s,"href","/"),i(_,"class","flex items-center"),i(r,"class","flex flex-col gap-6 desktop:flex-row justify-between px-3 py-3"),i(d,"class",R="flex flex-col w-full "+(a[1].routeId==="(app)/marketplace/collection"?"":"px-8 py-6")),i(D,"class","flex flex-col tablet:flex-row relative"),i(e,"class","p-0 m-0")},m($,C){P($,e,C),o(e,t),K(l,t,null),o(t,n),o(t,r),o(r,s),o(s,m),o(r,p),o(r,_),K(x,_,null),o(r,k),K(E,r,null),o(t,N),o(t,D),K(S,D,null),o(D,U),o(D,d),w&&w.m(d,null),o(d,A),K(c,d,null),j=!0},p($,[C]){const V={};C&1&&(V.toggle=$[0]),C&1&&(V.onClosed=$[4]),E.$set(V),w&&w.p&&(!j||C&4)&&Ee(w,G,$,$[2],j?De(G,$[2],C,null):Ie($[2]),null),(!j||C&2&&R!==(R="flex flex-col w-full "+($[1].routeId==="(app)/marketplace/collection"?"":"px-8 py-6")))&&i(d,"class",R)},i($){j||(F(l.$$.fragment,$),F(x.$$.fragment,$),F(E.$$.fragment,$),F(S.$$.fragment,$),F(w,$),F(c.$$.fragment,$),j=!0)},o($){q(l.$$.fragment,$),q(x.$$.fragment,$),q(E.$$.fragment,$),q(S.$$.fragment,$),q(w,$),q(c.$$.fragment,$),j=!1},d($){$&&h(e),W(l),W(x),W(E),W(S),w&&w.d($),W(c)}}}function it(a,e,t){let l;Ve(a,Me,u=>t(1,l=u));let{$$slots:n={},$$scope:r}=e,s=!1;const m=()=>{t(0,s=!1)};return a.$$set=u=>{"$$scope"in u&&t(2,r=u.$$scope)},[s,l,r,n,m]}class Nt extends te{constructor(e){super(),le(this,e,it,nt,se,{})}}export{Nt as default};
