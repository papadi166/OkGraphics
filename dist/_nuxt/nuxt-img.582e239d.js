import{u as h}from"./composables.d88fc68b.js";import{p as S,m as a,M as s,e as b,v as f,K as z,i as p}from"./entry.88d9d769.js";const _=()=>S().$img,w={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},I=e=>{const u=a(()=>({provider:e.provider,preset:e.preset})),o=a(()=>({width:s(e.width),height:s(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=a(()=>({...e.modifiers,width:s(e.width),height:s(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:u,attrs:o,modifiers:i}},m={...w,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},N=b({name:"NuxtImg",props:m,setup:(e,u)=>{const o=_(),i=I(e),g=f(!1),r=a(()=>o.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:s(e.width),height:s(e.height)}})),y=a(()=>{const t=i.attrs.value;return e.sizes&&(t.sizes=r.value.sizes,t.srcset=r.value.srcset),t}),l=a(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||g.value)return!1;if(typeof t=="string")return t;const n=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return o(e.src,{...i.modifiers.value,width:n[0],height:n[1],quality:n[2]||50},i.options.value)}),d=a(()=>e.sizes?r.value.src:o(e.src,i.modifiers.value,i.options.value)),c=a(()=>l.value?l.value:d.value);if(e.preload){const t=Object.values(r.value).every(n=>n);h({link:[{rel:"preload",as:"image",...t?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:c.value}}]})}const v=f(null);return z(()=>{if(l.value){const t=new Image;t.src=d.value,t.onload=()=>{v.value.src=d.value,g.value=!0}}}),()=>p("img",{ref:v,key:c.value,src:c.value,...y.value,...u.attrs})}}),q=Object.freeze(Object.defineProperty({__proto__:null,imgProps:m,default:N},Symbol.toStringTag,{value:"Module"}));export{N as _,I as a,w as b,q as n,_ as u};
