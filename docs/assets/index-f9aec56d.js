import{r as o,J as l,t as y,ab as C,l as P,v as w,e as A,b9 as _}from"./index-785dc145.js";const{Option:c}=l;function d(t){return t&&t.type&&(t.type.isSelectOption||t.type.isSelectOptGroup)}const b=(t,m)=>{const{prefixCls:O,className:x,popupClassName:E,dropdownClassName:N,children:p,dataSource:u}=t,s=y(p);let a;s.length===1&&C(s[0])&&!d(s[0])&&([a]=s);const S=a?()=>a:void 0;let r;s.length&&d(s[0])?r=p:r=u?u.map(e=>{if(C(e))return e;switch(typeof e){case"string":return o.createElement(c,{key:e,value:e},e);case"object":{const{value:f}=e;return o.createElement(c,{key:f,value:f},e.text)}default:return}}):[];const{getPrefixCls:g}=o.useContext(P),i=g("select",O);return o.createElement(l,Object.assign({ref:m,showArrow:!1},w(t,["dataSource","dropdownClassName"]),{prefixCls:i,popupClassName:E||N,className:A(`${i}-auto-complete`,x),mode:l.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:S}),r)},n=o.forwardRef(b),h=_(n);n.Option=c;n._InternalPanelDoNotUseOrYouWillBeFired=h;const B=n;export{B as A};
