import{R as g,_ as X,d as _,e as M,f as W,g as z,C as Z,K as D,t as q,u as ee,w as ne,h as ae,i as te,r as k,k as F,l as oe,m as le,n as re,o as ie,p as se,q as ce,s as de,v as H,x as G,y as ue,j as L}from"./index-893b5070.js";var V=g.forwardRef(function(n,e){var a,t=n.prefixCls,l=n.forceRender,x=n.className,b=n.style,d=n.children,i=n.isActive,h=n.role,N=g.useState(i||l),o=X(N,2),c=o[0],u=o[1];return g.useEffect(function(){(l||i)&&u(!0)},[l,i]),c?g.createElement("div",{ref:e,className:_("".concat(t,"-content"),(a={},M(a,"".concat(t,"-content-active"),i),M(a,"".concat(t,"-content-inactive"),!i),a),x),style:b,role:h},g.createElement("div",{className:"".concat(t,"-content-box")},d)):null});V.displayName="PanelContent";var me=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],J=g.forwardRef(function(n,e){var a,t,l=n.showArrow,x=l===void 0?!0:l,b=n.headerClass,d=n.isActive,i=n.onItemClick,h=n.forceRender,N=n.className,o=n.prefixCls,c=n.collapsible,u=n.accordion,w=n.panelKey,f=n.extra,s=n.header,v=n.expandIcon,y=n.openMotion,$=n.destroyInactivePanel,m=n.children,S=W(n,me),C=c==="disabled",P=c==="header",I=c==="icon",r=f!=null&&typeof f!="boolean",p=function(){i==null||i(w)},R=function(O){(O.key==="Enter"||O.keyCode===D.ENTER||O.which===D.ENTER)&&p()},A=typeof v=="function"?v(n):g.createElement("i",{className:"arrow"});A&&(A=g.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:["header","icon"].includes(c)?p:void 0},A));var j=_((a={},M(a,"".concat(o,"-item"),!0),M(a,"".concat(o,"-item-active"),d),M(a,"".concat(o,"-item-disabled"),C),a),N),B=_(b,(t={},M(t,"".concat(o,"-header"),!0),M(t,"".concat(o,"-header-collapsible-only"),P),M(t,"".concat(o,"-icon-collapsible-only"),I),t)),E={className:B,"aria-expanded":d,"aria-disabled":C,onKeyDown:R};return!P&&!I&&(E.onClick=p,E.role=u?"tab":"button",E.tabIndex=C?-1:0),g.createElement("div",z({},S,{ref:e,className:j}),g.createElement("div",E,x&&A,g.createElement("span",{className:"".concat(o,"-header-text"),onClick:c==="header"?p:void 0},s),r&&g.createElement("div",{className:"".concat(o,"-extra")},f)),g.createElement(Z,z({visible:d,leavedClassName:"".concat(o,"-content-hidden")},y,{forceRender:h,removeOnLeave:$}),function(K,O){var U=K.className,Y=K.style;return g.createElement(V,{ref:O,prefixCls:o,className:U,style:Y,isActive:d,forceRender:h,role:u?"tabpanel":void 0},m)}))}),fe=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ve=function(e,a){var t=a.prefixCls,l=a.accordion,x=a.collapsible,b=a.destroyInactivePanel,d=a.onItemClick,i=a.activeKey,h=a.openMotion,N=a.expandIcon;return e.map(function(o,c){var u=o.children,w=o.label,f=o.key,s=o.collapsible,v=o.onItemClick,y=o.destroyInactivePanel,$=W(o,fe),m=String(f??c),S=s??x,C=y??b,P=function(p){S!=="disabled"&&(d(p),v==null||v(p))},I=!1;return l?I=i[0]===m:I=i.indexOf(m)>-1,g.createElement(J,z({},$,{prefixCls:t,key:m,panelKey:m,isActive:I,accordion:l,openMotion:h,expandIcon:N,header:w,collapsible:S,onItemClick:P,destroyInactivePanel:C}),u)})},pe=function(e,a,t){if(!e)return null;var l=t.prefixCls,x=t.accordion,b=t.collapsible,d=t.destroyInactivePanel,i=t.onItemClick,h=t.activeKey,N=t.openMotion,o=t.expandIcon,c=e.key||String(a),u=e.props,w=u.header,f=u.headerClass,s=u.destroyInactivePanel,v=u.collapsible,y=u.onItemClick,$=!1;x?$=h[0]===c:$=h.indexOf(c)>-1;var m=v??b,S=function(I){m!=="disabled"&&(i(I),y==null||y(I))},C={key:c,panelKey:c,header:w,headerClass:f,isActive:$,prefixCls:l,destroyInactivePanel:s??d,openMotion:N,accordion:x,children:e.props.children,onItemClick:S,expandIcon:o,collapsible:m};return typeof e.type=="string"?e:(Object.keys(C).forEach(function(P){typeof C[P]>"u"&&delete C[P]}),g.cloneElement(e,C))};function ge(n,e,a){return Array.isArray(n)?ve(n,a):q(e).map(function(t,l){return pe(t,l,a)})}function Ce(n){var e=n;if(!Array.isArray(e)){var a=ae(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var xe=g.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,l=n.destroyInactivePanel,x=l===void 0?!1:l,b=n.style,d=n.accordion,i=n.className,h=n.children,N=n.collapsible,o=n.openMotion,c=n.expandIcon,u=n.activeKey,w=n.defaultActiveKey,f=n.onChange,s=n.items,v=_(t,i),y=ee([],{value:u,onChange:function(r){return f==null?void 0:f(r)},defaultValue:w,postState:Ce}),$=X(y,2),m=$[0],S=$[1],C=function(r){return S(function(){if(d)return m[0]===r?[]:[r];var p=m.indexOf(r),R=p>-1;return R?m.filter(function(A){return A!==r}):[].concat(te(m),[r])})};ne(!h,"`children` will be removed in next major version. Please use `items` instead.");var P=ge(s,h,{prefixCls:t,accordion:d,openMotion:o,expandIcon:c,collapsible:N,destroyInactivePanel:x,onItemClick:C,activeKey:m});return g.createElement("div",{ref:e,className:v,style:b,role:d?"tablist":void 0},P)});const T=Object.assign(xe,{Panel:J});T.Panel;const be=k.forwardRef((n,e)=>{const{getPrefixCls:a}=k.useContext(F),{prefixCls:t,className:l,showArrow:x=!0}=n,b=a("collapse",t),d=_({[`${b}-no-arrow`]:!x},l);return k.createElement(T.Panel,Object.assign({ref:e},n,{prefixCls:b,className:d}))}),he=be,ye=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:l,headerPadding:x,collapseHeaderPaddingSM:b,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:i,lineWidth:h,lineType:N,colorBorder:o,colorText:c,colorTextHeading:u,colorTextDisabled:w,fontSize:f,fontSizeLG:s,lineHeight:v,marginSM:y,paddingSM:$,paddingLG:m,paddingXS:S,motionDurationSlow:C,fontSizeIcon:P,contentPadding:I}=n,r=`${h}px ${N} ${o}`;return{[e]:Object.assign(Object.assign({},ie(n)),{backgroundColor:l,border:r,borderBottom:0,borderRadius:`${i}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:r,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${i}px ${i}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:x,color:u,lineHeight:v,cursor:"pointer",transition:`all ${C}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:f*v,display:"flex",alignItems:"center",paddingInlineEnd:y},[`${e}-arrow`]:Object.assign(Object.assign({},se()),{fontSize:P,svg:{transition:`transform ${C}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:c,backgroundColor:a,borderTop:r,[`& > ${e}-content-box`]:{padding:I},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:b,paddingInlineStart:S,[`> ${e}-expand-icon`]:{marginInlineStart:$-S}},[`> ${e}-content > ${e}-content-box`]:{padding:$}}},"&-large":{[`> ${e}-item`]:{fontSize:s,[`> ${e}-header`]:{padding:d,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:s*v,marginInlineStart:m-t}},[`> ${e}-content > ${e}-content-box`]:{padding:m}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${i}px ${i}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:w,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:y}}}}})}},$e=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},Ie=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:l}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${l}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},Pe=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Ne=oe("Collapse",n=>{const e=le(n,{collapseHeaderPaddingSM:`${n.paddingXS}px ${n.paddingSM}px`,collapseHeaderPaddingLG:`${n.padding}px ${n.paddingLG}px`,collapsePanelBorderRadius:n.borderRadiusLG});return[ye(e),Ie(e),Pe(e),$e(e),re(e)]},n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer})),Se=k.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,collapse:l}=k.useContext(F),{prefixCls:x,className:b,rootClassName:d,style:i,bordered:h=!0,ghost:N,size:o,expandIconPosition:c="start",children:u,expandIcon:w}=n,f=ce(r=>{var p;return(p=o??r)!==null&&p!==void 0?p:"middle"}),s=a("collapse",x),v=a(),[y,$]=Ne(s),m=k.useMemo(()=>c==="left"?"start":c==="right"?"end":c,[c]),S=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const p=w?w(r):k.createElement(ue,{rotate:r.isActive?90:void 0});return G(p,()=>({className:_(p.props.className,`${s}-arrow`)}))},C=_(`${s}-icon-position-${m}`,{[`${s}-borderless`]:!h,[`${s}-rtl`]:t==="rtl",[`${s}-ghost`]:!!N,[`${s}-${f}`]:f!=="middle"},l==null?void 0:l.className,b,d,$),P=Object.assign(Object.assign({},de(v)),{motionAppear:!1,leavedClassName:`${s}-content-hidden`}),I=k.useMemo(()=>u?q(u).map((r,p)=>{var R,A;if(!((R=r.props)===null||R===void 0)&&R.disabled){const j=(A=r.key)!==null&&A!==void 0?A:String(p),{disabled:B,collapsible:E}=r.props,K=Object.assign(Object.assign({},H(r.props,["disabled"])),{key:j,collapsible:E??(B?"disabled":void 0)});return G(r,K)}return r}):null,[u]);return y(k.createElement(T,Object.assign({ref:e,openMotion:P},H(n,["rootClassName"]),{expandIcon:S,prefixCls:s,className:C,style:Object.assign(Object.assign({},l==null?void 0:l.style),i)}),I))}),Q=Object.assign(Se,{Panel:he}),{Panel:we}=Q,ke=n=>{const{title:e,children:a,className:t,style:l}=n;return L.jsx(Q,{defaultActiveKey:[e],expandIconPosition:"end",className:"collcard "+t,style:l,children:L.jsx(we,{header:e,children:a},e)})};export{ke as C};
//# sourceMappingURL=index-9ed70b9c.js.map