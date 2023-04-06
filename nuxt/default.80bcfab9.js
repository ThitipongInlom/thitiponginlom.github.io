import{m as d,p as w,q as k,s as x,v as H,x as L,y as N,a as q,b as E,z as f,e as S,h as r,w as g,o as c,i as P,t as T,F as y,r as b,A as j,c as _}from"./entry.f9b426c7.js";const z=t=>Object.fromEntries(Object.entries(t).filter(([,n])=>n!==void 0)),u=(t,n)=>(o,e)=>(w(()=>t({...z(o),...e.attrs},e)),()=>{var a,s;return n?(s=(a=e.slots).default)==null?void 0:s.call(a):null}),p={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},D=d({name:"Link",inheritAttrs:!1,props:{...p,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:u(t=>({link:[t]}))}),M=d({name:"Title",inheritAttrs:!1,setup:u((t,{slots:n})=>{var e,a,s;return{title:((s=(a=(e=n.default)==null?void 0:e.call(n))==null?void 0:a[0])==null?void 0:s.children)||null}})}),R=d({name:"Meta",inheritAttrs:!1,props:{...p,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:u(t=>{const n={...t};return n.httpEquiv&&(n["http-equiv"]=n.httpEquiv,delete n.httpEquiv),{meta:[n]}})}),U=d({name:"Head",inheritAttrs:!1,setup:(t,n)=>()=>{var o,e;return(e=(o=n.slots).default)==null?void 0:e.call(o)}}),C=d({name:"Html",inheritAttrs:!1,props:{...p,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:u(t=>({htmlAttrs:t}),!0)}),F=d({name:"Body",inheritAttrs:!1,props:{...p,renderPriority:[String,Number]},setup:u(t=>({bodyAttrs:t}),!0)});function O(t={addDirAttribute:!1,addSeoAttributes:!1,identifierAttribute:"hid"}){const{addDirAttribute:n,addSeoAttributes:o,identifierAttribute:e}=t,a=t.i18n||k(x().$i18n),s=H(),m=L();return N({addDirAttribute:n,addSeoAttributes:o,identifierAttribute:e,router:m,route:s,i18n:a})}const $={setup(){const{t}=E(),n=O({addDirAttribute:!0,identifierAttribute:"id",addSeoAttributes:!0}),o=f(()=>`${t("general.profile.name")} | ${t("general.general.resume")}`),e=f(()=>`${t("general.profile.name")}, ${t("general.general.resume")}`),a=f(()=>`${t("about.text1")} ${t("about.text2")}`);return{title:o,keywords:e,description:a,head:n}},data:()=>({imageBuild:{profile:new URL(""+globalThis.__publicAssetsURL("image/general/thitiponginlom.jpg"),self.location).href,icon:"./image/general/favicon.ico"}}),mounted(){}};function V(t,n,o,e,a,s){const m=M,h=D,i=R,A=U,v=F,B=C;return c(),S("div",null,[r(B,{lang:e.head.htmlAttrs.lang,dir:e.head.htmlAttrs.dir},{default:g(()=>[r(A,null,{default:g(()=>[r(m,null,{default:g(()=>[P(T(e.title),1)]),_:1}),r(h,{rel:"icon",type:"image/x-icon",href:t.imageBuild.icon},null,8,["href"]),r(i,{name:"charset",content:"utf-8"}),r(i,{name:"robots",content:"index, follow"}),r(i,{name:"viewport",content:"width=device-width, initial-scale=1"}),r(i,{name:"keywords",content:e.keywords},null,8,["content"]),r(i,{name:"description",content:e.description},null,8,["content"]),r(i,{name:"twitter:card",content:"summary_large_image"}),r(i,{name:"twitter:site",content:"@ingnice007"}),r(i,{name:"twitter:description",content:e.description},null,8,["content"]),r(i,{name:"twitter:image",content:t.imageBuild.profile},null,8,["content"]),r(i,{name:"og:title",content:e.title},null,8,["content"]),r(i,{name:"og:description",content:e.description},null,8,["content"]),r(i,{name:"og:type",content:"website"}),r(i,{name:"og:image",content:t.imageBuild.profile},null,8,["content"]),(c(!0),S(y,null,b(e.head.link,l=>(c(),_(h,{key:l.id,id:l.id,rel:l.rel,href:l.href,hreflang:l.hreflang},null,8,["id","rel","href","hreflang"]))),128)),(c(!0),S(y,null,b(e.head.meta,l=>(c(),_(i,{key:l.id,id:l.id,property:l.property,content:l.content},null,8,["id","property","content"]))),128))]),_:1}),r(v,null,{default:g(()=>[j(t.$slots,"default")]),_:3})]),_:3},8,["lang","dir"])])}const G=q($,[["render",V]]);export{G as default};
