(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{4854:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/software",function(){return a(9632)}])},9632:function(e,s,a){"use strict";a.r(s);var t=a(5893),r=a(9008),n=a.n(r),l=a(1163),c=a(479),i=a(9155),o=a.n(i),u=a(1822),d=a(2058),h=a(8990),m=a(252),f=a(1379);s.default=()=>{let e=(0,l.useRouter)(),matchesFilters=s=>{var a,t,r;let n=e.query.search;return(!e.query.category||!!(0,h.B)(e.query.category,s.category))&&(!e.query.license||!!(0,h.B)(e.query.license,s.license))&&(!e.query.platform||!!(0,h.B)(e.query.platform,s.os))&&(!e.query.search||(null===(a=s.name)||void 0===a?void 0:a.toLowerCase().indexOf(n))!==-1||(null===(t=s.short_description)||void 0===t?void 0:t.toLowerCase().indexOf(n))!==-1||(null===(r=s.category)||void 0===r?void 0:r.indexOf(n))!==-1)},s=(0,m.os)().filter(e=>!!matchesFilters(e)&&e),a="".concat(c.y7," - Software"),r=e.query.search;return(0,t.jsxs)(c.ZP,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:a}),(0,t.jsx)("meta",{name:"description",content:a}),(0,t.jsx)("meta",{name:"og:image",content:"".concat((0,f.yb)(),"/images/software.jpg")}),(0,t.jsx)("meta",{name:"og:title",content:a})]}),(0,t.jsxs)("section",{className:o().section,children:[(0,t.jsx)("div",{className:o().header,children:(0,t.jsxs)("h1",{className:o().title,children:["Software ",(0,t.jsxs)("span",{className:o().count,children:["(",s.length,")"]})]})}),(0,t.jsxs)("div",{className:o().filters,children:[(0,t.jsx)("span",{className:o().filterTitle,children:"Filter by:"}),(0,t.jsx)(d.Z,{label:"Category",values:(0,m.ud)()}),(0,t.jsx)(d.Z,{label:"License",values:(0,m.oN)()}),(0,t.jsx)(d.Z,{label:"Platform",values:(0,m.BZ)()}),(0,t.jsx)("input",{className:o().search,placeholder:"Keyword",type:"search",id:"search",name:"search",value:r,onChange:s=>{let a=s.target;e.query.search=a.value?a.value.toLowerCase():"",e.push({pathname:e.pathname,query:e.query})}})]}),(0,t.jsx)("div",{className:o().list,children:s.map((e,s)=>(0,t.jsx)(u.Z,{section:"software",item:e,itemIndex:s},"".concat(e.slug,"-").concat(s)))})]})]})}}},function(e){e.O(0,[814,493,720,774,888,179],function(){return e(e.s=4854)}),_N_E=e.O()}]);