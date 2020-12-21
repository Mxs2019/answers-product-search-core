(this["webpackJsonpanswers-product-search"]=this["webpackJsonpanswers-product-search"]||[]).push([[0],{88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c(1),n=c.n(s),a=c(6),i=c.n(a),l=c(14),o=c(3),d=c(36),u=c(4),j=c(37),m=c(8),x=c.n(m),b=c(38),h=c(13),f=function(e){var t=e.facet,c=e.maxOptions,n=void 0===c?10:c,a=e.onSelectFacet,i=Object(s.useState)(!0),l=Object(o.a)(i,2),d=l[0],j=l[1],m=t.options.filter((function(e,t){return t<n})).sort((function(e,t){return e.selected&&t.selected?t.count-e.count:e.selected?-1:t.selected?1:t.count-e.count}));return Object(r.jsxs)("div",{className:" py-2 mb-3",children:[Object(r.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:function(){return j((function(e){return!e}))},children:[Object(r.jsx)("div",{className:"text-black font-medium text-sm",children:t.displayName}),Object(r.jsx)("div",{className:x()("text-gray-500 transform ease-in-out transition",{"rotate-90":d}),children:Object(r.jsx)(u.c,{})})]}),d&&Object(r.jsx)("div",{className:"mt-2",children:Object(r.jsx)(b.a,{children:m.map((function(e){return Object(r.jsxs)("div",{className:"font-light text-gray-500 flex items-center mb-1 group cursor-pointer",onClick:function(){return a(e)},children:[Object(r.jsx)("div",{className:x()("w-4 h-4 border mr-2 rounded-sm flex items-center justify-center",{"bg-gray-600 border-gray-600":e.selected,"border group-hover:bg-gray-200 ":!e.selected}),children:e.selected&&Object(r.jsx)(h.a,{className:"text-white"})}),e.displayName," ",Object(r.jsx)("span",{className:"text-xs bg-gray-100 px-1 rounded-full text-gray-600 ml-2",children:e.count})]},e.displayName)}))})})]})},p=function(e){var t=e.shoppingCart,c=Object(s.useState)(!1),n=Object(o.a)(c,2),a=n[0],i=n[1];return Object(r.jsxs)("div",{className:"border-b flex justify-between items-stretch ",children:[Object(r.jsx)("div",{className:"text-xl font-light px-4 text-green-700 flex items-center",children:"Seaglass"}),Object(r.jsxs)("div",{className:"flex items-center text-gray-700 px-4",children:[Object(r.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Products"}),Object(r.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Locations"}),Object(r.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Support"}),Object(r.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"About Us"})]}),Object(r.jsxs)("div",{className:"border-l p-4 text-gray-700 flex items-center",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(r.jsx)(u.e,{}),t.length>0&&Object(r.jsx)("div",{className:"absolute right-0 top-0 m-2 p-1 h-4 w-4 flex items-center rounded-full bg-gray-700 text-gray-100 text-xs",children:t.length}),a&&Object(r.jsx)("div",{className:"flex flex-col absolute top-16 right-0 mr-2 rounded bg-white border shadow-lg z-50",children:t.map((function(e){return Object(r.jsxs)("div",{className:"border-b px-4 py-2 w-64 flex items-center",children:[Object(r.jsx)("div",{className:"w-24 mr-4",children:Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e.product.photoGallery[2].image.sourceUrl,width:"100%"})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"font-medium",children:e.product.name}),Object(r.jsxs)("div",{className:"text-gray-500 text-sm",children:[e.quantity," x $",e.product.c_price]})]})]})}))})]})]})},g=function(e){var t=e.product,c=e.showQuickLook,n=e.addToCart,a=Object(s.useState)(!1),i=Object(o.a)(a,2),l=(i[0],i[1]);return Object(r.jsxs)("div",{className:"hover:shadow-xl hover:bg-white hover:z-30 hover:z-100 rounded cursor-pointer transform hover:scale-105 transition ease-in-out group overflow-hidden relative",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:[Object(r.jsxs)("div",{className:"p-4",onClick:c,children:[Object(r.jsx)("div",{className:" aspect-w-4 aspect-h-2",children:t.photoGallery.length>0&&Object(r.jsx)("div",{className:"flex items-center  p-4",children:Object(r.jsx)("img",{src:t.photoGallery[2].image.url,alt:"",width:"100%"})})}),Object(r.jsx)("div",{className:"font-medium text-black mt-4",children:t.name}),Object(r.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[t.c_material,", ",t.c_shape]}),Object(r.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(r.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",t.c_price]})]}),Object(r.jsxs)("div",{className:"flex opacity-0 group-hover:opacity-100 text-gray-500 uppercase text-xs transition ease-in-out  justify-center",children:[Object(r.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:c,children:[Object(r.jsx)(u.d,{className:"mr-2"}),"Look"]}),Object(r.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:n,children:[Object(r.jsx)(u.a,{className:"mr-2"}),"Cart"]})]})]})},v=function(e){var t=e.product,c=e.onClose,n=e.addToCart,a=Object(s.useState)(t.photoGallery[2].image.url),i=Object(o.a)(a,2),l=i[0],d=i[1],j="px-4 py-3  bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200";return Object(r.jsxs)("div",{className:"bg-white rounded shadow-xl relative overflow-hidden",children:[Object(r.jsx)("div",{className:"text-gray-500 p-2 hover:bg-gray-100 absolute top-0 right-0 m-2 rounded cursor-pointer z-50",onClick:c,children:Object(r.jsx)(u.g,{})}),Object(r.jsxs)("div",{className:"p-4",children:[Object(r.jsx)("div",{className:" aspect-w-4 aspect-h-2 z-10 mb-2",children:Object(r.jsx)("div",{className:"flex items-center  p-4 overflow-hidden",children:Object(r.jsx)("img",{src:l,alt:"",width:"100%"})})}),Object(r.jsx)("div",{className:"grid grid-cols-6",children:t.photoGallery.map((function(e,t){return Object(r.jsx)("div",{className:"px-2 flex items-center hover:opactiy-70",onMouseEnter:function(){return d(e.image.url)},children:Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:e.image.url})})},t)}))}),Object(r.jsx)("div",{className:"font-medium text-lg text-black mt-4",children:t.name}),Object(r.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[t.c_material,", ",t.c_shape]}),Object(r.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(r.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",t.c_price]})]}),Object(r.jsxs)("div",{className:"grid grid-cols-2",children:[Object(r.jsxs)("div",{onClick:n,className:x()(j," border-t border-r border-gray-200"),children:[Object(r.jsx)(u.a,{className:"mr-2"}),"Add To Cart"]}),Object(r.jsxs)("div",{className:x()(j,"border-t border-gray-200"),children:[Object(r.jsx)(u.d,{className:"mr-2"}),"View Details"]})]})]})},O=function(e){var t=e.runSearch,c=e.placeholder,n=void 0===c?"Search ...":c,a=e.loading,i=e.querySuggestions,l=void 0===i?[]:i,d=e.updateAutocomplete,j=Object(s.useRef)(null),m=Object(s.useState)(""),b=Object(o.a)(m,2),f=b[0],p=b[1],g=Object(s.useState)(!1),v=Object(o.a)(g,2),O=v[0],y=v[1],N=Object(s.useState)(-1),w=Object(o.a)(N,2),S=w[0],C=w[1],k=Object(s.useState)(!1),M=Object(o.a)(k,2),F=M[0],q=M[1],D=O&&l.length>0&&!F;return Object(r.jsxs)("div",{className:"relative mx-2 mt-2",children:[Object(r.jsxs)("form",{className:"py-2 px-2 mb-2 flex items-center focus-within:shodow-lg focus-within:border group text-gray-700",onSubmit:function(e){if(e.preventDefault(),S>-1){var c=l[S].value;p(c),t(c)}else t(f);q(!0)},children:[Object(r.jsx)(h.b,{className:"mr-2 text-gray-600 text-xl"}),Object(r.jsx)("input",{onFocus:function(){return y(!0)},onBlur:function(){return y(!1)},ref:j,value:f,placeholder:n,onChange:function(e){p(e.target.value),d(e.target.value),C(-1),q(!1)},className:"w-full focus:outline-none font-light bg-transparent",onKeyDown:function(e){"ArrowDown"===e.key?(e.preventDefault(),C((function(e){return Math.min(e+1,l.length-1)}))):"ArrowUp"===e.key&&(e.preventDefault(),C((function(e){return Math.max(e-1,-1)})))}}),a&&Object(r.jsx)(u.f,{className:"animate-spin text-gray-500"}),!a&&f.length>0&&Object(r.jsx)(u.h,{className:"text-gray-300 cursor-pointer group-hover:opacity-100 opacity-0",onClick:function(){p(""),t(""),d("")}})]}),D&&Object(r.jsx)("div",{className:"absolute top-0 mt-12 left-0 right-0 bg-white text-gray-700 font-light border-b z-50",children:l.map((function(e,c){return Object(r.jsxs)("div",{onMouseDown:function(){p(e.value),t(e.value)},className:x()("py-1 px-4 hover:bg-gray-100 cursor-pointer flex items-center",{"bg-gray-100":S===c}),children:[Object(r.jsx)(h.b,{className:"mr-2 text-gray-600"}),e.value]})}))})]})},y=c(7),N=c.n(y),w=c(16),S=c(17),C=c(39),k=Object(d.provideCore)({apiKey:"7bce922a5847aff36dc33345921ba700",experienceKey:"dtc_demo",experienceVersion:"PRODUCTION",locale:"en"});var M=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],a=function(e,t){var c=Object(s.useState)(),r=Object(o.a)(c,2),n=r[0],a=r[1],i=Object(s.useState)([]),l=Object(o.a)(i,2),d=l[0],u=l[1],j=Object(s.useState)(!1),m=Object(o.a)(j,2),x=m[0],b=m[1],h=Object(s.useState)(""),f=Object(o.a)(h,2),p=f[0],g=f[1],v=Object(C.a)({facets:[]}),O=Object(o.a)(v,2),y=O[0],k=O[1],M=Object(s.useState)(!0),F=Object(o.a)(M,2),q=F[0],D=F[1],T=Object(s.useState)([]),A=Object(o.a)(T,2),L=A[0],z=A[1],_=y.facets,E=_.map((function(e){return Object(S.a)(e.options.filter((function(e){return e.selected})).map((function(e){return e.filter})))})).flat(),G=function(){var c=Object(w.a)(N.a.mark((function c(){var r,s,n=arguments;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:p,console.log("Getting Results for ".concat(r)),b(!0),c.next=5,e.verticalSearch({query:r,context:{},verticalKey:t,retrieveFacets:!0,facetFilters:E});case 5:s=c.sent,a(s),u(s.verticalResults.results.map((function(e){return e.rawData}))),b(!1),k((function(e){e.facets=s.facets||[]}));case 10:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),K=function(){var c=Object(w.a)(N.a.mark((function c(){var r;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("Loading More"),c.next=3,e.verticalSearch({query:p,context:{},verticalKey:t,retrieveFacets:!0,facetFilters:E,offset:d.length});case 3:r=c.sent,u((function(e){return[].concat(Object(S.a)(e),Object(S.a)(r.verticalResults.results.map((function(e){return e.rawData}))))}));case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),R=function(){var c=Object(w.a)(N.a.mark((function c(){var r,s,n=arguments;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:p,c.next=3,e.verticalAutoComplete({input:r,verticalKey:t});case 3:s=c.sent,z(s.results);case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(s.useEffect)((function(){q&&(G(p),D(!1))}),[q]),{results:null===n||void 0===n?void 0:n.verticalResults,facets:_,query:p,setQuery:g,toggleFacet:function(e,t){k((function(c){c.facets.forEach((function(c){c.displayName===e&&c.options.forEach((function(e){e.displayName===t&&(e.selected=!e.selected)}))}))})),D(!0)},runSearch:G,updateAutocomplete:R,querySuggestions:L,entities:d,loading:x,loadMore:K}}(k,"products"),i=a.runSearch,d=(a.setQuery,a.loadMore),m=(a.query,a.loading),x=a.results,b=a.facets,h=a.updateAutocomplete,y=a.toggleFacet,M=a.querySuggestions,F=a.entities,q=Object(s.useState)([]),D=Object(o.a)(q,2),T=D[0],A=D[1],L=Object(l.useToasts)().addToast,z=function(e){A((function(t){var c=!1,r=t.map((function(t){return t.product.id===e.id?(c=!0,{product:e,quantity:t.quantity+1}):t}));return c||r.push({quantity:1,product:e}),r})),L(Object(r.jsxs)("div",{className:"py-2 px-4 flex items-center font-light bg-gray-600 text-white text-sm  shadow-sm z-50 rounded-sm mb-2 mr-4 mt-4",children:[Object(r.jsx)(u.a,{}),Object(r.jsx)("div",{className:"ml-2",children:"Added"}),Object(r.jsx)("span",{className:"font-medium ml-1",children:e.name}),Object(r.jsx)("div",{className:"ml-1",children:"to cart"})]}),{appearance:"success",autoDismiss:!0})};return Object(r.jsxs)("div",{className:"mb-12",children:[Object(r.jsx)(p,{shoppingCart:T}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsxs)("div",{className:" w-72 xl:w-80",children:[Object(r.jsx)(O,{runSearch:i,placeholder:"Search for glasses...",loading:m,updateAutocomplete:h,querySuggestions:M}),Object(r.jsx)("div",{className:"flex flex-col px-4 pb-4 ",children:b&&b.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(f,{facet:e,onSelectFacet:function(t){return y(e.displayName,t.displayName)}})},e.fieldId)}))})]}),x&&Object(r.jsxs)("div",{className:"p-4 flex-grow",children:[Object(r.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[Object(r.jsxs)("div",{className:"text-sm text-gray-500",children:["Showing ",F.length," of ",null===x||void 0===x?void 0:x.resultsCount," glasses"]}),Object(r.jsxs)("div",{className:"text-gray-500 text-sm flex items-center hover:underline cursor-pointer",children:["Sort By ",Object(r.jsx)(u.b,{className:"ml-2"})]})]}),Object(r.jsx)(j.a,{className:"overflow-y-hidden",hasMore:x.resultsCount>F.length,next:d,dataLength:F.length,endMessage:Object(r.jsx)("div",{className:"mt-12 mb-4 text-center text-gray-500 font-light text-sm",children:"that's all..."}),loader:Object(r.jsx)("div",{className:"h-12 flex items-center justify-center",children:Object(r.jsx)(u.f,{className:"animate-spin text-gray-500"})}),children:Object(r.jsx)("div",{className:"grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 overflow-y-hidden",children:F.map((function(e,t){return Object(r.jsx)(g,{product:e,showQuickLook:function(){return n(e)},addToCart:function(){return z(e)}},e.id)}))})})]}),c&&Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-80 z-40"}),Object(r.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center",children:Object(r.jsx)("div",{className:"w-1/2",children:Object(r.jsx)(v,{addToCart:function(){z(c),n(null)},product:c,onClose:function(){return n(null)}})})})]})]})]})},F=(c(88),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))});i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(l.ToastProvider,{components:{Toast:function(e){var t=e.children;return Object(r.jsx)("div",{className:"",children:t})}},children:Object(r.jsx)(M,{})})}),document.getElementById("root")),F()}},[[89,1,2]]]);
//# sourceMappingURL=main.1e15f9b6.chunk.js.map