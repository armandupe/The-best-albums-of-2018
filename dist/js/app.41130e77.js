(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b3f4223":"b6554313","chunk-22a9d0d2":"fab9bc60","chunk-8e164670":"469d9e8d","chunk-ae7475a0":"751d231f","chunk-bfec6d14":"2c6ea0b8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0b3f4223":1,"chunk-22a9d0d2":1,"chunk-8e164670":1,"chunk-ae7475a0":1,"chunk-bfec6d14":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b3f4223":"8260bbab","chunk-22a9d0d2":"8260bbab","chunk-8e164670":"8260bbab","chunk-ae7475a0":"8260bbab","chunk-bfec6d14":"8260bbab"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var l=u[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/The-best-albums-of-2018/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{staticClass:"nav__link",attrs:{to:"/albums2018"}},[e._v("albums 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/russian2018"}},[e._v("russian albums 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/ep2018"}},[e._v("ep 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/albums2019"}},[e._v("albums 2019")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/albums2020"}},[e._v("albums 2020")]),e._v(" | ")],1),n("router-view")],1)},o=[],u={name:"app"},s=u,i=(n("5c0b"),n("2877")),l=Object(i["a"])(s,a,o,!1,null,null,null),c=l.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ul",{staticClass:"home__list"},[n("router-link",{staticClass:"home__list-link",attrs:{to:"/albums2020"}},[e._v("2020")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/albums2019"}},[e._v("2019")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/albums2018"}},[e._v("2018")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/russian2018"}},[e._v("russian 2018")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/ep2018"}},[e._v("EP 2018")])],1)])},h=[],b=(n("4160"),n("159b"),{mounted:function(){var e=document.getElementById("nav"),t=document.querySelector(".home"),n=document.querySelectorAll(".home__list-link");t&&e.classList.add("hideFrame"),n.forEach((function(t){return t.addEventListener("click",(function(){return e.classList.remove("hideFrame")}))}))}}),m=b,p=(n("21bb"),Object(i["a"])(m,f,h,!1,null,null,null)),v=p.exports;r["a"].use(d["a"]);var k=[{path:"/",name:"Home",component:v},{path:"/albums2018",name:"albums2018",component:function(){return n.e("chunk-22a9d0d2").then(n.bind(null,"7b78"))}},{path:"/albums2019",name:"albums2019",component:function(){return n.e("chunk-ae7475a0").then(n.bind(null,"af5c"))}},{path:"/albums2020",name:"albums2020",component:function(){return n.e("chunk-0b3f4223").then(n.bind(null,"24ca"))}},{path:"/russian2018",name:"russian2018",component:function(){return n.e("chunk-8e164670").then(n.bind(null,"fa99"))}},{path:"/ep2018",name:"ep2018",component:function(){return n.e("chunk-bfec6d14").then(n.bind(null,"169a"))}}],_=new d["a"]({routes:k}),g=_;r["a"].config.productionTip=!1,new r["a"]({router:g,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.41130e77.js.map