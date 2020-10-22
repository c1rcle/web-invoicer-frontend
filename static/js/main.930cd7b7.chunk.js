(this["webpackJsonpweb-invoicer-frontend"]=this["webpackJsonpweb-invoicer-frontend"]||[]).push([[0],{268:function(e){e.exports=JSON.parse('{"palette":{"type":"light","background":{"paper":"rgba(245, 245, 245, 1)","default":"rgba(255, 255, 255, 1)"},"primary":{"light":"rgba(99, 164, 255, 1)","main":"rgba(25, 118, 210, 1)","dark":"rgba(0, 75, 160, 1)","contrastText":"rgba(255, 255, 255, 1)"},"secondary":{"light":"rgba(255, 84, 122, 1)","main":"rgba(220, 0, 78, 1)","dark":"rgba(163, 0, 39, 1)","contrastText":"rgba(255, 255, 255, 1)"},"error":{"light":"rgba(99, 164, 255, 1)","main":"rgba(25, 118, 210, 1)","dark":"rgba(0, 75, 160, 1)","contrastText":"rgba(255, 255, 255, 1)"},"warning":{"light":"#ffb74d","main":"#ff9800","dark":"#f57c00","contrastText":"rgba(0, 0, 0, 0.87)"},"info":{"light":"#64b5f6","main":"#2196f3","dark":"#1976d2","contrastText":"#fff"},"success":{"light":"#81c784","main":"#4caf50","dark":"#388e3c","contrastText":"rgba(0, 0, 0, 0.87)"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},269:function(e){e.exports=JSON.parse('{"palette":{"type":"dark","primary":{"light":"rgba(195, 253, 255, 1)","main":"rgba(144, 202, 249, 1)","dark":"rgba(93, 153, 198, 1)","contrastText":"rgba(0, 0, 0, 0.87)"},"secondary":{"light":"rgba(255, 193, 227, 1)","main":"rgba(244, 143, 177, 1)","dark":"rgba(191, 95, 130, 1)","contrastText":"rgba(0, 0, 0, 0.87)"},"error":{"light":"rgba(195, 253, 255, 1)","main":"rgba(144, 202, 249, 1)","dark":"rgba(93, 153, 198, 1)","contrastText":"rgba(0, 0, 0, 0.87)"},"warning":{"light":"#ffb74d","main":"#ff9800","dark":"#f57c00","contrastText":"rgba(0, 0, 0, 0.87)"},"info":{"light":"#64b5f6","main":"#2196f3","dark":"#1976d2","contrastText":"#fff"},"success":{"light":"#81c784","main":"#4caf50","dark":"#388e3c","contrastText":"rgba(0, 0, 0, 0.87)"},"text":{"primary":"#fff","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","hint":"rgba(255, 255, 255, 0.5)","icon":"rgba(255, 255, 255, 0.5)"}}}')},283:function(e,t,a){e.exports=a(327)},326:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(12),i=a(163),s=a(102),u=a(257),m=a(259);i.a.use(u.a).use(m.a).use(s.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});i.a;var p=a(31),g=a(78),d=a(371),f=a(376),b=a(375),E=a(354),h=a(35),v=a(386),O=a(336),j=a(13),x=a(367),y=a(355),w=a(88),k=a(368),S=a(369),T=a(53),C=a(66),I=a(242),D=Object(I.a)((function(e){return{drawer:{width:250},drawerPaper:{width:250},drawerHeader:Object(C.a)({width:250,padding:e.spacing(0,1),display:"flex",alignItems:"center",justifyContent:"flex-end"},e.mixins.toolbar),drawerHighlight:{background:e.palette.primary.main},drawerHighlightText:{color:e.palette.getContrastText(e.palette.primary.main)}}})),N=function(e){var t=e.children,a=D();return r.a.createElement(T.a,{variant:"permanent",anchor:"left",className:a.drawer,classes:{paper:a.drawerPaper}},r.a.createElement(E.a,null),t)},P=a(357),F=a(356),L=function(e){var t=e.open,a=e.onClose,n=e.children,c=D();return r.a.createElement(T.a,{anchor:"left",open:t,onClose:a},r.a.createElement("div",{className:c.drawerHeader},r.a.createElement(y.a,{onClick:a},r.a.createElement(F.a,null))),r.a.createElement(P.a,null),n)},R=a(335),B=a(331),A=a(358),z=a(360),U=a(263),M=a(361),W=a(359),q=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],r=t[1];return{anchor:a,openMenu:function(e){r(e.currentTarget)},closeMenu:function(){r(null)}}},H=function(){var e=Object(v.a)(),t=e.t,a=e.i18n,n=t("languages",{returnObjects:!0}),c=q(),o=c.anchor,l=c.openMenu,i=c.closeMenu,s=function(e){return function(){n[e].code!==a.language&&a.changeLanguage(n[e].code),i()}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{button:!0,onClick:l},r.a.createElement(A.a,null,r.a.createElement(W.a,null)),r.a.createElement(z.a,{primary:t("drawer.language")})),r.a.createElement(U.a,{anchorEl:o,open:Boolean(o),onClose:i},n.map((function(e,t){return r.a.createElement(M.a,{key:t,selected:a.language.startsWith(e.code),onClick:s(t)},e.label)}))))},J=a(362),V=a(363),K=a(40),$={theme:localStorage.getItem("theme")||"dark",isDialogOpen:!1},G=Object(K.c)({name:"app",initialState:$,reducers:{setTheme:function(e,t){e.theme=t.payload},openDialog:function(e){e.isDialogOpen=!0},closeDialog:function(e){e.isDialogOpen=!1}}}),Z=G.actions,Q=Z.setTheme,X=(Z.setDrawerType,Z.openDialog),Y=Z.closeDialog,_=G.reducer,ee=function(){var e=Object(v.a)().t,t=Object(l.b)(),a=Object(l.c)((function(e){return e.app.theme}));return r.a.createElement(B.a,{button:!0,onClick:function(){var e="light"===a?"dark":"light";localStorage.setItem("theme",e),t(Q(e))}},r.a.createElement(A.a,null,"dark"===a?r.a.createElement(J.a,null):r.a.createElement(V.a,null)),r.a.createElement(z.a,{primary:e("drawer.theme")}))},te=a(385),ae=a(23),ne=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.app.isDialogOpen})),a=Object(ae.g)();return{openForType:function(t){a.replace("/".concat(t)),e(X())},open:function(){e(X())},close:function(){e(Y())},onExited:function(){a.replace("/")},isDialogOpen:t}},re=function(){var e=Object(v.a)().t,t=ne(),a=D();return r.a.createElement(te.a,{smUp:!0},r.a.createElement(P.a,null),r.a.createElement(R.a,null,r.a.createElement(B.a,{button:!0,onClick:function(){return t.openForType("login")}},r.a.createElement(z.a,{primary:e("signIn")})),r.a.createElement(B.a,{button:!0,onClick:function(){return t.openForType("register")},className:a.drawerHighlight},r.a.createElement(z.a,{primary:e("signUp"),className:a.drawerHighlightText}))))},ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(H,null),r.a.createElement(ee,null)),r.a.createElement(re,null))},oe=a(364),le=function(){var e=Object(v.a)().t,t=Object(ae.h)(),a=e("drawer.user",{returnObjects:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,a.map((function(e,a){return r.a.createElement(B.a,{component:p.b,to:e.pathname,key:a,button:!0,selected:t.pathname===e.pathname},r.a.createElement(A.a,null,r.a.createElement(oe.a,null,e.icon)),r.a.createElement(z.a,{primary:e.text}))}))),r.a.createElement(P.a,null),r.a.createElement(R.a,null,r.a.createElement(H,null),r.a.createElement(ee,null)))},ie=function(e){var t=e.open,a=e.setOpen,n=e.isLoggedIn,c=e.isLgUp&&n?N:L,o=n?le:ce;return r.a.createElement(c,{open:t,onClose:function(){return a(!1)}},r.a.createElement(o,null))},se=a(365),ue=Object(I.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},appBarSpacer:{marginRight:e.spacing(1)},appBarLogo:{marginRight:4},appBarTitle:{userSelect:"none",flexGrow:1}}})),me=function(){var e=Object(v.a)().t,t=ne(),a=ue();return r.a.createElement(te.a,{xsDown:!0},r.a.createElement(se.a,{color:"inherit",onClick:function(){return t.openForType("login")},className:a.appBarSpacer},e("signIn")),r.a.createElement(se.a,{variant:"outlined",color:"inherit",onClick:function(){return t.openForType("register")}},e("signUp")))},pe=a(366),ge=a(51),de=a(27),fe=a.n(de),be=a(57),Ee=a(264),he=a.n(Ee),ve=function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n,r;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:n=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n=null;case 9:return r=n&&n.status>=200&&n.status<300,e.abrupt("return",r?n:{type:"ERROR",data:a});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),Oe=Object(K.b)("user/login",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n,r;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/authenticate",payload:t,errorData:"login"},n);case 3:return r=e.sent,localStorage.setItem("token",r.token),localStorage.setItem("userData",JSON.stringify(r.userData)),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),je=Object(K.b)("user/refreshToken",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/refreshToken",errorData:"refreshToken"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),xe=Object(K.b)("user/register",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/register",payload:t,errorData:"register"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ye=Object(K.b)("user/confirmEmail",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/confirm",payload:t,errorData:"confirmEmail"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),we=Object(K.b)("user/resetPassword",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/resetPassword",payload:{email:t},errorData:"resetPassword"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ke=Object(K.b)("user/changeResetPassword",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/changeResetPassword",payload:t,errorData:"changePassword"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Se=(Object(K.b)("user/changePassword",function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,e.next=3,Se({endpoint:"users/changePassword",payload:t,errorData:"changePassword"},n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),function(){var e=Object(be.a)(fe.a.mark((function e(t,a){var n,r,c,o;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endpoint,r=t.payload,c=t.errorData,a(Ie(!0)),e.next=4,ve(he.a.create({baseURL:"",timeout:1e4,headers:localStorage.getItem("token")?{Authorization:"Bearer "+localStorage.getItem("token")}:{}}).post(n,r),c);case 4:if(o=e.sent,a(Ie(!1)),"ERROR"!==o.type){e.next=9;break}throw a(De(o.data)),new Error(o.data);case 9:return e.abrupt("return",o.data);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Te=Object(K.c)({name:"user",initialState:{actionPending:!1,error:null,userData:null,isLoggedIn:!1},reducers:{setActionPending:function(e,t){e.actionPending=t.payload},setError:function(e,t){e.error=t.payload},setUserData:function(e,t){e.userData=t.payload,e.isLoggedIn=!0},logout:function(e){e.userData=null,e.isLoggedIn=!1}},extraReducers:Object(ge.a)({},Oe.fulfilled,(function(e,t){e.userData=t.payload.userData,e.isLoggedIn=!0}))}),Ce=Te.actions,Ie=Ce.setActionPending,De=Ce.setError,Ne=Ce.setUserData,Pe=Ce.logout,Fe=Te.reducer,Le=function(){var e=Object(l.b)();return function(){localStorage.removeItem("token"),localStorage.removeItem("userData"),e(Pe())}},Re=a(121),Be=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])},Ae=function(){var e=Object(l.b)(),t=1e3*Object(Re.a)(localStorage.getItem("token")).exp-(new Date).getTime()-3e4;Be((function(){e(je())}),t)},ze=function(){var e=Object(v.a)().t,t=q(),a=t.anchor,n=t.openMenu,c=t.closeMenu,o=Le();return Ae(),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{edge:"end",color:"primary",onClick:n},r.a.createElement(pe.a,{fontSize:"large"})),r.a.createElement(U.a,{anchorEl:a,open:Boolean(a),onClose:c},r.a.createElement(M.a,{component:p.b,to:"account",onClick:c},e("accountSettings")),r.a.createElement(M.a,{onClick:o},e("signOut"))))},Ue=function(){var e=Object(l.b)(),t=Le(),a=Object(l.c)((function(e){return e.user.isLoggedIn}));Object(n.useEffect)((function(){if(!a&&localStorage.getItem("token")){var n=Object(Re.a)(localStorage.getItem("token")),r=JSON.parse(localStorage.getItem("userData"));!n||!r||n.exp<(new Date).getTime()/1e3?t():e(Ne(r))}}),[])},Me=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(v.a)().t,i=Object(O.a)(Object(j.a)().breakpoints.up("lg")),s=Object(l.c)((function(e){return e.user.isLoggedIn})),u=ue();return Ue(),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{open:a,setOpen:c,isLoggedIn:s,isLgUp:i}),r.a.createElement(x.a,{position:"fixed",color:"inherit",className:u.appBar},r.a.createElement(E.a,null,s&&i||r.a.createElement(y.a,{edge:"start",color:"inherit",onClick:function(){return c(!0)},className:u.appBarSpacer},r.a.createElement(k.a,null)),r.a.createElement(S.a,{fontSize:"large",className:u.appBarLogo,color:"primary"}),r.a.createElement(w.a,{variant:"h6",className:u.appBarTitle},o("title")),s?r.a.createElement(ze,null):r.a.createElement(me,null))))},We=a(272),qe=a(370),He=function(){return r.a.createElement(We.a,{open:!0},r.a.createElement(qe.a,null))},Je=function(e){var t=Object(l.c)((function(e){return e.user.isLoggedIn}));return r.a.createElement(r.a.Fragment,null,t||r.a.createElement(ae.a,{to:"/"}),r.a.createElement(ae.b,e))},Ve=a(157),Ke=a(381),$e=a(373),Ge=a(374),Ze=(0,a(15).makeStyles)((function(e){return{heroContainer:Object(ge.a)({width:"fit-content",padding:e.spacing(2),margin:e.spacing(2,0),marginLeft:"auto",marginRight:"auto",display:"flex"},e.breakpoints.only("xs"),{flexDirection:"column"}),heroItem:Object(ge.a)({marginTop:"auto",marginBottom:"auto"},e.breakpoints.only("xs"),{textAlign:"center"}),heroIcon:Object(ge.a)({fontSize:"6rem",marginRight:e.spacing(2)},e.breakpoints.only("xs"),{marginRight:0}),featureCard:{height:"100%"},featureIcon:{fontSize:"5rem"}}})),Qe=function(){var e=(0,Object(v.a)().t)("home.features",{returnObjects:!0}),t=Ze();return r.a.createElement(Ke.a,{container:!0,justify:"center",spacing:3},e.map((function(e,a){return r.a.createElement(Ke.a,{key:a,item:!0,xs:12,sm:6},r.a.createElement($e.a,{className:t.featureCard},r.a.createElement(Ge.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(oe.a,{className:t.featureIcon,color:"primary"},e.icon)),r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",className:"text-center"},e.header),r.a.createElement(w.a,{variant:"body1",color:"textSecondary",className:"text-center"},e.description))))})))},Xe=function(){var e=Object(v.a)().t,t=ne();return r.a.createElement(Ve.a,{mb:4,className:"text-center"},r.a.createElement(w.a,{variant:"h5"},e("home.footer")),r.a.createElement(Ve.a,{mt:2},r.a.createElement(se.a,{variant:"outlined",color:"inherit",size:"large",onClick:function(){return t.openForType("register")}},e("signUp"))))},Ye=function(){var e=Object(v.a)().t,t=Ze();return r.a.createElement("div",{className:t.heroContainer},r.a.createElement("div",{className:t.heroItem},r.a.createElement(S.a,{className:t.heroIcon,color:"primary"})),r.a.createElement("div",{className:t.heroItem},r.a.createElement(w.a,{variant:"h4",gutterBottom:!0},e("home.hero.title")),r.a.createElement(w.a,{variant:"h6",color:"textSecondary"},e("home.hero.description"))))},_e=a(377),et=a(380),tt=a(383),at=(0,a(15).makeStyles)((function(e){return{dialogTitle:{margin:0,padding:e.spacing(2,2,0),textAlign:"center"},dialogCloseButton:{position:"absolute",top:e.spacing(1),right:e.spacing(1),color:e.palette.text.secondary},dialogAlert:{margin:e.spacing(3,3,0)},dialogActions:{padding:e.spacing(2,3),justifyContent:"center"}}})),nt=function(e){var t=e.title,a=e.onClose,n=at();return r.a.createElement(et.a,{disableTypography:!0,className:n.dialogTitle},r.a.createElement(w.a,{variant:"h6"},t),a&&r.a.createElement(y.a,{className:n.dialogCloseButton,onClick:a},r.a.createElement(tt.a,null)))},rt=a(372),ct=a(384),ot=function(e){var t=e.locationKey,a=Object(n.useState)(""),c=Object(h.a)(a,2),o=c[0],i=c[1],s=Object(v.a)().t,u=Object(l.b)(),m=Object(l.c)((function(e){return e.user.error})),p=at();return Object(n.useEffect)((function(){m&&(m!==t?u(De(null)):(i(m),setTimeout((function(){u(De(null))}),5e3)))}),[m,u,t]),Object(n.useEffect)((function(){return function(){return u(De(null))}}),[]),r.a.createElement(rt.a,{in:Boolean(m)},r.a.createElement(ct.a,{variant:"outlined",severity:"error",className:p.dialogAlert},o&&s("home.dialog.error.".concat(o))))},lt=a(382),it=a(379),st=a(378),ut=a(124),mt=Object(I.a)((function(e){return{wrapper:{position:"relative"},progress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},successAlert:{margin:e.spacing(3,3,0)}}})),pt=function(e){var t=e.text,a=Object(l.c)((function(e){return e.user.actionPending})),n=mt();return r.a.createElement("div",{className:n.wrapper},r.a.createElement(se.a,{variant:"contained",color:"primary",size:"large",type:"submit",disabled:a},t),a&&r.a.createElement(qe.a,{size:24,className:n.progress}))},gt=function(e){var t=e.onSubmit,a=e.children,n=e.submitText,c=at();return r.a.createElement(ut.ValidatorForm,{onSubmit:t,noValidate:!0},r.a.createElement(it.a,null,a),r.a.createElement(st.a,{className:c.dialogActions},r.a.createElement(pt,{text:n})))},dt=function(e){return r.a.createElement(ut.TextValidator,Object.assign({margin:"normal",variant:"outlined",fullWidth:!0,containerProps:{style:{display:"inline-flex",width:"100%"}}},e))},ft=function(e){var t=Object(v.a)().t;return r.a.createElement(dt,Object.assign({label:t("home.dialog.email"),type:"email",validators:["required","isEmail"],errorMessages:[t("home.dialog.validation.required"),t("home.dialog.validation.email")]},e))},bt=a(270),Et=function(e){var t=e.passwordChange,a=Object(bt.a)(e,["passwordChange"]),n=Object(v.a)().t;return r.a.createElement(dt,Object.assign({label:n("home.dialog.".concat(t?"newPassword":"password")),type:"password",validators:["required","matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{6,}$"],errorMessages:[n("home.dialog.validation.required"),n("home.dialog.validation.password")]},a))},ht=(0,a(15).makeStyles)((function(e){return{dialogText:{display:"block",marginTop:e.spacing(3),textAlign:"center"},dialogConfirmContainer:{display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(3,0)},dialogProgress:{marginRight:e.spacing(2)}}})),vt=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(v.a)().t,i=Object(l.b)(),s=Object(l.c)((function(e){return e.user.isLoggedIn})),u=ht(),m=function(e){return function(t){var a=t.target;c((function(t){return Object(C.a)(Object(C.a)({},t),{},Object(ge.a)({},e,a.value))}))}};return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(ae.a,{to:"invoices"}),r.a.createElement(gt,{onSubmit:function(e){e.preventDefault(),i(Oe(a))},submitText:o("signIn")},r.a.createElement(ft,{autoFocus:!0,onChange:m("email"),value:a.email}),r.a.createElement(Et,{onChange:m("password"),value:a.password}),r.a.createElement(lt.a,{component:p.b,to:"resetPassword",variant:"body2",color:"primary",className:u.dialogText},o("home.dialog.forgotPassword"))))},Ot=function(e){var t=e.success,a=e.text,n=mt();return r.a.createElement(rt.a,{in:t},r.a.createElement(ct.a,{variant:"outlined",severity:"success",className:n.successAlert},a))},jt=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(l.b)();return{success:r,performAction:function(t,a,n){c(!1),o(e(t)).then(K.d).then((function(){c(!0),a&&a()})).catch((function(e){return n&&n(e)}))}}},xt=function(){var e=Object(n.useState)({fullName:"",email:"",password:""}),t=Object(h.a)(e,2),a=t[0],c=t[1],o=jt(xe),l=o.success,i=o.performAction,s=Object(v.a)().t,u=ht(),m=function(e){return function(t){var a=t.target;c((function(t){return Object(C.a)(Object(C.a)({},t),{},Object(ge.a)({},e,a.value))}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{success:l,text:s("home.dialog.success.register")}),r.a.createElement(gt,{onSubmit:function(e){e.preventDefault(),i(a,(function(){return c({fullName:"",email:"",password:""})}))},submitText:s("signUp")},r.a.createElement(dt,{autoFocus:!0,label:s("home.dialog.name"),type:"text",value:a.fullName,validators:["required"],errorMessages:[s("home.dialog.validation.required")],onChange:m("fullName")}),r.a.createElement(ft,{onChange:m("email"),value:a.email}),r.a.createElement(Et,{onChange:m("password"),value:a.password}),r.a.createElement(w.a,{variant:"body2",color:"textSecondary",className:u.dialogText},s("home.dialog.terms"))))},yt=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],o=jt(we),l=o.success,i=o.performAction,s=Object(v.a)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{success:l,text:s("home.dialog.success.resetPassword")}),r.a.createElement(gt,{onSubmit:function(e){e.preventDefault(),i(a,(function(){return c("")}))},submitText:s("reset")},r.a.createElement(ft,{autoFocus:!0,onChange:function(e){var t=e.target;c(t.value)},value:a})))},wt=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],o=jt(ke),l=o.success,i=o.performAction,s=Object(v.a)().t,u=new URLSearchParams(Object(ae.h)().search),m=u.get("email"),p=u.get("token");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{success:l,text:s("home.dialog.success.resetPassword")}),r.a.createElement(gt,{onSubmit:function(e){e.preventDefault(),i({email:m,resetToken:p,newPassword:a},(function(){return c("")}))},submitText:s("changePassword")},r.a.createElement(Et,{autoFocus:!0,passwordChange:!0,onChange:function(e){var t=e.target;c(t.value)},value:a})))},kt=function(){var e=jt(ye),t=e.success,a=e.performAction,c=Object(v.a)().t,o=Object(l.c)((function(e){return e.user.actionPending})),i=new URLSearchParams(Object(ae.h)().search),s=i.get("email"),u=i.get("token"),m=ht();return Object(n.useEffect)((function(){a({email:s,token:u})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{success:t,text:c("home.dialog.success.confirmEmail")}),r.a.createElement(it.a,null,r.a.createElement("div",{className:m.dialogConfirmContainer},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(qe.a,{className:m.dialogProgress}),r.a.createElement(w.a,null,c("home.dialog.pleaseWait"))):r.a.createElement(w.a,null,c("home.dialog.closeWindow")))))},St=function(){var e=Object(v.a)().t,t=ne(),a=Object(ae.h)().pathname.substring(1);return r.a.createElement(_e.a,{open:t.isDialogOpen,onClose:t.close,onExited:t.onExited,maxWidth:"xs",fullWidth:!0},r.a.createElement(nt,{onClose:t.close,title:a?e("home.dialog.".concat(a)):""}),r.a.createElement(ot,{locationKey:a}),r.a.createElement(ae.b,{exact:!0,path:"/login",component:vt}),r.a.createElement(ae.b,{exact:!0,path:"/register",component:xt}),r.a.createElement(ae.b,{exact:!0,path:"/resetPassword",component:yt}),r.a.createElement(ae.b,{exact:!0,path:"/changePassword",component:wt}),r.a.createElement(ae.b,{exact:!0,path:"/confirmEmail",component:kt}))},Tt=function(){var e=Object(ae.h)(),t=ne(),a=Object(l.c)((function(e){return e.user.isLoggedIn}));return Object(n.useEffect)((function(){"/"!==e.pathname&&!t.isDialogOpen&&t.open(),"/"===e.pathname&&t.isDialogOpen&&t.close()}),[e]),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(ae.a,{to:"invoices"}),r.a.createElement(St,null),r.a.createElement(Ye,null),r.a.createElement(Qe,null),r.a.createElement(Ve.a,{my:5},r.a.createElement(P.a,{variant:"fullWidth"})),r.a.createElement(Xe,null))},Ct=function(){return r.a.createElement("div",null)},It=function(){return r.a.createElement("div",null)},Dt=function(){return r.a.createElement("div",null)},Nt=function(){return r.a.createElement("div",null)},Pt=function(){return r.a.createElement("div",null)},Ft=function(){var e=Object(v.a)().t,t=Object(l.c)((function(e){return e.user.isLoggedIn}));return r.a.createElement(Ve.a,{mt:3,className:"text-center"},r.a.createElement(w.a,{variant:"h1",color:"primary"},"404"),r.a.createElement(w.a,{variant:"h2"},e("notFound.header")),r.a.createElement(Ve.a,{my:2},r.a.createElement(w.a,{variant:"h6",color:"textSecondary"},e("notFound.description"))),r.a.createElement(se.a,{component:p.b,to:t?"/invoices":"/",variant:"contained",color:"primary"},e("notFound.button")))},Lt=function(){return r.a.createElement(ae.d,null,r.a.createElement(ae.b,{exact:!0,path:["/","/login","/register","/resetPassword","/changePassword","/confirmEmail"],component:Tt}),r.a.createElement(Je,{exact:!0,path:"/invoices",component:Ct}),r.a.createElement(Je,{exact:!0,path:"/products",component:It}),r.a.createElement(Je,{exact:!0,path:"/counterparties",component:Dt}),r.a.createElement(Je,{exact:!0,path:"/employees",component:Nt}),r.a.createElement(Je,{exact:!0,path:"/dataVisualization",component:Pt}),r.a.createElement(ae.b,{component:Ft}))},Rt=a(268),Bt=a(269),At=function(){var e=Object(l.c)((function(e){return e.app.theme})),t=Object(g.a)("light"===e?Rt:Bt);return r.a.createElement(p.a,null,r.a.createElement(d.a,{theme:t},r.a.createElement(f.a,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(He,null)},r.a.createElement(Me,null),r.a.createElement(b.a,null,r.a.createElement(E.a,null),r.a.createElement(Lt,null)))))},zt=Object(K.a)({reducer:{app:_,user:Fe}});a(326);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:zt},r.a.createElement(At,null))),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.930cd7b7.chunk.js.map