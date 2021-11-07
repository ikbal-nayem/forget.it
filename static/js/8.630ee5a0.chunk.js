(this["webpackJsonpforget.it"]=this["webpackJsonpforget.it"]||[]).push([[8],{289:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(25),c=a(0),s=a.n(c),i=a(16),l=a(285),o=a(242),d=a.n(o),u=a(291),j=a(270),b=a(225),f=a(272),m=a(273),h=a(274),p=a(206),x=a(271),O=a(275),g=a(276),v=a(13),w=a(259),y=a(260),N=a(256),S=a(257),E=a(263),k=a(203),z=a(210),_=a(109),C=a(213),P=a(261),L=a(262),D=a(264),A=a(265),q=a(266),T=a(267),U=a(268),W=a(57),I=a(258),R=a(26),H=a(37),Z=a(81),F=function(e,t){var a={add_credential:"/api/credentials/",add_urlwise_credential:"/api/credentials/urlwise/"};return new Promise((function(n,r){H.a.post(a[e],t).then((function(e){return 201===e.status&&n(e.data)})).catch((function(e){console.log(e.message),e.response?R.b.error("".concat(e.response.status," - ").concat(Z.a[e.response.status])):R.b.error(e.message),r()}))}))},B=function(e,t){var a={update_credential:"/api/credentials/".concat(t.id,"/"),update_urlwise_credential:"/api/credentials/urlwise/".concat(t.id,"/")};return new Promise((function(n,r){H.a.put(a[e],t).then((function(e){return 200===e.status&&n(e.data)})).catch((function(e){console.log(e.message);try{R.b.error("".concat(e.response.status," - ").concat(Z.a[e.response.status]))}catch(t){R.b.error(e.message)}r()}))}))},M=function(e,t){var a={delete_credential:"/api/credentials/".concat(t,"/"),delete_urlwise_credential:"/api/credentials/urlwise/".concat(t,"/")};return new Promise((function(t,n){H.a.delete(a[e]).then((function(e){return 204===e.status&&t({success:!0})})).catch((function(e){console.log(e.message),R.b.error("".concat(e.response.status," - ").concat(Z.a[e.response.status])),n()}))}))},K=a(2);var V=function(e){var t=e.c_id,a=e.handleList,n=Object(W.b)(),c=n.register,i=n.formState.errors,l=n.handleSubmit,o=s.a.useState(!1),d=Object(r.a)(o,2),u=d[0],j=d[1],b=l((function(e){j(!0),e.credential_url=t,F("add_urlwise_credential",e).then((function(e){a("ADD",e)})).finally((function(){return j(!1)}))}));return Object(K.jsxs)(s.a.Fragment,{children:[Object(K.jsxs)(N.a,{children:[Object(K.jsx)(S.a,{className:"px-2",padding:"checkbox",children:Object(K.jsx)(z.a,{placeholder:"Username",size:"small",fullWidth:!0,autoFocus:!0,disabled:u,error:!!i.username,inputProps:Object(v.a)({},c("username",{required:!0})),onKeyPress:function(e){return"Enter"===e.key&&b(e)}})}),Object(K.jsx)(S.a,{className:"px-2",padding:"checkbox",children:Object(K.jsx)(z.a,{placeholder:"Password",size:"small",fullWidth:!0,disabled:u,error:!!i.pswd,inputProps:Object(v.a)({},c("pswd",{required:!0})),onKeyPress:function(e){return"Enter"===e.key&&b(e)}})})]}),Object(K.jsx)(N.a,{children:Object(K.jsx)(S.a,{colSpan:2,padding:"none",className:"border-0",children:Object(K.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(K.jsxs)(k.a,{size:"small",variant:"outlined",disabled:u,className:"bg-gradient text-white",onClick:b,children:["Save \xa0 ",Object(K.jsx)(I.a,{fontSize:"small"})]})})})})]})};function J(e){var t=e.credentials,a=s.a.useState(!1),c=Object(r.a)(a,2),i=c[0],l=c[1],o=s.a.useState(t),d=Object(r.a)(o,2),u=d[0],j=d[1],b=function(e,t){if("ADD"===e)j([].concat(Object(n.a)(u),[t])),l(!1);else if("DELETE"===e)M("delete_urlwise_credential",t.id).then((function(e){e.success&&(R.b.info("Credential deleted!"),j(u.filter((function(e){return e.id!==t.id}))))}));else if("UPDATE"===e){var a=u.findIndex((function(e){return e.id===t.id}));u[a]=t,j(Object(n.a)(u))}};return Object(K.jsxs)("div",{className:"overflow-auto w-100",children:[Object(K.jsxs)(w.a,{size:"small",style:{maxWidth:500,minWidth:280},children:[Object(K.jsx)(y.a,{children:Object(K.jsxs)(N.a,{children:[Object(K.jsxs)(S.a,{className:"px-2 font-weight-bold",children:["Username \xa0 ",Object(K.jsx)(P.a,{fontSize:"small"})]}),Object(K.jsxs)(S.a,{className:"px-2 font-weight-bold",children:["Password \xa0 ",Object(K.jsx)(L.a,{fontSize:"small"})]})]})}),Object(K.jsxs)(E.a,{children:[u.map((function(e){return Object(K.jsx)(ce,{cre:e,handleList:b},e.id)})),i&&Object(K.jsx)(V,{c_id:t[0].credential_url,handleList:b})]})]}),!i&&Object(K.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(K.jsx)(k.a,{size:"small",variant:"outlined",className:"w-25",onClick:function(){return l(!0)},children:Object(K.jsx)(D.a,{color:"action",fontSize:"small"})})})]})}var G,Q,X,Y,$,ee,te,ae,ne,re,ce=s.a.memo((function(e){var t=e.cre,a=e.handleList,n=s.a.useState(!1),c=Object(r.a)(n,2),l=c[0],o=c[1],d=s.a.useState(!1),u=Object(r.a)(d,2),j=u[0],b=u[1],f=s.a.useState(null),m=Object(r.a)(f,2),h=m[0],x=m[1],O=s.a.useState(!1),g=Object(r.a)(O,2),w=g[0],y=g[1],E=Object(i.e)((function(e){return e.auth})).authUser,k=Object(W.b)({defaultValues:{username:t.username,pswd:E.encrypt_pswds?atob(t.pswd):t.pswd}}),P=k.register,L=k.formState.errors,D=(0,k.handleSubmit)((function(e){b(!0);var n=Object(v.a)(Object(v.a)({},t),e);B("update_urlwise_credential",n).then((function(e){a("UPDATE",e)})).finally((function(){return b(!1)})),y(!1),x(null)}));return Object(K.jsxs)(N.a,{children:[w?Object(K.jsxs)(s.a.Fragment,{children:[Object(K.jsx)(S.a,{className:"px-2",padding:"checkbox",children:Object(K.jsx)(z.a,{placeholder:"Username",size:"small",fullWidth:!0,autoFocus:!0,disabled:j,error:!!L.username,inputProps:Object(v.a)({},P("username",{required:!0})),onKeyPress:function(e){return"Enter"===e.key&&D(e)}})}),Object(K.jsx)(S.a,{className:"px-2",padding:"checkbox",children:Object(K.jsx)(z.a,{placeholder:"Password",size:"small",fullWidth:!0,disabled:j,error:!!L.pswd,inputProps:Object(v.a)({},P("pswd",{required:!0})),onKeyPress:function(e){return"Enter"===e.key&&D(e)}})})]}):Object(K.jsxs)(s.a.Fragment,{children:[Object(K.jsx)(S.a,{className:"px-2 text-break",children:t.username}),Object(K.jsx)(S.a,{className:"px-2 text-break",children:Object(K.jsx)("span",{onDoubleClick:function(){return o(!l)},children:l?E.encrypt_pswds?atob(t.pswd):t.pswd:"########"})})]}),Object(K.jsxs)(S.a,{className:"border-0 p-0",style:{width:10},children:[Object(K.jsx)(p.a,{size:"small",className:w?"bg-success text-white":"text-dark",disabled:j,onClick:w?D:function(e){return x(e.currentTarget)},children:w?Object(K.jsx)(A.a,{fontSize:"small"}):Object(K.jsx)(q.a,{fontSize:"small"})}),Object(K.jsxs)(_.a,{anchorEl:h,open:Boolean(h)&&!w,onClose:function(){return x(null)},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(K.jsxs)(C.a,{className:"py-0 px-1",style:{minHeight:"auto"},onClick:function(){return y(!0)},children:[Object(K.jsx)(T.a,{fontSize:"small"})," Edit"]}),Object(K.jsxs)(C.a,{className:"py-0 px-1",style:{minHeight:"auto"},onClick:function(){return a("DELETE",t)},children:[Object(K.jsx)(U.a,{color:"error",fontSize:"small"})," Delete"]})]})]})]},t.id)})),se=s.a.memo(J),ie=a(269),le=Object(ie.a)((function(e){return{root:{width:"100%",paddingBottom:15},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0,fontWeight:"bold"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,marginLeft:10}}})),oe=["title","titleId"];function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},de.apply(this,arguments)}function ue(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function je(e,t){var a=e.title,n=e.titleId,r=ue(e,oe);return c.createElement("svg",de({id:"b21613c9-2bf0-4d37-bef0-3b193d34fc5d","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:647.63626,height:632.17383,viewBox:"0 0 647.63626 632.17383",ref:t,"aria-labelledby":n},r),a?c.createElement("title",{id:n},a):null,G||(G=c.createElement("path",{d:"M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z",transform:"translate(-276.18187 -133.91309)",fill:"#f2f2f2"})),Q||(Q=c.createElement("path",{d:"M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z",transform:"translate(-276.18187 -133.91309)",fill:"#3f3d56"})),X||(X=c.createElement("path",{d:"M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z",transform:"translate(-276.18187 -133.91309)",fill:"#fb7e3d"})),Y||(Y=c.createElement("circle",{cx:190.15351,cy:24.95465,r:20,fill:"#fb7e3d"})),$||($=c.createElement("circle",{cx:190.15351,cy:24.95465,r:12.66462,fill:"#fff"})),ee||(ee=c.createElement("path",{d:"M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z",transform:"translate(-276.18187 -133.91309)",fill:"#e6e6e6"})),te||(te=c.createElement("path",{d:"M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z",transform:"translate(-276.18187 -133.91309)",fill:"#3f3d56"})),ae||(ae=c.createElement("path",{d:"M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z",transform:"translate(-276.18187 -133.91309)",fill:"#fb7e3d"})),ne||(ne=c.createElement("circle",{cx:433.63626,cy:105.17383,r:20,fill:"#fb7e3d"})),re||(re=c.createElement("circle",{cx:433.63626,cy:105.17383,r:12.18187,fill:"#fff"})))}var be=c.forwardRef(je),fe=(a.p,function(e){return new URL(e).host});function me(e){var t=e.credential_list,a=e.handleList,n=e.formOpen,c=le(),i=s.a.useState(!1),l=Object(r.a)(i,2),o=l[0],d=l[1];return 0===t.length?Object(K.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(K.jsx)(be,{height:120,width:120,className:"mb-3 mt-5"}),Object(K.jsx)("h2",{className:"text-gradient animated slideInUp animation-duration-3",children:"No credentials found"})]}):Object(K.jsx)("div",{className:c.root,children:t.map((function(e,t){return Object(K.jsxs)(u.a,{expanded:o==="panel".concat(t),onChange:(r="panel".concat(t),function(e,t){return d(!!t&&r)}),children:[Object(K.jsxs)(j.a,{expandIcon:Object(K.jsx)(x.a,{}),"aria-controls":"panel1bh-content",children:[o!=="panel".concat(t)&&Object(K.jsx)("img",{width:22,height:22,alt:".",className:"mr-3 rounded-circle",src:"https://besticon-demo.herokuapp.com/icon?url=".concat(e.url,"&size=16..32..64&fallback_icon_color=fff")}),Object(K.jsx)(b.a,{className:"text-truncate ".concat(c.heading),children:e.title||fe(e.url)}),Object(K.jsx)(b.a,{className:c.secondaryHeading,children:fe(e.url)})]}),Object(K.jsx)(f.a,{children:Object(K.jsx)(he,{credential:e,handleList:a,formOpen:n})})]},e.id);var r}))})}var he=s.a.memo((function(e){var t=e.credential,a=e.handleList,n=e.formOpen;return Object(K.jsxs)(m.a,{container:!0,justify:"center",spacing:2,children:[Object(K.jsx)(m.a,{item:!0,children:Object(K.jsx)("img",{width:80,height:80,alt:"logo",className:"rounded",src:"https://besticon-demo.herokuapp.com/icon?url=".concat(t.url,"&size=64..128..256&fallback_icon_color=fff")})}),Object(K.jsxs)(m.a,{item:!0,xs:12,sm:!0,container:!0,children:[Object(K.jsxs)(m.a,{item:!0,xs:12,container:!0,justify:"space-between",children:[Object(K.jsx)(m.a,{item:!0,xs:8,className:"text-truncate",children:Object(K.jsx)(b.a,{gutterBottom:!0,variant:"subtitle1",children:Object(K.jsx)(h.a,{className:"text-gradient",href:t.url,target:"_blank",children:fe(t.url)})})}),Object(K.jsxs)(m.a,{item:!0,children:[Object(K.jsx)(p.a,{size:"small",onClick:function(){return n(t)},children:Object(K.jsx)(O.a,{fontSize:"small"})}),Object(K.jsx)(p.a,{size:"small",onClick:function(){return a("DELETE",t)},children:Object(K.jsx)(g.a,{fontSize:"small",color:"error"})})]})]}),Object(K.jsx)(se,{credentials:t.credentials})]})]})})),pe=a(292),xe=a(284),Oe=a(279),ge=a(278),ve=a(281),we=a(282),ye=a(283),Ne=a(277),Se=a(280),Ee=function(e){return{render:e,type:"success",isLoading:!1,autoClose:3e3,theme:"dark"}},ke=s.a.forwardRef((function(e,t){return Object(K.jsx)(Ne.a,Object(v.a)({direction:"down",ref:t},e))}));function ze(e){var t=e.handleList,a=e.handleClose,n=e.open,c=e.update_data,i=s.a.useState(!1),l=Object(r.a)(i,2),o=l[0],d=l[1],u=Object(W.b)({defaultValues:{}}),j=u.register,b=u.control,f=u.formState.errors,m=u.getValues,h=u.setValue,p=u.handleSubmit,x=u.reset;s.a.useEffect((function(){x(Object(v.a)({},c.current))}),[n,c,x]);var O=s.a.useCallback((function(e){var t;!m().title&&e.target.value&&(t=e.target.value,new Promise((function(e,a){H.a.get("http://textance.herokuapp.com/title/".concat(t)).then((function(t){return 200===t.status?e(t.data):a()})).catch((function(e){return console.log(e.message)}))}))).then((function(e){return h("title",e)}))}),[h,m]);return Object(K.jsxs)(pe.a,{open:n,TransitionComponent:ke,onClose:a,"aria-labelledby":"credential-form",fullWidth:!0,maxWidth:"sm",children:[Object(K.jsxs)(ge.a,{id:"credential-form",className:"text-center",children:[c.current.id?"Update":"Add New"," Credential"]}),Object(K.jsxs)("form",{onSubmit:p((function(e){var n=R.b.loading("Saving, Please wait..."),r=c.current.id?B:F;d(!0),r(c.current.id?"update_credential":"add_credential",e).then((function(e){R.b.update(n,Ee("Credential saved.")),t(c.current.id?"UPDATE":"ADD",e),a()})).catch((function(){return R.b.update(n,{render:"Could not save the credential!",type:"warning",isLoading:!1,autoClose:5e3,theme:"dark"})})).finally((function(){d(!1)}))})),children:[Object(K.jsxs)(Oe.a,{children:[Object(K.jsx)("div",{className:"form-row",children:Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)(W.a,{control:b,name:"title",render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(K.jsx)(z.a,{label:"Title",size:"small",fullWidth:!0,disabled:o,margin:"normal",onChange:a,value:n||""})}})})}),Object(K.jsx)("div",{className:"form-row",children:Object(K.jsx)("div",{className:"col-12",children:Object(K.jsx)(z.a,{label:"Website URL",size:"small",fullWidth:!0,placeholder:"http://example.com",type:"url",margin:"normal",required:!0,autoFocus:!0,disabled:o,onBlur:O,error:!!f.url,inputProps:Object(v.a)(Object(v.a)({},j("url",{required:!0})),{},{required:""}),InputProps:{endAdornment:Object(K.jsx)(Se.a,{position:"end",children:Object(K.jsx)(ve.a,{})})}})})}),!c.current.id&&Object(K.jsxs)("div",{className:"form-row",children:[Object(K.jsx)("div",{className:"col-sm-6 col-12",children:Object(K.jsx)(z.a,{label:"Username",size:"small",margin:"normal",fullWidth:!0,required:!0,disabled:o,error:!!f.username,inputProps:Object(v.a)(Object(v.a)({},j("username",{required:!0})),{},{required:""}),InputProps:{endAdornment:Object(K.jsx)(Se.a,{position:"end",children:Object(K.jsx)(we.a,{})})}})}),Object(K.jsx)("div",{className:"col-sm-6 col-12",children:Object(K.jsx)(z.a,{label:"Password",size:"small",margin:"normal",fullWidth:!0,required:!0,disabled:o,error:!!f.pswd,inputProps:Object(v.a)(Object(v.a)({},j("pswd",{required:!0})),{},{required:""}),InputProps:{endAdornment:Object(K.jsx)(Se.a,{position:"end",children:Object(K.jsx)(ye.a,{})})}})})]})]}),Object(K.jsxs)(xe.a,{className:"justify-content-center",children:[Object(K.jsx)(k.a,{onClick:a,size:"small",color:"primary",disabled:o,children:"Cancel"}),Object(K.jsx)(k.a,{type:"submit",size:"small",color:"primary",variant:"contained",disabled:o,children:"Submit"})]})]})]})}var _e=function(e){var t=e.text;return Object(K.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"calc(100vh - 200px)"},children:[Object(K.jsx)("div",{className:"search-loading-icon"}),Object(K.jsx)("h3",{className:"search-loading-text text-muted mt-4",children:t||"Searching..."})]})},Ce=a(226),Pe=function(e){return Object(K.jsx)(Ce.Scrollbars,Object(v.a)(Object(v.a)({},e),{},{autoHide:!0,renderTrackHorizontal:function(e){return Object(K.jsx)("div",Object(v.a)(Object(v.a)({},e),{},{style:{display:"none"}}))}}))};t.default=function(){var e=Object(i.e)((function(e){return e.search.query})),t=s.a.useState(!1),a=Object(r.a)(t,2),c=a[0],o=a[1],u=s.a.useState(!0),j=Object(r.a)(u,2),b=j[0],f=j[1],m=s.a.useState([]),h=Object(r.a)(m,2),p=h[0],x=h[1],O=s.a.useRef([]),g=s.a.useRef({});s.a.useEffect((function(){H.a.get("/api/credentials").then((function(e){200===e.status&&(O.current=e.data,x(e.data))})).catch((function(e){Object(R.b)(e.response?Z.a[e.response.status]:e.message)})).finally((function(){return f(!1)}))}),[]);var v=function(e){g.current=e.id?e:{},o(!0)},w=function(e,t){if("ADD"===e)O.current=[].concat(Object(n.a)(p),[t]),x(O.current);else if("UPDATE"===e){var a=p.findIndex((function(e){return e.id===t.id}));p[a]=t,O.current=Object(n.a)(p),x(Object(n.a)(p))}else if("DELETE"===e){var r=R.b.loading("Deleting credential...");M("delete_credential",t.id).then((function(e){R.b.update(r,Ee("Credential URL deleted!")),O.current=Object(n.a)(p.filter((function(e){return e.id!==t.id}))),x(O.current)})).catch((function(){return R.b.update(r,{render:"Credential could not delete!",type:"error",isLoading:!1,autoClose:5e3,theme:"dark"})}))}};return s.a.useEffect((function(){var t=O.current.filter((function(t){return["title","url"].some((function(a){var n;return null===(n=t[a])||void 0===n?void 0:n.toLowerCase().includes(e||"")}))}));x(Object(n.a)(t))}),[e]),Object(K.jsxs)(s.a.Fragment,{children:[Object(K.jsx)(Pe,{children:Object(K.jsx)("div",{className:"app-wrapper container",children:b?Object(K.jsx)(_e,{text:"Looking for credentials..."}):Object(K.jsx)(me,{credential_list:p,formOpen:v,handleList:w})})}),Object(K.jsx)(l.a,{size:"medium",className:"bg-gradient text-white position-fixed animated zoomIn",onClick:v,style:{bottom:20,right:20},children:Object(K.jsx)(d.a,{fontSize:"large"})}),Object(K.jsx)(ze,{update_data:g,handleList:w,handleClose:function(){return o(!1)},open:c})]})}}}]);
//# sourceMappingURL=8.630ee5a0.chunk.js.map