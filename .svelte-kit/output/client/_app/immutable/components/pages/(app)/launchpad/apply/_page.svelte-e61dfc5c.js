import{S as oe,i as se,s as ie,k as d,q as E,a as k,l as h,m as u,r as I,h as a,c as L,n as s,b as j,F as t,A as H,J as ne}from"../../../../../chunks/index-b4efb8f8.js";function ae(x,e,l){const b=x.slice();return b[1]=e[l].label,b[2]=e[l].placeholder,b[3]=e[l].hint,b[4]=e[l].type,b}function ce(x){let e,l,b=x[1]+"",v,p,o,D=x[3]+"",w,m,n,c;return{c(){e=d("div"),l=d("label"),v=E(b),p=k(),o=d("small"),w=E(D),m=k(),n=d("div"),c=d("input"),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=u(e);l=h(i,"LABEL",{for:!0,class:!0});var _=u(l);v=I(_,b),_.forEach(a),p=L(i),o=h(i,"SMALL",{class:!0});var T=u(o);w=I(T,D),T.forEach(a),i.forEach(a),m=L(r),n=h(r,"DIV",{class:!0});var S=u(n);c=h(S,"INPUT",{type:!0,class:!0,placeholder:!0}),S.forEach(a),this.h()},h(){s(l,"for",""),s(l,"class","text-gradient text-2xl"),s(o,"class","text-secondary text-sm -light opacity-50"),s(e,"class","flex flex-col gap-1"),s(c,"type",x[4]),s(c,"class","w-full px-6 py-2 text-primary bg-primary border-none rounded-lg placeholder:text-secondary-light placeholder:opacity-50"),s(c,"placeholder",x[2]),s(n,"class","rounded-lg gradient-primary p-1 w-full")},m(r,i){j(r,e,i),t(e,l),t(l,v),t(e,p),t(e,o),t(o,w),j(r,m,i),j(r,n,i),t(n,c)},p:H,d(r){r&&a(e),r&&a(m),r&&a(n)}}}function de(x){let e,l,b=x[1]+"",v,p,o,D=x[3]+"",w,m,n,c;return{c(){e=d("div"),l=d("label"),v=E(b),p=k(),o=d("small"),w=E(D),m=k(),n=d("div"),c=d("textarea"),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=u(e);l=h(i,"LABEL",{for:!0,class:!0});var _=u(l);v=I(_,b),_.forEach(a),p=L(i),o=h(i,"SMALL",{class:!0});var T=u(o);w=I(T,D),T.forEach(a),i.forEach(a),m=L(r),n=h(r,"DIV",{class:!0});var S=u(n);c=h(S,"TEXTAREA",{rows:!0,class:!0}),u(c).forEach(a),S.forEach(a),this.h()},h(){s(l,"for",""),s(l,"class","text-gradient text-2xl"),s(o,"class","text-secondary text-sm -light opacity-50"),s(e,"class","flex flex-col gap-1"),s(c,"rows","5"),s(c,"class","w-full p-4 rounded-lg bg-primary"),s(n,"class","rounded-lg gradient-primary p-1 w-full")},m(r,i){j(r,e,i),t(e,l),t(l,v),t(e,p),t(e,o),t(o,w),j(r,m,i),j(r,n,i),t(n,c)},p:H,d(r){r&&a(e),r&&a(m),r&&a(n)}}}function he(x){let e,l,b=x[1]+"",v,p,o,D=x[3]+"",w,m,n;return{c(){e=d("div"),l=d("label"),v=E(b),p=k(),o=d("small"),w=E(D),m=k(),n=d("input"),this.h()},l(c){e=h(c,"DIV",{class:!0});var r=u(e);l=h(r,"LABEL",{for:!0,class:!0});var i=u(l);v=I(i,b),i.forEach(a),p=L(r),o=h(r,"SMALL",{class:!0});var _=u(o);w=I(_,D),_.forEach(a),r.forEach(a),m=L(c),n=h(c,"INPUT",{type:!0,class:!0}),this.h()},h(){s(l,"for",""),s(l,"class","text-gradient text-2xl"),s(o,"class","text-secondary-light text-sm opacity-50"),s(e,"class","flex flex-col gap-1"),s(n,"type","checkbox"),n.value="",s(n,"class","w-8 h-8 ring-0")},m(c,r){j(c,e,r),t(e,l),t(l,v),t(e,p),t(e,o),t(o,w),j(c,m,r),j(c,n,r)},p:H,d(c){c&&a(e),c&&a(m),c&&a(n)}}}function re(x){let e;function l(p,o){return p[4]==="checkbox"?he:p[4]==="textarea"?de:ce}let v=l(x)(x);return{c(){e=d("div"),v.c(),this.h()},l(p){e=h(p,"DIV",{class:!0});var o=u(e);v.l(o),o.forEach(a),this.h()},h(){s(e,"class","flex flex-col gap-6 text-primary")},m(p,o){j(p,e,o),v.m(e,null)},p(p,o){v.p(p,o)},d(p){p&&a(e),v.d()}}}function pe(x){let e,l,b,v,p,o,D,w,m,n,c,r,i,_,T,S,F,z,R,M,X,O,A,V,U,W,$,q=x[0],g=[];for(let f=0;f<q.length;f+=1)g[f]=re(ae(x,q,f));return{c(){e=d("div"),l=d("div"),b=d("h2"),v=E("Degen Forest Launchpad Submission Form"),p=k(),o=d("p"),D=E(`Magic Eden is looking to onboard unique, quality projects to drop their collections via Magic\r
			Eden Launchpad, our white glove minting and marketing service. Announcements: We will consider\r
			applications on a rolling basis. If you have not heard back from us within a few weeks of your\r
			submission, this means we have placed you in our pipeline. You will hear from us if we are\r
			interested in moving forward with your project.Please Fillout the following form.`),w=k(),m=d("div"),n=d("p"),c=E("Which blockchain is your collection on? *"),r=k(),i=d("div"),_=d("button"),T=E("Ethereum"),S=k(),F=d("button"),z=E("Polygon"),R=k(),M=d("button"),X=E("Solana"),O=k(),A=d("div"),V=d("div");for(let f=0;f<g.length;f+=1)g[f].c();U=k(),W=d("button"),$=E("Submit"),this.h()},l(f){e=h(f,"DIV",{class:!0});var P=u(e);l=h(P,"DIV",{class:!0});var y=u(l);b=h(y,"H2",{class:!0});var B=u(b);v=I(B,"Degen Forest Launchpad Submission Form"),B.forEach(a),p=L(y),o=h(y,"P",{class:!0});var K=u(o);D=I(K,`Magic Eden is looking to onboard unique, quality projects to drop their collections via Magic\r
			Eden Launchpad, our white glove minting and marketing service. Announcements: We will consider\r
			applications on a rolling basis. If you have not heard back from us within a few weeks of your\r
			submission, this means we have placed you in our pipeline. You will hear from us if we are\r
			interested in moving forward with your project.Please Fillout the following form.`),K.forEach(a),y.forEach(a),w=L(P),m=h(P,"DIV",{class:!0});var C=u(m);n=h(C,"P",{class:!0});var G=u(n);c=I(G,"Which blockchain is your collection on? *"),G.forEach(a),r=L(C),i=h(C,"DIV",{class:!0});var N=u(i);_=h(N,"BUTTON",{class:!0});var Q=u(_);T=I(Q,"Ethereum"),Q.forEach(a),S=L(N),F=h(N,"BUTTON",{class:!0});var Z=u(F);z=I(Z,"Polygon"),Z.forEach(a),R=L(N),M=h(N,"BUTTON",{class:!0});var ee=u(M);X=I(ee,"Solana"),ee.forEach(a),N.forEach(a),C.forEach(a),P.forEach(a),O=L(f),A=h(f,"DIV",{class:!0});var te=u(A);V=h(te,"DIV",{class:!0});var Y=u(V);for(let J=0;J<g.length;J+=1)g[J].l(Y);U=L(Y),W=h(Y,"BUTTON",{class:!0});var le=u(W);$=I(le,"Submit"),le.forEach(a),Y.forEach(a),te.forEach(a),this.h()},h(){s(b,"class","text-gradient text-3xl font-bold"),s(o,"class","text-base text-primary leading-8 tablet:pr-16"),s(l,"class","flex flex-col justify-around tablet:w-2/3 gap-6"),s(n,"class","text-gradient text-2xl"),s(_,"class","gradient-primary btn-primary"),s(F,"class","gradient-primary btn-primary"),s(M,"class","gradient-primary btn-primary"),s(i,"class","flex flex-wrap tablet:flex-nowrap gap-6"),s(m,"class","flex flex-col gap-6"),s(e,"class","flex flex-col justify-between gap-20"),s(W,"class","gradient-primary btn-primary px-6 py-2 w-fit mx-auto"),s(V,"class","tablet:max-w-md laptop-sm:max-w-3xl laptop:max-w-4xl flex flex-col gap-10"),s(A,"class","flex flex-col py-8 w-full items-center")},m(f,P){j(f,e,P),t(e,l),t(l,b),t(b,v),t(l,p),t(l,o),t(o,D),t(e,w),t(e,m),t(m,n),t(n,c),t(m,r),t(m,i),t(i,_),t(_,T),t(i,S),t(i,F),t(F,z),t(i,R),t(i,M),t(M,X),j(f,O,P),j(f,A,P),t(A,V);for(let y=0;y<g.length;y+=1)g[y].m(V,null);t(V,U),t(V,W),t(W,$)},p(f,[P]){if(P&1){q=f[0];let y;for(y=0;y<q.length;y+=1){const B=ae(f,q,y);g[y]?g[y].p(B,P):(g[y]=re(B),g[y].c(),g[y].m(V,U))}for(;y<g.length;y+=1)g[y].d(1);g.length=q.length}},i:H,o:H,d(f){f&&a(e),f&&a(O),f&&a(A),ne(g,f)}}}function ue(x){return[[{label:"Project Name *",placeholder:"",hint:"",type:"text"},{label:"Twitter Link *",placeholder:"",hint:"",type:"text"},{label:"Creator Name (if different than Project Name):  ",placeholder:"",hint:"",type:"text"},{label:"How many twitter followers do you have? ",placeholder:"50000",hint:"Over-reporting vs. actual will result in rejection",type:"number"},{label:"Twitter Followers",placeholder:"1000k",type:"text"},{label:"If yes, please list the projects: ",placeholder:"",hint:"",type:"text"},{label:"Is your collection a derivative? *",placeholder:"",hint:"",type:"text"},{label:"Expected mint date? *",placeholder:"",hint:"",type:"date"},{label:"Mint price",placeholder:"1.004 sol",hint:"",type:"text"},{label:"Discord ID for main contact: *",placeholder:"https://discord.gg/#80001",hint:"",type:"text"},{label:"Discord Server (add link): *",placeholder:"https://discord.gg/lazybot",hint:"",type:"text"},{label:"Mint Website (add link): *",placeholder:"https://lazybot.nft",hint:"",type:"text"},{label:"Please tell us about your team: *",hint:`1. How many core members are on the team? ( Working on the project daily ) 

2. What is the current occupation of the core members?
3. Past accomplishments or projects?
4. How did the team meet?
5. Please add links to LinkedIn for all team members.`,placholder:"",type:"textarea"},{label:"Partnerships *",hint:`1. Who are the current ecosystem partners for this project?
2. How were the partnerships formed?`,placeholder:"",type:"textarea"},{label:"Whitepaper and Roadmap *",hint:`1. Is there a whitepaper?
2. Is there a clearly defined roadmap?
3. How will the project use the funding raised during the mint? Please be as specific as possible.
4. What will the project do in the case it's not able to sell out and raise the required funding?`,placeholder:"",type:"textarea"},{label:"If selected for Launchpad, I will comply with all the requirements below: *",hint:`- Founding team will dox
- One team member will KYC through a major exchange (Crypto.com, FTX, Coinbase) and mint funds will be deposited to the major exchange wallet
- I will sign a formal legal partnership agreement
- I am required to escrow funds with Magic Eden following the mint
`,placeholder:"",type:"checkbox"}]]}class me extends oe{constructor(e){super(),se(this,e,ue,pe,ie,{})}}export{me as default};
