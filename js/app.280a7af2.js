(function(){"use strict";var e={6980:function(e,t,a){var n=a(5130),o=a(6768);const r={class:"container-fluid contenedor-header"},l={class:"row"},i={class:"col-3 header-Tittle-item"},s={class:"col-6 header-Tittle-item"},u={class:"col-3 header-Tittle-item"};function c(e,t,a,n,c,v){const d=(0,o.g2)("NavBar"),g=(0,o.g2)("TittleRol"),f=(0,o.g2)("TittleName"),p=(0,o.g2)("TittleLema");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(d,{onLanguageChanged:v.changeLanguage,Home:c.texts.NavBar.Home,AboutMe:c.texts.NavBar.AboutMe,MyProjects:c.texts.NavBar.MyProjects,MySkills:c.texts.NavBar.MySkills,Contacts:c.texts.NavBar.Contacts},null,8,["onLanguageChanged","Home","AboutMe","MyProjects","MySkills","Contacts"]),(0,o.Lk)("header",null,[(0,o.Lk)("div",r,[(0,o.Lk)("div",l,[(0,o.Lk)("section",i,[(0,o.bF)(g,{rol:c.texts.profile.rol},null,8,["rol"])]),(0,o.Lk)("section",s,[(0,o.bF)(f)]),(0,o.Lk)("section",u,[(0,o.bF)(p,{rol:c.texts.profile.Welcome},null,8,["rol"])])])])]),t[0]||(t[0]=(0,o.Lk)("section",null,[(0,o.Lk)("div",{class:"container-fluid contenedor-section"},[(0,o.Lk)("div",{class:"row"})])],-1))],64)}var v=JSON.parse('{"profile":{"rol":"Desarrollador de Videojuegos y Software","about":"Sobre mí","Welcome":"Bienvenido a mi portafolio"},"NavBar":{"Home":"Inicio","AboutMe":"Sobre mí","MyProjects":"Mis Proyectos","MySkills":"Mis Habilidades","Contacts":"Contactos"}}'),d=JSON.parse('{"profile":{"rol":"Videogames and Software Developer","about":"About me","Welcome":"Welcome to my portfolio"},"NavBar":{"Home":"Home","AboutMe":"About Me","MyProjects":"My Projects","MySkills":"My Skills","Contacts":"Contacts"}}'),g=a(4232),f=a.p+"img/Logo-128p.b9af4beb.png";const p={class:"navbar navbar-expand-lg custom-navbar"},b={class:"container-fluid master-box-nav"},m={class:"language-switch"},k={class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent"},y={class:"navbar-nav mb-2 mb-lg-0"},L={class:"nav-item"},h={class:"nav-link","aria-current":"page",href:"#"},S={class:"nav-item"},M={class:"nav-link",href:"#"},C={class:"nav-item"},x={class:"nav-link",href:"#"},A={class:"nav-item"},j={class:"nav-link",href:"#"},B={class:"nav-item"},T={class:"nav-link",href:"#"};function N(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("nav",p,[(0,o.Lk)("div",b,[t[2]||(t[2]=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},[(0,o.Lk)("img",{class:"img-logo",src:f,alt:"Logo"})],-1)),(0,o.Lk)("div",m,[(0,o.Lk)("input",{type:"checkbox",id:"lenguaje-op",onChange:t[0]||(t[0]=(...e)=>l.toggleLanguage&&l.toggleLanguage(...e))},null,32),t[1]||(t[1]=(0,o.Lk)("label",{for:"lenguaje-op",class:"switch-label"},[(0,o.Lk)("span",{class:"flag flag-spanish"},"ES"),(0,o.Lk)("span",{class:"flag flag-english"},"EN")],-1))]),t[3]||(t[3]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",k,[(0,o.Lk)("ul",y,[(0,o.Lk)("li",L,[(0,o.Lk)("a",h,(0,g.v_)(a.Home),1)]),(0,o.Lk)("li",S,[(0,o.Lk)("a",M,(0,g.v_)(a.AboutMe),1)]),(0,o.Lk)("li",C,[(0,o.Lk)("a",x,(0,g.v_)(a.MyProjects),1)]),(0,o.Lk)("li",A,[(0,o.Lk)("a",j,(0,g.v_)(a.MySkills),1)]),(0,o.Lk)("li",B,[(0,o.Lk)("a",T,(0,g.v_)(a.Contacts),1)])])])])])}var _={name:"NavBar",props:{Home:{type:String,required:!0},AboutMe:{type:String,required:!0},MyProjects:{type:String,required:!0},MySkills:{type:String,required:!0},Contacts:{type:String,required:!0}},methods:{toggleLanguage(e){this.$emit("language-changed",e.target.checked)}}},O=a(1241);const w=(0,O.A)(_,[["render",N],["__scopeId","data-v-cce8c318"]]);var q=w,P=a.p+"img/Ulises-lopez-neon-tittle.aefa1d19.png";const F={id:"TittleNameBox",ref:"tittleBox"};function E(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",F,t[0]||(t[0]=[(0,o.Lk)("img",{src:P,alt:""},null,-1)]),512)}var H=a(144),R={name:"TittleName",setup(){const e=(0,H.KR)(0),t=(0,H.KR)(null),a=()=>{const a=()=>{e.value+=1,e.value>=360&&(e.value=0),t.value&&(t.value.style.background=`linear-gradient(${e.value}deg, #CA1551, #07001b00, #07001b5e, #07001b00, #CA1551)`),requestAnimationFrame(a)};requestAnimationFrame(a)};return(0,o.sV)((()=>{a()})),{tittleBox:t}}};const K=(0,O.A)(R,[["render",E],["__scopeId","data-v-2ae6bfa0"]]);var I=K;const V={id:"TittleNameBox",ref:"tittleBox"};function X(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.Lk)("h1",null,(0,g.v_)(a.rol),1)],512)}var W={name:"TittleRol",props:{rol:{type:String,required:!0}},setup(){const e=(0,H.KR)(0),t=(0,H.KR)(null),a=()=>{const a=()=>{e.value+=1,e.value>=360&&(e.value=0),t.value&&(t.value.style.background=`linear-gradient(${e.value}deg, #CA1551, #07001b00, #07001b5e, #07001b00, #CA1551)`),requestAnimationFrame(a)};requestAnimationFrame(a)};return(0,o.sV)((()=>{a()})),{tittleBox:t}}};const $=(0,O.A)(W,[["render",X],["__scopeId","data-v-224a357b"]]);var D=$;const J={id:"TittleNameBox",ref:"tittleBox"};function z(e,t,a,n,r,l){return(0,o.uX)(),(0,o.CE)("div",J,[(0,o.Lk)("h1",null,(0,g.v_)(a.rol),1)],512)}var U={name:"TittleLema",props:{rol:{type:String,required:!0}},setup(){const e=(0,H.KR)(0),t=(0,H.KR)(null),a=()=>{const a=()=>{e.value+=1,e.value>=360&&(e.value=0),t.value&&(t.value.style.background=`linear-gradient(${e.value}deg, #CA1551, #07001b00, #07001b5e, #07001b00, #CA1551)`),requestAnimationFrame(a)};requestAnimationFrame(a)};return(0,o.sV)((()=>{a()})),{tittleBox:t}}};const G=(0,O.A)(U,[["render",z],["__scopeId","data-v-6d5dc60d"]]);var Q=G,Y={name:"App",components:{TittleName:I,TittleRol:D,TittleLema:Q,NavBar:q},data(){return{texts:v}},methods:{changeLanguage(e){this.texts=e?d:v}}};const Z=(0,O.A)(Y,[["render",c]]);var ee=Z;a(5707);(0,n.Ef)(ee).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,s=0;s<n.length;s++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,l=n[0],i=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var c=s(a)}for(t&&t(n);u<l.length;u++)r=l[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunkneonvisions"]=self["webpackChunkneonvisions"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(6980)}));n=a.O(n)})();
//# sourceMappingURL=app.280a7af2.js.map