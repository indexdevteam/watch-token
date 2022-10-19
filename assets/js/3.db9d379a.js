(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{241:function(e,t,n){"use strict";t.a={data:()=>({embedded:!1}),mounted(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast(e,t,n=null){this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:(e,...t)=>new Promise((n,i)=>{e(...t,(e,t)=>{e?i(e):n(t)})}),getParam(e){const t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,i){t[n]=void 0!==i?i:""})),e?t[e]?t[e]:null:t}}}},242:function(e,t,n){const i=n(245);e.exports={description:"Create a Widget for any ERC20 or BEP20 token to share with users. Add the Token to DApp browsers or MetaMask on Ethereum, Optimism, Ethereum Classic, Binance Smart Chain, Gnosis Network, Polygon Network, KuCoin Community Chain, Ethereum (PoW), Dogechain, Arbitrum, Avalanche, or Harmony.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:i.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:i.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://indexdevteam.github.io/watch-token"}],["meta",{property:"og:image",content:"https://indexdevteam.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://indexdevteam.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:i.defaultNetwork,infuraProjectId:i.infuraProjectId,bitlyAccessToken:i.bitlyAccessToken}},244:function(e,t,n){"use strict";n(94);var i=n(242),a=n.n(i),o=n(246);t.a={data:()=>({web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:a.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",10:"optimism_mainnet",5:"goerli",10:"optimism_mainnet",42:"kovan",56:"bsc_mainnet",61:"etc_mainnet",97:"bsc_testnet",100:"gnosis_mainnet",137:"polygon_mainnet",321:"kcc_mainnet",2e3:"dogechain_mainnet",10001:"ethpow_mainnet",42161:"arbitrum_mainnet",43114:"avalanche_mainnet",80001:"polygon_mumbai",16666e5:"harmony_mainnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},optimism_mainnet:{blockchain:"Optimism",tokenType:"ERC20",web3Provider:"https://mainnet.optimism.io",explorerLink:"https://optimistic.etherscan.io",explorerName:"Optimistic Ethereum L2 Explorer",id:10,name:"Optimism"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/"+a.a.infuraProjectId,explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},etc_mainnet:{blockchain:"Ethereum Classic",tokenType:"ERC20",web3Provider:"https://www.ethercluster.com/etc",explorerLink:"https://blockscout.com/etc/mainnet",explorerName:"Ethereum Classic ETC Explorer",id:61,name:"Ethereum Classic"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},gnosis_mainnet:{blockchain:"Gnosis",tokenType:"ERC20",web3Provider:"https://rpc.gnosischain.com",explorerLink:"https://gnosisscan.io",explorerName:"Gnosis Chain Blockchain Explorer",id:100,name:"Gnosis"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},kcc_mainnet:{blockchain:"KuCoin Community Chain",tokenType:"ERC20",web3Provider:"https://rpc-mainnet.kcc.network",explorerLink:"https://scan.kcc.io",explorerName:"KCC-Mainnet KCC Explorer",id:321,name:"KCC Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"},dogechain_mainnet:{blockchain:"Dogechain",tokenType:"ERC20",web3Provider:"https://rpc01.dogechain.dog",explorerLink:"https://explorer.dogechain.dog",explorerName:"Mainnet Dogechain Explorer",id:2e3,name:"Dogechain Mainnet"},ethpow_mainnet:{blockchain:"EthereumPoW",tokenType:"ERC20",web3Provider:"https://ethereumpow.kyberengineering.io",explorerLink:"https://www.oklink.com/en/ethw",explorerName:"EthereumPoW (ETHW) Explorer",id:10001,name:"EthereumPoW Mainnet"},arbitrum_mainnet:{blockchain:"Arbitrum",tokenType:"ERC20",web3Provider:"https://arb1.arbitrum.io/rpc",explorerLink:"https://arbiscan.io",explorerName:"Arbitrum (ETH) Blockchain Explorer",id:42161,name:"Arbitrum"},avalanche_mainnet:{blockchain:"Avalanche",tokenType:"ERC20",web3Provider:"https://api.avax.network/ext/bc/C/rpc",explorerLink:"https://snowtrace.io/",explorerName:"Harmony Blockchain Explorer",id:43114,name:"Avalanche Mainnet C-Chain"},harmony_mainnet:{blockchain:"Harmony",tokenType:"ERC20",web3Provider:"https://api.harmony.one",explorerLink:"https://explorer.harmony.one/",explorerName:"Harmony Blockchain Explorer",id:16666e5,name:"Harmony Mainnet"}},blockchains:["Ethereum","Optimism","Ethereum Classic","Binance Smart Chain","Gnosis","Polygon","KuCoin Community Chain","Dogechain","EthereumPoW","Avalanche","Harmony"]},contracts:{token:null},instances:{token:null}}),methods:{async initWeb3(e,t){if(!Object.prototype.hasOwnProperty.call(this.network.list,e))throw new Error(`Failed initializing network ${e}. Allowed values are ${Object.keys(this.network.list)}.`);if(t&&void 0!==window.ethereum){console.log("injected ethereum"),this.web3Provider=window.ethereum,this.web3=new Web3(this.web3Provider),this.metamask.installed=this.web3Provider.isMetaMask;const t=await this.promisify(this.web3.eth.getChainId);this.metamask.netId=t,t!==this.network.list[e].id&&(this.network.current=this.network.list[this.network.map[t]],await this.initWeb3(e,!1))}else console.log("provided ethereum"),this.network.current=this.network.list[e],this.web3Provider=new Web3.providers.HttpProvider(this.network.list[e].web3Provider),this.web3=new Web3(this.web3Provider)},initContract(e){console.log(`init ${e} on ${this.network.current.name}`),this.instances.token=new this.web3.eth.Contract(o,e)}}}},245:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","gaId":"UA-XXXXXXXXX-X","fbPixelId":"XXXXXXXXXXXXX","infuraProjectId":"77c51213a6f74444a78d8c50a79e547f","bitlyAccessToken":"XXXXXXXXXXXXXXXXX"}')},246:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},292:function(e,t,n){"use strict";n.r(t);var i=n(241),a=n(244),o={name:"Detail",mixins:[i.a,a.a],data:()=>({loaded:!1,loading:!0,tokenLink:"",tokenEmbed:"No longer available",currentNetwork:null,token:{}}),mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),await this.getToken(this.getParam("address"))}catch(e){alert(e),document.location.href=this.$withBase("/")}},async getToken(e){if(e){if(this.token.address=e,this.initContract(this.token.address),this.token.name=await this.promisify(this.instances.token.methods.name().call),this.token.symbol=await this.promisify(this.instances.token.methods.symbol().call),this.token.decimals=(await this.promisify(this.instances.token.methods.decimals().call)).valueOf(),this.token.logo=this.getParam("logo")?decodeURIComponent(this.getParam("logo")):"",this.token.name&&this.token.symbol&&this.token.decimals){this.loaded=!0;const e=this.web3.utils.toHex(JSON.stringify({address:this.token.address,logo:this.token.logo}));this.tokenLink=window.location.origin+this.$withBase(`/page/?hash=${e}&network=${this.currentNetwork}`),this.embedded||(document.location.href=this.tokenLink)}else alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1;this.loading=!1}else document.location.href=this.$withBase("/")}}},r=n(16),s=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-0 pt-4"},[e.loading?t("b-col",{attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():t("b-col",{attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("blockquote",[e._v("Some error occurred")]),e._v(" "),t("router-link",{attrs:{to:"/create/"}},[e._v("Add the token")])],1)],1),e._v(" "),e.loaded?t("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"6","offset-lg":"3"}},[t("b-card",{attrs:{"footer-class":"p-0","no-body":""}},[t("b-alert",{staticClass:"m-0",attrs:{show:"",variant:"warning"}},[e._v("\n        Embed is no longer available."),t("br"),e._v("\n        Click\n        "),t("b-link",{attrs:{href:e.tokenLink,target:"_blank"}},[e._v("here")]),e._v("\n        to have more information about "+e._s(e.token.name)+".\n      ")],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=s.exports}}]);