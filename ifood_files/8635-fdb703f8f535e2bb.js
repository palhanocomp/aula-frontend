
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="857f4602-d20b-5ccc-8c27-75109d60c478")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8635,9241],{4306:function(t,e,o){var n={"./es-CO/footer.js":7154,"./pt-BR/footer.js":60602};function r(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id=4306},20640:function(t,e,o){"use strict";var n=o(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var o,i,a,s,l,c,u=!1;e||(e={}),o=e.debug||!1;try{if(a=n(),s=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=t,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[e.format]||r.default;window.clipboardData.setData(i,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){o&&console.error("unable to copy using execCommand: ",d),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(d){o&&console.error("unable to copy using clipboardData: ",d),o&&console.error("falling back to prompt"),i=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,t)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return u}},33783:function(t,e,o){var n=o(96874),r=o(71811),i=o(10928),a=o(40292),s=o(40327);t.exports=function(t,e,o){e=r(e,t);var l=null==(t=a(t,e))?t:t[s(i(e))];return null==l?void 0:n(l,t,o)}},82689:function(t,e,o){var n=o(29932),r=o(97786),i=o(67206),a=o(69199),s=o(71131),l=o(7518),c=o(85022),u=o(6557),d=o(1469);t.exports=function(t,e,o){e=e.length?n(e,(function(t){return d(t)?function(e){return r(e,1===t.length?t[0]:t)}:t})):[u];var f=-1;e=n(e,l(i));var m=a(t,(function(t,o,r){return{criteria:n(e,(function(e){return e(t)})),index:++f,value:t}}));return s(m,(function(t,e){return c(t,e,o)}))}},40098:function(t){var e=Math.ceil,o=Math.max;t.exports=function(t,n,r,i){for(var a=-1,s=o(e((n-t)/(r||1)),0),l=Array(s);s--;)l[i?s:++a]=t,t+=r;return l}},71131:function(t){t.exports=function(t,e){var o=t.length;for(t.sort(e);o--;)t[o]=t[o].value;return t}},26393:function(t,e,o){var n=o(33448);t.exports=function(t,e){if(t!==e){var o=void 0!==t,r=null===t,i=t===t,a=n(t),s=void 0!==e,l=null===e,c=e===e,u=n(e);if(!l&&!u&&!a&&t>e||a&&s&&c&&!l&&!u||r&&s&&c||!o&&c||!i)return 1;if(!r&&!a&&!u&&t<e||u&&o&&i&&!r&&!a||l&&o&&i||!s&&i||!c)return-1}return 0}},85022:function(t,e,o){var n=o(26393);t.exports=function(t,e,o){for(var r=-1,i=t.criteria,a=e.criteria,s=i.length,l=o.length;++r<s;){var c=n(i[r],a[r]);if(c)return r>=l?c:c*("desc"==o[r]?-1:1)}return t.index-e.index}},47445:function(t,e,o){var n=o(40098),r=o(16612),i=o(18601);t.exports=function(t){return function(e,o,a){return a&&"number"!=typeof a&&r(e,o,a)&&(o=a=void 0),e=i(e),void 0===o?(o=e,e=0):o=i(o),a=void 0===a?e<o?1:-1:i(a),n(e,o,a,t)}}},5907:function(t,e,o){var n=o(33783),r=o(5976)(n);t.exports=r},96026:function(t,e,o){var n=o(47445)();t.exports=n},89734:function(t,e,o){var n=o(21078),r=o(82689),i=o(5976),a=o(16612),s=i((function(t,e){if(null==t)return[];var o=e.length;return o>1&&a(t,e[0],e[1])?e=[]:o>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),r(t,n(e,1),[])}));t.exports=s},49194:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return R}});var n=o(85893),r=o(67294),i=o(45697),a=o.n(i),s=o(32790),l=o(4306)("./".concat(s.LOCALE,"/footer.js")),c=(l.CITIES,l.ABOUT_LINKS),u=l.default,d=o(14416),f=o(26793),m=o(75463),p=o(59387),b=o(59810),h=o(63249),_=function(t){return t.sections.map((function(t){return(0,n.jsxs)("div",{className:"footer__column",children:[(0,n.jsx)("h3",{className:"footer__subtitle",children:t.title}),(0,n.jsx)("ul",{className:"footer__links-list",children:t.links.map((function(t){return(0,n.jsx)("li",{className:"footer__list-item",children:t.link.includes("https")?(0,n.jsx)("a",{href:t.link,target:"_blank",className:"footer__text-link",title:t.label,rel:"noopener noreferrer",children:t.label}):(0,n.jsx)(m.Link,{to:t.link,children:(0,n.jsx)("a",{target:"_blank",className:"footer__text-link",title:t.label,rel:"noopener noreferrer",children:t.label})})},t.label)}))})]},t.title)}))},y=function(t){var e=t.social,o=(0,f.$)("footer").t;return(0,n.jsxs)("div",{className:"footer__column footer__column--social",children:[(0,n.jsx)("h3",{className:"footer__subtitle",children:o("social.title")}),(0,n.jsx)("ul",{className:"footer__social",children:e.map((function(t){return(0,n.jsx)("li",{children:(0,n.jsx)(p.zx,{icon:t.icon,variant:"footer__social-icon btn-icon btn-icon--transparent",theme:"transparent",route:t.link,ariaLabel:t.title,title:t.title,target:"_blank",rel:"noopener",children:(0,n.jsx)("span",{className:"footer__social-title",children:t.title})})},t.icon)}))})]})},g=function(t){var e=t.copyright,o=t.terms,r=t.companyInformations,i=(0,d.v9)(h.us),a=(0,f.$)("footer").t;return(0,n.jsxs)("section",{className:"footer__section footer__section--copyright",children:[(0,n.jsxs)("div",{className:"footer__copyright-text",children:[(0,n.jsx)(m.Link,{to:i,children:(0,n.jsxs)("a",{title:a("back-to-home"),children:[(0,n.jsx)(p.JO,{name:b.ZC}),(0,n.jsx)("span",{className:"footer__home-link",children:a("back-to-home")})]})}),(0,n.jsx)("p",{className:"footer__company-copyright",children:e}),(0,n.jsx)("p",{className:"footer__company-informations",children:r})]}),(0,n.jsx)("div",{className:"footer__terms-links",children:(0,n.jsx)("ul",{children:o.map((function(t){return(0,n.jsx)("li",{children:t.link.includes("https")?(0,n.jsx)("a",{href:t.link,target:"_blank",className:"footer__text-link",title:t.label,rel:"noopener noreferrer",children:t.label}):(0,n.jsx)(m.Link,{to:t.link,children:(0,n.jsx)("a",{target:"_blank",title:t.label,className:"footer__text-link",children:t.label})},t.label)},t.label)}))})})]})},v=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:"footer__section footer__section--about",children:[(0,n.jsx)(_,{sections:c.sections}),(0,n.jsx)(y,{social:c.social})]}),(0,n.jsx)(g,{copyright:c.copyright,terms:c.terms,companyInformations:c.companyInformations})]})},k={items:a().arrayOf(a().shape({label:a().string.isRequired,onClick:a().func.isRequired})).isRequired},x=function(t){var e=t.items,o=Math.ceil(e.length/4);return(0,n.jsx)("section",{className:"footer__section footer__section--aditional-items",children:new Array(4).fill().map((function(t,r){var i=o*r,a=i+o,s=e.slice(i,a);return(0,n.jsx)("div",{className:"footer__column",children:(0,n.jsx)("ul",{className:"footer__links-list",children:s.map((function(t){return(0,n.jsx)("li",{className:"footer__list-item",children:(0,n.jsx)("a",{target:"_blank",className:"footer__text-link",title:t.label,rel:"noopener noreferrer",onClick:t.onClick,children:t.label})},t.label)}))})},"aditional-item-column-".concat(r))}))})};x.propTypes=k;var C=x,S=(o(97885),{show:a().object,cities:a().array,landingPage:a().bool,aditionalItems:a().arrayOf(a().shape({label:a().string.isRequired,onClick:a().func.isRequired}))}),A={show:{cities:!0,about:!0},cities:u.CITIES,landingPage:!1,aditionalItems:[]},E=(0,r.memo)((function(t){var e=t.show.about,o=t.aditionalItems;return(0,n.jsxs)("footer",{className:"desktop-container footer",children:[o.length?(0,n.jsx)(C,{items:o}):null,e&&(0,n.jsx)(v,{})]})}));E.propTypes=S,E.defaultProps=A;var R=E},7154:function(t,e,o){"use strict";o.r(e),o.d(e,{CITIES:function(){return a},ABOUT_LINKS:function(){return s}});var n=o(53942),r=o(38890),i=o(49927),a=[{state:"ATL",city:"Barranquilla"},{state:"ANT",city:"Belo"},{state:"BOG",city:"Bogota"},{state:"SAN",city:"Bucaramanga"},{state:"BOL",city:"Cartagena"},{state:"NDS",city:"Cucuta"},{state:"RIS",city:"Dosquebradas"},{state:"ANT",city:"Envigado"},{state:"SAN",city:"Floridablanca"},{state:"SAN",city:"Giron"},{state:"CAL",city:"Manizales"},{state:"ANT",city:"Medellin"},{state:"RIS",city:"Pereira"},{state:"SAN",city:"Piedecuesta"},{state:"MAG",city:"Santa Marta"},{state:"ATL",city:"Soledad"}].map((function(t){return(0,n.R)(t)})),s={sections:[{title:"iFood",links:[{label:"Qui\xe9nes somos",link:r.ROUTE_ABOUT},{label:"Centro de ayuda",link:r.ROUTE_HELP},{label:"iFood Brazil",link:"https://www.ifood.com.br/?utm_source=Site_iFoodColombia&utm_medium=Site_iFoodColombia&utm_campaign=iFoodColombia-Rodape"}]},{title:"Descubre",links:[{label:"Soluciones Empresariales",link:"https://empresas.ifood.com.co/ifood-card"},{label:"Como pedir",link:r.ROUTE_HOW_TO_ORDER},{label:"Registre tu restaurante",link:i.Ng.restaurantsSelfSignInURL}]}],social:[{title:"Facebook",icon:"social-facebook",link:"https://www.facebook.com/iFoodColombia/"},{title:"Twitter",icon:"social-twitter",link:"https://twitter.com/iFoodCo"},{title:"Youtube",icon:"social-youtube",link:"https://www.youtube.com/channel/UCerJhXEkFnMjVzJf3N5e0LQ"},{title:"Instagram",icon:"social-instagram",link:"https://www.instagram.com/ifood_colombia/?hl=mx"}],copyright:"2021 \xa9 Copyright - Inversiones CMR SAS.  NIT: 900129597-5.",companyInformations:"Direccion: Cl 92 # 15 - 78 Bogota D. C, CO.",terms:[{label:"T\xe9rminos y condiciones",link:r.ROUTE_TERMS},{label:"Politica de Privacidad",link:r.ROUTE_PRIVACY},{label:"Dicas de seguridad",link:r.ROUTE_SECURITY}]};e.default={CITIES:a}},60602:function(t,e,o){"use strict";o.r(e),o.d(e,{CITIES:function(){return a},ABOUT_LINKS:function(){return s}});var n=o(53942),r=o(38890),i=o(49927),a=[{state:"MG",city:"Belo Horizonte"},{state:"DF",city:"Bras\xedlia"},{state:"SP",city:"Campinas"},{state:"PR",city:"Curitiba"},{state:"GO",city:"Goi\xe2nia"},{state:"SP",city:"Guarulhos"},{state:"PB",city:"Jo\xe3o Pessoa"},{state:"RN",city:"Natal"},{state:"RJ",city:"Niter\xf3i"},{state:"RS",city:"Porto Alegre"},{state:"SP",city:"Ribeir\xe3o Preto"},{state:"RJ",city:"Rio de Janeiro"},{state:"BA",city:"Salvador"},{state:"SP",city:"Santo Andr\xe9"},{state:"SP",city:"Santos"},{state:"SP",city:"S\xe3o Bernardo do Campo"},{state:"SP",city:"S\xe3o Caetano do Sul"},{state:"SP",city:"S\xe3o Paulo"}].map((function(t){return(0,n.R)(t)})),s={sections:[{title:"iFood",links:[{label:"Site Institucional",link:"https://institucional.ifood.com.br?utm_source=site_ifood"},{label:"Fale conosco",link:r.ROUTE_HELP},{label:"Carreiras",link:"https://carreiras.ifood.com.br/?utm_source=site_ifood"},{label:"Entregadores",link:"https://entregador.ifood.com.br/"}]},{title:"Descubra",links:[{label:"Cadastre seu Restaurante ou Mercado",link:i.bm.restaurantsSelfSignInURL},{label:"iFood Shop",link:"https://shop.ifood.com.br/?utm_source=Site_iFood&utm_medium=Site_iFood&utm_campaign=iFoodShop-Rodape"},{label:"iFood Card",link:"https://contrate-beneficios.ifood.com.br/comprarifoodcard?utm_source=home_ifood&utm_medium=referral&utm_campaign=botao_header"},{label:"Blog iFood Empresas",link:"https://blog-empresas.ifood.com.br/?utm_source=home_ifood&utm_medium=referral&utm_campaign=botao_footer"}]}],social:[{title:"Facebook",icon:"social-facebook",link:"https://www.facebook.com/iFood/"},{title:"Twitter",icon:"social-twitter",link:"https://twitter.com/ifood"},{title:"Youtube",icon:"social-youtube",link:"https://www.youtube.com/user/ifooddelivery"},{title:"Instagram",icon:"social-instagram",link:"https://www.instagram.com/ifoodbrasil/"}],copyright:"\xa9 Copyright 2021 - iFood - Todos os direitos reservados iFood com Ag\xeancia de Restaurantes Online S.A.",companyInformations:"CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, n\xba 1496, Vila Yara, Osasco/SP - CEP 06.020-902",terms:[{label:"Termos e condi\xe7\xf5es de uso",link:r.ROUTE_TERMS},{label:"C\xf3digo de conduta",link:"https://institucional.ifood.com.br/abrindo-a-cozinha/codigo-de-etica"},{label:"Privacidade",link:"https://institucional.ifood.com.br/abrindo-a-cozinha/declaracao-privacidade-clientes/"},{label:"Dicas de seguran\xe7a",link:r.ROUTE_SECURITY}]};e.default={CITIES:a}},68716:function(t,e,o){"use strict";o.d(e,{j:function(){return c}});var n,r,i,a=o(49927),s=o(25091);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=(l(i={},a.bm.countryCode,(l(n={},s.aAJ.home,"HOME_MULTICATEGORY"),l(n,s.aAJ.restaurant,"HOME_FOOD_DELIVERY"),l(n,s.aAJ.market,"HOME_MERCADO_BR"),l(n,s.aAJ.drinks,"MERCADO_BEBIDAS"),l(n,s.aAJ.express,"SUB_EXPRESS_CMS"),l(n,s.aAJ.pharmacy,"MERCADO_FARMACIA"),l(n,s.aAJ.petshop,"MERCADO_PETSHOP"),l(n,s.aAJ.shopping,"SHOPPING_OFICIAL"),n)),l(i,a.Ng.countryCode,(l(r={},s.aAJ.restaurant,"HOME_NETFLIX_VARIANTE_C"),l(r,s.aAJ.market,"SH_MERCADO_COLOMBIA"),l(r,s.aAJ.drinks,"SH_BEBIDAS_CO"),r)),i)},32491:function(t,e,o){"use strict";o.d(e,{A:function(){return d}});var n=o(11163),r=o(67294),i=o(14416),a=o(94586),s=o(60996),l=o(63594);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,r,i=[],a=!0,s=!1;try{for(o=o.call(t);!(a=(n=o.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(){var t=(0,i.I0)(),e=(0,n.useRouter)().asPath,o=(0,r.useMemo)((function(){var t=u(e.split(/[/?]/),2)[1];return a.YA[t]}),[e]);return(0,r.useEffect)((function(){o&&(s.Z.viewHomePageByCategory(a._9[o]),t((0,l.bG)(o)))}),[t,o]),o}},96850:function(t,e,o){"use strict";o.d(e,{Z:function(){return s}});var n=o(67294),r=o(14416),i=o(96983),a=o(40059);function s(){var t=(0,r.I0)(),e=(0,r.v9)(i.aM);(0,n.useEffect)((function(){t((0,a.Ec)({open:!e,keepCurrentPageAfterSelect:!e}))}),[t,e])}},97885:function(){},11742:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||o.forEach((function(e){t.addRange(e)})),e&&e.focus()}}},65100:function(t,e,o){"use strict";function n(t){let e=2;const o=[...t].reverse().reduce(((t,o)=>(t+=Number(o)*e,e=9===e?2:e+1,t)),0)%11;return o<2?0:11-o}function r(t){const e=t.toString().replace(/[\.\/\-]/g,"");if(!e||14!==e.length||/^(\d)\1+$/.test(e))return!1;let o=e.substr(0,12);return o+=n(o),o+=n(o),o.substr(-2)===e.substr(-2)}o.d(e,{Gu:function(){return r}})}}]);
//# sourceMappingURL=8635-fdb703f8f535e2bb.js.map
//# debugId=857f4602-d20b-5ccc-8c27-75109d60c478
