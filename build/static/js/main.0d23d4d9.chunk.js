(this["webpackJsonpanswers-product-search"]=this["webpackJsonpanswers-product-search"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(2),a=r.n(c),s=r(6),i=r.n(s),o=r(16),l=r(15),u=r(13),d=r(40),h=r.n(d);function f(e,t,r,n,c,a,s){try{var i=e[a](s),o=i.value}catch(l){return void r(l)}i.done?t(o):Promise.resolve(o).then(n,c)}function m(e){return function(){var t=this,r=arguments;return new Promise((function(n,c){var a=e.apply(t,r);function s(e){f(a,n,c,s,i,"next",e)}function i(e){f(a,n,c,s,i,"throw",e)}s(void 0)}))}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x={loading:!1,error:!1,core:void 0,hasSearched:!1,verticalKey:"",visibleSearchTerm:"",lastSearchedTerm:"",originalSearchTerm:"",verticalresults:void 0,results:[],entities:[],facets:[],appliedQueryFilters:[],facetFilters:[],autocomplete:{querySuggestions:[],loading:!1,recentSearches:[],autocompleteOptions:[],selectedIndex:-1},debug:!1},j=function(e){return e.map((function(e){return[].concat(e.options.filter((function(e){return e.selected})).map((function(e){return e.filter})))})).flat()},v=function(e,t,r){var n=[].concat(e);return n.forEach((function(e){e.fieldId===t&&e.options.forEach((function(e){e.displayName===r&&(e.selected=!e.selected)}))})),n},b=function(e){return e.map((function(e){return p({},e,{options:e.options.sort((function(e,t){return e.selected&&t.selected?t.count-e.count:e.selected?-1:t.selected?1:t.count-e.count}))})}))},g=function(e,t){("SET_CONFIGURATION"===t.type&&t.config.debug||e.debug)&&console.log(t.type,t);var r=e.autocomplete,n=e.facetSorter;switch(t.type){case"PREPARE_FOR_SEARCH":return p({},e,{loading:!0,error:!1,autocomplete:{loading:!1,autocompleteOptions:[],recentSearches:[],querySuggestions:[],selectedIndex:-1},lastSearchedTerm:t.searchTerm,visibleSearchTerm:t.searchTerm,originalSearchTerm:t.searchTerm});case"SET_CONFIGURATION":var c=t.config;return p({},e,t.initialState,{core:Object(l.provideCore)(c)},c,{debug:c.debug||!1});case"ON_SEARCH_TERM_CHANGE":return p({},e,{visibleSearchTerm:t.searchTerm,originalSearchTerm:t.searchTerm});case"SET_ERROR":return e.debug&&console.log(t.error),p({},e,{loading:!1,error:t.error});case"SET_VERTICAL_RESPONSE":var a=t.response,s=a.facets,i=j(s),o=[].concat(e.facetFilters.filter((function(e){return-1===i.findIndex((function(t){return t.fieldId===e.fieldId&&t.comparedValue===e.comparedValue}))})),i),u=[];return s.forEach((function(e){e.options.forEach((function(t){if(!0===t.selected){var r=u.findIndex((function(t){return t.fieldId===e.fieldId}));-1!==r?u[r].values.push(t.displayName):u.push({displayName:e.displayName,fieldId:e.fieldId,source:"FACET",values:[t.displayName]})}}))})),p({},e,{loading:!1,autocomplete:{loading:!1,autocompleteOptions:[],recentSearches:[],querySuggestions:[],selectedIndex:-1},error:!1,verticalresults:a.verticalResults,hasSearched:!0,results:a.verticalResults.results,facets:n?n(s):b(s),appliedFilters:u,facetFilters:o});case"SET_AUTOCOMPLETE":var d=t.querySuggestions,h=t.recentSearches;return p({},e,{autocomplete:{loading:!1,querySuggestions:d,selectedIndex:-1,recentSearches:h,autocompleteOptions:[].concat(h.map((function(e){return{value:e.query,type:"RECENT"}})),d.filter((function(e){return!h.map((function(e){return e.query})).includes(e.value)})).map((function(e){return p({},e,{type:"SUGGESTION"})}))).map((function(e){return p({},e,{key:e.type+e.value})}))}});case"NEXT_AUTOCOMPLETE_OPTION":var f=Math.min(r.autocompleteOptions.length-1,r.selectedIndex+1);return p({},e,{autocomplete:p({},r,{autocompleteOptions:e.autocomplete.autocompleteOptions.map((function(e,t){return p({},e,{highlighted:t===f})})),selectedIndex:f}),visibleSearchTerm:r.autocompleteOptions[f].value});case"PREVIOUS_AUTOCOMPLETE_OPTION":var m=Math.max(-1,r.selectedIndex-1),x=-1===m?e.originalSearchTerm:r.autocompleteOptions[m].value;return p({},e,{autocomplete:p({},r,{autocompleteOptions:e.autocomplete.autocompleteOptions.map((function(e,t){return p({},e,{highlighted:t===m})})),selectedIndex:m}),visibleSearchTerm:x});case"APPEND_RESULTS":return p({},e,{results:[].concat(e.results,t.results)});case"UPDATE_SORT_BYS":return p({},e,{sortBys:t.sortBys});case"UPDATE_FACETS":var v=t.facets;return p({},e,{facetFilters:j(v),facets:v});default:return e}},y=Object(c.createContext)({state:x,dispatch:function(){return null}}),O=function(e){var t=e.children,r=Object(c.useReducer)(g,x),n=r[0],s=r[1];return a.a.createElement(y.Provider,{value:{state:n,dispatch:s}},t)};var N=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,c="function"===typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",i=c.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(k){o=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var c=t&&t.prototype instanceof x?t:x,a=Object.create(c.prototype),s=new C(n||[]);return a._invoke=function(e,t,r){var n=d;return function(c,a){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===c)throw a;return L()}for(r.method=c,r.arg=a;;){var s=r.delegate;if(s){var i=S(s,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var o=u(e,t,r);if("normal"===o.type){if(n=r.done?m:h,o.arg===p)continue;return{value:o.arg,done:r.done}}"throw"===o.type&&(n=m,r.method="throw",r.arg=o.arg)}}}(e,r,s),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",m="completed",p={};function x(){}function j(){}function v(){}var b={};b[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==r&&n.call(y,a)&&(b=y);var O=v.prototype=x.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(c,a,s,i){var o=u(e[c],e,a);if("throw"!==o.type){var l=o.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,i)}))}i(o.arg)}var c;this._invoke=function(e,n){function a(){return new t((function(t,c){r(e,n,t,c)}))}return c=c?c.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var c=u(n,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,p;var a=c.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function _(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var c=-1,s=function r(){for(;++c<e.length;)if(n.call(e,c))return r.value=e[c],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}return{next:L}}function L(){return{value:t,done:!0}}return j.prototype=O.constructor=v,v.constructor=j,j.displayName=o(v,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,i,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},N(w.prototype),w.prototype[s]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,c,a){void 0===a&&(a=Promise);var s=new w(l(t,r,n,c),a);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},N(O),o(O,i,"Generator"),O[a]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function c(n,c){return i.type="throw",i.arg=e,r.next=n,c&&(r.method="next",r.arg=t),!!c}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return c("end");if(s.tryLoc<=this.prev){var o=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(o&&l){if(this.prev<s.catchLoc)return c(s.catchLoc,!0);if(this.prev<s.finallyLoc)return c(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return c(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return c(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc<=this.prev&&n.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var a=c;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var c=n.arg;E(r)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}})),w=new h.a,S=function(){var e=Object(c.useContext)(y),t=e.state,r=e.dispatch,n=t.lastSearchedTerm,a=t.visibleSearchTerm,s=t.facets,i=t.autocomplete,o=t.sortBys,l=t.verticalKey,u=t.results,d=t.core,h=t.facetFilters,f=function(){var e=m(N.mark((function e(t,r){return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===t&&(t=a),void 0===r&&(r=!0),w.setRecentSearch(t),x(t,r?void 0:h,o);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=m(N.mark((function e(t,n,c){var a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"PREPARE_FOR_SEARCH",searchTerm:t}),e.prev=1,e.next=4,d.verticalSearch({query:t,context:{},verticalKey:l,retrieveFacets:!0,sortBys:c,facetFilters:n});case 4:a=e.sent,r({type:"SET_VERTICAL_RESPONSE",response:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"SET_ERROR",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r,n){return e.apply(this,arguments)}}(),b=function(){var e=m(N.mark((function e(t){var n;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=a),r({type:"ON_SEARCH_TERM_CHANGE",searchTerm:t}),e.next=4,d.verticalAutoComplete({input:t,verticalKey:l});case 4:n=e.sent,r({type:"SET_AUTOCOMPLETE",querySuggestions:n.results,recentSearches:w.getRecentSearches(t)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=m(N.mark((function e(t,c){return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===c&&(c=!0),r({type:"UPDATE_SORT_BYS",sortBys:t}),c&&x(n,j(s),t);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return{state:t,actions:{runSearch:f,handleSearchTermChange:b,chooseAutocompleteOption:function(e){var t=i.autocompleteOptions[e];t?f(t.value):console.log("Index does not exist")},toggleFacet:function(){var e=m(N.mark((function e(c,a,s){var i,l,u;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===s&&(s=!0),i=v(t.facets,c,a),r({type:"UPDATE_FACETS",facets:i}),console.log(h),l=!1,u=h.filter((function(e){return e.fieldId!==c||e.comparedValue!==a||(l=!0,!1)})),l||u.push({fieldId:c,comparator:"$eq",comparedValue:a}),console.log(u),s&&x(n,u,o);case 9:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),loadMore:function(){var e=m(N.mark((function e(){var t;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.verticalSearch({query:n,context:{},verticalKey:l,retrieveFacets:!0,facetFilters:j(s),offset:u.length});case 2:t=e.sent,r({type:"APPEND_RESULTS",results:t.verticalResults.results});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateSortBys:g,setConfiguration:function(e,t){r({type:"SET_CONFIGURATION",config:e,initialState:t})},nextAutocompleteOption:function(){r({type:"NEXT_AUTOCOMPLETE_OPTION"})},prevAutocompleteOption:function(){r({type:"PREVIOUS_AUTOCOMPLETE_OPTION"})},clearSearch:function(){r({type:"ON_SEARCH_TERM_CHANGE",searchTerm:""}),r({type:"UPDATE_FACETS",facets:s.map((function(e){return p({},e,{options:e.options.map((function(e){return p({},e,{selected:!1})}))})}))}),r({type:"UPDATE_SORT_BYS",sortBys:void 0}),x("",void 0,void 0)}}}},T=function(e){return a.a.createElement(u.b,null,a.a.createElement(O,null,a.a.createElement(E,Object.assign({},e))))},E=function(e){var t=e.config,r=e.children,n=t.runSearchOnLoad,s=void 0!==n&&n,i=S(),o=i.state,l=i.actions,d=l.runSearch,h=l.setConfiguration,f=l.handleSearchTermChange,m=function(){var e=S().state,t=Object(u.d)({query:u.c,filters:u.a,sortBys:u.a}),r=t[0],n=t[1],a=j(e.facets);return Object(c.useEffect)((function(){n({query:e.lastSearchedTerm||void 0,filters:a.length>0?a:void 0,sortBys:e.sortBys||void 0})}),[e.lastSearchedTerm,a]),r}();return Object(c.useEffect)((function(){o.verticalKey||h(t,p({},x,{lastSearchedTerm:m.query||"",originalSearchTerm:m.query||"",visibleSearchTerm:m.query||"",facetFilters:m.filters||[],sortBys:m.sortBys})),s&&o.verticalKey&&d(void 0,!1),o.verticalKey&&f()}),[s,o.verticalKey]),a.a.createElement(a.a.Fragment,null,r)},C=r(4),_=(r(92),r(3)),L=r(41),k=r(12),A=r(8),I=r(42),F=r.n(I),P=r(7),R=r.n(P),D=function(e){var t=e.children,r=e.name,a=e.count,s=Object(c.useState)(!0),i=Object(C.a)(s,2),o=i[0],l=i[1];return Object(n.jsxs)("div",{className:" py-2 mb-3",children:[Object(n.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:function(){return l((function(e){return!e}))},children:[Object(n.jsxs)("div",{className:"text-black font-medium text-sm flex itesm-center",children:[Object(n.jsx)("div",{children:r}),a>0&&Object(n.jsxs)("div",{className:"ml-1",children:["(",a,")"]})]}),Object(n.jsx)("div",{className:R()("text-gray-500 transform ease-in-out transition",{"rotate-90":o}),children:Object(n.jsx)(_.c,{})})]}),o&&Object(n.jsx)("div",{className:"mt-2",children:t})]})},U=function(e){var t=e.facet,r=e.maxOptions,c=void 0===r?10:r,a=e.onSelectFacet,s=t.options.filter((function(e,t){return t<c})).sort((function(e,t){return e.displayName.localeCompare(t.displayName)}));return Object(n.jsx)(D,{name:t.displayName,count:t.options.filter((function(e){return e.selected})).length,children:Object(n.jsx)(k.a,{className:"grid grid-cols-3",children:s.map((function(e){return Object(n.jsxs)("div",{className:"font-light flex flex-col items-center mb-3 group cursor-pointer hover:opacity-75",onClick:function(){return a(e)},children:[Object(n.jsxs)("div",{className:"h-6 w-6 rounded-full mb-1 group-hover:opactiy-75 flex items-center justify-center",style:{backgroundColor:F()(e.displayName)},children:[e.selected&&Object(n.jsx)(A.a,{className:"text-white"}),!e.selected&&Object(n.jsx)("div",{className:"text-white text-xs opacity-60",children:e.count})]}),Object(n.jsx)("div",{className:"text-xs text-light text-gray-600",children:e.displayName})]},e.displayName)}))})})},B=function(e){var t=e.facet,r=e.maxOptions,a=void 0===r?10:r,s=e.onSelectFacet,i=Object(c.useState)(""),o=Object(C.a)(i,2),l=o[0],u=(o[1],t.options.filter((function(e,t){var r=t<a;return(!(l.length>0)||e.displayName.toLocaleLowerCase().includes(l.toLocaleLowerCase()))&&r})).sort((function(e,t){return e.selected&&t.selected?t.count-e.count:e.selected?-1:t.selected?1:t.count-e.count})));return Object(n.jsx)(D,{name:t.displayName,count:t.options.filter((function(e){return e.selected})).length,children:Object(n.jsx)(k.a,{children:u.map((function(e){return Object(n.jsxs)("div",{className:"font-light text-gray-500 flex items-center mb-1 group cursor-pointer",onClick:function(){return s(e)},children:[Object(n.jsx)("div",{className:R()("w-4 h-4 border mr-2 rounded-sm flex items-center justify-center",{"bg-gray-600 border-gray-600":e.selected,"border group-hover:bg-gray-200 ":!e.selected}),children:e.selected&&Object(n.jsx)(A.a,{className:"text-white"})}),e.displayName," ",Object(n.jsx)("span",{className:"text-xs bg-gray-100 px-1 rounded-full text-gray-600 ml-2",children:e.count})]},e.displayName)}))})})},M=function(e){Object(L.a)(e);var t=S(),r=t.state.facets,c=t.actions.toggleFacet;return Object(n.jsx)("div",{className:"flex flex-col px-4 pb-4 mt-4",children:r&&r.map((function(e){return Object(n.jsxs)("div",{children:["c_color"!==e.fieldId&&Object(n.jsx)(B,{facet:e,onSelectFacet:function(t){return c(e.fieldId,t.displayName)}}),"c_color"===e.fieldId&&Object(n.jsx)(U,{facet:e,onSelectFacet:function(t){return c(e.fieldId,t.displayName)}})]},e.fieldId)}))})},G=function(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-80 z-40"}),Object(n.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center",children:Object(n.jsx)("div",{className:"md:w-2/3 lg:w-1/2 mx-4 md:mx-0",children:t})})]})},q=function(e){var t=e.placeholder,r=void 0===t?"Search ...":t,a=Object(c.useRef)(null),s=S(),i=s.state,o=s.actions,l=i.loading,u=i.autocomplete,d=i.visibleSearchTerm,h=o.handleSearchTermChange,f=o.runSearch,m=o.nextAutocompleteOption,p=o.prevAutocompleteOption,x=Object(c.useState)(!1),j=Object(C.a)(x,2),v=j[0],b=j[1],g=v&&u.autocompleteOptions.length>0;return Object(n.jsxs)("div",{className:"relative m-2 flex items-center",children:[v&&Object(n.jsx)("div",{className:"w-72"}),Object(n.jsxs)("div",{className:R()("w-72 transition rounded-full ease-in-out bg-gray-100 relative duration-500 focus-within:z-50 focus-within:bg-white border border-transparent focus-within:border-gray-300 focus-within:absolute top-0"),style:v?{borderRadius:"1.2rem"}:{},children:[Object(n.jsxs)("form",{className:"py-2 px-4 flex items-center group text-gray-700 rounded-full",onSubmit:function(e){e.preventDefault(),f()},children:[Object(n.jsx)(A.c,{className:"mr-2 text-gray-600 text-xl"}),Object(n.jsx)("input",{onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},ref:a,value:d,placeholder:r,onChange:function(e){h(e.target.value)},className:"w-full focus:outline-none font-light bg-transparent",onKeyDown:function(e){"ArrowDown"===e.key?(e.preventDefault(),m()):"ArrowUp"===e.key&&(e.preventDefault(),p())}}),l&&Object(n.jsx)(_.h,{className:"animate-spin text-gray-500"}),!l&&d.length>0&&Object(n.jsx)(_.j,{className:"text-gray-500 cursor-pointer group-hover:opacity-100 opacity-0 text-xl",onClick:function(){f("")}})]}),g&&Object(n.jsx)("div",{className:"text-gray-700 font-light pb-2",children:u.autocompleteOptions.map((function(e,t){return Object(n.jsxs)("div",{onMouseDown:function(){f(e.value)},className:R()("py-1 px-4 hover:bg-gray-100 cursor-pointer flex items-center",{"bg-gray-100":u.selectedIndex===t}),children:[Object(n.jsxs)("div",{className:"mr-2 text-gray-500",children:["SUGGESTION"===e.type&&Object(n.jsx)(A.c,{}),"RECENT"===e.type&&Object(n.jsx)(_.e,{className:"text-xs"})]}),e.value]},e.value+e.type)}))})]})]})},z=function(e){var t=e.shoppingCart,r=Object(c.useState)(!1),a=Object(C.a)(r,2),s=a[0],i=a[1];return Object(n.jsxs)("div",{className:"border-b flex justify-between items-stretch h-14",children:[Object(n.jsx)("div",{className:"text-xl font-light px-4 text-green-700 flex items-center",children:"Seaglass"}),Object(n.jsxs)("div",{className:" items-center text-gray-700 px-4 hidden md:flex",children:[Object(n.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Products"}),Object(n.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Locations"}),Object(n.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Support"}),Object(n.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"About Us"})]}),Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)(q,{placeholder:"Search for glasses..."}),Object(n.jsxs)("div",{className:"border-l p-4 text-gray-700 flex items-center",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(n.jsx)(_.g,{}),t.length>0&&Object(n.jsx)("div",{className:"absolute right-0 top-0 m-2 p-1 h-4 w-4 flex items-center rounded-full bg-gray-700 text-gray-100 text-xs",children:t.length}),s&&Object(n.jsx)("div",{className:"flex flex-col absolute top-16 right-0 mr-2 rounded bg-white border shadow-lg z-50",children:t.map((function(e){return Object(n.jsxs)("div",{className:"border-b px-4 py-2 w-64 flex items-center",children:[Object(n.jsx)("div",{className:"w-24 mr-4",children:Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e.product.rawData.photoGallery[2].image.sourceUrl,width:"100%"})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"font-medium",children:e.product.rawData.name}),Object(n.jsxs)("div",{className:"text-gray-500 text-sm",children:[e.quantity," x $",e.product.rawData.c_price]})]})]})}))})]})]})]})},K=r(43),V=function(e){var t=e.product,r=e.showQuickLook,c=e.addToCart,a=t.rawData,s=a.name,i=a.c_shape,o=a.c_material,l=a.photoGallery,u=a.c_price;return Object(n.jsxs)("div",{className:R()("rounded cursor-pointer transform  transition ease-in-out group overflow-hidden relative","md:hover:shadow-xl md:hover:bg-white md:hover:z-30 md:hover:scale-105 md:hover:z-100"),children:[Object(n.jsxs)("div",{className:"p-4",onClick:r,children:[Object(n.jsx)("div",{className:" aspect-w-4 aspect-h-2",children:l.length>0&&Object(n.jsx)("div",{className:"flex items-center  p-4",children:Object(n.jsx)("img",{src:l[2].image.url,alt:"",width:"100%"})})}),Object(n.jsx)("div",{className:"font-medium text-black mt-4",children:s}),Object(n.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[o,", ",i]}),Object(n.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(n.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",u]})]}),Object(n.jsxs)("div",{className:"flex opacity-0 md:group-hover:opacity-100 text-gray-500 uppercase text-xs transition ease-in-out  justify-center",children:[Object(n.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:r,children:[Object(n.jsx)(_.f,{className:"mr-2"}),"Look"]}),Object(n.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:c,children:[Object(n.jsx)(_.a,{className:"mr-2"}),"Cart"]})]})]})},H=function(e){var t=e.onQuickLook,r=e.onAddToCart,c=S(),a=c.state,s=a.verticalresults,i=a.results,o=c.actions.loadMore;return Object(n.jsx)(K.a,{className:"overflow-x-auto",style:{overflow:"visible"},hasMore:s.resultsCount>i.length,next:o,dataLength:i.length,endMessage:Object(n.jsx)("div",{className:"mt-12 mb-4 text-center text-gray-500 font-light text-sm",children:"that's all..."}),loader:Object(n.jsx)("div",{className:"h-12 flex items-center justify-center",children:Object(n.jsx)(_.h,{className:"animate-spin text-gray-500"})}),children:Object(n.jsx)(k.a,{className:"grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6",children:i.map((function(e,c){return Object(n.jsx)("div",{className:"overflow-visible z-40",children:Object(n.jsx)(V,{product:e,showQuickLook:function(){return t(e)},addToCart:function(){return r(e)}})},e.id)}))})})},Y=function(e){var t=e.product,r=e.onClose,a=e.addToCart,s=t.rawData,i=s.name,o=s.c_shape,l=s.c_material,u=s.photoGallery,d=s.c_price,h=Object(c.useState)(u[2].image.url),f=Object(C.a)(h,2),m=f[0],p=f[1],x="px-4 py-3  bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200";return Object(n.jsxs)("div",{className:"bg-white rounded shadow-xl relative overflow-hidden",children:[Object(n.jsx)("div",{className:"text-gray-500 p-2 hover:bg-gray-100 absolute top-0 right-0 m-2 rounded cursor-pointer z-50",onClick:r,children:Object(n.jsx)(_.i,{})}),Object(n.jsxs)("div",{className:"p-4",children:[Object(n.jsx)("div",{className:" aspect-w-4 aspect-h-2 z-10 mb-2",children:Object(n.jsx)("div",{className:"flex items-center  p-4 overflow-hidden",children:Object(n.jsx)("img",{src:m,alt:"",width:"100%"})})}),Object(n.jsx)("div",{className:"grid grid-cols-6",children:u.map((function(e,t){return Object(n.jsx)("div",{className:"px-2 flex items-center hover:opactiy-70",onMouseEnter:function(){return p(e.image.url)},onTouchStart:function(){return p(e.image.url)},children:Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e.image.url})})},t)}))}),Object(n.jsx)("div",{className:"font-medium text-lg text-black mt-4",children:i}),Object(n.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[l,", ",o]}),Object(n.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(n.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",d]})]}),Object(n.jsxs)("div",{className:"grid grid-cols-2",children:[Object(n.jsxs)("div",{onClick:a,className:R()(x," border-t border-r border-gray-200"),children:[Object(n.jsx)(_.a,{className:"mr-2"}),"Add To Cart"]}),Object(n.jsxs)("div",{className:R()(x,"border-t border-gray-200"),children:[Object(n.jsx)(_.f,{className:"mr-2"}),"View Details"]})]})]})},Q=function(){var e=S().actions,t=Object(c.useState)(0),r=Object(C.a)(t,2),a=r[0],s=r[1],i=Object(c.useState)(!1),o=Object(C.a)(i,2),l=o[0],u=o[1],d=[{label:"Most Popular"},{label:"Most Relevant"},{label:"A-Z",sortBys:[{type:"FIELD",field:"name",direction:"ASC"}]},{label:"Price (High to Low)",sortBys:[{type:"FIELD",field:"c_price",direction:"DESC"}]},{label:"Price (Low to High)",sortBys:[{type:"FIELD",field:"c_price",direction:"ASC"}]}];return Object(n.jsxs)("div",{className:"relative",children:[Object(n.jsxs)("div",{className:"text-gray-500 text-sm hover:underline cursor-pointer flex items-center",onClick:function(){return u((function(e){return!e}))},children:[d[a].label,Object(n.jsx)(_.b,{className:"ml-2"})]}),l&&Object(n.jsx)("div",{className:"absolute top-8 right-0 shadow-lg border bg-white z-50 w-48 text-sm rounded-sm overflow-hidden text-gray-700 font-light",children:d.map((function(t,r){return Object(n.jsxs)("div",{onClick:function(){return s(t=r),u(!1),void e.updateSortBys(d[t].sortBys);var t},className:"pl-2 pr-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer ",children:[Object(n.jsx)("div",{className:"w-6",children:r===a&&Object(n.jsx)(A.a,{})}),Object(n.jsx)("div",{children:t.label})]},r)}))})]})},$=function(e){var t=e.onToggleFilters,r=S(),c=r.state,a=r.actions,s=a.toggleFacet,i=a.clearSearch,o=c.verticalresults,l=c.results,u=c.appliedFilters;return Object(n.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[Object(n.jsxs)("div",{className:"text-sm text-gray-500 flex items-center",children:[Object(n.jsxs)("div",{children:["Showing ",l.length," of ",null===o||void 0===o?void 0:o.resultsCount," glasses"]}),Object(n.jsx)("div",{className:"border-l  ml-2  flex items-center",children:u.map((function(e){return Object(n.jsxs)("div",{className:"ml-2 flex items-center",children:[e.displayName,":"," ","FACET"===e.source&&e.values.map((function(t){return Object(n.jsxs)("button",{className:"text-gray-600 border px-1 rounded-sm flex items-center ml-1 hover:bg-gray-100 text-sm",onClick:function(){return s(e.fieldId,t)},children:[t,Object(n.jsx)(A.b,{className:"ml-1"})]},t)})),"NLP"===e.source&&Object(n.jsx)("div",{className:"ml-1",children:e.values.join(", ")})]},e.fieldId)}))}),u.length>0&&Object(n.jsx)("div",{className:"border-l  ml-2  flex items-center pl-2",children:Object(n.jsx)("button",{className:"hover:underline px-1",onClick:i,children:"Clear All"})})]}),Object(n.jsx)("div",{className:"hidden md:flex",children:Object(n.jsx)(Q,{})}),Object(n.jsxs)("div",{className:"flex md:hidden text-gray-500 text-sm items-center hover:underline cursor-pointer",onClick:t,children:["Filter ",Object(n.jsx)(_.d,{className:"ml-2"})]})]})};var J=function(){var e=Object(c.useState)(null),t=Object(C.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(C.a)(s,2),l=i[0],u=i[1],d=function(){var e=Object(c.useState)([]),t=Object(C.a)(e,2),r=t[0],a=t[1],s=Object(o.useToasts)().addToast;return{shoppingCart:r,addProductToCart:function(e){a((function(t){var r=!1,n=t.map((function(t){return t.product.rawData.id===e.rawData.id?(r=!0,{product:e,quantity:t.quantity+1}):t}));return r||n.push({quantity:1,product:e}),n})),s(Object(n.jsxs)("div",{className:"py-2 px-4 flex items-center font-light bg-gray-600 text-white text-sm  shadow-sm z-50 rounded-sm mb-2 mr-4 mt-4",children:[Object(n.jsx)(_.a,{}),Object(n.jsx)("div",{className:"ml-2",children:"Added"}),Object(n.jsx)("span",{className:"font-medium ml-1",children:e.rawData.name}),Object(n.jsx)("div",{className:"ml-1",children:"to cart"})]}),{appearance:"success",autoDismiss:!0})}}}(),h=d.shoppingCart,f=d.addProductToCart,m=S(),p=m.state,x=p.verticalresults,j=p.lastSearchedTerm,v=p.loading,b=m.actions.runSearch;return Object(n.jsxs)("div",{className:"mb-12 relative",children:[Object(n.jsx)(z,{shoppingCart:h}),Object(n.jsxs)("div",{className:"flex items-start",children:[Object(n.jsxs)("div",{className:"w-64 xl:w-72 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block",children:[j.length>0&&Object(n.jsxs)("div",{className:"px-4 mt-5 flex items-center group",children:[Object(n.jsxs)("div",{className:"font-medium",children:[j," "]}),!v&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"ml-1",children:["(",null===x||void 0===x?void 0:x.resultsCount.toLocaleString(),")"]}),Object(n.jsx)("div",{className:"flex-grow"}),Object(n.jsx)("div",{children:Object(n.jsx)(_.j,{className:"opacity-0 group-hover:opacity-100 text-gray-500 cursor-pointer hover:text-gray-600 bg-gray-100",onClick:function(){b("")}})})]}),v&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"flex-grow"}),Object(n.jsx)("div",{className:"ml-1",children:Object(n.jsx)(_.h,{className:"animate-spin text-gray-500"})})]})]}),Object(n.jsx)(M,{})]}),x&&Object(n.jsxs)("div",{className:"p-4 flex-grow",children:[Object(n.jsx)($,{onToggleFilters:function(){return u((function(e){return!e}))}}),Object(n.jsx)(H,{onAddToCart:f,onQuickLook:function(e){return a(e)}})]})]}),l&&Object(n.jsxs)("div",{className:"fixed top-0 right-0 left-0 bottom-0 bg-white z-50 flex flex-col",children:[Object(n.jsxs)("div",{className:"pt-4 px-4 text-lg font-light flex items-center",children:[Object(n.jsx)(_.d,{className:"text-gray-600 mr-2"}),"Filters",Object(n.jsx)("div",{className:"flex-grow"}),Object(n.jsx)("button",{className:"p-4 text-gray-400 -m-4",onClick:function(){return u(!1)},children:Object(n.jsx)(_.i,{})})]}),Object(n.jsx)("div",{className:"flex-grow overflow-y-auto",children:Object(n.jsx)(M,{})}),Object(n.jsxs)("button",{className:"m-2 bg-gray-800 text-white p-4 text-center",onClick:function(){return u(!1)},children:["Show ",null===x||void 0===x?void 0:x.resultsCount," Glasses"]})]}),r&&Object(n.jsx)(G,{children:Object(n.jsx)(Y,{addToCart:function(){f(r),a(null)},product:r,onClose:function(){return a(null)}})}),Object(n.jsx)("div",{className:"fixed right-0 bottom-0 border-l border-t bg-white z-50 text-xs text-gray-500 p-4 w-48",children:Object(n.jsxs)("div",{children:["This is an example React application built on top of"," ",Object(n.jsx)("a",{href:"https://www.yext.com/products/answers",rel:"noreferrer",target:"_blank",className:"underline",children:"Yext Answers"}),"."," ",Object(n.jsx)("a",{href:"https://github.com/Mxs2019/answers-product-search-core",rel:"noreferrer",target:"_blank",className:"underline",children:"View the code on github"})]})})]})},X=(r(100),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,102)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))});i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(o.ToastProvider,{components:{Toast:function(e){var t=e.children;return Object(n.jsx)("div",{className:"",children:t})}},children:Object(n.jsx)(T,{config:{runSearchOnLoad:!0,apiKey:"7bce922a5847aff36dc33345921ba700",experienceKey:"dtc_demo",experienceVersion:"PRODUCTION",locale:"en",verticalKey:"products"},children:Object(n.jsx)(J,{})})})}),document.getElementById("root")),X()}},[[101,1,2]]]);
//# sourceMappingURL=main.0d23d4d9.chunk.js.map