(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[327],{6327:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(2318);const r=(0,a.lazy)((()=>Promise.all([n.e(314),n.e(206),n.e(832),n.e(343),n.e(38)]).then(n.bind(n,8038)))),s=(0,a.lazy)((()=>Promise.all([n.e(314),n.e(213),n.e(654)]).then(n.bind(n,9654)))),c=function(){const[e,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch("/api/all-found/").then((e=>e.json())).then((e=>{t(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement(a.Suspense,{fallback:a.createElement("p",null,"Loading")},a.createElement(r,null),a.createElement("br",null),a.createElement("div",{style:{marginLeft:"2%"}},a.createElement(l.Z,{variant:"h4",component:"h5",style:{marginLeft:"1%"}},"Te gjitha kafshet e gjetura"),a.createElement("div",{className:"Home"},e.map(((e,t)=>a.createElement("a",{href:"/posts/"+e.id,style:{margin:"2% 1%"}},a.createElement(s,{name:e.name.slice(0,21),description:e.description,features:e.features.slice(0,31)+"...",city:e.city,reward:e.reward,image:e.photo}))))))))}}}]);