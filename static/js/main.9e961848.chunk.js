(this["webpackJsonpkanban-react"]=this["webpackJsonpkanban-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(5),n=a.n(i),l=a(2),r=(a(10),a(11),a(0));function o(e){const{type:t="button",style:a,children:s}=e;return Object(r.jsx)("button",{className:"base-button",type:t,style:a,onClick:e.onClick,children:s})}a(13);var m=e=>{const{title:t="Empty",visibility:a=!1,setVisibility:s,children:c}=e;return a&&Object(r.jsxs)("div",{className:"modal-container",children:[Object(r.jsx)("div",{className:"modal-overlay",onClick:e=>{s(!1),e.stopPropagation()}}),Object(r.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("button",{className:"btn-close",onClick:()=>s(!1),children:"\u2715"})]}),c]})]})},d=(a(14),a.p+"static/media/sideBarIcon.a1a276e7.svg"),j=a.p+"static/media/homeIcon.4faf1699.svg",b=a.p+"static/media/plusIcon.bffdf87a.svg",p=a.p+"static/media/logoutIcon.49add009.svg",u=a.p+"static/media/VINNBOX-BRANCA.3dbed849.png";function h(e){const{openModal:t,entityName:a}=e,[s,c]=Object(l.f)();return Object(r.jsxs)("div",{className:"sidebar-container",children:[Object(r.jsx)("input",{type:"image",src:d,alt:"menu",title:"Expandir menu"}),Object(r.jsx)("input",{type:"image",src:j,alt:"home",className:"/home"===s?"active":"",onClick:()=>c("/home"),title:"Ir para in\xedcio"}),Object(r.jsx)("input",{type:"image",src:b,onClick:t,alt:"plus",title:`Adicionar ${a}`}),Object(r.jsxs)("div",{className:"container-bottom",children:[Object(r.jsx)(l.a,{href:"/login",children:Object(r.jsx)("input",{type:"image",src:p,alt:"logout",title:"Encerrar sess\xe3o"})}),Object(r.jsx)("div",{className:"line-bottom"}),Object(r.jsx)("img",{src:u,width:70,height:40,alt:"logo"})]})]})}a(15);var x=a.p+"static/media/searchIcon.42d5fc60.svg";function O(){return Object(r.jsxs)("div",{className:"search-container",children:[Object(r.jsx)("img",{src:x,alt:"search"}),Object(r.jsx)("input",{placeholder:"Pesquisar cards..."})]})}a(16);var g=e=>{const{form:t,onChangeForm:a,onSubmitForm:s}=e;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("main",{children:[Object(r.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(r.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Digite o nome do template",value:t.name,onChange:a}),Object(r.jsx)("label",{htmlFor:"description",children:"Descri\xe7\xe3o"}),Object(r.jsx)("textarea",{id:"description",name:"description",rows:"8",placeholder:"Digite uma descri\xe7\xe3o pro template (opicional)",value:t.description,onChange:a}),Object(r.jsx)("label",{children:"Cor"}),Object(r.jsx)("div",{className:"custom-color-picker",children:["#ff9c9c","#daffd3","#ffe8ad","#c1bcff","#c4c4c4"].map((e=>Object(r.jsx)("div",{className:"color "+(e===t.color?"selected":""),style:{backgroundColor:e},onClick:()=>{a({target:{name:"color",value:e}})}},e)))})]}),Object(r.jsx)("footer",{children:Object(r.jsx)(o,{onClick:s,children:"Confirmar"})})]})},f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAAAPCAYAAAALf9NCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgB7dixDcMwDEVBMsggzqAuPWe0CRM37O3Kgu4AjvDxAGbAIuo4vlG1xVVVI/f9E7CAV8Aq7gThlLkFLEIUAGiiAEATBQCaKADQRAGA9v5fBcwr43lsimmdUXjiqGBmNsW0vI8AaKIAQBMFAJooANBEAYAmCqwjc8QdVSNgET+lZhEjvgq5gAAAAABJRU5ErkJggg==",v=a.p+"static/media/login-footer-img.d1015408.png",N=a.p+"static/media/VINNBOX.b3ccc04a.png",y=a(3),C=a.n(y);var k=()=>{const[e,t]=Object(s.useState)({email:"",password:""}),[,a]=Object(l.f)(),[c,i]=Object(s.useState)(!1),[n,d]=Object(s.useState)(!1),[j,b]=Object(s.useState)("");function p(e){const{value:a,name:s}=e.target;t((e=>({...e,[s]:a})))}function u(e,t,a){return new Promise((function(s,c){let i=C.a.getJSON("users");if(i){const c=Object.keys(i).filter((t=>i[t].email===e)).map((e=>i[e]));a?(console.log(c),c.length>0?(b(c[0].senha),d(!0)):(alert("Email n\xe3o cadastrado! Crie uma conta antes de continuar."),s(!1))):c.length>0?c[0].senha!==t?(alert("Senha inv\xe1lida, tente novamente!"),s(!1)):s(!0):(alert("Email n\xe3o cadastrado! Crie uma conta antes de continuar."),s(!1))}else s(!1)}))}return Object(r.jsxs)("div",{className:"login-wrapper",children:[Object(r.jsx)(m,{title:"Recuperar Senha",visibility:c,setVisibility:i,children:n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{style:{textAlign:"center",marginTop:"25px",marginBottom:"25px",fontFamily:"monospace",fontWeight:600,fontSize:"20px"},children:["Sua senha \xe9: ",j]}),Object(r.jsx)(o,{onClick:()=>(b(""),d(!1),void i(!1)),type:"submit",children:"Confirmar"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{id:"recEmail",type:"email",name:"email",placeholder:"Digite seu email de recupera\xe7\xe3o"}),Object(r.jsx)(o,{onClick:()=>async function(){var e=document.getElementById("recEmail").value;/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)?await u(e,"",!0):alert("Email inv\xe1lido!")}(),type:"button",children:"Recuperar senha"})]})}),Object(r.jsx)("img",{src:N,width:90,height:60,style:{alignSelf:"center"},alt:"logo"}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h2",{className:"title",children:"Fa\xe7a login"}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("form",{onSubmit:async function(e){e.preventDefault();var t=document.getElementById("email").value,s=document.getElementById("pass").value;if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)){await u(t,s,!1)&&a("/home")}else alert("Email inv\xe1lido!")},className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(r.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Digite seu e-mail",value:e.email,onChange:p}),Object(r.jsx)("label",{htmlFor:"pass",children:"Senha"}),Object(r.jsx)("input",{type:"password",name:"password",id:"pass",placeholder:"Digite sua senha",value:e.password,onChange:p}),Object(r.jsx)("span",{className:"forgot-pass-link link-effect",onClick:()=>i(!0),children:"Esqueceu a senha ?"}),Object(r.jsx)(o,{type:"submit",children:"Entrar"})]}),Object(r.jsx)("img",{className:"img-divider",src:f,alt:"divider"}),Object(r.jsxs)("span",{className:"bottom-text",children:["N\xe3o possui uma conta?\xa0",Object(r.jsx)(l.a,{href:"/register",className:"sign-up-link",children:"Crie aqui."})]})]}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img right"}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img left"})]}),Object(r.jsx)("img",{draggable:"false",className:"footer-img",src:v,alt:"background draw"})]})};a(17);var A=()=>{const[,e]=Object(l.f)();return Object(r.jsxs)("div",{className:"register-wrapper",children:[Object(r.jsx)("img",{src:N,width:90,height:60,style:{alignSelf:"center"},alt:"logo"}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h2",{className:"title",children:"Cadastre-se"}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("form",{onSubmit:async function(t){t.preventDefault();var a=document.getElementById("nome").value,s=document.getElementById("email").value,c=document.getElementById("pass").value,i=document.getElementById("conf").value;if(String(a).length<=2)alert("Nome curto demais!");else{if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(s)){if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(c))if(c!==i)alert("As senhas devem ser iguais!");else{let t={nome:a,email:s,senha:c};if(C.a.get("users"))if(await function(e){return new Promise((function(t,a){let s=C.a.getJSON("users");if(s){Object.keys(s).filter((t=>s[t].email===e)).length>0?t(!0):t(!1)}else t(!1)}))}(s))alert("J\xe1 existe um usu\xe1rio cadastrado com esse email!");else{let a=C.a.getJSON("users");a.push(t),C.a.set("users",JSON.stringify(a)),e("/home")}else{let a=[];a.push(t),C.a.set("users",JSON.stringify(a)),e("/home")}}else alert("Senha fraca. Tente adicionar pelo menos 4 caracteres, 1 letra e 1 n\xfamero!")}else alert("Email inv\xe1lido!")}},className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Nome"}),Object(r.jsx)("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite seu nome"}),Object(r.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(r.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Digite seu e-mail"}),Object(r.jsx)("label",{htmlFor:"pass",children:"Senha"}),Object(r.jsx)("input",{type:"password",name:"password",id:"pass",placeholder:"Digite sua senha"}),Object(r.jsx)("label",{htmlFor:"conf",children:"Confirme sua Senha"}),Object(r.jsx)("input",{type:"password",name:"confirmation",id:"conf",placeholder:"Digite sua senha"}),Object(r.jsx)("span",{className:"bottom-text",children:"Ao se cadastrar, voc\xea confirma que leu e aceitou nossos\xa0 Termos de Servi\xe7o e Pol\xedtica de Privacidade."}),Object(r.jsx)(o,{type:"submit",children:"Cadastrar"})]}),Object(r.jsx)("img",{className:"img-divider",src:f,alt:"divider"}),Object(r.jsxs)("span",{className:"bottom-text",children:["J\xe1 possui uma conta?\xa0",Object(r.jsx)(l.a,{href:"/login",className:"sign-up-link",children:"Entre aqui."})]})]}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img right"}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img left"})]})]})};a(18);const S=Object(s.createContext)();function w({children:e}){const[t,a]=Object(s.useState)([{name:"1hr de exerc\xedcios",category:"A fazer",templateName:"Dia a dia"}]),[c,i]=Object(s.useState)([{name:"Dia a dia",description:"Tarefas do di\xe1rias",color:"#ff9c9c",tasks:[{name:"1hr de exerc\xedcios",category:"A fazer"},{name:"Continuar o fluxo de trabalho de DCC070",category:"Em andamento"},{name:"Ler artigos cient\xedficos sobre MIPS, fazer resumos e entregar a diretoria para aprova\xe7\xe3o",category:"Conclu\xeddo"}]},{name:"Faculdade",description:"Mat\xe9rias da faculdade a serem estudadas",color:"#c1bcff",tasks:[]},{name:"Curso de CSS",description:"Tarefas do cursos da Udemy",color:"#c4c4c4",tasks:[]}]);return Object(r.jsx)(S.Provider,{value:{templates:c,setTemplates:i,addTask:function(e,s){c[e]&&(i((t=>{const a=[...t];return a[e].tasks.push(s),a})),a([...t,{...s,templateName:c[e].name}]))},updateTask:function(e,t,a){!c[e]&&t||i((s=>{const c=s[e].tasks.findIndex((e=>e.name===t.name)),i=[...s];return i[e].tasks.splice(c,1),i[e].tasks.push({...a}),i}))},deleteTask:function(e,t){c[e]&&(i((a=>{const s=a[e].tasks.filter((e=>e.name!==t.name)),c=[...a];return c[e].tasks=[...s],c})),a((e=>e.filter((e=>e.name!==t.name)))))},recentTasks:t,setRecentTasks:a},children:e})}function E(){return{...Object(s.useContext)(S)}}var F=a.p+"static/media/task.b993bf80.png";const T={name:"",description:"",color:"#ff9c9c",tasks:[]};var D=function(){const{templates:e,setTemplates:t,recentTasks:a}=E(),[,c]=Object(l.f)(),[i,n]=Object(s.useState)(T),[o,d]=Object(s.useState)(!1);return Object(r.jsxs)("div",{className:"home-wrapper",children:[Object(r.jsx)(h,{openModal:()=>d(!0),entityName:"template"}),Object(r.jsx)(O,{}),Object(r.jsx)(m,{title:"Adicionar Template",visibility:o,setVisibility:d,children:Object(r.jsx)(g,{form:i,onChangeForm:function(e){const{value:t,name:a}=e.target;n((e=>({...e,[a]:t})))},onSubmitForm:function(){i.name&&i.color?e.find((e=>e.name.trim().toUpperCase()===i.name.trim().toUpperCase()))?alert("Campo nome deve ser \xfanico!"):(t([...e,i]),d(!1),n(T)):alert("Campo nome \xe9 obrigat\xf3rio!")}})}),Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{className:"div-templates-container",children:[Object(r.jsx)("h2",{children:" Seus templates "}),Object(r.jsx)("div",{className:"div-templates",children:0===e.length?Object(r.jsx)("p",{children:" Voc\xea ainda n\xe3o possui templates."}):Object(r.jsx)("ul",{className:"list-templates",children:e.map(((e,t)=>Object(r.jsxs)("div",{onClick:()=>{c(`/template/${t}`)},className:"card-template",children:[Object(r.jsx)("span",{className:"name",style:{background:e.color},children:e.name}),Object(r.jsx)("p",{className:"description",children:e.description?e.description:"Sem descri\xe7\xe3o..."})]},e.name+t)))})})]}),Object(r.jsxs)("div",{className:"recent-tasks-container",children:[Object(r.jsx)("h2",{children:" Tarefas adicionados recentemente "}),Object(r.jsx)("ul",{className:"list-templates",children:a.map(((e,t)=>Object(r.jsxs)("div",{className:"card-template",style:{cursor:"default"},children:[Object(r.jsxs)("span",{className:"name",style:{background:"#fff",textAlign:"start",padding:"0.5rem 2rem"},children:[e.category," - ",e.templateName]}),Object(r.jsxs)("p",{className:"description",children:["\u2022 ",e.name]})]},e.name+t)))})]})]}),Object(r.jsx)("img",{src:F,alt:"task"})]})};a(19);var I=function(){const[,e]=Object(l.f)();return Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsx)("img",{draggable:"false",className:"footer-img",src:v,alt:"background draw"}),Object(r.jsx)("h7",{children:"Usu\xe1rio desde: 2020"}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"body",children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("OK"),e("/home")},className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Nome"}),Object(r.jsx)("input",{type:"text",name:"nome",id:"nome",placeholder:""}),Object(r.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(r.jsx)("input",{type:"text",name:"email",id:"email",placeholder:""}),Object(r.jsx)("label",{htmlFor:"pass",children:"Login"}),Object(r.jsx)("input",{type:"text",name:"email",id:"email",placeholder:""}),Object(r.jsx)("label",{htmlFor:"pass",children:"Senha"}),Object(r.jsx)("input",{type:"password",name:"password",id:"pass",placeholder:""}),Object(r.jsx)("label",{htmlFor:"conf",children:"Nova Senha"}),Object(r.jsx)("input",{type:"confirmation",name:"confirmation",id:"conf",placeholder:""}),Object(r.jsx)(o,{type:"submit",children:"Salvar Altera\xe7\xf5es"})]})}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img right"}),Object(r.jsx)("div",{draggable:"false",className:"aside-bg-img left"})]})]})};a(20),a(21);const B=[{name:"A fazer",color:"#FFD3D3"},{name:"Em andamento",color:"#C8E4FF"},{name:"Conclu\xeddo",color:"#DAFFD3"}];var U=e=>{const{form:t,onChangeForm:a,onSubmitForm:s}=e;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("main",{className:"body-modal-task",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(r.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Digite o nome da tarefa",value:t.name,onChange:a}),Object(r.jsx)("label",{children:"Selecione a categoria"}),Object(r.jsx)("ul",{className:"category-picker",children:B.map((e=>Object(r.jsxs)("li",{className:"category "+(e.name===t.category?"selected":""),onClick:()=>{return t=e.name,void a({target:{name:"category",value:t}});var t},children:[Object(r.jsx)("div",{className:"circle",style:{backgroundColor:e.color}}),Object(r.jsx)("span",{children:e.name})]},e.color)))})]}),Object(r.jsx)("footer",{children:Object(r.jsx)(o,{onClick:s,children:"Confirmar"})})]})};const V={name:"",category:"A fazer"},z={name:"",description:"",color:"#ff9c9c",tasks:[]};var J=()=>{const{templates:e,setTemplates:t,addTask:a,deleteTask:c,updateTask:i,setRecentTasks:n}=E(),[,o]=Object(l.g)("/template/:index"),[,d]=Object(l.f)(),[j,b]=Object(s.useState)(null),[p,u]=Object(s.useState)("create"),[x,f]=Object(s.useState)(V),[v,N]=Object(s.useState)(null),[y,C]=Object(s.useState)(!1),[k,A]=Object(s.useState)(!1),[S,w]=Object(s.useState)(z),[F,T]=Object(s.useState)(!1);function D(e){u("edit"),N({...e}),f({...e}),C(!0)}return Object(s.useEffect)((()=>{o&&e[o.index]?b({...e[parseInt(o.index)]}):d("/home")}),[e]),j&&Object(r.jsxs)("div",{className:"template-tasks-wrapper",children:[Object(r.jsx)(h,{openModal:function(){u("create"),f(V),C(!0)},entityName:"tarefa"}),Object(r.jsx)(O,{}),Object(r.jsxs)("section",{className:"template-info",children:[Object(r.jsxs)("h1",{children:[j.name,Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{onClick:function(){w({...j}),T(!0)},children:"..."}),Object(r.jsx)("button",{onClick:()=>A(!0),children:"\u2715"})]})]}),Object(r.jsxs)("p",{children:["Descri\xe7\xe3o: ",j.description]})]}),Object(r.jsx)("section",{className:"task-titles"}),Object(r.jsxs)("section",{className:"kanban-wrapper",children:[Object(r.jsxs)("div",{className:"column to-do",children:[Object(r.jsx)("span",{className:"title",children:"A fazer"}),Object(r.jsx)("ul",{className:"list-tasks",children:j.tasks.filter((e=>"A fazer"===e.category)).map(((e,t)=>Object(r.jsxs)("li",{className:"item",children:[Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{onClick:()=>D(e),children:"..."}),Object(r.jsx)("button",{onClick:()=>c(o.index,e),children:"\u2715"})]}),"\u2022 ",e.name]},t+e.name+e.category)))})]}),Object(r.jsx)("div",{className:"column doing",children:Object(r.jsxs)("ul",{className:"list-tasks",children:[Object(r.jsx)("span",{className:"title",children:"Em andamento"}),j.tasks.filter((e=>"Em andamento"===e.category)).map(((e,t)=>Object(r.jsxs)("li",{className:"item",children:[Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{onClick:()=>D(e),children:"..."}),Object(r.jsx)("button",{onClick:()=>c(o.index,e),children:"\u2715"})]}),"\u2022 ",e.name]},t+e.name+e.category)))]})}),Object(r.jsxs)("div",{className:"column completed",children:[Object(r.jsx)("span",{className:"title",children:"Conclu\xeddo"}),Object(r.jsx)("ul",{className:"list-tasks",children:j.tasks.filter((e=>"Conclu\xeddo"===e.category)).map(((e,t)=>Object(r.jsxs)("li",{className:"item",children:[Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{onClick:()=>D(e),children:"..."}),Object(r.jsx)("button",{onClick:()=>c(o.index,e),children:"\u2715"})]}),"\u2022 ",e.name]},t+e.name+e.category)))})]})]}),Object(r.jsx)(m,{title:"Excluir",visibility:k,setVisibility:A,children:Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("p",{className:"title-modal-delete",children:["Tem certeza que deseja excluir o template ",j.name,"?"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{className:"body-modal-delete",children:["\u2022 Voc\xea possui"," ",1===j.tasks.length?j.tasks.length+" card adicionado":j.tasks.length+" cards adicionados"," ","a esse template."]})]}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("button",{className:"btn-left",onClick:()=>A(!1),children:"Voltar"}),Object(r.jsx)("button",{className:"btn-right",onClick:()=>(d("/home"),n((e=>e.filter((e=>!j.tasks.some((t=>t.name===e.name)))))),void t((e=>e.filter((e=>e.name!==j.name))))),children:"Confirmar"})]})]})}),Object(r.jsx)(m,{title:"create"===p?"Adicionar Tarefa":"Editar Tarefa",visibility:y,setVisibility:C,children:Object(r.jsx)(U,{form:x,onChangeForm:function(e){const{value:t,name:a}=e.target;f((e=>({...e,[a]:t})))},onSubmitForm:function(){if(x.name&&x.category){if("create"===p){if(j.tasks.find((e=>e.name.trim().toUpperCase()===x.name.trim().toUpperCase())))return void alert("Campo nome deve ser \xfanico!");x.index=j.tasks.length,a(o.index,x),f(V)}else i(o.index,v,x);C(!1)}else alert("Campo nome \xe9 obrigat\xf3rio!")}})}),Object(r.jsx)(m,{title:"Editar Template",visibility:F,setVisibility:T,children:Object(r.jsx)(g,{form:S,onChangeForm:function(e){const{value:t,name:a}=e.target;w((e=>({...e,[a]:t})))},onSubmitForm:function(){if(!S.name||!S.color)return void alert("Campo nome \xe9 obrigat\xf3rio!");if(e.filter((e=>e.name.trim().toUpperCase()!==j.name.trim().toUpperCase())).find((e=>e.name.trim().toUpperCase()===S.name.trim().toUpperCase())))return void alert("Campo nome deve ser \xfanico!");const a=e.findIndex((e=>e.name.trim().toUpperCase()===j.name.trim().toUpperCase())),s=[...e];s[a]={...S},t(s),T(!1),w(z)}})})]})};var R=function(){return Object(r.jsx)(l.d,{base:"/VinnBox",children:Object(r.jsx)(w,{children:Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(l.e,{children:[Object(r.jsx)(l.c,{path:"/login",component:k}),Object(r.jsx)(l.c,{path:"/register",component:A}),Object(r.jsx)(l.c,{path:"/home",component:D}),Object(r.jsx)(l.c,{path:"/profile",component:I}),Object(r.jsx)(l.c,{path:"/template/:index",component:J}),Object(r.jsx)(l.b,{from:"*",to:"/login"})]})})})})};a(22);n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9e961848.chunk.js.map