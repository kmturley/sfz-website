(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{6916:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments/[authorId]",function(){return t(6920)}])},6920:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return j}});var n=t(5893),a=t(9008),r=t.n(a),c=t(1163),i=t(769),l=t(1562),o=t.n(l),u=t(8581),d=t(8802),h=t(3047),m=t(1895),y=t(5697);let x=e=>{let{instruments:s}=e,t=(0,c.useRouter)(),a=e=>{var s,n,a;let r=t.query.search;return(!t.query.authorId||t.query.authorId===(0,h.U)(e.author))&&(!t.query.category||!!(0,h.B)(t.query.category,e.category))&&(!t.query.license||!!(0,h.B)(t.query.license,e.license))&&(!t.query.cost||("free"!==t.query.cost||"Commercial"!==e.license)&&("paid"!==t.query.cost||"Commercial"===e.license))&&(!t.query.search||(null===(s=e.name)||void 0===s?void 0:s.toLowerCase().indexOf(r))!==-1||(null===(n=e.short_description)||void 0===n?void 0:n.toLowerCase().indexOf(r))!==-1||(null===(a=e.category)||void 0===a?void 0:a.indexOf(r))!==-1)},l=e=>{let s=e.target;t.query.search=s.value?s.value.toLowerCase():"",t.push({pathname:t.pathname,query:t.query})},x=s.filter(e=>!!a(e)&&e),j="".concat(i.y7," - Instruments"),v=t.query.search;return(0,n.jsxs)(i.ZP,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:j}),(0,n.jsx)("meta",{name:"description",content:j}),(0,n.jsx)("meta",{name:"og:image",content:"".concat((0,y.yb)(),"/images/instruments.jpg")}),(0,n.jsx)("meta",{name:"og:title",content:j})]}),(0,n.jsxs)("section",{className:o().section,children:[(0,n.jsx)("div",{className:o().header,children:(0,n.jsxs)("h1",{className:o().title,children:[s[0].author," ",(0,n.jsxs)("span",{className:o().count,children:["(",x.length,")"]})]})}),(0,n.jsxs)("div",{className:o().filters,children:[(0,n.jsx)("span",{className:o().filterTitle,children:"Filter by:"}),(0,n.jsx)(d.Z,{label:"Category",values:(0,m.a9)()}),(0,n.jsx)(d.Z,{label:"License",values:(0,m.z7)()}),(0,n.jsx)(d.Z,{label:"Cost",values:(0,m.aQ)()}),(0,n.jsx)("input",{className:o().search,placeholder:"Keyword",type:"search",id:"search",name:"search",value:v,onChange:l})]}),(0,n.jsx)("div",{className:o().list,children:x.map((e,s)=>(0,n.jsx)(u.Z,{section:"instruments",item:e,itemIndex:s},"".concat(e.slug,"-").concat(s)))})]})]})};var j=!0;s.default=x}},function(e){e.O(0,[814,493,785,774,888,179],function(){return e(e.s=6916)}),_N_E=e.O()}]);