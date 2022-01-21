"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[815],{9613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),k=i,u=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7740:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(9624),i=n(42),o=(n(9496),n(9613)),r=["components"],s={title:"MetaMask",sidebar_position:1},c="Getting Started with MetaMask",l={unversionedId:"interact/metamask",id:"interact/metamask",title:"MetaMask",description:"Introduction",source:"@site/docs/interact/metamask.md",sourceDirName:"interact",slug:"/interact/metamask",permalink:"/interact/metamask",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/interact/metamask.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"MetaMask",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/interact/"},next:{title:"Block Explorers",permalink:"/interact/block-explorer"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Connecting MetaMask to Aurora",id:"connecting-metamask-to-aurora",children:[],level:2},{value:"Deploying an ERC-20 Token using Remix",id:"deploying-an-erc-20-token-using-remix",children:[],level:2},{value:"Adding an ERC-20 Token to MetaMask",id:"adding-an-erc-20-token-to-metamask",children:[],level:2},{value:"Transferring an ERC-20 Token with MetaMask",id:"transferring-an-erc-20-token-with-metamask",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:m};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-metamask"},"Getting Started with MetaMask"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask")," is a convenient UI for interacting with Ethereum-compatible blockchains (such as Aurora).\nFor the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed.\nIf you need help getting started with MetaMask itself, ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"check out their documentation"),"."),(0,o.kt)("p",null,"In this tutorial we will walk through connecting MetaMask to the Aurora Testnet, deploying a simple ERC-20 contract using ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix"),", and transferring the new token using MetaMask."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Screenshots in this tutorial are taken from the MetaMask browser extension version 9.5.5."))),(0,o.kt)("h2",{id:"connecting-metamask-to-aurora"},"Connecting MetaMask to Aurora"),(0,o.kt)("p",null,"In the top-right corner of the MetaMask interface, click the network selection drop-down and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom RPC"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-network-select",src:n(6063).Z})),(0,o.kt)("p",null,"Fill in the form with the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network Name: Aurora Testnet"),(0,o.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://testnet.aurora.dev/")),(0,o.kt)("li",{parentName:"ul"},"Chain ID: 1313161555"),(0,o.kt)("li",{parentName:"ul"},"Currency Symbol: ETH")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-create-aurora-rpc",src:n(9423).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All the Aurora RPC endpoint URLs and chain IDs can be found on our ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/network-endpoints"},"Networks")," page."))),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save"),", and you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"Aurora Testnet")," is now the network selected in MetaMask.\nTo see MetaMask in action, we will connect it to ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," and perform some transactions."),(0,o.kt)("h2",{id:"deploying-an-erc-20-token-using-remix"},"Deploying an ERC-20 Token using Remix"),(0,o.kt)("p",null,"In a new tab, open the Remix IDE at ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"remix.ethereum.org"),".\nIt might take a minute to load, but once it has, create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20Token.sol")," in the workspace panel on the left:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-new-file",src:n(4205).Z})),(0,o.kt)("p",null,"Copy and paste the following code into the central editor panel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";\n\ncontract MyToken is ERC20 {\n    constructor (string memory name, string memory symbol) ERC20(name, symbol) {\n        // Mint 100 tokens to msg.sender\n        // Similar to how\n        // 1 dollar = 100 cents\n        // 1 token = 1 * (10 ** decimals)\n        _mint(msg.sender, 100 * 10 ** uint(decimals()));\n    }\n}\n')),(0,o.kt)("p",null,"This code is a slightly modified (the Solidity compiler and ",(0,o.kt)("a",{parentName:"p",href:"https://openzeppelin.com/contracts/"},"OpenZeppelin")," versions are newer) version of the ",(0,o.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/app/erc20/"},"example from Solidity by Example"),"."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Solidity Compile")," button on the far left panel (the second icon down);\nensure your selected Solidity compiler version is 0.8 (minor versions within 0.8, e.g., 0.8.4 work too), and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Compile ERC20Token.sol"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-solidity-compile",src:n(6526).Z})),(0,o.kt)("p",null,"Once the contract is compiled, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy & run transactions")," button in the far left panel (the icon below the Solidity compiler).\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT")," drop-down select ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-inject-web3",src:n(3584).Z})),(0,o.kt)("p",null,"You will see a MetaMask pop-up window asking you to give the Remix IDE permission to access it.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," to grant access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-connect-metamask",src:n(7590).Z})),(0,o.kt)("p",null,"Back in the Remix interface, click the arrow next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPLOY")," section of the left panel.\nFill in the token details with whatever you like (",(0,o.kt)("inlineCode",{parentName:"p"},"MyToken")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MT")," in the example), and click ",(0,o.kt)("inlineCode",{parentName:"p"},"transact"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract",src:n(292).Z})),(0,o.kt)("p",null,"Another MetaMask pop-up will appear asking you to confirm the transaction.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract-metamask-confirm",src:n(6260).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may be surprised to see the gas price set to zero in this transaction.\nDuring the early access period Aurora transactions are free, however this will change in the future.\nNot to worry, even when transaction fees will be non-zero, they'll still be much lower than on the Ethereum 1.0 Mainnet."))),(0,o.kt)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou will see a success message in the bottom panel and the contract listed under ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployed Contracts")," on the left panel.\nClick the copy button to copy the address of the newly deployed contract."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remix-deploy-contract-confirmed",src:n(5494).Z})),(0,o.kt)("p",null,"Now that the contract is deployed on the Aurora network, we can interact with it via MetaMask."),(0,o.kt)("h2",{id:"adding-an-erc-20-token-to-metamask"},"Adding an ERC-20 Token to MetaMask"),(0,o.kt)("p",null,"In the MetaMask interface (with the Aurora Testnet network still selected), click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Token")," button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-button",src:n(8766).Z})),(0,o.kt)("p",null,"Paste the token address copied from Remix in the previous step.\nThe remaining token details should fill in automatically as MetaMask finds the contract on-chain.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token",src:n(4307).Z})),(0,o.kt)("p",null,"On the next screen you see the balance (100 tokens), as minted in our contract constructor.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Tokens"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-confirm",src:n(4506).Z})),(0,o.kt)("p",null,"The token has now been added to MetaMask and we can use the MetaMask interface to view the token balance and to transfer the token to others."),(0,o.kt)("h2",{id:"transferring-an-erc-20-token-with-metamask"},"Transferring an ERC-20 Token with MetaMask"),(0,o.kt)("p",null,"Continuing from the previous step, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," button in the MetaMask interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-my-token",src:n(2265).Z})),(0,o.kt)("p",null,"Select a recipient (if you have multiple accounts in MetaMask you can simply select another account), and an amount of tokens to send.\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-send-my-token",src:n(2652).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once again the gas price should be set to zero, but this will change going forward."))),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Confirm")," to send the transaction to the network:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-send-my-token-confirm",src:n(8969).Z})),(0,o.kt)("p",null,"After a few moments the transaction will be confirmed by the network.\nYou can see the updated balance your account holds in the MetaMask interface:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-my-token-sent-account1",src:n(9317).Z})),(0,o.kt)("p",null,"If you transferred to another MetaMask account you hold then you can follow the aforementioned instructions for adding the token to MetaMask on the other account, and view its balance also."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MetaMask-add-token-account2",src:n(6263).Z})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this tutorial we connected MetaMask to the Aurora Testnet, deployed an ERC-20 token contract using Remix, and transferred that token using MetaMask.\nThe only difference to doing this on the original Ethereum network was setting the RPC endpoint to be Aurora's."))}d.isMDXComponent=!0},4307:function(e,t,n){t.Z=n.p+"assets/images/metamask_add_token-aba3998a127e59aa23fa54f0c9261fd3.png"},6263:function(e,t,n){t.Z=n.p+"assets/images/metamask_add_token_account2-2450b009a315943298fe01d52ecffb3e.png"},8766:function(e,t,n){t.Z=n.p+"assets/images/metamask_add_token_button-bab734e9daaa3f2ed163762334d7f67b.png"},4506:function(e,t,n){t.Z=n.p+"assets/images/metamask_add_token_confirm-7de3a02b810088ad3e92616a1ede4302.png"},6063:function(e,t,n){t.Z=n.p+"assets/images/metamask_choose_network-0d3034f88dcd7bc92f61df7d1be9bb7c.png"},9423:function(e,t,n){t.Z=n.p+"assets/images/metamask_create_aurora_rpc-e61eab72f8fa70386b43ed3c1d403d11.png"},2265:function(e,t,n){t.Z=n.p+"assets/images/metamask_my_token-7cb2274862fa1761a4f09e4a4cf732a4.png"},9317:function(e,t,n){t.Z=n.p+"assets/images/metamask_my_token_sent_account1-139c1b898d909970a81f111acd870d80.png"},2652:function(e,t,n){t.Z=n.p+"assets/images/metamask_send_my_token-225db13fcf5b816e3f054f512b40f439.png"},8969:function(e,t,n){t.Z=n.p+"assets/images/metamask_send_my_token_confirm-7c919aba75d05efe04f8be29210a129b.png"},7590:function(e,t,n){t.Z=n.p+"assets/images/remix_connect_with_metamask-9d8214740f372d3b41e489cbe23c5884.png"},292:function(e,t,n){t.Z=n.p+"assets/images/remix_deploy_contract-6423d60330003a7ffc0dc28ee5cd8178.png"},5494:function(e,t,n){t.Z=n.p+"assets/images/remix_deploy_contract_confirmed-59390e985747c30736f46356a88b4ff1.png"},6260:function(e,t,n){t.Z=n.p+"assets/images/remix_deploy_contract_metamask_confirm-6b4f8c2a751ec4a4b6ad9df96584c623.png"},3584:function(e,t,n){t.Z=n.p+"assets/images/remix_injected_web3-dbb0d671a1703239451d7d4e133f68ba.png"},4205:function(e,t,n){t.Z=n.p+"assets/images/remix_new_file-15cadba3e578d16df451448175231e8b.png"},6526:function(e,t,n){t.Z=n.p+"assets/images/remix_solidity_compile-1f459820c9caef73c47d3af1c87e71a6.png"}}]);