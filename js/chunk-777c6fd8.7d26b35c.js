(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-777c6fd8"],{"0643":function(e,t,n){"use strict";n("7992")},"14a4":function(e,t,n){"use strict";n("4fda")},1862:function(e,t,n){"use strict";var c=n("7a23");Object(c["pushScopeId"])("data-v-69d3abc4");var r={class:"card-header"},a={class:"item"};function o(e,t,n,o,i,s){var l=Object(c["resolveComponent"])("el-card");return Object(c["openBlock"])(),Object(c["createBlock"])(l,{class:"box-card"},{header:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.title),1)])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",a,[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)])]})),_:3})}Object(c["popScopeId"])();var i=Object(c["defineComponent"])({components:{},props:{title:{type:String,default:"Title"}},setup:function(){return{}}}),s=(n("14a4"),n("d959")),l=n.n(s);const d=l()(i,[["render",o],["__scopeId","data-v-69d3abc4"]]);var u=d;t["a"]=u},"1ddf":function(e,t,n){},"1e0a":function(e,t,n){"use strict";n("1ddf")},"4fda":function(e,t,n){},5779:function(e,t,n){"use strict";n("6df9")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var c=n("1d80"),r=n("5899"),a="["+r+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(e){return function(t){var n=String(c(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},"6df9":function(e,t,n){},7992:function(e,t,n){},a9e3:function(e,t,n){"use strict";var c=n("83ab"),r=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),s=n("c6b6"),l=n("7156"),d=n("c04e"),u=n("d039"),p=n("7c73"),b=n("241c").f,f=n("06cf").f,O=n("9bf2").f,j=n("58a8").trim,m="Number",v=r[m],E=v.prototype,N=s(p(E))==m,h=function(e){var t,n,c,r,a,o,i,s,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=j(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+l}for(a=l.slice(2),o=a.length,i=0;i<o;i++)if(s=a.charCodeAt(i),s<48||s>r)return NaN;return parseInt(a,c)}return+l};if(a(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var I,k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(N?u((function(){E.valueOf.call(n)})):s(n)!=m)?l(new v(h(t)),n,k):h(t)},g=c?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;g.length>x;x++)i(v,I=g[x])&&!i(k,I)&&O(k,I,f(v,I));k.prototype=E,E.constructor=k,o(r,m,k)}},b07e:function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["pushScopeId"])("data-v-1f5508cc");var r={class:"overview"},a=Object(c["createElementVNode"])("div",{class:"c-left"}," 本項目是基於Vue3、Vuex、VueRouter、ElementPlus、TypeScript、Echart等技術的後台解決方案，項目中所有數據都是使用Mock.js進行模擬 ",-1),o=Object(c["createElementVNode"])("div",{class:"c-left"},"統一使用npm run commit進行命令行交互式提交",-1);function i(e,t,n,i,s,l){var d=Object(c["resolveComponent"])("BaseCard"),u=Object(c["resolveComponent"])("BaseTextLink"),p=Object(c["resolveComponent"])("BaseDescriptions");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(d,{title:"簡介"},{default:Object(c["withCtx"])((function(){return[a]})),_:1}),Object(c["createVNode"])(d,{title:"技術棧"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{"text-arrs":e.technologyStacks},null,8,["text-arrs"])]})),_:1}),Object(c["createVNode"])(d,{title:"項目規範"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{title:"全局變量",column:1,"table-datas":[{name:"VUE_APP_API",description:"後端API的baseURL"}]}),Object(c["createVNode"])(p,{title:"文件命名規範",column:1,"table-datas":[{name:"文件夾",description:"小寫，多個單詞使用-分割，EX: nav-bar"},{name:"文件(.ts .vue .json .d.ts)",description:"小寫，多個單詞使用-分割，EX: nav-header.vue"}]},null,8,["table-datas"]),Object(c["createVNode"])(p,{title:"組件編寫規範",column:1,"table-datas":[{name:"組件結構",description:"放在src資料夾下，統一於index.ts中導出"},{name:"組件名稱",description:"除了全局導入的組件，統一大寫駝峰，EX: NavHeader"},{name:"組件樣式",description:"小寫，多個單詞使用-分割，EX: nav-header"}]},null,8,["table-datas"])]})),_:1}),Object(c["createVNode"])(d,{title:"git提交規範"},{default:Object(c["withCtx"])((function(){return[o]})),_:1})])}Object(c["popScopeId"])();n("b0c0"),n("a4d3"),n("e01a");Object(c["pushScopeId"])("data-v-98f06eac");var s={class:"description"};function l(e,t,n,r,a,o){var i=Object(c["resolveComponent"])("el-descriptions-item"),l=Object(c["resolveComponent"])("el-descriptions");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createVNode"])(l,{class:"margin-top",title:e.title,column:e.column,border:""},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.tableDatas,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:t},{label:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.description),1)]})),_:2},1024)})),128))]})),_:1},8,["title","column"])])}Object(c["popScopeId"])();n("a9e3");var d=Object(c["defineComponent"])({components:{},props:{title:{type:String,default:""},column:{type:Number,default:1},tableDatas:{type:Array,default:function(){return[]}}},setup:function(){return{}}}),u=(n("0643"),n("d959")),p=n.n(u);const b=p()(d,[["render",l],["__scopeId","data-v-98f06eac"]]);var f=b,O=f;Object(c["pushScopeId"])("data-v-28068759");var j={class:"text-link"},m={class:"title"},v={class:"primary"};function E(e,t,n,r,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",j,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.textArrs,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:"item"},[Object(c["createElementVNode"])("span",m,Object(c["toDisplayString"])(e.title)+" : ",1),Object(c["createElementVNode"])("span",v,Object(c["toDisplayString"])(e.desp),1)])})),128))])}Object(c["popScopeId"])();var N=Object(c["defineComponent"])({props:{textArrs:{type:Array,default:function(){return[]}}},setup:function(){return{}}});n("5779");const h=p()(N,[["render",E],["__scopeId","data-v-28068759"]]);var I=h,k=I,g=n("1862"),x=[{title:"構建工具",desp:"Webpack5.x"},{title:"前端框架",desp:"Vue 3.x"},{title:"UI框架",desp:"Element Plus"},{title:"可視化",desp:"Echart5.x"},{title:"文本編輯器",desp:"WangEditor"},{title:"Git Hook 工具",desp:"husky"},{title:"程式碼規範",desp:"EditorConfig + Prettier + ESLint"},{title:"提交規範",desp:"Commitizen + Commitlint"},{title:"組件模板建構",desp:"plop"}],C=Object(c["defineComponent"])({components:{BaseCard:g["a"],BaseTextLink:k,BaseDescriptions:O},setup:function(){return{technologyStacks:x}}});n("1e0a");const S=p()(C,[["render",i],["__scopeId","data-v-1f5508cc"]]);t["default"]=S}}]);
//# sourceMappingURL=chunk-777c6fd8.7d26b35c.js.map