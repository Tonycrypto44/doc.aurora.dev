"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[46],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(2081),a=(r(9496),r(9613));const o={title:"Transfers Between Aurora/NEAR",sidebar_position:3},i=void 0,s={unversionedId:"bridge/transfer-aurora-near",id:"bridge/transfer-aurora-near",title:"Transfers Between Aurora/NEAR",description:"Now let\u2019s get down to the most fascinating part of this manual\u2014transferring assets.",source:"@site/docs/bridge/transfer-aurora-near.md",sourceDirName:"bridge",slug:"/bridge/transfer-aurora-near",permalink:"/bridge/transfer-aurora-near",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/bridge/transfer-aurora-near.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Transfers Between Aurora/NEAR",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Transfer Overview",permalink:"/bridge/transfer-overview"},next:{title:"Transfers from Ethereum",permalink:"/bridge/transfer-from-ethereum"}},l={},d=[],c={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now let\u2019s get down to the most fascinating part of this manual\u2014transferring assets.\nLet\u2019s start with a transfer between Aurora and NEAR networks and move Aurora tokens between them."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select NEAR as the \u201cFrom\u201d network, and Aurora as the \u201cTo\u201d network.\n\u201cConnect\u201d both wallets, and click \u201cContinue\u201d.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have trouble connecting networks, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"bridge-overview"},"Bridge Overview")," section.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose the \u201cAurora\u201d token to send, and enter the amount you want to transfer. Click \u201cContinue\u201d.\nWe show token balance on the destination network, as this is often useful in calculating how much needs to be transferred.")),(0,a.kt)("p",null,"We also provide a one-click helper to allow you to send the full token balance in the transfer."),(0,a.kt)("p",null,"...and in the case that you\u2019ve chosen ETH, we show you a warning that you may want to keep a bit around for gas fees!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are wondering why you only see specific tokens, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"transfer-overview"},"Transfer Overview")," chapter for more information.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rainbow_bridge_15",src:r(4190).Z,width:"1216",height:"1052"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the next screen, check the transfer details, and click \u201cConfirm Transfer\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rainbow_bridge_16",src:r(2102).Z,width:"1558",height:"1258"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"At this point, you'll be redirected to your NEAR wallet for authorization, which you should  approve.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rainbow_bridge_17",src:r(6439).Z,width:"1143",height:"1167"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"After approving the transfer in your NEAR wallet,\nyou'll be redirected to the Rainbow Bridge, and your transfer will succeed almost immediately.\nYou'll see your completed transfer in the Completed Transfers list.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rainbow_bridge_18",src:r(6050).Z,width:"1600",height:"516"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since sometimes tokens are moved to a non-native network\n(e.g. if you move NEAR tokens from NEAR to Aurora network), they get wrapped (e.g. wNEAR),\nso you should add the wNEAR token address to your wallet in order to see the tokens transferred.")),(0,a.kt)("p",null,"To do this, click the three dots on the right,\nand \u201cAdd NEAR to MetaMask\u201d (the respective token name will be prompted by the bridge).\nOnce the NEAR token has been added to MetaMask, you can click the \u201cAssets\u201d tab in MetaMask,\nand see the NEAR tokens you sent from Near to Aurora."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The screenshot below is for illustrative purposes and does not reflect the example with NEAR above.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rainbow_bridge_19",src:r(7565).Z,width:"1600",height:"1005"})))}p.isMDXComponent=!0},4190:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rainbow_bridge_15-68e2ede0a822427187e829385a1413be.png"},2102:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rainbow_bridge_16-f28da30d69af7052d79f844d4724002e.png"},6439:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rainbow_bridge_17-5ead0f0106000e80d032fdee2c6afd72.png"},6050:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rainbow_bridge_18-31bd7a9fc4a04b58d497070e2680c08d.png"},7565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rainbow_bridge_19-500c144f45d5f7396671b88f98c06225.png"}}]);