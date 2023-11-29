"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4003],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,s(s({ref:e},o),{},{components:a})):n.createElement(k,s({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:r,s[1]=p;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17759:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"List User Payment Accounts"},s="ListUserPaymentAccounts",p={unversionedId:"api/storage-provider-rest/list_user_payment_accounts",id:"api/storage-provider-rest/list_user_payment_accounts",title:"List User Payment Accounts",description:"RESTful API Description",source:"@site/docs/api/storage-provider-rest/list_user_payment_accounts.md",sourceDirName:"api/storage-provider-rest",slug:"/api/storage-provider-rest/list_user_payment_accounts",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_user_payment_accounts",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storage-provider-rest/list_user_payment_accounts.md",tags:[],version:"current",frontMatter:{title:"List User Payment Accounts"},sidebar:"apiReferenceSidebar",previous:{title:"List User Owned Groups",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_user_owned_groups"},next:{title:"List Payment Account Streams",permalink:"/greenfield-docs/docs/api/storage-provider-rest/list_payment_account_streams"}},i={},u=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"PaymentAccounts",id:"paymentaccounts",level:3},{value:"StreamRecord",id:"streamrecord",level:3},{value:"StreamAccountStatus",id:"streamaccountstatus",level:3},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: List user payment accounts",id:"example-1-list-user-payment-accounts",level:3},{value:"Sample Response: Query a user&#39;s buckets successfully",id:"sample-response-query-a-users-buckets-successfully",level:3}],o={toc:u},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listuserpaymentaccounts"},"ListUserPaymentAccounts"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to list user payment info. This API only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Gnfd-User-Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of user")))),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user-payments"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"user-payments is only used for routing location, and it does not need to pass any value")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request does not have a request body."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp*.bnbchain.org/?user-payments\nX-Gnfd-User-Address: Address\n")),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PaymentAccounts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#paymentaccounts"},"PaymentAccounts")),(0,r.kt)("td",{parentName:"tr",align:null},"payment account defines payment account info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StreamRecord"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamrecord"},"StreamRecord")),(0,r.kt)("td",{parentName:"tr",align:null},"stream record defines stream payment record of a stream account")))),(0,r.kt)("h3",{id:"paymentaccounts"},"PaymentAccounts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner defines the owner of this payment account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Address defines the address of payment account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Refundable"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Refundable defines the payment account is refundable or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UpdateAt"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"UpdateAt defines the update block height of this payment account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UpdateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"UpdateTime  defines the update time of this payment account")))),(0,r.kt)("h3",{id:"streamrecord"},"StreamRecord"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Account is the account address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"CrudTimestamp defines latest update timestamp of the stream record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"NetflowRate defines the per-second rate that an account's balance is changing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"StaticBalance defines the balance of the stream account at the latest CRUD timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"BufferBalance defines reserved balance of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"LockBalance defines the locked balance of the stream account after it puts a new object and before the object is sealed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#streamaccountstatus"},"StreamAccountStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"Status defines the status of the stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"SettleTimestamp defines the unix timestamp when the stream account will be settled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"OutFlowCount defines the count of its out flows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate"),(0,r.kt)("td",{parentName:"tr",align:null},"big.Int"),(0,r.kt)("td",{parentName:"tr",align:null},"FrozenNetflowRate defines the frozen netflow rate, which is used when resuming stream account")))),(0,r.kt)("h3",{id:"streamaccountstatus"},"StreamAccountStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account")))),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nXML Body\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use path-style."),(0,r.kt)("h3",{id:"example-1-list-user-payment-accounts"},"Example 1: List user payment accounts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp1.bnbchain.org/?user-payments\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-User-Address: user address string\n")),(0,r.kt)("h3",{id:"sample-response-query-a-users-buckets-successfully"},"Sample Response: Query a user's buckets successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n<?xml version="1.0" encoding="UTF-8"?>\n<GfSpListUserPaymentAccountsResponse>\n    <PaymentAccounts>\n        <PaymentAccount>\n            <Address>0x6663bf6b1330AA214cD3d6C224f3d0396758A45a</Address>\n            <Owner>0x84A0d38d64498414B14cD979159D57557345Cd8B</Owner>\n            <Refundable>true</Refundable>\n            <UpdateAt>405149</UpdateAt>\n            <UpdateTime>1693376984</UpdateTime>\n        </PaymentAccount>\n        <StreamRecord>\n            <Account>0x0000000000000000000000000000000000000000</Account>\n            <CrudTimestamp>0</CrudTimestamp>\n            <NetflowRate>0</NetflowRate>\n            <StaticBalance>0</StaticBalance>\n            <BufferBalance>0</BufferBalance>\n            <LockBalance>0</LockBalance>\n            <Status>0</Status>\n            <SettleTimestamp>0</SettleTimestamp>\n            <OutFlowCount>0</OutFlowCount>\n            <FrozenNetflowRate>0</FrozenNetflowRate>\n        </StreamRecord>\n    </PaymentAccounts>\n</GfSpListUserPaymentAccountsResponse>\n')))}m.isMDXComponent=!0}}]);