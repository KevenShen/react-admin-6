import{r as e,ai as h,am as k,j as s,aj as p,al as y}from"./index-785dc145.js";import{T as C}from"./index-fdd898fc.js";const g=(M,n)=>{const[o]=h.useForm(),[c,r]=e.useState(!1),[d,a]=e.useState([]),[l,w]=e.useState([]),[i,O]=e.useState(!1);e.useImperativeHandle(n,()=>({showModal:t=>{u(t),r(!0)}}));const m=async()=>{const{data:t}=await y();a(t)},u=async t=>{const{data:f}=await k(t);a(f)};return e.useEffect(()=>{m()},[]),s(p,{forceRender:!0,title:"编辑",open:c,onOk:async()=>{},confirmLoading:i,onCancel:()=>{o.resetFields()},children:s(C,{checkable:!0,blockNode:!0,fieldNames:{title:"name",key:"id"},onCheck:()=>{},checkedKeys:l,treeData:d})})},I=e.memo(e.forwardRef(g));export{I as default};