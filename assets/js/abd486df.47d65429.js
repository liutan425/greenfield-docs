"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7262],{94580:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(87462),r=(n(67294),n(3905));const o={title:"Storage Provider Command Line Interface"},l="Storage Provider Command Line Interface",s={unversionedId:"api/sp-cli",id:"api/sp-cli",title:"Storage Provider Command Line Interface",description:"There is no set way to create a CLI, but Greenfield Storage Provider typically use the urfave cli library v2.",source:"@site/docs/api/sp-cli.md",sourceDirName:"api",slug:"/api/sp-cli",permalink:"/greenfield-docs/docs/api/sp-cli",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/sp-cli.md",tags:[],version:"current",frontMatter:{title:"Storage Provider Command Line Interface"},sidebar:"apiReferenceSidebar",previous:{title:"UpgradedConsensusState",permalink:"/greenfield-docs/docs/greenfield-api/upgraded-consensus-state"},next:{title:"Greenfield SP RESTful APIs",permalink:"/greenfield-docs/docs/api/storage-provider-rest/"}},i={},d=[{value:"Common Command",id:"common-command",level:2},{value:"Global Options",id:"global-options",level:2},{value:"Config",id:"config",level:3},{value:"Database",id:"database",level:3},{value:"Logging",id:"logging",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Resource manager",id:"resource-manager",level:3}],c={toc:d},_="wrapper";function p(e){let{components:a,...n}=e;return(0,r.kt)(_,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-provider-command-line-interface"},"Storage Provider Command Line Interface"),(0,r.kt)("p",null,"There is no set way to create a CLI, but Greenfield Storage Provider typically use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/urfave/cli"},"urfave cli library v2"),".\nBuilding a CLI with urfave cli entails defining commands, arguments, and flags. Commands understand the\nactions users wish to take, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"config.dump")," cmd dumps default configuration for editing and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.upload"),"\nuploads the configuration to db, all service gets the configuration from db with ",(0,r.kt)("inlineCode",{parentName:"p"},"--config.remote")," flag.\nUsers also supply ",(0,r.kt)("strong",{parentName:"p"},"Arguments"),", such as the db address that uploading configuration and flags to modify\nvarious aspects of the commands, such ",(0,r.kt)("inlineCode",{parentName:"p"},"--server gateway, uploader, downaloader")," starts the gateway, uploader\nand downloader services in one process, combines the required services arbitrarily."),(0,r.kt)("h2",{id:"common-command"},"Common Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp version\n\nGreenfield Storage Provider\n    __                                                       _     __\n    _____/ /_____  _________ _____ ____     ____  _________ _   __(_)___/ /__  _____\n    / ___/ __/ __ \\/ ___/ __  / __  / _ \\   / __ \\/ ___/ __ \\ | / / / __  / _ \\/ ___/\n    (__  ) /_/ /_/ / /  / /_/ / /_/ /  __/  / /_/ / /  / /_/ / |/ / / /_/ /  __/ /\n    /____/\\__/\\____/_/   \\__,_/\\__, /\\___/  / .___/_/   \\____/|___/_/\\__,_/\\___/_/\n    /____/       /_/\n\nVersion : v0.2.3\nBranch  : master\nCommit  : 399e72bc698bdb143b995d92d460550bcb41b283\nBuild   : go1.20.1 darwin amd64 2023-04-05 21:28\n")),(0,r.kt)("p",null,"Dump default configuration to the './config.toml' file for editing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp config.dump\n")),(0,r.kt)("p",null,"Upload the config file to db"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp config.upload\n")),(0,r.kt)("p",null,"List the services in greenfield storage provider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp list\n")),(0,r.kt)("p",null,"Create Secp256k1 key pairs for encrypting p2p protocol msg and identifying p2p node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp p2p.create.key\n")),(0,r.kt)("p",null,"Update the free quota meta of the SP on greenfield."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./gnfd-sp update.quota\n")),(0,r.kt)("p",null,'Recover object or the segment piece data if the primarySP or the secondary SP has lost the data. Users need to set the bucket name by "-b" flag and the object name by "-o" flag'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// recover the object data\n$ ./gnfd-sp   recover.object \n// recover a segment or EC piece data\n$ ./gnfd-sp   recover.piece \n")),(0,r.kt)("h2",{id:"global-options"},"Global Options"),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--config value, -c value  Config file path for uploading to db (default: \"./config.toml\")\n--config.remote           Flag load config from remote db,if 'config.remote' be set, the db.user, db.password and db.address flags are needed, otherwise use the default value (default: false)\n")),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--db.address  value  DB listen address (default: "localhost:3306") [$SP_DB_ADDRESS]\n--db.database value  DB database name (default: "storage_provider_db") [$SP_DB_DATABASE]\n--db.password value  DB user password [$SP_DB_PASSWORD]\n--db.user     value  DB user name [$SP_DB_USER]\n')),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--log.level value  Log level (default: "info")\n--log.path  value  Log output file path (default: "./gnfd-sp.log")\n--log.std          Log output standard io (default: false)\n')),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'--metrics             Enable metrics collection and reporting (default: false)\n--metrics.addr value  Enable stand-alone metrics HTTP server listening address (default: "localhost:24036")\n')),(0,r.kt)("h3",{id:"resource-manager"},"Resource manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--rcmgr.config value  Resource manager config file path\n--rcmgr.disable       Disable resource manager (default: false)\n")))}p.isMDXComponent=!0}}]);