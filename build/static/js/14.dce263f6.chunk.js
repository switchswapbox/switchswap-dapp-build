(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[14],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(18),i=n.n(a),r=n(26),s=n(37),o=n(915),c=n.n(o),p=n(860),u=n(960),d=n(90),l=n(849),y=n(869),b=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,s){var o,p,l,y,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.tokenByIndex(t);case 2:return o=e.sent.toString(),e.next=5,n.tokenURI(o);case 5:if(p=e.sent,!(l=Object(u.a)(p))){e.next=13;break}return e.next=10,n.ownerOf(o);case 10:y=e.sent,b="".concat(d.h[0],"/").concat(l),c.a.get(b).then((function(e){var t=e.data.name||"";if(e.data&&e.data.image){var n=Object(u.a)(e.data.image);if(n){var i="".concat(d.h[0],"/").concat(n);a(!1),s((function(e){for(var n=0,a=0;a<e.length&&!(parseInt(o,10)>parseInt(e[a].tokenId,10));a++)n++;return[].concat(Object(r.a)(e.slice(0,n)),[{tokenId:o,tokenURI:p,imageUrl:i,name:t,owner:y}],Object(r.a)(e.slice(n)))}))}}}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a){var r,s,o,c,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a([]),r=new p.a.providers.JsonRpcProvider("https://polygon-rpc.com/"),s=new p.a.Contract(l.a,y.a,r),e.next=5,s.totalSupply();case 5:for(o=e.sent.toString(),c=o-1-(t-1)*d.n,u=c-d.n>-1?c-d.n:-1,m=c;m>u;m--)b(m,s,n,a);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,s,o){var p,l,y,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.tokenOfOwnerByIndex(a,t);case 2:return p=e.sent.toString(),e.next=5,n.tokenURI(p);case 5:l=e.sent,(y=Object(u.a)(l))&&(b="".concat(d.h[0],"/").concat(y),c.a.get(b).then((function(e){var t=e.data.name||"";if(e.data&&e.data.image){var n=Object(u.a)(e.data.image);if(n){var i="".concat(d.h[0],"/").concat(n);s(!1),o((function(e){for(var n=e.length,s=e.length;s>0&&!(parseInt(p,10)>parseInt(e[s-1].tokenId,10));s--)n--;return[].concat(Object(r.a)(e.slice(0,n)),[{tokenId:p,tokenURI:l,imageUrl:i,name:t,owner:a}],Object(r.a)(e.slice(n)))}))}}})));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,i,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(i.a.mark((function e(t,n,a,r){var s,o,c,u,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.a.utils.isAddress(n)){e.next=9;break}return r([]),s=new p.a.providers.JsonRpcProvider("https://polygon-rpc.com/"),o=new p.a.Contract(l.a,y.a,s),e.next=6,o.balanceOf(n);case 6:for(c=e.sent.toString(),u=d.n*t>parseInt(c,10)?parseInt(c,10):d.n*t,b=d.n*(t-1);b<u;b++)j(b,o,n,a,r);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}()},1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(5),i=n(0),r=n(770),s=n(472),o=n(767),c=n(741),p=n(230),u=n(949),d=n(19),l=n(849),y=n(60),b=n(7),m=n(782),j=n(1),f=Object(b.a)(m.a)((function(e){return{color:e.theme.palette.getContrastText("#EAECEF"),backgroundColor:"#EAECEF","&:hover":{backgroundColor:"#EAECEF"},boxShadow:"none",padding:"3px 8px",minWidth:0,borderRadius:"3px"}}));function h(e){var t=e.tokenId,n=e.imageUrl,b=e.name,m=e.nftContract,h=e.owner,x=Object(y.a)(),O=Object(i.useState)(!0),g=Object(a.a)(O,2),v=g[0],w=g[1];return Object(j.jsxs)(r.a,{sx:{borderRadius:2,bgcolor:"transparent",transition:"all .2s ease-in-out","&:hover":{transform:"translateY(-".concat(x.spacing(1/4),")"),boxShadow:function(e){return e.shadows[4]}}},children:[Object(j.jsx)(s.a,{sx:{p:2,position:"relative"},children:Object(j.jsx)(o.a,{href:"#/assets/polygon/".concat(l.a,"/").concat(t),children:Object(j.jsx)(s.a,{sx:{border:1,borderRadius:"5px",borderColor:"#DFE3E8"},children:Object(j.jsxs)(c.a,{sx:{paddingTop:"100%",position:"relative"},direction:"row",alignItems:"center",justifyContent:"center",children:[Object(j.jsx)(c.a,{direction:"row",alignItems:"center",justifyContent:"center",sx:{display:v?"flex":"none",position:"absolute"},children:Object(j.jsx)(u.a,{color:"#637381",loading:v})}),Object(j.jsx)(s.a,{component:"img",src:n,onLoad:function(){return w(!1)},sx:{top:0,width:"100%",height:"100%",objectFit:"contain",display:v?"none":"block",position:"absolute",borderRadius:"5px"}})]})})})}),Object(j.jsxs)(c.a,{spacing:.5,sx:{p:2,pt:1,pb:1},children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(j.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(l.a,"/").concat(t),sx:{maxWidth:"70%"},children:Object(j.jsx)(p.a,{variant:"subtitle2",noWrap:!0,children:b})}),Object(j.jsx)(f,{variant:"contained",size:"small",disableElevation:!0,disableFocusRipple:!0,disableRipple:!0,children:Object(j.jsx)(p.a,{variant:"caption",noWrap:!0,children:"Polygon"})})]}),Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(j.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(l.a,"/").concat(t),children:Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(j.jsx)(p.a,{variant:"caption",noWrap:!0,children:"Collection"}),Object(j.jsx)(d.a,{icon:"teenyicons:contract-outline",width:12,height:12})]})}),Object(j.jsx)(p.a,{variant:"body2",noWrap:!0,sx:{fontSize:13,maxWidth:"30%"},children:m})]}),Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(j.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(l.a,"/").concat(t),children:Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(j.jsx)(p.a,{variant:"caption",noWrap:!0,children:"Owner"}),Object(j.jsx)(d.a,{icon:"healthicons:miner-worker-outline",width:18,height:18})]})}),Object(j.jsx)(p.a,{variant:"body2",noWrap:!0,sx:{fontSize:13,maxWidth:"30%"},children:h||""})]}),Object(j.jsxs)(c.a,{direction:"column",spacing:0,children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(j.jsx)(o.a,{color:"inherit",underline:"none",href:"#/assets/polygon/".concat(l.a,"/").concat(t),children:Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:.5,children:[Object(j.jsx)(p.a,{variant:"caption",noWrap:!0,children:"Highest Bid"}),Object(j.jsx)(d.a,{icon:"bx:bx-dollar-circle",width:16,height:16})]})}),Object(j.jsx)(p.a,{variant:"body2",noWrap:!0,sx:{fontSize:13},children:"N/A MATIC"})]}),Object(j.jsx)(c.a,{direction:"row",alignItems:"center",justifyContent:"flex-end",children:Object(j.jsx)(p.a,{variant:"caption",noWrap:!0,color:"#707A8A",children:"~ N/A $"})})]})]})]})}},1737:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(3),i=n(18),r=n.n(i),s=n(37),o=n(5),c=n(0),p=n(765),u=n(761),d=n(741),l=n(1692),y=n(181),b=n(21),m=n(1749),j=n(949),f=n(822),h=n(860),x=n(869),O=n(849),g=n(90),v=n(60),w=n(1186),T=n(1083),I=n(1);function k(){var e=Object(v.a)(),t=Object(b.i)().pageUrl,n=Object(b.h)(),i=Object(y.a)().themeStretch,k=Object(c.useState)([]),C=Object(o.a)(k,2),M=C[0],A=C[1],S=Object(c.useState)(parseInt(t||"0")),E=Object(o.a)(S,2),R=E[0],F=E[1],W=Object(c.useState)(1),U=Object(o.a)(W,2),B=U[0],P=U[1],J=Object(c.useState)(!0),z=Object(o.a)(J,2),D=z[0],N=z[1],H=localStorage.getItem("selectedMetamaskAccount")||"";Object(c.useEffect)((function(){Object(T.b)(R,H,N,A)}),[R]),Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.a.utils.isAddress(H)){e.next=7;break}return t=new h.a.providers.JsonRpcProvider("https://polygon-rpc.com/"),n=new h.a.Contract(O.a,x.a,t),e.next=5,n.balanceOf(H);case 5:a=e.sent.toString(),P(Math.ceil(parseInt(a,10)/g.n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=Object(m.a)(),Q=Object(o.a)(L,2),Y=Q[0],$=Q[1].width,_=Object(c.useState)(4),q=Object(o.a)(_,2),G=q[0],K=q[1];return Object(c.useEffect)((function(){$>e.breakpoints.values.lg?K(3):K(4)}),[$]),Object(I.jsx)(f.a,{title:"NFT Manager",children:Object(I.jsxs)(p.a,{maxWidth:!i&&"xl",children:[Object(I.jsxs)(u.a,{container:!0,spacing:3,ref:Y,children:[Object(I.jsx)(d.a,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:"100%",display:D?"flex":"none",mt:5},children:Object(I.jsx)(j.b,{color:"#637381",loading:D})}),M.map((function(e){return Object(I.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:G,children:Object(I.jsx)(w.a,Object(a.a)(Object(a.a)({},e),{},{nftContract:O.a}))},e.tokenId)}))]}),Object(I.jsx)(d.a,{direction:"row",justifyContent:"center",sx:{pt:6},children:Object(I.jsx)(l.a,{count:B,page:R,onChange:function(e,t){t&&(N(!0),F(t),n("/nft-manager/".concat(t)))}})})]})})}},822:function(e,t,n){"use strict";var a=n(3),i=n(34),r=n(306),s=n(0),o=n(472),c=n(1),p=["children","title"],u=Object(s.forwardRef)((function(e,t){var n=e.children,s=e.title,u=void 0===s?"":s,d=Object(i.a)(e,p);return Object(c.jsxs)(o.a,Object(a.a)(Object(a.a)({ref:t},d),{},{children:[Object(c.jsx)(r.a,{children:Object(c.jsx)("title",{children:u})}),n]}))}));t.a=u},849:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0xa0Afb3513B99E1b099CE9F3C007eE937B04e7870"},869:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataIdOnchain",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getDataRegisterProof",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"string",name:"tokenURIdata",type:"string"},{internalType:"string",name:"dataIdOnchain",type:"string"},{internalType:"string",name:"dataRegisterProof",type:"string"}],name:"mintDataNTF",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}]},913:function(e,t){},914:function(e,t){},960:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=e.match(/(Qm[\w]+)/);return t?t[1]:null}}}]);