import{r as o,d as l,at as I,j as e,X as c,Y as m}from"./index-7ec5c925.js";import{d as w}from"./user-d95f46ea.js";import P from"./AddPos-9656684f.js";import{T as p}from"./Table-e3aebe67.js";import{P as S}from"./index-be5ad900.js";import{D as L}from"./DeleteOutlined-51525ffd.js";import"./menu-40c162b1.js";import"./index-a65e002a.js";import"./index-fa08fb69.js";const{Column:a}=p,T=(n,u)=>{const i=o.useRef(null),[f,h]=o.useState([]),[x,r]=o.useState(!1),[d,C]=o.useState(""),[y,b]=o.useState(!1);o.useImperativeHandle(u,()=>({showModal:(t=[],s)=>{r(!0),h(t),C(s)}}));const g=async t=>{try{await w({userpos:{user_id:d,posId:t.id}}),console.log(n),n.getList(),r(!1)}catch(s){console.log("Failed:",s)}};return l(I,{title:"用户岗位设置",open:x,confirmLoading:y,getContainer:!1,destroyOnClose:!0,onCancel:()=>{r(!1)},children:[e(c,{wrap:!0,children:e(m,{type:"primary",onClick:()=>{var t;return(t=i.current)==null?void 0:t.showModal()},className:"btn-pink",children:"新增"})}),l(p,{bordered:!0,dataSource:f,rowKey:t=>t.id,children:[e(a,{title:"岗位名称",dataIndex:"name"},"name"),e(a,{title:"岗位id",dataIndex:"id"},"id"),e(a,{title:"岗位描述",dataIndex:"description"},"description"),e(a,{title:"岗位状态",dataIndex:"status"},"status"),e(a,{title:"操作",render:(t,s)=>e(c,{children:e(S,{title:"是否确定删除该岗位?",onConfirm:()=>g(s),okText:"确定",cancelText:"取消",children:e(m,{type:"primary",danger:!0,shape:"circle",icon:e(L,{})})})})},"action")]}),e(P,{ref:i,id:d})]})},A=o.forwardRef(T);export{A as default};
//# sourceMappingURL=EditUser-4d71e785.js.map