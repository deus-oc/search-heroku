(this["webpackJsonpsearch-ui"]=this["webpackJsonpsearch-ui"]||[]).push([[0],{67:function(e,s,t){},69:function(e,s,t){},95:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),n=t(10),r=t.n(n),i=t(24),l=t.n(i),j=t(41),d=t(33),o=t(131),b=t(132),h=t(130),u=t(56),p=t.n(u),O=(t(67),t(3)),x=function(e){var s=e.options,t=e.clickedOptions,a=e.searchStr,c=function(e){var s=e.toLowerCase().indexOf(a.toLowerCase()),t=a.length,c=e.length;if(-1!==s){var n=e.substring(0,s),r=e.substring(s,s+t),i=e.substring(s+t,c);return Object(O.jsxs)("span",{children:[n,Object(O.jsx)("b",{children:r}),i]})}return Object(O.jsx)("span",{children:e})};return Object(O.jsx)("div",{className:"search-box",children:s.length>0?Object(O.jsx)("div",{children:s.map((function(e){return Object(O.jsxs)("div",{className:"entry",onClick:function(){return t(e._id)},children:[Object(O.jsxs)("div",{children:[c(e.Name),Object(O.jsx)("span",{className:"dot green"}),Object(O.jsx)("span",{className:"dot blue"}),Object(O.jsx)("span",{className:"dot orange"}),Object(O.jsx)("span",{className:"dot pink"})]}),Object(O.jsx)("div",{className:"website-name",children:e.website})]},e._id)}))}):Object(O.jsx)("div",{className:"no-data",children:"No data matching"})})},m=(t(69),t.p+"static/media/icon.1e551ec6.svg"),f=function(e){var s=e.data;return s?Object(O.jsxs)("div",{className:"top",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("div",{className:"left-image",children:Object(O.jsx)("img",{src:m,alt:"dummy",height:"100",width:"100"})}),Object(O.jsxs)("div",{className:"left-text",children:[Object(O.jsxs)("div",{children:[s.Name," ",Object(O.jsx)("i",{style:{color:"blue"},className:"fas fa-external-link-alt"})]}),Object(O.jsxs)("div",{style:{color:"blue",fontSize:"small"},children:[s.website,Object(O.jsx)("i",{className:"fas fa-globe"})]}),Object(O.jsx)("div",{style:{fontSize:"small"},children:s.Location}),Object(O.jsx)("div",{children:Object(O.jsx)("i",{style:{backgroundColor:"lightblue",padding:"1px"},className:"fa fa-linkedin ","aria-hidden":"true"})})]})]}),Object(O.jsxs)("div",{className:"center",children:[Object(O.jsxs)("div",{className:"num-employees",children:[Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-user-friends"})})}),Object(O.jsxs)("div",{className:"num-emp-content",children:[Object(O.jsx)("span",{children:Math.floor(100*Math.random())}),Object(O.jsx)("span",{children:"Employees"})]})]}),Object(O.jsxs)("div",{className:"num-employees",children:[Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-globe"})})}),Object(O.jsxs)("div",{className:"num-emp-content",children:[Object(O.jsx)("span",{children:"Motor"}),Object(O.jsx)("span",{children:"Industry"})]})]})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)("p",{className:"paragraph r-blue",children:" last activity : Last 1 year "}),Object(O.jsxs)("p",{className:"paragraph r-darkblue",children:["owner:",s.Owner]}),Object(O.jsxs)("p",{className:"paragraph r-orange",children:["Opportunities:",Math.floor(100*Math.random())]}),Object(O.jsx)("p",{className:"paragraph r-grey",children:"Is Customer"}),Object(O.jsx)("p",{className:"paragraph r-orange",children:"Not in salesLoft"})]})]}),Object(O.jsxs)("div",{className:"bottom",children:[Object(O.jsx)("p",{className:"b",children:" lorem "}),Object(O.jsx)("p",{className:"b",children:" ipsum "}),Object(O.jsx)("p",{className:"b",children:" accredited public e-learning "}),Object(O.jsx)("p",{className:"b",children:" florida "}),Object(O.jsx)("p",{className:"b",children:"Not in salesLoft"})]})]}):Object(O.jsx)(O.Fragment,{})},v=t(42),N=t.n(v),g=function(){var e,s,t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)([]),u=Object(d.a)(i,2),m=u[0],v=u[1],g=Object(a.useState)(!1),y=Object(d.a)(g,2),k=y[0],w=y[1],S=Object(a.useState)(),C=Object(d.a)(S,2),L=C[0],M=C[1],I=function(){var s=Object(j.a)(l.a.mark((function s(t){var a,c;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(0===(t=t.trim()).length){s.next=19;break}return"undefined"!=typeof e&&e.cancel(),e=N.a.CancelToken.source(),a={cancelToken:e.token},s.prev=5,s.next=8,N.a.get("/search?q=".concat(t),a);case 8:c=s.sent,v(c.data.data),r(t),w(!0),s.next=17;break;case 14:s.prev=14,s.t0=s.catch(5),console.log(s.t0);case 17:s.next=20;break;case 19:w(!1);case 20:case"end":return s.stop()}}),s,null,[[5,14]])})));return function(e){return s.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(s),s=setTimeout((function(){I(t.target.value)}),600);case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(l.a.mark((function e(s){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),e.prev=1,e.next=4,N.a.get("/search/".concat(s));case 4:t=e.sent,M(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"global-div",children:[Object(O.jsx)("div",{className:"search-div",children:Object(O.jsx)(h.a,{id:"searchBox",placeholder:"Search Company",variant:"outlined",onChange:T,fullWidth:!0,inputProps:{style:{fontFamily:"cursive"}},InputProps:{startAdornment:Object(O.jsx)(b.a,{position:"start",children:Object(O.jsx)(o.a,{children:Object(O.jsx)(p.a,{})})})}})}),k?Object(O.jsx)(x,{options:m,clickedOptions:z,searchStr:n}):Object(O.jsx)(f,{data:L})]})};var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"search-container",children:Object(O.jsx)(g,{})})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.923aed3b.chunk.js.map