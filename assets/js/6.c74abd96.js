(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10,11],{338:function(t,e,a){"use strict";a(8),a(183),a(35),a(108);e.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})},promisify:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return new Promise((function(e,n){t.apply(void 0,a.concat([function(t,a){t?n(t):e(a)}]))}))},getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,a,n){e[a]=void 0!==n?n:""})),t?e[t]?e[t]:null:e}}}},340:function(t,e,a){},344:function(t,e,a){"use strict";a(340)},356:function(t,e,a){"use strict";a.r(e);var n={name:"Footer"},r=a(53),o=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=o.exports},357:function(t,e,a){"use strict";a.r(e);var n={name:"Header"},r=a(53),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"md",variant:"light"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[a("b-img",{attrs:{src:t.$withBase("/assets/images/base-token.png"),height:"24"}}),t._v("\n    WatchToken\n  ")],1),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:t.$withBase("/create/")}},[t._v("Ethereum")]),t._v(" "),a("b-nav-item",{attrs:{href:t.$withBase("/create/?network=bsc_mainnet")}},[t._v("Binance Smart Chain")]),t._v(" "),a("b-nav-item",{attrs:{href:t.$withBase("/create/?network=polygon_mainnet")}},[t._v("Polygon")]),t._v(" "),a("b-nav-item",{attrs:{href:t.$withBase("/page/?hash=0x7b2261646472657373223a22307842356336346337643662333734614437333865333134654161376243433037414563313934423762222c226c6f676f223a2268747470733a2f2f766974746f6d696e61636f72692e6769746875622e696f2f77617463682d746f6b656e2f6173736574732f696d616765732f626173652d746f6b656e2e706e67227d")}},[a("small",[t._v("Example")])])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Create your Token",right:""}},[a("b-dropdown-item",{attrs:{target:"_blank",href:"https://vittominacori.github.io/erc20-generator/"}},[t._v("Ethereum")]),t._v(" "),a("b-dropdown-item",{attrs:{target:"_blank",href:"https://vittominacori.github.io/bep20-generator/"}},[t._v("Binance Smart Chain")]),t._v(" "),a("b-dropdown-item",{attrs:{target:"_blank",href:"https://vittominacori.github.io/polygon-generator/"}},[t._v("Polygon")])],1),t._v(" "),a("b-nav-item",{attrs:{target:"_blank",href:"https://vittominacori.medium.com/how-to-add-token-to-metamask-fba11854f6cd"}},[a("small",[t._v("About")])])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},391:function(t,e,a){"use strict";a.r(e);var n=a(338),r=a(357),o=a(356),i={mixins:[n.a],components:{SiteHeader:r.default,SiteFooter:o.default},data:function(){return{loaded:!1}},mounted:function(){this.loaded=!0},computed:{page:function(){return this.$page.frontmatter.component||null},loadLayout:function(){return this.loaded&&!this.embedded},bodyClass:function(){return this.loadLayout?"aqua-gradient":""}}},s=(a(344),a(53)),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper main-container",class:t.bodyClass},[t.loadLayout?a("site-header"):t._e(),t._v(" "),a("b-container",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.page?a(t.page,{key:t.page,tag:"component"}):t._e()],1)],1),t._v(" "),t.loadLayout?a("site-footer"):t._e()],1)}),[],!1,null,null,null);e.default=l.exports}}]);