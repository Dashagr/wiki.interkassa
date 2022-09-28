"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),a=r(6010),o=r(2802),i=r(9960),c=r(3919),s=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},8741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2991);const i={sidebar_position:1,label:"\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 Interkassa",sidebar_label:"\u041f\u043e\u0447\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443",id:"get-started"},c="\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 Interkassa",s={unversionedId:"get-started/get-started",id:"get-started/get-started",title:"\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 Interkassa",description:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438 \u043f\u043b\u0430\u0442\u0435\u0436\u0456 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043f\u0440\u043e\u0441\u0442\u0438\u0445 \u0435\u0442\u0430\u043f\u0456\u0432:",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/docusaurus_demo/uk/get-started/",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/get-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,label:"\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 Interkassa",sidebar_label:"\u041f\u043e\u0447\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443",id:"get-started"},sidebar:"tutorialSidebar",previous:{title:"\u0406\u043d\u0442\u0440\u043e",permalink:"/docusaurus_demo/uk/intro"},next:{title:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u0433\u043e \u0430\u043a\u0430\u0443\u043d\u0442\u0443",permalink:"/docusaurus_demo/uk/get-started/create-a-personal-account"}},l={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0447\u0430\u0442\u043e\u043a-\u0440\u043e\u0431\u043e\u0442\u0438-\u0437-interkassa"},"\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 Interkassa"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438 \u043f\u043b\u0430\u0442\u0435\u0436\u0456 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043f\u0440\u043e\u0441\u0442\u0438\u0445 \u0435\u0442\u0430\u043f\u0456\u0432:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0438\u0439 \u0430\u043a\u0430\u0443\u043d\u0442 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0456;"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0439\u0442\u0438 \u043e\u043f\u0438\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0432 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u043e\u043c\u0443 \u043a\u0430\u0431\u0456\u043d\u0435\u0442\u0456 \u0442\u0430 \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0438 \u0437 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u043c \u0430\u043a\u0430\u0443\u043d\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c \u043f\u043b\u0430\u0442\u0456\u0436\u043d\u0456 \u043c\u0435\u0442\u043e\u0434\u0438, \u044f\u043a\u0456 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0456 \u0412\u0430\u0448\u043e\u043c\u0443 \u0431\u0456\u0437\u043d\u0435\u0441\u0443;"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u043f\u043b\u0430\u0442\u0456\u0436\u043d\u0443 \u0444\u043e\u0440\u043c\u0443 \u0442\u0430 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0457\u0457 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0457 \u043f\u043b\u0430\u0442\u0456\u0436\u043d\u043e\u0457 \u0441\u0438\u0441\u0442\u0435\u043c\u0438;"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0456\u044e \u0441\u0430\u0439\u0442\u0443;"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u043e\u0447\u0430\u0442\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438 \u043f\u043b\u0430\u0442\u0435\u0436\u0456 \u0432\u0456\u0434 \u043a\u043b\u0456\u0454\u043d\u0442\u0456\u0432.")),(0,a.kt)("p",null,"\u0423 \u0441\u0442\u0430\u0442\u0442\u044f\u0445 \u0434\u0430\u043b\u0456 \u0437\u043d\u0430\u0445\u043e\u0434\u044f\u0442\u044c\u0441\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0456 \u0442\u0443\u0442\u043e\u0440\u0456\u0430\u043b\u0438, \u044f\u043a\u0456 \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0443\u0442\u044c \u0412\u0430\u043c \u043f\u0440\u043e\u0439\u0442\u0438 \u043a\u043e\u0436\u0435\u043d \u0437 \u0435\u0442\u0430\u043f\u0456\u0432. "),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);