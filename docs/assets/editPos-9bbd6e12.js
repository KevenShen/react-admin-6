import{r as e,ai as h,am as k,j as s,aj as p,al as y}from"./index-d3ab1968.js";import{T as g}from"./index-119e3193.js";const C=(M,o)=>{console.log("编辑弹窗刷新");const[n]=h.useForm(),[c,r]=e.useState(!1),[d,a]=e.useState([]),[l,w]=e.useState([]),[i,O]=e.useState(!1);e.useImperativeHandle(o,()=>({showModal:t=>{u(t),r(!0)}}));const m=async()=>{const{data:t}=await y();a(t)},u=async t=>{const{data:f}=await k(t);a(f)};return e.useEffect(()=>{m()},[]),s(p,{forceRender:!0,title:"编辑",open:c,onOk:async()=>{},confirmLoading:i,onCancel:()=>{n.resetFields()},children:s(g,{checkable:!0,blockNode:!0,fieldNames:{title:"name",key:"id"},onCheck:()=>{},checkedKeys:l,treeData:d})})},I=e.memo(e.forwardRef(C));export{I as default};