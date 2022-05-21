(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(18),n(5)),l=n(2),i=n(1),r=(n(19),n(0));var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})};n(21);var j=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},u=(n(22),function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(j,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:[e.amount,"\u20ac"]})]})]})})}),d=function(e){return 0===e.expenses.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Sem despesas.."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.expenses.map((function(e){return Object(r.jsx)(u,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},b=(n(23),n(24),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filtrar por ano"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onYearChange(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(9),v=(n(25),n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Fev",value:0},{label:"Mar",value:0},{label:"Abr",value:0},{label:"Mai",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Ago",value:0},{label:"Set",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})};var p=function(e){var t=Object(i.useState)("2021"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.expenses.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(j,{className:"expenses",children:[Object(r.jsx)(b,{selected:a,onYearChange:function(e){c(e)}}),Object(r.jsx)(h,{expenses:s}),Object(r.jsx)(d,{expenses:s})]})})},m=n(6),f=(n(27),n(28),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),o=Object(l.a)(s,2),j=o[0],u=o[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),u(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Titulo"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"",children:"Valor"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Data"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancelar"}),Object(r.jsx)("button",{type:"submit",children:"Adicionar despesa"})]})]})}),N=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Adicionar Nova Despesa"}),a&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})},_=[{id:"e1",title:"Papel Higi\xe9nico",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Bicicleta",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"Mesa Nova",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(i.useState)(_),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))})),console.log(e)}}),Object(r.jsx)(p,{expenses:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b1b0820d.chunk.js.map