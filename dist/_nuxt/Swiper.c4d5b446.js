import{_ as a}from"./nuxt-img.8e006573.js";import{S as l}from"./Swiper.vue_vue_type_style_index_0_lang.2bd4aea6.js";import{e as p,J as c,o as e,D as s,M as r,V as d,W as w,P as u}from"./entry.1e0f338d.js";import"./composables.801de561.js";const _={class:"swiper-container overflow-hidden"},m={class:"swiper-wrapper"},h={class:"swiper-slide rounded-xl select-none"},v=r("div",{class:"swiper-lazy-preloader"},null,-1),b=p({__name:"Swiper",props:{slides:{type:Array,required:!0}},setup(t){const o=t;return c(()=>{new l(".swiper-container",{spaceBetween:30,lazy:{loadPrevNext:!0,loadPrevNextAmount:2},slidesPerGroup:1,loop:!1,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1.5,spaceBetween:20},720:{slidesPerView:2.5,spaceBetween:30},1180:{slidesPerView:3.5,spaceBetween:30},1480:{slidesPerView:3.5,spaceBetween:40}}})}),(x,f)=>{const i=a;return e(),s("div",_,[r("div",m,[(e(!0),s(d,null,w(o.slides,n=>(e(),s("div",h,[u(i,{class:"swiper-image swiper-lazy rounded-xl",src:n.img,alt:"logo",width:"540",height:"480",format:"webp"},null,8,["src"]),v]))),256))])])}}});export{b as default};