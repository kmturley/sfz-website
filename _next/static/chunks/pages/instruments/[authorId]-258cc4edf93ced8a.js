(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{6916:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments/[authorId]",function(){return t(4416)}])},4416:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return x}});var a=t(5893),n=t(9008),r=t.n(n),c=t(1163),i=t(479),l=t(9155),o=t.n(l),u=t(1822),h=t(2058),d=t(8990),m=t(252),y=t(1379),x=!0;s.default=e=>{let{instruments:s}=e,t=(0,c.useRouter)(),matchesFilters=e=>{var s,a,n;let r=t.query.search;return(!t.query.authorId||t.query.authorId===(0,d.U)(e.author))&&(!t.query.category||!!(0,d.B)(t.query.category,e.category))&&(!t.query.license||!!(0,d.B)(t.query.license,e.license))&&(!t.query.cost||("free"!==t.query.cost||"Commercial"!==e.license)&&("paid"!==t.query.cost||"Commercial"===e.license))&&(!t.query.search||(null===(s=e.name)||void 0===s?void 0:s.toLowerCase().indexOf(r))!==-1||(null===(a=e.short_description)||void 0===a?void 0:a.toLowerCase().indexOf(r))!==-1||(null===(n=e.category)||void 0===n?void 0:n.indexOf(r))!==-1)},n=s.filter(e=>!!matchesFilters(e)&&e),l="".concat(i.y7," - Instruments"),x=t.query.search;return(0,a.jsxs)(i.ZP,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:l}),(0,a.jsx)("meta",{name:"description",content:l}),(0,a.jsx)("meta",{name:"og:image",content:"".concat((0,y.yb)(),"/images/instruments.jpg")}),(0,a.jsx)("meta",{name:"og:title",content:l})]}),(0,a.jsxs)("section",{className:o().section,children:[(0,a.jsx)("div",{className:o().header,children:(0,a.jsxs)("h1",{className:o().title,children:[s[0].author," ",(0,a.jsxs)("span",{className:o().count,children:["(",n.length,")"]})]})}),(0,a.jsxs)("div",{className:o().filters,children:[(0,a.jsx)("span",{className:o().filterTitle,children:"Filter by:"}),(0,a.jsx)(h.Z,{label:"Category",values:(0,m.a9)()}),(0,a.jsx)(h.Z,{label:"License",values:(0,m.z7)()}),(0,a.jsx)(h.Z,{label:"Cost",values:(0,m.aQ)()}),(0,a.jsx)("input",{className:o().search,placeholder:"Keyword",type:"search",id:"search",name:"search",value:x,onChange:e=>{let s=e.target;t.query.search=s.value?s.value.toLowerCase():"",t.push({pathname:t.pathname,query:t.query})}})]}),(0,a.jsx)("div",{className:o().list,children:n.map((e,s)=>(0,a.jsx)(u.Z,{section:"instruments",item:e,itemIndex:s},"".concat(e.slug,"-").concat(s)))})]})]})}}},function(e){e.O(0,[814,493,720,774,888,179],function(){return e(e.s=6916)}),_N_E=e.O()}]);