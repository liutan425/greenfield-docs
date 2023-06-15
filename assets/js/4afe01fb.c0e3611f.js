"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4042],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),o=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=o(a),c=n,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99346:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"Get Approval Header",order:1},i="Get Approval Header",p={unversionedId:"api-sdk/storgae-provider-rest/common/get_approval_header",id:"api-sdk/storgae-provider-rest/common/get_approval_header",title:"Get Approval Header",description:"MsgCreateBucket",source:"@site/docs/api-sdk/storgae-provider-rest/common/get_approval_header.md",sourceDirName:"api-sdk/storgae-provider-rest/common",slug:"/api-sdk/storgae-provider-rest/common/get_approval_header",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/common/get_approval_header",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/storgae-provider-rest/common/get_approval_header.md",tags:[],version:"current",frontMatter:{title:"Get Approval Header",order:1},sidebar:"apiReferenceSidebar",previous:{title:"SP Error Response",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/common/error"},next:{title:"Blockchain Events",permalink:"/greenfield-docs/docs/api-sdk/events"}},d={},o=[{value:"MsgCreateBucket",id:"msgcreatebucket",level:2},{value:"MsgCreateObject",id:"msgcreateobject",level:2},{value:"Approval",id:"approval",level:2},{value:"RedundancyType",id:"redundancytype",level:2},{value:"VisibilityType",id:"visibilitytype",level:2}],s={toc:o},m="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-approval-header"},"Get Approval Header"),(0,n.kt)("h2",{id:"msgcreatebucket"},"MsgCreateBucket"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Creator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Creator is the account address of bucket creator, it is also the bucket owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"BucketName is a globally unique name of bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,n.kt)("td",{parentName:"tr",align:null},"visibility means the bucket is private or public. If private, only bucket owner or grantee can read it, otherwise every greenfield user can read it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PaymentAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"PaymentAddress is an account address specified by bucket owner to pay the read fee. Default: creator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpAddress  is the address of primary sp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#approval"},"Approval")),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota"),(0,n.kt)("td",{parentName:"tr",align:null},"unsigned integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota defines the read data that users are charged for, measured in bytes. The available read data for each user is the sum of the free read data provided by SP and the ChargeReadQuota specified here.")))),(0,n.kt)("h2",{id:"msgcreateobject"},"MsgCreateObject"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Creator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Creator is the account address of object uploader.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"BucketName is the name of the bucket where the object is stored.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ObjectName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ObjectName is the name of object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PayloadSize"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"PayloadSize is size of the object's payload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,n.kt)("td",{parentName:"tr",align:null},"VisibilityType means the object is private or public. If private, only object owner or grantee can access it, otherwise every greenfield user can access it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ContentType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ContentType is a standard MIME type describing the format of the object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#approval"},"Approval")),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpectChecksums"),(0,n.kt)("td",{parentName:"tr",align:null},"byteArray"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpectChecksums is a list of hashes which was generate by redundancy algorithm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RedundancyType"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#redundancytype"},"RedundancyType")),(0,n.kt)("td",{parentName:"tr",align:null},"RedundancyType specifies which redundancy type is used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpectSecondarySpAddresses"),(0,n.kt)("td",{parentName:"tr",align:null},"stringArray"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpectSecondarySpAddresses is a list of StorageProvider address which is optional.")))),(0,n.kt)("h2",{id:"approval"},"Approval"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpiredHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpiredHeight is expired at which height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sig"),(0,n.kt)("td",{parentName:"tr",align:null},"byteArray"),(0,n.kt)("td",{parentName:"tr",align:null},"Sig is signature")))),(0,n.kt)("h2",{id:"redundancytype"},"RedundancyType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Redundancy type is replica type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Redundancy type is ec type.")))),(0,n.kt)("h2",{id:"visibilitytype"},"VisibilityType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is unspecified.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is public read.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is private.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is inherit.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," If the bucket visibility is inherit, it's finally set to private. If the object Visibility is inherit, it's the same as bucket."))}u.isMDXComponent=!0}}]);