(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[801,654],{1120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(2122),r=n(1314),o=n(9112);const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(e,(0,a.Z)({defaultTheme:o.Z},t))}},801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(7294),r=n(2318),o=(n(9654),n(4206));const l=n.n(o)().create({baseUrl:"https://www.streho.com/",timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT"+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}}),c=function(e){return(0,a.useEffect)((()=>{l.post("https://www.streho.com/api/logout/",{refresh_token:localStorage.getItem("refresh_token")}),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),l.defaults.headers.Authorization=null,e.history.push("/")}),[]),a.createElement(a.Fragment,null,a.createElement("center",null,a.createElement("div",{style:{display:"flex",flexDirection:"row"}},a.createElement(r.Z,{variant:"h2",component:"h2"},"Logged out"),a.createElement("br",null))))}},9654:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(7294),r=n(1120),o=n(8463),l=n(9738),c=n(9912),m=n(951),s=n(2318),i=n(8744);const u=(0,r.Z)({root:{maxWidth:345},media:{aspectRatio:"16/9",minHeight:"90px",height:"12%"}}),d=function(e){const t=u();return a.createElement("div",null,a.createElement(o.Z,{className:t.root},a.createElement(l.Z,null,a.createElement(m.Z,{className:t.media,image:e.image}),a.createElement(c.Z,null,a.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),"Gilani Network"===e.name?a.createElement(a.Fragment,null,a.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p",style:{paddingBottom:7}},a.createElement(i.Z,{lines:1,more:"Lexo më shumë",less:"Lexo më pak",expanded:!1,width:200,truncatedEndingComponent:"... "},"Gilani Network është platformë e krijuar nga një grup joformal i shoqërisë civile në Gjilan, me qëllim të ndërlidhjes së qytetarëve mes vete."))):a.createElement(a.Fragment,null,a.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p"},e.features),a.createElement(s.Z,{variant:"body2",color:"textSecondary",component:"p"},a.createElement("br",null),"Qyteti: ",e.city,a.createElement("br",null),e.reward?a.createElement("p",{className:"text"},"Shperblimi: ",e.reward," euro"):a.createElement("p",{className:"text"},"Pa shperblim")))))))}}}]);