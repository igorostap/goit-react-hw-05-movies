"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[219],{4219:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,u=e(885),i=e(3961),s=e(2791),o=e(6871),p=e(168),f=e(6031),d=f.ZP.ul(r||(r=(0,p.Z)(["\ndisplay:flex;\njustify-content: center;\nflex-direction: raw;\nflex-wrap: wrap;\n"]))),h=f.ZP.li(a||(a=(0,p.Z)(["\nwidth: 200px;\nmargin: 5px;\npadding: 10px;\n\nborder 1px solid gray;\nborder-radius: 5px;\nlist-style: none;\n"]))),l=f.ZP.p(c||(c=(0,p.Z)(["\nmargin: 0;\npadding: 20px;\ntext-align: center;\n"]))),g=e(184);function m(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,i.uV)(a).then(r).catch((function(n){return n.message}))}),[a]),(0,g.jsx)(d,{children:e&&e.map((function(n){return(0,g.jsxs)(h,{children:[n.profile_path?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n.profile_path),loading:"lazy",alt:n.name}):(0,g.jsx)(l,{children:"no image"}),(0,g.jsx)("p",{children:n.name}),(0,g.jsx)("p",{children:n.character})]},n.id)}))})}},3961:function(n,t,e){e.d(t,{Hx:function(){return g},Mc:function(){return f},on:function(){return x},uV:function(){return h},wr:function(){return o}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var s="3e74a828484d6b0f83071233fd134bba";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(s)).catch((function(n){return n.message}));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s)).catch((function(n){return alert("No results")}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s)).catch((function(n){return n.message}));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1")).catch((function(n){return n.message}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie/?api_key=".concat(s,"&query=").concat(t)).catch((function(n){return n.message}));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=219.f757c553.chunk.js.map