(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{7162:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments/[authorId]/[instrumentId]",function(){return n(1972)}])},479:function(e,t,n){"use strict";n.d(t,{ZP:function(){return layout},y7:function(){return x}});var a=n(5893),i=n(9008),s=n.n(i),c=n(1378),o=n.n(c),r=n(1379),l=n(1664),m=n.n(l),navigation=()=>(0,a.jsxs)("div",{className:o().navigation,children:[(0,a.jsx)("input",{className:o().menuBtn,type:"checkbox",id:"menu-btn"}),(0,a.jsx)("label",{className:o().menuIcn,htmlFor:"menu-btn",children:(0,a.jsx)("span",{className:o().menuNavIcn})}),(0,a.jsxs)("ul",{className:o().menu,children:[(0,a.jsx)("li",{children:(0,a.jsx)(m(),{href:"/instruments/",className:"".concat(o().navItem," ").concat((0,r.Li)("/instruments")?o().navItemActive:""),children:"instruments"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m(),{href:"/software/",className:"".concat(o().navItem," ").concat((0,r.Li)("/software")?o().navItemActive:""),children:"software"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m(),{href:"/documentation/getting-started/what_is_sfz/",className:"".concat(o().navItem," ").concat((0,r.Li)("/documentation")?o().navItemActive:""),children:"documentation"})})]})]}),d=n(2663),u=n.n(d),_=n(7294),g=n(1106),h=n.n(g),footer=()=>(0,a.jsx)("section",{className:h().section,children:(0,a.jsxs)("div",{className:h().container,children:[(0,a.jsx)(m(),{href:"https://github.com/sfzformat",target:"_blank",className:h().link,children:(0,a.jsx)("img",{className:h().image,src:"".concat((0,r.yb)(),"/images/icon-github.svg"),alt:"Discord",loading:"lazy"})}),(0,a.jsx)(m(),{href:"https://discord.com/invite/t7nrZ6d",target:"_blank",className:h().link,children:(0,a.jsx)("img",{className:h().image,src:"".concat((0,r.yb)(),"/images/icon-discord.svg"),alt:"Discord",loading:"lazy"})})]})}),f=n(1163);let x="sfz";var layout=e=>{let{children:t}=e,n=(0,f.useRouter)(),[i,c]=(0,_.useState)(!1),updateNav=()=>{window.innerWidth>832&&window.scrollY<585?c(!0):c(!1)};return(0,_.useEffect)(()=>{"/"===n.pathname&&(updateNav(),window.addEventListener("scroll",updateNav),window.addEventListener("resize",updateNav))}),(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:x}),(0,a.jsx)("meta",{name:"description",content:"A free and open format to create musical instruments from sound recordings"}),(0,a.jsx)("meta",{name:"og:image",content:"".concat((0,r.yb)(),"/images/digital-instruments.jpg")}),(0,a.jsx)("meta",{name:"og:title",content:x}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat((0,r.yb)(),"/icons/apple-touch-icon.png")}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat((0,r.yb)(),"/icons/favicon-32x32.png")}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat((0,r.yb)(),"/icons/favicon-16x16.png")}),(0,a.jsx)("link",{rel:"manifest",href:"".concat((0,r.yb)(),"/icons/site.webmanifest")})]}),(0,a.jsx)("header",{className:"".concat(u().header," ").concat(i?"bg-transparent":""),children:(0,a.jsxs)("div",{className:u().headerInner,children:[(0,a.jsx)("a",{href:"".concat((0,r.yb)(),"/"),className:u().headerLink,children:(0,a.jsx)("img",{className:u().logoImage,src:"".concat((0,r.yb)(),"/images/sfz-logo.svg"),alt:x,loading:"lazy"})}),(0,a.jsx)(navigation,{})]})}),(0,a.jsx)("main",{className:u().main,children:t}),(0,a.jsx)(footer,{})]})}},8752:function(e,t,n){"use strict";function imageError(e){let t=e.target,n="".concat(t.getAttribute("data-base"),"/images/").concat(t.getAttribute("data-section"),".jpg");t.getAttribute("src")!==n&&t.setAttribute("src",n)}function getImagePath(e,t,n,a){return a?"".concat(t,"/images/").concat(e,"/").concat(n,"/").concat(a,".jpg"):"".concat(t,"/images/").concat(e,".jpg")}n.d(t,{J:function(){return imageError},a:function(){return getImagePath}})},1379:function(e,t,n){"use strict";n.d(t,{Li:function(){return IsSelected},yb:function(){return GetBasePath}});var a=n(1163);function GetBasePath(){return(0,a.useRouter)().basePath}function IsSelected(e){let t=(0,a.useRouter)();return"/"===e?t.asPath===e:t.asPath.startsWith(e)}},8990:function(e,t,n){"use strict";n.d(t,{B:function(){return includesValue},U:function(){return toSlug}});var a=n(1304),i=n.n(a);function includesValue(e,t){return!!e&&!!t&&("string"==typeof e?"string"==typeof t?e===toSlug(t):t.some(t=>t.name.toLowerCase()===e.toLowerCase()):"object"==typeof e?"string"==typeof t?e.includes(toSlug(t)):e.some(e=>t.some(t=>t.name.toLowerCase()===e.toLowerCase())):void 0)}function toSlug(e){return i()(e||"",{lower:!0})}},1972:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f}});var a=n(5893),i=n(9008),s=n.n(i),c=n(5675),o=n.n(c),r=n(1664),l=n.n(r),m=n(479),d=n(3633),u=n.n(d),_=n(8990),g=n(1379),h=n(8752),f=!0;t.default=e=>{let{instrument:t}=e,n="".concat(m.y7," - Instruments - ").concat(t.name);return(0,a.jsxs)(m.ZP,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"description",content:t.short_description||""}),(0,a.jsx)("meta",{name:"og:image",content:(0,h.a)("instruments",(0,g.yb)(),(0,_.U)(t.category),t.page)}),(0,a.jsx)("meta",{name:"og:title",content:n})]}),(0,a.jsxs)("section",{className:u().section,children:[(0,a.jsxs)("div",{className:u().item,children:[(0,a.jsx)("div",{className:u().itemImage,children:(0,a.jsx)(o(),{className:u().itemImageTag,src:(0,h.a)("instruments",(0,g.yb)(),(0,_.U)(t.category),t.page),alt:t.name,"data-base":(0,g.yb)(),"data-section":"instruments",onError:h.J,fill:!0})}),(0,a.jsxs)("div",{className:u().itemDetails,children:[(0,a.jsx)("h2",{className:u().itemName,children:t.name}),(0,a.jsxs)("p",{className:u().itemAuthor,children:["By"," ",(0,a.jsx)(l(),{href:"/instruments/[authorId]/",as:"/instruments/".concat((0,_.U)(t.author),"/"),className:u().itemLink,children:t.author})]}),(0,a.jsx)("p",{className:u().itemDesc,children:t.short_description}),(0,a.jsx)("p",{children:(0,a.jsx)(l(),{href:t.url,target:"_blank",className:u().itemLink,children:"View website"})}),(0,a.jsxs)("ul",{className:u().attributes,children:[(0,a.jsxs)("li",{className:u().attribute,children:[(0,a.jsx)("img",{className:u().icon,src:"".concat((0,g.yb)(),"/images/icon-category.svg"),alt:"Category",loading:"lazy"}),t.category]}),(0,a.jsxs)("li",{className:u().attribute,children:[(0,a.jsx)("img",{className:u().icon,src:"".concat((0,g.yb)(),"/images/icon-license.svg"),alt:"License",loading:"lazy"}),t.license]}),(0,a.jsxs)("li",{className:u().attribute,children:[(0,a.jsx)("img",{className:u().icon,src:"".concat((0,g.yb)(),"/images/icon-cost.svg"),alt:"Cost",loading:"lazy"}),"Commercial"===t.license?"Paid":"Free"]})]})]})]}),(0,a.jsxs)("div",{className:u().files,children:[(0,a.jsxs)("div",{className:u().filePreviews,children:[(0,a.jsx)("h4",{children:"Preview"}),(0,a.jsx)("audio",{className:u().filePreviewAudio,src:"".concat((0,g.yb)(),"/audio/").concat((0,_.U)(t.category),"/").concat(t.page,".mp3"),controls:!0,preload:"true"})]}),(0,a.jsxs)("div",{className:u().fileDownloads,children:["Commercial"===t.license?(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:"Purchase"}),(0,a.jsx)(l(),{href:t.url,target:"_blank",className:u().itemLink,children:"Via website"})]}):(0,a.jsx)("h4",{children:"Download"}),t.downloads?t.downloads.map(e=>(0,a.jsxs)(l(),{href:e.url,target:"_blank",className:u().fileDownload,children:[(0,a.jsx)("div",{className:u().fileDownloadName,children:e.label}),(0,a.jsxs)("div",{className:u().fileDownloadFormat,children:[e.format,", ",e.samplerate,"Khz, ",e.size]}),(0,a.jsx)("img",{className:u().fileDownloadIcon,src:"".concat((0,g.yb)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})]},(0,_.U)(e.url))):""]})]})]})]})}},1106:function(e){e.exports={section:"footer_section__8Tsim",container:"footer_container__Uapj5",link:"footer_link__nQOF7"}},2663:function(e){e.exports={header:"layout_header__mL3fo",headerInner:"layout_headerInner__jqtjR",headerLink:"layout_headerLink__QCU2P",main:"layout_main__ZmSk3"}},1378:function(e){e.exports={navItem:"navigation_navItem__P6KAS",navItemActive:"navigation_navItemActive__cT7Oe",navButton:"navigation_navButton__mo9ZV",navButtonIcon:"navigation_navButtonIcon__Lcs1g",menu:"navigation_menu__z__KP",menuIcn:"navigation_menuIcn__nahHg",menuNavIcn:"navigation_menuNavIcn__AE34C",menuBtn:"navigation_menuBtn__SLpH6",steps:"navigation_steps__uZkkQ"}},3633:function(e){e.exports={section:"item_section__N6OD8",item:"item_item__BerO0",itemImage:"item_itemImage__h7ank",itemImageTag:"item_itemImageTag__SOCIg",itemDetails:"item_itemDetails__F_kUB",itemName:"item_itemName__w_Wkn",attributes:"item_attributes__4uvag",attribute:"item_attribute__W_YSw",icon:"item_icon__dBv2m",files:"item_files__ozw03",filePreviews:"item_filePreviews__T_CoW",fileDownloads:"item_fileDownloads__A6_tq",filePreviewAudio:"item_filePreviewAudio__sOJlg",fileDownload:"item_fileDownload__kTfNQ",fileDownloadIcon:"item_fileDownloadIcon__TheyY"}}},function(e){e.O(0,[814,493,774,888,179],function(){return e(e.s=7162)}),_N_E=e.O()}]);