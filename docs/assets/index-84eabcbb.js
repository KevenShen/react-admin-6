import{r as i,j as e,$ as n,a0 as a}from"./index-893b5070.js";import{p as m}from"./menu-0bcc1d6d.js";import{P as j}from"./index-42ac211f.js";import{T as u,C as s}from"./Table-37fb6f07.js";import f from"./editMenu-3cb557f5.js";import h from"./editPos-3c6022b1.js";import{E as y}from"./EditOutlined-bd9f48f9.js";import{D as E}from"./DeleteOutlined-1d08d034.js";import"./PlusOutlined-2216b065.js";import"./index-a3a6dd08.js";const k=()=>{console.log("岗位 渲染");const r=i.useRef(null),d=i.useRef(null),[l,c]=i.useState([]),o=async()=>{const{data:t}=await m();c(t)};i.useEffect(()=>{o()},[]);const p="在这里，你可以对系统中的岗位进行管理，岗位对应一个角色,默认拥有角色对应菜单,管理员可以根据岗位定制化菜单(只会修改岗位,不会修改角色对应菜单)。";return e.jsxs(j,{title:"岗位管理",source:p,children:[e.jsxs("div",{className:"app-card pos",children:[e.jsx(n,{wrap:!0,children:e.jsx(a,{type:"primary",onClick:o,children:"查询"})}),e.jsxs(u,{bordered:!0,dataSource:l,rowKey:t=>t.id,children:[e.jsx(s,{title:"岗位名称",dataIndex:"name"},"name"),e.jsx(s,{title:"岗位代码",dataIndex:"id"},"id"),e.jsx(s,{title:"岗位类型",dataIndex:"role_id"},"role_id"),e.jsx(s,{title:"机构ID",dataIndex:"org_id"},"org_id"),e.jsx(s,{title:"岗位描述",dataIndex:"description"},"description"),e.jsx(s,{title:"角色类型",dataIndex:"role",render:t=>typeof t=="object"&&t!==null&&"name"in t?t.name:"未知"},"role.name"),e.jsx(s,{title:"操作",render:(t,x)=>e.jsxs(n,{children:[e.jsx(a,{type:"primary",onClick:()=>r==null?void 0:r.current.showModal(x.id),shape:"circle",icon:e.jsx(y,{})}),e.jsx(a,{type:"primary",danger:!0,shape:"circle",icon:e.jsx(E,{})})]})},"action")]})]}),e.jsx(f,{ref:r,getList:o}),e.jsx(h,{ref:d})]})};export{k as default};
//# sourceMappingURL=index-84eabcbb.js.map
