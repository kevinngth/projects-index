(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=a(41),u=a(34),i=a(10),m=a(79),p=a(178),s=a(160),d=a(180),f=a(164),E=Object(s.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),g=function(e){var t=E();return r.a.createElement(d.a,{className:t.backdrop,open:e.open},r.a.createElement(f.a,{color:"inherit"}))},b=a(165),j=Object(s.a)((function(e){return{buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1),backgroundColor:"#616773","&:hover":{backgroundColor:"#282C34"},"&:active":{backgroundColor:"#A4A9B3"}}}})),h=function(e){var t=e.clickHandler,a=e.content,n=e.isValid,c=j();return r.a.createElement("div",{className:c.buttons},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:t,className:c.button,disabled:!n},a))},v=a(166),O=a(181),k=a(179),L=a(182),y=Object(s.a)((function(e){return{formControl:{width:"100%"}}})),R=function(e){var t=y(),a=e.label,n=e.changeHandler,c=e.values;return r.a.createElement(v.a,{className:t.formControl},r.a.createElement(O.a,{id:a},a),r.a.createElement(k.a,{required:!0,labelId:a,id:a,onChange:n,defaultValue:""},c.map((function(e){return r.a.createElement(L.a,{key:e,value:e},e)}))))},F=a(169),U=a(170),S=Object(s.a)((function(e){return{root:{backgroundColor:"#616773"}}})),C=function(){var e=S();return r.a.createElement(F.a,{position:"sticky",className:e.root},r.a.createElement(U.a,null,r.a.createElement(B,null)))},N=a(171),x=a(74),A=a.n(x),w=a(75),I=a.n(w),P=Object(s.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}},links:{color:"#A4A9B3","&:hover":{color:"#282C34"},"&:active":{color:"#FFFFFF"}}}})),B=function(){var e=P();return r.a.createElement(N.a,{className:e.root},r.a.createElement(u.b,{to:"/",className:e.links},r.a.createElement(A.a,null)),r.a.createElement(u.b,{to:"/update",className:e.links},r.a.createElement(I.a,null)))},H=a(172),T=function(e){var t=e.project;return r.a.createElement(H.a,{align:"left"},t&&r.a.createElement(r.a.Fragment,null,(t.appURL||t.title)&&r.a.createElement(M,{label:t.title,url:t.appURL}),t.appURL&&t.repoURL&&" / ",t.repoURL&&r.a.createElement(M,{label:"Repo",url:t.repoURL})))},V=a(183),q=a(173),z=function(e){var t=e.student,a=e.projectId,n=e.changeHandler,c={title:"",appURL:"",repoURL:""};return t[a]&&(c=t[a]),r.a.createElement(r.a.Fragment,null,[{name:"title",label:"Title",placeholder:"My Project"},{name:"appURL",label:"App URL",placeholder:"https://myapp.herokuapp.com"},{name:"repoURL",label:"Repo URL",placeholder:"https://github.com/me/myapp"}].map((function(e){var t=e.name,a=e.label,l=e.placeholder;return r.a.createElement(q.a,{item:!0,xs:12,key:a},r.a.createElement(V.a,{required:!0,id:t,name:t,label:a,fullWidth:!0,onChange:function(e){return function(e,t){var a=e.target.value;c[t]=a,n(c)}(e,t)},value:c&&c[t],type:t.includes("URL")?"url":"text",placeholder:l}))})))},J=Object(s.a)((function(e){return{links:{textDecoration:"none",color:"#A4A9B3","&:hover":{color:"#282C34"},"&:active":{color:"#FFFFFF"}}}})),M=function(e){var t=J(),a=e.label,n=e.url;return r.a.createElement("a",{className:t.links,href:n},a||"untitled")},_=a(174),D=a(177),W=a(175),G=a(176),K=function(e){var t=e.students;return r.a.createElement(_.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(H.a,null,"Name"),r.a.createElement(H.a,{align:"left"},"Project 1"),r.a.createElement(H.a,{align:"left"},"Project 2"),r.a.createElement(H.a,{align:"left"},"Project 3"),r.a.createElement(H.a,{align:"left"},"Project 4"))),r.a.createElement(D.a,null,t.map((function(e){return r.a.createElement(Q,{student:e,key:e._id})}))))},Q=function(e){var t=e.student,a=t.name,n=t.project1,c=t.project2,l=t.project3,o=t.project4;return r.a.createElement(G.a,{key:a},r.a.createElement(H.a,{component:"th",scope:"row"},a),r.a.createElement(T,{project:n}),r.a.createElement(T,{project:c}),r.a.createElement(T,{project:l}),r.a.createElement(T,{project:o}))},X=function(e){return r.a.createElement(N.a,{component:"h1",variant:"h4",align:"center"},e.content)},Y=a(55),Z=a.n(Y),$=a(76),ee=a(77),te=a(22),ae=function(e){return e.toLowerCase().split(" ").join("")},ne=function(e){return e.includes("http")&&e.includes("://")},re=function(e){return!!e&&(!!e.title&&(!!ne(e.appURL)&&!!ne(e.repoURL)))},ce=a(78),le=a.n(ce).a.create({baseURL:"https://seif-3.herokuapp.com/api"}),oe={getAllStudents:function(){return le.get("/students")},updateStudentById:function(e,t){return le.put("/student/".concat(e),t)},getStudentById:function(e){return le.get("/student/".concat(e))}},ue=function(){var e=Object(n.useState)(!1),t=Object(te.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(te.a)(l,2),u=o[0],m=o[1],p=Object(n.useState)({}),s=Object(te.a)(p,2),d=s[0],f=s[1],E=Object(n.useState)(""),b=Object(te.a)(E,2),j=b[0],v=b[1],O=Object(n.useState)(!1),k=Object(te.a)(O,2),L=k[0],y=k[1];Object(n.useEffect)((function(){c(!0),oe.getAllStudents().then((function(e){m(e.data.data)})).then(c(!1))}),[]);var F=function(){var e=Object($.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),oe.updateStudentById(d._id,d).then((function(e){console.log(e.data.success)})).then((function(){c(!1),y(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return L?r.a.createElement(i.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{open:a}),r.a.createElement(q.a,{container:!0,spacing:3},r.a.createElement(q.a,{item:!0,xs:12,sm:6},r.a.createElement(R,{label:"Name",changeHandler:function(e){var t=e.target.value;f(u.find((function(e){return e.name===t})))},values:u.map((function(e){return e.name}))})),r.a.createElement(q.a,{item:!0,xs:12,sm:6},r.a.createElement(R,{label:"Project",changeHandler:function(e){var t=e.target.value;v(ae(t))},values:["Project 1","Project 2","Project 3","Project 4"]})),r.a.createElement(z,{student:d,projectId:j,changeHandler:function(e){var t=Object(ee.a)({},d);t[j]=e,f(t)}})),r.a.createElement(h,{content:"Submit",clickHandler:F,isValid:d&&re(d[j])}))},ie=function(){var e=Object(n.useState)([]),t=Object(te.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(te.a)(l,2),u=o[0],i=o[1];return Object(n.useEffect)((function(){i(!0),oe.getAllStudents().then((function(e){c(e.data.data)})).then(i(!1))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{content:"SEIF-3"}),r.a.createElement(K,{students:a}),r.a.createElement(g,{open:u}))},me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{content:"Update"}),r.a.createElement(ue,null))},pe=(a(121),a(124)),se=Object(m.a)({palette:{type:"dark"}}),de=Object(s.a)((function(e){return{layout:Object(o.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(o.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)})}})),fe=function(){var e=de();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:e.layout},r.a.createElement(p.a,{theme:se},r.a.createElement(pe.a,{className:e.paper},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:ie}),r.a.createElement(i.b,{path:"/update",exact:!0,component:me})))))))};a(122);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root"))},92:function(e,t,a){e.exports=a(123)}},[[92,1,2]]]);
//# sourceMappingURL=main.cc0838d4.chunk.js.map