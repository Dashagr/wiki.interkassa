"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[6060],{2991:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),r=a(6010),i=a(3438),s=a(9960),c=a(3919),o=a(5999);const l="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function p(e){let{href:t,children:a}=e;return n.createElement(s.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},a)}function u(e){let{href:t,icon:a,title:i,description:s}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},a," ",i),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",d),title:s},s))}function k(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(N,{items:a.items,className:t})}function N(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const s=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},8661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=(a(8209),a(2991));const s={sidebar_position:1,label:"Starter checklist",sidebar_label:"Get started",id:"get-started"},c="Starter checklist",o={unversionedId:"get-started/get-started",id:"get-started/get-started",title:"Starter checklist",description:"This step-by-step guide will help you configure interaction with Interkassa services, test the operation of all settings and start accepting payments from your customers.",source:"@site/docs/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/wiki.interkassa/en/next/get-started/",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/get-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,label:"Starter checklist",sidebar_label:"Get started",id:"get-started"},sidebar:"tutorialSidebar",previous:{title:"General information",permalink:"/wiki.interkassa/en/next/general-info"},next:{title:"Create an account",permalink:"/wiki.interkassa/en/next/get-started/create-a-personal-account"}},l={},m=[],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"starter-checklist"},"Starter checklist"),(0,r.kt)("p",null,"This step-by-step guide will help you configure interaction with Interkassa services, test the operation of all settings and start accepting payments from your customers.",(0,r.kt)("br",{parentName:"p"}),"\n","To start accepting payments, you need to go through a few simple steps:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create an ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/wiki.interkassa/en/next/get-started/create-a-personal-account"},"account"))," on the platform;"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/wiki.interkassa/en/next/get-started/introduction"},"take a survey"))," in your account and discuss payment methods that your business needs with a personal account manager;"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/wiki.interkassa/en/next/get-started/checkout-creation-and-configuration"},"create a checkout")),";"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/next/payment-form-generation"},"make the first invoice"))," for your payment;"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/wiki.interkassa/en/next/get-started/website-moderation/"},"moderate"))," the site;"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/wiki.interkassa/en/next/personal-account/managing-payments"},"start accepting payments"))," from customers.")),(0,r.kt)("p",null,"In the following articles, you\u2019ll find detailed tutorials that will help you go through each stage."),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);