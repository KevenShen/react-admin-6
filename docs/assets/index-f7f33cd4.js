import{r as a,d as o,j as e,L as s,M as d}from"./index-2c442776.js";import{P as u}from"./index-1d5d76b5.js";import{T as f,C as r}from"./Table-dd85e1b2.js";import{p as x}from"./menu-e875617c.js";import h from"./editMenu-3a32065b.js";import y from"./editPos-6d6d6b4e.js";import{E as I}from"./EditOutlined-aefd253e.js";import{D as C}from"./DeleteOutlined-f44dfc80.js";import"./PlusOutlined-1620a607.js";import"./index-15f414e5.js";const S=()=>{console.log("岗位 渲染");const i=a.useRef(null),l=a.useRef(null),[c,p]=a.useState([]),n=async()=>{const{data:t}=await x();p(t)};return a.useEffect(()=>{n()},[]),o(u,{title:"岗位管理",source:"在这里，你可以对系统中的岗位进行管理，岗位对应一个角色,默认拥有角色对应菜单,管理员可以根据岗位定制化菜单(只会修改岗位,不会修改角色对应菜单)。",children:[o("div",{className:"app-card pos",children:[e(s,{wrap:!0,children:e(d,{type:"primary",onClick:n,children:"查询"})}),o(f,{bordered:!0,dataSource:c,rowKey:t=>t.id,children:[e(r,{title:"岗位名称",dataIndex:"name"},"name"),e(r,{title:"岗位代码",dataIndex:"id"},"id"),e(r,{title:"岗位类型",dataIndex:"role_id"},"role_id"),e(r,{title:"机构ID",dataIndex:"org_id"},"org_id"),e(r,{title:"岗位描述",dataIndex:"description"},"description"),e(r,{title:"角色类型",dataIndex:"role",render:t=>typeof t=="object"&&t!==null&&"name"in t?t.name:"未知"},"role.name"),e(r,{title:"操作",render:(t,m)=>o(s,{children:[e(d,{type:"primary",onClick:()=>i==null?void 0:i.current.showModal(m.id),shape:"circle",icon:e(I,{})}),e(d,{type:"primary",danger:!0,shape:"circle",icon:e(C,{})})]})},"action")]})]}),e(h,{ref:i,getList:n}),e(y,{ref:l})]})};export{S as default};
