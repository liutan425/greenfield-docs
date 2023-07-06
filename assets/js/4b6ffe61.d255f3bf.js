"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9226],{40746:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>f});var i=s(87462),a=(s(67294),s(3905)),n=s(26389),r=s(94891),o=s(75190),l=s(47507),c=s(24310),d=s(63303),u=(s(75035),s(85162));const m={id:"list-buckets",title:"ListBuckets",description:"Queries a list of bucket items.",sidebar_label:"ListBuckets",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of bucket items.",operationId:"ListBuckets",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{bucket_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string",description:"owner is the account address of bucket creator, it is also the bucket owner."},bucket_name:{type:"string",title:"bucket_name is a globally unique name of bucket"},visibility:{description:"visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},id:{type:"string",description:"id is the unique identification for bucket."},source_type:{title:"source_type defines which chain the user should send the bucket management transactions to",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},create_at:{type:"string",format:"int64",description:"create_at define the block timestamp when the bucket created."},payment_address:{type:"string",title:"payment_address is the address of the payment account"},primary_sp_address:{type:"string",description:"primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never\nleave this SP, unless you explicitly shift them to another SP."},charged_read_quota:{type:"string",format:"uint64",description:"charged_read_quota defines the traffic quota for read in bytes per month.\nThe available read data for each user is the sum of the free read data provided by SP and\nthe ChargeReadQuota specified here."},billing_info:{title:"billing info of the bucket",type:"object",properties:{price_time:{type:"string",format:"int64",title:"the time of the payment price, used to calculate the charge rate of the bucket"},total_charge_size:{type:"string",format:"uint64",title:"the total size of the objects in the bucket, used to calculate the charge rate of the bucket"},secondary_sp_objects_size:{type:"array",items:{type:"object",properties:{sp_address:{type:"string",title:"address is the address of the secondary sp"},total_charge_size:{type:"string",format:"uint64",title:"size is the total size of the objects in the secondary sp"}},title:"secondary sp objects size statistics"},title:"secondary sp objects size statistics"}}},bucket_status:{description:"bucket_status define the status of the bucket.",type:"string",enum:["BUCKET_STATUS_CREATED","BUCKET_STATUS_DISCONTINUED"],default:"BUCKET_STATUS_CREATED"}}}},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],method:"get",path:"/greenfield/storage/list_buckets",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListBuckets",description:{content:"Queries a list of bucket items.",type:"text/plain"},url:{path:["greenfield","storage","list_buckets"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},p=void 0,y={unversionedId:"greenfield-api/list-buckets",id:"greenfield-api/list-buckets",title:"ListBuckets",description:"Queries a list of bucket items.",source:"@site/docs/greenfield-api/list-buckets.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/list-buckets",permalink:"/greenfield-docs/docs/greenfield-api/list-buckets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-buckets",title:"ListBuckets",description:"Queries a list of bucket items.",sidebar_label:"ListBuckets",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of bucket items.",operationId:"ListBuckets",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{bucket_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string",description:"owner is the account address of bucket creator, it is also the bucket owner."},bucket_name:{type:"string",title:"bucket_name is a globally unique name of bucket"},visibility:{description:"visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},id:{type:"string",description:"id is the unique identification for bucket."},source_type:{title:"source_type defines which chain the user should send the bucket management transactions to",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},create_at:{type:"string",format:"int64",description:"create_at define the block timestamp when the bucket created."},payment_address:{type:"string",title:"payment_address is the address of the payment account"},primary_sp_address:{type:"string",description:"primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never\nleave this SP, unless you explicitly shift them to another SP."},charged_read_quota:{type:"string",format:"uint64",description:"charged_read_quota defines the traffic quota for read in bytes per month.\nThe available read data for each user is the sum of the free read data provided by SP and\nthe ChargeReadQuota specified here."},billing_info:{title:"billing info of the bucket",type:"object",properties:{price_time:{type:"string",format:"int64",title:"the time of the payment price, used to calculate the charge rate of the bucket"},total_charge_size:{type:"string",format:"uint64",title:"the total size of the objects in the bucket, used to calculate the charge rate of the bucket"},secondary_sp_objects_size:{type:"array",items:{type:"object",properties:{sp_address:{type:"string",title:"address is the address of the secondary sp"},total_charge_size:{type:"string",format:"uint64",title:"size is the total size of the objects in the secondary sp"}},title:"secondary sp objects size statistics"},title:"secondary sp objects size statistics"}}},bucket_status:{description:"bucket_status define the status of the bucket.",type:"string",enum:["BUCKET_STATUS_CREATED","BUCKET_STATUS_DISCONTINUED"],default:"BUCKET_STATUS_CREATED"}}}},pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],method:"get",path:"/greenfield/storage/list_buckets",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListBuckets",description:{content:"Queries a list of bucket items.",type:"text/plain"},url:{path:["greenfield","storage","list_buckets"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"HeadObjectNFT",permalink:"/greenfield-docs/docs/greenfield-api/head-object-nft"},next:{title:"ListGroup",permalink:"/greenfield-docs/docs/greenfield-api/list-group"}},h={},f=[{value:"ListBuckets",id:"listbuckets",level:2}],g={toc:f},b="wrapper";function k(e){let{components:t,...s}=e;return(0,a.kt)(b,(0,i.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"listbuckets"},"ListBuckets"),(0,a.kt)("p",null,"Queries a list of bucket items."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"bucket_infos"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"owner is the account address of bucket creator, it is also the bucket owner."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"bucket_name",required:!1,schemaName:"bucket_name is a globally unique name of bucket",qualifierMessage:void 0,schema:{type:"string",title:"bucket_name is a globally unique name of bucket"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"visibility",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`VISIBILITY_TYPE_UNSPECIFIED`, `VISIBILITY_TYPE_PUBLIC_READ`, `VISIBILITY_TYPE_PRIVATE`, `VISIBILITY_TYPE_INHERIT`]",schema:{description:"visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it.",type:"string",enum:["VISIBILITY_TYPE_UNSPECIFIED","VISIBILITY_TYPE_PUBLIC_READ","VISIBILITY_TYPE_PRIVATE","VISIBILITY_TYPE_INHERIT"],default:"VISIBILITY_TYPE_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"id is the unique identification for bucket."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"source_type defines which chain the user should send the bucket management transactions to",qualifierMessage:"**Possible values:** [`SOURCE_TYPE_ORIGIN`, `SOURCE_TYPE_BSC_CROSS_CHAIN`, `SOURCE_TYPE_MIRROR_PENDING`]",schema:{title:"source_type defines which chain the user should send the bucket management transactions to",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"create_at",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"create_at define the block timestamp when the bucket created."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"payment_address",required:!1,schemaName:"payment_address is the address of the payment account",qualifierMessage:void 0,schema:{type:"string",title:"payment_address is the address of the payment account"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"primary_sp_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never\nleave this SP, unless you explicitly shift them to another SP."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"charged_read_quota",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"charged_read_quota defines the traffic quota for read in bytes per month.\nThe available read data for each user is the sum of the free read data provided by SP and\nthe ChargeReadQuota specified here."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"billing_info"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"price_time",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"the time of the payment price, used to calculate the charge rate of the bucket"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"total_charge_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"the total size of the objects in the bucket, used to calculate the charge rate of the bucket"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"secondary_sp_objects_size"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"sp_address",required:!1,schemaName:"address is the address of the secondary sp",qualifierMessage:void 0,schema:{type:"string",title:"address is the address of the secondary sp"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"total_charge_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"size is the total size of the objects in the secondary sp"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{collapsible:!1,name:"bucket_status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`BUCKET_STATUS_CREATED`, `BUCKET_STATUS_DISCONTINUED`]",schema:{description:"bucket_status define the status of the bucket.",type:"string",enum:["BUCKET_STATUS_CREATED","BUCKET_STATUS_DISCONTINUED"],default:"BUCKET_STATUS_CREATED"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"pagination"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest."),(0,a.kt)("p",null," message SomeResponse {\nrepeated Bar results = 1;\nPageResponse page = 2;\n}")),(0,a.kt)(c.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "bucket_infos": [\n    {\n      "owner": "string",\n      "bucket_name": "string",\n      "visibility": "VISIBILITY_TYPE_UNSPECIFIED",\n      "id": "string",\n      "source_type": "SOURCE_TYPE_ORIGIN",\n      "create_at": "string",\n      "payment_address": "string",\n      "primary_sp_address": "string",\n      "charged_read_quota": "string",\n      "billing_info": {\n        "price_time": "string",\n        "total_charge_size": "string",\n        "secondary_sp_objects_size": [\n          {\n            "sp_address": "string",\n            "total_charge_size": "string"\n          }\n        ]\n      },\n      "bucket_status": "BUCKET_STATUS_CREATED"\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(u.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(c.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);