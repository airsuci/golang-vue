(function(e){function t(t){for(var s,o,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=a("7496"),n=function(){var e=this,t=e._self._c;return t(r["a"],[t("router-view")],1)},o=[],i=a("2877"),l={},u=Object(i["a"])(l,n,o,!1,null,null,null),c=u.exports,p=a("2f62"),d=a("bc3a"),g=a.n(d);const m="http://localhost:8090/api/v1",h={get:async function(e,t){let a={"content-type":"text/plain"},s=localStorage.getItem("token");null!==s&&(a.Authorization="Bearer "+s);let r={headers:a,params:t};try{const t=await g.a.get(m+e,r);return t}catch(n){return n.response}},post:async function(e,t){let a={"content-type":"text/plain"};try{const s=await g.a.post(m+e,t,{headers:a});return s}catch(s){return s.response}}},f=async e=>{const t={email:e.email,password:e.password},a=await h.post("/auth/login",t);return a.data.token&&localStorage.setItem("user",JSON.stringify(a.data)),a.data},v=()=>{localStorage.removeItem("user")},w=async e=>{const t={nickname:e.nickname,email:e.email,password:e.password},a=await h.post("/auth/register",t);return a},b=JSON.parse(localStorage.getItem("user")),y=b?{status:{loggedIn:!0},user:b}:{status:{loggedIn:!1},user:null},_={namespaced:!0,state:y,actions:{login({commit:e},t){return f(t).then(t=>(e("loginSuccess",t),Promise.resolve(t)),t=>(e("loginFailure"),Promise.reject(t)))},logout({commit:e}){v(),e("logout")},register({commit:e},t){return w(t).then(t=>(e("registerSuccess"),Promise.resolve(t.data)),t=>(e("registerFailure"),Promise.reject(t)))}},mutations:{loginSuccess(e,t){e.status.loggedIn=!0,e.user=t},loginFailure(e){e.status.loggedIn=!1,e.user=null},logout(e){e.status.loggedIn=!1,e.user=null},registerSuccess(e){e.status.loggedIn=!1},registerFailure(e){e.status.loggedIn=!1}}};s["default"].use(p["a"]);var k=new p["a"].Store({modules:{auth:_}}),x=a("ce5b"),O=a.n(x);s["default"].use(O.a);var S=new O.a({}),j=a("8c4f"),I=a("0798"),P=a("8336"),$=a("b0af"),L=a("99d9"),C=a("62ad"),R=a("a523"),D=a("4bd4"),F=a("f6c4"),A=a("0fd9"),J=a("2fa4"),M=a("8654"),E=a("71d9"),N=a("2a7f"),T=function(){var e=this,t=e._self._c;return t(r["a"],{attrs:{id:"inspire"}},[t(F["a"],[t(R["a"],{staticClass:"fill-height",attrs:{fluid:""}},[t(A["a"],{attrs:{align:"center",justify:"center"}},[t(C["a"],{attrs:{cols:"12",sm:"8",md:"4"}},[t($["a"],{staticClass:"elevation-12"},[t(E["a"],{attrs:{color:"primary",dark:"",flat:""}},[t(N["a"],[e._v("Login form")]),t(J["a"])],1),t(L["b"],[e.message?t(I["a"],{attrs:{type:"error"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),t(D["a"],{on:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[t(M["a"],{attrs:{label:"Email",name:"email","prepend-icon":"mdi-account",type:"text"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),t(M["a"],{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),t("span",[e._v("Don't have an account? Register "),t("router-link",{attrs:{to:"/register"}},[e._v("here.")])],1),t(L["a"],[t(J["a"]),t(P["a"],{attrs:{type:"submit",color:"primary"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},z=[];a("14d9");class B{constructor(e,t,a){this.nickname=e,this.email=t,this.password=a}}var H={name:"Login",data(){return{user:new B("",""),loading:!1,message:""}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/home")},methods:{handleLogin(){this.user.email&&this.user.password?this.$store.dispatch("auth/login",this.user).then(e=>{e.error?(this.loading=!1,this.message=e.error.toString()):this.$router.push("/home")}):this.user.email||this.user.password?this.user.password?this.message="Please fill email":this.message="Please fill password":this.message="Please fill the form"}}},K=H,V=Object(i["a"])(K,T,z,!1,null,null,null),Y=V.exports,q=a("169a"),G=function(){var e=this,t=e._self._c;return t(r["a"],{attrs:{id:"inspire"}},[t(F["a"],[t(q["a"],{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t($["a"],[t(L["c"],{staticClass:"headline"},[e._v("Account created!")]),t(L["b"],[e._v(" Congratulation, you can now login with your login information. ")]),t(L["a"],[t(J["a"]),t(P["a"],{attrs:{color:"green darken-1",text:""},on:{click:e.handleLogin}},[e._v(" OK ")])],1)],1)],1),t(R["a"],{staticClass:"fill-height",attrs:{fluid:""}},[t(A["a"],{attrs:{align:"center",justify:"center"}},[t(C["a"],{attrs:{cols:"12",sm:"8",md:"4"}},[t($["a"],{staticClass:"elevation-12"},[t(E["a"],{attrs:{color:"primary",dark:"",flat:""}},[t(N["a"],[e._v("Register form")]),t(J["a"])],1),t(L["b"],[e.message?t(I["a"],{attrs:{type:"error"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),t(D["a"],{on:{submit:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[t(M["a"],{attrs:{label:"Email",name:"email","prepend-icon":"mdi-account",type:"text"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),t(M["a"],{attrs:{id:"nickname",label:"Nickname",name:"nickname","prepend-icon":"mdi-at",type:"text"},model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}}),t(M["a"],{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),t("span",[e._v("Already have an account? Login "),t("router-link",{attrs:{to:"/"}},[e._v("here.")])],1),t(L["a"],[t(J["a"]),t(P["a"],{attrs:{type:"submit",color:"primary"}},[e._v("Register")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},Q=[],U={name:"Register",data(){return{user:new B("","",""),submitted:!1,successful:!1,message:"",dialog:!1}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/home")},methods:{handleRegister(){this.message="",this.submitted=!0,this.$store.dispatch("auth/register",this.user).then(e=>{e.error?(this.message=e.error.toString(),this.successful=!1):this.dialog=!0})},handleLogin(){this.dialog=!1,this.$router.push("/login")}}},W=U,X=Object(i["a"])(W,G,Q,!1,null,null,null),Z=X.exports,ee=a("40dc"),te=a("5bc1"),ae=a("553a"),se=a("132d"),re=a("8860"),ne=a("da13"),oe=a("1800"),ie=a("5d23"),le=a("f774"),ue=function(){var e=this,t=e._self._c;return t(r["a"],{attrs:{id:"inspire"}},[t(le["a"],{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(re["a"],{attrs:{dense:""}},[t(ne["a"],{attrs:{link:""}},[t(oe["a"],[t(se["a"],[e._v("mdi-account")])],1),t(ie["a"],[t(ie["b"],[e._v(e._s(e.user))])],1)],1),t(ne["a"],{attrs:{link:""}},[t(oe["a"],[t(se["a"],[e._v("mdi-logout")])],1),t(ie["a"],[t(ie["b"],{on:{click:function(t){return t.preventDefault(),e.logOut.apply(null,arguments)}}},[e._v("Log Out")])],1)],1)],1)],1),t(ee["a"],{attrs:{app:"","clipped-left":""}},[t(te["a"],{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),t(N["a"],[e._v("Application")])],1),t(F["a"],[t(R["a"],{staticClass:"fill-height",attrs:{fluid:""}},[t(A["a"],{attrs:{align:"center",justify:"center"}},[t(C["a"],{staticClass:"shrink"},[t("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),t("p",{staticStyle:{"text-align":"center"}},[e._v("Home Page")])])],1)],1)],1),t(ae["a"],{attrs:{app:""}},[t("span",[e._v("© "+e._s((new Date).getFullYear()))])])],1)},ce=[],pe={props:{source:String},data:()=>({drawer:null}),created(){this.user=this.$store.state.auth.user.email},methods:{handleLogin(){console.log("test",this.$store.state.user)},logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/")}}},de=pe,ge=Object(i["a"])(de,ue,ce,!1,null,null,null),me=ge.exports;s["default"].use(j["a"]);const he=new j["a"]({mode:"history",routes:[{path:"/",component:Y},{path:"/home",component:me},{path:"/register",component:Z},{path:"/login",component:Y}]});he.beforeEach((e,t,a)=>{const s=["/","/register"],r=!s.includes(e.path),n=localStorage.getItem("user");r&&!n?a("/"):a()}),s["default"].config.productionTip=!1,new s["default"]({router:he,vuetify:S,store:k,render:e=>e(c)}).$mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0574b137.js.map