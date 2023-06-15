"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"SPDB",order:3},i="SPDB",s={unversionedId:"guide/storage-provider/services/spdb",id:"guide/storage-provider/services/spdb",title:"SPDB",description:"SP(Storage Provider Database) store needs to implement SPDB interface. SQL database is used by default.",source:"@site/docs/guide/storage-provider/services/spdb.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/spdb",permalink:"/greenfield-docs/docs/guide/storage-provider/services/spdb",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/storage-provider/services/spdb.md",tags:[],version:"current",frontMatter:{title:"SPDB",order:3},sidebar:"guideSidebar",previous:{title:"P2P",permalink:"/greenfield-docs/docs/guide/storage-provider/services/p2p"},next:{title:"Piece Store",permalink:"/greenfield-docs/docs/guide/storage-provider/services/piece-store"}},c={},d=[{value:"JobContext",id:"jobcontext",level:2},{value:"Job Table",id:"job-table",level:3},{value:"Object Table",id:"object-table",level:3},{value:"Integrity",id:"integrity",level:2},{value:"Integrity Table",id:"integrity-table",level:3},{value:"SPInfo",id:"spinfo",level:2},{value:"StorageParams",id:"storageparams",level:2},{value:"Traffic",id:"traffic",level:2},{value:"ServiceConfig",id:"serviceconfig",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spdb"},"SPDB"),(0,a.kt)("p",null,"SP(Storage Provider Database) store needs to implement SPDB interface. SQL database is used by default.\nThe following mainly introduces the data schemas corresponding to several core interfaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// SPDB contains all the methods required by sql database\ntype SPDB interface {\n    Job\n    Object\n    ObjectIntegrity\n    Traffic\n    SPInfo\n    StorageParam\n}\n")),(0,a.kt)("h2",{id:"jobcontext"},"JobContext"),(0,a.kt)("p",null,"JobContext records the context of uploading an payload data, it contains two tables: JobTable and ObjectTable."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Job")," interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Job interface which contains job related to object id interface\ntype Job interface {\n    // CreateUploadJob create upload job and return job context\n    CreateUploadJob(objectInfo *storagetypes.ObjectInfo) (*servicetypes.JobContext, error)\n    // UpdateJobState update the state of a job by object id\n    UpdateJobState(objectID uint64, state servicetypes.JobState) error\n    // GetJobByID get job context by job id and return job context\n    GetJobByID(jobID uint64) (*servicetypes.JobContext, error)\n    // GetJobByObjectID get job context by object id\n    GetJobByObjectID(objectID uint64) (*servicetypes.JobContext, error)\n}\n")),(0,a.kt)("h3",{id:"job-table"},"Job Table"),(0,a.kt)("p",null,"JobTable describes some important data about job type and job state. Every operation in SP is a job which drives by state machine."),(0,a.kt)("p",null,"Below is the schema of ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobtable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// JobTable table schema\ntype JobTable struct {\n    // JobID defines the unique id of a job\n    JobID        uint64 `gorm:"primary_key;autoIncrement"`\n    // JobType defines the type of a job\n    JobType      int32\n    // JobState defines the state of a job\n    JobState     int32\n    // JobErrorCode defines the error code when a job abnormal termination\n    JobErrorCode uint32\n    // CreatedTime defines the job create time, used to jobs garbage collection\n    CreatedTime  time.Time\n    // ModifiedTime defines the job last modified time, used to judge timeout\n    ModifiedTime time.Time\n}\n')),(0,a.kt)("p",null,"Below is the enum of ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobtype and JobState"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum JobType {\n  // default job type\n  JOB_TYPE_UNSPECIFIED = 0;\n  // upload object\n  JOB_TYPE_UPLOAD_OBJECT = 1;\n  // delete object\n  JOB_TYPE_DELETE_OBJECT = 2;\n}\n\nenum JobState {\n  // default job state\n  JOB_STATE_INIT_UNSPECIFIED = 0;\n\n  // uploading payload data to primary SP\n  JOB_STATE_UPLOAD_OBJECT_DOING = 1;\n  // upload payload data to primary SP has done\n  JOB_STATE_UPLOAD_OBJECT_DONE = 2;\n  // failed to upload primary SP\n  JOB_STATE_UPLOAD_OBJECT_ERROR = 3;\n\n  // alloc secondary SPs is doing\n  JOB_STATE_ALLOC_SECONDARY_DOING = 4;\n  // alloc secondary SPs has done\n  JOB_STATE_ALLOC_SECONDARY_DONE = 5;\n  // failed to alloc secondary SPs\n  JOB_STATE_ALLOC_SECONDARY_ERROR = 6;\n\n  // replicating payload data to secondary SPs\n  JOB_STATE_REPLICATE_OBJECT_DOING = 7;\n  // replicate payload data to secondary SPs has done\n  JOB_STATE_REPLICATE_OBJECT_DONE = 8;\n  // failed to replicate payload data to secondary SPs\n  JOB_STATE_REPLICATE_OBJECT_ERROR = 9;\n\n  // signing seal object transaction\n  JOB_STATE_SIGN_OBJECT_DOING = 10;\n  // sign seal object transaction has done\n  JOB_STATE_SIGN_OBJECT_DONE = 11;\n  // failed to sign seal object transaction\n  JOB_STATE_SIGN_OBJECT_ERROR = 12;\n\n  // seal object transaction is doing on chain\n  JOB_STATE_SEAL_OBJECT_TX_DOING = 13;\n  // seal object transaction has done\n  JOB_STATE_SEAL_OBJECT_DONE = 14;\n  // failed to run seal object transaction\n  JOB_STATE_SEAL_OBJECT_ERROR = 15;\n}\n")),(0,a.kt)("h3",{id:"object-table"},"Object Table"),(0,a.kt)("p",null,"ObjectTable stores basic information about an upload object metadata."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object")," interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Object interface which contains get and set object info interface\ntype Object interface {\n    // GetObjectInfo get object info by object id\n    GetObjectInfo(objectID uint64) (*storagetypes.ObjectInfo, error)\n    // SetObjectInfo set(maybe overwrite) object info by object id\n    SetObjectInfo(objectID uint64, objectInfo *storagetypes.ObjectInfo) error\n}\n")),(0,a.kt)("p",null,"Below is the schema of ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectTable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// ObjectTable table schema\ntype ObjectTable struct {\n    // ObjectID defines the unique ID of an obejct\n    ObjectID             uint64 `gorm:"primary_key"`\n    // JobID defines the unique id of a job.\n    JobID                uint64 `gorm:"index:job_to_object"`\n    // Owner defines the owner of an object\n    Owner                string\n    // BucketName deinfes the bucket name to which an object belongs\n    BucketName           string\n    // ObjectName defines the object name\n    ObjectName           string\n    // PayloadSize defines the obejct size\n    PayloadSize          uint64\n    // IsPublic defines an object is public\n    IsPublic             bool\n    // ContentType defines an obejct content type\n    ContentType          string\n    // CreatedAtHeight defines an obejct created at which chain height \n    CreatedAtHeight      int64\n    // ObjectStatus defines object status\n    ObjectStatus         int32\n    // RedundancyType defines the redundancy type of an object used\n    RedundancyType       int32\n    // SourceType defines the source type of an object\n    SourceType           int32\n    // SpIntegrityHash defines sp inetgirty hash\n    SpIntegrityHash      string\n    // SecondarySpAddresses defines secondary sp addresses\n    SecondarySpAddresses string\n}\n')),(0,a.kt)("p",null,"Below is the enum of ",(0,a.kt)("inlineCode",{parentName:"p"},"RedundancyType, ObjectStatus and SourceType"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum RedundancyType {\n  // default redundancy type is replica\n  REDUNDANCY_REPLICA_TYPE = 0;\n  // redundancy type is ec\n  REDUNDANCY_EC_TYPE = 1;\n  // redundancy type is inline type\n  REDUNDANCY_INLINE_TYPE = 2;\n}\n\nenum ObjectStatus {\n  // default object status is initialized\n  OBJECT_STATUS_INIT = 0;\n  // object status is in service\n  OBJECT_STATUS_IN_SERVICE = 1;\n}\n\nenum SourceType {\n  // default source type that object is origin\n  SOURCE_TYPE_ORIGIN = 0;\n  // object is from bsc cross chain\n  SOURCE_TYPE_BSC_CROSS_CHAIN = 1;\n}\n")),(0,a.kt)("h2",{id:"integrity"},"Integrity"),(0,a.kt)("p",null,"For each object there are some pieces root hashes stored on greenfield chain to keep data integrity. And for the pieces of an object stored on a specific SP, the SP keeps these pieces' hashes, which are used for storage proof."),(0,a.kt)("p",null,"ObjectIntegrity interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// ObjectIntegrity abstract object integrity interface\ntype ObjectIntegrity interface {\n    // GetObjectIntegrity get integrity meta info by object id\n    GetObjectIntegrity(objectID uint64) (*IntegrityMeta, error)\n    // SetObjectIntegrity set(maybe overwrite) integrity hash info to db\n    SetObjectIntegrity(integrity *IntegrityMeta) error\n}\n")),(0,a.kt)("h3",{id:"integrity-table"},"Integrity Table"),(0,a.kt)("p",null,"Below is the schema of ",(0,a.kt)("inlineCode",{parentName:"p"},"IntegrityMetaTable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// IntegrityMetaTable table schema\ntype IntegrityMetaTable struct {\n    // ObjectID defines the unique ID of an obejct\n    ObjectID      uint64 `gorm:\"primary_key\"`\n    // PieceHashList defines the piece hash list of an obejct by using sha256\n    PieceHashList string\n    // IntegrityHash defines\n    the integrity hash of an object\n    IntegrityHash string\n    // Signature defines the signature of an obejct's IntegrityHash by using Secondary SP's private key\n    Signature     string\n}\n")),(0,a.kt)("h2",{id:"spinfo"},"SPInfo"),(0,a.kt)("p",null,"Each SP should manage the information of all SP which join in Greenfield chain. Therefore, SPInfo interface provides seven methods to manage SP."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SPInfo")," interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// SPInfo interface\ntype SPInfo interface {\n    // UpdateAllSp update all sp info, delete old sp info\n    UpdateAllSp(spList []*sptypes.StorageProvider) error\n    // FetchAllSp if status is nil return all sp info; otherwise return sp info by status\n    FetchAllSp(status ...sptypes.Status) ([]*sptypes.StorageProvider, error)\n    // FetchAllSpWithoutOwnSp if status is nil return all sp info without own sp;\n    // otherwise return sp info by status without own sp\n    FetchAllSpWithoutOwnSp(status ...sptypes.Status) ([]*sptypes.StorageProvider, error)\n    // GetSpByAddress return sp info by address and addressType\n    GetSpByAddress(address string, addressType SpAddressType) (*sptypes.StorageProvider, error)\n    // GetSpByEndpoint return sp info by endpoint\n    GetSpByEndpoint(endpoint string) (*sptypes.StorageProvider, error)\n\n    // GetOwnSpInfo return own sp info\n    GetOwnSpInfo() (*sptypes.StorageProvider, error)\n    // SetOwnSpInfo set(maybe overwrite) own sp info\n    SetOwnSpInfo(sp *sptypes.StorageProvider) error\n}\n")),(0,a.kt)("p",null,"The meta information schema about a SP as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// SpInfoTable table schema\ntype SpInfoTable struct {\n    // OperatorAddress defines the account address of the storage provider's operator; It also is the unique index key of sp.\n    OperatorAddress string `gorm:\"primary_key\"`\n    // IsOwn is used to identify whether is current sp's info\n    IsOwn           bool   `gorm:\"primary_key\"`\n    // FundingAddress defines one of the storage provider's accounts which is used to deposit and reward.\n    FundingAddress  string\n    // SealAddress defines one of the storage provider's accounts which is used to SealObject\n    SealAddress     string\n    // ApprovalAddress defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request\n    ApprovalAddress string\n    // TotalDeposit defines the number of tokens deposited by this storage provider for staking.\n    TotalDeposit    string\n    // Status defines the current service status of this storage provider\n    Status          int32\n    // Endpoint define the storage provider's network service address\n    Endpoint        string\n    // Moniker defines a human-readable name for the storage provider\n    Moniker         string\n    // Identity defines an optional identity signature (ex. UPort or Keybase).\n    Identity        string\n    // Website defines an optional website link.\n    Website         string\n    // SecurityContact defines an optional email for security contact.\n    SecurityContact string\n    // Details define other optional details.\n    Details         string\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Status is the status of a storage provider.\nenum Status {\n  // SP is in service\n  STATUS_IN_SERVICE = 0;\n  // SP is in jailed\n  STATUS_IN_JAILED = 1;\n  // SP is graceful exiting\n  STATUS_GRACEFUL_EXITING = 2;\n  // SP is out of service\n  STATUS_OUT_OF_SERVICE = 3;\n}\n")),(0,a.kt)("h2",{id:"storageparams"},"StorageParams"),(0,a.kt)("p",null,"Each SP should store basic storage params about Greenfield chain."),(0,a.kt)("p",null,"StorageParams interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// StorageParam interface\ntype StorageParam interface {\n    // GetStorageParams return storage params\n    GetStorageParams() (*storagetypes.Params, error)\n    // SetStorageParams set(maybe overwrite) storage params\n    SetStorageParams(params *storagetypes.Params) error\n}\n")),(0,a.kt)("p",null,"Below is the schema of ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageParamsTable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type StorageParamsTable struct {\n    // ID is the primary key of StorageParamsTable\n    ID                      int64 `gorm:"primary_key;autoIncrement"`\n    // MaxSegmentSize is the maximum size of a segment. default: 16M \n    MaxSegmentSize          uint64\n    // RedundantDataChunkNum is the num of data chunks of EC redundancy algorithm\n    RedundantDataChunkNum   uint32\n    // RedundantParityChunkNum is the num of parity chunks of EC redundancy algorithm\n    RedundantParityChunkNum uint32\n    // MaxPayloadSize is the maximum size of the payload, default: 2G\n    MaxPayloadSize          uint64\n}\n')),(0,a.kt)("h2",{id:"traffic"},"Traffic"),(0,a.kt)("p",null,"Traffic provides traffic control to ensure service security."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Traffic")," interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Traffic define a series of traffic interfaces\ntype Traffic interface {\n    // CheckQuotaAndAddReadRecord create bucket traffic firstly if bucket is not existed,\n    // and check whether the added traffic record exceeds the quota, if it exceeds the quota,\n    // it will return error, Otherwise, add a record and return nil.\n    CheckQuotaAndAddReadRecord(record *ReadRecord, quota *BucketQuota) error\n    // GetBucketTraffic return bucket traffic info,\n    // notice maybe return (nil, nil) while there is no bucket traffic\n    GetBucketTraffic(bucketID uint64, yearMonth string) (*BucketTraffic, error)\n    // GetReadRecord return record list by time range\n    GetReadRecord(timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetBucketReadRecord return bucket record list by time range\n    GetBucketReadRecord(bucketID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetObjectReadRecord return object record list by time range\n    GetObjectReadRecord(objectID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n    // GetUserReadRecord return user record list by time range\n    GetUserReadRecord(userAddress string, timeRange *TrafficTimeRange) ([]*ReadRecord, error)\n}\n")),(0,a.kt)("p",null,"Below is the schema of ",(0,a.kt)("inlineCode",{parentName:"p"},"BucketTrafficTable")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadRecordTable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// BucketTrafficTable table schema\ntype BucketTrafficTable struct {\n    // BucketID is used to identify a bucket which is globally unqiue\n    BucketID uint64 `gorm:"primary_key"`\n    // Month is used to record month\n    Month    string `gorm:"primary_key"`\n\n    // BucketName is the name of a bucket\n    BucketName       string\n    // ReadConsumedSize is read consumed size\n    ReadConsumedSize uint64\n    // ReadQuotaSize = the greenfield chain bucket quota + the sp default free quota\n    ReadQuotaSize uint64\n    // ModifiedTime is the modified time of a bucket\n    ModifiedTime  time.Time\n}\n\n// ReadRecordTable table schema\ntype ReadRecordTable struct {\n    // ReadRecordID is primary key\n    ReadRecordID uint64 `gorm:"primary_key;autoIncrement"`\n\n    // BucketID is used to identify a bucket which is globally unqiue\n    BucketID        uint64 `gorm:"index:bucket_to_read_record"`\n    // ObjectID is used to identify an object which is globally unqiue\n    ObjectID        uint64 `gorm:"index:object_to_read_record"`\n    // UserAddress records user address\n    UserAddress     string `gorm:"index:user_to_read_record"`\n    // ReadTimestampUs read time timestamp in microsecond\n    ReadTimestampUs int64  `gorm:"index:time_to_read_record"`\n\n    // BucketName records bucket name\n    BucketName string\n    // ObjectName records object name\n    ObjectName string\n    // ReadSize records read size\n    ReadSize   uint64\n}\n')),(0,a.kt)("h2",{id:"serviceconfig"},"ServiceConfig"),(0,a.kt)("p",null,"ServiceConfig interface provides two methods get and set sp config for easily starting sp."),(0,a.kt)("p",null,"The configs of sp are stored in JSON format. Version is used to identify different config."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ServiceConfig")," interface as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// ServiceConfig defines a series of reading and setting service config interfaces\ntype ServiceConfig interface {\n    GetAllServiceConfigs() (string, string, error)\n    SetAllServiceConfigs(version, config string) error\n}\n")))}u.isMDXComponent=!0}}]);