"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[154],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||h[m]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2482:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var n=a(2848),r=a(9213),o=(a(9496),a(9613)),i=["components"],p={title:"The Graph",sidebar_position:1},s=void 0,l={unversionedId:"integrate/indexers/the-graph",id:"integrate/indexers/the-graph",title:"The Graph",description:"Introduction",source:"@site/docs/integrate/indexers/the-graph.md",sourceDirName:"integrate/indexers",slug:"/integrate/indexers/the-graph",permalink:"/integrate/indexers/the-graph",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/integrate/indexers/the-graph.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"The Graph",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Features",permalink:"/bridge/advanced-features"},next:{title:"Covalent",permalink:"/integrate/indexers/covalent"}},u={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running Graph Node",id:"running-graph-node",level:2},{value:"Clone",id:"clone",level:3},{value:"Configure",id:"configure",level:3},{value:"Start",id:"start",level:3},{value:"Create a subgraph",id:"create-a-subgraph",level:2},{value:"Clone subgraph",id:"clone-subgraph",level:3},{value:"Install",id:"install",level:3},{value:"Configure the Subgraph",id:"configure-the-subgraph",level:3},{value:"Generating types",id:"generating-types",level:3},{value:"Mappings",id:"mappings",level:3},{value:"Deploy the Subgraph",id:"deploy-the-subgraph",level:2},{value:"Publish Events (optional)",id:"publish-events-optional",level:2},{value:"Query Events",id:"query-events",level:2},{value:"Summary",id:"summary",level:2}],d={toc:h};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph")," is an indexing service which collects\nEthereum events and exports them through GraphQL endpoints. It is widely\nused in the Ethereum ecosystem which supports fast and cheap queries for\nDApps."),(0,o.kt)("p",null,"This tutorial covers the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running a Graph node on Aurora."),(0,o.kt)("li",{parentName:"ul"},"Creating and deploying a subgraph."),(0,o.kt)("li",{parentName:"ul"},"Querying events from the subgraph.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before delving into the tutorial, you need to make sure that you have setup\nthe following tools on you machine:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node 12+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"jq"))),(0,o.kt)("h2",{id:"running-graph-node"},"Running Graph Node"),(0,o.kt)("h3",{id:"clone"},"Clone"),(0,o.kt)("p",null,"Clone the graph node source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/graphprotocol/graph-node.git\ncd graph-node\n")),(0,o.kt)("h3",{id:"configure"},"Configure"),(0,o.kt)("p",null,"In order wire your local graph node with Aurora Testnet RPC, you should change\nthe value of ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum")," section in ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/docker-compose.yaml")," file from\n",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet:http://host.docker.internal:8545")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"'aurora:https://testnet.aurora.dev'"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"....\n    environment:\n      postgres_host: postgres\n      postgres_user: graph-node\n      postgres_pass: let-me-in\n      postgres_db: graph-node\n      ipfs: 'ipfs:5001'\n      ethereum: 'aurora:https://testnet.aurora.dev'\n      GRAPH_LOG: info\n...\n")),(0,o.kt)("h3",{id:"start"},"Start"),(0,o.kt)("p",null,"The following commands will setup the environment and start the graph indexer.\nThe indexing process might take long time to have 100% sync with the chain.\nThis has nothing to do with our tutorial but keep this process running in a\nseparate terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd graph-node/docker\n./setup.sh\ndocker-compose up\n")),(0,o.kt)("h2",{id:"create-a-subgraph"},"Create a subgraph"),(0,o.kt)("p",null,"Now we are done with starting our graph node, the next step is to create and\ndeploy a subgraph. The subgraph defines how the data on Ethereum will be\nindexed and stored on the graph node."),(0,o.kt)("p",null,"In this tutorial, we are going to use the subgraph example called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aurora-is-near/example-subgraph"},"GravatarRegistry")," (a simple\non-chain Gravatar). The GravatarRegistry contract has two events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"event NewGravatar(uint id, address owner, string displayName, string imageUrl);\nevent UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);\n")),(0,o.kt)("p",null,"The contract was already deployed on Aurora Testnet. The deployed ",(0,o.kt)("inlineCode",{parentName:"p"},"GravatarRegistry"),"\ncontract address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x8773e6832f44b2C17AC78592ffCe407C62d8c36E")," and the start\nblock number is ",(0,o.kt)("inlineCode",{parentName:"p"},"74885768"),"."),(0,o.kt)("h3",{id:"clone-subgraph"},"Clone subgraph"),(0,o.kt)("p",null,"Clone subgraph example repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/aurora-is-near/example-subgraph.git\ncd example-subgraph\n")),(0,o.kt)("h3",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,o.kt)("h3",{id:"configure-the-subgraph"},"Configure the Subgraph"),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and (the ",(0,o.kt)("inlineCode",{parentName:"p"},"startBlock")," optional) in ",(0,o.kt)("inlineCode",{parentName:"p"},"subgraph.yaml")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    ...\n    network: aurora\n    source:\n      address: '0x8773e6832f44b2C17AC78592ffCe407C62d8c36E'\n      abi: Gravity\n      startBlock: 74885768\n    ...\n")),(0,o.kt)("p",null,"Also make sure you are pointing into ",(0,o.kt)("inlineCode",{parentName:"p"},"aurora")," as a network."),(0,o.kt)("h3",{id:"generating-types"},"Generating types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn codegen\n  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2\n  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3\n  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4\n  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5\n  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2\n\u2714 Apply migrations\n\u26a0 Warnings while loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:\n\n    Path: repository\n    The repository is still set to https://github.com/graphprotocol/example-subgraph.\n    Please replace it with a link to your subgraph source code.\n\n    Path: description\n    The description is still the one from the example subgraph.\n    Please update it to tell users more about your subgraph.\n\n\u2714 Load subgraph from subgraph.yaml\n  Load contract ABI from abis/Gravity.json\n\u2714 Load contract ABIs\n  Generate types for contract ABI: Gravity (abis/Gravity.json)\n  Write types to generated/Gravity/Gravity.ts\n\u2714 Generate types for contract ABIs\n\u2714 Generate types for data source templates\n\u2714 Load data source template ABIs\n\u2714 Generate types for data source template ABIs\n\u2714 Load GraphQL schema from schema.graphql\n  Write types to generated/schema.ts\n\u2714 Generate types for GraphQL schema\n\nTypes generated successfully\n\n\u2728  Done in 3.38s.\n")),(0,o.kt)("h3",{id:"mappings"},"Mappings"),(0,o.kt)("p",null,"Maps Ethereum event data to the data that has been defined in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"schema.graphql"),". For example ",(0,o.kt)("inlineCode",{parentName:"p"},"handleNewGravatar")," parses the new event\nparameters, and save them in ",(0,o.kt)("inlineCode",{parentName:"p"},"gravatar"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export function handleNewGravatar(event: NewGravatar): void {\n  let gravatar = new Gravatar(event.params.id.toHex())\n  gravatar.owner = event.params.owner\n  gravatar.displayName = event.params.displayName\n  gravatar.imageUrl = event.params.imageUrl\n  gravatar.save()\n}\n")),(0,o.kt)("h2",{id:"deploy-the-subgraph"},"Deploy the Subgraph"),(0,o.kt)("p",null,"First, we need to register the subgraph name on the graph node. To do that\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn create-local"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn create-local\nCreated subgraph: example\n\u2728  Done in 2.12s.\n")),(0,o.kt)("p",null,"Once the subgraph is registered, now you can deploy it by executing the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn deploy-local\n\u2714 Version Label (e.g. v0.0.1) \xb7\n  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2\n  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3\n  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4\n  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5\n  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2\n\u2714 Apply migrations\n\u26a0 Warnings loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:\n\n    Path: repository\n    The repository is still set to https://github.com/graphprotocol/example-subgraph.\n    Please replace it with a link to your subgraph source code.\n\n    Path: description\n    The description is still the one from the example subgraph.\n    Please update it to tell users more about your subgraph.\n\n\u2714 Load subgraph from subgraph.yaml\n  Compile data source: Gravity => build/Gravity/Gravity.wasm\n\u2714 Compile subgraph\n  Copy schema file build/schema.graphql\n  Write subgraph file build/Gravity/abis/Gravity.json\n  Write subgraph manifest build/subgraph.yaml\n\u2714 Write compiled subgraph to build/\n  Add file to IPFS build/schema.graphql\n                .. QmbSFRGGvHM7Cn8YSjDL41diDMxN4LQUDEMqaa5VVc5sC4\n  Add file to IPFS build/Gravity/abis/Gravity.json\n                .. QmajZTadknSpgsCWRz9fG6bXFHdpVXPMWpx9yMipz3VtMQ\n  Add file to IPFS build/Gravity/Gravity.wasm\n                .. QmbK8QL1GWmsdTsgFYawvxFCjLEFwBsPjMGWpeRh6yaXEk\n\u2714 Upload subgraph to IPFS\n\nBuild completed: QmUiu7NRW7Lc89rxfacqUViaFLYwftrGUn54segMFgWggu\n\nDeployed to http://127.0.0.1:8000/subgraphs/name/example/graphql\n\nSubgraph endpoints:\nQueries (HTTP):     http://127.0.0.1:8000/subgraphs/name/example\nSubscriptions (WS): http://127.0.0.1:8001/subgraphs/name/example\n\n\u2728  Done in 10.23s.\n")),(0,o.kt)("p",null,"Now, you should be able to access your subgraph endpoint through ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8000/subgraphs/name/example"),"."),(0,o.kt)("h2",{id:"publish-events-optional"},"Publish Events (optional)"),(0,o.kt)("p",null,"There were already published events starting from block number ",(0,o.kt)("inlineCode",{parentName:"p"},"74885768"),",\nSo you can skip this step."),(0,o.kt)("h2",{id:"query-events"},"Query Events"),(0,o.kt)("p",null,"To query events, TheGraph protocol provides a ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/subgraphs/name/example"},"GraphQL endpoint"),"\nfor your local graph node. Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8000/subgraphs/name/example"),",\nit automatically will show up a predefined GraphQL query. Run this query to\nget the results as shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5428661/145963887-82f6877b-56c8-47d8-8f62-802fccf575aa.png",alt:"image"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this tutorial, we started a Graph node locally, then we wired our node to Aurora\nTestnet RPC. We also configured a subgraph example and deployed that subgraph\non our local graph node. Finally the graph node was able to collect and index\nthe subgraph example (GravatarRegistry) events from Aurora Testnet."))}m.isMDXComponent=!0}}]);