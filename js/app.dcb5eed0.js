(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&p.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-7203402a":"47e85269","chunk-878c27ce":"d050f1ae","chunk-b1a7f912":"d5c1a415","chunk-ca6c031c":"20f5febd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/The-best-albums-of-2018/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{staticClass:"nav__link",attrs:{to:"/albums2018"}},[t._v("albums 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/russian2018"}},[t._v("russian albums 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/ep2018"}},[t._v("ep 2018")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/albums2019"}},[t._v("albums 2019")]),t._v(" | ")],1),n("router-view")],1)},o=[],u={name:"app"},i=u,s=(n("5c0b"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,null,null),l=c.exports,f=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",{staticClass:"home__list"},[n("router-link",{staticClass:"home__list-link",attrs:{to:"/albums2019"}},[t._v("2019")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/albums2018"}},[t._v("2018")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/russian2018"}},[t._v("russian 2018")]),n("router-link",{staticClass:"home__list-link",attrs:{to:"/ep2018"}},[t._v("EP 2018")])],1)])},d=[],m=(n("4160"),n("159b"),{mounted:function(){var t=document.getElementById("nav"),e=document.querySelector(".home"),n=document.querySelectorAll(".home__list-link");e&&t.classList.add("hideFrame"),n.forEach((function(e){return e.addEventListener("click",(function(){return t.classList.remove("hideFrame")}))}))}}),h=m,v=(n("21bb"),Object(s["a"])(h,p,d,!1,null,null,null)),b=v.exports;r["a"].use(f["a"]);var _=[{path:"/",name:"Home",component:b},{path:"/albums2018",name:"albums2018",component:function(){return n.e("chunk-ca6c031c").then(n.bind(null,"7b78"))}},{path:"/albums2019",name:"albums2019",component:function(){return n.e("chunk-878c27ce").then(n.bind(null,"af5c"))}},{path:"/russian2018",name:"russian2018",component:function(){return n.e("chunk-7203402a").then(n.bind(null,"fa99"))}},{path:"/ep2018",name:"ep2018",component:function(){return n.e("chunk-b1a7f912").then(n.bind(null,"169a"))}}],k=new f["a"]({routes:_}),y=k;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.dcb5eed0.js.map