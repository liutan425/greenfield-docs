"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6071],{77036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),m=(a(75190),a(47507)),l=a(24310),o=a(63303),p=(a(75035),a(85162));const d={id:"mint-params",title:"MintParams",description:"MintParams returns the total set of minting parameters.",sidebar_label:"MintParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"MintParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params defines the parameters of the module.",type:"object",properties:{mint_denom:{type:"string",title:"type of coin to mint"},inflation_rate_change:{type:"string",title:"maximum annual change in inflation rate"},inflation_max:{type:"string",title:"maximum inflation rate"},inflation_min:{type:"string",title:"minimum inflation rate"},goal_bonded:{type:"string",title:"goal of percent bonded atoms"},blocks_per_year:{type:"string",format:"uint64",title:"expected blocks per year"}}}},description:"QueryParamsResponse is the response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Params returns the total set of minting parameters.",method:"get",path:"/cosmos/mint/v1beta1/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Params returns the total set of minting parameters.",description:{type:"text/plain"},url:{path:["cosmos","mint","v1beta1","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/mint-params",id:"greenfield-api/mint-params",title:"MintParams",description:"MintParams returns the total set of minting parameters.",source:"@site/docs/greenfield-api/mint-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/mint-params",permalink:"/greenfield-docs/docs/greenfield-api/mint-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mint-params",title:"MintParams",description:"MintParams returns the total set of minting parameters.",sidebar_label:"MintParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"MintParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params defines the parameters of the module.",type:"object",properties:{mint_denom:{type:"string",title:"type of coin to mint"},inflation_rate_change:{type:"string",title:"maximum annual change in inflation rate"},inflation_max:{type:"string",title:"maximum inflation rate"},inflation_min:{type:"string",title:"minimum inflation rate"},goal_bonded:{type:"string",title:"goal of percent bonded atoms"},blocks_per_year:{type:"string",format:"uint64",title:"expected blocks per year"}}}},description:"QueryParamsResponse is the response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Params returns the total set of minting parameters.",method:"get",path:"/cosmos/mint/v1beta1/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Params returns the total set of minting parameters.",description:{type:"text/plain"},url:{path:["cosmos","mint","v1beta1","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"Inflation",permalink:"/greenfield-docs/docs/greenfield-api/inflation"},next:{title:"InturnRelayer",permalink:"/greenfield-docs/docs/greenfield-api/inturn-relayer"}},y={},g=[{value:"MintParams",id:"mintparams",level:2}],f={toc:g},h="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"mintparams"},"MintParams"),(0,n.kt)("p",null,"MintParams returns the total set of minting parameters."),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"params"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"params defines the parameters of the module.")),(0,n.kt)(l.Z,{collapsible:!1,name:"mint_denom",required:!1,schemaName:"type of coin to mint",qualifierMessage:void 0,schema:{type:"string",title:"type of coin to mint"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"inflation_rate_change",required:!1,schemaName:"maximum annual change in inflation rate",qualifierMessage:void 0,schema:{type:"string",title:"maximum annual change in inflation rate"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"inflation_max",required:!1,schemaName:"maximum inflation rate",qualifierMessage:void 0,schema:{type:"string",title:"maximum inflation rate"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"inflation_min",required:!1,schemaName:"minimum inflation rate",qualifierMessage:void 0,schema:{type:"string",title:"minimum inflation rate"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"goal_bonded",required:!1,schemaName:"goal of percent bonded atoms",qualifierMessage:void 0,schema:{type:"string",title:"goal of percent bonded atoms"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"blocks_per_year",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"expected blocks per year"},mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "params": {\n    "mint_denom": "string",\n    "inflation_rate_change": "string",\n    "inflation_max": "string",\n    "inflation_min": "string",\n    "goal_bonded": "string",\n    "blocks_per_year": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);