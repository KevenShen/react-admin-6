import{G as v,r as n,j as e,d as r,H as l,J as m,T as y}from"./index-5e13deeb.js";import{P as f}from"./index-efdc5248.js";import"./PlusOutlined-848eb892.js";function x(t){return v({url:`/logs/list?type=${t}`,method:"get"})}const b=()=>{const[t,i]=n.useState("access"),[u,d]=n.useState([]),[g,c]=n.useState(""),p=async s=>{c("");const a=new EventSource(`api/logs/detail?name=${s}`);return a.onmessage=o=>{c(t+o.data.replace(/\n/g,"<br />"))},()=>{a.close()}},h=async s=>{i(s.target.value)};return n.useEffect(()=>{(async()=>{const{data:s}=await x(t),a=s.map(o=>({value:o,label:o}));d(a)})()},[t]),e(f,{title:"日志信息",source:"日志信息",children:r("div",{className:"app-card logs",style:{height:"100%"},children:[r("div",{className:"logs-header",children:[r(l.Group,{value:t,onChange:h,children:[e(l.Button,{value:"access",children:"成功"}),e(l.Button,{value:"errors",children:"失败"}),e(l.Button,{value:"app-out",children:"app"})]}),e(m,{onChange:p,style:{width:240},options:u})]}),e("div",{className:"logs-body",children:e(y,{rows:4,value:g})})]})})};export{b as default};
