var e=Object.defineProperty,t=(t,s,n)=>(((t,s,n)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n})(t,"symbol"!=typeof s?s+"":s,n),n);export function __vite_legacy_guard(){import("data:text/javascript,")}import{j as s,R as n,r as i,a as o}from"./vendor.8e8af136.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const r=s.exports.jsx,l=s.exports.jsxs,a=s.exports.Fragment;class h extends n.Component{render(){const e=this.props.todos.filter((e=>!e.isDone)).length;return l(a,{children:[l("div",{children:["Всего задач: ",this.props.todos.length]}),l("div",{children:["Осталось выполнить: ",e]})]})}}var c,d,p="_flex-wrapper_nk4yk_1",u="_input_nk4yk_10",m="_create-button_nk4yk_29",f="_create-icon_nk4yk_34";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},g.apply(this,arguments)}var v=function(e){return i.exports.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e),c||(c=i.exports.createElement("path",{d:"M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"})),d||(d=i.exports.createElement("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"})))};class _ extends n.Component{constructor(){super(...arguments),t(this,"textareaRef",n.createRef()),t(this,"autosize",(e=>{const t=e.target.offsetHeight-e.target.clientHeight;e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+t+"px"})),t(this,"handleButtonClick",(e=>{const t=this.textareaRef.current,s=t.value.trim();t.value="",t.style.height="auto",s&&this.props.onCreate(s)}))}render(){return l("div",{className:p,children:[r("textarea",{placeholder:"Введите задачу",rows:"1",required:!0,className:u,ref:this.textareaRef,onInput:this.autosize}),r("button",{onClick:this.handleButtonClick,className:`button ${m}`,children:r(v,{className:f})})]})}}var b,x={"list-item":"_list-item_ulzer_1","list-item__inner":"_list-item__inner_ulzer_26",checkbox:"_checkbox_ulzer_34",text:"_text_ulzer_40",done:"_done_ulzer_60","delete-button":"_delete-button_ulzer_69","delete-icon":"_delete-icon_ulzer_74","focus-visible":"_focus-visible_ulzer_1"};function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},y.apply(this,arguments)}var C=function(e){return i.exports.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),b||(b=i.exports.createElement("path",{d:"m1.79-.191-1.981 1.98L10.019 12-.19 22.21l1.98 1.981L12 13.981l10.21 10.21 1.981-1.98L13.981 12 24.19 1.79l-1.98-1.981L12 10.019Zm0 0"})))};class w extends n.Component{constructor(){super(...arguments),t(this,"willBeDeleted",!1),t(this,"listItemRef",n.createRef()),t(this,"state",{visible:!0}),t(this,"show",(()=>{const e=this.listItemRef.current,t=getComputedStyle(e).height;e.style.height=0,requestAnimationFrame((()=>{e.style.height=t}))})),t(this,"hide",((e=!1)=>{const t=this.listItemRef.current;t.style.border=0,t.style.height=getComputedStyle(t).height,requestAnimationFrame((()=>{t.style.height=0})),e&&t.addEventListener("transitionend",this.handleTransitionEnd)})),t(this,"handleCheckboxChange",(e=>{this.props.onIsDoneChange(this.props.index)})),t(this,"handleTransitionEnd",(e=>{"height"===e.propertyName&&this.props.onDelete(this.props.index)})),t(this,"handleButtonClick",(e=>{this.willBeDeleted||(this.willBeDeleted=!0,this.hide(!0))}))}componentDidMount(){this.props.visible&&this.show(),this.props.visible||this.setState({visible:!1})}componentDidUpdate(e){e.visible!==this.props.visible&&(this.props.visible&&this.setState({visible:!0},(()=>this.show())),this.props.visible||(this.hide(),this.listItemRef.current.addEventListener("transitionend",(()=>this.setState({visible:!1})))))}componentWillUnmount(){this.listItemRef.current.removeEventListener("transitionend",this.handleTransitionEnd)}render(){const e=this.props.todo,t=[x.text,e.isDone?x.done:""].join(" ");return this.state.visible?r("li",{ref:this.listItemRef,className:x["list-item"],children:l("label",{className:x["list-item__inner"],children:[r("input",{type:"checkbox",checked:e.isDone,onChange:this.handleCheckboxChange,className:x.checkbox}),r("span",{className:t,children:e.text}),r("button",{onClick:this.handleButtonClick,className:`button ${x["delete-button"]}`,children:r(C,{className:x["delete-icon"]})})]})}):null}}var D="_todo-list_qu5mk_1",k="_list_qu5mk_5";class N extends n.Component{render(){const e=this.props.todos,t=this.props.filter,s=e.map(((e,s)=>{let n=!1;return"all"===t&&(n=!0),"done"===t&&e.isDone&&(n=!0),"not done"!==t||e.isDone||(n=!0),r(w,{todo:e,index:s,visible:n,onIsDoneChange:this.props.onIsDoneChange,onDelete:this.props.onDelete},e.id)}));return r("div",{className:D,children:r("ul",{className:k,children:s})})}}var I="_filter-select_xq55b_1";const z=e=>l("select",{value:e.filter,className:I,onChange:t=>e.onFilterChange(t.target.value),children:[r("option",{value:"all",children:"Все"}),r("option",{value:"done",children:"Выполненные"}),r("option",{value:"not done",children:"Не выполненные"})]});let E=0;class L{constructor(e,t=!1){this.id=E++,this.text=e,this.isDone=t,this.date=new Date}}const R=[new L("Помыть посуду",!1),new L("Написать книгу",!0),new L("Написать вторую книгу",!0),new L("Посмотреть телевизор",!0)];class j extends n.Component{constructor(){super(...arguments),t(this,"state",{todos:R,filter:"all"}),t(this,"handleIsDoneChange",(e=>{const t=[...this.state.todos];t[e].isDone=!t[e].isDone,this.setState({todos:t})})),t(this,"handleCreate",(e=>{const t=[...this.state.todos,new L(e,!1)];this.setState({todos:t})})),t(this,"handleDelete",(e=>{const t=[...this.state.todos];t.splice(e,1),this.setState({todos:t})})),t(this,"handleFilterChange",(e=>{this.setState({filter:e})}))}render(){return l("div",{className:"app",children:[r(h,{todos:this.state.todos}),r(_,{onCreate:this.handleCreate}),r(z,{onFilterChange:this.handleFilterChange}),r(N,{todos:this.state.todos,filter:this.state.filter,onIsDoneChange:this.handleIsDoneChange,onDelete:this.handleDelete})]})}}o.render(r(n.StrictMode,{children:r(j,{})}),document.getElementById("root"));
