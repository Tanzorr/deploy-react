(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[3],{101:function(n,t,e){},102:function(n,t,e){},103:function(n,t,e){},106:function(n,t,e){"use strict";e.r(t);var c=e(0),a=e.n(c),i=e(27),r=e(15),o=e(18),u=e(13),l=function(n){return n.shop},m=Object(u.a)([l],(function(n){return n.collections})),s=Object(u.a)([m],(function(n){return n?Object.keys(n).map((function(t){return n[t]})):[]})),b=Object(u.a)([l],(function(n){return n.isFetching})),d=Object(u.a)([l],(function(n){return!!n.collections})),f=e(39),p=e(56),h=function(n){return function(t){var e=t.isLoading,c=Object(f.a)(t,["isLoading"]);return e?a.a.createElement(p.a,null):a.a.createElement(n,c)}},v=e(36),j=e(34),O=e(10),g=e(11),E=e(25);function w(){var n=Object(O.a)(["\n     width: 10%;\n"]);return w=function(){return n},n}function x(){var n=Object(O.a)(["\n     width: 90%;\n      margin-bottom: 15px;\n"]);return x=function(){return n},n}function y(){var n=Object(O.a)(["\n    width: 100%;\n    height: 5%;\n    display: flex;\n    justify-content: space-between;\n    font-size: 18px;\n\n   \n\n    .price {\n      \n    }\n"]);return y=function(){return n},n}function k(){var n=Object(O.a)(["\n        width: 100%;\n        height: 95%;\n        background-size: cover;\n        background-position: center;\n        margin-bottom: 5px;\n        background-image:","\n"]);return k=function(){return n},n}function N(){var n=Object(O.a)(["\n       width: 80%;\n        opacity: 0.7;\n        position: absolute;\n        top:255px;\n        left: 10%;\n        display: none;\n         @media screen and(max-width:800px){\n           display: block;\n            opacity:0.9;\n            min-width:unset;\n            padding:0,10px;\n         }\n"]);return N=function(){return n},n}function I(){var n=Object(O.a)(["\n    width: 22vw;\n      display: flex;\n      flex-direction: column;\n      height: 350px;\n      align-items: center;\n      min-width: 255px;\n      margin-bottom: 20px;\n      position: relative;\n      margin-right:20px;\n\n     &:hover{\n    .image{\n      opacity: 0.8;\n    }\n\n    button{\n      opacity: 0.85;\n      display: flex;\n    }\n    \n    @media screen and(max-width:800px){\n        width:40vw;\n         &:hover{\n    .image{\n      opacity:unset;\n    }\n\n    button{\n      opacity: unset;\n      \n    }\n    }\n\n  }\n"]);return I=function(){return n},n}var C=g.c.div(I()),L=Object(g.c)(E.a)(N()),U=g.c.div(k(),(function(n){var t=n.imageUrl;return"url".concat(t)})),z=g.c.div(y()),J=g.c.span(x()),S=g.c.span(w()),A=Object(r.b)(null,(function(n){return{addItem:function(t){return n(Object(j.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,c=t.name,i=t.price,r=t.imageUrl;return a.a.createElement(C,null,a.a.createElement(U,{style:{backgroundImage:"url(".concat(r,")")}}),a.a.createElement(z,null,a.a.createElement(J,null,c),a.a.createElement(S,null,i)),a.a.createElement(L,Object(v.a)({inverted:!0,onClick:function(){return e(t)}},"inverted",!0),"Add to cart"))})),F=(e(101),Object(r.b)((function(n,t){return{collection:(e=t.match.params.collectionId,Object(u.a)([m],(function(n){return n?n[e]:null})))(n)};var e}))((function(n){var t=n.collection,e=t.title,c=t.items;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},e),a.a.createElement("div",{className:"items"},c.map((function(n){return a.a.createElement(A,{key:n.id,item:n})}))))}))),q=Object(u.b)({isLoading:function(n){return!d(n)}}),B=Object(o.d)(Object(r.b)(q),h)(F),D=e(47),G=(e(102),e(103),function(n){var t=n.title,e=n.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t.toUpperCase()),a.a.createElement("div",{className:"preview"},e.filter((function(n,t){return t<4})).map((function(n){return a.a.createElement(A,{key:n.id,item:n})}))))}),H=Object(u.b)({collections:s}),K=Object(r.b)(H)((function(n){var t=n.collections;return a.a.createElement("div",{className:" collections-overview "},t.map((function(n){var t=n.id,e=Object(f.a)(n,["id"]);return a.a.createElement(G,Object.assign({key:t},e))})))})),M=Object(u.b)({isLoading:b}),P=Object(o.d)(Object(r.b)(M),h)(K);t.default=Object(r.b)(null,(function(n){return{fetchCollectionsStart:function(){return n(Object(D.b)())}}}))((function(n){var t=n.fetchCollectionsStart,e=n.match;return Object(c.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"shop-page"},a.a.createElement(i.b,{exact:!0,path:"".concat(e.path),component:P}),a.a.createElement(i.b,{path:"".concat(e.path,"/:collectionId"),component:B}))}))}}]);
//# sourceMappingURL=3.17387065.chunk.js.map