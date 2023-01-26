"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[2338],{750:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));n(1839);const i={unlisted:!0,slug:"/card-in-azn",id:"card-in-azn"},l="Depositing from a bank card",m={unversionedId:"merchant-instructions/card-in-azn",id:"version-1.0.0/merchant-instructions/card-in-azn",title:"Depositing from a bank card",description:"Payment method and currency",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/tripplec-card-in-azn.md",sourceDirName:"merchant-instructions",slug:"/card-in-azn",permalink:"/wiki.interkassa/card-in-azn",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/tripplec-card-in-azn.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/card-in-azn",id:"card-in-azn"}},o={},d=[{value:"Payment method and currency",id:"payment-method-and-currency",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Request example",id:"request-example",level:2}],s={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depositing-from-a-bank-card"},"Depositing from a bank card"),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,r.kt)("h2",{id:"payment-method-and-currency"},"Payment method and currency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ik_payment_method="card"\nik_payment_currency="AZN"\n')),(0,r.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_co_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkout ID"),(0,r.kt)("td",{parentName:"tr",align:null},"4f269503a1da92c807000002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_pm_no")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment number according to your billing system"),(0,r.kt)("td",{parentName:"tr",align:null},"14533; ID_4233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_cur")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment currency"),(0,r.kt)("td",{parentName:"tr",align:null},"AZN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_am")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1.43; 43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_desc")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment description"),(0,r.kt)("td",{parentName:"tr",align:null},"Thanks for using out service!")))),(0,r.kt)("h2",{id:"request-example"},"Request example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://sci.interkassa.com' \\\n--form 'ik_act=\"process\"' \\\n--form 'ik_desc=\"jhtest33\"' \\\n--form 'ik_int=\"json\"' \\\n--form 'ik_co_id=\"*****\"' \\\n--form 'ik_pm_no=\"asdj123\"' \\\n--form 'ik_am=\"1\"' \\\n--form 'ik_cur=\"****\"' \\\n--form 'ik_payment_method =\"card\"' \\\n--form 'ik_payment_currency=\"AZN\"' \\\n")))}c.isMDXComponent=!0}}]);