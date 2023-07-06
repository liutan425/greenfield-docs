"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6947],{16258:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var s=t(87462),i=(t(67294),t(3905)),r=t(26389),n=t(94891),c=t(75190),o=t(47507),p=t(24310),l=t(63303),m=(t(75035),t(85162));const d={id:"cross-chain-package",title:"CrossChainPackage",description:"CrossChainPackage returns the specified cross chain package",sidebar_label:"CrossChainPackage",hide_title:!0,hide_table_of_contents:!0,api:{description:"CrossChainPackage returns the specified cross chain package",operationId:"CrossChainPackage",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{package:{type:"string",format:"byte",title:"content of the cross chain package"}},description:"QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}},{name:"sequence",description:"sequence of the cross chain package.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],tags:["Query"],method:"get",path:"/cosmos/crosschain/v1/cross_chain_package",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CrossChainPackage",description:{content:"CrossChainPackage returns the specified cross chain package",type:"text/plain"},url:{path:["cosmos","crosschain","v1","cross_chain_package"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"channel id of the cross chain package.",type:"text/plain"},key:"channel_id",value:""},{disabled:!1,description:{content:"sequence of the cross chain package.",type:"text/plain"},key:"sequence",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},h=void 0,g={unversionedId:"greenfield-api/cross-chain-package",id:"greenfield-api/cross-chain-package",title:"CrossChainPackage",description:"CrossChainPackage returns the specified cross chain package",source:"@site/docs/greenfield-api/cross-chain-package.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/cross-chain-package",permalink:"/greenfield-docs/docs/greenfield-api/cross-chain-package",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cross-chain-package",title:"CrossChainPackage",description:"CrossChainPackage returns the specified cross chain package",sidebar_label:"CrossChainPackage",hide_title:!0,hide_table_of_contents:!0,api:{description:"CrossChainPackage returns the specified cross chain package",operationId:"CrossChainPackage",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{package:{type:"string",format:"byte",title:"content of the cross chain package"}},description:"QueryCrossChainPackageResponse is the response type for the Query/CrossChainPackage RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}},{name:"sequence",description:"sequence of the cross chain package.",in:"query",required:!1,schema:{type:"string",format:"uint64"}}],tags:["Query"],method:"get",path:"/cosmos/crosschain/v1/cross_chain_package",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CrossChainPackage",description:{content:"CrossChainPackage returns the specified cross chain package",type:"text/plain"},url:{path:["cosmos","crosschain","v1","cross_chain_package"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"channel id of the cross chain package.",type:"text/plain"},key:"channel_id",value:""},{disabled:!1,description:{content:"sequence of the cross chain package.",type:"text/plain"},key:"sequence",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SupplyofCoin",permalink:"/greenfield-docs/docs/greenfield-api/supply-of"},next:{title:"CrosschainParams",permalink:"/greenfield-docs/docs/greenfield-api/crosschain-params"}},u={},y=[{value:"CrossChainPackage",id:"crosschainpackage",level:2}],k={toc:y},f="wrapper";function b(e){let{components:a,...t}=e;return(0,i.kt)(f,(0,s.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"crosschainpackage"},"CrossChainPackage"),(0,i.kt)("p",null,"CrossChainPackage returns the specified cross chain package"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"channel_id",description:"channel id of the cross chain package.",in:"query",required:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{name:"sequence",description:"sequence of the cross chain package.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"package",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",title:"content of the cross chain package"},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "package": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);