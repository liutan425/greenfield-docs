"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=s,g=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={title:"Virtual Hosting of Buckets",order:1},o=void 0,l={unversionedId:"api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets",id:"api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets",title:"Virtual Hosting of Buckets",description:"Virtual-hosted-style requests",source:"@site/docs/api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets.md",sourceDirName:"api-sdk/storgae-provider-rest/referenece",slug:"/api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets.md",tags:[],version:"current",frontMatter:{title:"Virtual Hosting of Buckets",order:1},sidebar:"apiReferenceSidebar",previous:{title:"List Objects By Bucket",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket"},next:{title:"Greenfield SP RESTful APIs Headers",permalink:"/greenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers"}},i={},p=[{value:"Virtual-hosted-style requests",id:"virtual-hosted-style-requests",level:2},{value:"Path-style requests",id:"path-style-requests",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"virtual-hosted-style-requests"},"Virtual-hosted-style requests"),(0,s.kt)("p",null,"Greenfield SP supports both virtual-hosted-style and path-style URI. It's like AWS S3 so you can easily use Greenfield SP RESTful APIs."),(0,s.kt)("p",null,"In a virtual-hosted\u2013style URI, the bucket name is part of the domain name in the URL. Greenfield SP virtual-hosted\u2013style URLs use the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"https://BucketName.gnfd-testnet-sp-*.bnbchain.org/key-name\n")),(0,s.kt)("p",null,"In this example, ",(0,s.kt)("inlineCode",{parentName:"p"},"EXAMPLE-BUCKET")," is the bucket name and ",(0,s.kt)("inlineCode",{parentName:"p"},"sp.pdf")," is the key name:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"https://EXAMPLE-BUCKET.gnfd-testnet-sp-*.bnbchain.org/sp.pdf\n")),(0,s.kt)("h2",{id:"path-style-requests"},"Path-style requests"),(0,s.kt)("p",null,"In Greenfield SP, path-style URLs use the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"https://gnfd-testnet-sp-*.bnbchain.org/bucket-name/key-name\n")),(0,s.kt)("p",null,"For example, if you create a bucket named ",(0,s.kt)("inlineCode",{parentName:"p"},"EXAMPLE-BUCKET"),", and you want to access the ",(0,s.kt)("inlineCode",{parentName:"p"},"sp.pdf")," object in that bucket, you can use the following path-style URL:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"https://gnfd-testnet-sp-*.bnbchain.org/EXAMPLE-BUCKET/sp.pdf\n")))}d.isMDXComponent=!0}}]);