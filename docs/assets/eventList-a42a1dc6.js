import{j as t}from"./index-a244d952.js";import{C as s}from"./index-7dc5fe6d.js";const c=o=>{const{taskList:l}=o;return t(s,{title:"任务清单",style:{width:300},children:t("div",{id:"sortable",children:l.map(r=>t("p",{className:"task",style:{backgroundColor:r.color},children:r.value},r.color))})})};export{c as default};