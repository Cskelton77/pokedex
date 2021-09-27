(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(7),c=n.n(s),i=(n(19),n(2)),o=n.n(i),u=n(3),l=n(4),j=n(6),d="https://pokeapi.co/api/v2",p=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/pokemon/").concat(t.toLowerCase()));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/pokemon-species/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(14),m={history:[]};var f="ADD_HISTORY_ENTRY",v=function(e){return{type:f,payload:e}},x=(n(27),n(0)),O=function(e){var t=e.setSearch,n=e.handleSearch;return Object(x.jsxs)("div",{className:"data-entry",children:[Object(x.jsx)("input",{placeholder:"Search for Pokemon",autoFocus:!0,type:"text",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&n()},className:"pokedex-input"}),Object(x.jsx)("button",{onClick:function(){return n()}})]})},N=(n(29),function(e){var t=e.history,n=e.handleSearch;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"history-title",children:"Recent Successful Identifications"}),Object(x.jsxs)("div",{className:"history-box",children:[t&&t.length>0&&t.map((function(e){return Object(x.jsx)("button",{onClick:function(){return n(e)},children:e},e)})),t&&0===t.length&&Object(x.jsx)("span",{className:"no-history",children:"No recent identifications"})]})]})}),y=(n(30),function(e){var t=e.pkmnData,n=e.speciesData,a=e.types,r=e.moves,s=e.abilities;return Object(x.jsxs)("div",{className:"display",children:[Object(x.jsx)(g,{}),Object(x.jsxs)("div",{className:"display-inner",children:[Object(x.jsx)("span",{className:"poke-name",children:null===t||void 0===t?void 0:t.name}),Object(x.jsxs)("span",{className:"poke-type",children:[n&&"Type: ",t&&(null===a||void 0===a?void 0:a.join(", "))]}),Object(x.jsx)("img",{src:null===t||void 0===t?void 0:t.sprites.front_default,alt:null===t||void 0===t?void 0:t.name}),Object(x.jsxs)("div",{className:"panels",children:[Object(x.jsxs)("div",{className:"left-panel",children:[n&&"Color:"," ",null===n||void 0===n?void 0:n.color.name,Object(x.jsx)("br",{}),n&&"Multiple genders:"," ",null===n||void 0===n?void 0:n.has_gender_differences.toString(),Object(x.jsx)("br",{}),n&&"No. of varieties: ".concat(null===n||void 0===n?void 0:n.varieties.length),Object(x.jsx)("br",{}),t&&"Abilities: ",s&&s.join(", ")]}),Object(x.jsx)("div",{className:"right-panel",children:r&&Object(x.jsxs)(x.Fragment,{children:["Moves:",Object(x.jsx)("div",{className:"move-box",children:r&&r.map((function(e){return Object(x.jsx)("li",{children:e},e)}))})]})})]})]}),Object(x.jsx)(w,{})]})}),g=function(){return Object(x.jsxs)("div",{className:"top-decorations",children:[Object(x.jsx)("div",{className:"red-light small-button"}),Object(x.jsx)("div",{className:"red-light small-button"})]})},w=function(){return Object(x.jsxs)("div",{className:"bottom-decorations",children:[Object(x.jsx)("div",{className:"redlight small-button"}),Object(x.jsxs)("div",{className:"voicebars",children:[Object(x.jsx)("span",{className:"line"}),Object(x.jsx)("span",{className:"line"}),Object(x.jsx)("span",{className:"line"}),Object(x.jsx)("span",{className:"line"})]})]})},k=(n(31),function(e){var t=e.name,n=e.evolutionChain,a=e.locationAreas,r=e.handleSearch,s=window.innerWidth;return Object(x.jsxs)(x.Fragment,{children:[(s>768||t)&&Object(x.jsx)("div",{className:"secondary-display",children:Object(x.jsxs)("div",{className:"secondary-display--inner",children:[n&&n.length>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"title",children:"Evolutionary Chain"}),Object(x.jsx)("div",{className:"evolution-chain",children:n.map((function(e){return Object(x.jsxs)("span",{className:"pkmn",tabIndex:0,onClick:function(){return r(e.name)},onKeyUp:function(t){return"Enter"===t.key&&r(e.name)},children:[Object(x.jsx)("img",{src:e.image,alt:e.name}),Object(x.jsx)("span",{className:"pokeName",children:e.name})]},e.name)}))})]}),Object(x.jsxs)("div",{className:"locations",children:[a&&Object(x.jsxs)("span",{className:"location-title",children:[Object(x.jsx)("span",{className:"pokemon-name",children:t})," can be found in the following areas: "]}),Object(x.jsxs)("span",{className:"location-list",children:[a&&a.length>0&&a.map((function(e){return Object(x.jsx)("li",{children:e},e)})),a&&0===a.length&&"Unable to locate this pokemon on the map"]})]})]})}),s>768&&Object(x.jsxs)("span",{className:"screen-decoration",children:[Object(x.jsx)("div",{className:"bar"}),Object(x.jsx)("div",{className:"bar"})]})]})}),S=(n(32),function(){var e=Object(j.c)((function(e){return e.history})).history,t=Object(j.b)(),n=window.innerWidth,r=Object(a.useState)(""),s=Object(l.a)(r,2),c=s[0],i=s[1],d=Object(a.useState)(),h=Object(l.a)(d,2),m=h[0],f=h[1],g=Object(a.useState)(),w=Object(l.a)(g,2),S=w[0],D=w[1],E=Object(a.useState)(),A=Object(l.a)(E,2),F=A[0],I=A[1],P=Object(a.useState)(),L=Object(l.a)(P,2),M=L[0],R=L[1],T=Object(a.useState)(),J=Object(l.a)(T,2),K=J[0],U=J[1],W=Object(a.useState)(),Y=Object(l.a)(W,2),B=Y[0],H=Y[1],q=Object(a.useState)(),z=Object(l.a)(q,2),G=z[0],Q=z[1],V=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.ability.url);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,a=n.names.filter((function(e){return"en"===e.language.name})),e.abrupt("return",a[0].name);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,H(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.move.url);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,a=n.names.filter((function(e){return"en"===e.language.name})),e.abrupt("return",a[0].name);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,U(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:n=e.sent,a=n.map((function(e){return e.location_area.name.split("-").join(" ")})),Q(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,a=n.names.filter((function(e){return"en"===e.language.name})),e.next=8,p(a[0].name);case 8:return r=e.sent,e.abrupt("return",{name:a[0].name,image:r.sprites.front_default});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,I(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){m&&(b(m.id).then((function(e){return D(e)})),R(m.types.map((function(e){return e.type.name}))),X(m.moves),V(m.abilities),Z(m.location_area_encounters))}),[m]),Object(a.useEffect)((function(){var e=[],t=function t(n){e.push(n.species),n.evolves_to.length>0&&t(n.evolves_to[0])};S&&$(S.evolution_chain.url).then((function(e){return t(e.chain)})).then((function(){return ee(e)}))}),[S]);var te=function(){var e=Object(u.a)(o.a.mark((function e(){var n,a,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.length>0&&void 0!==r[0]?r[0]:c)){e.next=7;break}return e.next=4,p(n);case 4:a=e.sent,f(a),t(v(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"pokedex",children:[Object(x.jsxs)("div",{className:"left-page",children:[Object(x.jsx)(_,{}),n<=768&&Object(x.jsx)(O,{setSearch:i,handleSearch:te}),Object(x.jsx)(y,{pkmnData:m,speciesData:S,types:M,moves:K,abilities:B}),n>768&&Object(x.jsx)(C,{})]}),Object(x.jsxs)("div",{className:"right-page",children:[Object(x.jsx)(k,{name:null===m||void 0===m?void 0:m.name,evolutionChain:F,locationAreas:G,handleSearch:te}),n>768&&Object(x.jsx)(O,{setSearch:i,handleSearch:te}),Object(x.jsx)(N,{history:e,handleSearch:te})]})]})})}),_=function(){return Object(x.jsxs)("div",{className:"left-panel--top-decoration",children:[Object(x.jsx)("div",{className:"blue-light"}),Object(x.jsx)("div",{className:"red-light small-button"}),Object(x.jsx)("div",{className:"yellow-light small-button"}),Object(x.jsx)("div",{className:"green-light small-button"})]})},C=function(){return Object(x.jsxs)("div",{className:"left-panel--bottom-decoration",children:[Object(x.jsx)("div",{className:"bar red-bar"}),Object(x.jsx)("div",{className:"bar blue-bar"})]})},D=n(13),E=n(12),A=Object(D.a)({reducer:{history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n=e.history,a=t.payload.toLowerCase();return n.includes(a)||n.unshift(a),{history:Object(h.a)(n)};default:return e}}},middleware:[Object(E.createLogger)()]});c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(j.a,{store:A,children:Object(x.jsx)(S,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3d8a72bd.chunk.js.map