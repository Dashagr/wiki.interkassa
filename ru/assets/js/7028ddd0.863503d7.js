"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[2083],{2991:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7294),a=r(6010),o=r(3438),i=r(9960),s=r(3919),c=r(5999);const l="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function k(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:r}=e;const a=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(k,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},1068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=(r(1839),r(2991));const i={sidebar_position:7,label:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439",sidebar_label:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"},s="\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439",c={unversionedId:"personal-account/export/export",id:"version-1.0.0/personal-account/export/export",title:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439",description:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u043e\u0442\u0447\u0435\u0442 \u043e\u0431 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043a\u043e\u043d\u0440\u0435\u0442\u043d\u043e\u0439 \u043a\u0430\u0441\u0441\u044b, \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438\u0437 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0430. \u0421\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0439\u0442\u0435 \u043e\u0442\u0447\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0440\u0443\u0447\u043d\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0443\u043a\u0430\u0437\u0430\u0432 \u0434\u0430\u0442\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u043e\u043b\u044f\u0445 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u043c. \u0418\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043e\u0442\u0447\u0435\u0442\u044b \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0432\u0448\u0438\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0430\u0445 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u043a\u0430\u0441\u0441\u0443 \u0438 \u043e\u0442\u0447\u0435\u0442\u044b \u043f\u043e \u0431\u0430\u043b\u0430\u043d\u0441\u0430\u043c \u0432\u0441\u0435\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432 \u043a\u0430\u0441\u0441\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/personal-account/export/export.md",sourceDirName:"personal-account/export",slug:"/personal-account/export/",permalink:"/wiki.interkassa/ru/personal-account/export/",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/personal-account/export/export.md",tags:[],version:"1.0.0",sidebarPosition:7,frontMatter:{sidebar_position:7,label:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439",sidebar_label:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442"},sidebar:"tutorialSidebar",previous:{title:"Email \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f",permalink:"/wiki.interkassa/ru/personal-account/configure-notifications/email-notifications"},next:{title:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439",permalink:"/wiki.interkassa/ru/personal-account/export/payments-export"}},l={},p=[{value:"\u0429\u043e \u043c\u043e\u0436\u043d\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0432 \u041e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u043c\u0443 \u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0456?",id:"\u0449\u043e-\u043c\u043e\u0436\u043d\u0430-\u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438-\u0432-\u043e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u043c\u0443-\u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0456",level:3}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442-\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u043e\u0442\u0447\u0435\u0442 \u043e\u0431 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043a\u043e\u043d\u0440\u0435\u0442\u043d\u043e\u0439 \u043a\u0430\u0441\u0441\u044b, \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0432 \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438\u0437 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0430. \u0421\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0439\u0442\u0435 \u043e\u0442\u0447\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0440\u0443\u0447\u043d\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0443\u043a\u0430\u0437\u0430\u0432 \u0434\u0430\u0442\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u043e\u043b\u044f\u0445 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u043c. \u0418\u043b\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043e\u0442\u0447\u0435\u0442\u044b \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0432\u0448\u0438\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0430\u0445 \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u043a\u0430\u0441\u0441\u0443 \u0438 \u043e\u0442\u0447\u0435\u0442\u044b \u043f\u043e \u0431\u0430\u043b\u0430\u043d\u0441\u0430\u043c \u0432\u0441\u0435\u0445 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u0432 \u043a\u0430\u0441\u0441\u044b."),(0,a.kt)("h3",{id:"\u0449\u043e-\u043c\u043e\u0436\u043d\u0430-\u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438-\u0432-\u043e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u043c\u0443-\u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0456"},"\u0429\u043e \u043c\u043e\u0436\u043d\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0432 \u041e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u043c\u0443 \u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0456?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/wiki.interkassa/ru/personal-account/export/payments-export"},"\u041f\u043b\u0430\u0442\u0435\u0436\u0438"))," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/wiki.interkassa/ru/personal-account/export/withdrawals-export"},"\u0412\u044b\u0432\u043e\u0434\u044b \u0441\u0440\u0435\u0434\u0441\u0442\u0432"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/wiki.interkassa/ru/personal-account/export/transfers-export"},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b")))),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/checkout"},"'\u041c\u043e\u0438 \u043a\u0430\u0441\u0441\u044b'")),". \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0441\u0441\u0443, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430."),(0,a.kt)("div",{class:"text-center smaller"},(0,a.kt)("img",{src:r(843).Z,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u0441\u0441\u044b"}),(0,a.kt)("p",{class:"img-description"},"\u0418\u043a\u043e\u043d\u043a\u0430 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0430\u0441\u0441\u044b")),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},843:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-ru-76964695a61ec536204d7f4d0b1545cc.png"}}]);