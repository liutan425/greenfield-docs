"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1470],{46863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Release Notes",icon:"proposal",dir:{order:7},order:7},l="Release Notes",o={unversionedId:"release-notes/releaseNotes",id:"release-notes/releaseNotes",title:"Release Notes",description:"Greenfield v0.2.3 - Testnet Maintenance Upgrade Reset.",source:"@site/docs/release-notes/releaseNotes.md",sourceDirName:"release-notes",slug:"/release-notes/releaseNotes",permalink:"/greenfield-docs/docs/release-notes/releaseNotes",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/release-notes/releaseNotes.md",tags:[],version:"current",frontMatter:{title:"Release Notes",icon:"proposal",dir:{order:7},order:7},sidebar:"releaseNotesSidebar",next:{title:"Roadmap",permalink:"/greenfield-docs/docs/release-notes/roadmap"}},s={},d=[{value:"Greenfield v0.2.3 - Testnet Maintenance Upgrade Reset.",id:"greenfield-v023---testnet-maintenance-upgrade-reset",level:2},{value:"Greenfield v0.2.2 - Testnet Maintenance Upgrade Reset.",id:"greenfield-v022---testnet-maintenance-upgrade-reset",level:2},{value:"Enhancement and Feature List \ud83d\udcdd",id:"enhancement-and-feature-list-",level:3},{value:"Greenfield v0.2.1 - Mekong Testnet reset.",id:"greenfield-v021---mekong-testnet-reset",level:2},{value:"Enhancement and Feature List \ud83d\udcdd",id:"enhancement-and-feature-list--1",level:3},{value:"Greenfield v0.1.2 - The maintenance testnet release.",id:"greenfield-v012---the-maintenance-testnet-release",level:2},{value:"Bugfix List",id:"bugfix-list",level:3},{value:"Feature List",id:"feature-list",level:3},{value:"Greenfield v0.1.0 - The initial testnet release.",id:"greenfield-v010---the-initial-testnet-release",level:2},{value:"Features List",id:"features-list",level:3},{value:"Account &amp;&amp; Balance &amp;&amp; Transaction",id:"account--balance--transaction",level:4},{value:"Storage",id:"storage",level:4},{value:"Native Cross Chain Communication",id:"native-cross-chain-communication",level:4},{value:"Storage Provider",id:"storage-provider",level:4},{value:"Validator and Staking",id:"validator-and-staking",level:4}],c={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release Notes"),(0,r.kt)("h2",{id:"greenfield-v023---testnet-maintenance-upgrade-reset"},"Greenfield v0.2.3 - Testnet Maintenance Upgrade Reset."),(0,r.kt)("p",null,"On August 3rd, we reset the Greenfield Testnet and upgrade the Greenfield version to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/tree/v0.2.3"},"v0.2.3"),". Here are key changes to note."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Greenfield Blockchain Changelog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/328"},"#328")," Significant model adjustments in the latest version. New concepts such as Virtual Group, Family, etc., has been introduced, to make bucket migration and storage provider exit more lightweight and reduces the storage of chain metadata. More details can be found here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/287"},"#287"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/288"},"#288"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/315"},"#315")," Improvement in payment module. A new algorithm to get the secondary SP price is introduced to avoid unfair competition; Changing the frequency of reading quota is limited to avoid some issues with charging; More payment APIs are available for frontend use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/323"},"#323")," A chain-based reconciliation module was introduced to ensure global security at the level of funds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/328"},"#328")," More lightweight object-sealing transactions are achieved by introducing the BLS signature mechanism."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/368"},"#368")," In order to reduce the losses caused by software instability during the initial SP run, the amount of BNB slashed by the storage provider will be strictly limited within a certain period of time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/346"},"#346"),",",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/292"}," #292")," SDK enhancement. The ordinary RPC requests can be sent via websocket through the Gnfd full node, even if a complex balancer is used, the request always being serviced by the same full node; Custom http client with different settings is allowed to initialize a client;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/290"},"#290")," The encoding format of cross-chain communication has been changed from RLP to ABI in order to save on gas usage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/370"},"#370"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/326"},"#326"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/312"},"#312"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/279"},"#279")," Security enhancement, such as preventing replay attacks and rogue key attacks in BLS signatures, calculation accuracy errors, etc.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Greenfield Storage Provider changelog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/480"},"#480")," Support resumable upload for big files. The resumable upload can bring these advantages for big files, including a: Quick recovery from any network issues, b: Pause and resume object uploads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/638"},"#638"),' Support data recovery. Including a: recovering segments data when downloading object finds the wrong data, b: supporting recovery in client, c: recovery segment (for primary SP) or EC piece (for secondary SP) if challenge misses the data d: cmd "recovery.object" to recovery lost object for the primary SP or secondary SP.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/681"},"#681"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/735"},"#735"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/797"},"#797")," Support using Alicloud OSS as the underlying storage of SP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/699"},"#699")," Support sharding of large-capacity data tables to provide stronger service capabilities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/795"},"#795")," Significant model adjustments in the latest version. New concepts such as Virtual Group, Family, etc., have been introduced. Complete the original process adaptation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/824"},"#824")," Based on the Virtual Group model, it supports Bucket migration and SP exit. Users can complete bucket migration as needed, and SP owners can also complete withdrawal according to actual conditions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/412"},"#412"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/851"},"#851"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/814"},"#814")," Support more powerful metadata query capabilities, such as getting single bucket/object, query SP Info, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/834"},"#834")," Remove v2 authorization.")),(0,r.kt)("h2",{id:"greenfield-v022---testnet-maintenance-upgrade-reset"},"Greenfield v0.2.2 - Testnet Maintenance Upgrade Reset."),(0,r.kt)("p",null,"On June 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.2. Here are key changes to note."),(0,r.kt)("p",null,"\ud83d\udd38All buckets/objects previously stored on Greenfield Testnet will be cleared and won't be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data."),(0,r.kt)("p",null,"\ud83d\udd38All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bnbchain"},"discord channel")," and use ",(0,r.kt)("a",{parentName:"p",href:"https://dcellar.io/"},"Dcellar")," to convert it to the BNB on Greenfield."),(0,r.kt)("p",null,"Greenfield v0.2.2 - Maintenance Release\ud83c\udf89"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.2.2"},"Greenfield Blockchain v0.2.2")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.2"},"Storage Provider v0.2.2")," introduces several enhancement exciting features. Let's take a look at these:"),(0,r.kt)("h3",{id:"enhancement-and-feature-list-"},"Enhancement and Feature List \ud83d\udcdd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/249"},"#249")," This feature will support multiple messages in a transaction using ",(0,r.kt)("inlineCode",{parentName:"li"},"EIP712 "),"sign approach. Allowing multiple messages will provide a better user experience for dApp users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/250"},"#250")," This feature allows mirroring bucket/object/group by using ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),". By using name, we can package some messages in a single tx, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateBucket"),"  ",(0,r.kt)("inlineCode",{parentName:"li"},"MirrorBucket")," in one tx."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/268"},"#268")," This feature records the challenge attestation results for the recent challenges."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield/pull/276"},"#276")," This feature support adding keyManager into txOpt, so that allow large batch of transactions sent by a single client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/502"},"#502")," This feature allow SP to use B2 as its underlying storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-storage-provider/pull/512"},"#512")," This feature enables universal endpoint for private object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/introduction/standard"},"SP Standard Framework")," This document outlines the updated implementation of the SP standard and establishes a clear set of guidelines that encompass the SP API, protocols, and performance indicators. Community developers are able to customize their own SP functions in a flexible manner that adheres to the established standard. ")),(0,r.kt)("p",null,"For other small features, bug fixes, and refactoring, please refer to the changelog in the release."),(0,r.kt)("h2",{id:"greenfield-v021---mekong-testnet-reset"},"Greenfield v0.2.1 - Mekong Testnet reset."),(0,r.kt)("p",null,"On May 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.1. We're excited to introduce this as the Mekong Testnet. Here are key changes to note."),(0,r.kt)("p",null,"\ud83d\udd38The Greenfield BSC Testnet (Chain ID: 5601) will be discontinued. Instead, we'll deploy the Greenfield Cross-Chain contracts on the BSC Chapel Testnet (Chain ID: 97).  This means you can fully utilize all the infrastructure of the current BSC Chapel Testnet, such as bscscan, tenderly, theGraph, and so on. BNB and Greenfield resources can still flow freely between Greenfield testnet and BSC testnet."),(0,r.kt)("p",null,"\ud83d\udd38The Greenfield Blockchain gRPC Endpoint will no longer be provided. The ETH-API endpoint has now been integrated with the Tendermint endpoint. All you need is the Tendermint endpoint for the Greenfield Blockchain. Please use ",(0,r.kt)("a",{parentName:"p",href:"https://www.bnbchainlist.org/"},"Chainlist")," to quickly add BSC Testnet and Greenfield Mekong Testnet."),(0,r.kt)("p",null,"\ud83d\udd38All buckets/objects previously stored on Greenfield Testnet will be cleared and won't be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data."),(0,r.kt)("p",null,"\ud83d\udd38All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bnbchain"},"discord channel")," and use ",(0,r.kt)("a",{parentName:"p",href:"https://dcellar.io/"},"Dcellar")," to convert it to the BNB on Greenfield."),(0,r.kt)("p",null,"\ud83d\udd38As this is a breaking upgrade, the team will update the document as soon as possible the maintenance is done."),(0,r.kt)("p",null,"Greenfield v0.2.1 - Release for Mekong Testnet \ud83c\udf89"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.2.0"},"Greenfield Blockchain v0.2.1")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.1"},"Storage Provider v0.2.1")," introduces several enhancement exciting features. Let's take a look at these:"),(0,r.kt)("h3",{id:"enhancement-and-feature-list--1"},"Enhancement and Feature List \ud83d\udcdd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump cosmos-sdk core to version v0.47.2. Cosmos-sdk v0.47.x and v0.46.x have significant differences in consensus engine, ABCI, encoding, dependency injection, and other aspects. Greenfield hopes to update to this version this morning to avoid future upgrade difficulties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://greenfield.bnbchain.org/docs/guide/introduction/ecosystem.html#challenge-verifier"},"Challenge Verifier")," is introduced in  Mekong Testnet. By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed to participate, protecting the network from any potential data loss, corruption, or low-quality service."),(0,r.kt)("li",{parentName:"ul"},"Discontinue object and stale permission GC is introduced in v0.2.1. These two features allow for a lighter blockchain state and allow SPs on the testnet to periodically clean up data to maintain long-term operation even without incentives."),(0,r.kt)("li",{parentName:"ul"},"Support for more diverse methods of file searches, such as listing objects by prefix or by folder."),(0,r.kt)("li",{parentName:"ul"},"Implemented a garbage collection module for the storage provider, reducing the operating costs of the storage provider.")),(0,r.kt)("h2",{id:"greenfield-v012---the-maintenance-testnet-release"},"Greenfield v0.1.2 - The maintenance testnet release."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.1.2"},"Greenfield Blockchain v0.1.2")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.2"},"Storage Provider v0.1.2"),"\nwas a regular maintenance testnet version of BNB Greenfield. This version fixed several bugs from the\nprevious version and introduced some features."),(0,r.kt)("h3",{id:"bugfix-list"},"Bugfix List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modification of Storage Fee Destination: Previously, storage fees were directed to the SP operator address.\nThis has been adjusted to the funding address, ensuring smoother transactions and fee collection."),(0,r.kt)("li",{parentName:"ul"},"Default SP Price Adjustment: To better reflect actual prices, the default prices in create_sp.json and payment.\nParam have been modified to align more closely with the current market rates."),(0,r.kt)("li",{parentName:"ul"},"Fixing List Group Error: A crucial fix has been made to the listGroup function to adapt it to the new indexing\nstructure of the group, which uses two levels of indexing."),(0,r.kt)("li",{parentName:"ul"},"Fixing CLI Bugs: We have addressed some command usage issues, such as those relating to update-group-member and\nput-policy, and improved the description of some commands.")),(0,r.kt)("h3",{id:"feature-list"},"Feature List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Off-Chain-Auth Solution:  Implementing an off-chain-auth solution, which includes APIs for "request nonce",\n"update user key", and "verify off chain auth sig". This will greatly improve the user experience for Dapp users,\neliminating the need for repetitive wallet popups for signatures.'),(0,r.kt)("li",{parentName:"ul"},"Path-style API and Upload Progress API: Introducing support for the path-style API and a new query upload progress API."),(0,r.kt)("li",{parentName:"ul"},"Seal Object Metrics and Code Refinement: The TaskNode service now includes seal object metrics. We have also refined\nthe replicate task and added some DB logs."),(0,r.kt)("li",{parentName:"ul"},"Verify Permission API: The new verify permission API replaces the current chain interface, improving overall\nperformance and reducing latency."),(0,r.kt)("li",{parentName:"ul"},'Block Syncer TXHash & Juno Version Update: Updating the block syncer to add txhash info when exporting events.\nAdditionally, updating the Juno version to support the new "stop serving" feature and included the SP module and GC function.'),(0,r.kt)("li",{parentName:"ul"},"Metadata Block Syncer Schema Update & ListExpiredBucketsBySp: Updating the block syncer schema according to changes\non the chain and events. Also introducing a new method, ListExpiredBucketsBySp, to support GC operations within SP.")),(0,r.kt)("h2",{id:"greenfield-v010---the-initial-testnet-release"},"Greenfield v0.1.0 - The initial testnet release."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0"},"Greenfield Blockchain v0.1.0")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0"},"Storage Provider v0.1.0"),"\nwas the first testnet version of BNB Greenfield. It represented a fundamental implementation of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-whitepaper"},"Greenfield Whitepaper"),". "),(0,r.kt)("p",null,"This version contained a variety of functions, including payment, storage, storage provider,\ncross-chain, challenge, staking, and governance. It is an important milestone for BNB Greenfield,\nimplementing many core functions and laying the foundation for future development and improvement."),(0,r.kt)("h3",{id:"features-list"},"Features List"),(0,r.kt)("h4",{id:"account--balance--transaction"},"Account && Balance && Transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users can create accounts and transfer BNB through Metamask or other EVM compatible wallets."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to spend their BNB as transaction fees.")),(0,r.kt)("h4",{id:"storage"},"Storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users can create and manage group, bucket, and object on Greenfield."),(0,r.kt)("li",{parentName:"ul"},"Users can upload files onto Greenfield in a decentralized way and download them anytime."),(0,r.kt)("li",{parentName:"ul"},"Users can upload private files onto Greenfield safely."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to access their files."),(0,r.kt)("li",{parentName:"ul"},"Users can grant permission to other users to manage their resources, including group, bucket, and object."),(0,r.kt)("li",{parentName:"ul"},"Users can pay for storage fees using BNB in a streaming manner."),(0,r.kt)("li",{parentName:"ul"},"If the storage provider provides poor service, users can challenge them.")),(0,r.kt)("h4",{id:"native-cross-chain-communication"},"Native Cross Chain Communication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User can transfer BNB between BSC and Greenfield."),(0,r.kt)("li",{parentName:"ul"},"User can mirror Group, Bucket, Object to BSC as NFT."),(0,r.kt)("li",{parentName:"ul"},"User can manage Group, Bucket, Object on BSC through smart contract directly."),(0,r.kt)("li",{parentName:"ul"},"BSC developer can easily integrate Greenfield into their dApp through ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-contracts-sdk"},"SDK"),". ")),(0,r.kt)("h4",{id:"storage-provider"},"Storage Provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storage Provider can register and update their information."),(0,r.kt)("li",{parentName:"ul"},"Storage Provider can update the storage price."),(0,r.kt)("li",{parentName:"ul"},"Storage Provider can garbage collect stale storage data on Testnet.")),(0,r.kt)("h4",{id:"validator-and-staking"},"Validator and Staking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User can stake BNB to become a validator."),(0,r.kt)("li",{parentName:"ul"},"Validator update their information."),(0,r.kt)("li",{parentName:"ul"},"Validator can get part of revenue from storage fees."),(0,r.kt)("li",{parentName:"ul"},"Validator can take part in the governance of Greenfield.")))}h.isMDXComponent=!0}}]);