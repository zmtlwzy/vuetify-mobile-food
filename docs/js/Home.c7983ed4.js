(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"00f7":function(t,e,n){},"0bc6":function(t,e,n){},"149d":function(t,e,n){},"1f09":function(t,e,n){},"3a6f":function(t,e,n){"use strict";var a=n("00f7"),i=n.n(a);i.a},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"627c":function(t,e,n){"use strict";var a=n("149d"),i=n.n(a);i.a},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),r=n("e2cc"),s=n("0366"),o=n("19aa"),l=n("2266"),c=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,h=n("69f3"),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,a){o(t,u,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&l(a,t[c],t,n)})),h=p(e),g=function(t,e,n){var a,i,r=h(t),s=b(t,e);return s?s.value=n:(r.last=s={index:i=f(e,!0),key:e,value:n,previous:a=r.last,next:void 0,removed:!1},r.first||(r.first=s),a&&(a.next=s),d?r.size++:t.size++,"F"!==i&&(r.index[i]=s)),t},b=function(t,e){var n,a=h(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return r(u.prototype,{clear:function(){var t=this,e=h(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),a=b(e,t);if(a){var i=a.next,r=a.previous;delete n.index[a.index],a.removed=!0,r&&(r.next=i),i&&(i.previous=r),n.first==a&&(n.first=i),n.last==a&&(n.last=r),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=h(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(u.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&a(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",i=p(e),r=p(a);c(t,e,(function(t,e){v(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),r=n("94ca"),s=n("6eeb"),o=n("f183"),l=n("2266"),c=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),h=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=p?"set":"add",y=i[t],m=y&&y.prototype,x=y,C={},j=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(r(t,"function"!=typeof y||!(g||m.forEach&&!d((function(){(new y).entries().next()})))))x=n.getConstructor(e,t,p,b),o.REQUIRED=!0;else if(r(t,!0)){var S=new x,O=S[b](g?{}:-0,1)!=S,k=d((function(){S.has(1)})),w=f((function(t){new y(t)})),_=!g&&d((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));w||(x=e((function(e,n){c(e,x,t);var a=v(new y,e,x);return void 0!=n&&l(n,a[b],a,p),a})),x.prototype=m,m.constructor=x),(k||_)&&(j("delete"),j("has"),p&&j("get")),(_||O)&&j(b),g&&m.clear&&delete m.clear}return C[t]=x,a({global:!0,forced:x!=y},C),h(x,t),g||n.setStrong(x,t,p),x}},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));var a=n("b0af"),i=n("80d2"),r=Object(i["h"])("v-card__actions"),s=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");a["a"]},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("TopBar",[n("span",{staticClass:"title white--text"},[t._v("美食大全")])]),n("Carousel"),n("Search",{staticClass:"mt-5",attrs:{plhd:t.searchText}}),t._l(t.cateContent,(function(e,a,i){return n("v-sheet",{key:i,staticClass:"mt-5",attrs:{tile:"",color:"transparent"}},[n("v-subheader",[t._v(t._s(e))]),n(a,{tag:"component"})],1)}))],2)},i=[],r=n("b043"),s=n("c106"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.themeColor,dark:"",flat:"",tile:""}},[n("v-window",{model:{value:t.sliderIndex,callback:function(e){t.sliderIndex=e},expression:"sliderIndex"}},t._l(t.slides,(function(t,e){return n("v-window-item",{key:e},[n("v-card",{attrs:{color:"transparent",height:"250",flat:"",tile:""}},[n("div",{staticClass:"fill-height",style:{backgroundImage:"url("+t.src+")",backgroundSize:"cover",backgroundPosition:""+t.position,width:"100%"},attrs:{align:"center",justify:"center",tag:"div"}})])],1)})),1),n("v-card-actions",{staticClass:"justify-space-between"},[n("v-btn",{attrs:{text:""},on:{click:t.prev}},[n("v-icon",[t._v("mdi-chevron-left")])],1),n("v-item-group",{staticClass:"text-center",attrs:{mandatory:""},model:{value:t.sliderIndex,callback:function(e){t.sliderIndex=e},expression:"sliderIndex"}},t._l(t.slides.length,(function(e){return n("v-item",{key:"btn-"+e,scopedSlots:t._u([{key:"default",fn:function(e){var a=e.active,i=e.toggle;return[n("v-btn",{attrs:{"input-value":a,icon:""},on:{click:i}},[n("v-icon",[t._v("mdi-record")])],1)]}}],null,!0)})})),1),n("v-btn",{attrs:{text:""},on:{click:t.next}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)},l=[],c=n("5530"),u=n("2f62"),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return setInterval((function(){t.next()}),e)},f={data:function(){return{slides:[],sliderIndex:0,interval:null}},computed:Object(c["a"])({},Object(u["d"])(["themeColor"])),beforeCreate:function(){var t=this;this.$axios.get("home/carouselImg").then((function(e){t.slides=e.list}))},mounted:function(){this.interval=d(this)},methods:{next:function(){null!==this.interval&&clearInterval(this.interval),this.sliderIndex=this.sliderIndex+1===this.slides.length?0:this.sliderIndex+1,this.interval=d(this)},prev:function(){this.sliderIndex=this.sliderIndex-1<0?this.slides.length-1:this.sliderIndex-1}}},h=f,v=n("2877"),p=n("6544"),g=n.n(p),b=n("8336"),y=n("b0af"),m=n("99d9"),x=n("132d"),C=n("ade3"),j=n("4e82"),S=n("58df"),O=n("d9bd"),k=n("2b0e"),w=k["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(C["a"])({},this.activeClass,this.isActive)}),t):(Object(O["c"])("v-item should only contain a single element",this),t)):(Object(O["c"])("v-item is missing a default scopedSlot",this),null);var t}}),_=Object(S["a"])(w,Object(j["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),V=n("604c"),B=n("f665"),I=n("1e6c"),$=Object(v["a"])(h,o,l,!1,null,null,null),L=$.exports;g()($,{VBtn:b["a"],VCard:y["a"],VCardActions:m["a"],VIcon:x["a"],VItem:_,VItemGroup:V["b"],VWindow:B["a"],VWindowItem:I["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-cate mt-2"},[n("v-slide-x-transition",{attrs:{"hide-on-leave":""}},[t.isLoading?n("div",{staticClass:"skeleton-btn"},t._l(12,(function(t){return n("v-skeleton-loader",{key:t,attrs:{type:"button",height:"40"}})})),1):n("v-sheet",{staticClass:"real-data"},t._l(t.hotCate,(function(e,a){return n("v-btn",{key:a,attrs:{depressed:"",tile:"",height:"50",width:"100%"}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)},z=[],A={data:function(){return{hotCate:null}},computed:{isLoading:function(){return null===this.hotCate}},created:function(){var t=this;this.$axios.get("/home/hotCate").then((function(e){t.hotCate=e.list}))}},T=A,N=(n("627c"),n("8dd9")),G=(n("a630"),n("c975"),n("d81d"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("3835")),M=(n("1f09"),n("c995")),W=n("24b2"),F=n("7560"),H=n("80d2"),P=Object(S["a"])(M["a"],W["a"],F["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(c["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(c["a"])(Object(c["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(c["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,n=t.split("@"),a=Object(G["a"])(n,2),i=a[0],r=a[1],s=function(){return e.genStructure(i)};return Array.from({length:r}).map(s)},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(H["m"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),R=n("0789"),J=Object(v["a"])(T,E,z,!1,null,null,null),q=J.exports;g()(J,{VBtn:b["a"],VSheet:N["a"],VSkeletonLoader:P,VSlideXTransition:R["d"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[n("v-container",{staticClass:"px-3 pt-2 pb-5 mb-12"},t._l(null===t.greatCate?0:t.greatCate.length/2,(function(e){return n("v-row",{key:e,attrs:{dense:""}},t._l(2,(function(a){return n("v-col",{key:a,attrs:{cols:"6"}},[n("v-card",{attrs:{flat:"",outlined:""}},[n("v-img",{attrs:{src:t.greatCate[2*e+a-3].img,height:"150px"}}),n("v-card-title",{staticClass:"justify-center pb-1 pt-2 card-title"},[t._v(" "+t._s(t.greatCate[2*e+a-3].title)+" ")]),n("v-card-text",{staticClass:"d-flex justify-center"},[n("span",{staticClass:"mx-1 sub-title"},[t._v(t._s(t.greatCate[2*e+a-3].pageViews)+"浏览")]),n("span",{staticClass:"mx-1 sub-title"},[t._v(t._s(t.greatCate[2*e+a-3].starNum)+"收藏")])])],1)],1)})),1)})),1)],1)},K=[],Q={data:function(){return{greatCate:null,isShow:!1}},beforeCreate:function(){var t=this;this.$axios.get("/home/greatCate").then((function(e){t.greatCate=e.list}))}},U=Q,X=(n("3a6f"),n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("2ca0"),n("159b"),n("ddb0"),n("4b85"),n("d9f7")),Y=["sm","md","lg","xl"],Z=function(){return Y.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),tt=function(){return Y.reduce((function(t,e){return t["offset"+Object(H["w"])(e)]={type:[String,Number],default:null},t}),{})}(),et=function(){return Y.reduce((function(t,e){return t["order"+Object(H["w"])(e)]={type:[String,Number],default:null},t}),{})}(),nt={col:Object.keys(Z),offset:Object.keys(tt),order:Object.keys(et)};function at(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var it=new Map,rt=k["a"].extend({name:"v-col",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({cols:{type:[Boolean,String,Number],default:!1}},Z),{},{offset:{type:[String,Number],default:null}},tt),{},{order:{type:[String,Number],default:null}},et),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,i=e.children,r=(e.parent,"");for(var s in n)r+=String(n[s]);var o=it.get(r);return o||function(){var t,e;for(e in o=[],nt)nt[e].forEach((function(t){var a=n[t],i=at(e,t,a);i&&o.push(i)}));var a=o.some((function(t){return t.startsWith("col-")}));o.push((t={col:!a||!n.cols},Object(C["a"])(t,"col-".concat(n.cols),n.cols),Object(C["a"])(t,"offset-".concat(n.offset),n.offset),Object(C["a"])(t,"order-".concat(n.order),n.order),Object(C["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),it.set(r,o)}(),t(n.tag,Object(X["a"])(a,{class:o}),i)}}),st=n("a523"),ot=n("adda"),lt=n("f2e7"),ct=n("90a2"),ut=Object(S["a"])(W["a"],lt["a"]).extend({name:"VLazy",directives:{intersect:ct["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(c["a"])({},this.measurableStyles)}},methods:{genContent:function(){var t=Object(H["m"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),dt=(n("99af"),n("2532"),["sm","md","lg","xl"]),ft=["start","end","center"];function ht(t,e){return dt.reduce((function(n,a){return n[t+Object(H["w"])(a)]=e(),n}),{})}var vt=function(t){return[].concat(ft,["baseline","stretch"]).includes(t)},pt=ht("align",(function(){return{type:String,default:null,validator:vt}})),gt=function(t){return[].concat(ft,["space-between","space-around"]).includes(t)},bt=ht("justify",(function(){return{type:String,default:null,validator:gt}})),yt=function(t){return[].concat(ft,["space-between","space-around","stretch"]).includes(t)},mt=ht("alignContent",(function(){return{type:String,default:null,validator:yt}})),xt={align:Object.keys(pt),justify:Object.keys(bt),alignContent:Object.keys(mt)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function jt(t,e,n){var a=Ct[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var St=new Map,Ot=k["a"].extend({name:"v-row",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:vt}},pt),{},{justify:{type:String,default:null,validator:gt}},bt),{},{alignContent:{type:String,default:null,validator:yt}},mt),render:function(t,e){var n=e.props,a=e.data,i=e.children,r="";for(var s in n)r+=String(n[s]);var o=St.get(r);return o||function(){var t,e;for(e in o=[],xt)xt[e].forEach((function(t){var a=n[t],i=jt(e,t,a);i&&o.push(i)}));o.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(C["a"])(t,"align-".concat(n.align),n.align),Object(C["a"])(t,"justify-".concat(n.justify),n.justify),Object(C["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),St.set(r,o)}(),t(n.tag,Object(X["a"])(a,{staticClass:"row",class:o}),i)}}),kt=Object(v["a"])(U,D,K,!1,null,null,null),wt=kt.exports;g()(kt,{VCard:y["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:rt,VContainer:st["a"],VImg:ot["a"],VLazy:ut,VRow:Ot});var _t={components:{TopBar:r["a"],Search:s["a"],Carousel:L,HotCate:q,GreatCate:wt},data:function(){return{searchText:"想吃什么搜索这里，如潮菜",loading:!1,cateContent:{HotCate:"热门分类",GreatCate:"精品好菜"}}}},Vt=_t,Bt=(n("0bc6"),Object(S["a"])(F["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(c["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})),It=Object(v["a"])(Vt,a,i,!1,null,null,null);e["default"]=It.exports;g()(It,{VSheet:N["a"],VSubheader:Bt})}}]);
//# sourceMappingURL=Home.c7983ed4.js.map