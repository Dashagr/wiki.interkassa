"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||f[m]||s;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:1,label:"Basics"},o="Transfers",i={unversionedId:"transfers/transfers",id:"transfers/transfers",title:"Transfers",description:"Merchants can transfer funds between purses of the same account or between wallets from different accounts. The commission for transfers is adjusted specifically for the merchant and must be agreed with the account manager.",source:"@site/docs/transfers/transfers.md",sourceDirName:"transfers",slug:"/transfers/",permalink:"/transfers/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/transfers/transfers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,label:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Transfers",permalink:"/category/transfers"},next:{title:"Export transfers data",permalink:"/transfers/export"}},l={},c=[{value:"Before you begin:",id:"before-you-begin",level:3},{value:"Guide",id:"guide",level:3},{value:"Transfer creation:",id:"transfer-creation",level:4},{value:"FAQ",id:"faq",level:2}],u={toc:c};function f(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transfers"},"Transfers"),(0,n.kt)("p",null,"Merchants can transfer funds between purses of the same account or between wallets from different accounts. The commission for transfers is adjusted specifically for the merchant and must be agreed with the account manager.\nMoney is transferred without conversion, within the same currency. For example, ",(0,n.kt)("strong",{parentName:"p"},"UAH \u2192 UAH, USD \u2192 USD,")," etc."),(0,n.kt)("h3",{id:"before-you-begin"},"Before you begin:"),(0,n.kt)("p",null,"This operation is not available by default. To activate it, the merchant needs to contact his manager, who will enable the transfer function for a specific checkout. After that, a new ",(0,n.kt)("a",{parentName:"p",href:"https://portal.interkassa.com/account/operations/transfer"},"'Transfers'")," tab will appear in your account."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transfers tab in the menu",src:r(984).Z,title:"Img 1. A new 'Transfers' tab",width:"1062",height:"159"})),(0,n.kt)("h3",{id:"guide"},"Guide"),(0,n.kt)("h4",{id:"transfer-creation"},"Transfer creation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://portal.interkassa.com/account/operations/transfer"},"'Transfers'")," tab from the top menu.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The main page of the &#39;Transfers&#39; section",src:r(9964).Z,title:"The main page of the 'Transfers' section",width:"1039",height:"416"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Click on the 'Create transfer' button.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Fill in the appropriate fields of the form. You can find out the ",(0,n.kt)("inlineCode",{parentName:"p"},"'ID of checkout'")," information on the Transfers page under the name of the recipient checkout, or ask the corresponding user if this transfer is made between accounts. The calculation is carried out automatically and the actual amount of credit is displayed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"'amount to be received'")," field."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transfer creation form",src:r(7).Z,title:"Transfer creation form",width:"1050",height:"428"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Press the button 'Create transfer'.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," If SMS authorization is enabled, verify the transaction."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The confirmational window",src:r(2913).Z,title:"The confirmational window",width:"1430",height:"706"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6.")," Congratulations! Now you can see that the transfer has taken place in the table on the \u2019Transfers\u2019 tab or you can ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/transfers/export"},"export"))," transfer data in excel format from ",(0,n.kt)("a",{parentName:"li",href:"https://portal.interkassa.com/account/checkout"},"'My checkouts'")," tab.")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Are there limits on the number of transfers?"),"No, you can make as many transfers per day as you need. There are also no limits on the transfer amount."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How long does the transfer take?"),"This operation is instantaneous, so you can immediately see its result on the ",(0,n.kt)("a",{href:"https://portal.interkassa.com/account/operations/transfer"},"'Transfers'")," tab."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can I make changes to a transfer that already happened?"),"No, unfortunately, there is no such possibility."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Do I need to activate the transfer function for each cash register separately?"),"For the transfer to be successful, your manager must include the appropriate function in the checkout."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"For which currencies is it possible to make a transfer?"),"On the page with the ",(0,n.kt)("a",{href:"/currencies"},"'list of currencies'"),", you can find all the currencies supported by the Interkasa platform. Transfers are possible for each of them."))}f.isMDXComponent=!0},2913:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/conf-code-93566b00238320ce9c137fd14145570a.jpg"},7:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create_transfer-d9d5895a77fc52789b032b029be116c6.jpg"},9964:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/transfers-16637f58fc98eebbb42436a4f075738b.jpg"},984:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/transfers_menu-0319cb5a81e5741ab91adfac6ec9cf68.png"}}]);