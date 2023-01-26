"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[5714],{9465:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));r(1839);const i={unlisted:!0,slug:"/mastercard-in-kzt",id:"mastercard-in-kzt"},m="Depositing via Mastercard",o={unversionedId:"merchant-instructions/mastercard-in-kzt",id:"version-1.0.0/merchant-instructions/mastercard-in-kzt",title:"Depositing via Mastercard",description:"Payment method and currency",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/appex-mastercard-in-kzt.md",sourceDirName:"merchant-instructions",slug:"/mastercard-in-kzt",permalink:"/wiki.interkassa/ru/mastercard-in-kzt",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/appex-mastercard-in-kzt.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/mastercard-in-kzt",id:"mastercard-in-kzt"}},s={},l=[{value:"Payment method and currency",id:"payment-method-and-currency",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Request example",id:"request-example",level:2}],d={toc:l};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"depositing-via-mastercard"},"Depositing via Mastercard"),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,n.kt)("h2",{id:"payment-method-and-currency"},"Payment method and currency"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'ik_payment_method="mastercard"\nik_payment_currency="KZT"\n')),(0,n.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ik_co_id")),(0,n.kt)("td",{parentName:"tr",align:null},"Checkout ID"),(0,n.kt)("td",{parentName:"tr",align:null},"4f269503a1da92c807000002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ik_pm_no")),(0,n.kt)("td",{parentName:"tr",align:null},"Payment number according to your billing system"),(0,n.kt)("td",{parentName:"tr",align:null},"14533; ID_4233")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ik_cur")),(0,n.kt)("td",{parentName:"tr",align:null},"Payment currency"),(0,n.kt)("td",{parentName:"tr",align:null},"KZT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ik_am")),(0,n.kt)("td",{parentName:"tr",align:null},"Payment amount"),(0,n.kt)("td",{parentName:"tr",align:null},"1.43; 43")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"ik_desc")),(0,n.kt)("td",{parentName:"tr",align:null},"Payment description"),(0,n.kt)("td",{parentName:"tr",align:null},"Thanks for using out service!")))),(0,n.kt)("h2",{id:"request-example"},"Request example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://sci.interkassa.com' \\\n--form 'ik_act=\"process\"' \\\n--form 'ik_desc=\"jhtest33\"' \\\n--form 'ik_int=\"json\"' \\\n--form 'ik_co_id=\"*****\"' \\\n--form 'ik_pm_no=\"asdj123\"' \\\n--form 'ik_am=\"1\"' \\\n--form 'ik_cur=\"****\"' \\\n--form 'ik_payment_method =\"mastercard\"' \\\n--form 'ik_payment_currency=\"KZT\"' \\\n--form 'ik_customer_first_name=\"John\"' \\\n--form 'ik_customer_last_name=\"Smith\"' \\\n--form 'ik_sub_acc_no=\"454353\"'\n--form 'ik_browser_color_depth=\"24\"'\n--form 'ik_customer_mop_type=\"**********\"'\n--form 'ik_browser_ip_address=\"35.195.105.151\"'\n--form 'ik_browser_languag=\"uk-UA\"'\n--form 'ik_browser_screen_height=\"1080\"'\n--form 'ik_browser_screen_widtht=\"1920\"'\n--form 'ik_browser_time_zone=\"Europe/Kiev\"'\n--form 'ik_browser_time_zone_offset=\"-120\"'\n--form 'ik_browser_java_enabled=\"false\"'\n--form 'ik_browser_java_script_enabled=\"true\"'\n--form 'ik_browser_accept_header=\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8\"'\n--form'ik_browser_user_agent=\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36\"'\n")))}k.isMDXComponent=!0}}]);