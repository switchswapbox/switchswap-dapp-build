(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[14],{1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(5),i=n(0),r=n(763),s=n(467),o=n(760),p=n(734),u=n(227),c=n(940),d=n(19),y=n(843),l=n(59),m=n(7),b=n(775),f=n(1),j=Object(m.a)(b.a)((function(e){return{color:e.theme.palette.getContrastText("#EAECEF"),backgroundColor:"#EAECEF","&:hover":{backgroundColor:"#EAECEF"},boxShadow:"none",padding:"3px 8px",minWidth:0,borderRadius:"3px"}}));function x(e){var t=e.tokenId,n=e.imageUrl,m=e.name,b=e.nftContract,x=e.owner,T=Object(l.a)(),h=Object(i.useState)(!0),v=Object(a.a)(h,2),O=v[0],g=v[1];return Object(f.jsxs)(r.a,{sx:{borderRadius:2,bgcolor:"transparent",transition:"all .2s ease-in-out","&:hover":{transform:"translateY(-".concat(T.spacing(1/4),")"),boxShadow:function(e){return e.shadows[4]}}},children:[Object(f.jsx)(s.a,{sx:{p:2,position:"relative"},children:Object(f.jsx)(o.a,{href:"#/assets/polygon/".concat(y.a,"/").concat(t),children:Object(f.jsx)(s.a,{sx:{border:1,borderRadius:"5px",borderColor:"#DFE3E8"},children:Object(f.jsxs)(p.a,{sx:{paddingTop:"100%",position:"relative"},direction:"row",alignItems:"center",justifyContent:"center",children:[Object(f.jsx)(p.a,{direction:"row",alignItems:"center",justifyContent:"center",sx:{display:O?"flex":"none",position:"absolute",top:0,width:"100%",height:"100%"},children:Object(f.jsx)(c.a,{color:"#637381",loading:O})}),Object(f.jsx)(s.a,{component:"img",src:n,onLoad:function(){return g(!1)},sx:{top:0,width:"100%",height:"100%",objectFit:"contain",display:O?"none":"block",position:"absolute",borderRadius:"5px"}})]})})})}),Object(f.jsxs)(p.a,{spacing:.5,sx:{p:2,pt:1,pb:1},children:[Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(y.a,"/").concat(t),sx:{maxWidth:"70%"},children:Object(f.jsx)(u.a,{variant:"subtitle2",noWrap:!0,children:m})}),Object(f.jsx)(j,{variant:"contained",size:"small",disableElevation:!0,disableFocusRipple:!0,disableRipple:!0,children:Object(f.jsx)(u.a,{variant:"caption",noWrap:!0,children:"Polygon"})})]}),Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(y.a,"/").concat(t),children:Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(f.jsx)(u.a,{variant:"caption",noWrap:!0,children:"Collection"}),Object(f.jsx)(d.a,{icon:"teenyicons:contract-outline",width:12,height:12})]})}),Object(f.jsx)(u.a,{variant:"body2",noWrap:!0,sx:{fontSize:13,maxWidth:"30%"},children:b})]}),Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(y.a,"/").concat(t),children:Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(f.jsx)(u.a,{variant:"caption",noWrap:!0,children:"Owner"}),Object(f.jsx)(d.a,{icon:"healthicons:miner-worker-outline",width:18,height:18})]})}),Object(f.jsx)(u.a,{variant:"body2",noWrap:!0,sx:{fontSize:13,maxWidth:"30%"},children:x||""})]}),Object(f.jsxs)(p.a,{direction:"column",spacing:0,children:[Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(y.a,"/").concat(t),children:Object(f.jsxs)(p.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(f.jsx)(u.a,{variant:"caption",noWrap:!0,children:"Highest Bid"}),Object(f.jsx)(d.a,{icon:"bx:bx-dollar-circle",width:16,height:16})]})}),Object(f.jsx)(u.a,{variant:"body2",noWrap:!0,sx:{fontSize:13},children:"N/A MATIC"})]}),Object(f.jsx)(p.a,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:Object(f.jsx)(u.a,{variant:"caption",noWrap:!0,color:"#707A8A",children:"~ N/A $"})})]})]})]})}},1078:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var a=n(18),i=n.n(a),r=n(26),s=n(36),o=n(906),p=n.n(o),u=n(840),c=n(952),d=n(88),y=n(843),l=n(907),m=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,s){var o,u,y,l,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.tokenByIndex(t);case 2:return o=e.sent.toString(),e.next=5,n.tokenURI(o);case 5:if(u=e.sent,!(y=Object(c.a)(u))){e.next=13;break}return e.next=10,n.ownerOf(o);case 10:l=e.sent,m="".concat(d.h[0],"/").concat(y),p.a.get(m).then((function(e){var t=e.data.name||"";if(e.data&&e.data.image){var n=Object(c.a)(e.data.image);if(n){var i="".concat(d.h[0],"/").concat(n);a(!1),s((function(e){for(var n=0,a=0;a<e.length&&!(parseInt(o,10)>parseInt(e[a].tokenId,10));a++)n++;return[].concat(Object(r.a)(e.slice(0,n)),[{tokenId:o,tokenURI:u,imageUrl:i,name:t,owner:l}],Object(r.a)(e.slice(n)))}))}}}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a){var r,s,o,p,c,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a([]),r=new u.a.providers.JsonRpcProvider("https://polygon-rpc.com/"),s=new u.a.Contract(y.a,l.a,r),e.next=5,s.totalSupply();case 5:for(o=e.sent.toString(),p=o-1-(t-1)*d.m,c=p-d.m>-1?p-d.m:-1,b=p;b>c;b--)m(b,s,n,a);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,s,o){var u,y,l,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.tokenOfOwnerByIndex(a,t);case 2:return u=e.sent.toString(),e.next=5,n.tokenURI(u);case 5:y=e.sent,(l=Object(c.a)(y))&&(m="".concat(d.h[0],"/").concat(l),p.a.get(m).then((function(e){var t=e.data.name||"";if(e.data&&e.data.image){var n=Object(c.a)(e.data.image);if(n){var i="".concat(d.h[0],"/").concat(n);s(!1),o((function(e){for(var n=0,s=0;s<e.length&&!(parseInt(u,10)>parseInt(e[s].tokenId,10));s++)n++;return[].concat(Object(r.a)(e.slice(0,n)),[{tokenId:u,tokenURI:y,imageUrl:i,name:t,owner:a}],Object(r.a)(e.slice(n)))}))}}})));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,i,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,r){var s,o,p,c,m,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.a.utils.isAddress(n)){e.next=10;break}return r([]),s=new u.a.providers.JsonRpcProvider("https://polygon-rpc.com/"),o=new u.a.Contract(y.a,l.a,s),e.next=6,o.balanceOf(n);case 6:for(p=e.sent.toString(),c=p-1-(t-1)*d.m,m=c-d.m>-1?c-d.m:-1,b=c;b>m;b--)f(b,o,n,a,r);case 10:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}()},1744:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(3),i=n(18),r=n.n(i),s=n(36),o=n(5),p=n(0),u=n(758),c=n(754),d=n(734),y=n(1687),l=n(180),m=n(21),b=n(940),f=n(815),j=n(843),x=n(88),T=n(1742),h=n(1077),v=n(1078),O=n(951),g=n(888),w=n(950),I=n(1);function k(){var e=Object(m.i)().pageUrl,t=Object(m.h)(),n=Object(l.a)().themeStretch,i=Object(p.useState)([]),k=Object(o.a)(i,2),M=k[0],C=k[1],A=Object(p.useState)(parseInt(e||"0")),F=Object(o.a)(A,2),R=F[0],E=F[1],S=Object(p.useState)(1),W=Object(o.a)(S,2),U=W[0],B=W[1],D=Object(p.useState)(!0),P=Object(o.a)(D,2),J=P[0],N=P[1];Object(p.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(w.a)(g.a,O.a,g.e),e.next=3,t.totalSupply();case 3:n=e.sent.toString(),B(Math.ceil(parseInt(n,10)/x.m));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.useEffect)((function(){Object(v.a)(R,N,C)}),[R]);var z=Object(T.a)(),_=Object(o.a)(z,2),G=_[0],H=_[1].width,L=Object(p.useState)(4),Q=Object(o.a)(L,2),Y=Q[0],$=Q[1];return Object(p.useEffect)((function(){$(H>1e3?3:4)}),[H]),Object(I.jsx)(f.a,{title:"Univere Gallery",children:Object(I.jsxs)(u.a,{maxWidth:!n&&"xl",children:[Object(I.jsxs)(c.a,{container:!0,spacing:3,ref:G,children:[Object(I.jsx)(d.a,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:"100%",display:J?"flex":"none",mt:5},children:Object(I.jsx)(b.b,{color:"#637381",loading:J})}),M.map((function(e){return Object(I.jsx)(c.a,{item:!0,xs:12,sm:6,md:4,lg:Y,children:Object(I.jsx)(h.a,Object(a.a)(Object(a.a)({},e),{},{nftContract:j.a}))},e.tokenId)}))]}),Object(I.jsx)(d.a,{direction:"row",justifyContent:"center",sx:{pt:6},children:Object(I.jsx)(y.a,{count:U,page:R,onChange:function(e,n){n&&(N(!0),E(n),t("/gallery/universe/".concat(n)))}})})]})})}},815:function(e,t,n){"use strict";var a=n(3),i=n(33),r=n(303),s=n(0),o=n(467),p=n(1),u=["children","title"],c=Object(s.forwardRef)((function(e,t){var n=e.children,s=e.title,c=void 0===s?"":s,d=Object(i.a)(e,u);return Object(p.jsxs)(o.a,Object(a.a)(Object(a.a)({ref:t},d),{},{children:[Object(p.jsx)(r.a,{children:Object(p.jsx)("title",{children:c})}),n]}))}));t.a=c},843:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0xa0Afb3513B99E1b099CE9F3C007eE937B04e7870"},888:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return o}));var a="NFT Dapp",i="wss://rpc.crust.network",r="https://crust.subscan.io/extrinsic/",s="0xa0Afb3513B99E1b099CE9F3C007eE937B04e7870",o="https://polygon-rpc.com/"},904:function(e,t){},905:function(e,t){},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataIdOnchain",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataRegisterProof",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"string",name:"tokenURIdata",type:"string"},{internalType:"string",name:"dataIdOnchain",type:"string"},{internalType:"string",name:"dataRegisterProof",type:"string"}],name:"mintDataNTF",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}]},950:function(e,t,n){"use strict";var a=n(840);t.a=function(e,t,n){var i=new a.a.providers.JsonRpcProvider(n);return new a.a.Contract(e,t,i)}},951:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataIdOnchain",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataRegisterProof",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"string",name:"tokenURIdata",type:"string"},{internalType:"string",name:"dataIdOnchain",type:"string"},{internalType:"string",name:"dataRegisterProof",type:"string"}],name:"mintDataNTF",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}]},952:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=e.match(/(Qm[\w]+)/);return t?t[1]:null}}}]);