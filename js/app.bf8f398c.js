(function(n){function e(e){for(var r,u,c=e[0],f=e[1],i=e[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);s&&s(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,c=1;c<t.length;c++){var f=t[c];0!==o[f]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/bae-countdown/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var s=f;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:n.customBackground,attrs:{id:"wrapper-div"}},[t("div",{attrs:{id:"app"}},[t("h1",[n._v(" We see each other again in: ")]),t("countdown",{attrs:{time:1675981500000-Date.now()},scopedSlots:n._u([{key:"default",fn:function(e){return[n._v("\n        "+n._s(e.days)+" days, "+n._s(e.hours)+" hours, "+n._s(e.minutes)+" minutes,\n        "+n._s(e.seconds)+" seconds\n      ")]}}])})],1)])},a=[],u=(t("7f7f"),t("407d")),c=t.n(u);r["a"].component(c.a.name,c.a);var f={name:"app",data:function(){var n=["#a61f34","#4f86f7","#ffe135","#000000","#00468b","#ffc0cb","#8b0017","#808080","#4e2a84","#660099"];return{customBackground:{backgroundColor:"".concat(n[Math.floor(Math.random()*n.length)])}}}},i=f,s=(t("034f"),t("2877")),l=Object(s["a"])(i,o,a,!1,null,null,null),p=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(p)}}).$mount("#app")},"64a9":function(n,e,t){}});
//# sourceMappingURL=app.bf8f398c.js.map
