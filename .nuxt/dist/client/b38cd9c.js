(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{310:function(t,e,l){var content=l(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(53).default)("2f6c0d39",content,!0,{sourceMap:!1})},314:function(t,e,l){"use strict";l(310)},315:function(t,e,l){var o=l(52)((function(i){return i[1]}));o.push([t.i,"a[data-v-25d17568]{text-decoration:none}@media screen and (min-width:1920px){.image[data-v-25d17568]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:bottom;object-position:bottom}}",""]),o.locals={},t.exports=o},329:function(t,e,l){"use strict";l.r(e);var o={props:{description:{type:Boolean,default:!0},item:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},n=(l(314),l(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden flex-1"},[l("div",{staticClass:"flex-shrink-0"},[t.item.url?l("div",[l("a",{staticClass:"block",attrs:{href:t.item.url,rel:"nofollow",target:"_blank"}},[l("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"640",height:"480",sizes:"sm:355px md:320px lg:480px"}})],1)]):l("div",{staticClass:"image"},[l("NuxtLink",{attrs:{to:"/blog/"+t.item.slug}},[l("NuxtImg",{staticClass:"w-full h-64 object-cover",attrs:{provider:t.item.provider,src:t.item.image,alt:t.item.title,loading:t.item.loading?t.item.loading:"lazy",preset:"blog",width:"auto",height:"auto",sizes:"sm:355px md:320px lg:480px"}})],1)],1)]),t._v(" "),l("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[l("div",{staticClass:"flex-1"},[t.item.url?l("a",{staticClass:"block",attrs:{href:t.item.url}},[l("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),t._v(" "),l("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n          "+t._s(t.item.description)+"\n        ")])]):l("div",[l("NuxtLink",{staticClass:"block",attrs:{to:"/blog/"+t.item.slug}},[l("h2",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[t._v("\n            "+t._s(t.item.title)+"\n          ")]),t._v(" "),l("div",t._l(t.item.tags,(function(e){return l("span",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 mr-2 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),t.description?l("p",{staticClass:"mt-3 text-base leading-6 text-gray-500"},[t._v("\n            "+t._s(t.item.description)+"\n          ")]):t._e()])],1)]),t._v(" "),t.item.date?l("div",{staticClass:"mt-6 flex items-center"},[l("div",{staticClass:"ml-3"},[l("div",{staticClass:"flex text-sm leading-5 text-gray-500"},[t._v("\n          "+t._s(t.formatDate(t.item.date))+"\n        ")])])]):t._e()])])}),[],!1,null,"25d17568",null);e.default=component.exports}}]);