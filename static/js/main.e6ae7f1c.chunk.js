(this["webpackJsonpperception-box"]=this["webpackJsonpperception-box"]||[]).push([[0],{100:function(e,t,a){},119:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a(10),s=a.n(c),i=a(33),o=a(51),u=a(17),l=a(14),j=a(47),b="SET_CHARACTERS",d="SET_CURRENT_CHARACTER",h="SET_CHARACTERS_FROM_FIELD",f="UPDATE_CHARACTERS",O="SET_HOMEWORLD",p={characters:[],currentCharacter:{},authUser:!1,charactersFromField:[],homeworld:{}};function m(e,t){var a=e.findIndex((function(e){return e.id===t})),r=e[a];return[].concat(Object(j.a)(e.slice(0,a)),[Object(l.a)(Object(l.a)({},r),{},{liked:!r.liked})],Object(j.a)(e.slice(a+1)))}var x=a(18),v=a(13),_=a(172);a(100);function g(){return Object(r.jsx)(_.a,{className:"loader",disableShrink:!0})}var N=a(52),y=a(77),C=a.n(y);var S=a(25),w=a.n(S),k=a(42),F=a(35),I=a.n(F),E="https://swapi.dev/api";function T(){return(T=Object(k.a)(w.a.mark((function e(){var t,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(E,"/people/"));case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.next=8,a.results;case 8:return r=e.sent,console.log(r),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(k.a)(w.a.mark((function e(t,a){var r,n,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=I.a.CancelToken,e.next=3,I.a.get("".concat(E,"/people/?search=").concat(t),{cancelToken:new r(a)});case 3:return n=e.sent,c=n.data,s=c.results,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(k.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(E,"/people/").concat(t));case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(k.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(t));case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r.name);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(k.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(t));case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r.title);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=a(176),J=a(56),D=a(4),M=a(177),z=a(178),B=a(179),U=a(184),q=a(180),G=a(57),W=a(78),K=a.n(W),Q=(a(119),Object(H.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{fontSize:18,transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:J.a[500],height:60,width:60,fontSize:30}}})));function V(e){var t=e.character,a=e.onFavorite,c=Q(),s=Object(v.g)(),i=Object(u.c)((function(e){return e.homeworld})),o=Object(u.b)(),l=t.name,j=t.id,b=t.liked,d=t.gender,h=t.homeworld;return Object(n.useEffect)((function(){(function(e){return L.apply(this,arguments)})(h).then((function(e){return o(function(e){return{type:O,payload:e}}(Object(N.a)({},j,e)))}))}),[t,o,h,j]),Object(r.jsxs)(M.a,{className:"card",children:[Object(r.jsx)(z.a,{className:"card__header",avatar:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U.a,{"aria-label":"recipe",className:c.avatar,children:l&&l[0]}),Object(r.jsxs)(G.a,{className:"card__name",variant:"body2",component:"span",children:[Object(r.jsx)("br",{}),l,Object(r.jsx)("br",{})," From: ",i[j],Object(r.jsx)("br",{})," Gender: ",d]})]})}),Object(r.jsxs)(B.a,{className:"card__footer",disableSpacing:!0,children:[Object(r.jsx)(q.a,{"aria-label":"add to favorites",onClick:function(){return a(j)},children:Object(r.jsx)(K.a,{className:C()("card__favorite",{card__liked:b})})}),Object(r.jsx)(q.a,{className:Object(D.a)(c.expand),onClick:function(){s.push("/characters/".concat(j))},children:"More"})]})]})}function X(e){var t=e.onFavorite,a=Object(u.c)((function(e){return e.characters})).filter((function(e){return e.liked}));return Object(r.jsxs)(r.Fragment,{children:[0!==a.length&&Object(r.jsx)("h1",{children:"Liked characters"}),Object(r.jsx)("div",{className:"listCharacter",children:a.map((function(e){return Object(r.jsx)(V,{className:"listCharacter__character",character:e,onFavorite:t},e.id)}))})]})}a(125);function Y(e){var t=e.onFavorite,a=Object(u.c)((function(e){return e.characters}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"listCharacter",children:a.map((function(e){return Object(r.jsx)(V,{className:"listCharacter__character",character:e,onFavorite:t},e.id)}))}),Object(r.jsx)(X,{onFavorite:t})]})}var Z=a(182),$=a(183);function ee(e){var t=localStorage.getItem("favorites"),a=t?JSON.parse(t):[];return e.map((function(e){var t=e.url.split("/").slice(-2,-1)[0];return Object(l.a)(Object(l.a)({},e),{},{liked:a.includes(t),id:t})}))}a(126);function te(){var e=Object(u.c)((function(e){return e.charactersFromField})),t=Object(u.b)(),a=Object(v.g)(),c=Object(n.useState)(!1),s=Object(x.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)(""),O=Object(x.a)(d,2),p=O[0],m=O[1],_=function(e,t){var a=Object(n.useState)(e),r=Object(x.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c}(p,500);Object(n.useEffect)((function(){o(!0),function(){return T.apply(this,arguments)}().then((function(e){var a=ee(e);t(function(e){return{type:b,payload:e}}(a)),o(!1)}))}),[t]),Object(n.useEffect)((function(){var e;return _&&function(e,t){return R.apply(this,arguments)}(_,(function(t){e=t})).then((function(e){var a=ee(e);t(function(e){return{type:h,payload:e}}(a))})),function(){e&&e()}}),[_]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)($.a,{className:"app__autocomplete",options:e||[],getOptionLabel:function(e){return e.name},renderOption:function(e){return Object(r.jsx)("div",{style:{width:"100%"},onClick:function(){return function(e){var t=e.id;a.push("/characters/".concat(t))}(e)},children:e.name})},renderInput:function(e){return Object(r.jsx)(Z.a,Object(l.a)(Object(l.a)({},e),{},{className:"app__field",label:"Searching",variant:"outlined",value:p,onChange:function(e){var t=e.target;return m(t.value)}}))}}),i?Object(r.jsx)(g,{}):Object(r.jsx)(Y,{onFavorite:function(e){!function(e){var t,a=localStorage.getItem("favorites"),r=a?JSON.parse(a):[];t=r.includes(e)?r.filter((function(t){return t!==e})):[].concat(Object(j.a)(r),[e]),localStorage.setItem("favorites",JSON.stringify(t))}(e),t(function(e){return{type:f,id:e}}(e))}})]})}a(127);function ae(){var e=Object(v.h)().characterId,t=Object(u.c)((function(e){return e.currentCharacter})),a=Object(u.c)((function(e){return e.homeworld})),c=Object(u.b)(),s=Object(n.useState)(!1),i=Object(x.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)([]),b=Object(x.a)(j,2),h=b[0],f=b[1],O=Object.keys(t).length&&t.url.split("/").slice(-2,-1)[0],p=t.name,m=t.height,_=t.mass,N=t.hair_color,y=t.skin_color,C=t.eye_color,S=t.birth_year,w=t.gender,k=t.films;return Object(n.useEffect)((function(){l(!0),function(e){return A.apply(this,arguments)}(e).then((function(e){c(function(e){return{type:d,payload:e}}(e)),l(!1)}))}),[e]),Object(n.useEffect)((function(){var e=(k||[]).map((function(e){return function(e){return P.apply(this,arguments)}(e)}));Promise.all(e).then((function(e){return f(e)}))}),[t]),Object(r.jsx)(r.Fragment,{children:o?Object(r.jsx)(g,{}):Object(r.jsx)("div",{className:"characterInfo",children:Object(r.jsxs)("div",{className:"characterInfo__wrapper",children:[Object(r.jsx)("h2",{className:"characterInfo__name",children:p}),Object(r.jsxs)("ul",{className:"characterInfo__parametrs",children:[Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Height: ",m]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Mass: ",_]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Hair color: ",N]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Skin color: ",y]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Eye color: ",C]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Birth year: ",S]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Gender: ",w]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Homeworld: ",a[O]]}),Object(r.jsxs)("li",{className:"characterInfo__parametr",children:["Films: ",h.join(", ")]})]})]})})})}a(128);function re(e){var t=e.children;return Object(r.jsx)("div",{className:"modal active",children:Object(r.jsx)("div",{className:"modal__content active",children:t})})}var ne=a(80),ce=a.n(ne);a(129);function se(e){var t=e.onRigist,a=e.onPageCharacters,n=Object(v.g)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ce.a,{appId:"203258351346646",autoLoad:!1,fields:"name,email",onClick:function(){return t(!1)},callback:function(e){return function(e){"unknown"!==e.status?(n.push("/"),a(!0)):t(!0)}(e)}})})}a(130);function ie(e){var t=e.onRigist,a=e.onPageCharacters,c=Object(n.useState)(""),s=Object(x.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(""),l=Object(x.a)(u,2),j=l[0],b=l[1];return Object(r.jsxs)("form",{className:"form",children:[Object(r.jsxs)("div",{className:"form__authorization",children:[Object(r.jsx)("div",{className:"form__login",children:Object(r.jsx)("input",{className:"form__input",type:"email",placeholder:"Login",value:i,onChange:function(e){var t=e.target;return o(t.value)},required:!0})}),Object(r.jsx)("div",{className:"form__password",children:Object(r.jsx)("input",{className:"form__input",type:"password",placeholder:"Password",value:j,onChange:function(e){var t=e.target;return b(t.value)},required:!0})})]}),Object(r.jsxs)("div",{className:"form__buttons",children:[Object(r.jsx)("div",{className:"form__button",children:Object(r.jsx)("button",{className:"form__sign-in",type:"sumbit",children:"Sign in"})}),Object(r.jsx)(se,{onRigist:t,onPageCharacters:a})]})]})}a(131);var oe=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(x.a)(s,2),o=i[0],u=i[1],l=Object(v.g)();return a&&l.push("/"),Object(r.jsx)("div",{className:"app",children:o?Object(r.jsxs)(v.d,{children:[Object(r.jsx)(v.b,{path:"/",exact:!0,children:Object(r.jsx)(v.a,{to:"/characters/"})}),Object(r.jsx)(v.b,{path:"/characters/",component:te,exact:!0}),Object(r.jsx)(v.b,{path:"/characters/:characterId",component:ae})]}):a&&Object(r.jsxs)(re,{children:[" ",Object(r.jsx)(ie,{onRigist:c,onPageCharacters:u})]})})},ue=(a(132),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,186)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))}),le=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{characters:t.payload});case h:return Object(l.a)(Object(l.a)({},e),{},{charactersFromField:t.payload});case d:return Object(l.a)(Object(l.a)({},e),{},{currentCharacter:t.payload});case f:return Object(l.a)(Object(l.a)({},e),{},{characters:m(e.characters,t.id)});case O:return Object(l.a)(Object(l.a)({},e),{},{homeworld:Object(l.a)(Object(l.a)({},e.homeworld),t.payload)});default:return e}}));s.a.render(Object(r.jsx)(i.a,{children:Object(r.jsx)(u.a,{store:le,children:Object(r.jsx)(oe,{})})}),document.getElementById("root")),ue()}},[[133,1,2]]]);
//# sourceMappingURL=main.e6ae7f1c.chunk.js.map