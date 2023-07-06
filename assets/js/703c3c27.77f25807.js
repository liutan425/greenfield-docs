"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1277],{97208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>k,frontMatter:()=>y,metadata:()=>u,toc:()=>f});var n=a(87462),s=(a(67294),a(3905)),r=a(26389),i=a(94891),l=a(75190),m=a(47507),o=a(24310),c=a(63303),p=(a(75035),a(85162));const y={id:"get-payment-accounts-by-owner",title:"GetPaymentAccountsByOwner",description:"Queries a list of GetPaymentAccountsByOwner items.",sidebar_label:"GetPaymentAccountsByOwner",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of GetPaymentAccountsByOwner items.",operationId:"GetPaymentAccountsByOwner",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{paymentAccounts:{type:"array",items:{type:"string"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"owner",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/greenfield/payment/get_payment_accounts_by_owner/{owner}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GetPaymentAccountsByOwner",description:{content:"Queries a list of GetPaymentAccountsByOwner items.",type:"text/plain"},url:{path:["greenfield","payment","get_payment_accounts_by_owner",":owner"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"owner"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},d=void 0,u={unversionedId:"greenfield-api/get-payment-accounts-by-owner",id:"greenfield-api/get-payment-accounts-by-owner",title:"GetPaymentAccountsByOwner",description:"Queries a list of GetPaymentAccountsByOwner items.",source:"@site/docs/greenfield-api/get-payment-accounts-by-owner.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/get-payment-accounts-by-owner",permalink:"/greenfield-docs/docs/greenfield-api/get-payment-accounts-by-owner",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-payment-accounts-by-owner",title:"GetPaymentAccountsByOwner",description:"Queries a list of GetPaymentAccountsByOwner items.",sidebar_label:"GetPaymentAccountsByOwner",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of GetPaymentAccountsByOwner items.",operationId:"GetPaymentAccountsByOwner",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{paymentAccounts:{type:"array",items:{type:"string"}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"owner",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/greenfield/payment/get_payment_accounts_by_owner/{owner}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GetPaymentAccountsByOwner",description:{content:"Queries a list of GetPaymentAccountsByOwner items.",type:"text/plain"},url:{path:["greenfield","payment","get_payment_accounts_by_owner",":owner"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"owner"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"DynamicBalance",permalink:"/greenfield-docs/docs/greenfield-api/dynamic-balance"},next:{title:"PaymentParams",permalink:"/greenfield-docs/docs/greenfield-api/payment-params"}},g={},f=[{value:"GetPaymentAccountsByOwner",id:"getpaymentaccountsbyowner",level:2}],b={toc:f},h="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getpaymentaccountsbyowner"},"GetPaymentAccountsByOwner"),(0,s.kt)("p",null,"Queries a list of GetPaymentAccountsByOwner items."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"owner",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"paymentAccounts",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "paymentAccounts": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);