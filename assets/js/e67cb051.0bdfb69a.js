"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[928],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(2081),o=(r(9496),r(9613));const a={title:"Gas"},i="Notes on Gas",s={unversionedId:"compat/gas",id:"compat/gas",title:"Gas",description:"Aurora runs on top of NEAR, so in some sense [NEAR gas] is the real measure of computational work.",source:"@site/docs/compat/gas.md",sourceDirName:"compat",slug:"/compat/gas",permalink:"/compat/gas",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/compat/gas.md",tags:[],version:"current",frontMatter:{title:"Gas"},sidebar:"tutorialSidebar",previous:{title:"EVM",permalink:"/compat/evm"},next:{title:"JSON-RPC",permalink:"/compat/rpc"}},c={},l=[{value:"Compatibility limitations",id:"compatibility-limitations",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notes-on-gas"},"Notes on Gas"),(0,o.kt)("p",null,"Aurora runs on top of NEAR, so in some sense ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/docs/concepts/gas"},"NEAR gas")," is the real measure of computational work.\nHowever, for compatibility with Ethereum we want our users to be able to pay for transactions with ether (ETH).\nTo enable this, the Aurora infrastructure includes relayers which encapsulate ordinary EVM transactions into NEAR transactions, submit them on-chain, and return the transaction result."),(0,o.kt)("p",null,"Transaction cost ~$0.02"),(0,o.kt)("h2",{id:"compatibility-limitations"},"Compatibility limitations"),(0,o.kt)("p",null,"Since the underlying measure of computational work is NEAR gas, an edge case that arises is when the transaction runs out of NEAR gas before running out of EVM gas."),(0,o.kt)("p",null,"In this case the transaction will be considered as failed on Aurora, but this may or may not be compatible with what the outcome on Ethereum would have been\n(if the gas limit was actually high enough for the transaction to complete had NEAR gas not been the limiting factor)."),(0,o.kt)("p",null,"This case will not come up for the vast majority of transactions, and indeed will become less and less likely as we improve the efficiency of our EVM contract\n(thus allowing NEAR gas to go further in terms of EVM computation).\nEventually we hope to eliminate this entirely by setting the ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/blocks/#block-size"},"ETH block gas limit")," on Aurora to be lower than the amount of NEAR which we could spend in one transaction."))}p.isMDXComponent=!0}}]);