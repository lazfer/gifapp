(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setpers,n=Object(c.useState)(" "),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{className:"input-img",type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,c,a,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"BAlJP3cL8X15nkPxhvgZgCahtFDFvT65","10",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat("10","&api_key=").concat("BAlJP3cL8X15nkPxhvgZgCahtFDFvT65"),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json();case 8:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,img:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=(t.id,t.img);return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,title:e,alt:"imagen"}),Object(u.jsxs)("p",{children:[" ",e]})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{children:[" ",e," "]}),Object(u.jsxs)("div",{className:"card-grid",children:[r&&Object(u.jsx)("p",{children:"Loading"}),a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))]})]})},g=function(){var t=Object(c.useState)(["Goku"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" Gif Expert App "}),Object(u.jsx)(o,{setpers:a}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};n(17);r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.efe69469.chunk.js.map