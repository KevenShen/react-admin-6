import{j as t}from"./index-2c442776.js";import{C as s}from"./index-b5c14bab.js";const c=o=>{const{taskList:l}=o;return t(s,{title:"任务清单",style:{width:300},children:t("div",{id:"sortable",children:l.map(r=>t("p",{className:"task",style:{backgroundColor:r.color},children:r.value},r.color))})})};export{c as default};