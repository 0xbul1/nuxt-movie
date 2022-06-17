exports.ids=[8],exports.modules={100:function(t,e,r){"use strict";r.r(e);var n=r(83),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},101:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".page-search .main{padding-top:6rem}@media (min-width:1200px){.page-search .main{padding-top:8rem}}",""])},120:function(t,e,r){"use strict";r.r(e);var n=r(15),o=r(6),l={components:{Card:r(48).a},props:{title:{type:String,required:!1,default:""},items:{type:Object,required:!0},loading:{type:Boolean,required:!1,default:!1}},mounted(){window.addEventListener("scroll",this.getScrollPosition)},beforeDestroy(){window.removeEventListener("scroll",this.getScrollPosition)},methods:{getScrollPosition:Object(o.a)(function(){if(this.items.page<this.items.total_pages){window.innerHeight+window.pageYOffset>=document.body.offsetHeight-600&&!this.loading&&this.loadMore()}else window.removeEventListener("scroll",this.getScrollPosition)},50),loadMore(){this.$emit("loadMore")}}},c=r(1),d=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"listing"},[t._ssrNode((t.title?'<div class="listing__head">'+(t.title?'<h2 class="listing__title">'+t._ssrEscape("\n      "+t._s(t.title)+"\n    ")+"</h2>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+" "),t._ssrNode('<div class="listing__items">',"</div>",t._l(t.items.results,function(t){return r("Card",{key:"card-"+t.id,attrs:{item:t}})}),1),t._ssrNode(" "+(t.items.page<t.items.total_pages?'<div class="listing__nav">'+(t.loading?'<div><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" stroke="#2196f3"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g></svg></div>':"\x3c!----\x3e")+"</div>":"\x3c!----\x3e"))],2)},[],!1,null,null,"a9a7315e").exports;let m="/";var h={components:{SearchResults:d},data:()=>({loading:!1}),head(){return{title:"Search",meta:[{hid:"og:title",property:"og:title",content:"Search"},{hid:"og:url",property:"og:url",content:`http://localhost:3000${this.$route.path}`}],bodyAttrs:{class:"page page-search"}}},computed:{query(){return this.$route.query.q?this.$route.query.q:""},title(){return this.query?`Results For: ${this.query}`:""}},async asyncData({query:t,error:e,redirect:r}){try{if(t.q){return{items:await Object(n.q)(t.q,1)}}r("/")}catch{e({message:"Page not found"})}},mounted(){this.$store.commit("search/openSearch"),this.$store.commit("search/setFromPage",m)},beforeRouteEnter(t,e,r){m=e.path,r()},beforeRouteUpdate(t,e,r){r(),this.getResults()},beforeRouteLeave(t,e,r){const n=document.getElementById("search");r(),n&&n.value.length&&this.$store.commit("search/closeSearch")},methods:{async getResults(){if(!this.query.length)return void(this.items=null);const data=await Object(n.q)(this.query);data.total_results?this.items=data:this.items=null},loadMore(){this.loading=!0,Object(n.q)(this.query,this.items.page+1).then(t=>{this.items.results=this.items.results.concat(t.results),this.items.page=t.page,this.loading=!1}).catch(()=>{this.loading=!1})}}};var _=Object(c.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[this.items&&this.items.results.length?e("SearchResults",{attrs:{title:this.title,items:this.items,loading:this.loading},on:{loadMore:this.loadMore}}):this._e()],1)},[],!1,function(t){var e=r(100);e.__inject__&&e.__inject__(t)},null,"39c29695");e.default=_.exports},44:function(t,e,r){"use strict";r.d(e,"e",function(){return o}),r.d(e,"f",function(){return l}),r.d(e,"i",function(){return c}),r.d(e,"h",function(){return d}),r.d(e,"a",function(){return m}),r.d(e,"b",function(){return h}),r.d(e,"g",function(){return _}),r.d(e,"d",function(){return f}),r.d(e,"c",function(){return v});var n=r(15);const o={computed:{name(){return this.item.title?this.item.title:this.item.name}}},l={computed:{stars(){if(this.item.vote_average)return 10*this.item.vote_average}}},c={computed:{yearStart(){const t=this.item.release_date?this.item.release_date:this.item.first_air_date;if(t)return t.split("-")[0]}}},d={computed:{yearEnd(){const t=this.item.last_air_date;if(t)return t.split("-")[0]}}},m={computed:{backdrop(){if(this.item.backdrop_path)return`${n.a}/original${this.item.backdrop_path}`}}},h={computed:{cert(){if(this.item.release_dates){const t=this.item.release_dates.results.find(t=>"GB"===t.iso_3166_1||"US"===t.iso_3166_1);if(!t)return null;const e=t.release_dates.find(t=>""!==t.certification);if(e)return e.certification}else if(this.item.content_ratings){const t=this.item.content_ratings.results.find(t=>"GB"===t.iso_3166_1||"US"===t.iso_3166_1);return t?t.rating:null}}}},_={computed:{trailer(){let t=this.item.videos.results;return t.length&&(t=t.find(video=>"Trailer"===video.type))?[{name:t.name,src:`https://www.youtube.com/embed/${t.key}?rel=0&showinfo=0&autoplay=1`}]:null}}},f={computed:{directors(){const t=this.item.credits.crew;if(t)return t.filter(t=>"Director"===t.job).map(t=>`<a href="/person/${t.id}">${t.name}</a>`).join(", ")}}},v={computed:{creators(){const t=this.item.created_by;if(t)return t.map(t=>`<a href="/person/${t.id}">${t.name}</a>`).join(", ")}}}},48:function(t,e,r){"use strict";var n=r(15),o=r(44),l={mixins:[o.e,o.f],props:{item:{type:Object,required:!0}},computed:{poster(){return this.item.poster_path?`${n.a}/w370_and_h556_bestv2${this.item.poster_path}`:!!this.item.profile_path&&`${n.a}/w370_and_h556_bestv2${this.item.profile_path}`},media(){return this.item.media_type?this.item.media_type:this.item.name?"tv":"movie"}}},c=r(1),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("nuxt-link",{staticClass:"card__link",attrs:{to:{name:t.media+"-id",params:{id:t.item.id}}}},[r("div",{staticClass:"card__img"},[t.poster?r("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:t.name}}):r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[r("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),t._v(" "),r("h2",{staticClass:"card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),"person"!==t.media&&(t.stars||t.item.vote_average)?r("div",{staticClass:"card__rating"},[t.stars?r("div",{staticClass:"card__stars"},[r("div",{style:{width:t.stars+"%"}})]):t._e(),t._v(" "),t.item.vote_average?r("div",{staticClass:"card__vote"},[t._v("\n        "+t._s(t._f("rating")(t.item.vote_average))+"\n      ")]):t._e()]):t._e()])],1)},[],!1,null,null,"36a9cdcc");e.a=component.exports},83:function(t,e,r){var content=r(101);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("5e80229c",content,!0,t)}}};
//# sourceMappingURL=2d24eb8d5764416c8d24.js.map