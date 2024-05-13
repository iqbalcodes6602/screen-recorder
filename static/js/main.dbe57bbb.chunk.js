(this["webpackJsonpscreen-recorder"]=this["webpackJsonpscreen-recorder"]||[]).push([[0],{128:function(e,t,r){},157:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(111),i=r.n(a),o=(r(128),r(173)),s=r(75),l=r(167),j=r(168),b=r(8),d=function(){var e=Object(s.c)();return Object(b.jsx)(l.a,{as:"nav",flex:"1",mb:4,padding:"1.5rem",bg:e.colors.gray[700],color:"white",children:Object(b.jsx)(l.a,{align:"center",children:Object(b.jsx)(j.a,{size:"md",children:"Free Screen and Video Recorder"})})})},u=Object(c.memo)(d),O=r(43),f=r.n(O),g=r(77),x=r(7),h=r(174),p=r(169),m=r(120),v=r(170),w=r(171),y=r(44),S=r(116),k=(r(134),r(112)),C=r(114),R=r(115),z=function(){var e=Object(s.c)(),t=Object(c.useState)(),r=Object(x.a)(t,2),n=r[0],a=r[1],i=Object(c.useState)(),o=Object(x.a)(i,2),l=o[0],j=o[1],d=Object(c.useState)(),u=Object(x.a)(d,2),O=u[0],z=u[1],F=Object(c.useState)("screen"),L=Object(x.a)(F,2),D=L[0],M=L[1],P=Object(c.useState)(!0),B=Object(x.a)(P,2),T=B[0],U=B[1],V=Object(c.useRef)(null);Object(c.useEffect)((function(){l&&V.current&&(V.current.srcObject=l)}),[l]);var E=function(){var e=Object(g.a)(f.a.mark((function e(){var t,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=navigator.mediaDevices,"video"!==D){e.next=7;break}return e.next=4,t.getUserMedia({video:!0,audio:!0});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t.getDisplayMedia({video:!0,audio:!1});case 9:e.t0=e.sent;case 10:return r=e.t0,c=new C.RecordRTCPromisesHandler(r,{type:"video"}),e.next=14,c.startRecording();case 14:a(c),j(r),z(null),U(!1),V.current&&(V.current.srcObject=r);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=10;break}return e.next=3,n.stopRecording();case 3:return e.next=5,n.getBlob();case 5:t=e.sent,l.stop(),z(t),j(null),a(null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(h.a,{spacing:"5",p:"5",children:[Object(b.jsxs)(p.a,{display:"flex",justifyContent:"center",flexDirection:["column","row","row","row"],children:[Object(b.jsxs)(m.a,{m:"1",bg:e.colors.gray[600],size:"lg","aria-label":"start recording",color:"white",onClick:function(){M("screen"===D?"video":"screen")},children:["screen"===D?"Recording Screen  ":"Recording Video","screen"===D?Object(b.jsx)(S.a,{style:{marginLeft:"5px",fontSize:"140%"}}):Object(b.jsx)(y.c,{style:{marginLeft:"5px"}})]}),Object(b.jsx)(v.a,{m:"1",bg:e.colors.gray[600],size:"lg","aria-label":"start recording",color:"white",onClick:E,icon:Object(b.jsx)(w.a,{as:y.b})}),Object(b.jsx)(v.a,{m:"1",bg:e.colors.gray[600],size:"lg",color:"white","aria-label":"stop recording",onClick:I,disabled:!n,icon:Object(b.jsx)(w.a,{as:y.d})}),Object(b.jsx)(v.a,{bg:e.colors.gray[600],m:"1",size:"lg",disabled:!O,color:"white",onClick:function(){if(O){var e=new File([O],"demo.mp4",{type:"video/mp4"});Object(R.saveAs)(e,"Video-".concat(Date.now(),".mp4"))}},"aria-label":"download video",icon:Object(b.jsx)(w.a,{as:y.a})})]}),Object(b.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(b.jsxs)(p.a,{bg:"inherit",h:"auto",width:["100%","100%","60vw","60vw"],position:"relative",children:[!!O&&Object(b.jsx)(k.Player,{src:window.URL.createObjectURL(O),style:{width:"100%",height:"100%"}}),V&&!O&&Object(b.jsx)("video",{ref:V,autoPlay:!0,muted:!0,style:{width:"100%",height:"100%"}}),T&&Object(b.jsx)(p.a,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"xl",children:"Start the recording"})]})})]})},F=Object(c.memo)(z),L=r(172),D=Object(L.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),M=function(){return Object(b.jsxs)(o.a,{theme:D,children:[Object(b.jsx)(u,{}),Object(b.jsx)(F,{})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,175)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),P()}},[[157,1,2]]]);
//# sourceMappingURL=main.dbe57bbb.chunk.js.map