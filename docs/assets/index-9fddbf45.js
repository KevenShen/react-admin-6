import{r as o,d as a,j as t,G as s,H as d}from"./index-8599cffe.js";import{P as u}from"./index-5e8c153c.js";import{T as f,C as e,E as x}from"./Table-6b153611.js";import{p as h}from"./menu-05a1bfde.js";import y from"./editMenu-3f855ba5.js";import C from"./editPos-497864c4.js";import{D as E}from"./DeleteOutlined-e55bdc8b.js";import"./PlusOutlined-0989b75b.js";import"./index-ccbe3b21.js";const k=()=>{console.log("岗位 渲染");const r=o.useRef(null),l=o.useRef(null),[c,p]=o.useState([]),n=async()=>{const{data:i}=await h();p(i)};return o.useEffect(()=>{n()},[]),a(u,{title:"岗位管理",source:"在这里，你可以对系统中的用户岗位进行管理，用户登录必须选择一个岗位。",children:[a("div",{className:"app-card pos",children:[t(s,{wrap:!0,children:t(d,{type:"primary",onClick:n,children:"查询"})}),a(f,{bordered:!0,dataSource:c,rowKey:i=>i.id,children:[t(e,{title:"岗位名称",dataIndex:"name"},"name"),t(e,{title:"岗位代码",dataIndex:"id"},"id"),t(e,{title:"岗位类型",dataIndex:"role_id"},"role_id"),t(e,{title:"机构ID",dataIndex:"org_id"},"org_id"),t(e,{title:"岗位描述",dataIndex:"description"},"description"),t(e,{title:"操作",render:(i,m)=>a(s,{children:[t(d,{type:"primary",onClick:()=>r==null?void 0:r.current.showModal(m.id),shape:"circle",icon:t(x,{})}),t(d,{type:"primary",danger:!0,shape:"circle",icon:t(E,{})})]})},"action")]})]}),t(y,{ref:r,getList:n}),t(C,{ref:l})]})};export{k as default};
