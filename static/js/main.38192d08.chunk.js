(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f0726326.svg"},function(e,t,a){e.exports=a.p+"static/media/me-green.337fc279.jpg"},function(e,t,a){e.exports=a.p+"static/media/white-line.cad37df1.png"},,,,function(e,t,a){e.exports=a(64)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=(a(23),a(9)),o=a(10),s=a(16),m=a(11),u=a(17),d=a(67);a(25);function p(e){return l.a.createElement("button",{className:"toggle-button",onClick:e.click},l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}))}var f=a(12),E=a.n(f);a(27);function h(e){return l.a.createElement("header",{className:"toolbar"},l.a.createElement("nav",{className:"toolbar__navigation"},l.a.createElement("div",{className:"toolbar__logo"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:E.a,alt:"logo"}))),l.a.createElement("div",null,l.a.createElement(p,{click:e.drawerClickHandler}))))}a(29);function v(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-icons"},l.a.createElement("a",{href:"https://github.com/alexandra-pascal?tab=repositories",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/alexandra-pascal-7354b4127/",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"https://www.behance.net/alexandrap6ffd",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fa fa-behance"}))),l.a.createElement("p",null,"\xa9Handcrafted by me | All rights reserved"))}var g=a(65);a(31);function b(e){var t="side-drawer";return e.show&&(t="side-drawer open"),l.a.createElement("nav",{className:t},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.a,{to:"/skills",className:"menu-link"},"Skills")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/portfolio",className:"menu-link"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/contact",className:"menu-link"},"Contact"))))}a(35);function w(e){return l.a.createElement("div",{className:"backdrop",onClick:e.click})}var N=a(66),k=a(13),x=a.n(k),_=a(14),O=a.n(_);a(37);function C(){return l.a.createElement("div",{className:"wrap-white-line"},l.a.createElement("img",{src:O.a,alt:"decorative line"}))}a(39);function D(e){return l.a.createElement(g.a,{to:"/portfolio"},l.a.createElement("button",{className:"button"},e.buttonText),";")}a(41);function H(){return l.a.createElement("div",{className:"picture-section-wrap"},l.a.createElement("img",{src:x.a,alt:"Alexandra Pascal"}),l.a.createElement("div",{className:"wrap-hello"},l.a.createElement("p",{className:"hello"},"Hello"),l.a.createElement(C,null),l.a.createElement("p",{className:"hello-subtitle"},"I'm Alex. Nice to meet you"),l.a.createElement(D,{buttonText:"See my work"})))}a(43);function y(){return l.a.createElement("div",{className:"vertical-line"})}a(45);function j(){return l.a.createElement("div",{className:"description-section-wrap"},l.a.createElement("p",{className:"description-title"},"Front-end developer"),l.a.createElement("p",{className:"description-text"},"Java Script, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat. Duis aute irure dolor."," "),l.a.createElement("p",{className:"description-text"},"Orem ipsum dolor sit amet, consectetur adipisicing elit tempor incididunt ut."," "))}a(47);function A(){return l.a.createElement("div",{className:"home-wrap"},l.a.createElement(H,null),l.a.createElement(y,null),l.a.createElement(j,null))}a(49);function S(){return l.a.createElement("div",null,"this is skills")}a(51);function q(){return l.a.createElement("div",null,"this is Languages")}a(53);function P(){return l.a.createElement("div",null,"this is Portfolio")}a(55);function T(){return l.a.createElement("div",null,"this is Portfolio page")}a(57);function J(){return l.a.createElement("div",null,"this is Contact")}function I(){return l.a.createElement("div",null,l.a.createElement(N.a,{exact:!0,path:"/",component:A}),l.a.createElement(N.a,{path:"/skills",component:S}),l.a.createElement(N.a,{path:"/languages",component:q}),l.a.createElement(N.a,{path:"/portfolio",component:P}),l.a.createElement(N.a,{path:"/portfolio-page",component:T}),l.a.createElement(N.a,{path:"/contact",component:J}))}a(60);var B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.backDropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=l.a.createElement(w,{click:this.backDropClickHandler})),l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h,{drawerClickHandler:this.drawerToggleClickHandler}),l.a.createElement(b,{show:this.state.sideDrawerOpen}),e,l.a.createElement("main",{className:"main"},l.a.createElement(I,null)),l.a.createElement(v,null)))}}]),t}(l.a.Component);a(62);c.a.render(l.a.createElement(B,null),document.getElementById("root"))}],[[18,2,1]]]);
//# sourceMappingURL=main.38192d08.chunk.js.map