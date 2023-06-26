"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Quick Start",order:2},l="Quick Start",i={unversionedId:"guide/dapp/quick-start",id:"guide/dapp/quick-start",title:"Quick Start",description:"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple",source:"@site/docs/guide/dapp/quick-start.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/quick-start",permalink:"/greenfield-docs/docs/guide/dapp/quick-start",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/dapp/quick-start.md",tags:[],version:"current",frontMatter:{title:"Quick Start",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/guide/dapp/overview"},next:{title:"Primitive Interfaces",permalink:"/greenfield-docs/docs/guide/dapp/primitive-interface"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple\nshowcase of cross chain program-ability of Greenfield."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before starting, make sure you have the following tools installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd"},"gnfd-cmd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract"))),(0,o.kt)("p",null,"Please follow the readme of the above two repositories to install the tools and configure the environment."),(0,o.kt)("p",null,"Ensure you get an account that get funds on both BSC and Greenfield network."),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("p",null,"In the following example, Account A(0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0, stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"keyA.json"),") will grant Account B(0x3bD70E10D71C6E882E3C1809d26a310d793646eB, stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"keyB.json"),")\nthe access to his private file through BSC contract."),(0,o.kt)("p",null,"Before starting, please make sure you created related accounts by ",(0,o.kt)("inlineCode",{parentName:"p"},"gnfd-cmd create-keystore")," and have the config.toml file in the current directory.\nThe content of the config.toml is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\npasswordFile = "password.txt"\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ export AccountA=0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0\n$ export AccountB=0x3bD70E10D71C6E882E3C1809d26a310d793646eB\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a temporary file ",(0,o.kt)("inlineCode",{parentName:"li"},"story.txt"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "this is a fun story" > story.txt \n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a bucket named ",(0,o.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json bucket create gnfd://funbucket\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create a private object named ",(0,o.kt)("inlineCode",{parentName:"li"},"story.txt")," in the bucket ",(0,o.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ gnfd-cmd -c config.toml -k keyA.json object put --contentType "text/xml" --visibility private ./story.txt  gnfd://funbucket/story.txt\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create a group named ",(0,o.kt)("inlineCode",{parentName:"li"},"fungroup"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json group create gnfd://fungroup\ncreate group: fungroup succ, txn hash:17B6AE2C8D30B6D6EEABEE81DB8B37CF735655E9087CB02DC98EFF1DCA9FBE3A, group id: 136 \n")),(0,o.kt)("p",null,"The console will return the id of the group, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"136")," in this case."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Bind the group ",(0,o.kt)("inlineCode",{parentName:"li"},"fungroup")," to the object ",(0,o.kt)("inlineCode",{parentName:"li"},"story.txt"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n$ export GroupId=136\n$ gnfd-cmd -c config.toml -k keyA.json policy put-object-policy --groupId ${GroupId} --actions get gnfd://funbucket/story.txt   \n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Mirror the group to BSC network.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n$ gnfd-cmd -c config.toml -k keyA.json crosschain mirror --resource group --id ${GroupId} \n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Try to access the file through AccountB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json group head-member --groupOwner ${AccountA} --headMember ${AccountB} gnfd://fungroup\nthe user does not exist in the group\n$ gnfd-cmd -c config.toml -k keyB.json object get gnfd://funbucket/story.txt ./story-copy.txt\nrun command error: statusCode 403 : code : AccessDenied  (Message: Access Denied)\n")),(0,o.kt)("p",null,"It turns out that AccountB is not permitted to access the file, which is expected."),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract")," repository and install the dependencies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grant the access to Account B through the contract."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'### Example\nexport RPC_TEST=https://gnfd-bsc-testnet-dataseed1.bnbchain.org \n$ forge script foundry-scripts/GroupHub.s.sol:GroupHubScript \\\n--sig "updateGroup(address operator, uint256 groupId, address member)" \\\n${AccountA} ${GroupId} ${AccountB} \\\n-f https://greenfield-bsc-testnet-ap.nodereal.io/ \\\n--private-key 148748590a8b83dxxxxxxxxxxxxxxxxx \\\n--legacy \\\n--broadcast\n')),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Wait 30 seconds, and try to access the file through AccountB again.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json group head-member --groupOwner ${AccountA} --headMember ${AccountB} gnfd://fungroup\nthe user is a member of the group\n$ gnfd-cmd -c config.toml -k keyB.json object get gnfd://funbucket/story.txt ./story-copy.txt\ndownload object story.txt successfully, the file path is ./story-copy.txt, content length:20,\n")))}d.isMDXComponent=!0}}]);