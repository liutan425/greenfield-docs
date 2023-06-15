"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2332],{9101:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var n=i(87462),s=(i(67294),i(3905)),a=i(26389),o=i(94891),r=i(75190),l=i(47507),d=i(24310),m=i(63303),p=(i(75035),i(85162));const c={id:"signing-infos",title:"SigningInfos",description:"SigningInfos queries signing info of all validators",sidebar_label:"SigningInfos",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SigningInfos",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{info:{type:"array",items:{type:"object",properties:{address:{type:"string"},start_height:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},index_offset:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},jailed_until:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},tombstoned:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},missed_blocks_counter:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."}},description:"ValidatorSigningInfo defines a validator's signing info for monitoring their\nliveness activity."},title:"info is the signing info of all validators"},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}},title:"QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC\nmethod"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"SigningInfos queries signing info of all validators",method:"get",path:"/cosmos/slashing/v1beta1/signing_infos",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SigningInfos queries signing info of all validators",description:{type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","signing_infos"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,g={unversionedId:"greenfield-api/signing-infos",id:"greenfield-api/signing-infos",title:"SigningInfos",description:"SigningInfos queries signing info of all validators",source:"@site/docs/greenfield-api/signing-infos.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/signing-infos",permalink:"/greenfield-docs/docs/greenfield-api/signing-infos",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"signing-infos",title:"SigningInfos",description:"SigningInfos queries signing info of all validators",sidebar_label:"SigningInfos",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"SigningInfos",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{info:{type:"array",items:{type:"object",properties:{address:{type:"string"},start_height:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},index_offset:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},jailed_until:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},tombstoned:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},missed_blocks_counter:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."}},description:"ValidatorSigningInfo defines a validator's signing info for monitoring their\nliveness activity."},title:"info is the signing info of all validators"},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}},title:"QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC\nmethod"}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"SigningInfos queries signing info of all validators",method:"get",path:"/cosmos/slashing/v1beta1/signing_infos",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"SigningInfos queries signing info of all validators",description:{type:"text/plain"},url:{path:["cosmos","slashing","v1beta1","signing_infos"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SlashingParams",permalink:"/greenfield-docs/docs/greenfield-api/slashing-params"},next:{title:"SigningInfo",permalink:"/greenfield-docs/docs/greenfield-api/signing-info"}},f={},y=[{value:"SigningInfos",id:"signinginfos",level:2}],h={toc:y},b="wrapper";function k(e){let{components:t,...i}=e;return(0,s.kt)(b,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"signinginfos"},"SigningInfos"),(0,s.kt)("p",null,"SigningInfos queries signing info of all validators"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"info"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"start_height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"Height at which validator was first a candidate OR was unjailed"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"index_offset",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n`SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"jailed_until",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"Timestamp until which the validator is jailed due to liveness downtime."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"tombstoned",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether or not a validator has been tombstoned (killed out of validator set). It is set\nonce the validator commits an equivocation or for any other configured misbehiavor."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"missed_blocks_counter",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"A counter kept to avoid unnecessary array reads.\nNote that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"pagination"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest."),(0,s.kt)("p",null," message SomeResponse {\nrepeated Bar results = 1;\nPageResponse page = 2;\n}")),(0,s.kt)(d.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "info": [\n    {\n      "address": "string",\n      "start_height": "string",\n      "index_offset": "string",\n      "jailed_until": "2023-06-14T14:12:45.189Z",\n      "tombstoned": true,\n      "missed_blocks_counter": "string"\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);