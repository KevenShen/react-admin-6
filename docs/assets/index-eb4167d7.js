import{r as n,j as e,d as o,L as p,M as s}from"./index-882de5fd.js";import{P as f}from"./index-0572c5fd.js";import{g as w}from"./user-6057a11e.js";import S from"./editUser-af3a651f.js";import{T as d}from"./Table-6fe0f23a.js";import{E as x}from"./EditOutlined-f60558ff.js";import{D as C}from"./DeleteOutlined-e5a097b0.js";import"./PlusOutlined-ae187890.js";import"./index-5fafda0b.js";const{Column:c}=d,k="在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。",O=()=>{console.log("Manage 渲染");const a=n.useRef(null),[u,m]=n.useState([]);n.useState({});const[l,h]=n.useState({current:1,pageSize:10}),i=async(t=l)=>{console.log(t),h(t);const{data:r}=await w({param:{},pageInfo:{pageNum:t.current,pageSize:t.pageSize}});m(r)},g=async t=>{a==null||a.current.showModal(t)},y=t=>t.includes("http")?t:"http://"+window.document.location.host+"/api"+t;return n.useEffect(()=>{i(l)},[]),e(f,{title:"用户管理",source:k,children:o("div",{className:"app-card",children:[" ",o(p,{wrap:!0,children:[e(s,{type:"primary",onClick:()=>i(),children:"查询"}),e(s,{type:"primary",onClick:()=>a==null?void 0:a.current.showModal(),className:"btn-pink",children:"新增"})]}),o(d,{bordered:!0,dataSource:u,onChange:i,pagination:{...l,pageSizeOptions:[5,10],showTotal:t=>`共 ${t} 条`,showSizeChanger:!0},rowKey:t=>t.id,children:[e(c,{title:"用户名称",dataIndex:"username"},"username"),e(c,{title:"用户昵称",dataIndex:"nickname"},"nickname"),e(c,{title:"头像",dataIndex:"avatar",render:(t,r)=>e("img",{style:{width:"64px",height:"64px"},src:y(r.avatar),alt:"avatar"})},"avatar"),e(c,{title:"操作",render:(t,r)=>o(p,{children:[e(s,{type:"primary",shape:"circle",onClick:()=>g(r),icon:e(x,{})}),e(s,{type:"primary",danger:!0,shape:"circle",icon:e(C,{})})]})},"action")]}),e(S,{ref:a,getList:()=>i()})]})})};export{O as default};