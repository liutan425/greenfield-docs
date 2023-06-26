"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"SP Response"},s="SP Response",l={unversionedId:"api-sdk/storgae-provider-rest/sp_response",id:"api-sdk/storgae-provider-rest/sp_response",title:"SP Response",description:"If you invoke SP RESTful APIs successfully, you will get a XML represented response:",source:"@site/docs/api-sdk/storgae-provider-rest/sp_response.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/sp_response",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/sp_response",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/storgae-provider-rest/sp_response.md",tags:[],version:"current",frontMatter:{title:"SP Response"},sidebar:"apiReferenceSidebar",previous:{title:"List Groups By Name And Prefix",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/get_group_list"},next:{title:"List Objects By Object IDs",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_object_ids"}},i={},p=[{value:"SP Error Response",id:"sp-error-response",level:2},{value:"Error Response Sample",id:"error-response-sample",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sp-response"},"SP Response"),(0,a.kt)("p",null,"If you invoke SP RESTful APIs successfully, you will get a XML represented response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<GetBucketReadQuotaResult>\n    <BucketName>myBucket</BucketName>\n    <BucketID>6u754</BucketID>\n    <ReadQuotaSize>20</ReadQuotaSize>\n    <SPFreeReadQuotaSize>10</SPFreeReadQuotaSize>\n    <ReadConsumedSize>5</ReadConsumedSize>\n</GetBucketReadQuotaResult>\n')),(0,a.kt)("h2",{id:"sp-error-response"},"SP Error Response"),(0,a.kt)("p",null,"When an error occurs, the header information contains the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Content-Type: application/xml\n")),(0,a.kt)("p",null,"An appropriate 3xx, 4xx, or 5xx HTTP status code"),(0,a.kt)("p",null,"The body of the response also contains information about the error. The following sample error response shows the structure of response elements common to all REST error responses."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Ancestor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error"),(0,a.kt)("td",{parentName:"tr",align:null},"Container"),(0,a.kt)("td",{parentName:"tr",align:null},"Container for all error elements."),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Code"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The error code is an integer that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type.  code"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle."),(0,a.kt)("td",{parentName:"tr",align:null},"Error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the request associated with the error."),(0,a.kt)("td",{parentName:"tr",align:null},"Error")))),(0,a.kt)("h2",{id:"error-response-sample"},"Error Response Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<Error>\n    <Code>98001</Code>\n    <Message>server slipped away, try again later</Message>\n    <RequestId>14379357152578345503</RequestId>\n</Error>\n")))}c.isMDXComponent=!0}}]);