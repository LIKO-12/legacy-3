_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"1J+h":function(e,t,n){e.exports={side_panel:"sidepanel_side_panel__2sN9p"}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8A9B":function(e,t,n){e.exports={navbar:"navbar_navbar__i68jY",active:"navbar_active__38rd7",spacer:"navbar_spacer__yggrL",mobile_spacer:"navbar_mobile_spacer__3djRN",mobile_toggle:"navbar_mobile_toggle__24sBT",search_box:"navbar_search_box__1HBdI",navbar_logo:"navbar_navbar_logo__PL716",link:"navbar_link__2W77V"}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},U8ed:function(e){e.exports=JSON.parse('[["Guide","/docs/guide"],["Reference","/docs/reference"],["Contribute","/docs/reference/website"],["Community",null],["Blog",null]]')},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,v=e.shallow,_=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=a.Children.only(h),y=j&&"object"===typeof j&&j.ref,g=(0,u.useIntersection)({rootMargin:"200px"}),x=r(g,2),O=x[0],w=x[1],M=a.default.useCallback((function(e){O(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,O]);(0,a.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,w,m,t,n]);var C={ref:M,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,b,v,_,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var S="undefined"!==typeof m?m:n&&n.locale,I=(0,c.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);C.href=I||(0,c.addBasePath)((0,c.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(j,C)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},"h8+0":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return C})),n.d(t,"default",(function(){return S}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("q1tI"),s=n("20a2"),l=n("YFqc"),f=n.n(l),d=n("qopm"),p=n.n(d),h=function(){var e=Object(s.useRouter)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{src:e.basePath+"/assets/img/logo-icon.svg",className:p.a.logo_icon}),Object(r.jsx)("img",{src:e.basePath+"/assets/img/logo-title.svg",className:p.a.logo_title})]})},b=n("8A9B"),v=n.n(b),_=n("U8ed"),m=function(e){var t=i(e.configEntry,2),n=t[0],o=t[1];if(!o)return Object(r.jsxs)("button",{className:v.a.link,disabled:!0,children:[" ",n," "]});var a=Object(s.useRouter)().asPath.startsWith(o)?" "+v.a.active:"";return Object(r.jsx)(f.a,{href:o,children:Object(r.jsxs)("a",{className:v.a.link+a,children:[" ",n," "]})})},j=function(){var e=Object(u.useState)(!1),t=e[0],n=e[1],o=Object(u.useCallback)((function(){return n(!t)}),[t]);return Object(r.jsxs)("nav",{className:v.a.navbar+(t?" "+v.a.active:""),children:[Object(r.jsxs)("div",{className:v.a.navbar_logo,children:[Object(r.jsx)(f.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)(h,{})})}),Object(r.jsx)("div",{className:v.a.mobile_spacer}),Object(r.jsx)("button",{className:v.a.mobile_toggle,onClick:o})]}),_.map((function(e){return Object(r.jsx)(m,{configEntry:e},e[0])})),Object(r.jsx)("div",{className:v.a.spacer}),Object(r.jsx)("input",{type:"text",className:v.a.search_box,placeholder:"Search documentation",autoComplete:"true"})]})},y=n("1J+h"),g=n.n(y),x=function(){var e=Object(s.useRouter)();return Object(r.jsx)("nav",{className:g.a.side_panel,children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsxs)("b",{children:["Current route: "," "]})," ",Object(r.jsx)("code",{children:e.pathname})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("li",{children:[Object(r.jsxs)("b",{children:["Router query: "," "]})," ",Object(r.jsx)("code",{children:new String(e.query)})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("li",{children:[Object(r.jsxs)("b",{children:["As path: "," "]})," ",Object(r.jsx)("code",{children:e.asPath})]}),Object(r.jsx)("br",{})]})})},O=n("jdO5"),w=n.n(O),M=function(e){var t=e.children;return Object(r.jsxs)("div",{className:w.a.root,children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})}),Object(r.jsx)(j,{}),Object(r.jsxs)("div",{className:w.a.main_container,children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{className:w.a.content_container,children:t})]})]})},C=!0;function S(e){var t=e.documentData,n=t.title,o=t.contentHtml;return Object(r.jsxs)(M,{children:[n?Object(r.jsx)("h1",{children:n}):null,Object(r.jsx)("article",{dangerouslySetInnerHTML:{__html:o}})]})}},jdO5:function(e,t,n){e.exports={root:"document_root__1ihZh",main_container:"document_main_container__2TGiJ",content_container:"document_content_container__sQwRC"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},qopm:function(e,t,n){e.exports={logo_icon:"logo_logo_icon__eycVt",logo_title:"logo_logo_title__21eIp"}},rG9D:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[[...id]]",function(){return n("h8+0")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),c=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map}},[["rG9D",0,1,2]]]);