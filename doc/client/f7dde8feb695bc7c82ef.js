(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},283:function(e,t,n){"use strict";n.r(t);var r=n(240),o=(n(39),n(8)),c=n(82),l=n(211),v=n(212),d={components:{Hero:l.a,ListingCarousel:v.a},computed:{trendingMoviesTitle:function(){return Object(c.d)("movie","trending").title},trendingMoviesUrl:function(){return{name:"movie-category-name",params:{name:"trending"}}},trendingTvTitle:function(){return Object(c.d)("tv","trending").title},trendingTvUrl:function(){return{name:"tv-category-name",params:{name:"trending"}}}},asyncData:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var n,o,l,v,d,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.error,e.prev=1,e.next=4,Object(c.j)("movie");case 4:return o=e.sent,e.next=7,Object(c.j)("tv");case 7:if(l=e.sent,d=[].concat(Object(r.a)(o.results),Object(r.a)(l.results)),m=d[Math.floor(Math.random()*d.length)],"movie"!==(m.title?"movie":"tv")){e.next=17;break}return e.next=14,Object(c.f)(m.id);case 14:v=e.sent,e.next=20;break;case 17:return e.next=19,Object(c.k)(m.id);case 19:v=e.sent;case 20:return e.abrupt("return",{trendingMovies:o,trendingTv:l,featured:v});case 23:e.prev=23,e.t0=e.catch(1),n({statusCode:504,message:"Data not available"});case 26:case"end":return e.stop()}},e,null,[[1,23]])}));return function(t){return e.apply(this,arguments)}}()},m=n(3),component=Object(m.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main"},[n("Hero",{attrs:{item:e.featured}}),e._v(" "),e.trendingMovies&&e.trendingMovies.results.length?n("ListingCarousel",{attrs:{title:e.trendingMoviesTitle,"view-all-url":e.trendingMoviesUrl,items:e.trendingMovies}}):e._e(),e._v(" "),e.trendingTv&&e.trendingTv.results.length?n("ListingCarousel",{attrs:{title:e.trendingTvTitle,"view-all-url":e.trendingTvUrl,items:e.trendingTv}}):e._e()],1)},[],!1,null,null,null);t.default=component.exports}}]);