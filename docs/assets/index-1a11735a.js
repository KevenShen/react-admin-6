import{r as o,j as e,d as a,ak as u,al as c,H as r,G as b,am as R,ai as S}from"./index-62c827a7.js";import{P as j}from"./index-a831a7f2.js";import{T as v,C as s,E}from"./Table-8d2ade53.js";import{e as N,g as D}from"./menu-7fac4763.js";import{T as I}from"./index-7521417b.js";import{D as K}from"./DeleteOutlined-c995ffad.js";import"./PlusOutlined-94a10ba6.js";const M=()=>{console.log("Role 渲染");const[h,y]=o.useState([]),[f,g]=o.useState([]),[l,d]=o.useState([]),[n,m]=o.useState([]),p=async()=>{const{data:t}=await R();y(t)},w=async()=>{const{data:t}=await S();g(t)},C=t=>{console.log("onCheck",t),d(t)},k=async()=>{console.log(l.join(",")),await N({id:n[0],menu:l})},x=async()=>{console.log(n[0]);const{data:t}=await D(n[0]);d(t.map(i=>+i.menu_id))};return o.useEffect(()=>{p(),w()},[]),o.useEffect(()=>{n.length&&x()},[n]),e(j,{title:"角色管理",source:"在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。",children:a("div",{className:"app-card role",children:[a("div",{className:"role-info",children:[a(u,{justify:"space-between",align:"middle",children:[e(c,{children:"角色列表"}),e(c,{children:e(r,{type:"primary",onClick:p,children:"查询"})})]}),a(v,{bordered:!0,dataSource:h,rowSelection:{type:"radio",selectedRowKeys:n,onChange:(t,i)=>m([i[0].id])},onRow:t=>({onClick:()=>{m([t.id])}}),rowKey:t=>t.id,children:[e(s,{title:"角色名称",dataIndex:"name"},"name"),e(s,{title:"角色代码",dataIndex:"code"},"code"),e(s,{title:"角色等级",dataIndex:"level"},"level"),e(s,{title:"角色描述",dataIndex:"description"},"description"),e(s,{title:"操作",render:(t,i)=>a(b,{children:[e(r,{type:"primary",shape:"circle",icon:e(E,{})}),e(r,{type:"primary",danger:!0,shape:"circle",icon:e(K,{})})]})},"action")]})]}),a("div",{className:"role-menu",children:[a(u,{justify:"space-between",align:"middle",children:[e(c,{children:"角色列表"}),a(c,{children:[" ",e(r,{type:"primary",disabled:!n[0],onClick:k,children:"保存"})]})]}),e(I,{checkable:!0,blockNode:!0,fieldNames:{title:"name",key:"id"},onCheck:C,selectedKeys:[1,2,3],checkedKeys:l,treeData:f})]})]})})};export{M as default};
