"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8627],{2016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var r=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),n=a(75190),l=a(47507),d=a(24310),m=a(63303),p=(a(75035),a(85162));const c={id:"delegation-total-rewards",title:"DelegationTotalRewards",description:"DelegationTotalRewards queries the total rewards accrued by a each",sidebar_label:"DelegationTotalRewards",hide_title:!0,hide_table_of_contents:!0,api:{description:"DelegationTotalRewards queries the total rewards accrued by a each\nvalidator.",operationId:"DelegationTotalRewards",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{rewards:{type:"array",items:{type:"object",properties:{validator_address:{type:"string"},reward:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."}}},description:"DelegationDelegatorReward represents the properties\nof a delegator's delegation reward."},description:"rewards defines all the rewards accrued by a delegator."},total:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."},description:"total defines the sum of all the rewards."}},description:"QueryDelegationTotalRewardsResponse is the response type for the\nQuery/DelegationTotalRewards RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Distribution"],method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegationTotalRewards",description:{content:"DelegationTotalRewards queries the total rewards accrued by a each\nvalidator.",type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","rewards"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,y={unversionedId:"greenfield-api/delegation-total-rewards",id:"greenfield-api/delegation-total-rewards",title:"DelegationTotalRewards",description:"DelegationTotalRewards queries the total rewards accrued by a each",source:"@site/docs/greenfield-api/delegation-total-rewards.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/delegation-total-rewards",permalink:"/greenfield-docs/docs/greenfield-api/delegation-total-rewards",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delegation-total-rewards",title:"DelegationTotalRewards",description:"DelegationTotalRewards queries the total rewards accrued by a each",sidebar_label:"DelegationTotalRewards",hide_title:!0,hide_table_of_contents:!0,api:{description:"DelegationTotalRewards queries the total rewards accrued by a each\nvalidator.",operationId:"DelegationTotalRewards",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{rewards:{type:"array",items:{type:"object",properties:{validator_address:{type:"string"},reward:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."}}},description:"DelegationDelegatorReward represents the properties\nof a delegator's delegation reward."},description:"rewards defines all the rewards accrued by a delegator."},total:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."},description:"total defines the sum of all the rewards."}},description:"QueryDelegationTotalRewardsResponse is the response type for the\nQuery/DelegationTotalRewards RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Distribution"],method:"get",path:"/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DelegationTotalRewards",description:{content:"DelegationTotalRewards queries the total rewards accrued by a each\nvalidator.",type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","delegators",":delegator_address","rewards"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) delegator_address defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_address"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"CommunityPool",permalink:"/greenfield-docs/docs/greenfield-api/community-pool"},next:{title:"DelegationRewards",permalink:"/greenfield-docs/docs/greenfield-api/delegation-rewards"}},u={},h=[{value:"DelegationTotalRewards",id:"delegationtotalrewards",level:2}],f={toc:h},k="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delegationtotalrewards"},"DelegationTotalRewards"),(0,s.kt)("p",null,"DelegationTotalRewards queries the total rewards accrued by a each\nvalidator."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"delegator_address",description:"delegator_address defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"rewards"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"rewards defines all the rewards accrued by a delegator.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"validator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"reward"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"total"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"total defines the sum of all the rewards.")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "rewards": [\n    {\n      "validator_address": "string",\n      "reward": [\n        {\n          "denom": "string",\n          "amount": "string"\n        }\n      ]\n    }\n  ],\n  "total": [\n    {\n      "denom": "string",\n      "amount": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);