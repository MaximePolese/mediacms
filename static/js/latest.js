!function(){var n,t={7487:function(n,t,e){"use strict";var r=e(2541),o=e(4538);(0,r.X)("page-latest",o.LatestMediaPage)},2083:function(n,t,e){var r=e(4835).Dispatcher;n.exports=new r},1450:function(n,t,e){"use strict";function r(){var n,t,e,r=null;if(document.cookie&&""!==document.cookie)for(t=document.cookie.split(";"),n=0;n<t.length;){if("csrftoken="===(e=t[n].trim()).substring(0,10)){r=decodeURIComponent(e.substring(10));break}n+=1}return r}e.d(t,{o:function(){return r}}),e(2322),e(9268),e(3233)},9039:function(n,t,e){"use strict";e.d(t,{O:function(){return i},a:function(){return a}}),e(1646),e(288),e(2004),e(8407),e(6394),e(8288),e(5677),e(2129),e(4655),e(3675),e(4458);var r=e(4646);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n,t,e){var r,u;switch(e){case TypeError:case RangeError:case SyntaxError:case ReferenceError:r=new e(t[0]);break;default:r=new Error(t[0])}return n.apply(void 0,[r.message].concat(function(n){if(Array.isArray(n))return o(n)}(u=t.slice(1))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(u)||function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),r}function i(n,t){return u(r.v,n,t)}function a(n,t){return u(r.Z,n,t)}},9264:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(2083);function o(n,t){return r.register(n[t].bind(n)),n}},1397:function(n,t,e){"use strict";e.d(t,{U:function(){return u}}),e(2322),e(3296),e(6394),e(4669);var r=e(137),o=e.n(r);function u(n,t){var e=o()(n,{});return""!==e.origin&&"null"!==e.origin&&e.origin||(e=o()(t+"/"+n.replace(/^\//g,""),{})),e.toString()}},705:function(n,t,e){"use strict";function r(n,t){function e(n,t,e){return Number(parseFloat(n/t).toFixed(n<10*t?1:0))+e}return t?n.toLocaleString():function(n,t,r,o,u,i){for(;t>=o;)u*=r,o*=r,n+=1;return n<i.length?e(t,u,i[n]):e(t*(r*(n-(i.length-1))),u,i[i.length-1])}(0,n,1e3,1e3,1,["","K","M","B","T"])}e.d(t,{Z:function(){return r}}),e(717),e(6660)},2161:function(n,t,e){"use strict";e.d(t,{s:function(){return r}}),e(2322),e(9268);var r=function(n){if(n){var t=n.split(".");return t[t.length-1]}}},473:function(n,t,e){"use strict";e.d(t,{BrowserEvents:function(){return r.Jj},addClassname:function(){return r.Ec},cancelAnimationFrame:function(){return r.Wx},hasClassname:function(){return r.mO},removeClassname:function(){return r.dt},requestAnimationFrame:function(){return r.U7},supportsSvgAsImg:function(){return r.Je},logErrorAndReturnError:function(){return o.O},logWarningAndReturnError:function(){return o.a},exportStore:function(){return u.Z},formatInnerLink:function(){return i.U},formatViewsNumber:function(){return a.Z},csrfToken:function(){return c.o},imageExtension:function(){return f.s},greaterCommonDivision:function(){return s.$A},isPositiveIntegerOrZero:function(){return s.ZU},PositiveInteger:function(){return l.n},PositiveIntegerOrZero:function(){return l.g},publishedOnDate:function(){return p.Z},quickSort:function(){return d.U},deleteRequest:function(){return m.Jl},getRequest:function(){return m.A_},postRequest:function(){return m.j0},putRequest:function(){return m.GH},translate_string:function(){return v.g}});var r=e(1454),o=e(9039),u=e(9264),i=e(1397),a=e(705),c=e(1450),f=e(2161),s=(e(4646),e(408)),l=e(5477),p=e(2276),d=e(3803),m=e(447),v=e(6353)},4646:function(n,t,e){"use strict";e.d(t,{Z:function(){return a},v:function(){return c}}),e(288),e(1646),e(2004),e(8407),e(6394),e(8288),e(5677),e(2129),e(4655),e(3675),e(4458);var r=e(1283);function o(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var i=function(){for(var n,t=arguments.length,e=new Array(t),u=0;u<t;u++)e[u]=arguments[u];return(n=r)[e[0]].apply(n,o(e.slice(1)))},a=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return i.apply(void 0,["warn"].concat(t))},c=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return i.apply(void 0,["error"].concat(t))}},408:function(n,t,e){"use strict";e.d(t,{aP:function(){return u},ZU:function(){return i},$A:function(){return a}}),e(5777);var r=function(n){return n===Math.trunc(n)},o=function(n){return function(n,t){return n>0}(n)},u=function(n){return r(n)&&o(n)},i=function(n){return r(n)&&(o(n)||function(n){return 0===n}(n))},a=function n(t,e){return e?n(e,t%e):t}},5477:function(n,t,e){"use strict";e.d(t,{g:function(){return i},n:function(){return a}}),e(2004),e(8407),e(6394),e(8288),e(5677),e(2129),e(4655);var r=e(9039),o=e(408);function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var i=function(n,t,e){return void 0===n[t]||(0,o.ZU)(n[t])?null:(0,r.O)(["Invalid prop `"+t+"` of type `"+u(n[t])+"` supplied to `"+(e||"N/A")+"`, expected `positive integer or zero` ("+n[t]+")."])},a=function(n,t,e){return void 0===n[t]||(0,o.aP)(n[t])?null:(0,r.O)(["Invalid prop `"+t+"` of type `"+u(n[t])+"` supplied to `"+(e||"N/A")+"`, expected `positive integer` ("+n[t]+")."])}},447:function(n,t,e){"use strict";e.d(t,{A_:function(){return a},j0:function(){return f},GH:function(){return l},Jl:function(){return d}}),e(7588),e(6394),e(5334);var r=e(4559),o=e.n(r);function u(n,t,e,r,o,u,i){try{var a=n[u](i),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(r,o)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){u(i,r,o,a,c,"next",n)}function c(n){u(i,r,o,a,c,"throw",n)}a(void 0)}))}}function a(n,t,e,r){return c.apply(this,arguments)}function c(){return(c=i(regeneratorRuntime.mark((function n(t,e,o,u){var i,a,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=function(n){if(u instanceof Function){var t=n;if(void 0===n.response)t={type:"network",error:n};else if(void 0!==n.response.status)switch(n.response.status){case 401:t={type:"private",error:n,message:"Media is private"};break;case 400:t={type:"unavailable",error:n,message:"Media is unavailable"}}u(t)}},a=function(n){o instanceof Function&&o(n)},i={timeout:null,maxContentLength:null},!e){n.next=8;break}return n.next=6,(0,r.get)(t,i).then(a).catch(c||null);case 6:n.next=9;break;case 8:(0,r.get)(t,i).then(a).catch(c||null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t,e,r,o,u){return s.apply(this,arguments)}function s(){return(s=i(regeneratorRuntime.mark((function n(t,e,o,u,i,a){var c,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f=function(n){a instanceof Function&&a(n)},c=function(n){i instanceof Function&&i(n)},e=e||{},!u){n.next=8;break}return n.next=6,(0,r.post)(t,e,o||null).then(c).catch(f||null);case 6:n.next=9;break;case 8:(0,r.post)(t,e,o||null).then(c).catch(f||null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t,e,r,o,u){return p.apply(this,arguments)}function p(){return(p=i(regeneratorRuntime.mark((function n(t,e,o,u,i,a){var c,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f=function(n){a instanceof Function&&a(n)},c=function(n){i instanceof Function&&i(n)},e=e||{},!u){n.next=8;break}return n.next=6,(0,r.put)(t,e,o||null).then(c).catch(f||null);case 6:n.next=9;break;case 8:(0,r.put)(t,e,o||null).then(c).catch(f||null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t,e,r,o){return m.apply(this,arguments)}function m(){return(m=i(regeneratorRuntime.mark((function n(t,e,r,u,i){var a,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=function(n){i instanceof Function&&i(n)},a=function(n){u instanceof Function&&u(n)},e=e||{},!r){n.next=8;break}return n.next=6,o().delete(t,e||null).then(a).catch(c||null);case 6:n.next=9;break;case 8:o().delete(t,e||null).then(a).catch(c||null);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4538:function(n,t,e){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0}),t.LatestMediaPage=void 0;var o=r(e(5466)),u=e(3613),i=e(8578),a=e(5910),c=e(824),f=e(7637);t.LatestMediaPage=function(n){var t=n.id,e=void 0===t?"latest-media":t,r=n.title,s=void 0===r?i.PageStore.get("config-enabled").pages.latest.title:r;return o.default.createElement(f.Page,{id:e},o.default.createElement(u.ApiUrlConsumer,null,(function(n){return o.default.createElement(a.MediaListWrapper,{title:s,className:"items-list-ver"},o.default.createElement(c.LazyLoadItemListAsync,{requestUrl:n.media,hideViews:!i.PageStore.get("config-media-item").displayViews,hideAuthor:!i.PageStore.get("config-media-item").displayAuthor,hideDate:!i.PageStore.get("config-media-item").displayPublishDate}))})))}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var u=e[n]={exports:{}};return t[n].call(u.exports,u,u.exports,r),u.exports}r.m=t,n=[],r.O=function(t,e,o,u){if(!e){var i=1/0;for(f=0;f<n.length;f++){e=n[f][0],o=n[f][1],u=n[f][2];for(var a=!0,c=0;c<e.length;c++)(!1&u||i>=u)&&Object.keys(r.O).every((function(n){return r.O[n](e[c])}))?e.splice(c--,1):(a=!1,u<i&&(i=u));a&&(n.splice(f--,1),t=o())}return t}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[e,o,u]},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,{a:t}),t},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.j=131,function(){var n={131:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,u,i=e[0],a=e[1],c=e[2],f=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r);for(t&&t(e);f<i.length;f++)u=i[f],r.o(n,u)&&n[u]&&n[u][0](),n[i[f]]=0;return r.O(s)},e=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var o=r.O(void 0,[431],(function(){return r(7487)}));o=r.O(o)}();