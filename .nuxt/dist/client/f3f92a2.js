(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15,16],{310:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("2f6c0d39",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(310)},315:function(t,e,r){var n=r(52)((function(i){return i[1]}));n.push([t.i,"a[data-v-25d17568]{text-decoration:none}@media screen and (min-width:1920px){.image[data-v-25d17568]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:bottom;object-position:bottom}}",""]),n.locals={},t.exports=n},329:function(t,e,r){"use strict";r.r(e);var n={props:{description:{type:Boolean,default:!0},item:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(r(314),r(15)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden flex-1"},[r("div",{staticClass:"flex-shrink-0"},[t.item.url?r("div",[r("a",{staticClass:"block",attrs:{href:t.item.url,rel:"nofollow",target:"_blank"}},[r("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"640",height:"480",sizes:"sm:355px md:320px lg:480px"}})],1)]):r("div",{staticClass:"image"},[r("NuxtLink",{attrs:{to:"/blog/"+t.item.slug}},[r("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"auto",height:"auto",sizes:"sm:355px md:320px lg:480px"}})],1)],1)]),t._v(" "),r("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[t.item.url?r("a",{staticClass:"block",attrs:{href:t.item.url}},[r("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),t._v(" "),r("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n          "+t._s(t.item.description)+"\n        ")])]):r("div",[r("NuxtLink",{staticClass:"block",attrs:{to:"/blog/"+t.item.slug}},[r("h2",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n            "+t._s(t.item.title)+"\n          ")]),t._v(" "),r("div",t._l(t.item.tags,(function(e){return r("span",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),t.description?r("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n            "+t._s(t.item.description)+"\n          ")]):t._e()])],1)]),t._v(" "),t.item.date?r("div",{staticClass:"mt-6 flex items-center"},[r("div",{staticClass:"ml-3"},[r("div",{staticClass:"flex text-sm leading-5 text-gray-500"},[t._v("\n          "+t._s(t.formatDate(t.item.date))+"\n        ")])])]):t._e()])])}),[],!1,null,"25d17568",null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);r(45);var n={props:["prevPage","nextPage","pageNo","urlPrefix"],computed:{prevLink:function(){return 1===this.pageNo?this.urlPrefix:"".concat(this.urlPrefix,"/").concat(this.pageNo-1)}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex justify-center mt-4 space-x-2",attrs:{id:"prev-next"}},[t.prevPage?r("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:t.prevLink}},[t._v("\n    Prev page\n  ")]):t._e(),t._v(" "),t.nextPage?r("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:t.urlPrefix+"/"+(t.pageNo+1)}},[t._v("\n    Next page\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},482:function(t,e,r){"use strict";r.r(e);var n=r(9),l=(r(54),{layout:"blog",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=t.error,o=parseInt(n.number),c=9,e.next=5,r("articles").where({published:{$ne:!1}}).sortBy("date","desc").limit(c).skip(c*(o-1)).fetch();case 5:if((d=e.sent).length){e.next=8;break}return e.abrupt("return",l({statusCode:404,message:"No articles found!"}));case 8:return m=d.length===c,e.abrupt("return",{nextPage:m,pageNo:o,getArticles:d});case 10:case"end":return e.stop()}}),e)})))()}}),o=r(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper"},[r("div",{staticClass:"mt-12 grid gap-6 sm:px-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-none"},t._l(t.getArticles,(function(article){return r("div",{key:article.slug,staticClass:"flex flex-col"},[r("PostsCard",{attrs:{item:article}})],1)})),0),t._v(" "),r("Pagination",{attrs:{prevPage:t.pageNo>1,nextPage:t.nextPage,pageNo:t.pageNo,urlPrefix:"/blog/all"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostsCard:r(329).default,Pagination:r(330).default})}}]);