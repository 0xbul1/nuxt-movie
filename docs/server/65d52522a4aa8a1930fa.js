exports.ids=[6],exports.modules={122:function(t,e,r){"use strict";r.r(e);var o=r(15),n=r(68),l=r(69),d={components:{Hero:n.a,ListingCarousel:l.a},head(){return{title:"Movies",meta:[{hid:"og:title",property:"og:title",content:"Movies"},{hid:"og:url",property:"og:url",content:`http://localhost:3000${this.$route.path}`}]}},computed:{popularTitle:()=>Object(o.d)("movie","popular").title,popularUrl:()=>({name:"movie-category-name",params:{name:"popular"}}),topRatedTitle:()=>Object(o.d)("movie","top_rated").title,topRatedUrl:()=>({name:"movie-category-name",params:{name:"top_rated"}}),upcomingTitle:()=>Object(o.d)("movie","upcoming").title,upcomingUrl:()=>({name:"movie-category-name",params:{name:"upcoming"}}),nowPlayingTitle:()=>Object(o.d)("movie","now_playing").title,nowPlayingUrl:()=>({name:"movie-category-name",params:{name:"now_playing"}})},async asyncData({error:t}){try{const e=await Object(o.h)("popular"),r=await Object(o.h)("top_rated"),n=await Object(o.h)("upcoming");return{popular:e,topRated:r,upcoming:n,nowPlaying:await Object(o.h)("now_playing"),featured:await Object(o.f)(n.results[0].id)}}catch{t({statusCode:504,message:"Data not available"})}}},m=r(1),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("Hero",{attrs:{item:t.featured}}),t._ssrNode(" "),t.popular&&t.popular.results.length?r("ListingCarousel",{attrs:{title:t.popularTitle,"view-all-url":t.popularUrl,items:t.popular}}):t._e(),t._ssrNode(" "),t.topRated&&t.topRated.results.length?r("ListingCarousel",{attrs:{title:t.topRatedTitle,"view-all-url":t.topRatedUrl,items:t.topRated}}):t._e(),t._ssrNode(" "),t.upcoming&&t.upcoming.results.length?r("ListingCarousel",{attrs:{title:t.upcomingTitle,"view-all-url":t.upcomingUrl,items:t.upcoming}}):t._e(),t._ssrNode(" "),t.nowPlaying&&t.nowPlaying.results.length?r("ListingCarousel",{attrs:{title:t.nowPlayingTitle,"view-all-url":t.nowPlayingUrl,items:t.nowPlaying}}):t._e()],2)},[],!1,null,null,"6310278e");e.default=component.exports},44:function(t,e,r){"use strict";r.d(e,"e",function(){return n}),r.d(e,"f",function(){return l}),r.d(e,"i",function(){return d}),r.d(e,"h",function(){return m}),r.d(e,"a",function(){return c}),r.d(e,"b",function(){return h}),r.d(e,"g",function(){return _}),r.d(e,"d",function(){return v}),r.d(e,"c",function(){return f});var o=r(15);const n={computed:{name(){return this.item.title?this.item.title:this.item.name}}},l={computed:{stars(){if(this.item.vote_average)return 10*this.item.vote_average}}},d={computed:{yearStart(){const t=this.item.release_date?this.item.release_date:this.item.first_air_date;if(t)return t.split("-")[0]}}},m={computed:{yearEnd(){const t=this.item.last_air_date;if(t)return t.split("-")[0]}}},c={computed:{backdrop(){if(this.item.backdrop_path)return`${o.a}/original${this.item.backdrop_path}`}}},h={computed:{cert(){if(this.item.release_dates){const t=this.item.release_dates.results.find(t=>"GB"===t.iso_3166_1||"US"===t.iso_3166_1);if(!t)return null;const e=t.release_dates.find(t=>""!==t.certification);if(e)return e.certification}else if(this.item.content_ratings){const t=this.item.content_ratings.results.find(t=>"GB"===t.iso_3166_1||"US"===t.iso_3166_1);return t?t.rating:null}}}},_={computed:{trailer(){let t=this.item.videos.results;return t.length&&(t=t.find(video=>"Trailer"===video.type))?[{name:t.name,src:`https://www.youtube.com/embed/${t.key}?rel=0&showinfo=0&autoplay=1`}]:null}}},v={computed:{directors(){const t=this.item.credits.crew;if(t)return t.filter(t=>"Director"===t.job).map(t=>`<a href="/person/${t.id}">${t.name}</a>`).join(", ")}}},f={computed:{creators(){const t=this.item.created_by;if(t)return t.map(t=>`<a href="/person/${t.id}">${t.name}</a>`).join(", ")}}}},47:function(t,e,r){var content=r(58);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(5).default;t.exports.__inject__=function(t){o("69793996",content,!0,t)}},48:function(t,e,r){"use strict";var o=r(15),n=r(44),l={mixins:[n.e,n.f],props:{item:{type:Object,required:!0}},computed:{poster(){return this.item.poster_path?`${o.a}/w370_and_h556_bestv2${this.item.poster_path}`:!!this.item.profile_path&&`${o.a}/w370_and_h556_bestv2${this.item.profile_path}`},media(){return this.item.media_type?this.item.media_type:this.item.name?"tv":"movie"}}},d=r(1),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("nuxt-link",{staticClass:"card__link",attrs:{to:{name:t.media+"-id",params:{id:t.item.id}}}},[r("div",{staticClass:"card__img"},[t.poster?r("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.poster,expression:"poster"}],staticClass:"lazyload",attrs:{alt:t.name}}):r("span",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd",fill:"#999"}},[r("path",{attrs:{d:"M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"}})])])]),t._v(" "),r("h2",{staticClass:"card__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),"person"!==t.media&&(t.stars||t.item.vote_average)?r("div",{staticClass:"card__rating"},[t.stars?r("div",{staticClass:"card__stars"},[r("div",{style:{width:t.stars+"%"}})]):t._e(),t._v(" "),t.item.vote_average?r("div",{staticClass:"card__vote"},[t._v("\n        "+t._s(t._f("rating")(t.item.vote_average))+"\n      ")]):t._e()]):t._e()])],1)},[],!1,null,null,"36a9cdcc");e.a=component.exports},49:function(t,e,r){var content=r(65);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(5).default;t.exports.__inject__=function(t){o("8270abd8",content,!0,t)}},50:function(t,e,r){var content=r(67);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(5).default;t.exports.__inject__=function(t){o("147630ae",content,!0,t)}},51:function(t,e,r){"use strict";var o=r(6);let n,l,d,m;var c={props:{data:{type:Array,required:!1,default:function(){return[]}},type:{type:String,required:!1,default:"image"},modifier:{type:String,required:!1,default:""},nav:{type:Boolean,required:!1,default:!1},startAt:{type:Number,required:!1,default:0},ariaLabel:{type:String,required:!1,default:""}},head:()=>({bodyAttrs:{class:"modal-open"}}),data:()=>({selected:null,activeItem:null}),computed:{modalClass(){return{"modal--nav":this.showNav,[`modal--${this.type}`]:!0,[this.modifier]:!0}},showNav(){return this.nav&&this.data.length>1},label(){return this.ariaLabel?this.ariaLabel:this.activeItem&&this.activeItem.name?this.activeItem.name:null}},watch:{selected(){this.activeItem=this.data[this.selected]}},created(){this.selected=this.startAt},beforeMount(){window.addEventListener("keydown",this.handleKeyDown),n=document.activeElement},mounted(){l=this.$refs.modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(l),d=l[0],m=l[l.length-1],d.focus(),"iframe"===this.type&&(this.handleIframeSize(),window.addEventListener("resize",this.resizeIframeSize))},beforeDestroy(){window.removeEventListener("keydown",this.handleKeyDown),"iframe"===this.type&&window.removeEventListener("resize",this.resizeIframeSize),n&&n.focus()},methods:{previous(){this.selected=(this.selected-1+this.data.length)%this.data.length},next(){this.selected=(this.selected+1)%this.data.length},close(){this.$emit("close")},handleKeyDown(t){if(27===t.keyCode)this.close();else if(this.nav&&39===t.keyCode)this.next();else if(this.nav&&37===t.keyCode)this.previous();else if(9===t.keyCode){if(1===l.length)return void t.preventDefault();t.shiftKey?this.handleBackwardTab(t):this.handleForwardTab(t)}},handleForwardTab(t){document.activeElement===m&&(t.preventDefault(),d.focus())},handleBackwardTab(t){document.activeElement===d&&(t.preventDefault(),m.focus())},handleIframeSize(){const t=getComputedStyle(this.$refs.modal);let e,r,o=this.$refs.modal.offsetWidth,n=this.$refs.modal.offsetHeight;e=o-=parseFloat(t.paddingRight)+parseFloat(t.paddingLeft),r=n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n>o/(16/9)?r=o/(16/9):o>n*(16/9)&&(e=n*(16/9)),this.$refs.modal.querySelector(".modal__iframe").style.width=`${e}px`,this.$refs.modal.querySelector(".modal__iframe").style.height=`${r}px`},resizeIframeSize:Object(o.a)(function(){this.handleIframeSize()},600)}},h=r(1);var component=Object(h.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal",appear:""}},[r("div",{ref:"modal",staticClass:"modal",class:t.modalClass,attrs:{tabindex:"-1","aria-hidden":"false","aria-label":t.label,role:"dialog"},on:{click:t.close}},[r("div",{staticClass:"modal__wrap"},[r("div",{staticClass:"modal__body",on:{click:function(t){t.stopPropagation()}}},[r("button",{staticClass:"modal__close",attrs:{"aria-label":"Close",type:"button"},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15"}},[r("g",{attrs:{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"1.5"}},[r("path",{attrs:{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"}})])])]),t._v(" "),r("div",{class:"modal__"+t.type},["iframe"===t.type&&t.activeItem?r("iframe",{attrs:{src:t.activeItem.src,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e(),t._v(" "),"image"===t.type&&t.activeItem?r("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.activeItem.src,expression:"activeItem.src"}],staticClass:"lazyload",attrs:{alt:""}}):t._e()]),t._v(" "),t.showNav?r("div",{staticClass:"modal__nav"},[r("button",{staticClass:"modal__arrow modal__arrow--prev",attrs:{"aria-label":"Previous",type:"button"},on:{click:function(e){return e.stopPropagation(),t.previous(e)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M17.9 23.2L6.1 12 17.9.8"}})])]),t._v(" "),r("div",{staticClass:"modal__count"},[t._v("\n            "+t._s(t.selected+1)+" / "+t._s(t.data.length)+"\n          ")]),t._v(" "),r("button",{staticClass:"modal__arrow modal__arrow--next",attrs:{"aria-label":"Next",type:"button",title:"Next"},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"none",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M6.1 23.2L17.9 12 6.1.8"}})])])]):t._e()])])])])},[],!1,function(t){var e=r(57);e.__inject__&&e.__inject__(t)},null,"43480993");e.a=component.exports},57:function(t,e,r){"use strict";r.r(e);var o=r(47),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},58:function(t,e,r){e=t.exports=r(4)(!1);var o=r(22)(r(59));e.push([t.i,"body.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;overflow-x:hidden;overflow-y:auto;cursor:pointer;background-color:#000}@media (min-width:1200px){.modal{padding:4.4rem 10rem}}.modal__wrap{display:flex;flex-direction:column;min-height:100%}.modal__body{position:relative;margin:auto;cursor:default}.modal__close{position:absolute;top:0;right:0;z-index:1;display:flex;align-items:center;justify-content:center;width:4.4rem;height:4.4rem;padding:0;background:none}@media (max-width:1199px){.modal__close{position:fixed;left:0;width:6rem;height:6rem}}@media (max-width:1199px){.modal--nav{padding-bottom:5rem}}@media (max-width:1199px){.modal--nav .modal__image img{max-height:calc(100vh - 5rem)}}.modal__nav{position:absolute;right:0;bottom:-4.4rem;left:0;display:flex;align-items:center;height:4.4rem}@media (max-width:1199px){.modal__nav{position:fixed;right:0;bottom:0;left:0;justify-content:space-between;height:5rem;background-color:#000}}@media (min-width:1200px){.modal__nav{justify-content:flex-end}}.modal__arrow{display:flex;align-items:center;justify-content:center;padding:0;background:none}@media (max-width:1199px){.modal__arrow{flex:1;height:5rem}}@media (min-width:1200px){.modal__arrow{position:fixed;top:50%;width:10rem;height:10rem;margin-top:-5rem}}@media (min-width:1200px){.modal__arrow--prev{left:0}.modal__arrow--next{right:0}}.modal__count{font-size:1.6rem;line-height:1}@media (min-width:1200px){.modal--images .modal__close{top:-4.4rem}}.modal__image.lazyloading{background:url("+o+") no-repeat 50%}.modal__image img{max-height:100vh}@media (min-width:1200px){.modal__image img{max-height:calc(100vh - 8.8rem)}}@media (min-width:1200px){.modal--iframe .modal__close{top:-4.4rem}}.modal__iframe{position:relative;width:100%;height:0;padding-bottom:56.25%;overflow:hidden}.modal__iframe iframe{position:absolute;top:0;left:0;display:block;width:100%;height:100%;padding:0;margin:0;background:#000;border:0}.modal-enter,.modal-leave-active{opacity:0}.modal-enter-active,.modal-leave-active{transition:opacity .3s ease}",""])},59:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0IiBzdHJva2U9IiMyMTk2ZjMiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyIj48Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMHMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAyMCIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiBiZWdpbj0iMHMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAyMCIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7IDEiIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIgdmFsdWVzPSIxOyAwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PC9zdmc+Cg=="},60:function(t,e,r){"use strict";var o=r(43),n=r.n(o);e.a={data:()=>({elementWidth:0,carouselWidth:0,visibleWidth:0,maximumPosition:0,unusableVisibleWidth:0,disableLeftButton:!0,disableRightButton:!1}),mounted(){n.a.polyfill(),window.addEventListener("resize",this.resizeEvent)},beforeDestroy(){window.removeEventListener("resize",this.resizeEvent)},methods:{calculateState(t){let e=72;const r=this.$refs.carouselElement.firstChild.getBoundingClientRect().width,o=t*r,n=this.$refs.carouselElement.scrollWidth;window.innerWidth>=1200&&(e=92);const l=this.$refs.carouselElement.offsetWidth-e;this.unusableVisibleWidth=e,this.elementWidth=r,this.carouselWidth=o,this.visibleWidth=l,this.maximumPosition=n,this.disableLeftButton=!this.$refs.carouselElement.scrollLeft,this.disableRightButton=l>=o},moveTo(t){this.$refs.carouselElement.scrollTo({left:t,behavior:"smooth"})},moveToClickEvent(t){const e=this.$refs.carouselElement.scrollLeft+("left"===t?1-this.visibleWidth:this.visibleWidth),r=e-e%this.elementWidth;this.moveTo(r)},scrollEvent(){const t=this.$refs.carouselElement.scrollLeft,e=this.maximumPosition-this.visibleWidth-this.elementWidth;this.disableLeftButton=3>t,this.disableRightButton=t>e}}}},64:function(t,e,r){"use strict";r.r(e);var o=r(49),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},65:function(t,e,r){e=t.exports=r(4)(!1);var o=r(22),n=o(r(23)),l=o(r(24));e.push([t.i,'.hero_F8SLO{display:flex;flex-direction:column;justify-content:space-between;height:35rem;color:#999;background-color:#000}@media (min-width:640px){.hero_F8SLO{height:50rem}}@media (min-width:1024px){.hero_F8SLO{position:relative;display:block;height:0;padding-bottom:40%}}.backdrop_2w6W_{position:relative;display:flex;flex:1 1 auto;min-height:0}@media (min-width:1024px){.backdrop_2w6W_{position:absolute;top:0;right:0;display:block;width:71.1%;height:100%}}.backdrop_2w6W_:after{position:absolute;top:0;right:0;bottom:0;left:0;display:block;content:"";background-image:linear-gradient(0deg,#000 0,rgba(0,0,0,.1) 50%,rgba(0,0,0,.1))}@media (min-width:1024px){.backdrop_2w6W_:after{background-image:linear-gradient(90deg,#000 0,transparent 50%,transparent)}}.backdrop_2w6W_>div{width:100%}@media (min-width:1024px){.backdrop_2w6W_>div{display:inline}}.play_AfXd1{position:absolute;top:50%;left:50%;z-index:1;padding:0;margin:0;background:none;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media (min-width:1024px){.play_AfXd1{display:none}}.image_183rJ{display:inline-block;max-width:none;height:100%}@media (max-width:1023px){.image_183rJ{width:100%;-o-object-fit:cover;object-fit:cover}}.pane_2lVvR{padding:0 1.5rem 1.5rem}@media (min-width:768px){.pane_2lVvR{padding:0 4rem 4rem}}@media (min-width:1024px){.pane_2lVvR{position:absolute;top:0;bottom:0;left:0;z-index:1;display:flex;align-items:center;width:55%;height:100%;padding:5rem 4rem}}@media (min-width:1200px){.pane_2lVvR{padding-right:5rem;padding-left:5rem}}@media (min-width:1400px){.pane_2lVvR{width:43%}}.name_zSTaZ{margin:0 0 1.4rem;font-size:2.8rem;line-height:1.1;color:#fff;letter-spacing:.4px}@media (min-width:768px){.name_zSTaZ{margin-bottom:1.8rem}}@media (min-width:1200px){.name_zSTaZ{font-size:2.4vw}}.meta_2Epvl{font-size:1.4rem}@media (min-width:768px){.meta_2Epvl{display:flex}}@media (min-width:1650px){.meta_2Epvl{font-size:.9vw}}.rating_3cANi{display:flex;align-items:center;margin-bottom:1.3rem}@media (min-width:768px){.rating_3cANi{margin:0 1.2rem 0 0}}.stars_2QVc_{width:8.5rem;height:1.4rem;margin-right:1rem;background-image:url('+n+");background-repeat:no-repeat;background-size:auto 100%}@media (min-width:768px){.stars_2QVc_{width:10.3rem;height:1.7rem}}.stars_2QVc_>div{height:100%;background-image:url("+l+");background-repeat:no-repeat;background-size:auto 100%}.info_11VDX{display:flex;align-items:center}.info_11VDX span{margin-right:.9rem}.desc_1w0B3{display:block;margin-top:2.5rem;font-size:1.5rem;color:#fff}@media (max-width:767px){.desc_1w0B3{display:none}}@media (min-width:1650px){.desc_1w0B3{font-size:.9vw}}.trailer_3TaRf{margin-top:3rem}@media (max-width:1023px){.trailer_3TaRf{display:none}}@media (min-width:1650px){.trailer_3TaRf{font-size:.9vw}}",""]),e.locals={hero:"hero_F8SLO",backdrop:"backdrop_2w6W_",play:"play_AfXd1",image:"image_183rJ",pane:"pane_2lVvR",name:"name_zSTaZ",meta:"meta_2Epvl",rating:"rating_3cANi",stars:"stars_2QVc_",info:"info_11VDX",desc:"desc_1w0B3",trailer:"trailer_3TaRf"}},66:function(t,e,r){"use strict";r.r(e);var o=r(50),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},67:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".hero-enter-active,.hero-leave-active{transition:opacity .3s cubic-bezier(.4,.25,.3,1),-webkit-transform .75s cubic-bezier(.4,.25,.3,1);transition:transform .75s cubic-bezier(.4,.25,.3,1),opacity .3s cubic-bezier(.4,.25,.3,1);transition:transform .75s cubic-bezier(.4,.25,.3,1),opacity .3s cubic-bezier(.4,.25,.3,1),-webkit-transform .75s cubic-bezier(.4,.25,.3,1)}.hero-enter,.hero-leave-to{opacity:0;-webkit-transform:translate3d(0,2rem,0);transform:translate3d(0,2rem,0)}.hero-enter-to,.hero-leave{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}",""])},68:function(t,e,r){"use strict";var o=r(44),n={components:{Modal:r(51).a},mixins:[o.e,o.f,o.i,o.b,o.a,o.g],props:{item:{type:Object,required:!0}},data(){return{isSingle:this.item.id===this.$route.params.id,modalVisible:!1}},computed:{type(){return this.item.title?"movie":"tv"}},methods:{openModal(){this.modalVisible=!0},closeModal(){this.modalVisible=!1}}},l=r(1);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode("<div"+t._ssrClass(null,t.$style.hero)+">","</div>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.backdrop)+">","</div>",[t._ssrNode("<div>","</div>",[t._ssrNode((t.trailer?'<button type="button" aria-label="Play Trailer"'+t._ssrClass(null,t.$style.play)+'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg></button>':"\x3c!----\x3e")+" "),t.backdrop?r("img",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.backdrop,expression:"backdrop"}],staticClass:"lazyload",class:t.$style.image,attrs:{alt:t.name}},[]):t._e()],2)]),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.pane)+">","</div>",[r("transition",{attrs:{appear:"",name:"hero"}},[r("div",[r("h1",{class:t.$style.name},[t.isSingle?[t._v("\n              "+t._s(t.name)+"\n            ")]:[r("nuxt-link",{attrs:{to:{name:t.type+"-id",params:{id:t.item.id}}}},[t._v("\n                "+t._s(t.name)+"\n              ")])]],2),t._v(" "),r("div",{class:t.$style.meta},[t.stars||t.item.vote_count?r("div",{class:t.$style.rating},[t.stars?r("div",{class:t.$style.stars},[r("div",{style:{width:t.stars+"%"}})]):t._e(),t._v(" "),t.item.vote_count>0?r("div",[t._v("\n                "+t._s(t._f("numberWithCommas")(t.item.vote_count))+" Reviews\n              ")]):t._e()]):t._e(),t._v(" "),r("div",{class:t.$style.info},[t.item.number_of_seasons?r("span",[t._v("Season "+t._s(t.item.number_of_seasons))]):t._e(),t._v(" "),t.yearStart?r("span",[t._v(t._s(t.yearStart))]):t._e(),t._v(" "),t.item.runtime?r("span",[t._v(t._s(t._f("runtime")(t.item.runtime)))]):t._e(),t._v(" "),t.cert?r("span",[t._v("Cert. "+t._s(t.cert))]):t._e()])]),t._v(" "),r("div",{class:t.$style.desc},[t._v("\n            "+t._s(t._f("truncate")(t.item.overview,200))+"\n          ")]),t._v(" "),t.trailer?r("button",{staticClass:"button button--icon",class:t.$style.trailer,attrs:{type:"button"},on:{click:t.openModal}},[r("span",{staticClass:"icon"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"#fff"}},[r("path",{attrs:{d:"M3 22v-20l18 10-18 10z"}})])]),t._v(" "),r("span",{staticClass:"txt"},[t._v("Watch Trailer")])]):t._e()])])],1)],2),t._ssrNode(" "),t.modalVisible?r("Modal",{attrs:{data:t.trailer,type:"iframe"},on:{close:t.closeModal}}):t._e()],2)},[],!1,function(t){var e=r(64);e.__inject__&&e.__inject__(t),this.$style=e.locals||e;var o=r(66);o.__inject__&&o.__inject__(t)},null,"7f762df8");e.a=component.exports},69:function(t,e,r){"use strict";var o=r(60),n={components:{Card:r(48).a},mixins:[o.a],props:{title:{type:String,required:!1,default:""},viewAllUrl:{type:Object,required:!1,default:function(){return null}},items:{type:Object,required:!0}},mounted(){const t=this.viewAllUrl?this.items.results.length+1:this.items.results.length;this.calculateState(t)},methods:{resizeEvent(){const t=this.viewAllUrl?this.items.results.length+1:this.items.results.length;this.calculateState(t)}}},l=r(1),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"listing listing--carousel"},[t.title||t.viewAllUrl?t._ssrNode('<div class="listing__head">',"</div>",[t._ssrNode((t.title?'<h2 class="listing__title">'+t._ssrEscape("\n      "+t._s(t.title)+"\n    ")+"</h2>":"\x3c!----\x3e")+" "),t.viewAllUrl?r("nuxt-link",{staticClass:"listing__explore",attrs:{to:t.viewAllUrl}},[r("strong",[t._v("Explore All")])]):t._e()],2):t._e(),t._ssrNode(" "),t._ssrNode('<div class="carousel">',"</div>",[t._ssrNode('<button aria-label="Previous" type="button"'+t._ssrAttr("disabled",t.disableLeftButton)+' class="carousel__nav carousel__nav--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.9 23.2L6.1 12 17.9.8"></path></svg></button> '),t._ssrNode('<div class="carousel__items">',"</div>",[t._l(t.items.results,function(t){return r("Card",{key:"card-"+t.id,attrs:{item:t}})}),t._ssrNode(" "),t.viewAllUrl?t._ssrNode('<div class="card">',"</div>",[r("nuxt-link",{staticClass:"card__link",attrs:{to:t.viewAllUrl}},[r("div",{staticClass:"card__img"},[r("span",[t._v("Explore All")])])])],1):t._e()],2),t._ssrNode(' <button aria-label="Next" type="button"'+t._ssrAttr("disabled",t.disableRightButton)+' class="carousel__nav carousel__nav--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.1 23.2L17.9 12 6.1.8"></path></svg></button>')],2)],2)},[],!1,null,null,"00c8c42c");e.a=component.exports}};
//# sourceMappingURL=65d52522a4aa8a1930fa.js.map