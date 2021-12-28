(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(e,t,n){"use strict";n(8),n(183),n(35),n(108);t.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return new Promise((function(t,a){e.apply(void 0,n.concat([function(e,n){e?a(e):t(n)}]))}))},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}}},339:function(e,t,n){var a=n(342);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:a.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:a.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://vittominacori.github.io/watch-token"}],["meta",{property:"og:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},341:function(e,t,n){"use strict";var a=n(54),r=(n(106),n(183),n(109),n(79),n(107),n(339)),o=n.n(r),s=n(343);t.a={data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:o.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/".concat(o.a.infuraProjectId),explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com/",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"}},blockchains:["Ethereum","Binance Smart Chain","Polygon"]},contracts:{token:null},instances:{token:null}}},methods:{initWeb3:function(e,t){var n=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){a.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){a.next=17;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,a.next=9,n.promisify(n.web3.eth.getChainId);case 9:if(r=a.sent,n.metamask.netId=r,r===n.network.list[e].id){a.next=15;break}return n.network.current=n.network.list[n.network.map[r]],a.next=15,n.initWeb3(e,!1);case 15:a.next=21;break;case 17:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 21:case"end":return a.stop()}}),a)})))()},initContract:function(e){console.log("init ".concat(e," on ").concat(this.network.current.name)),this.instances.token=new this.web3.eth.Contract(s,e)}}}},342:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"UA-115756440-2","fbPixelId":"373489733749849","infuraProjectId":"be402bb729b2472ba828e013468dc626","bitlyAccessToken":"5f9b3f6dc31fa147f4609bcf3af4e5319c7fe6d6"}')},343:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},390:function(e,t,n){"use strict";n.r(t);var a=n(54),r=(n(107),n(183),n(358),n(184),n(106),n(338)),o=n(341),s=(n(359),n(339)),i=n.n(s),c=new(n(362).BitlyClient)(i.a.bitlyAccessToken,{}),l={methods:{shorten:function(e){return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.shorten(e);case 3:return n=t.sent,t.abrupt("return",n.link);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},u={name:"Page",mixins:[r.a,o.a,l],data:function(){return{loaded:!1,loading:!0,share:{},currentNetwork:null,token:{}}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return t.next=6,e.getToken(decodeURIComponent(e.getParam("hash")));case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0),document.location.href=e.$withBase("/");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getToken:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=18;break}return a=JSON.parse(t.web3.utils.hexToAscii(e)),t.token.address=a.address,t.initContract(t.token.address),n.next=6,t.promisify(t.instances.token.methods.name().call);case 6:return t.token.name=n.sent,n.next=9,t.promisify(t.instances.token.methods.symbol().call);case 9:return t.token.symbol=n.sent,n.next=12,t.promisify(t.instances.token.methods.decimals().call);case 12:t.token.decimals=n.sent.valueOf(),t.token.logo=a.logo?a.logo:"",t.token.name&&t.token.symbol&&t.token.decimals?(t.token.explorerLink="".concat(t.network.current.explorerLink,"/token/").concat(t.token.address),t.loaded=!0,document.title="".concat(t.token.name," (").concat(t.token.symbol,") | ").concat(t.$page.frontmatter.title)):(alert("It seems that it is not a valid Token or you are on the wrong network"),t.loaded=!1),t.loading=!1,n.next=19;break;case 18:document.location.href=t.$withBase("/");case 19:case"end":return n.stop()}}),n)})))()},addToMetaMask:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.metamask.installed){t.next=5;break}return alert("Please install MetaMask and try again!"),t.abrupt("return");case 5:if(e.metamask.netId===e.network.current.id){t.next=8;break}return alert("Your MetaMask in on the wrong network. Please switch on ".concat(e.network.current.name," and try again!")),t.abrupt("return");case 8:return t.prev=8,t.next=11,e.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.token.address,symbol:e.token.symbol.substr(0,11),decimals:e.token.decimals,image:e.token.logo}}});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(8),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[8,13]])})))()},shareToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.web3.utils.toHex(JSON.stringify({address:e.token.address,logo:e.token.logo})),e.share.tokenLink=window.location.origin+e.$withBase("/page/?hash=".concat(n,"&network=").concat(e.currentNetwork)),t.next=4,e.shorten(e.share.tokenLink);case 4:e.share.shortLink=t.sent,e.share.facebook="https://www.facebook.com/sharer.php?u=".concat(e.share.shortLink,"&quote=Discover more about ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.twitter="https://twitter.com/intent/tweet?url=".concat(e.share.shortLink,"&text=Discover more about ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.telegram="https://t.me/share/url?url=".concat(e.share.shortLink,"&text=Discover more about ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.whatsapp="https://wa.me/?text=Discover more about ".concat(e.token.name," (").concat(e.token.symbol,"). ").concat(e.share.shortLink),e.$forceUpdate(),e.$refs.shareModal.show();case 11:case"end":return t.stop()}}),t)})))()}}},p=n(53),d=Object(p.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"p-0 pt-4"},[e.loading?n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("blockquote",[e._v("Some error occurred")]),e._v(" "),n("router-link",{attrs:{to:"/create/"}},[e._v("Try adding your token")])],1)],1),e._v(" "),e.loaded?n("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"8","offset-lg":"2"}},[n("b-jumbotron",{staticClass:"px-3 py-4",attrs:{"bg-variant":"light","header-level":"4"},scopedSlots:e._u([{key:"header",fn:function(){return[n("b-media",{staticClass:"mb-3"},[e.token.logo?n("b-img",{attrs:{slot:"aside",src:e.token.logo,rounded:"circle",width:"64",height:"64",alt:e.token.name},slot:"aside"}):e._e(),e._v("\n          "+e._s(e.token.name)+"\n        ")],1)]},proxy:!0},{key:"lead",fn:function(){},proxy:!0}],null,!1,1803796552)},[e._v(" "),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("h6",[e._v("Name: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.name))])]),e._v(" "),n("h6",[e._v("Symbol: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.symbol))])]),e._v(" "),n("h6",[e._v("Decimals: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.decimals))])]),e._v(" "),n("h6",[e._v("Address: "),n("span",{staticClass:"text-muted token-address"},[e._v(e._s(e.token.address))])]),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("b-link",{staticClass:"btn btn-success my-2",on:{click:e.addToMetaMask}},[n("b-icon-plus-circle-fill"),e._v("\n        Add to MetaMask\n      ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.explorerLink,target:"_blank"}},[n("b-icon-arrow-up-right-circle-fill"),e._v("\n        View on "+e._s(e.network.current.explorerName)+"\n      ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-info my-2 float-right",on:{click:e.shareToken}},[n("b-icon-share")],1)],1),e._v(" "),n("b-modal",{ref:"shareModal",attrs:{"hide-footer":"",title:"Share "+e.token.name+" page"}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Share link","label-for":"tokenLink"}},[n("b-form-input",{attrs:{id:"tokenLink",name:"tokenLink",placeholder:"Your token link",size:"lg",readonly:""},model:{value:e.share.shortLink,callback:function(t){e.$set(e.share,"shortLink","string"==typeof t?t.trim():t)},expression:"share.shortLink"}})],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("p",{staticClass:"share-link"},[n("b-btn",{staticClass:"twitter",attrs:{href:e.share.twitter,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),n("b-btn",{staticClass:"facebook",attrs:{href:e.share.facebook,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),e._v(" "),n("b-btn",{staticClass:"telegram",attrs:{href:e.share.telegram,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),e._v(" "),n("b-btn",{staticClass:"whatsapp",attrs:{href:e.share.whatsapp,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1)],1)])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=d.exports}}]);