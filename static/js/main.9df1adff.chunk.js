(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f0726326.svg"},function(e,t,a){e.exports=a.p+"static/media/me-green.337fc279.jpg"},function(e,t,a){e.exports=a.p+"static/media/white-line.cad37df1.png"},,,,function(e,t,a){e.exports=a(64)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(23),a(9)),o=a(10),s=a(16),m=a(11),u=a(17),d=a(67);a(25);function p(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}var f=a(12),E=a.n(f);a(27);function h(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:E.a,alt:"logo"}))),r.a.createElement("div",null,r.a.createElement(p,{click:e.drawerClickHandler}))))}a(29);function v(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-icons"},r.a.createElement("a",{href:"https://github.com/alexandra-pascal?tab=repositories",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandra-pascal-7354b4127/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{href:"https://www.behance.net/alexandrap6ffd",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fa fa-behance"}))),r.a.createElement("p",null,"\xa9Handcrafted by me | All rights reserved"))}var g=a(65);a(31);function b(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.a,{to:"/skills"},"Skills")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/contact"},"Contact"))))}a(35);function w(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}var N=a(66),k=a(13),x=a.n(k),_=a(14),O=a.n(_);a(37);function C(){return r.a.createElement("div",{className:"wrap-white-line"},r.a.createElement("img",{src:O.a,alt:"decorative line"}))}a(39);function D(e){return r.a.createElement(g.a,{to:"/portfolio"},r.a.createElement("button",{className:"button"},e.buttonText))}a(41);function H(){return r.a.createElement("div",{className:"picture-section-wrap"},r.a.createElement("img",{src:x.a,alt:"Alexandra Pascal"}),r.a.createElement("div",{className:"wrap-hello"},r.a.createElement("p",{className:"hello"},"Hello"),r.a.createElement(C,null),r.a.createElement("p",{className:"hello-subtitle"},"I'm Alex. Nice to meet you"),r.a.createElement(D,{buttonText:"See my work"})))}a(43);function y(){return r.a.createElement("div",{className:"vertical-line"})}a(45);function j(){return r.a.createElement("div",{className:"description-section-wrap"},r.a.createElement("p",{className:"description-title"},"Front-end developer"),r.a.createElement("p",{className:"description-text"},"Java Script, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat. Duis aute irure dolor."," "),r.a.createElement("p",{className:"description-text"},"Orem ipsum dolor sit amet, consectetur adipisicing elit tempor incididunt ut."," "))}a(47);function A(){return r.a.createElement("div",{className:"home-wrap"},r.a.createElement(H,null),r.a.createElement(y,null),r.a.createElement(j,null))}a(49);function S(){return r.a.createElement("div",null,"this is skills")}a(51);function q(){return r.a.createElement("div",null,"this is Languages")}a(53);function P(){return r.a.createElement("div",null,"this is Portfolio")}a(55);function T(){return r.a.createElement("div",null,"this is Portfolio page")}a(57);function J(){return r.a.createElement("div",null,"this is Contact")}function I(){return r.a.createElement("div",null,r.a.createElement(N.a,{exact:!0,path:"/",component:A}),r.a.createElement(N.a,{path:"/skills",component:S}),r.a.createElement(N.a,{path:"/languages",component:q}),r.a.createElement(N.a,{path:"/portfolio",component:P}),r.a.createElement(N.a,{path:"/portfolio-page",component:T}),r.a.createElement(N.a,{path:"/contact",component:J}))}a(60);var B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.backDropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(w,{click:this.backDropClickHandler})),r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(b,{show:this.state.sideDrawerOpen}),e,r.a.createElement("main",{className:"main"},r.a.createElement(I,null)),r.a.createElement(v,null)))}}]),t}(r.a.Component);a(62);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[18,2,1]]]);
//# sourceMappingURL=main.9df1adff.chunk.js.map