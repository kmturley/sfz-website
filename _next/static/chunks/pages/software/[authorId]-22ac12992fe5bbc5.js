(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{9183:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/software/[authorId]",function(){return s(7403)}])},7403:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSG:function(){return x}});var a=s(5893),t=s(9008),n=s.n(t),l=s(1163),c=s(769),i=s(1562),o=s.n(i),u=s(8581),d=s(8802),h=s(3047),y=s(1895);let f=e=>{let{applications:r}=e,s=(0,l.useRouter)(),t=e=>{var r,a,t;let n=s.query.search;return(!s.query.authorId||s.query.authorId===(0,h.U)(e.author))&&(!s.query.category||!!(0,h.B)(s.query.category,e.category))&&(!s.query.license||!!(0,h.B)(s.query.license,e.license))&&(!s.query.platform||!!(0,h.B)(s.query.platform,e.os))&&(!s.query.search||(null===(r=e.name)||void 0===r?void 0:r.toLowerCase().indexOf(n))!==-1||(null===(a=e.short_description)||void 0===a?void 0:a.toLowerCase().indexOf(n))!==-1||(null===(t=e.category)||void 0===t?void 0:t.indexOf(n))!==-1)},i=e=>{let r=e.target;s.query.search=r.value?r.value.toLowerCase():"",s.push({pathname:s.pathname,query:s.query})},f=(0,y.os)().filter(e=>!!t(e)&&e),x="".concat(c.y7," - Software"),m=s.query.search;return(0,a.jsxs)(c.ZP,{children:[(0,a.jsx)(n(),{children:(0,a.jsx)("title",{children:x})}),(0,a.jsxs)("section",{className:o().section,children:[(0,a.jsx)("div",{className:o().header,children:(0,a.jsxs)("h1",{className:o().title,children:[r[0].author," ",(0,a.jsxs)("span",{className:o().count,children:["(",f.length,")"]})]})}),(0,a.jsxs)("div",{className:o().filters,children:[(0,a.jsx)("span",{className:o().filterTitle,children:"Filter by:"}),(0,a.jsx)(d.Z,{label:"Category",values:(0,y.ud)()}),(0,a.jsx)(d.Z,{label:"License",values:(0,y.oN)()}),(0,a.jsx)(d.Z,{label:"Platform",values:(0,y.BZ)()}),(0,a.jsx)("input",{className:o().search,placeholder:"Keyword",type:"search",id:"search",name:"search",value:m,onChange:i})]}),(0,a.jsx)("div",{className:o().list,children:f.map((e,r)=>(0,a.jsx)(u.Z,{section:"software",item:e,itemIndex:r},"".concat(e.slug,"-").concat(r)))})]})]})};var x=!0;r.default=f}},function(e){e.O(0,[814,493,785,774,888,179],function(){return e(e.s=9183)}),_N_E=e.O()}]);