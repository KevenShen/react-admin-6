import{r as a,d as o,j as e,L as s,M as d}from"./index-a244d952.js";import{P as u}from"./index-446ab32b.js";import{T as f,C as r}from"./Table-b29c8498.js";import{p as x}from"./menu-29faaf8e.js";import h from"./editMenu-3eb9744a.js";import y from"./editPos-c5ad0ab4.js";import{E as I}from"./EditOutlined-af6bd339.js";import{D as C}from"./DeleteOutlined-c7bbbecd.js";import"./PlusOutlined-fdf4a7e0.js";import"./index-a46c20d0.js";const S=()=>{console.log("岗位 渲染");const i=a.useRef(null),l=a.useRef(null),[c,p]=a.useState([]),n=async()=>{const{data:t}=await x();p(t)};return a.useEffect(()=>{n()},[]),o(u,{title:"岗位管理",source:"在这里，你可以对系统中的岗位进行管理，岗位对应一个角色,默认拥有角色对应菜单,管理员可以根据岗位定制化菜单(只会修改岗位,不会修改角色对应菜单)。",children:[o("div",{className:"app-card pos",children:[e(s,{wrap:!0,children:e(d,{type:"primary",onClick:n,children:"查询"})}),o(f,{bordered:!0,dataSource:c,rowKey:t=>t.id,children:[e(r,{title:"岗位名称",dataIndex:"name"},"name"),e(r,{title:"岗位代码",dataIndex:"id"},"id"),e(r,{title:"岗位类型",dataIndex:"role_id"},"role_id"),e(r,{title:"机构ID",dataIndex:"org_id"},"org_id"),e(r,{title:"岗位描述",dataIndex:"description"},"description"),e(r,{title:"角色类型",dataIndex:"role",render:t=>typeof t=="object"&&t!==null&&"name"in t?t.name:"未知"},"role.name"),e(r,{title:"操作",render:(t,m)=>o(s,{children:[e(d,{type:"primary",onClick:()=>i==null?void 0:i.current.showModal(m.id),shape:"circle",icon:e(I,{})}),e(d,{type:"primary",danger:!0,shape:"circle",icon:e(C,{})})]})},"action")]})]}),e(h,{ref:i,getList:n}),e(y,{ref:l})]})};export{S as default};
