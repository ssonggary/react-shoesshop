(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var n=c(18),i=c(0),r=c.n(i),s=c(20),j=c.n(s),a=(c(84),c(69)),d=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,132)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))},o=c(39),l=c(34),b=c(58),h=c(1);var O=[{id:0,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:2},{id:1,name:"\uba4b\uc9c4\uc2e0\ubc1c2",quan:1}];var u=Object(b.b)(Object(b.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.\ub370\uc774\ud130.id}));if(c>=0){var i=Object(n.a)(e);return i[c].quan++,i}var r=Object(n.a)(e);return r.push(t.\ub370\uc774\ud130),r}if("\uc218\ub7c9\uc99d\uac00"===t.type){var s=Object(n.a)(e);return s[t.\ub370\uc774\ud130].quan++,s}if("\uc218\ub7c9\uac10\uc18c"===t.type){var j=Object(n.a)(e);return j[t.\ub370\uc774\ud130].quan--,j}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!1:e}}));j.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(o.a,{basename:"/react",children:Object(h.jsx)(l.a,{store:u,children:Object(h.jsx)(a.a,{})})})}),document.getElementById("root")),d()},69:function(e,t,c){"use strict";c.d(t,"b",(function(){return S}));var n=c(18),i=c(5),r=(c.p,c(0)),s=c.n(r),j=c(120),a=c(118),d=c(121),o=c(119),l=c(76),b=(c(85),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),h=c(71),O=c.n(h),u=c(39),x=c(9),p=c(34),f=c(117),v=c(1);function m(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{"\uc774\ub984":e.\uc774\ub984}),Object(v.jsx)(k,{"\ub098\uc774":e.\ub098\uc774})]})}function g(){return Object(r.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4281")})),Object(v.jsx)("div",{children:"1111"})}var k=Object(r.memo)((function(){return Object(r.useEffect)((function(){console.log("\ub80c\ub354\ub9c1\ub4282")})),Object(v.jsx)("div",{children:"2222"})})),y=function(e){var t=Object(p.d)((function(e){return e}));console.log(t);var c=Object(p.c)();return Object(v.jsxs)("div",{children:[Object(v.jsxs)(f.a,{responsive:"sm",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(v.jsx)("th",{children:"\uc218\ub7c9"}),Object(v.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(v.jsx)("tbody",{children:t.reducer.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.id}),Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("td",{children:e.quan}),Object(v.jsxs)("td",{children:[Object(v.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":e.id})},children:"+"}),Object(v.jsx)("button",{onClick:function(){c({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":e.id})},children:"-"})]})]},t)}))})]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(v.jsxs)("div",{className:"my-alert2",children:[Object(v.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(v.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null,Object(v.jsx)(m,{"\uc774\ub984":"\uc874\ubc15","\ub098\uc774":"20"})]})},C=Object(r.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,130))})),S=s.a.createContext();function N(e){Object(r.useContext)(S);var t=Object(x.f)();return Object(v.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(v.jsx)("img",{src:"http://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(v.jsx)(w,{})]})}function w(){var e=Object(r.useContext)(S);return Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",e]})}t.a=function(){var e=Object(r.useState)(b),t=Object(i.a)(e,2),c=t[0],s=t[1],h=Object(r.useState)([10,11,12]),p=Object(i.a)(h,2),f=p[0],m=p[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(j.a,{bg:"light",expand:"lg",children:Object(v.jsxs)(a.a,{children:[Object(v.jsx)(j.a.Brand,{href:"#home",children:"ShoeShop"}),Object(v.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(d.a,{className:"me-auto",children:[Object(v.jsx)(d.a.Link,{as:u.b,to:"/",children:" Home "}),Object(v.jsx)(d.a.Link,{as:u.b,to:"/detail",children:"Detail "}),Object(v.jsxs)(o.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(v.jsx)(o.a.Item,{href:"#action/3.1",children:"Action"}),Object(v.jsx)(o.a.Item,{href:"#action/3.2",children:"Another action"}),Object(v.jsx)(o.a.Item,{href:"#action/3.3",children:"Something"}),Object(v.jsx)(o.a.Divider,{}),Object(v.jsx)(o.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(v.jsxs)(x.c,{children:[Object(v.jsxs)(x.a,{exact:!0,path:"/",children:[Object(v.jsx)("div",{className:"background",children:Object(v.jsxs)("div",{className:"dec",children:[Object(v.jsx)("h1",{children:"50% Season Off"}),Object(v.jsx)("p",{children:"This is simple"}),Object(v.jsx)("p",{children:Object(v.jsx)(l.a,{variant:"warning",children:"\ubc14\ub85c\uac00\uae30"})})]})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(S.Provider,{value:f,children:Object(v.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(v.jsx)(N,{shoes:c[t],i:t},t)}))})}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){O.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),s([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(v.jsx)(x.a,{path:"/detail/:id",children:Object(v.jsx)(S.Provider,{value:f,children:Object(v.jsx)(r.Suspense,{fallback:Object(v.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(v.jsx)(C,{shoes:c,"\uc7ac\uace0":f,"\uc7ac\uace0\ubcc0\uacbd":m})})})}),Object(v.jsx)(x.a,{path:"/cart",children:Object(v.jsx)(y,{})})]})]})}},84:function(e,t,c){},85:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.27c67a1d.chunk.js.map