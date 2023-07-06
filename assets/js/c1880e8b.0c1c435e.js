"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[811],{504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),m=n(75190),r=n(47507),d=n(24310),l=n(63303),p=(n(75035),n(85162));const c={id:"denom-metadata",title:"DenomMetadata",description:"DenomsMetadata queries the client metadata of a given coin denomination.",sidebar_label:"DenomMetadata",hide_title:!0,hide_table_of_contents:!0,api:{description:"DenomsMetadata queries the client metadata of a given coin denomination.",operationId:"DenomMetadata",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{metadata:{type:"object",properties:{description:{type:"string"},denom_units:{type:"array",items:{type:"object",properties:{denom:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},exponent:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},aliases:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"}},description:"DenomUnit represents a struct that describes a given\ndenomination unit of the basic token."},title:"denom_units represents the list of DenomUnit's for a given coin"},base:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},display:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},name:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},symbol:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},uri:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},uri_hash:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"}},description:"Metadata represents a struct that describes\na basic token."}},description:"QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"denom",description:"denom is the coin denom to query the metadata for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/cosmos/bank/v1beta1/denoms_metadata/{denom}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DenomMetadata",description:{content:"DenomsMetadata queries the client metadata of a given coin denomination.",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","denoms_metadata",":denom"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) denom is the coin denom to query the metadata for.",type:"text/plain"},type:"any",value:"",key:"denom"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},h=void 0,y={unversionedId:"greenfield-api/denom-metadata",id:"greenfield-api/denom-metadata",title:"DenomMetadata",description:"DenomsMetadata queries the client metadata of a given coin denomination.",source:"@site/docs/greenfield-api/denom-metadata.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/denom-metadata",permalink:"/greenfield-docs/docs/greenfield-api/denom-metadata",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"denom-metadata",title:"DenomMetadata",description:"DenomsMetadata queries the client metadata of a given coin denomination.",sidebar_label:"DenomMetadata",hide_title:!0,hide_table_of_contents:!0,api:{description:"DenomsMetadata queries the client metadata of a given coin denomination.",operationId:"DenomMetadata",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{metadata:{type:"object",properties:{description:{type:"string"},denom_units:{type:"array",items:{type:"object",properties:{denom:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},exponent:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},aliases:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"}},description:"DenomUnit represents a struct that describes a given\ndenomination unit of the basic token."},title:"denom_units represents the list of DenomUnit's for a given coin"},base:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},display:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},name:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},symbol:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},uri:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},uri_hash:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"}},description:"Metadata represents a struct that describes\na basic token."}},description:"QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"denom",description:"denom is the coin denom to query the metadata for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],method:"get",path:"/cosmos/bank/v1beta1/denoms_metadata/{denom}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DenomMetadata",description:{content:"DenomsMetadata queries the client metadata of a given coin denomination.",type:"text/plain"},url:{path:["cosmos","bank","v1beta1","denoms_metadata",":denom"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) denom is the coin denom to query the metadata for.",type:"text/plain"},type:"any",value:"",key:"denom"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"DenomsMetadata",permalink:"/greenfield-docs/docs/greenfield-api/denoms-metadata"},next:{title:"BankParams",permalink:"/greenfield-docs/docs/greenfield-api/bank-params"}},u={},g=[{value:"DenomMetadata",id:"denommetadata",level:2}],f={toc:g},b="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"denommetadata"},"DenomMetadata"),(0,s.kt)("p",null,"DenomsMetadata queries the client metadata of a given coin denomination."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{name:"denom",description:"denom is the coin denom to query the metadata for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"metadata"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Metadata represents a struct that describes\na basic token.")),(0,s.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"denom_units"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"exponent",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"aliases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!1,name:"base",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"display",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaName:"name defines the name of the token (eg: Cosmos Atom)",qualifierMessage:void 0,schema:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"symbol",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"uri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"uri_hash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"},mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "metadata": {\n    "description": "string",\n    "denom_units": [\n      {\n        "denom": "string",\n        "exponent": 0,\n        "aliases": [\n          "string"\n        ]\n      }\n    ],\n    "base": "string",\n    "display": "string",\n    "name": "string",\n    "symbol": "string",\n    "uri": "string",\n    "uri_hash": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);