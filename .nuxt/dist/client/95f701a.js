(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(e,t,r){"use strict";r.r(t);r(45);var n={props:["prevPage","nextPage","pageNo","urlPrefix"],computed:{prevLink:function(){return 1===this.pageNo?this.urlPrefix:"".concat(this.urlPrefix,"/").concat(this.pageNo-1)}}},o=r(17),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"flex justify-center mt-4 space-x-2",attrs:{id:"prev-next"}},[e.prevPage?t("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:e.prevLink}},[e._v("\n    Prev page\n  ")]):e._e(),e._v(" "),e.nextPage?t("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200",attrs:{to:"".concat(e.urlPrefix,"/").concat(e.pageNo+1)}},[e._v("\n    Next page\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);