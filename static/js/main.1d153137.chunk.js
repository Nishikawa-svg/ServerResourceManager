(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{82:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(9),c=s.n(r),a=s(111),i=s(114),l=s(116),o=s(118),j=s(11),d=s(20),u=s(62),x=s.n(u),b=s(63),O=s.n(b),h=s(23),m=[{userId:1,userName:"one",grade:"M1",password:"password"},{userId:2,userName:"two",grade:"M1",password:"password"},{userId:3,userName:"three",grade:"M1",password:"password"},{userId:4,userName:"four",grade:"M1",password:"password"}],f=[{serverId:1,serverAddress:"xxx.xxx.xxx.1",maxCores:8,registrationDate:Date.now(),coresUsed:0,coreUser:[1,3,null,null,null,null,null,null]},{serverId:2,serverAddress:"xxx.xxx.xxx.2",maxCores:8,registrationDate:Date.now(),coresUsed:0,coreUser:[null,null,null,null,null,null,null,null]},{serverId:3,serverAddress:"xxx.xxx.xxx.3",maxCores:4,registrationDate:Date.now(),coresUsed:0,coreUser:[null,null,null,null]}],g=s(2),v=Object(n.createContext)({userId:null,setUserId:function(){},userList:null,setUserList:function(){}}),p=function(e){var t=sessionStorage.getItem("srmUserId"),s=null;t&&(s=t),console.log("initialId ->",s);var r=Object(n.useState)(s),c=Object(h.a)(r,2),a=c[0],i=c[1],l=Object(n.useState)(m),o=Object(h.a)(l,2),j=o[0],d=o[1];return Object(n.useEffect)((function(){return console.log("contexts was mounted"),function(){console.log("contexts was unmounted")}}),[]),Object(g.jsx)(v.Provider,{value:{userId:a,setUserId:i,userList:j,setUserList:d},children:e.children})},w=Object(a.a)({headerPaper:{backgroundColor:"#aaa",height:60},headerTitle:{fontSize:24,textAlign:"center",paddingTop:10},link:{textDecoration:"none",color:"blue",verticalAlign:"middle"}});function I(){var e=Object(j.e)();return Object(g.jsx)(o.a,{onClick:function(){e.push("/signin")},children:"sing in"})}function N(e){var t=e.userName;return Object(g.jsx)(o.a,{children:Object(g.jsxs)(l.a,{container:!0,children:[Object(g.jsx)(O.a,{}),Object(g.jsx)("div",{children:t})]})})}var U=function(){var e=Object(n.useContext)(v),t=e.userId,s=e.userList,r=e.setUserId,c=Object(j.e)(),a=w();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(i.a,{className:a.headerPaper,children:Object(g.jsxs)(l.a,{container:!0,justify:"center",children:[Object(g.jsx)(l.a,{item:!0,xs:3,children:t>0&&Object(g.jsxs)(o.a,{className:a.signOutButton,variant:"outlined",onClick:function(){r(null),sessionStorage.removeItem("srmUserId"),c.push("/")},children:[Object(g.jsx)("div",{children:"Sign out"}),Object(g.jsx)(x.a,{})]})}),Object(g.jsx)(l.a,{item:!0,xs:6,children:Object(g.jsx)(d.b,{to:"/",className:a.link,children:Object(g.jsx)("div",{className:a.headerTitle,children:"Server Resource Manager"})})}),Object(g.jsx)(l.a,{item:!0,xs:3,children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:null===t||s.length<t?Object(g.jsx)(I,{}):Object(g.jsx)(N,{userName:s[t-1].userName})})})]})})})},C=Object(a.a)({content:{textAlign:"center"}});var y=function(){var e=C(),t=Object(j.e)(),s=Object(n.useContext)(v).userId;return Object(n.useEffect)((function(){return console.log("Home was mounted"),function(){console.log("Home was unmounted")}}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:e.content,children:[Object(g.jsx)("h1",{children:"write down how to use this application..."}),Object(g.jsx)("div",{onClick:function(){s?t.push("/resource"):t.push("/signin")},children:"Go ro resource page"}),Object(g.jsx)("hr",{}),Object(g.jsx)("h1",{children:"admin messages"})]})})},S=s(14),k=s(117),L=s(64),P=s.n(L),M=Object(a.a)({paper:{},lockIcon:{},inputBox:{},title:{}}),A={name:"",password:""};var D=function(){var e=M(),t=Object(j.e)(),s=Object(n.useState)(A),r=Object(h.a)(s,2),c=r[0],a=r[1],u=Object(n.useContext)(v),x=(u.userId,u.setUserId),b=(u.userName,u.setUserName,u.userList);return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:Object(g.jsx)(i.a,{className:e.paper,children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:Object(g.jsx)(l.a,{item:!0,xs:10,children:Object(g.jsxs)(l.a,{container:!0,direction:"column",children:[Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(P.a,{color:"secondary",className:e.lockIcon})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)("div",{className:e.title,children:"Sign In"})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Username"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.name,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{name:e.target.value}))}})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Password"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.password,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{password:e.target.value}))}})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(o.a,{className:e.button,fullWidth:!0,variant:"contained",onClick:function(e){e.preventDefault(),function(e,t){var s=!1;return b.map((function(n){n.userName===e&&n.password===t&&(s=!0,x(n.userId),sessionStorage.setItem("srmUserId",n.userId))})),s?{valid:s,msg:"successed to sign in"}:{valid:s,msg:"failed to sign in"}}(c.name,c.password).valid?t.push("/resource"):alert("failed to sign in"),a(A)},children:"Sign in"})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-end",children:Object(g.jsx)(d.b,{to:"/signup",className:e.link,children:"Don't have an account? Sign Up"})})]})})})})})})},B=s(51),W=s(65),F=s.n(W),E=Object(a.a)({}),G={name:"",grade:"",password:"",confirmPassword:""};var R=function(){var e=E(),t=Object(j.e)(),s=Object(n.useState)(G),r=Object(h.a)(s,2),c=r[0],a=r[1],u=Object(n.useContext)(v),x=u.userList,b=u.setUserList,O=u.setUserId;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:Object(g.jsx)(i.a,{className:e.paper,children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:Object(g.jsx)(l.a,{item:!0,xs:10,children:Object(g.jsxs)(l.a,{container:!0,direction:"column",children:[Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(F.a,{color:"secondary",className:e.poersonAddIcon})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)("div",{className:e.title,children:"Sign up"})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Username"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.name,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{name:e.target.value}))}})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Grade"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.grade,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{grade:e.target.value}))}})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Password"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.password,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{password:e.target.value}))}})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:Object(g.jsx)(l.a,{item:!0,children:"Confirm Password"})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(k.a,{className:e.inputBox,variant:"outlined",fullWidth:!0,value:c.confirmPassword,onChange:function(e){return a(Object(S.a)(Object(S.a)({},c),{},{confirmPassword:e.target.value}))}})}),Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(o.a,{className:e.button,fullWidth:!0,variant:"contained",onClick:function(e){e.preventDefault(),console.log(c);var s={valid:!0,errorMessage:""};if(""===c.name&&(s.valid=!1,s.errorMessage+="enter Username\n"),""===c.grade&&(s.valid=!1,s.errorMessage+="enter Grade\n"),""===c.password||""===c.confirmPassword?(s.valid=!1,s.errorMessage+="enter Password"):c.password!==c.confirmPassword&&(s.valid=!1,s.errorMessage+="Passwords do not match"),s.valid){var n={userId:x.length+1,userName:c.name,grade:c.grade,password:c.password};sessionStorage.setItem("srmUserId",n.userId),b([].concat(Object(B.a)(x),[n])),O(n.userId),t.push("/resource"),a(G)}else alert("".concat(s.errorMessage)),a(Object(S.a)(Object(S.a)({},c),{},{password:"",confirmPassword:""}))},children:"Sign up"})}),Object(g.jsx)(l.a,{container:!0,justify:"flex-end",children:Object(g.jsx)(d.b,{to:"/signin",className:e.link,children:"I have my own account"})})]})})})})})})},T=Object(n.createContext)({serverList:null,setServerList:function(){}}),H=function(e){var t=Object(n.useState)(f),s=Object(h.a)(t,2),r=s[0],c=s[1];return Object(g.jsx)(T.Provider,{value:{serverList:r,setServerList:c},children:e.children})},J=Object(a.a)({paper:{height:140,width:140,margin:.3,border:"solid 1px red",borderRadius:"0% 0% 0% 0%"}});var z=function(){var e=Object(n.useContext)(v),t=e.userId,s=e.userList,r=e.setUserId,c=Object(n.useContext)(T),a=c.serverList,o=c.setServerList,d=Object(j.e)(),u=J();return Object(n.useEffect)((function(){return console.log("resource was mounted"),(t>s.length||null===t)&&(r(null),sessionStorage.removeItem("srmUserId"),d.push("/")),function(){console.log("resource was unmounted")}}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Resource page"}),s.length<t||null===t?Object(g.jsx)("h1",{children:"please sign in"}):Object(g.jsxs)("h1",{children:["hey ",s[t-1].userName]}),a.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(l.a,{container:!0,justify:"center",children:Object(g.jsxs)(l.a,{item:!0,xs:11,children:[Object(g.jsx)("h1",{children:e.serverAddress}),Object(g.jsx)(l.a,{container:!0,justify:"flex-start",children:e.coreUser.map((function(n,r){return Object(g.jsxs)(i.a,{className:u.paper,onClick:function(){return function(e,s){var n=Object(B.a)(a);null===n[e-1].coreUser[s]?n[e-1].coreUser[s]=t:n[e-1].coreUser[s]===t&&(n[e-1].coreUser[s]=null),o(n)}(e.serverId,r)},children:[Object(g.jsxs)(l.a,{container:!0,children:["core",r+1]}),Object(g.jsx)(l.a,{container:!0,justify:"center",children:n&&Object(g.jsx)("div",{children:s[n-1].userName})})]},r)}))})]})})},e.serverId)}))]})},q=function(e){return Object(g.jsx)(p,{children:Object(g.jsx)(H,{children:e.children})})};var K=function(){return Object(n.useEffect)((function(){return console.log("App was mounted"),function(){console.log("App was unmounted")}}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(q,{children:[Object(g.jsx)(U,{}),Object(g.jsx)(j.a,{path:"/",exact:!0,children:Object(g.jsx)(y,{})}),Object(g.jsx)(j.a,{path:"/signin",exact:!0,children:Object(g.jsx)(D,{})}),Object(g.jsx)(j.a,{path:"/signup",exact:!0,children:Object(g.jsx)(R,{})}),Object(g.jsx)(j.a,{path:"/resource",exact:!0,children:Object(g.jsx)(z,{})})]})})})};c.a.render(Object(g.jsx)(K,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.1d153137.chunk.js.map