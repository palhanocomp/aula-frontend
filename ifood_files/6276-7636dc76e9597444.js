
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7cd8dbd1-2c67-5a0c-b69d-580d82eed47a")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6276,9194,2598],{4306:function(e,i,n){var t={"./es-CO/footer.js":7154,"./pt-BR/footer.js":60602};function a(e){var i=r(e);return n(i)}function r(e){if(!n.o(t,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=r,e.exports=a,a.id=4306},49194:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return R}});var t=n(85893),a=n(67294),r=n(45697),s=n.n(r),o=n(32790),l=n(4306)("./".concat(o.LOCALE,"/footer.js")),c=(l.CITIES,l.ABOUT_LINKS),u=l.default,d=n(14416),h=n(26793),m=n(75463),f=n(59387),g=n(59810),_=n(63249),p=function(e){return e.sections.map((function(e){return(0,t.jsxs)("div",{className:"footer__column",children:[(0,t.jsx)("h3",{className:"footer__subtitle",children:e.title}),(0,t.jsx)("ul",{className:"footer__links-list",children:e.links.map((function(e){return(0,t.jsx)("li",{className:"footer__list-item",children:e.link.includes("https")?(0,t.jsx)("a",{href:e.link,target:"_blank",className:"footer__text-link",title:e.label,rel:"noopener noreferrer",children:e.label}):(0,t.jsx)(m.Link,{to:e.link,children:(0,t.jsx)("a",{target:"_blank",className:"footer__text-link",title:e.label,rel:"noopener noreferrer",children:e.label})})},e.label)}))})]},e.title)}))},b=function(e){var i=e.social,n=(0,h.$)("footer").t;return(0,t.jsxs)("div",{className:"footer__column footer__column--social",children:[(0,t.jsx)("h3",{className:"footer__subtitle",children:n("social.title")}),(0,t.jsx)("ul",{className:"footer__social",children:i.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(f.zx,{icon:e.icon,variant:"footer__social-icon btn-icon btn-icon--transparent",theme:"transparent",route:e.link,ariaLabel:e.title,title:e.title,target:"_blank",rel:"noopener",children:(0,t.jsx)("span",{className:"footer__social-title",children:e.title})})},e.icon)}))})]})},x=function(e){var i=e.copyright,n=e.terms,a=e.companyInformations,r=(0,d.v9)(_.us),s=(0,h.$)("footer").t;return(0,t.jsxs)("section",{className:"footer__section footer__section--copyright",children:[(0,t.jsxs)("div",{className:"footer__copyright-text",children:[(0,t.jsx)(m.Link,{to:r,children:(0,t.jsxs)("a",{title:s("back-to-home"),children:[(0,t.jsx)(f.JO,{name:g.ZC}),(0,t.jsx)("span",{className:"footer__home-link",children:s("back-to-home")})]})}),(0,t.jsx)("p",{className:"footer__company-copyright",children:i}),(0,t.jsx)("p",{className:"footer__company-informations",children:a})]}),(0,t.jsx)("div",{className:"footer__terms-links",children:(0,t.jsx)("ul",{children:n.map((function(e){return(0,t.jsx)("li",{children:e.link.includes("https")?(0,t.jsx)("a",{href:e.link,target:"_blank",className:"footer__text-link",title:e.label,rel:"noopener noreferrer",children:e.label}):(0,t.jsx)(m.Link,{to:e.link,children:(0,t.jsx)("a",{target:"_blank",title:e.label,className:"footer__text-link",children:e.label})},e.label)},e.label)}))})})]})},k=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("section",{className:"footer__section footer__section--about",children:[(0,t.jsx)(p,{sections:c.sections}),(0,t.jsx)(b,{social:c.social})]}),(0,t.jsx)(x,{copyright:c.copyright,terms:c.terms,companyInformations:c.companyInformations})]})},j={items:s().arrayOf(s().shape({label:s().string.isRequired,onClick:s().func.isRequired})).isRequired},v=function(e){var i=e.items,n=Math.ceil(i.length/4);return(0,t.jsx)("section",{className:"footer__section footer__section--aditional-items",children:new Array(4).fill().map((function(e,a){var r=n*a,s=r+n,o=i.slice(r,s);return(0,t.jsx)("div",{className:"footer__column",children:(0,t.jsx)("ul",{className:"footer__links-list",children:o.map((function(e){return(0,t.jsx)("li",{className:"footer__list-item",children:(0,t.jsx)("a",{target:"_blank",className:"footer__text-link",title:e.label,rel:"noopener noreferrer",onClick:e.onClick,children:e.label})},e.label)}))})},"aditional-item-column-".concat(a))}))})};v.propTypes=j;var y=v,S=(n(97885),{show:s().object,cities:s().array,landingPage:s().bool,aditionalItems:s().arrayOf(s().shape({label:s().string.isRequired,onClick:s().func.isRequired}))}),C={show:{cities:!0,about:!0},cities:u.CITIES,landingPage:!1,aditionalItems:[]},N=(0,a.memo)((function(e){var i=e.show.about,n=e.aditionalItems;return(0,t.jsxs)("footer",{className:"desktop-container footer",children:[n.length?(0,t.jsx)(y,{items:n}):null,i&&(0,t.jsx)(k,{})]})}));N.propTypes=S,N.defaultProps=C;var R=N},32598:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return p}});var t=n(85893),a=n(67294),r=n(14416),s=n(26793),o=n(5152),l=n(16670),c=n(75463),u=n(58541),d=n(91710),h=n(60996),m=n(72612),f=n(59446),g=n(38890),_=(n(60143),(0,o.default)((function(){return n.e(7907).then(n.bind(n,47907))}),{loadableGenerated:{webpack:function(){return[47907]}}}));function p(){var e=(0,r.I0)(),i=(0,a.useState)(),n=i[0],o=i[1],p=(0,s.$)("followOrder").t,b=(0,r.v9)(f.ny),x=b.ordersList,k=b.requestStatus;(0,a.useEffect)((function(){0===x.length&&k===m._X&&e((0,d.AU)({withDetails:!1}))}),[e,k,x]);var j=(0,a.useCallback)((function(){h.Z.clickTrackLastOrder()}),[]);return(0,a.useEffect)((function(){if(k===m.jP&&x.length>0){var e=x.find((function(e){return(0,u.j)(e)}));o(e)}}),[k,x]),null!=n&&(0,t.jsx)(_,{children:(0,t.jsx)(c.Link,{route:g.ROUTE_WAITING_TRACKING_PAGE,params:{orderUuid:null===n||void 0===n?void 0:n.id},children:(0,t.jsxs)("a",{onClick:j,"aria-label":p("link-aria-label"),className:"follow-order-card",children:[(0,t.jsx)(l.Z,{className:"follow-order-card__icon-order",name:"follow-order"}),(0,t.jsxs)("div",{className:"follow-order-card__content",children:[(0,t.jsx)("p",{className:"follow-order-card__title",children:p("card-title")}),(0,t.jsx)("p",{className:"follow-order-card__restaurant",children:"".concat(n.merchant.name)})]}),(0,t.jsx)(l.Z,{name:"arrow-down",className:"follow-order-card__icon-arrow"})]})})})}},33690:function(e,i,n){"use strict";var t=n(85893),a=n(67294),r=n(26793),s=n(94184),o=n.n(s),l=n(45697),c=n.n(l),u=n(75463),d=n(60996),h=n(59387),m=n(38890),f=(n(52938),{isHint:c().bool}),g=function(e){var i=e.isHint,n=(0,r.$)("landing").t,s=(0,a.useState)(!0),l=s[0],c=s[1];return l&&(0,t.jsxs)("div",{className:o()("landing-sign-up-voucher",{"landing-sign-up-voucher--hint":i,"landing-sign-up-voucher--card":!i}),children:[(0,t.jsx)(h.JO,{className:"landing-sign-up-voucher__icon",name:"voucher"}),(0,t.jsxs)("div",{className:"landing-sign-up-voucher__texts",children:[(0,t.jsx)("p",{className:"landing-sign-up-voucher__texts__title",children:n("voucher.title")}),(0,t.jsx)("p",{className:"landing-sign-up-voucher__texts__description",children:n("voucher.description")}),(0,t.jsx)(h.zx,{variant:"landing-sign-up-voucher__texts__cta",theme:"link",onClick:_,label:n("voucher.cta")})]}),(0,t.jsx)(h.Ei,{ariaLabel:n("common:close"),variant:"landing-sign-up-voucher__close",transparent:!0,icon:"close",onClick:function(e){e.stopPropagation(),c(!1),d.Z.closeLandingVoucher()}})]})};function _(){d.Z.clickLandingVoucher(),u.Router.pushRoute(m.ROUTE_AUTHENTICATION)}g.propTypes=f,g.defaultProps={isHint:!1},i.Z=g},76732:function(e,i,n){"use strict";n.d(i,{Sx:function(){return ee},u1:function(){return x}});var t=n(85893),a=n(45697),r=n.n(a),s=n(32765),o=n(75463),l=n(38890),c=n(53942),u=n(52668),d=n(18967),h=(n(77261),{highlights:r().arrayOf(r().shape({id:r().string.isRequired,imageUrl:r().string.isRequired})),onClick:r().func,staticContent:r().bool,link:r().string}),m={highlights:[],onClick:void 0,staticContent:!1,link:void 0},f=function(e){var i=e.highlights,n=e.onClick,a=e.staticContent,r=e.link;return(0,t.jsx)("div",{className:"highlights-carousel","data-test-id":"highlights-carousel",children:(0,t.jsx)("div",{className:"highlights-carousel__wrapper",children:(0,t.jsx)(s.Z,{children:i.map((function(e){return(0,t.jsx)(s.q,{children:(0,t.jsx)("div",{className:"highlights-carousel__container",children:(0,t.jsx)(o.Link,{route:r||l.ROUTE_DISCOVERY,params:r?void 0:{slug:(0,c.Z)(e.name),uuid:e.id},children:(0,t.jsx)("a",{onClick:function(){return n(e)},children:(0,t.jsx)("figure",{className:"highlights-carousel__figure",children:(0,t.jsx)("img",{src:a?e.imageUrl:(0,d.QW)(u.el.DISCOVERIES,e.imageUrl,u.zf.HIGHT),alt:e.name,className:"highlights-carousel__image"})})})})})},e.id)}))})})})};f.propTypes=h,f.defaultProps=m;var g=f,_=n(60996),p=n(9339);function b(){_.Z.clickLandingPageHighlights()}var x=function(){return(0,t.jsx)(g,{highlights:p.ud,onClick:b,staticContent:!0,link:l.ROUTE_HOME_MULTICATEGORY})},k=n(67294),j=n(72612),v=(n(97237),n(26793)),y=n(94184),S=n.n(y),C=n(59387);function N(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function R(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(i){N(e,i,n[i])}))}return e}var E={minWidth:80,maxWidth:112,gap:10,slidesToShow:9,displayNextSlide:!1,nextSlidePercentToDisplay:.5,displayControllers:!0,infinite:!0,duration:200,mq:{960:{minWidth:109,maxWidth:143,gap:16,slidesToShow:9,displayNextSlide:!1,nextSlidePercentToDisplay:0}}};function O(e){var i=e.children,n=e.cuisinesLength,a=e.carouselSettings,r=(0,v.$)("home").t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.zP,{max:"tablet",children:(0,t.jsx)(C.y3,{ariaLabel:r("home:cuisines.title-aria"),variant:S()("cuisines-list__container",n>=12?"show-btn-nav":"hide-btn-nav"),children:i})}),(0,t.jsx)(C.zP,{min:"tablet",children:(0,t.jsx)("div",{className:"cuisines-list__slider",children:(0,t.jsx)(C.lr,R({},E,a,{children:i}))})})]})}O.propTypes={children:r().node.isRequired,cuisinesLength:r().number.isRequired,carouselSettings:r().object.isRequired};var T=n(96026),w=n.n(T),P=n(12751),I="HOME_MERCADO",A="HOME_BEBIDAS",U="HOME_FARMACIA",L="HOME_PET",M="MERCADO_EXPRESS",q="MERCADO";function H(e){var i=e.cuisine,n=e.handleClick,a=i.name,r=i.longDescription,s=(0,k.useCallback)((function(){n?n(i):_.Z.viewRestaurantListByCuisine(i.name)}),[i,n]),h=function(e,i){var n=null===e||void 0===e?void 0:e.match(/##(.*?)##/);switch(null===n||void 0===n?void 0:n[1]){case I:case q:return l.ROUTE_HOME_MARKET;case A:return l.ROUTE_HOME_DRINKS;case U:return l.ROUTE_HOME_PHARMACY;case L:return l.ROUTE_HOME_PETSHOP;case M:return l.ROUTE_HOME_EXPRESS;default:return function(e){if(e.toUpperCase()===q)return l.ROUTE_HOME_MARKET;return l.ROUTE_DISCOVERY}(i)}}(r,a),m=(0,k.useMemo)((function(){return function(e,i){var n=null===e||void 0===e?void 0:e.match(/##(.*?)##/);switch(null===n||void 0===n?void 0:n[1]){case I:case q:case A:case U:case L:case M:return{};default:return{slug:(0,c.Z)(i.name),uuid:i.id,asDiscoveryPage:!0}}}(r,i)}),[r,i]);return(0,t.jsx)("div",{tabIndex:"0",className:"cuisine-item",children:(0,t.jsx)(o.Link,{route:h,params:m,children:(0,t.jsxs)("a",{"aria-label":i.name,onClick:s,children:[(0,t.jsx)("figure",{className:"cuisine-item__figure",children:(0,t.jsx)("img",{src:(0,d.QW)(u.el.DISCOVERIES,i.imageUrl,u.zf.LOW),alt:i.name,className:"cuisine-item__image",crossOrigin:"anonymous"})}),(0,t.jsx)("span",{className:"cuisine-item__title",children:i.name})]})})},i.id)}function D(e){var i=e.cuisines,n=e.handleClick;return e.requestStatus===j.br?w()(8).map((function(e){return(0,t.jsx)(P.wf,{},"cuisine-item-placeholder-".concat(e))})):i.map((function(e){return(0,t.jsx)(H,{cuisine:e,handleClick:n},"cuisine-item-".concat(e.id))}))}function F(e){var i=e.cuisines,n=e.requestStatus,a=e.carouselSettings,r=e.handleClick;return(0,t.jsx)("div",{className:"cuisines-list","data-test-id":"cuisines-list",children:(0,t.jsx)(O,{cuisinesLength:i.length,carouselSettings:a,children:D({cuisines:i,handleClick:r,requestStatus:n})})})}H.propTypes={cuisine:r().object.isRequired,handleClick:r().func},H.defaultProps={handleClick:null},D.propTypes={cuisines:r().arrayOf(r().shape({id:r().string.isRequired,name:r().string.isRequired,imageUrl:r().string.isRequired})),handleClick:r().func,requestStatus:r().string},D.defaultProps={cuisines:[],handleClick:null,requestStatus:j._X},F.propTypes={cuisines:r().arrayOf(r().shape({id:r().string.isRequired,name:r().string.isRequired,imageUrl:r().string.isRequired})),requestStatus:r().string,carouselSettings:r().object,handleClick:r().func},F.defaultProps={cuisines:[],requestStatus:j._X,carouselSettings:{},handleClick:null};n(32598),n(79491);var B=n(14416),G=n(17606),Z=n(14622),z=n(57818),W=(n(45297),function(){var e=(0,B.I0)(),i=(0,v.$)("navigation").t,n=(0,k.useState)(!1),a=n[0],r=n[1],s=function(e){e.stopPropagation(),r(!a)};return(0,t.jsxs)("nav",{className:S()("landing-navbar-wrapper",{"landing-navbar-wrapper--open":a}),children:[(0,t.jsx)(C.Ei,{ariaLabel:i("landing:links.menu"),variant:"landing-navbar-wrapper__button",transparent:!0,color:"gray",icon:"menu",onClick:s}),(0,t.jsxs)("div",{className:S()("landing-navbar",{"landing-navbar--open":a}),children:[(0,t.jsx)(C.H2,{color:"primary"}),p.k8.map((function(n){var a=n.label,r=n.route,s=n.signIn,o=n.crossOrigin,l=i(a);return(0,t.jsx)(C.zx,{route:r,target:s?"":"_blank",onClick:function(){_.Z.clickLandingPageNavBar(l),e((0,z.Uy)(Z.ah))},theme:"dark-link",variant:S()("navbar-btn",{"navbar-btn--sign-in":s}),rel:o?"noopener":void 0,children:l},l)}))]}),(0,t.jsx)(C.aV,{onClick:s,isVisible:a}),a&&(0,t.jsx)(G.ZP,{})]})}),Y=n(63249),V=(n(65144),function(){return(0,t.jsx)("div",{className:"landing-header-tags",children:(0,t.jsx)(C.ab,{prefix:"landing-header-tags",children:(0,t.jsx)(C.y3,{children:p.tn.map((function(e){return(0,t.jsx)(C.zx,{route:l.ROUTE_SEARCH,routeParams:{q:e.query},variant:"landing-header-tags__tag",label:e.tag,onClick:function(){return function(e){_.Z.clickLandingPageHashtag(e.tag),o.Router.pushRoute(l.ROUTE_SEARCH,{q:e.query})}(e)}},e.tag)}))})})})}),J=n(33690),K=n(5152),$=(n(91931),(0,K.default)((function(){return n.e(8161).then(n.bind(n,8161))}),{loadableGenerated:{webpack:function(){return[8161]}},ssr:!1})),Q=(0,K.default)((function(){return n.e(3296).then(n.bind(n,67436))}),{loadableGenerated:{webpack:function(){return[67436]}},ssr:!1}),X=function(){var e=(0,v.$)(["landing"]).t;return(0,t.jsxs)("div",{className:"landing-header-background",children:[(0,t.jsxs)("div",{className:"landing-header-background__left",children:[(0,t.jsx)("img",{className:"landing-header-background__left--image",alt:e("header.image-description"),src:(0,d.QW)(u.el.WEBAPP_LANDING,"dish-left.png",u.zf.HIGHT),crossOrigin:"anonymous"}),(0,t.jsx)($,{})]}),(0,t.jsxs)("div",{className:"landing-header-background__right",children:[(0,t.jsx)(Q,{}),(0,t.jsx)("img",{className:"landing-header-background__right--image",alt:e("header.image-description"),src:(0,d.QW)(u.el.WEBAPP_LANDING,"dish-right.png",u.zf.HIGHT),crossOrigin:"anonymous"})]})]})},ee=(n(43756),function(){var e=(0,B.v9)(Y.us),i=(0,v.$)("landing").t,n=(0,k.useMemo)((function(){var e=p.tn.map((function(e){return e.query}));return e[Math.floor(Math.random()*e.length)]}),[]),a=function(){_.Z.clickLandingSearchAddress(),o.Router.pushRoute(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{className:"landing-header",children:[(0,t.jsx)(X,{}),(0,t.jsx)(W,{}),(0,t.jsxs)("div",{className:"landing-header__content",children:[(0,t.jsxs)("div",{className:"landing-header--logo",children:[(0,t.jsx)(C.H2,{color:"primary"}),(0,t.jsx)(J.Z,{isHint:!0})]}),(0,t.jsx)("h1",{className:"landing-header--title",children:(0,t.jsx)(C.ab,{children:(0,t.jsx)(C.vN,{i18nKey:"header.title",t:i,values:{cuisine:n}})})}),(0,t.jsx)("h2",{className:"landing-header--subtitle",children:i("header.subtitle")}),(0,t.jsxs)("div",{className:"landing-header__btn-wrapper",children:[(0,t.jsx)(C.zx,{variant:"bar-btn",onClick:a,label:i("header.search-address"),iconPosition:"left",icon:"search"}),(0,t.jsx)(C.zx,{variant:"search-btn",onClick:a,label:i("header.search-button")})]}),(0,t.jsx)(V,{})]})]}),(0,t.jsx)(J.Z,{})]})});n(90284)},7154:function(e,i,n){"use strict";n.r(i),n.d(i,{CITIES:function(){return s},ABOUT_LINKS:function(){return o}});var t=n(53942),a=n(38890),r=n(49927),s=[{state:"ATL",city:"Barranquilla"},{state:"ANT",city:"Belo"},{state:"BOG",city:"Bogota"},{state:"SAN",city:"Bucaramanga"},{state:"BOL",city:"Cartagena"},{state:"NDS",city:"Cucuta"},{state:"RIS",city:"Dosquebradas"},{state:"ANT",city:"Envigado"},{state:"SAN",city:"Floridablanca"},{state:"SAN",city:"Giron"},{state:"CAL",city:"Manizales"},{state:"ANT",city:"Medellin"},{state:"RIS",city:"Pereira"},{state:"SAN",city:"Piedecuesta"},{state:"MAG",city:"Santa Marta"},{state:"ATL",city:"Soledad"}].map((function(e){return(0,t.R)(e)})),o={sections:[{title:"iFood",links:[{label:"Qui\xe9nes somos",link:a.ROUTE_ABOUT},{label:"Centro de ayuda",link:a.ROUTE_HELP},{label:"iFood Brazil",link:"https://www.ifood.com.br/?utm_source=Site_iFoodColombia&utm_medium=Site_iFoodColombia&utm_campaign=iFoodColombia-Rodape"}]},{title:"Descubre",links:[{label:"Soluciones Empresariales",link:"https://empresas.ifood.com.co/ifood-card"},{label:"Como pedir",link:a.ROUTE_HOW_TO_ORDER},{label:"Registre tu restaurante",link:r.Ng.restaurantsSelfSignInURL}]}],social:[{title:"Facebook",icon:"social-facebook",link:"https://www.facebook.com/iFoodColombia/"},{title:"Twitter",icon:"social-twitter",link:"https://twitter.com/iFoodCo"},{title:"Youtube",icon:"social-youtube",link:"https://www.youtube.com/channel/UCerJhXEkFnMjVzJf3N5e0LQ"},{title:"Instagram",icon:"social-instagram",link:"https://www.instagram.com/ifood_colombia/?hl=mx"}],copyright:"2021 \xa9 Copyright - Inversiones CMR SAS.  NIT: 900129597-5.",companyInformations:"Direccion: Cl 92 # 15 - 78 Bogota D. C, CO.",terms:[{label:"T\xe9rminos y condiciones",link:a.ROUTE_TERMS},{label:"Politica de Privacidad",link:a.ROUTE_PRIVACY},{label:"Dicas de seguridad",link:a.ROUTE_SECURITY}]};i.default={CITIES:s}},60602:function(e,i,n){"use strict";n.r(i),n.d(i,{CITIES:function(){return s},ABOUT_LINKS:function(){return o}});var t=n(53942),a=n(38890),r=n(49927),s=[{state:"MG",city:"Belo Horizonte"},{state:"DF",city:"Bras\xedlia"},{state:"SP",city:"Campinas"},{state:"PR",city:"Curitiba"},{state:"GO",city:"Goi\xe2nia"},{state:"SP",city:"Guarulhos"},{state:"PB",city:"Jo\xe3o Pessoa"},{state:"RN",city:"Natal"},{state:"RJ",city:"Niter\xf3i"},{state:"RS",city:"Porto Alegre"},{state:"SP",city:"Ribeir\xe3o Preto"},{state:"RJ",city:"Rio de Janeiro"},{state:"BA",city:"Salvador"},{state:"SP",city:"Santo Andr\xe9"},{state:"SP",city:"Santos"},{state:"SP",city:"S\xe3o Bernardo do Campo"},{state:"SP",city:"S\xe3o Caetano do Sul"},{state:"SP",city:"S\xe3o Paulo"}].map((function(e){return(0,t.R)(e)})),o={sections:[{title:"iFood",links:[{label:"Site Institucional",link:"https://institucional.ifood.com.br?utm_source=site_ifood"},{label:"Fale conosco",link:a.ROUTE_HELP},{label:"Carreiras",link:"https://carreiras.ifood.com.br/?utm_source=site_ifood"},{label:"Entregadores",link:"https://entregador.ifood.com.br/"}]},{title:"Descubra",links:[{label:"Cadastre seu Restaurante ou Mercado",link:r.bm.restaurantsSelfSignInURL},{label:"iFood Shop",link:"https://shop.ifood.com.br/?utm_source=Site_iFood&utm_medium=Site_iFood&utm_campaign=iFoodShop-Rodape"},{label:"iFood Card",link:"https://contrate-beneficios.ifood.com.br/comprarifoodcard?utm_source=home_ifood&utm_medium=referral&utm_campaign=botao_header"},{label:"Blog iFood Empresas",link:"https://blog-empresas.ifood.com.br/?utm_source=home_ifood&utm_medium=referral&utm_campaign=botao_footer"}]}],social:[{title:"Facebook",icon:"social-facebook",link:"https://www.facebook.com/iFood/"},{title:"Twitter",icon:"social-twitter",link:"https://twitter.com/ifood"},{title:"Youtube",icon:"social-youtube",link:"https://www.youtube.com/user/ifooddelivery"},{title:"Instagram",icon:"social-instagram",link:"https://www.instagram.com/ifoodbrasil/"}],copyright:"\xa9 Copyright 2021 - iFood - Todos os direitos reservados iFood com Ag\xeancia de Restaurantes Online S.A.",companyInformations:"CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, n\xba 1496, Vila Yara, Osasco/SP - CEP 06.020-902",terms:[{label:"Termos e condi\xe7\xf5es de uso",link:a.ROUTE_TERMS},{label:"C\xf3digo de conduta",link:"https://institucional.ifood.com.br/abrindo-a-cozinha/codigo-de-etica"},{label:"Privacidade",link:"https://institucional.ifood.com.br/abrindo-a-cozinha/declaracao-privacidade-clientes/"},{label:"Dicas de seguran\xe7a",link:a.ROUTE_SECURITY}]};i.default={CITIES:s}},58541:function(e,i,n){"use strict";n.d(i,{j:function(){return s}});var t=n(14282),a=n(25091),r=n(84036),s=function(e){if(!e)return!1;var i=e.lastStatus,n=i===a.s5Z,s=i===a.nMH,o=i===a.CqY,l=i===a.YpE,c=(0,r.Gy)(e),u=(0,t.RU)(new Date(c),new Date);return!o&&!l&&(u<=2||!(n||s))}},97885:function(){},97237:function(){},60143:function(){},77261:function(){},79491:function(){},90284:function(){},43756:function(){},91931:function(){},65144:function(){},52938:function(){},45297:function(){}}]);
//# sourceMappingURL=6276-7636dc76e9597444.js.map
//# debugId=7cd8dbd1-2c67-5a0c-b69d-580d82eed47a
