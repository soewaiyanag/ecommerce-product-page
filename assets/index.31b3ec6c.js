import{j as v,r as i,L as _,N as x,l as w,R as C,B as I}from"./vendor.03663797.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};b();var y="/ecommerce-product-page/assets/icon-menu.cd0a0bcb.svg",S="/ecommerce-product-page/assets/icon-close.22a11be2.svg",h="/ecommerce-product-page/assets/icon-cart.987a9f06.svg",k="/ecommerce-product-page/assets/image-avatar.88751761.png",L="/ecommerce-product-page/assets/logo.5efe6b0e.svg";const e=v.exports.jsx,n=v.exports.jsxs,d=i.exports.createContext(),M=s=>{const[a,o]=i.exports.useState(0);return e(d.Provider,{value:{numOfItem:a,setNumOfItem:o},children:s.children})};var g="/ecommerce-product-page/assets/image-product-1-thumbnail.4e7f5e07.jpg",j="/ecommerce-product-page/assets/icon-delete.11e8f9c5.svg";const A=()=>e("div",{className:"Cart__empty",children:"Your cart is empty."}),O=()=>{const{numOfItem:s,setNumOfItem:a}=i.exports.useContext(d),o=125;return n("div",{className:"Item",children:[e("img",{className:"Item--img",src:g,alt:"tumb"}),e("span",{className:"Item__name",children:"Autumn Limited Edition"}),n("span",{className:"Item__price",children:["$",o.toFixed(2)," \xD7 ",s," ",n("span",{className:"Item__price__total",children:["$",(o*s).toFixed(2)]})]}),e("img",{className:"Item__del",src:j,alt:"delete icon",onClick:()=>{a(0)}})]})},$=()=>n("div",{className:"ItemCart",children:[e(O,{}),e("a",{href:"https://youtu.be/dQw4w9WgXcQ",className:"ItemCart--checkoutBtn",children:"Checkout"})]}),B=()=>{const{numOfItem:s}=i.exports.useContext(d);return n("div",{className:"Cart",children:[e("h1",{className:"Cart__header",children:"Cart"}),e("div",{className:"Cart__main",children:s?e($,{}):e(A,{})})]})},E=["collections","men","women","about","contact"],R=()=>{const s=i.exports.useRef(null),[a,o]=i.exports.useState(!1),[c,t]=i.exports.useState(!1),{numOfItem:r}=i.exports.useContext(d);return n("nav",{className:"Nav",children:[e("img",{onClick:()=>{o(!0)},className:"Nav__menu",src:y,alt:"menu"}),e(_,{to:"/",children:e("img",{className:"Nav__logo",src:L,alt:"logo"})}),n("div",{style:{transform:a?"translateX(0)":null},className:"Nav__links",ref:s,children:[e("img",{className:"Nav__links--close",src:S,alt:"close",onClick:()=>{o(!1)}}),E.map(m=>e(x,{className:({isActive:f})=>`Nav__link ${f?"current":""}`,to:"/"+m,children:w(m)},m))]}),n("div",{className:"Nav__cart",onClick:()=>{t(!c)},children:[e("img",{src:h,alt:"cart"}),r?e("span",{className:"num-of-items",children:r}):null]}),e("img",{className:"Nav__avatar",src:k,alt:"avatar"}),c?e(B,{}):null]})};var P="/ecommerce-product-page/assets/image-product-2-thumbnail.ad60b1cc.jpg",W="/ecommerce-product-page/assets/image-product-3-thumbnail.46570324.jpg",F="/ecommerce-product-page/assets/image-product-4-thumbnail.7125519d.jpg";const z=[g,P,W,F],X=({index:s,setIndex:a})=>e("div",{className:"Selector",children:z.map((o,c)=>e("div",{style:{outlineWidth:s===c?"initial":null},className:"Selector--div",onClick:()=>{a(c)},children:e("img",{style:{opacity:s===c?"0.5":null},className:"Selector--img",src:o,alt:"img"})},"selector"+c))});var D="/ecommerce-product-page/assets/image-product-1.0c6fe8e3.jpg",K="/ecommerce-product-page/assets/image-product-2.a8acaa06.jpg",Q="/ecommerce-product-page/assets/image-product-3.5a0b3bac.jpg",T="/ecommerce-product-page/assets/image-product-4.b130dea1.jpg";const V=()=>e("svg",{className:"Icon Next",width:"13",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"m2 1 8 8-8 8",strokeWidth:"3",fill:"none",fillRule:"evenodd"})}),Y=()=>e("svg",{className:"Icon Previous",width:"12",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"M11 1 3 9l8 8",strokeWidth:"3",fill:"none",fillRule:"evenodd"})}),q=()=>e("svg",{className:"Icon Close",width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fillRule:"evenodd"})}),u=[D,K,Q,T],N=({viewWidth:s,activeLightBox:a,closeLightBox:o})=>{const[c,t]=i.exports.useState(0);return n("div",{className:"Slider",children:[e("span",{className:"Slider__preview--icon previous",onClick:()=>{t(c-1==-1?u.length-1:c-1)},children:e(Y,{})}),e("span",{className:"Slider__preview--icon next",onClick:()=>{t((c+1)%u.length)},children:e(V,{})}),e("span",{className:"close",onClick:o,children:e(q,{})}),e("div",{className:"Slider__preview--wrapper",children:e("div",{className:"Slider__preview",children:e("div",{style:{transform:`translateX(${-100*c}%)`},className:"Slider__preview--imgs",onClick:()=>{a&&a()},children:u.map((p,m)=>e("img",{className:"Slider__preview--img",src:p,alt:"preview-img"},"slider"+m))})})}),s>768?e(X,{index:c,setIndex:t}):null]})};var Z="/ecommerce-product-page/assets/icon-plus.fd8d372c.svg",G="/ecommerce-product-page/assets/icon-minus.7f289c13.svg";const H=()=>{const[s,a]=i.exports.useState(0),{numOfItem:o,setNumOfItem:c}=i.exports.useContext(d);return n("div",{className:"Main",children:[e("h4",{className:"Main__company",children:"SNEAKER COMPANY"}),e("h1",{className:"Main__name",children:"Fall Limited Edition Sneakers"}),e("p",{className:"Main__description",children:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."}),n("div",{className:"Main__price",children:[e("h1",{className:"Main__price--sell",children:"$125.00"}),e("span",{className:"Main__price--actual",children:"$250.00"})]}),n("div",{className:"Main--foot",children:[n("div",{className:"Main--foot__amount",children:[e("img",{onClick:()=>{let t=Number(s);t<=0||a(t-1)},src:G,alt:"minus",className:"Main--foot__amount--minus"}),e("input",{className:"Main--foot__amount--input",placeholder:0,value:s,onChange:t=>{let r=t.target.value;r=r==="00"?"0":r,a(r)},type:"number",name:"amount",id:"amount"}),e("img",{onClick:()=>{a(Number(s)+1)},src:Z,alt:"plus",className:"Main--foot__amount--plus"})]}),n("button",{onClick:()=>{c(s)},disabled:s<=0,children:[e("img",{src:h,alt:"cart icon"}),"Add to cart"]})]})]})};const J=({viewWidth:s,closeLightBox:a})=>e("div",{className:"LightBox",children:e(N,{viewWidth:s,closeLightBox:a})});function U(){const[s,a]=i.exports.useState(0),[o,c]=i.exports.useState(!1),t=()=>{c(!1)},r=()=>{c(!0)},l=()=>{a(window.innerWidth)};return i.exports.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[s]),e(M,{children:n("div",{className:"App",children:[e(R,{}),n("div",{className:"App--container",children:[e(N,{viewWidth:s,activeLightBox:r}),s>768&&o?e(J,{viewWidth:s,closeLightBox:t}):null,e(H,{})]})]})})}C.render(e(I,{basename:"/ecommerce-product-page",children:e(U,{})}),document.getElementById("root"));
