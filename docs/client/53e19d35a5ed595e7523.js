(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("3e65b3fd",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("d9264fd4",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"f",function(){return l}),n.d(e,"i",function(){return c}),n.d(e,"h",function(){return d}),n.d(e,"a",function(){return f}),n.d(e,"b",function(){return m}),n.d(e,"g",function(){return h}),n.d(e,"d",function(){return v}),n.d(e,"c",function(){return _});n(83),n(58),n(26);var r=n(82),o={computed:{name:function(){return this.item.title?this.item.title:this.item.name}}},l={computed:{stars:function(){if(this.item.vote_average)return 10*this.item.vote_average}}},c={computed:{yearStart:function(){var t=this.item.release_date?this.item.release_date:this.item.first_air_date;if(t)return t.split("-")[0]}}},d={computed:{yearEnd:function(){var t=this.item.last_air_date;if(t)return t.split("-")[0]}}},f={computed:{backdrop:function(){if(this.item.backdrop_path)return"".concat(r.a,"/original").concat(this.item.backdrop_path)}}},m={computed:{cert:function(){if(this.item.release_dates){var t=this.item.release_dates.results.find(function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1});if(!t)return null;var e=t.release_dates.find(function(t){return""!==t.certification});if(e)return e.certification}else if(this.item.content_ratings){var n=this.item.content_ratings.results.find(function(t){return"GB"===t.iso_3166_1||"US"===t.iso_3166_1});return n?n.rating:null}}}},h={computed:{trailer:function(){var t=this.item.videos.results;return t.length&&(t=t.find(function(video){return"Trailer"===video.type}))?[{name:t.name,src:"https://www.youtube.com/embed/".concat(t.key,"?rel=0&showinfo=0&autoplay=1")}]:null}}},v={computed:{directors:function(){var t=this.item.credits.crew;if(t)return t.filter(function(t){return"Director"===t.job}).map(function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")}).join(", ")}}},_={computed:{creators:function(){var t=this.item.created_by;if(t)return t.map(function(t){return'<a href="/person/'.concat(t.id,'">').concat(t.name,"</a>")}).join(", ")}}}},197:function(t,e,n){"use strict";var r=n(4),o=n(22),l=n(28),c=n(118),d=n(59),f=n(13),m=n(60).f,h=n(85).f,v=n(14).f,_=n(200).trim,w=r.Number,y=w,x=w.prototype,k="Number"==l(n(84)(x)),N="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=N?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?f(function(){x.valueOf.call(n)}):"Number"!=l(n))?c(new y(C(e)),n,w):C(e)};for(var E,I=n(10)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;I.length>T;T++)o(y,E=I[T])&&!o(w,E)&&v(w,E,h(y,E));w.prototype=x,x.constructor=w,n(15)(r,"Number",w)}},198:function(t,e,n){"use strict";n(26);var r=n(82),o=n(196),l={mixins:[o.e,o.f],props:{item:{type:Object,required:!0}},computed:{poster:function(){return this.item.poster_path?"".concat(r.a,"/w370_and_h556_bestv2").concat(this.item.poster_path):!!this.item.profile_path&&"".concat(r.a,"/w370_and_h556_bestv2").concat(this.item.profile_path)},media:function(){return this.item.media_type?this.item.media_type:this.item.name?"tv":"movie"}}},c=n(3),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("nuxt-link",{staticClass:"card__link",attrs:{to:{name:t.media+"-id",params:{id:t.item.id}}}},[n("div",{staticClass:"card__img"},[t.poster?n("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:t.name}}):n("span",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[n("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),t._v(" "),n("h2",{staticClass:"card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),"person"!==t.media&&(t.stars||t.item.vote_average)?n("div",{staticClass:"card__rating"},[t.stars?n("div",{staticClass:"card__stars"},[n("div",{style:{width:t.stars+"%"}})]):t._e(),t._v(" "),t.item.vote_average?n("div",{staticClass:"card__vote"},[t._v("\n        "+t._s(t._f("rating")(t.item.vote_average))+"\n      ")]):t._e()]):t._e()])],1)},[],!1,null,null,null);e.a=component.exports},199:function(t,e,n){"use strict";var r={props:{title:{type:String,required:!0}}},o=(n(202),n(204)),l=n(3);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.$style.nav},[n("button",{class:t.$style.button,attrs:{type:"button","aria-label":"Go Back"},on:{click:function(e){return t.$router.go(-1)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M16.5 20.5l-9-8.5 9-8.5"}})])]),t._v(" "),n("p",{class:t.$style.text},[t._v("\n    "+t._s(t.title)+"\n  ")])])},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},200:function(t,e,n){var r=n(9),o=n(27),l=n(13),c=n(201),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=l(function(){return!!c[t]()||"​"!="​"[t]()}),f=o[t]=d?e(v):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},201:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},202:function(t,e,n){"use strict";var r=n(194);n.n(r).a},203:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,"@media (max-width:1199px){.topnav-active{padding-top:4.5rem}}",""])},204:function(t,e,n){"use strict";var r=n(195),o=n.n(r);e.default=o.a},205:function(t,e,n){(e=t.exports=n(20)(!1)).push([t.i,".nav_1I_Zy{position:fixed;top:0;right:0;left:0;z-index:5;display:flex;align-items:center;justify-content:center;height:4.5rem;padding:0 5.5rem;background-color:#000}@media (min-width:1200px){.nav_1I_Zy{display:none}}.text_1juHD{margin:0;overflow:hidden;font-size:1.4rem;text-overflow:ellipsis;white-space:nowrap}.button_2NHTA{position:absolute;top:0;left:0;width:4.5rem;height:100%;padding:0;margin:0;background:none;outline:0;transition:all .2s}.button_2NHTA:focus,.button_2NHTA:hover{opacity:.8}",""]),e.locals={nav:"nav_1I_Zy",text:"text_1juHD",button:"button_2NHTA"}},206:function(t,e,n){"use strict";n(197);var r=n(16),o={components:{Card:n(198).a},props:{title:{type:String,required:!1,default:""},viewAllUrl:{type:Object,required:!1,default:function(){return null}},items:{type:Object,required:!0},show:{type:Number,required:!1,default:null},loading:{type:Boolean,required:!1,default:!1}},created:function(){this.show&&(this.items.results=this.items.results.splice(0,this.show),this.items.total_pages=1,this.items.total_results=this.show)},mounted:function(){window.addEventListener("scroll",this.getScrollPosition)},beforeDestroy:function(){window.removeEventListener("scroll",this.getScrollPosition)},methods:{getScrollPosition:Object(r.a)(function(){this.items.page<this.items.total_pages?window.innerHeight+window.pageYOffset>=document.body.offsetHeight-600&&!this.loading&&this.loadMore():window.removeEventListener("scroll",this.getScrollPosition)},50),loadMore:function(){this.$emit("loadMore")}}},l=n(3),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listing"},[t.title||t.viewAllUrl?n("div",{staticClass:"listing__head"},[t.title?n("h2",{staticClass:"listing__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.viewAllUrl?n("nuxt-link",{staticClass:"listing__explore",attrs:{to:t.viewAllUrl}},[n("strong",[t._v("Explore All")])]):t._e()],1):t._e(),t._v(" "),n("div",{staticClass:"listing__items"},t._l(t.items.results,function(t){return n("Card",{key:"card-"+t.id,attrs:{item:t}})}),1),t._v(" "),t.items.page<t.items.total_pages?n("div",{staticClass:"listing__nav"},[t.loading?n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 44 44",stroke:"#2196f3"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd","stroke-width":"2"}},[n("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[n("animate",{attrs:{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})]),n("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[n("animate",{attrs:{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})])])])]):t._e()]):t._e()])},[],!1,null,null,null);e.a=component.exports},282:function(t,e,n){"use strict";n.r(e);n(83),n(39);var r=n(8),o=(n(26),n(82)),l=n(199),c=n(206),d={components:{TopNav:l.a,Listing:c.a},data:function(){return{loading:!1}},head:function(){return{title:this.metaTitle,meta:[{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"og:url",property:"og:url",content:"".concat("http://localhost:3000").concat(this.$route.path)}],bodyAttrs:{class:"topnav-active"}}},computed:{metaTitle:function(){return this.title},title:function(){return this.genre?"TV Genre: ".concat(this.genre.name):"TV Genre"}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,l,c,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,t.prev=1,t.next=4,Object(o.e)("tv",n.id);case 4:return l=t.sent,t.next=7,Object(o.c)("tv");case 7:if(c=t.sent,!(d=c.find(function(t){return t.id===parseInt(n.id)}))){t.next=13;break}return t.abrupt("return",{items:l,genre:d});case 13:r({message:"Page not found"});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),r({statusCode:504,message:"Data not available"});case 19:case"end":return t.stop()}},t,null,[[1,16]])}));return function(e){return t.apply(this,arguments)}}(),methods:{loadMore:function(){var t=this;this.loading=!0,Object(o.e)("tv",this.$route.params.id,this.items.page+1).then(function(e){t.items.results=t.items.results.concat(e.results),t.items.page=e.page,t.loading=!1}).catch(function(){t.loading=!1})}}},f=n(3),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("TopNav",{attrs:{title:t.metaTitle}}),t._v(" "),t.items&&t.items.results.length?n("Listing",{attrs:{title:t.title,items:t.items,loading:t.loading},on:{loadMore:t.loadMore}}):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);