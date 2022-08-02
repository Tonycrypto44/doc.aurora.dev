"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[815],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=o,h=m["".concat(l,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(2081),o=(n(9496),n(9613));const i={title:"MetaMask",sidebar_position:1},r="Getting Started with MetaMask",s={unversionedId:"interact/metamask",id:"interact/metamask",title:"MetaMask",description:"Introduction",source:"@site/docs/interact/metamask.md",sourceDirName:"interact",slug:"/interact/metamask",permalink:"/interact/metamask",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/interact/metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"MetaMask",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/interact/"},next:{title:"Aurorascan",permalink:"/interact/aurorascan"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Connecting MetaMask to Aurora",id:"connecting-metamask-to-aurora",level:2},{value:"Deploying an ERC-20 Token using Remix",id:"deploying-an-erc-20-token-using-remix",level:2},{value:"Adding an ERC-20 Token to MetaMask",id:"adding-an-erc-20-token-to-metamask",level:2},{value:"Transferring an ERC-20 Token with MetaMask",id:"transferring-an-erc-20-token-with-metamask",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-metamask"},"Getting Started with MetaMask"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask")," is a convenient UI for interacting with Ethereum-compatible blockchains (such as Aurora).\nFor the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed.\nIf you need help getting started with MetaMask itself, ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"check out their documentation"),"."),(0,o.kt)("p",null,"In this tutorial we will walk through connecting MetaMask to the Aurora Testnet, deploying a simple ERC-20 contract using ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix"),", and transferring the new token using MetaMask."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Screenshots in this tutorial are taken from the MetaMask browser extension version 9.5.5.")),(0,o.kt)("h2",{id:"connecting-metamask-to-aurora"},"Connecting MetaMask to Aurora"),(0,o.kt)("p",null,"In the top-right corner of the MetaMask interface, click the network selection drop-down and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom RPC"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-network-select",src:n(8473).Z,width:"1343",height:"589"})),(0,o.kt)("p",null,"Fill in the form with the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network Name: Aurora Testnet"),(0,o.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://testnet.aurora.dev/")),(0,o.kt)("li",{parentName:"ul"},"Chain ID: 1313161555"),(0,o.kt)("li",{parentName:"ul"},"Currency Symbol: ETH")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-create-aurora-rpc",src:n(4435).Z,width:"1213",height:"830"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All the Aurora RPC endpoint URLs and chain IDs can be found on our ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/network-endpoints"},"Networks")," page.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save"),", and you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"Aurora Testnet")," is now the network selected in MetaMask.\nTo see MetaMask in action, we will connect it to ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," and perform some transactions."),(0,o.kt)("h2",{id:"deploying-an-erc-20-token-using-remix"},"Deploying an ERC-20 Token using Remix"),(0,o.kt)("p",null,"In a new tab, open the Remix IDE at ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"remix.ethereum.org"),".\nIt might take a minute to load, but once it has, create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20Token.sol")," in the workspace panel on the left:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-new-file",src:n(4776).Z,width:"678",height:"364"})),(0,o.kt)("p",null,"Copy and paste the following code into the central editor panel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor (string memory name, string memory symbol) ERC20(name, symbol) {\n        // Mint 100 tokens to msg.sender\n        // Similar to how\n        // 1 dollar = 100 cents\n        // 1 token = 1 * (10 ** decimals)\n        _mint(msg.sender, 100 * 10 ** uint(decimals()));\n    }\n}\n')),(0,o.kt)("p",null,"This code is a slightly modified (the Solidity compiler and ",(0,o.kt)("a",{parentName:"p",href:"https://openzeppelin.com/contracts/"},"OpenZeppelin")," versions are newer) version of the ",(0,o.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/app/erc20/"},"example from Solidity by Example"),"."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Solidity Compile")," button on the far left panel (the second icon down);\nensure your selected Solidity compiler version is 0.8 (minor versions within 0.8, e.g., 0.8.4 work too), and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Compile ERC20Token.sol"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-solidity-compile",src:n(2113).Z,width:"1228",height:"548"})),(0,o.kt)("p",null,"Once the contract is compiled, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy & run transactions")," button in the far left panel (the icon below the Solidity compiler).\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT")," drop-down select ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-inject-web3",src:n(792).Z,width:"367",height:"455"})),(0,o.kt)("p",null,"You will see a MetaMask pop-up window asking you to give the Remix IDE permission to access it.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," to grant access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-connect-MetaMask",src:n(8537).Z,width:"735",height:"574"})),(0,o.kt)("p",null,"Back in the Remix interface, click the arrow next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPLOY")," section of the left panel.\nFill in the token details with whatever you like (",(0,o.kt)("inlineCode",{parentName:"p"},"MyToken")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MT")," in the example), and click ",(0,o.kt)("inlineCode",{parentName:"p"},"transact"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract",src:n(7748).Z,width:"360",height:"566"})),(0,o.kt)("p",null,"Another MetaMask pop-up will appear asking you to confirm the transaction.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract-MetaMask-confirm",src:n(7015).Z,width:"340",height:"579"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Transaction cost ~$0.02")),(0,o.kt)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou will see a success message in the bottom panel and the contract listed under ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployed Contracts")," on the left panel.\nClick the copy button to copy the address of the newly deployed contract."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract-confirmed",src:n(441).Z,width:"1817",height:"254"})),(0,o.kt)("p",null,"Now that the contract is deployed on the Aurora network, we can interact with it via MetaMask."),(0,o.kt)("h2",{id:"adding-an-erc-20-token-to-metamask"},"Adding an ERC-20 Token to MetaMask"),(0,o.kt)("p",null,"In the MetaMask interface (with the Aurora Testnet network still selected), click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Token")," button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-button",src:n(3148).Z,width:"1230",height:"618"})),(0,o.kt)("p",null,"Paste the token address copied from Remix in the previous step.\nThe remaining token details should fill in automatically as MetaMask finds the contract on-chain.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token",src:n(4638).Z,width:"1214",height:"876"})),(0,o.kt)("p",null,"On the next screen you see the balance (100 tokens), as minted in our contract constructor.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Tokens"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-confirm",src:n(6184).Z,width:"1214",height:"866"})),(0,o.kt)("p",null,"The token has now been added to MetaMask and we can use the MetaMask interface to view the token balance and to transfer the token to others."),(0,o.kt)("h2",{id:"transferring-an-erc-20-token-with-metamask"},"Transferring an ERC-20 Token with MetaMask"),(0,o.kt)("p",null,"Continuing from the previous step, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," button in the MetaMask interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-my-token",src:n(1866).Z,width:"1227",height:"588"})),(0,o.kt)("p",null,"Select a recipient (if you have multiple accounts in MetaMask you can simply select another account), and an amount of tokens to send.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-send-my-token",src:n(6459).Z,width:"1221",height:"875"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once again the gas price should be set to zero, but this will change going forward.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm")," to send the transaction to the network:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-send-my-token-confirm",src:n(2726).Z,width:"1215",height:"866"})),(0,o.kt)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou can see the updated balance your account holds in the MetaMask interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-my-token-sent-account1",src:n(9333).Z,width:"1215",height:"500"})),(0,o.kt)("p",null,"If you transferred to another MetaMask account you hold then you can follow the aforementioned instructions for adding the token to MetaMask on the other account, and view its balance also."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-account2",src:n(4144).Z,width:"1227",height:"483"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this tutorial we connected MetaMask to the Aurora Testnet, deployed an ERC-20 token contract using Remix, and transferred that token using MetaMask.\nThe only difference to doing this on the original Ethereum network was setting the RPC endpoint to be Aurora's."))}d.isMDXComponent=!0},4638:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_add_token-aba3998a127e59aa23fa54f0c9261fd3.png"},4144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_add_token_account2-2450b009a315943298fe01d52ecffb3e.png"},3148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_add_token_button-bab734e9daaa3f2ed163762334d7f67b.png"},6184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_add_token_confirm-7de3a02b810088ad3e92616a1ede4302.png"},8473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_choose_network-0d3034f88dcd7bc92f61df7d1be9bb7c.png"},4435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_create_aurora_rpc-e61eab72f8fa70386b43ed3c1d403d11.png"},1866:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_my_token-7cb2274862fa1761a4f09e4a4cf732a4.png"},9333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_my_token_sent_account1-139c1b898d909970a81f111acd870d80.png"},6459:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_send_my_token-225db13fcf5b816e3f054f512b40f439.png"},2726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_send_my_token_confirm-7c919aba75d05efe04f8be29210a129b.png"},8537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_connect_with_metamask-9d8214740f372d3b41e489cbe23c5884.png"},7748:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_deploy_contract-6423d60330003a7ffc0dc28ee5cd8178.png"},441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_deploy_contract_confirmed-59390e985747c30736f46356a88b4ff1.png"},7015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_deploy_contract_metamask_confirm-6b4f8c2a751ec4a4b6ad9df96584c623.png"},792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_injected_web3-dbb0d671a1703239451d7d4e133f68ba.png"},4776:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_new_file-15cadba3e578d16df451448175231e8b.png"},2113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/remix_solidity_compile-1f459820c9caef73c47d3af1c87e71a6.png"}}]);