(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],[,function(e,t,a){e.exports={wrapper:"CounterSettings_wrapper__1ojDv",screen:"CounterSettings_screen__3GWrs",startValue:"CounterSettings_startValue__3kpJe",maxValue:"CounterSettings_maxValue__2PBOS",inputDefault:"CounterSettings_inputDefault__W_cAQ",error:"CounterSettings_error__7DTba"}},,function(e,t,a){e.exports={classCount:"counter_classCount__2zgpv",title:"counter_title__3pxdP",counterTitle:"counter_counterTitle__1Pi-j",buttonInc:"counter_buttonInc__2YZeT",disable:"counter_disable__aar9_",opacity:"counter_opacity__3PQW_",error:"counter_error__2hdyr",count:"counter_count__yQg6n"}},,,function(e,t,a){e.exports={setButton:"ButtonSettings_setButton__2mpfL"}},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(5),l=a.n(u),o=(a(12),a(2)),c=a(3),s=a.n(c),i=a(6),m=a.n(i);function _(e){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.setButton},r.a.createElement("button",{onClick:function(t){e.onClickSet(e.startValue,e.maxValue)},disabled:e.disabled},e.title)))}function p(e){return r.a.createElement("div",null,r.a.createElement("div",{className:s.a.classCount},r.a.createElement("div",{className:s.a.counterTitle},e.title),r.a.createElement("div",{className:e.count===e.maxValue?s.a.disable:""},r.a.createElement("div",{className:e.error?s.a.disable:""},e.error?e.error:e.count),r.a.createElement(_,{title:"inc",onClickSet:function(){return e.setCount(e.count+1)},disabled:e.count===e.maxValue,maxValue:e.maxValue,startValue:e.startValue}),r.a.createElement(_,{title:"reset",onClickSet:function(){return e.setCount(e.startValue)},disabled:e.count===e.startValue,maxValue:e.maxValue,startValue:e.startValue}))))}a(13);var d=a(1),b=a.n(d);function V(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),u=a[0],l=a[1],c=Object(n.useState)(5),s=Object(o.a)(c,2),i=s[0],m=s[1],p=function(e,t){return e>=0&&t>e};return r.a.createElement("div",{className:b.a.wrapper},r.a.createElement("div",{className:b.a.screen},r.a.createElement("div",{className:b.a.maxValue},r.a.createElement("span",null,"max value "),r.a.createElement("input",{onChange:function(t){m(Number(t.currentTarget.value)),p(u,i)?e.setError(""):e.setError("Invalid input")},value:i,type:"number",className:i>=0&&i>u?b.a.inputDefault:b.a.error})),r.a.createElement("div",{className:b.a.startValue},r.a.createElement("span",null,"start value"),r.a.createElement("input",{onChange:function(t){l(Number(t.currentTarget.value)),p(u,i)?e.setError(""):e.setError("Invalid input")},value:u,type:"number",className:u>=0&&u<i?b.a.inputDefault:b.a.error}))),r.a.createElement(_,{maxValue:i,startValue:u,disabled:u<0||u>=i,title:"set",onClickSet:e.onClickSet}))}var v=function(){var e=Object(n.useState)(Number(localStorage.getItem("startValue"))),t=Object(o.a)(e,2),a=t[0],u=t[1],l=Object(n.useState)(Number(localStorage.getItem("maxValue"))||5),c=Object(o.a)(l,2),s=c[0],i=c[1],m=Object(n.useState)(a),_=Object(o.a)(m,2),d=_[0],b=_[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),S=E[0],g=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement(p,{error:S,setCount:b,count:d,title:"Counter",maxValue:s,startValue:a}),r.a.createElement(V,{setError:g,onClickSet:function(e,t){b(e),u(e),i(t),localStorage.setItem("startValue",e.toString()),localStorage.setItem("maxValue",t.toString())},maxValue:s,startValue:a,setStartValue:u,setMaxValue:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ccaf1e48.chunk.js.map