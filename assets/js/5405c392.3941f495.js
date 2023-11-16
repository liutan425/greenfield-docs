"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={title:"Hosting a Website on Greenfield",order:1},l="Creating and uploading a website with CLI",r={unversionedId:"tutorials/dapp/hosting-websites/overview",id:"tutorials/dapp/hosting-websites/overview",title:"Hosting a Website on Greenfield",description:"Introduction",source:"@site/docs/tutorials/dapp/hosting-websites/overview.md",sourceDirName:"tutorials/dapp/hosting-websites",slug:"/tutorials/dapp/hosting-websites/overview",permalink:"/greenfield-docs/docs/tutorials/dapp/hosting-websites/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/dapp/hosting-websites/overview.md",tags:[],version:"current",frontMatter:{title:"Hosting a Website on Greenfield",order:1},sidebar:"tutorialsSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/tutorials/dapp/overview"},next:{title:"Simple Tool for File Management",permalink:"/greenfield-docs/docs/tutorials/dapp/file-management/overview"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a website",id:"creating-a-website",level:2},{value:"Deploying a website",id:"deploying-a-website",level:2},{value:"Creating a Bucket",id:"creating-a-bucket",level:3},{value:"Uploading Supporting Files",id:"uploading-supporting-files",level:3},{value:"BNB Greenfield Url",id:"bnb-greenfield-url",level:3},{value:"Updating the references",id:"updating-the-references",level:3},{value:"Uploading HTML Files",id:"uploading-html-files",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-and-uploading-a-website-with-cli"},"Creating and uploading a website with CLI"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In today's era, having a website has become essential for individuals and businesses alike. With advancements in AI, tools like ChatGPT and Bard can help create a simple website or boilerplate with just a few sentences. This tutorial will guide you through the process of creating and uploading a website to BNB Greenfield, a decentralized storage on the BNB Chain. "),(0,a.kt)("h2",{id:"creating-a-website"},"Creating a website"),(0,a.kt)("p",null,"A website typically consists of HTML pages, CSS stylesheets, and JavaScript scripts for enhanced interactivity. These files work together to create the visual layout, design, and functionality of the website. Go to the AI tool of your choice and type something like \u201cCreate a website about Plato's biography with images\u201d. And ideally, after a few iterations, you\u2019ll get to a decent-looking website."),(0,a.kt)("h2",{id:"deploying-a-website"},"Deploying a website"),(0,a.kt)("p",null,"Deploying a website to a web hosting platform is crucial because it makes the website publicly accessible and ensures its availability to users. When a website is hosted on a cloud server it becomes accessible to anyone with an internet connection. Users can access the website by typing its URL or domain name into a web browser."),(0,a.kt)("p",null,"In the case of BNB Greenfield, the decentralized network of storage providers contributes to increased availability by distributing the website's files across multiple nodes. Additionally, decentralized networks like BNB Greenfield provide data redundancy by storing multiple copies of the website's files on different nodes, reducing the risk of data loss. BNB Greenfield prioritizes security measures to protect websites and their data from unauthorized access, cyber threats, and data breaches. "),(0,a.kt)("h3",{id:"creating-a-bucket"},"Creating a Bucket"),(0,a.kt)("p",null,"To start, create a separate bucket for your website on BNB Greenfield using the following command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd bucket create --visibility=public-read gnfd://my-plato-website --primarySP 0x231099e40E1f98879C4126ef35D82FF006F24fF2\n")),(0,a.kt)("p",null,"The example return message is like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make_bucket: my-plato-website\ntransaction hash:  E083FB2647D0A53640B63AD1DB8EFA0E1C5CC05454C0774E3DB2A4822E73D423\n")),(0,a.kt)("p",null,"You can verify the transaction in explorer ",(0,a.kt)("a",{parentName:"p",href:"https://greenfieldscan.com/tx/E083FB2647D0A53640B63AD1DB8EFA0E1C5CC05454C0774E3DB2A4822E73D423"},"here"),"."),(0,a.kt)("h3",{id:"uploading-supporting-files"},"Uploading Supporting Files"),(0,a.kt)("p",null,"Next, upload the stylesheet and image files to your newly created bucket. Set the visibility flag as public-read to make the files accessible to everyone: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object put --visibility=public-read ./plato.jpg gnfd://my-plato-website/plato.jpg ./gnfd-cmd object put --visibility=public-read ./styles.css gnfd://my-plato-website/styles.css\n")),(0,a.kt)("h3",{id:"bnb-greenfield-url"},"BNB Greenfield Url"),(0,a.kt)("p",null,"BNB Greenfield utilizes a specific URL format known as the BNB Greenfield Url to identify and access objects within its decentralized storage. The URL format follows the pattern: ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd://<bucket_name><object_name>?[parameter]*"),". "),(0,a.kt)("p",null,"Let's break down the components of this format:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'"gnfd://" - This is the fixed leading identifier that indicates the URL is associated with BNB Greenfield. It is mandatory and serves as a marker for Greenfield URLs.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"bucket_name - Refers to the name of the bucket where the object is stored. It is a mandatory component and helps identify the specific storage location within BNB Greenfield.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"object_name - Represents the name of the object (e.g., file) within the bucket. It is also mandatory and allows for precise identification of the desired resource.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"parameter - This component is optional and consists of a list of key-value pairs. Parameters provide additional information for the URI, enabling customization or specific functionality. Examples of parameters could include cache settings or other metadata."))),(0,a.kt)("p",null,'Additionally, BNB Greenfield allows Service Providers (SPs) to register multiple endpoints for accessing their services. For instance, an SP named "SP1" might request users to download objects via a URL like ',(0,a.kt)("inlineCode",{parentName:"p"},"https://greenfield.sp1.com/download"),'. The complete RESTful API for downloading an object from "SP1" would resemble: ',(0,a.kt)("inlineCode",{parentName:"p"},"https://greenfield.sp1.com/download/mybucket/myobject.jpg"),', where "mybucket" is the bucket name and "myobject.jpg" is the specific object within that bucket.'),(0,a.kt)("p",null,"In the context of our website, the bucket was created under the SP2 service provider, and the serving endpoint for accessing the website's content is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://gnfd-testnet-sp-2.bnbchain.org/"),". This endpoint allows users to access the website's files, such as HTML, CSS, images, and more, stored within the designated bucket on BNB Greenfield."),(0,a.kt)("h3",{id:"updating-the-references"},"Updating the references"),(0,a.kt)("p",null,"Once the supporting files are uploaded, update the links in your HTML file to point to the correct URLs. Following the BNB Greenfield Url pattern, we need to update the URLs in our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," file to ensure correct file retrieval."),(0,a.kt)("p",null,"For example, if we had an image file named ",(0,a.kt)("inlineCode",{parentName:"p"},"plato.jpg"),' located in the "images" directory, previously the URL reference would be "images/plato.jpg". However, with BNB Greenfield\'s URL format, we need to modify it to include the serving endpoint and the specific bucket name.'),(0,a.kt)("p",null,'Instead of "images/plato.jpg", we would change it to ',(0,a.kt)("inlineCode",{parentName:"p"},"https://gnfd-testnet-sp-2.bnbchain.org/view/my-plato-website/images/plato.jpg"),', where "my-plato-website" corresponds to the bucket name in which the file is stored. This updated URL ensures that the browser can retrieve the correct image file from BNB Greenfield.'),(0,a.kt)("p",null,"But things get better! Since the BNB Greenfield URL format remains identical for all files within the same bucket, we can simplify the URLs for files residing within the same bucket. In the case of the CSS file, we can reference it using a relative path without specifying the full URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" type="text/css" href="styles.css">\n')),(0,a.kt)("p",null,"Similarly, for the image file ",(0,a.kt)("inlineCode",{parentName:"p"},"plato.jpg"),", we can use a relative path without the need to specify the full URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img src="plato.jpg" alt="Plato" class="plato-image">\n')),(0,a.kt)("p",null,"By using relative paths, the browser will correctly fetch the CSS file and the image file from the same bucket within BNB Greenfield, eliminating the need to include the full path in these specific cases."),(0,a.kt)("h3",{id:"uploading-html-files"},"Uploading HTML Files"),(0,a.kt)("p",null,"Upload the modified index.html file to your bucket using the following command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object put --visibility=public-read --contentType=text/html ./index.html \ngnfd://my-plato-website/index.html \n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"object index.html created on chain\ntransaction hash:  20921F3C1DBE3F911217CE82BDC9DC2A745AF61912651A5F9D80F10989A8FC20\n\nsealing...\nupload index.html to gnfd://my-plato-website/index.html\n")),(0,a.kt)("p",null,"Now, let's eagerly click the link to view our brand new website at ",(0,a.kt)("a",{parentName:"p",href:"https://gnfd-testnet-sp1.bnbchain.org/view/my-plato-website/index.html"},"https://gnfd-testnet-sp1.bnbchain.org/view/my-plato-website/index.html")," and feel the anticipation building up."),(0,a.kt)("p",null,"\ud83e\udd41Drum beat... "),(0,a.kt)("p",null,"But, oh no! Something went awry. Instead of the website loading, the file started downloading automatically. Frustration sets in, and I embarked on a lengthy debugging journey, spending a good hour trying to figure out the issue. "),(0,a.kt)("p",null,"Finally, I discovered the culprit: we forgot to specify the content type for the files, making them unrecognizable and causing them to be downloaded instead of served. "),(0,a.kt)("p",null,"However, let's not forget that BNB Greenfield is an immutable storage. So to update the file, we must first delete it and then reupload it. "),(0,a.kt)("p",null,"To accomplish this, I used the power of the 'object delete' command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object rm gnfd://my-plato-website/index.html\n")),(0,a.kt)("p",null,"Wait for the confirmation that the file was successfully deleted, accompanied by a transaction hash: 4B12BCF26525C1B661389529524DF14E23164D000FA47FB2E0D0BE26B131E04A."),(0,a.kt)("p",null,"And reupload the html file, this time accompanied by the content-type flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object put --visibility=public-read --contentType=text/html ./index.html gnfd://my-plato-website/index.html\n")),(0,a.kt)("p",null,"\ud83e\udd41\ud83e\udd41Drum beat intensifies... "),(0,a.kt)("p",null,"Oh, no! The website still looks horrendous, and worse yet, the image of Plato is nowhere to be found. Frustration turned into disappointment as we discovered that the browser was throwing an error due to an incorrect MIME type. It refused to apply the styles from ",(0,a.kt)("a",{parentName:"p",href:"https://gnfd-testnet-sp-2.bnbchain.org/view/my-plato-website/styles.css"},"https://gnfd-testnet-sp-2.bnbchain.org/view/my-plato-website/styles.css")," because the MIME type was set as 'text/plain', which is not a supported stylesheet MIME type when strict MIME checking is enabled.\nFear not! The error looks familiar and we already know exactly what needed to be done. So swiftly deleting the problematic files and reuploading them correctly this time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object rm gnfd://my-plato-website/plato.jpg\n./gnfd-cmd object rm gnfd://my-plato-website/styles.css\n")),(0,a.kt)("p",null,"And then, with a determined spirit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gnfd-cmd object put --visibility=public-read --contentType=image/jpeg ./plato.jpg gnfd://my-plato-website/plato.jpg \n./gnfd-cmd object put --visibility=public-read --contentType=text/css ./styles.css gnfd://my-plato-website/styles.css\n")),(0,a.kt)("p",null,"\ud83e\udd41\ud83e\udd41\ud83e\udd41Drum beat crescendos... "),(0,a.kt)("p",null,"And finally, we heard the triumphant sound of trumpets! "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Plato Website",src:n(64329).Z,width:"1770",height:"1566"})),(0,a.kt)("p",null,"However, as we gaze upon ",(0,a.kt)("a",{parentName:"p",href:"https://greenfield-sp.bnbchain.org/view/my-plato-website/index.html"},"the site"),", we can't help but admit that it doesn't look particularly astonishing. It falls short of our grandest expectations. Yet, considering that we generated and uploaded it in just a matter of minutes, it's still a decent outcome given our investment of time and effort."),(0,a.kt)("p",null,"The content and image look good though, it just needs more love with styling\u2026but that\u2019s a story for another tutorial."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Our journey with website development has been filled with ups and downs. We encountered challenges along the way, but with perseverance and a little debugging, we managed to deploy our website successfully. "),(0,a.kt)("p",null,"BNB Greenfield's URL format and immutable storage principles require to be mindful of content types and careful when updating files. Despite the minor setbacks, BNB Greenfield remains a valuable platform for deploying websites, offering increased availability, reliability, and quite easy command tools."),(0,a.kt)("p",null,"Hope you enjoyed it and looking forward to see your websites on BNB Greenfield."))}u.isMDXComponent=!0},64329:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/website-example-019145e449182f4f9353fd19b2ff1a04.png"}}]);