"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[377],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),y=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,a.useState)(b),k=h[0],x=h[1],C=[];if(null!=p){var T=y[p];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&x(T)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;x(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},6861:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),c=n(8215),l=n(6213),s=["components"],u={sidebar_position:2,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc"},p=void 0,d={unversionedId:"best-practices/configuration",id:"best-practices/configuration",isDocsHomePage:!1,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc",description:"\u0627\u06af\u0631 \u0627\u0632 \u0686\u0646\u062f \u062f\u0631\u0627\u06cc\u0648\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0628\u0633\u0627\u0632\u06cc\u062f \u0648 \u0647\u0645\u0647 \u06cc \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/best-practices/configuration.mdx",sourceDirName:"best-practices",slug:"/best-practices/configuration",permalink:"/polypay.js/fa/docs/best-practices/configuration",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/best-practices/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc"},sidebar:"tutorialSidebar",previous:{title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)",permalink:"/polypay.js/fa/docs/best-practices/catching-exceptions"},next:{title:"\u0646\u0645\u0648\u0646\u0647 \u0647\u0627",permalink:"/polypay.js/fa/docs/examples"}},m=[],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0627\u06af\u0631 \u0627\u0632 \u0686\u0646\u062f \u062f\u0631\u0627\u06cc\u0648\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0628\u0633\u0627\u0632\u06cc\u062f \u0648 \u0647\u0645\u0647 \u06cc \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-ts",title:"polypay-config.ts",mdxType:"CodeBlock"},'import { ConfigObject } from "polypay";\n\nexport const polypayConfig: ConfigObject = {\n  zarinpal: {\n    merchantId: "zarinpal-merchant",\n    sandbox: true,\n  },\n  zibal: {\n    merchantId: "zibal-merchant",\n    sandbox: true,\n  },\n};\n')),(0,o.kt)(c.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-js",title:"polypay-config.js",mdxType:"CodeBlock"},'/** @type {import("polypay.js").ConfigObject} */\nexport const polypayConfig = {\n    zarinpal: {\n        merchantId: "zarinpal-merchant",\n        sandbox: true,\n    },\n    zibal: {\n        merchantId: "zibal-merchant",\n        sandbox: true,\n    }\n}\n'))),(0,o.kt)("p",null,"\u0648 \u0633\u067e\u0633 \u062f\u0631 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f\u060c \u0622\u0646 \u0631\u0627 \u0627\u06cc\u0645\u067e\u0648\u0631\u062a \u06a9\u0646\u06cc\u062f."))}b.isMDXComponent=!0}}]);