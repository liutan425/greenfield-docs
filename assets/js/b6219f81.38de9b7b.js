"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4561],{843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>f,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),n=a(26389),i=a(94891),o=a(75190),c=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const p={id:"stream-record",title:"StreamRecord",description:"Queries a StreamRecord by index.",sidebar_label:"StreamRecord",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a StreamRecord by index.",operationId:"StreamRecord",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{stream_record:{type:"object",properties:{account:{type:"string",title:"account address"},crud_timestamp:{type:"string",format:"int64",title:"latest update timestamp of the stream record"},netflow_rate:{type:"string",description:"The per-second rate that an account's balance is changing.\nIt is the sum of the account's inbound and outbound flow rates."},static_balance:{type:"string",description:"The balance of the stream account at the latest CRUD timestamp."},buffer_balance:{type:"string",title:"reserved balance of the stream account\nIf the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`"},lock_balance:{type:"string",title:"the locked balance of the stream account after it puts a new object and before the object is sealed"},status:{title:"the status of the stream account",type:"string",enum:["STREAM_ACCOUNT_STATUS_ACTIVE","STREAM_ACCOUNT_STATUS_FROZEN"],default:"STREAM_ACCOUNT_STATUS_ACTIVE",description:"- STREAM_ACCOUNT_STATUS_ACTIVE: STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account.\n - STREAM_ACCOUNT_STATUS_FROZEN: STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account.\nA frozen stream account cannot be used as payment address for buckets.\nIt can be unfrozen by depositing more BNB to the stream account."},settle_timestamp:{type:"string",format:"int64",title:"the unix timestamp when the stream account will be settled"},out_flows:{type:"array",items:{type:"object",properties:{to_address:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},rate:{type:"string",title:"flow rate"}},title:"OutFlow defines the accumulative outflow stream rate in BNB\nfrom a stream account to a Storage Provider"},title:"the accumulated outflow rates of the stream account"}},title:"Stream Payment Record of a stream account"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"account",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/greenfield/payment/stream_record/{account}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"StreamRecord",description:{content:"Queries a StreamRecord by index.",type:"text/plain"},url:{path:["greenfield","payment","stream_record",":account"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"account"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,f={unversionedId:"greenfield-api/stream-record",id:"greenfield-api/stream-record",title:"StreamRecord",description:"Queries a StreamRecord by index.",source:"@site/docs/greenfield-api/stream-record.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/stream-record",permalink:"/greenfield-docs/docs/greenfield-api/stream-record",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stream-record",title:"StreamRecord",description:"Queries a StreamRecord by index.",sidebar_label:"StreamRecord",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a StreamRecord by index.",operationId:"StreamRecord",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{stream_record:{type:"object",properties:{account:{type:"string",title:"account address"},crud_timestamp:{type:"string",format:"int64",title:"latest update timestamp of the stream record"},netflow_rate:{type:"string",description:"The per-second rate that an account's balance is changing.\nIt is the sum of the account's inbound and outbound flow rates."},static_balance:{type:"string",description:"The balance of the stream account at the latest CRUD timestamp."},buffer_balance:{type:"string",title:"reserved balance of the stream account\nIf the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`"},lock_balance:{type:"string",title:"the locked balance of the stream account after it puts a new object and before the object is sealed"},status:{title:"the status of the stream account",type:"string",enum:["STREAM_ACCOUNT_STATUS_ACTIVE","STREAM_ACCOUNT_STATUS_FROZEN"],default:"STREAM_ACCOUNT_STATUS_ACTIVE",description:"- STREAM_ACCOUNT_STATUS_ACTIVE: STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account.\n - STREAM_ACCOUNT_STATUS_FROZEN: STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account.\nA frozen stream account cannot be used as payment address for buckets.\nIt can be unfrozen by depositing more BNB to the stream account."},settle_timestamp:{type:"string",format:"int64",title:"the unix timestamp when the stream account will be settled"},out_flows:{type:"array",items:{type:"object",properties:{to_address:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},rate:{type:"string",title:"flow rate"}},title:"OutFlow defines the accumulative outflow stream rate in BNB\nfrom a stream account to a Storage Provider"},title:"the accumulated outflow rates of the stream account"}},title:"Stream Payment Record of a stream account"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"account",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/greenfield/payment/stream_record/{account}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"StreamRecord",description:{content:"Queries a StreamRecord by index.",type:"text/plain"},url:{path:["greenfield","payment","stream_record",":account"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"account"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"StreamRecordAll",permalink:"/greenfield-docs/docs/greenfield-api/stream-record-all"},next:{title:"GetSecondarySpStorePriceByTime",permalink:"/greenfield-docs/docs/greenfield-api/query-get-secondary-sp-store-price-by-time"}},y={},h=[{value:"StreamRecord",id:"streamrecord",level:2}],T={toc:h},g="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(g,(0,r.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"streamrecord"},"StreamRecord"),(0,s.kt)("p",null,"Queries a StreamRecord by index."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"account",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"stream_record"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"account",required:!1,schemaName:"account address",qualifierMessage:void 0,schema:{type:"string",title:"account address"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"crud_timestamp",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"latest update timestamp of the stream record"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"netflow_rate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The per-second rate that an account's balance is changing.\nIt is the sum of the account's inbound and outbound flow rates."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"static_balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The balance of the stream account at the latest CRUD timestamp."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"buffer_balance",required:!1,schemaName:"reserved balance of the stream account\nIf the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`",qualifierMessage:void 0,schema:{type:"string",title:"reserved balance of the stream account\nIf the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"lock_balance",required:!1,schemaName:"the locked balance of the stream account after it puts a new object and before the object is sealed",qualifierMessage:void 0,schema:{type:"string",title:"the locked balance of the stream account after it puts a new object and before the object is sealed"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"the status of the stream account",qualifierMessage:"**Possible values:** [`STREAM_ACCOUNT_STATUS_ACTIVE`, `STREAM_ACCOUNT_STATUS_FROZEN`]",schema:{title:"the status of the stream account",type:"string",enum:["STREAM_ACCOUNT_STATUS_ACTIVE","STREAM_ACCOUNT_STATUS_FROZEN"],default:"STREAM_ACCOUNT_STATUS_ACTIVE",description:"- STREAM_ACCOUNT_STATUS_ACTIVE: STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account.\n - STREAM_ACCOUNT_STATUS_FROZEN: STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account.\nA frozen stream account cannot be used as payment address for buckets.\nIt can be unfrozen by depositing more BNB to the stream account."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"settle_timestamp",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"the unix timestamp when the stream account will be settled"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"out_flows"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"to_address",required:!1,schemaName:"stream account address who receives the flow, usually SP(service provider)",qualifierMessage:void 0,schema:{type:"string",title:"stream account address who receives the flow, usually SP(service provider)"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"rate",required:!1,schemaName:"flow rate",qualifierMessage:void 0,schema:{type:"string",title:"flow rate"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "stream_record": {\n    "account": "string",\n    "crud_timestamp": "string",\n    "netflow_rate": "string",\n    "static_balance": "string",\n    "buffer_balance": "string",\n    "lock_balance": "string",\n    "status": "STREAM_ACCOUNT_STATUS_ACTIVE",\n    "settle_timestamp": "string",\n    "out_flows": [\n      {\n        "to_address": "string",\n        "rate": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);