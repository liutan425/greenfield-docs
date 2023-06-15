"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"Accounts",order:1},o="Accounts",s={unversionedId:"guide/concept/accounts",id:"guide/concept/accounts",title:"Accounts",description:"Each user has their own address as the identifier for his/her account.",source:"@site/docs/guide/concept/accounts.md",sourceDirName:"guide/concept",slug:"/guide/concept/accounts",permalink:"/greenfield-docs/docs/guide/concept/accounts",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/concept/accounts.md",tags:[],version:"current",frontMatter:{title:"Accounts",order:1},sidebar:"guideSidebar",previous:{title:"Interact with Greenfield",permalink:"/greenfield-docs/docs/guide/getting-started/interact-with-greenfield"},next:{title:"Key Management",permalink:"/greenfield-docs/docs/guide/concept/key-management"}},c={},d=[{value:"User Balance",id:"user-balance",level:2},{value:"Account Definition",id:"account-definition",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Addresses",id:"addresses",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"Each user has their own address as the identifier for his/her account.\nThe addresses can create objects to store on Greenfield, bear and manage\nthe permissions, and pay fees."),(0,a.kt)("p",null,"Greenfield defines its account in the same format as BSC and Ethereum.\nIt starts with ECDSA secp256k1 curve for keys and is compliant with\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/84"},"EIP84")," for\nfull\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP44"),"\npaths. The root HD path for Greenfield-based accounts is\nm/44'/60'/0'/0. In the readable presentation, a Greenfield address is\na 42-character hexadecimal string derived from the last 20 bytes of the\npublic key of the controlling account with 0x as the prefix."),(0,a.kt)("p",null,"With this compatible address scheme, the users can reuse existing\naccounts and infrastructure from BSC on Greenfield. For example, they\ncan use TrustWallet and Metamask (or other compatible wallets) to\ndeposit their BNB from BSC to Greenfield and interact with dApps on\nGreenfield. It is also easy to identify the same owner by referring to\nthe same addresses on both BSC and Greenfield."),(0,a.kt)("h2",{id:"user-balance"},"User Balance"),(0,a.kt)("p",null,"The account can hold a balance of BNB. These BNBs can be used to\nparticipate in staking, pay for gas fees of Greenfield transactions, and\npay for Greenfield services."),(0,a.kt)("p",null,"This balance can be added via native BNB transfer on Greenfield, or\ncross-chain transfer between Greenfield and BSC."),(0,a.kt)("h2",{id:"account-definition"},"Account Definition"),(0,a.kt)("p",null,"In the Greenfield, an ",(0,a.kt)("strong",{parentName:"p"},"account")," designates a pair of ",(0,a.kt)("inlineCode",{parentName:"p"},"PubKey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivKey"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"PubKey")," can be derived to generate various ",(0,a.kt)("inlineCode",{parentName:"p"},"Addresses"),", which are used to identify users (among other parties) in\nthe application."),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"The principal way of authenticating a user is done using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_signature"},"digital signatures"),".\nUsers sign transactions using their own private key. Signature verification is done with the associated public key.\nFor on-chain signature verification purposes, we store the public key in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," object (alongside other data required\nfor a proper transaction validation)."),(0,a.kt)("p",null,"In the node, all data is stored using ",(0,a.kt)("a",{parentName:"p",href:"https://protobuf.dev/"},"Protocol Buffers")," serialization."),(0,a.kt)("p",null,"Greenfield only supports ",(0,a.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Secp256k1"},"secp256k1")," key schemes for creating digital signatures:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"Address length in bytes"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Public key length in bytes"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Used for transaction authentication"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Used for consensus (tendermint)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"secp256k1")),(0,a.kt)("td",{parentName:"tr",align:"center"},"20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"33"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,a.kt)("h2",{id:"addresses"},"Addresses"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Addresses")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PubKey"),"s are both public information that identifies actors in the application. ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," is used to\nstore authentication information. The basic account implementation is provided by a ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseAccount")," object."),(0,a.kt)("p",null,"To identify users, Greenfield uses the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"AccAddress"),". The address format follows ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-55"},"ERC-55"),"."))}u.isMDXComponent=!0}}]);