(this.webpackJsonpgolocal=this.webpackJsonpgolocal||[]).push([[0],{29:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){},87:function(e,t){},92:function(e,t,n){"use strict";n.r(t);var c,j,r,s,a=n(0),b=n(1),i=n.n(b),u=n(42),l=n.n(u),o=(n(55),n(8)),O=n(2),x=(n(56),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"GO LOCAL"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:"  your local farmer shop"})})]})})}),h=n(4),d=(n(57),function(e){var t=e.funcIncCount,n=e.count;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:function(){return t(n++)},className:"myButton",children:"IncreaceCount"})})}),f=n(43),p=n(44),g=n(49),v=n(48),m=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return this.props.visible?Object(a.jsx)(a.Fragment,{children:this.props.children}):Object(a.jsx)(a.Fragment,{})}}]),n}(b.Component),C=function(e){var t=e.count,n=Object(b.useState)(!1),c=Object(h.a)(n,2),j=c[0],r=c[1];return Object(b.useEffect)((function(){r(t%2==0)}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(m,{visible:j,children:["Count : ",t]})})},S=function(){var e=Object(b.useState)(0),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)("br",{}),Object(a.jsx)(d,{funcIncCount:function(e){c(e)},count:n}),Object(a.jsx)("br",{}),Object(a.jsx)(C,{count:n})]})},y=(n(62),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsxs)("div",{className:"navbarPages",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("button",{children:"Home"})}),Object(a.jsx)(o.b,{to:"/farmers",children:Object(a.jsx)("button",{children:"Farmers"})}),Object(a.jsx)(o.b,{to:"/cart",children:Object(a.jsx)("button",{children:"Cart"})})]}),Object(a.jsxs)("div",{className:"navbarSettings",children:[Object(a.jsx)(o.b,{to:"/login",children:Object(a.jsx)("button",{children:"Login"})}),Object(a.jsx)(o.b,{to:"/register",children:Object(a.jsx)("button",{children:"Register"})}),Object(a.jsx)(o.b,{to:"/settings",children:Object(a.jsx)("button",{children:"Settings"})})]})]})})}),F=n(26),N=n.n(F),I=n(46),L=(n(29),n(47)),k=n.n(L);!function(e){e[e.login=0]="login"}(c||(c={})),function(e){e[e.login=0]="login"}(j||(j={})),r="";var w=function(){var e=Object(b.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],u=Object(b.useState)(""),l=Object(h.a)(u,2),o=l[0],O=l[1],x=Object(b.useState)(""),d=Object(h.a)(x,2),f=(d[0],d[1]);function p(){return(p=Object(I.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={email:n,password:o},s.emit(j.login,c),f(n),i(""),O("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.useEffect)((function(){(s=k()(r)).on(c.login,(function(e){e.email,e.response;console.log("got event")}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",children:[Object(a.jsxs)("label",{children:["E-Mail",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)("label",{children:["Password",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:o,onChange:function(e){return O(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(e){return function(e){return p.apply(this,arguments)}(e)},children:"LOGIN"})]})})},E=function(){var e=Object(b.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],j=Object(b.useState)(""),r=Object(h.a)(j,2),s=r[0],i=r[1],u=Object(b.useState)(""),l=Object(h.a)(u,2),o=l[0],O=l[1],x=Object(b.useState)(-1),d=Object(h.a)(x,2),f=d[0],p=d[1],g=Object(b.useState)(""),v=Object(h.a)(g,2),m=v[0],C=v[1],S=Object(b.useState)(""),y=Object(h.a)(S,2),F=y[0],N=y[1],I=Object(b.useState)(-1),L=Object(h.a)(I,2),k=L[0],w=L[1],E=Object(b.useState)(""),P=Object(h.a)(E,2),B=P[0],D=P[1],G=Object(b.useState)(""),M=Object(h.a)(G,2),R=M[0],T=M[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form",children:[Object(a.jsxs)("label",{children:["Farmer Licence ID",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsxs)("label",{children:["First Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)("label",{children:["Last Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:o,onChange:function(e){return O(e.target.value)}})]})]}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsxs)("label",{children:["ZIP Code",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:f,onChange:function(e){return p(parseInt(e.target.value))}})]}),Object(a.jsxs)("label",{children:["City",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:m,onChange:function(e){return C(e.target.value)}})]})]}),Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsxs)("label",{children:["Street",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:F,onChange:function(e){return N(e.target.value)}})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:k,onChange:function(e){return w(parseInt(e.target.value))}})]})]}),Object(a.jsxs)("label",{children:["E-Mail",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:B,onChange:function(e){return D(e.target.value)}})]}),Object(a.jsxs)("label",{children:["Password",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:R,onChange:function(e){return T(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){c(""),i(""),O(""),p(-1),C(""),N(""),w(-1),D(""),T("")},children:"REGISTER"})]})})};var P=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(y,{}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{path:"/",exact:!0,component:x}),Object(a.jsx)(O.a,{path:"/example",exact:!0,component:S}),Object(a.jsx)(O.a,{path:"/login",exact:!0,component:w}),Object(a.jsx)(O.a,{path:"/register",exact:!0,component:E})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,j=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),j(e),r(e),s(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),B()}},[[92,1,2]]]);
//# sourceMappingURL=main.c25216fc.chunk.js.map