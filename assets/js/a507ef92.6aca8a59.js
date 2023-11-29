"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5710],{57120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),n=r(94891),c=r(75190),p=r(47507),d=r(24310),l=r(63303),o=(r(75035),r(85162));const m={id:"query-is-price-changed",title:"QueryIsPriceChanged",description:"Queries whether read and storage prices changed for the bucket.",sidebar_label:"QueryIsPriceChanged",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries whether read and storage prices changed for the bucket.",operationId:"QueryIsPriceChanged",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{changed:{type:"boolean"},current_read_price:{type:"string"},current_primary_store_price:{type:"string"},current_secondary_store_price:{type:"string"},current_validator_tax_rate:{type:"string"},new_read_price:{type:"string"},new_primary_store_price:{type:"string"},new_secondary_store_price:{type:"string"},new_validator_tax_rate:{type:"string"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/is_price_changed/{bucket_name}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryIsPriceChanged",description:{content:"Queries whether read and storage prices changed for the bucket.",type:"text/plain"},url:{path:["greenfield","storage","is_price_changed",":bucket_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,u={unversionedId:"greenfield-api/query-is-price-changed",id:"greenfield-api/query-is-price-changed",title:"QueryIsPriceChanged",description:"Queries whether read and storage prices changed for the bucket.",source:"@site/docs/greenfield-api/query-is-price-changed.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-is-price-changed",permalink:"/greenfield-docs/docs/greenfield-api/query-is-price-changed",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-is-price-changed",title:"QueryIsPriceChanged",description:"Queries whether read and storage prices changed for the bucket.",sidebar_label:"QueryIsPriceChanged",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries whether read and storage prices changed for the bucket.",operationId:"QueryIsPriceChanged",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{changed:{type:"boolean"},current_read_price:{type:"string"},current_primary_store_price:{type:"string"},current_secondary_store_price:{type:"string"},current_validator_tax_rate:{type:"string"},new_read_price:{type:"string"},new_primary_store_price:{type:"string"},new_secondary_store_price:{type:"string"},new_validator_tax_rate:{type:"string"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/is_price_changed/{bucket_name}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryIsPriceChanged",description:{content:"Queries whether read and storage prices changed for the bucket.",type:"text/plain"},url:{path:["greenfield","storage","is_price_changed",":bucket_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"HeadObjectNFT",permalink:"/greenfield-docs/docs/greenfield-api/head-object-nft"},next:{title:"ListBuckets",permalink:"/greenfield-docs/docs/greenfield-api/list-buckets"}},y={},h=[{value:"QueryIsPriceChanged",id:"queryispricechanged",level:2}],_={toc:h},f="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,a.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"queryispricechanged"},"QueryIsPriceChanged"),(0,i.kt)("p",null,"Queries whether read and storage prices changed for the bucket."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"changed",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"current_read_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"current_primary_store_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"current_secondary_store_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"current_validator_tax_rate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"new_read_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"new_primary_store_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"new_secondary_store_price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"new_validator_tax_rate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "changed": true,\n  "current_read_price": "string",\n  "current_primary_store_price": "string",\n  "current_secondary_store_price": "string",\n  "current_validator_tax_rate": "string",\n  "new_read_price": "string",\n  "new_primary_store_price": "string",\n  "new_secondary_store_price": "string",\n  "new_validator_tax_rate": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);