import{b as _,c as $,d as k,m as W,n as E,o as I}from"./chunk-SKYACNJC.mjs";import{b as r,c}from"./chunk-76B7QV7W.mjs";import{V as d,Y as S,o as h,q as U}from"./chunk-2CJT4MIR.mjs";import{d as window,f as M}from"./chunk-ENK4YSX5.mjs";M();var s;(function(e){e.Normal="Off",e.Auto="On",e.Loop="Loop"})(s||(s={}));var l;(function(e){e.High="High Quality",e.Medium="Medium Quality",e.Low="Low Quality",e.Off="Off"})(l||(l={}));var u;(function(e){e.WebP="webp",e.JPG="jpg"})(u||(u={}));function y({url:e,play:t,shouldMute:o,thumbnail:n,isRed:i,onClick:O,onMouseEnter:H,onMouseLeave:Y,onMouseDown:B,onMouseUp:V,...A}){let w=W(),p=t!==s.Normal,m=w||n!==l.Off&&!p,[v,J]=h(()=>!0,!1),[g,x]=h(()=>!0,!m),[z,L]=U(!1),f=E(A),G=f!=="0px 0px 0px 0px"&&f!=="0px";if(e==="")return r(K,{});let P=F(e);if(P===void 0)return r(X,{message:"Invalid Youtube URL."});let[R,C]=P,Q=q(R,n,Z()?u.WebP:u.JPG),a=C.searchParams;return a.set("iv_load_policy","3"),a.set("rel","0"),a.set("modestbranding","1"),a.set("playsinline","1"),(p||m)&&a.set("autoplay","1"),p&&o&&a.set("mute","1"),t===s.Loop&&(a.set("loop","1"),a.set("playlist",R)),i||a.set("color","white"),c("article",{onPointerEnter:()=>L(!0),onPointerLeave:()=>L(!1),onPointerOver:J,onClick:x,style:{...oe,borderRadius:f,transform:G&&(g||w)?"translateZ(0.000001px)":"unset",cursor:"pointer",overflow:"hidden"},children:[v&&r("link",{rel:"preconnect",href:"https://www.youtube.com"}),v&&r("link",{rel:"preconnect",href:"https://www.google.com"}),r("div",{style:{...j,background:m?`center / cover url(${Q}) no-repeat`:void 0}}),g?r("iframe",{style:j,src:C.href,frameBorder:"0",allow:"presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",onClick:O,onMouseEnter:H,onMouseLeave:Y,onMouseDown:B,onMouseUp:V}):r(ee,{onClick:x,isHovered:z,isRed:i})]})}y.displayName="YouTube";S(y,{url:{type:d.String,title:"Video"},play:{type:d.Enum,title:"Autoplay",options:Object.values(s)},shouldMute:{title:"Mute",type:d.Boolean,enabledTitle:"Yes",disabledTitle:"No",hidden(e){return e.play===s.Normal}},thumbnail:{title:"Thumbnail",description:"Showing a thumbnail improves performance.",type:d.Enum,options:Object.values(l),hidden(e){return e.play!==s.Normal}},isRed:{title:"Color",type:d.Boolean,enabledTitle:"Red",disabledTitle:"White"},...I,...k});var D={url:"https://youtu.be/smPos0mJvh8",play:s.Normal,shouldMute:!0,thumbnail:l.Medium,isRed:!0};y.defaultProps=D;function F(e){let t;try{t=new URL(e)}catch{let o=b(e);return[e,o]}if(t.hostname==="youtube.com"||t.hostname==="www.youtube.com"||t.hostname==="youtube-nocookie.com"||t.hostname==="www.youtube-nocookie.com"){let o=t.pathname.slice(1).split("/");if(o[0]==="watch"){let n=t.searchParams.get("v"),i=b(n);return[n,i]}if(o[0]==="embed")return[o[1],t]}if(t.hostname==="youtu.be"){let o=t.pathname.slice(1),n=b(o);return[o,n]}}function b(e){return new URL(`https://www.youtube.com/embed/${e}`)}function q(e,t,o=u.JPG){let n=u.WebP?"https://i.ytimg.com/vi_webp/":"https://i.ytimg.com/vi/",i=u.WebP?"webp":"jpg";switch(t){case l.Low:return`${n}${e}/hqdefault.${i}`;case l.Medium:return`${n}${e}/sddefault.${i}`;case l.High:return`${n}${e}/maxresdefault.${i}`;default:return`${n}${e}/0.${i}`}}var T;function Z(){if(!window)return!0;if(T!==void 0)return T;let e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")==0:!1}function K(){return r("div",{style:{...$,overflow:"hidden"},children:r("div",{style:N,children:"To embed a Youtube video, add the URL to the properties\xA0panel."})})}function X({message:e}){return r("div",{className:"framerInternalUI-errorPlaceholder",style:{..._,overflow:"hidden"},children:c("div",{style:N,children:["Error: ",e]})})}function ee({onClick:e,isHovered:t,isRed:o}){return r("button",{onClick:e,"aria-label":"Play",style:te,children:c("svg",{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%",children:[r("path",{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:t?o?"#f00":"#000":"#212121",fillOpacity:t&&o?1:.8,style:{transition:"fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)"}}),r("path",{d:"M 45,24 27,14 27,34",fill:"#fff"})]})})}var te={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:68,height:48,padding:0,border:"none",background:"transparent",cursor:"pointer"},oe={position:"relative",width:"100%",height:"100%"},N={textAlign:"center",minWidth:140},j={position:"absolute",top:0,left:0,height:"100%",width:"100%"};export{y as a};
//# sourceMappingURL=chunk-LEEKCNNF.mjs.map