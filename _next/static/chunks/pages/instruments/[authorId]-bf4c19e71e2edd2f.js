(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{6916:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments/[authorId]",function(){return r(6920)}])},6920:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return x}});var a=r(5893),n=r(9008),t=r.n(n),c=r(1163),l=r(769),i=r(1562),u=r.n(i),o=r(8581),d=r(8802),h=r(3047),y=r(1895);let m=e=>{let{instruments:s}=e,r=(0,c.useRouter)(),n=e=>{var s,a,n;let t=r.query.search;return(!r.query.authorId||r.query.authorId===(0,h.U)(e.author))&&(!r.query.category||!!(0,h.B)(r.query.category,e.category))&&(!r.query.license||!!(0,h.B)(r.query.license,e.license))&&(!r.query.cost||("free"!==r.query.cost||"Commercial"!==e.license)&&("paid"!==r.query.cost||"Commercial"===e.license))&&(!r.query.search||(null===(s=e.name)||void 0===s?void 0:s.toLowerCase().indexOf(t))!==-1||(null===(a=e.short_description)||void 0===a?void 0:a.toLowerCase().indexOf(t))!==-1||(null===(n=e.category)||void 0===n?void 0:n.indexOf(t))!==-1)},i=e=>{let s=e.target;r.query.search=s.value?s.value.toLowerCase():"",r.push({pathname:r.pathname,query:r.query})},m=s.filter(e=>!!n(e)&&e),x="".concat(l.y7," - Instruments"),v=r.query.search;return(0,a.jsxs)(l.ZP,{children:[(0,a.jsx)(t(),{children:(0,a.jsx)("title",{children:x})}),(0,a.jsxs)("section",{className:u().section,children:[(0,a.jsx)("div",{className:u().header,children:(0,a.jsxs)("h1",{className:u().title,children:[s[0].author," ",(0,a.jsxs)("span",{className:u().count,children:["(",m.length,")"]})]})}),(0,a.jsxs)("div",{className:u().filters,children:[(0,a.jsx)("span",{className:u().filterTitle,children:"Filter by:"}),(0,a.jsx)(d.Z,{label:"Category",values:(0,y.a9)()}),(0,a.jsx)(d.Z,{label:"License",values:(0,y.z7)()}),(0,a.jsx)(d.Z,{label:"Cost",values:(0,y.aQ)()}),(0,a.jsx)("input",{className:u().search,placeholder:"Keyword",type:"search",id:"search",name:"search",value:v,onChange:i})]}),(0,a.jsx)("div",{className:u().list,children:m.map((e,s)=>(0,a.jsx)(o.Z,{section:"instruments",item:e,itemIndex:s},"".concat(e.slug,"-").concat(s)))})]})]})};var x=!0;s.default=m}},function(e){e.O(0,[814,493,785,774,888,179],function(){return e(e.s=6916)}),_N_E=e.O()}]);