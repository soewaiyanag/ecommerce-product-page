var S=Object.defineProperty,I=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(t,s,a)=>s in t?S(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,u=(t,s)=>{for(var a in s||(s={}))k.call(s,a)&&N(t,a,s[a]);if(g)for(var a of g(s))L.call(s,a)&&N(t,a,s[a]);return t},p=(t,s)=>I(t,y(s));import{s as M,c as A,j as _,r as l,L as R,N as j,l as E,R as $,B as O}from"./vendor.ec71f643.js";const B=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerpolicy&&(n.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?n.credentials="include":c.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(c){if(c.ep)return;c.ep=!0;const n=a(c);fetch(c.href,n)}};B();var T="/ecommerce-product-page/assets/icon-menu.cd0a0bcb.svg",F="/ecommerce-product-page/assets/icon-close.22a11be2.svg",f="/ecommerce-product-page/assets/icon-cart.987a9f06.svg",W="/ecommerce-product-page/assets/image-avatar.88751761.png",P="/ecommerce-product-page/assets/logo.5efe6b0e.svg";var w="/ecommerce-product-page/assets/image-product-1-thumbnail.4e7f5e07.jpg",D="/ecommerce-product-page/assets/icon-delete.11e8f9c5.svg";class V{constructor(s){this.id=M.generate(),this.amount=s}}const z={items:[]},X=(t=z,s)=>{switch(s.type){case"ADD_TO_CART":return p(u({},t),{items:[...t.items,new V(s.amount)]});case"REMOVE_FROM_CART":return p(u({},t),{items:[...t.items.filter(a=>a.id!==s.id)]});default:return t}},m=A(X),K=t=>({type:"ADD_TO_CART",amount:t}),Q=t=>({type:"REMOVE_FROM_CART",id:t}),e=_.exports.jsx,o=_.exports.jsxs,Y=({amount:t,id:s})=>{const a=125;return o("div",{className:"Item",children:[e("img",{className:"Item--img",src:w,alt:"tumb"}),e("span",{className:"Item__name",children:"Autumn Limited Edition"}),o("span",{className:"Item__price",children:["$",a.toFixed(2)," \xD7 ",t," ",o("span",{className:"Item__price__total",children:["$",(a*t).toFixed(2)]})]}),e("img",{className:"Item__del",src:D,alt:"delete icon",onClick:()=>{m.dispatch(Q(s))}})]})},q=()=>e("div",{className:"Cart__empty",children:"Your cart is empty."}),Z=()=>{const{items:t}=m.getState();return o("div",{className:"ItemCart",children:[e("div",{className:"ItemCart__container",children:t.map(s=>e(Y,{amount:s.amount,id:s.id},s.id))}),e("a",{href:"https://youtu.be/dQw4w9WgXcQ",className:"ItemCart--checkoutBtn",children:"Checkout"})]})},G=()=>{const{items:t}=m.getState();return o("div",{className:"Cart",children:[e("h1",{className:"Cart__header",children:"Cart"}),e("div",{className:"Cart__main",children:t.length?e(Z,{}):e(q,{})})]})},H=["collections","men","women","about","contact"],J=()=>{const t=l.exports.useRef(null),[s,a]=l.exports.useState(!1),[r,c]=l.exports.useState(!1),{items:n}=m.getState();return o("nav",{className:"Nav",children:[e("img",{onClick:()=>{a(!0)},className:"Nav__menu",src:T,alt:"menu"}),e(R,{to:"/",children:e("img",{className:"Nav__logo",src:P,alt:"logo"})}),o("div",{style:{transform:s?"translateX(0)":null},className:"Nav__links",ref:t,children:[e("img",{className:"Nav__links--close",src:F,alt:"close",onClick:()=>{a(!1)}}),H.map(d=>e(j,{className:({isActive:x})=>`Nav__link ${x?"current":""}`,to:"/"+d,children:E(d)},d))]}),o("div",{className:"Nav__cart",onClick:()=>{c(!r)},children:[e("img",{src:f,alt:"cart"}),n.length?e("span",{className:"num-of-items",children:n.length}):null]}),e("img",{className:"Nav__avatar",src:W,alt:"avatar"}),r?e(G,{}):null]})};var U="/ecommerce-product-page/assets/image-product-2-thumbnail.ad60b1cc.jpg",ee="/ecommerce-product-page/assets/image-product-3-thumbnail.46570324.jpg",te="/ecommerce-product-page/assets/image-product-4-thumbnail.7125519d.jpg";const se=[w,U,ee,te],ae=({index:t,setIndex:s})=>e("div",{className:"Selector",children:se.map((a,r)=>e("div",{style:{outlineWidth:t===r?"initial":null},className:"Selector--div",onClick:()=>{s(r)},children:e("img",{style:{opacity:t===r?"0.5":null},className:"Selector--img",src:a,alt:"img"})},"selector"+r))});var re="/ecommerce-product-page/assets/image-product-1.0c6fe8e3.jpg",ce="/ecommerce-product-page/assets/image-product-2.a8acaa06.jpg",ne="/ecommerce-product-page/assets/image-product-3.5a0b3bac.jpg",oe="/ecommerce-product-page/assets/image-product-4.b130dea1.jpg";const ie=()=>e("svg",{className:"Icon Next",width:"13",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"m2 1 8 8-8 8",strokeWidth:"3",fill:"none",fillRule:"evenodd"})}),le=()=>e("svg",{className:"Icon Previous",width:"12",height:"18",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"M11 1 3 9l8 8",strokeWidth:"3",fill:"none",fillRule:"evenodd"})}),me=()=>e("svg",{className:"Icon Close",width:"14",height:"15",xmlns:"http://www.w3.org/2000/svg",children:e("path",{className:"Icon--path",d:"m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z",fillRule:"evenodd"})}),h=[re,ce,ne,oe],C=({viewWidth:t,activeLightBox:s,closeLightBox:a})=>{const[r,c]=l.exports.useState(0);return o("div",{className:"Slider",children:[e("span",{className:"Slider__preview--icon previous",onClick:()=>{c(r-1==-1?h.length-1:r-1)},children:e(le,{})}),e("span",{className:"Slider__preview--icon next",onClick:()=>{c((r+1)%h.length)},children:e(ie,{})}),e("span",{className:"close",onClick:a,children:e(me,{})}),e("div",{className:"Slider__preview--wrapper",children:e("div",{className:"Slider__preview",children:e("div",{style:{transform:`translateX(${-100*r}%)`},className:"Slider__preview--imgs",onClick:()=>{s&&s()},children:h.map((v,d)=>e("img",{className:"Slider__preview--img",src:v,alt:"preview-img"},"slider"+d))})})}),t>768?e(ae,{index:r,setIndex:c}):null]})};var de="/ecommerce-product-page/assets/icon-plus.fd8d372c.svg",ue="/ecommerce-product-page/assets/icon-minus.7f289c13.svg";const pe=()=>{const[t,s]=l.exports.useState(0);return o("div",{className:"Main",children:[e("h4",{className:"Main__company",children:"SNEAKER COMPANY"}),e("h1",{className:"Main__name",children:"Fall Limited Edition Sneakers"}),e("p",{className:"Main__description",children:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."}),o("div",{className:"Main__price",children:[e("h1",{className:"Main__price--sell",children:"$125.00"}),e("span",{className:"Main__price--actual",children:"$250.00"})]}),o("div",{className:"Main--foot",children:[o("div",{className:"Main--foot__amount",children:[e("img",{onClick:()=>{let a=Number(t);a<=0||s(a-1)},src:ue,alt:"minus",className:"Main--foot__amount--minus"}),e("input",{className:"Main--foot__amount--input",placeholder:0,value:t,onChange:a=>{let r=a.target.value;r=r==="00"?"0":r,s(r)},type:"number",name:"amount",id:"amount"}),e("img",{onClick:()=>{s(Number(t)+1)},src:de,alt:"plus",className:"Main--foot__amount--plus"})]}),o("button",{onClick:()=>{m.dispatch(K(t))},disabled:t<=0,children:[e("img",{src:f,alt:"cart icon"}),"Add to cart"]})]})]})};const he=({viewWidth:t,closeLightBox:s})=>e("div",{className:"LightBox",children:e(C,{viewWidth:t,closeLightBox:s})});function ve(){const[t,s]=l.exports.useState(0),[a,r]=l.exports.useState(!1),c=()=>{r(!1)},n=()=>{r(!0)},i=()=>{s(window.innerWidth)};return l.exports.useEffect(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[t]),o("div",{className:"App",children:[e(J,{}),o("div",{className:"App--container",children:[e(C,{viewWidth:t,activeLightBox:n}),t>768&&a?e(he,{viewWidth:t,closeLightBox:c}):null,e(pe,{})]})]})}const b=()=>(console.log(m.getState()),$.render(e(O,{basename:"/ecommerce-product-page",children:e(ve,{})}),document.getElementById("root")));m.subscribe(b);b();
