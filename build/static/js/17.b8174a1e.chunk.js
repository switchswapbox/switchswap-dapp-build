(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[17],{1174:function(e,t,r){e.exports=r(475)},1175:function(e,t,r){var n,a,o;a=[],void 0===(o="function"===typeof(n=function(){var e=function(){},t={},r={},n={};function a(e,t){e=e.push?e:[e];var a,o,i,c=[],s=e.length,d=s;for(a=function(e,r){r.length&&c.push(e),--d||t(c)};s--;)o=e[s],(i=r[o])?a(o,i):(n[o]=n[o]||[]).push(a)}function o(e,t){if(e){var a=n[e];if(r[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function c(t,r,n,a){var o,i,s=document,d=n.async,l=(n.numRetries||0)+1,u=n.before||e,f=t.replace(/[\?|#].*$/,""),b=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(f)?((i=s.createElement("link")).rel="stylesheet",i.href=b,(o="hideFocus"in i)&&i.relList&&(o=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(i=s.createElement("img")).src=b:((i=s.createElement("script")).src=t,i.async=void 0===d||d),i.onload=i.onerror=i.onbeforeload=function(e){var s=e.type[0];if(o)try{i.sheet.cssText.length||(s="e")}catch(d){18!=d.code&&(s="e")}if("e"==s){if((a+=1)<l)return c(t,r,n,a)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,s,e.defaultPrevented)},!1!==u(t,i)&&s.head.appendChild(i)}function s(e,t,r){var n,a,o=(e=e.push?e:[e]).length,i=o,s=[];for(n=function(e,r,n){if("e"==r&&s.push(e),"b"==r){if(!n)return;s.push(e)}--o||t(s)},a=0;a<i;a++)c(e[a],n,r)}function d(e,r,n){var a,c;if(r&&r.trim&&(a=r),c=(a?n:r)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function d(t,r){s(e,(function(e){i(c,e),t&&i({success:t,error:r},e),o(a,e)}),c)}if(c.returnPromise)return new Promise(d);d()}return d.ready=function(e,t){return a(e,(function(e){i(t,e)})),d},d.done=function(e){o(e,[])},d.reset=function(){t={},r={},n={}},d.isDefined=function(e){return e in t},d})?n.apply(t,a):n)||(e.exports=o)},1183:function(e,t,r){"use strict";r.d(t,"a",(function(){return ue}));var n=r(3),a=r(18),o=r.n(a),i=r(37),c=r(0),s=r(989),d=r(1187),l=r(915),u=r.n(l),f=r(741),b=r(1741),j=r(740),h=r(230),v=r(782),O=r(8),p=r(6),g=r(2),m=(r(9),r(14)),x=r(228),w=r(7),y=r(11),k=r(164),S=r(10),I=r(92),L=r(179),P=r(229);function C(e){return Object(L.a)("MuiCircularProgress",e)}Object(P.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var R,T,E,M,A,B,q,D,U=r(1),N=["className","color","disableShrink","size","style","thickness","value","variant"],F=44,z=Object(I.c)(A||(A=R||(R=Object(k.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),W=Object(I.c)(B||(B=T||(T=Object(k.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),$=Object(w.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["color".concat(Object(m.a)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme;return Object(g.a)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(I.b)(q||(q=E||(E=Object(k.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),z)})),J=Object(w.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),H=Object(w.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.ownerState;return[t.circle,t["circle".concat(Object(m.a)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,r=e.theme;return Object(g.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(I.b)(D||(D=M||(M=Object(k.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),W)})),_=c.forwardRef((function(e,t){var r=Object(y.a)({props:e,name:"MuiCircularProgress"}),n=r.className,a=r.color,o=void 0===a?"primary":a,i=r.disableShrink,c=void 0!==i&&i,s=r.size,d=void 0===s?40:s,l=r.style,u=r.thickness,f=void 0===u?3.6:u,b=r.value,j=void 0===b?0:b,h=r.variant,v=void 0===h?"indeterminate":h,O=Object(p.a)(r,N),w=Object(g.a)({},r,{color:o,disableShrink:c,size:d,thickness:f,value:j,variant:v}),k=function(e){var t=e.classes,r=e.variant,n=e.color,a=e.disableShrink,o={root:["root",r,"color".concat(Object(m.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(m.a)(r)),a&&"circleDisableShrink"]};return Object(x.a)(o,C,t)}(w),I={},L={},P={};if("determinate"===v){var R=2*Math.PI*((F-f)/2);I.strokeDasharray=R.toFixed(3),P["aria-valuenow"]=Math.round(j),I.strokeDashoffset="".concat(((100-j)/100*R).toFixed(3),"px"),L.transform="rotate(-90deg)"}return Object(U.jsx)($,Object(g.a)({className:Object(S.a)(k.root,n),style:Object(g.a)({width:d,height:d},L,l),ownerState:w,ref:t,role:"progressbar"},P,O,{children:Object(U.jsx)(J,{className:k.svg,ownerState:w,viewBox:"".concat(22," ").concat(22," ").concat(F," ").concat(F),children:Object(U.jsx)(H,{className:k.circle,style:I,ownerState:w,cx:F,cy:F,r:(F-f)/2,fill:"none",strokeWidth:f})})}))}));function V(e){return Object(L.a)("MuiLoadingButton",e)}var G=Object(P.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),K=["children","disabled","loading","loadingIndicator","loadingPosition"],Q=Object(w.a)(v.a,{shouldForwardProp:function(e){return function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e}(e)||"classes"===e},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(e,t){return[t.root,t.startIconLoadingStart&&Object(O.a)({},"& .".concat(G.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&Object(O.a)({},"& .".concat(G.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(e){var t=e.ownerState,r=e.theme;return Object(g.a)(Object(O.a)({},"& .".concat(G.startIconLoadingStart,", & .").concat(G.endIconLoadingEnd),{transition:r.transitions.create(["opacity"],{duration:r.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&Object(O.a)({transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short})},"&.".concat(G.loading),{color:"transparent"}))})),X=Object(w.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(e,t){var r=e.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat(Object(m.a)(r.loadingPosition))]]}})((function(e){var t=e.theme,r=e.ownerState;return Object(g.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===r.loadingPosition&&{left:14},"center"===r.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===r.loadingPosition&&{right:14})})),Y=Object(U.jsx)(_,{color:"inherit",size:16}),Z=c.forwardRef((function(e,t){var r=Object(y.a)({props:e,name:"MuiLoadingButton"}),n=r.children,a=r.disabled,o=void 0!==a&&a,i=r.loading,c=void 0!==i&&i,s=r.loadingIndicator,d=void 0===s?Y:s,l=r.loadingPosition,u=void 0===l?"center":l,f=Object(p.a)(r,K),b=Object(g.a)({},r,{disabled:o,loading:c,loadingIndicator:d,loadingPosition:u}),j=function(e){var t=e.loading,r=e.loadingPosition,n=e.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat(Object(m.a)(r))],endIcon:[t&&"endIconLoading".concat(Object(m.a)(r))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat(Object(m.a)(r))]},o=Object(x.a)(a,V,n);return Object(g.a)({},n,o)}(b);return Object(U.jsxs)(Q,Object(g.a)({disabled:o||c,ref:t},f,{classes:j,ownerState:b,children:[c&&Object(U.jsx)(X,{className:j.loadingIndicator,ownerState:b,children:d}),n]}))})),ee=r(19),te=r(994),re=r(860),ne=te.a().shape({address:te.b().required("Address is required").test("test-address","Address non valid",(function(e,t){return re.a.utils.isAddress((e||"").toLowerCase())})),token:te.b(),tweetUrl:te.b().required("Tweet URL is required").url("Not an URL")}),ae=r(703),oe=r(140),ie=r(449),ce=new ae.a,se=te.a().shape({address:te.b().required("Address is required").test("test-address","Address non valid",(function(e,t){return function(e){try{return ce.encodeAddress(Object(oe.a)(e)?Object(ie.a)(e):ce.decodeAddress(e)),!0}catch(t){return!1}}(e||"")})),token:te.b(),tweetUrl:te.b().required("Tweet URL is required").url("Not an URL")}),de=r(89),le=r(90);function ue(e){var t=e.token,r=e.setTweetId,a=e.setResponse,l={address:"",token:t,tweetUrl:""},O=ne;switch(t){case"MATIC":O=ne;break;case"CRU":O=se;break;default:O=ne}var p=Object(s.e)({mode:"onTouched",resolver:Object(d.a)(O),defaultValues:l}),g=p.reset,m=p.watch,x=p.control,w=p.handleSubmit,y=p.formState,k=y.isSubmitting,S=y.isDirty,I=m("tweetUrl"),L=Object(de.a)().translate;Object(c.useEffect)((function(){var e=I.match(/\/status\/([0-9]+)/);e&&e[1]&&r(e[1])}),[I,r]);var P=function(){var e=Object(i.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post(le.f,t);case 2:r=e.sent,a(r.data),g();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("form",{onSubmit:w(P),children:Object(U.jsxs)(f.a,{spacing:3,children:[Object(U.jsx)(s.a,{name:"address",control:x,render:function(e){var t=e.field,r=e.fieldState.error;return Object(U.jsx)(b.a,Object(n.a)(Object(n.a)({},t),{},{label:"Wallet address",error:Boolean(r),helperText:null===r||void 0===r?void 0:r.message}))}}),Object(U.jsx)(j.a,{}),Object(U.jsxs)(f.a,{children:[Object(U.jsx)(h.a,{variant:"h6",children:L("funBox.requirement")}),Object(U.jsx)(h.a,{variant:"body2",sx:{color:"text.secondary",my:1},children:L("funBox.keywords")}),Object(U.jsx)(h.a,{variant:"body2",sx:{color:"text.secondary",my:1},children:L("funBox.useDefault")}),Object(U.jsx)(v.a,{variant:"contained",href:"https://twitter.com/intent/tweet?text=Mint%20your%20decentralized%20NFT%20freely%20on%20switchswap%0A%23web3%20%23ipfs%20%23switchswap%20%23crustnetwork%20%23polygon%0Ahttps%3A//switchswap.io",target:"_blank",startIcon:Object(U.jsx)(ee.a,{icon:"logos:twitter"}),children:L("funBox.quickTweet")})]}),Object(U.jsx)(s.a,{name:"tweetUrl",control:x,render:function(e){var t=e.field,r=e.fieldState.error;return Object(U.jsx)(b.a,Object(n.a)(Object(n.a)({},t),{},{label:"Tweet URL",error:Boolean(r),helperText:null===r||void 0===r?void 0:r.message}))}}),Object(U.jsx)(Z,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"contained",loading:k,disabled:!S,children:L("funBox.getFaucet")})]})})})}},1186:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(1174),a=r.n(n),o=r(0),i=r.n(o),c=r(1175),s=r.n(c);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l="twttr",u=l,f=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function j(e){var t=Object(o.useRef)();return function(e,t){if(b(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!Object.prototype.hasOwnProperty.call(t,r[a])||!b(e[r[a]],t[r[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function h(e){return"object"===typeof e?d({},e):e}function v(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(d){return void r(d)}c.done?t(s):Promise.resolve(s).then(n,a)}f&&s()("https://platform.twitter.com/widgets.js",u);var O="twdiv";function p(e,t,r,n){var i=Object(o.useState)(null),c=i[0],d=i[1],l=Object(o.useRef)(null);if(!f)return{ref:l,error:c};var b=[e,j(t),j(r)];return Object(o.useEffect)((function(){d(null);var o,i,c=!1;if(l.current){var f=function(){var o,i=(o=a.a.mark((function o(){var i,f;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l&&l.current){a.next=2;break}return a.abrupt("return");case 2:return(i=document.createElement("div")).setAttribute(O,"yes"),l.current.appendChild(i),a.prev=5,a.next=8,new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};s.a.ready(u,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}));case 8:return f=a.sent,a.next=11,f[e](h(t),i,h(r));case 11:if(a.sent||c){a.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:a.next=21;break;case 16:return a.prev=16,a.t0=a.catch(5),console.error(a.t0),d(a.t0),a.abrupt("return");case 21:if(l&&l.current){a.next=23;break}return a.abrupt("return");case 23:if(!c){a.next=26;break}return i&&i.remove(),a.abrupt("return");case 26:n&&n();case 27:case"end":return a.stop()}}),o,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function i(e){v(a,r,n,i,c,"next",e)}function c(e){v(a,r,n,i,c,"throw",e)}i(void 0)}))});return function(){return i.apply(this,arguments)}}();o=l.current,i=O,o&&o.querySelectorAll("*").forEach((function(e){e.hasAttribute(i)&&e.remove()})),f()}return function(){c=!0}}),b),{ref:l,error:c}}var g=function(e){var t=e.tweetId,r=e.options,n=e.onLoad,a=e.renderError,o=p("createTweet",t,r,n),c=o.ref,s=o.error;return i.a.createElement("div",{ref:c},s&&a&&a(s))}},1753:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(5),a=r(0),o=r(765),i=r(761),c=r(786),s=r(1699),d=r(1698),l=r(741),u=r(758),f=r(782),b=r(181),j=r(822),h=r(1183),v=r(1186),O=r(1);function p(){var e=Object(b.a)().themeStretch,t=Object(a.useState)(""),r=Object(n.a)(t,2),p=r[0],g=r[1],m=Object(a.useState)({message:"",statusCode:-1,timeLeftInSeconds:null,txHash:null}),x=Object(n.a)(m,2),w=x[0],y=x[1];return Object(O.jsx)(j.a,{title:"MATIC Faucet",children:Object(O.jsx)(o.a,{maxWidth:!e&&"xl",children:Object(O.jsxs)(i.a,{container:!0,spacing:5,justifyContent:"center",children:[Object(O.jsx)(i.a,{item:!0,xs:12,sm:6,children:Object(O.jsxs)(c.a,{sx:{position:"static"},children:[Object(O.jsx)(s.a,{title:"$MATIC faucet"}),Object(O.jsx)(d.a,{children:Object(O.jsx)(h.a,{setTweetId:g,setResponse:y,token:"MATIC"})})]})}),Object(O.jsx)(i.a,{item:!0,xs:12,sm:6,sx:{display:""!==p||-1!==w.statusCode?"block":"none"},children:Object(O.jsxs)(c.a,{sx:{position:"static"},children:[Object(O.jsx)(s.a,{title:"Status"}),Object(O.jsx)(d.a,{children:Object(O.jsxs)(l.a,{sx:{mt:"-10px"},children:[Object(O.jsx)(l.a,{sx:{display:""!==p?"flex":"none"},children:Object(O.jsx)(v.a,{tweetId:p})}),Object(O.jsx)(u.a,{variant:"outlined",severity:0===w.statusCode?"success":"warning",sx:{display:-1===w.statusCode?"none":"flex",mt:1},action:Object(O.jsx)(f.a,{size:"small",variant:"outlined",href:"https://polygonscan.com/tx/".concat(w.txHash),target:"_blank",sx:{display:0===w.statusCode?"flex":"none"},children:"PolygonScan"}),children:w.message})]})})]})})]})})})}},822:function(e,t,r){"use strict";var n=r(3),a=r(34),o=r(306),i=r(0),c=r(472),s=r(1),d=["children","title"],l=Object(i.forwardRef)((function(e,t){var r=e.children,i=e.title,l=void 0===i?"":i,u=Object(a.a)(e,d);return Object(s.jsxs)(c.a,Object(n.a)(Object(n.a)({ref:t},u),{},{children:[Object(s.jsx)(o.a,{children:Object(s.jsx)("title",{children:l})}),r]}))}));t.a=l},913:function(e,t){},914:function(e,t){}}]);