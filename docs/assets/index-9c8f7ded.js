import{r as i,j as t,d as r,H as c,J as n}from"./index-ff970420.js";import{g as p}from"./login-9644db1f.js";import{P as m}from"./index-a03f06ed.js";import{T as u,C as e}from"./Table-04c70c1b.js";import{E as h}from"./EditOutlined-756ff530.js";import{D as x}from"./DeleteOutlined-a7d361e2.js";import"./request-7bfa538c.js";import"./axios-21b846bc.js";import"./PlusOutlined-be2d346c.js";import"./index-b7777274.js";const _=()=>{console.log("Menu 渲染");const o=i.useRef(null),[d,l]=i.useState([]),s=async()=>{const{data:a}=await p();l(a)};return i.useEffect(()=>{s()},[]),t(m,{title:"菜单管理",source:"在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。",children:r("div",{className:"app-card",children:[r(c,{wrap:!0,children:[t(n,{type:"primary",onClick:s,children:"查询"}),t(n,{type:"primary",onClick:()=>o==null?void 0:o.current.showModal(),className:"btn-pink",children:"新增"})]}),r(u,{bordered:!0,dataSource:d,rowKey:a=>a.id,children:[t(e,{title:"菜单名称",dataIndex:"name"},"name"),t(e,{title:"图标",dataIndex:"icon"},"icon"),t(e,{title:"路径",dataIndex:"path"},"path"),t(e,{title:"组件路径",dataIndex:"component"},"component"),t(e,{title:"显示",dataIndex:"isShow"},"isShow"),t(e,{title:"排序",dataIndex:"sort_num"},"sort_num"),t(e,{title:"操作",render:(a,f)=>r(c,{children:[t(n,{type:"primary",shape:"circle",icon:t(h,{})}),t(n,{type:"primary",danger:!0,shape:"circle",icon:t(x,{})})]})},"action")]})]})})};export{_ as default};
