import{r,j as e,d as i,G as l,H as n}from"./index-437f5f79.js";import{P as h}from"./index-c17c71ea.js";import{E as g,g as y}from"./editUser-b6f335f8.js";import{T as d,E as x}from"./Table-14e79747.js";import{D as f}from"./DeleteOutlined-222f61a2.js";import"./PlusOutlined-f79e391e.js";import"./index-af478877.js";const{Column:s}=d,w="在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。",M=()=>{console.log("Manage 渲染");const t=r.useRef(null),[p,m]=r.useState([]);r.useState({});const o=async()=>{const{data:a}=await y({param:{},pageInfo:{pageNum:1,pageSize:10}});m(a)},u=async a=>{t==null||t.current.showModal(a)};return r.useEffect(()=>{o()},[]),e(h,{title:"用户管理",source:w,children:i("div",{className:"app-card",children:[" ",i(l,{wrap:!0,children:[e(n,{type:"primary",onClick:o,children:"查询"}),e(n,{type:"primary",onClick:()=>t==null?void 0:t.current.showModal(),className:"btn-pink",children:"新增"})]}),i(d,{bordered:!0,dataSource:p,pagination:{pageSize:5,pageSizeOptions:[5,10],showTotal:a=>`共 ${a} 条`,showSizeChanger:!0},rowKey:a=>a.id,children:[e(s,{title:"用户名称",dataIndex:"username"},"username"),e(s,{title:"用户昵称",dataIndex:"nickname"},"nickname"),e(s,{title:"头像",dataIndex:"avatar",render:(a,c)=>e("img",{style:{width:"64px",height:"64px"},src:c.avatar,alt:"avatar"})},"avatar"),e(s,{title:"操作",render:(a,c)=>i(l,{children:[e(n,{type:"primary",shape:"circle",onClick:()=>u(c),icon:e(x,{})}),e(n,{type:"primary",danger:!0,shape:"circle",icon:e(f,{})})]})},"action")]}),e(g,{ref:t,getList:o})]})})};export{M as default};
