"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[672],{114:function(n,e,t){t.d(e,{Z:function(){return k}});t(791);var r,a,i,c,o,s,u=t(984),p=t(168),v=t(731),l=t(444),d=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n"]))),f=l.ZP.li(a||(a=(0,p.Z)(["\n  margin-right: 20px;\n  list-style-type: none;\n"]))),x=(0,l.ZP)(v.OL)(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 7px 17px;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: normal;\n  color: #2e2c2c;\n  transition: all 0.2s ease-in-out;\n  &.active {\n    color: #053d53;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #67d94e;\n  }\n"]))),A=t(184),h=[{text:"Home",id:(0,u.x0)(),to:"/"},{text:"Movies",id:(0,u.x0)(),to:"/movies"}];function j(){var n=h.map((function(n){var e=n.id,t=n.to,r=n.text;return(0,A.jsx)(f,{children:(0,A.jsx)(x,{to:t,end:!0,children:r})},e)}));return(0,A.jsx)(d,{children:n})}l.ZP.header(c||(c=(0,p.Z)(["\n  display: flex;\n"])));var m=l.ZP.nav(o||(o=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n"]))),g=l.ZP.header(s||(s=(0,p.Z)(["\n  margin-bottom: 40px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n"])));function k(){return(0,A.jsx)(g,{children:(0,A.jsx)(m,{children:(0,A.jsx)(j,{})})})}},840:function(n,e,t){t.d(e,{Bt:function(){return d},Tg:function(){return u},W0:function(){return p},vw:function(){return v},y:function(){return l}});var r=t(861),a=t(757),i=t.n(a),c=t(44),o="https://api.themoviedb.org/3",s="b38b0907dd20d39e91235c8171bbf1c5",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,c.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return r=n.sent,console.log(r.data),n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,r=void 0===t?"":t,a=e.page,u=void 0===a?1:a,n.next=3,c.ZP.get("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&page=").concat(u,"&include_adult=false&query=").concat(r));case 3:return p=n.sent,n.abrupt("return",p.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,c.ZP.get("\n  ".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,c.ZP.get("\n  ".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},672:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c=t(861),o=t(885),s=t(757),u=t.n(s),p=t(791),v=t(689),l=t(840),d=t(521),f=t(305),x=t(168),A=t(444),h=A.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n"]))),j=A.ZP.img(a||(a=(0,x.Z)(["\n  width: 420px;\n  height: 100%;\n"]))),m=A.ZP.div(i||(i=(0,x.Z)(["\n  margin-left: 20px;\n"]))),g=t(184),k=function(n){var e=n.movies,t=e.title,r=e.poster_path,a=e.vote_average,i=e.overview,c=e.genres,o=e.release_date,s=new Date(o);return(0,g.jsxs)(h,{children:[(0,g.jsx)("div",{children:r?(0,g.jsx)(j,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r),alt:t}):(0,g.jsx)(j,{src:f,alt:"no img"})}),(0,g.jsxs)(m,{children:[(0,g.jsxs)("h2",{children:[t," (",s.getFullYear(),")"]}),(0,g.jsxs)("p",{children:["User score:",Math.round(10*Number(a))]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:i}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("div",{children:c.map((function(n){var e=n.name,t=n.id;return(0,g.jsx)("p",{children:e},t)}))})]})]})},D=t(731);function w(){var n,e,t=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:"Information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(D.OL,{state:{from:t},to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(D.OL,{state:{from:t},to:"reviews",children:"Rewiews"})})]})]})}var P=t(114);function y(){var n,e,t=(0,p.useState)(null),r=(0,o.Z)(t,2),a=r[0],i=r[1],s=(0,p.useState)(null),f=(0,o.Z)(s,2),x=f[0],A=f[1],h=(0,p.useState)(!1),j=(0,o.Z)(h,2),m=j[0],D=j[1],y=(0,v.UO)().id,O=(0,v.s0)(),Z=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(y){n.next=2;break}return n.abrupt("return");case 2:return D(!0),n.prev=3,n.next=6,(0,l.W0)({id:y});case 6:e=n.sent,i(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),A(n.t0);case 13:return n.prev=13,D(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[3,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[y]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(P.Z,{}),a&&(0,g.jsx)("button",{type:"button",onClick:function(){return O(Z)},children:"Go Back"}),m&&(0,g.jsx)(d.a,{}),a&&(0,g.jsx)(k,{movies:a}),a&&(0,g.jsx)(w,{}),x&&(0,g.jsx)("p",{children:"\u0421\u043f\u0440\u043e\u0431\u0443\u0439 \u0449\u0435..."}),(0,g.jsx)(v.j3,{})]})}},305:function(n){n.exports="data:image/jpeg;base64,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"},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})},984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=672.bdcf58dc.chunk.js.map