import{r as a,ai as o,j as t,aj as x,d as C}from"./index-785dc145.js";import{p as b}from"./menu-05045571.js";import{c as S}from"./user-87dfc3d3.js";import{A as w}from"./index-f9aec56d.js";const y=(d,i)=>{const[n]=o.useForm(),[A,r]=a.useState(""),[c,u]=a.useState([]),[p,l]=a.useState(!1),[m,F]=a.useState(!1);a.useImperativeHandle(i,()=>({showModal:e=>{l(!0)}}));const f=async()=>{try{const e=await S({userpos:{user_id:d.id,posId:n.getFieldsValue().posid}})}catch(e){console.log("Failed:",e)}},h=async()=>{const{data:e}=await b();u(e.map(s=>({label:s.name,value:s.name,id:s.id})))};a.useEffect(()=>{h()},[]);const g=(e,s)=>{r(s.label),n.setFieldValue("posid",s.id)};return t(x,{forceRender:!0,title:"新增用户岗位",open:p,onOk:f,confirmLoading:m,onCancel:()=>{l(!1)},children:C(o,{form:n,style:{padding:"10px 60px 10px 0"},labelCol:{span:6},name:"basic",initialValues:{remember:!0},autoComplete:"off",children:[t(o.Item,{label:"选择岗位",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:t(w,{options:c,onSelect:g,onSearch:e=>r(e),placeholder:"input here"})}),t(o.Item,{name:"posid",hidden:!0})]})})},V=a.forwardRef(y);export{V as default};
