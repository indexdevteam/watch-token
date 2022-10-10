(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{241:function(e,t,n){"use strict";t.a={data:()=>({embedded:!1}),mounted(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast(e,t,n=null){this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:(e,...t)=>new Promise((n,a)=>{e(...t,(e,t)=>{e?a(e):n(t)})}),getParam(e){const t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}}},242:function(e,t,n){const a=n(245);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask both on Ethereum, Optimism, Ethereum Classic, Binance Smart Chain, Polygon Network, KuCoin Community Chain, Harmony, Gnosis Network, or Dogechain.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:a.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:a.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://indexdevteam.github.io/watch-token"}],["meta",{property:"og:image",content:"https://indexdevteam.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://indexdevteam.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},244:function(e,t,n){"use strict";n(94);var a=n(242),i=n.n(a),o=n(246);t.a={data:()=>({web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:i.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",10:"optimism_mainnet",5:"goerli",10:"optimism_mainnet",42:"kovan",56:"bsc_mainnet",61:"etc_mainnet",97:"bsc_testnet",100:"gnosis_mainnet",137:"polygon_mainnet",321:"kcc_mainnet",2e3:"dogechain_mainnet",42161:"arbitrum_mainnet",43114:"avalanche_mainnet",80001:"polygon_mumbai",16666e5:"harmony_mainnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/"+i.a.infuraProjectId,explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/"+i.a.infuraProjectId,explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/"+i.a.infuraProjectId,explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/"+i.a.infuraProjectId,explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},optimism_mainnet:{blockchain:"Optimism",tokenType:"ERC20",web3Provider:"https://mainnet.optimism.io",explorerLink:"https://optimistic.etherscan.io",explorerName:"Optimistic Ethereum L2 Explorer",id:10,name:"Optimism"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/"+i.a.infuraProjectId,explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},etc_mainnet:{blockchain:"Ethereum Classic",tokenType:"ERC20",web3Provider:"https://www.ethercluster.com/etc",explorerLink:"https://blockscout.com/etc/mainnet",explorerName:"Ethereum Classic ETC Explorer",id:61,name:"Ethereum Classic"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},gnosis_mainnet:{blockchain:"Gnosis",tokenType:"ERC20",web3Provider:"https://rpc.gnosischain.com",explorerLink:"https://gnosisscan.io",explorerName:"Gnosis Chain Blockchain Explorer",id:100,name:"Gnosis"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},kcc_mainnet:{blockchain:"KuCoin Community Chain",tokenType:"ERC20",web3Provider:"https://rpc-mainnet.kcc.network",explorerLink:"https://scan.kcc.io",explorerName:"KCC-Mainnet KCC Explorer",id:321,name:"KCC Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"},dogechain_mainnet:{blockchain:"Dogechain",tokenType:"ERC20",web3Provider:"https://rpc01.dogechain.dog",explorerLink:"https://explorer.dogechain.dog",explorerName:"Mainnet Dogechain Explorer",id:2e3,name:"Dogechain Mainnet"},arbitrum_mainnet:{blockchain:"Arbitrum",tokenType:"ERC20",web3Provider:"https://arb1.arbitrum.io/rpc",explorerLink:"https://arbiscan.io",explorerName:"Arbitrum (ETH) Blockchain Explorer",id:42161,name:"Arbitrum"},avalanche_mainnet:{blockchain:"Avalanche",tokenType:"ERC20",web3Provider:"https://api.avax.network/ext/bc/C/rpc",explorerLink:"https://snowtrace.io/",explorerName:"Harmony Blockchain Explorer",id:43114,name:"Avalanche Mainnet C-Chain"},harmony_mainnet:{blockchain:"Harmony",tokenType:"ERC20",web3Provider:"https://api.harmony.one",explorerLink:"https://explorer.harmony.one/",explorerName:"Harmony Blockchain Explorer",id:16666e5,name:"Harmony Mainnet"}},blockchains:["Ethereum","Optimism","Ethereum Classic","Binance Smart Chain","Gnosis","Polygon","KuCoin Community Chain","Dogechain","Arbitrum","Avalanche","Harmony"]},contracts:{token:null},instances:{token:null}}),methods:{async initWeb3(e,t){if(!Object.prototype.hasOwnProperty.call(this.network.list,e))throw new Error(`Failed initializing network ${e}. Allowed values are ${Object.keys(this.network.list)}.`);if(t&&void 0!==window.ethereum){console.log("injected ethereum"),this.web3Provider=window.ethereum,this.web3=new Web3(this.web3Provider),this.metamask.installed=this.web3Provider.isMetaMask;const t=await this.promisify(this.web3.eth.getChainId);this.metamask.netId=t,t!==this.network.list[e].id&&(this.network.current=this.network.list[this.network.map[t]],await this.initWeb3(e,!1))}else console.log("provided ethereum"),this.network.current=this.network.list[e],this.web3Provider=new Web3.providers.HttpProvider(this.network.list[e].web3Provider),this.web3=new Web3(this.web3Provider)},initContract(e){console.log(`init ${e} on ${this.network.current.name}`),this.instances.token=new this.web3.eth.Contract(o,e)}}}},245:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"UA-XXXXXXXXX-X","fbPixelId":"XXXXXXXXXXXXX","infuraProjectId":"77c51213a6f74444a78d8c50a79e547f","bitlyAccessToken":"XXXXXXXXXXXXXXXXX"}')},246:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},289:function(e,t,n){"use strict";n.r(t);var a=n(241),i=n(244),o=n(242),s=n.n(o);const r=new(n(261).BitlyClient)(s.a.bitlyAccessToken,{});var l={methods:{async shorten(e){try{return(await r.shorten(e)).link}catch(t){return e}}}},c={name:"Page",mixins:[a.a,i.a,l],data:()=>({loaded:!1,loading:!0,share:{},currentNetwork:null,token:{}}),computed:{sctLink(){const e=this.network.current?"Ethereum"===this.network.current.blockchain?"ethereum_"+this.currentNetwork:this.currentNetwork:"ethereum_mainnet";return`https://www.smartcontracts.tools/token-watcher/page/?hash=${this.token.hash}&network=${e}`}},mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),await this.getToken(decodeURIComponent(this.getParam("hash")))}catch(e){alert(e),document.location.href=this.$withBase("/")}},async getToken(e){if(e){const t=JSON.parse(this.web3.utils.hexToAscii(e));this.token.hash=e,this.token.address=t.address,this.initContract(this.token.address),this.token.name=await this.promisify(this.instances.token.methods.name().call),this.token.symbol=await this.promisify(this.instances.token.methods.symbol().call),this.token.decimals=(await this.promisify(this.instances.token.methods.decimals().call)).valueOf(),this.token.logo=t.logo?t.logo:"",this.token.name&&this.token.symbol&&this.token.decimals?(this.token.explorerLink=`${this.network.current.explorerLink}/token/${this.token.address}`,this.loaded=!0,document.title=`${this.token.name} (${this.token.symbol}) | ${this.$page.frontmatter.title}`):(alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1),this.loading=!1}else document.location.href=this.$withBase("/")},async addToMetaMask(){if(this.metamask.installed)if(this.metamask.netId===this.network.current.id)try{await this.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.token.address,symbol:this.token.symbol.substr(0,11),decimals:this.token.decimals,image:this.token.logo}}})}catch(e){console.log(e)}else alert(`Your MetaMask in on the wrong network. Please switch on ${this.network.current.name} and try again!`);else alert("Please install MetaMask and try again!")},async shareToken(){this.share.tokenLink=window.location.origin+this.$withBase(`/page/?hash=${this.token.hash}&network=${this.currentNetwork}`),this.share.shortLink=await this.shorten(this.share.tokenLink),this.share.facebook=`https://www.facebook.com/sharer.php?u=${this.share.shortLink}&quote=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.twitter=`https://twitter.com/intent/tweet?url=${this.share.shortLink}&text=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.telegram=`https://t.me/share/url?url=${this.share.shortLink}&text=Discover more about ${this.token.name} (${this.token.symbol}).`,this.share.whatsapp=`https://wa.me/?text=Discover more about ${this.token.name} (${this.token.symbol}). ${this.share.shortLink}`,this.$forceUpdate(),this.$refs.shareModal.show()}}},h=n(16),m=Object(h.a)(c,(function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-0 pt-4"},[e.loading?t("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():t("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("blockquote",[e._v("Some error occurred")]),e._v(" "),t("router-link",{attrs:{to:"/create/"}},[e._v("Add the token")])],1)],1),e._v(" "),e.loaded?t("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"8","offset-lg":"2"}},[t("b-link",{staticClass:"text-dark text-decoration-none",attrs:{href:e.sctLink}},[t("b-card",{staticClass:"mb-4",attrs:{role:"button","bg-variant":"warning"}},[t("b-row",[t("b-col",{attrs:{sm:"2"}},[t("b-img",{attrs:{src:e.$withBase("/assets/images/token-watcher.svg"),fluid:""}})],1),e._v(" "),t("b-col",{attrs:{sm:"10"}},[t("h3",[e._v("View "+e._s(e.token.name)+" on SmartContracts Tools.")])])],1)],1)],1),e._v(" "),t("b-jumbotron",{staticClass:"px-3 py-4",attrs:{"bg-variant":"light","header-level":"4"},scopedSlots:e._u([{key:"header",fn:function(){return[t("b-media",{staticClass:"mb-3"},[e.token.logo?t("b-img",{attrs:{slot:"aside",src:e.token.logo,rounded:"circle",width:"64",height:"64",alt:e.token.name},slot:"aside"}):e._e(),e._v("\n          "+e._s(e.token.name)+"\n        ")],1)]},proxy:!0},{key:"lead",fn:function(){},proxy:!0}],null,!1,1803796552)},[e._v(" "),e._v(" "),t("hr",{staticClass:"my-4"}),e._v(" "),t("h6",[e._v("Name: "),t("span",{staticClass:"text-muted"},[e._v(e._s(e.token.name))])]),e._v(" "),t("h6",[e._v("Symbol: "),t("span",{staticClass:"text-muted"},[e._v(e._s(e.token.symbol))])]),e._v(" "),t("h6",[e._v("Decimals: "),t("span",{staticClass:"text-muted"},[e._v(e._s(e.token.decimals))])]),e._v(" "),t("h6",[e._v("Address: "),t("span",{staticClass:"text-muted token-address"},[e._v(e._s(e.token.address))])]),e._v(" "),t("hr",{staticClass:"my-4"}),e._v(" "),t("b-link",{staticClass:"btn btn-success my-2",on:{click:e.addToMetaMask}},[t("b-icon-plus-circle-fill"),e._v("\n        Add to MetaMask\n      ")],1),e._v(" "),t("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.explorerLink,target:"_blank"}},[t("b-icon-arrow-up-right-circle-fill"),e._v("\n        View on "+e._s(e.network.current.explorerName)+"\n      ")],1),e._v(" "),t("b-link",{staticClass:"btn btn-info my-2 float-right",on:{click:e.shareToken}},[t("b-icon-share")],1)],1),e._v(" "),t("b-modal",{ref:"shareModal",attrs:{"hide-footer":"",title:`Share ${e.token.name} page`}},[t("b-row",[t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Share link","label-for":"tokenLink"}},[t("b-form-input",{attrs:{id:"tokenLink",name:"tokenLink",placeholder:"Token link",size:"lg",readonly:""},model:{value:e.share.shortLink,callback:function(t){e.$set(e.share,"shortLink","string"==typeof t?t.trim():t)},expression:"share.shortLink"}})],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("p",{staticClass:"share-link"},[t("b-btn",{staticClass:"twitter",attrs:{href:e.share.twitter,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),t("b-btn",{staticClass:"facebook",attrs:{href:e.share.facebook,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),e._v(" "),t("b-btn",{staticClass:"telegram",attrs:{href:e.share.telegram,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),e._v(" "),t("b-btn",{staticClass:"whatsapp",attrs:{href:e.share.whatsapp,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1)],1)])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=m.exports}}]);