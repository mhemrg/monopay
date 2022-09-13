"use strict";(self.webpackChunkmonopay_docs=self.webpackChunkmonopay_docs||[]).push([[558],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(9558),s=t(6010),c="tabItem_1uMI";function m(e){var n,t,a,i=e.lazy,o=e.block,m=e.defaultValue,d=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,u.lx)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],x=w[1],C=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=k[p];null!=E&&E!==T&&y.some((function(e){return e.value===E}))&&x(E)}var I=function(e){var n=e.currentTarget,t=C.indexOf(n),a=y[t].value;a!==T&&(P(n),x(a),null!=p&&N(p,a))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},y.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:I,onClick:I},null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},5875:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(5064),l=t(8215),u=t(6213),s=["components"],c={sidebar_position:3,title:"Verify Payment"},m=void 0,d={unversionedId:"usage/verify-payment",id:"usage/verify-payment",isDocsHomePage:!1,title:"Verify Payment",description:"The verifyPayment method accepts 2 arguments:",source:"@site/docs/usage/verify-payment.mdx",sourceDirName:"usage",slug:"/usage/verify-payment",permalink:"/docs/usage/verify-payment",editUrl:"https://github.com/alitnk/monopay/edit/documentation/docs/usage/verify-payment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Verify Payment"},sidebar:"tutorialSidebar",previous:{title:"Send User to Payment Page",permalink:"/docs/usage/send-user"},next:{title:"Catching Exceptions",permalink:"/docs/usage/catching-exceptions"}},p=[],v={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," method accepts 2 arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an object, containing ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"referenceId")," of transaction."),(0,i.kt)("li",{parentName:"ol"},"request parameters in the callback route")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "monopay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  { ...request.params, ...request.body }\n);\n')),(0,i.kt)(l.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)(u.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "monopay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  { ...request.params, ...request.body }\n);\n'))),(0,i.kt)("p",null,"This method returns you a ",(0,i.kt)("inlineCode",{parentName:"p"},"receipt")," that will contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionId")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"panCard")," and some other info about the payment.\nAt this point the payment process is finished and you can provide your service/product to the user."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," function might throw ",(0,i.kt)("inlineCode",{parentName:"p"},"VerificationException")))))}f.isMDXComponent=!0}}]);