"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1915],{34422:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var a=s(87462),r=(s(67294),s(3905)),i=s(26389),p=s(94891),o=(s(75190),s(47507)),n=s(24310),m=s(63303),l=(s(75035),s(85162));const d={id:"sp-params",title:"SpParams",description:"SpParams queries the parameters of the module.",sidebar_label:"SpParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SpParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{deposit_denom:{type:"string",description:"deposit_denom defines the staking coin denomination."},min_deposit:{type:"string",description:"min_deposit defines the minimum deposit amount for storage providers."},secondary_sp_store_price_ratio:{type:"string",title:"the ratio of the store price of the secondary sp to the primary sp, the default value is 80%"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Parameters queries the parameters of the module.",method:"get",path:"/greenfield/sp/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Parameters queries the parameters of the module.",description:{type:"text/plain"},url:{path:["greenfield","sp","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/sp-params",id:"greenfield-api/sp-params",title:"SpParams",description:"SpParams queries the parameters of the module.",source:"@site/docs/greenfield-api/sp-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/sp-params",permalink:"/greenfield-docs/docs/greenfield-api/sp-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sp-params",title:"SpParams",description:"SpParams queries the parameters of the module.",sidebar_label:"SpParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SpParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{deposit_denom:{type:"string",description:"deposit_denom defines the staking coin denomination."},min_deposit:{type:"string",description:"min_deposit defines the minimum deposit amount for storage providers."},secondary_sp_store_price_ratio:{type:"string",title:"the ratio of the store price of the secondary sp to the primary sp, the default value is 80%"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Parameters queries the parameters of the module.",method:"get",path:"/greenfield/sp/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Parameters queries the parameters of the module.",description:{type:"text/plain"},url:{path:["greenfield","sp","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"QueryGetSpStoragePriceByTime",permalink:"/greenfield-docs/docs/greenfield-api/query-get-sp-storage-price-by-time"},next:{title:"StorageProvider",permalink:"/greenfield-docs/docs/greenfield-api/storage-provider"}},y={},h=[{value:"SpParams",id:"spparams",level:2}],f={toc:h},g="wrapper";function k(e){let{components:t,...s}=e;return(0,r.kt)(g,(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"spparams"},"SpParams"),(0,r.kt)("p",null,"SpParams queries the parameters of the module."),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"params"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"params holds all the parameters of this module.")),(0,r.kt)(n.Z,{collapsible:!1,name:"deposit_denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"deposit_denom defines the staking coin denomination."},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"min_deposit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"min_deposit defines the minimum deposit amount for storage providers."},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"secondary_sp_store_price_ratio",required:!1,schemaName:"the ratio of the store price of the secondary sp to the primary sp, the default value is 80%",qualifierMessage:void 0,schema:{type:"string",title:"the ratio of the store price of the secondary sp to the primary sp, the default value is 80%"},mdxType:"SchemaItem"}))))))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "params": {\n    "deposit_denom": "string",\n    "min_deposit": "string",\n    "secondary_sp_store_price_ratio": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(l.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(l.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(n.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);