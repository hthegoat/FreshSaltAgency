(window.webpackJsonp=window.webpackJsonp||[]).push([[32,16,17],{341:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("3127bfd0",content,!0,{sourceMap:!1})},345:function(t,e,r){"use strict";r(341)},346:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,"a[data-v-25d17568]{text-decoration:none}@media screen and (min-width:1920px){.image[data-v-25d17568]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:bottom;object-position:bottom}}",""]),n.locals={},t.exports=n},360:function(t,e,r){"use strict";r.r(e);r(32),r(44);var n={props:{description:{type:Boolean,default:!0},item:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(r(345),r(17)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden flex-1"},[e("div",{staticClass:"flex-shrink-0"},[t.item.url?e("div",[e("a",{staticClass:"block",attrs:{href:t.item.url,rel:"nofollow",target:"_blank"}},[e("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"640",height:"480",sizes:"sm:355px md:320px lg:480px"}})],1)]):e("div",{staticClass:"image"},[e("NuxtLink",{attrs:{to:"/blog/".concat(t.item.slug)}},[e("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"auto",height:"auto",sizes:"sm:355px md:320px lg:480px"}})],1)],1)]),t._v(" "),e("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[e("div",{staticClass:"flex-1"},[t.item.url?e("a",{staticClass:"block",attrs:{href:t.item.url}},[e("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),t._v(" "),e("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n          "+t._s(t.item.description)+"\n        ")])]):e("div",[e("NuxtLink",{staticClass:"block",attrs:{to:"/blog/".concat(t.item.slug)}},[e("h2",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n            "+t._s(t.item.title)+"\n          ")]),t._v(" "),e("div",t._l(t.item.tags,(function(r){return e("span",{key:r,staticClass:"inline-flex items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"},[t._v("\n              "+t._s(r)+"\n            ")])})),0),t._v(" "),t.description?e("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n            "+t._s(t.item.description)+"\n          ")]):t._e()])],1)]),t._v(" "),t.item.date?e("div",{staticClass:"mt-6 flex items-center"},[e("div",{staticClass:"ml-3"},[e("div",{staticClass:"flex text-sm leading-5 text-gray-500"},[t._v("\n          "+t._s(t.formatDate(t.item.date))+"\n        ")])])]):t._e()])])}),[],!1,null,"25d17568",null);e.default=component.exports},361:function(t,e,r){"use strict";r.r(e);r(45);var n={props:["prevPage","nextPage","pageNo","urlPrefix"],computed:{prevLink:function(){return 1===this.pageNo?this.urlPrefix:"".concat(this.urlPrefix,"/").concat(this.pageNo-1)}}},l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex justify-center mt-4 space-x-2",attrs:{id:"prev-next"}},[t.prevPage?e("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:t.prevLink}},[t._v("\n    Prev page\n  ")]):t._e(),t._v(" "),t.nextPage?e("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:"".concat(t.urlPrefix,"/").concat(t.pageNo+1)}},[t._v("\n    Next page\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},517:function(t,e,r){"use strict";r.r(e);var n=r(11),l=(r(54),{layout:"blog",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=parseInt(n.number),o=9,e.next=5,r("articles").where({published:{$ne:!1}}).limit(o).skip(o*(l-1)).sortBy("date","desc").fetch();case 5:if((c=e.sent).length){e.next=8;break}return e.abrupt("return",error({statusCode:404,message:"No articles found!"}));case 8:return d=c.length===o,e.abrupt("return",{nextPage:d,getArticles:c,pageNo:l});case 11:case"end":return e.stop()}}),e)})))()}}),o=r(17),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"mt-12 grid gap-6 sm:px-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-none"},t._l(t.getArticles,(function(article){return e("div",{key:article.slug,staticClass:"flex flex-col"},[e("PostsCard",{attrs:{item:article}})],1)})),0),t._v(" "),e("Pagination",{attrs:{nextPage:t.nextPage,pageNo:1,urlPrefix:"/blog/all"}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white py-6 sm:py-8 lg:py-12"},[e("div",{staticClass:"max-w-screen-2xl px-4 md:px-8 mx-auto"},[e("div",{staticClass:"mb-10 md:mb-16"},[e("h2",{staticClass:"text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"},[t._v("Blog")]),t._v(" "),e("p",{staticClass:"max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"},[t._v("This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PostsCard:r(360).default,Pagination:r(361).default})}}]);