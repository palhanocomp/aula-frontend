
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="082e6df2-acd8-5e7e-8587-81fa01a15e61")}catch(e){}}();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4450],{7257:function(e,t,n){"use strict";var r=n(85893),o=n(67294),i=n(45697),a=n.n(i),c=n(91768),u=n(14416),l=n(94184),s=n.n(l),d=n(85684),f=n(67525),p=n(82462),m=n(67926),b=n(56301),v=n(94774),y=n(59387);n(6812);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}var k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({},f.Z,{totalCost:a().number.isRequired,itemsAmount:a().number.isRequired}),w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,o,i=x(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).state={itemAdded:!1},e}return t=a,(n=[{key:"componentDidUpdate",value:function(e){e.itemsAmount<this.props.itemsAmount&&this.handleItemAddition()}},{key:"handleItemAddition",value:function(){var e=this;this.setState({itemAdded:!0},(function(){return setTimeout((function(){return e.setState({itemAdded:!1})}),300)}))}},{key:"render",value:function(){var e=this.props,t=e.totalCost,n=e.itemsAmount,o=e.t,i=this.state.itemAdded?"cart-bar__wrapper--new-item":"",a=t,c=n;return(0,r.jsx)("div",{className:s()("cart-bar",{"cart-bar--with-home-button":(0,b.Z)()}),children:(0,r.jsxs)("div",{className:"cart-bar__wrapper ".concat(i),children:[(0,r.jsx)("div",{className:"cart-bar__container",children:(0,r.jsx)("span",{className:"cart-bar__title",children:o("context-card.item-added")})}),(0,r.jsxs)("div",{className:"cart-bar__container",children:[(0,r.jsxs)("div",{className:"cart-bar__bag",children:[(0,r.jsx)(y.JO,{name:"bag"}),(0,r.jsx)("span",{className:"cart-bar__amount",children:c})]}),(0,r.jsx)("span",{className:"cart-bar__title",children:o("context-card.see-cart")}),(0,r.jsx)("span",{className:"cart-bar__cost",children:(0,p.xG)(a)})]})]})})}}])&&h(t.prototype,n),o&&h(t,o),a}(o.Component);w.propTypes=k,t.Z=(0,m.Z)(w,[(0,u.$j)((function(e){var t=e.checkout;return{totalCost:(0,d.ZP)(t).totalPrice,itemsAmount:(0,v.YQ)({checkout:t})}}),null),(0,c.Z)("checkout")])},63163:function(e,t,n){"use strict";var r=n(85893),o=n(67294),i=n(45697),a=n.n(i),c=n(74231),u=n(82580),l=n(91768),s=n(67525),d=n(43932),f=n(59387),p=n(7058),m=n(48602),b=n(35183),v=n(59810);n(51751);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function _(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?h(e):t}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function x(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},s.Z,{idDocument:a().string,onSubmit:a().func.isRequired,automatic:a().bool,isDocumentRequired:a().bool}),R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,o,i=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).onDocumentType=t.onDocumentType.bind(h(t)),t.validation=t.validation.bind(h(t)),t.idDocumentInvalidMessage=t.idDocumentInvalidMessage.bind(h(t)),t.renderForm=t.renderForm.bind(h(t)),t.handleSubmit=t.handleSubmit.bind(h(t)),t}return t=a,n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.idDocument,n=e.automatic,r=e.onSubmit;n&&t&&r({idDocument:t})}},{key:"handleSubmit",value:function(e){(0,this.props.onSubmit)({idDocument:e.enableInput?e.idDocument:""})}},{key:"onDocumentType",value:function(e){var t=this.props,n=t.automatic,r=t.onSubmit,o=(0,d.ZP)(e.target.value);n&&r({idDocument:o?e.target.value:void 0})}},{key:"idDocumentInvalidMessage",value:function(e){var t,n=this.props.t;return v.F7&&(null===e||void 0===e?void 0:e.value)&&(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.length)>14?n("validation:cnpjDocument.invalid"):n("validation:idDocument.invalid")}},{key:"validation",value:function(){return c.Ry().shape({idDocument:c.Z_().nullable().test("isIdDocumentValid",this.idDocumentInvalidMessage,d.ZP)})}},{key:"renderForm",value:function(e){var t=e.touched,n=e.errors,o=e.values,i=e.setFieldValue,a=e.dirty,c=e.submitForm,l=this,s=this.props,d=s.automatic,v=s.t,y=s.isDocumentRequired;return(0,r.jsxs)(u.l0,{"data-testid":"order-receipt__form",children:[(0,r.jsxs)("div",{className:"order-receipt__wrapper",children:[(0,r.jsx)(p.II,{tabIndex:"0",error:t.idDocument&&n.idDocument,id:"idDocument",label:v("receipt.input-label"),mask:{mask:m.yy,guide:!1},name:"idDocument",onKeyUp:function(e){return l.onDocumentType(e,c)},type:"tel",value:o.idDocument,disabled:!o.enableInput}),o.idDocument&&(0,r.jsx)(p.ZD,{id:"enableInput",name:"enableInput",value:"enableInput",checked:o.enableInput,onChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.apply(void 0,x(t)),d&&c()}})]}),y?(0,r.jsx)("span",{className:"order-receipt__dialog",children:v("card-form.idDocument-required")}):null,!d&&(o.idDocument||!a)&&(0,r.jsx)(f.zx,{tabIndex:"0",color:"primary",disabled:(0,b.f)(o.idDocument)||(0,b.x)(n),fullWidth:!0,label:v("receipt.submit-button-label"),size:"m",theme:"default",type:"submit",variant:"order-receipt__submit-button","data-test-id":"order-receipt__submit-button"}),!d&&a&&!o.idDocument&&(0,r.jsx)(f.zx,{tabIndex:"0",color:"primary",fullWidth:!0,label:v("receipt.remove-button-label"),size:"m",theme:"default",type:"submit",variant:"order-receipt__submit-button","data-test-id":"order-receipt__remove-button"})]})}},{key:"render",value:function(){var e=this.props.idDocument;return(0,r.jsx)(u.J9,{initialValues:{idDocument:e,enableInput:!0},onSubmit:this.handleSubmit,validationSchema:this.validation,render:this.renderForm})}}],n&&g(t.prototype,n),o&&g(t,o),a}(o.Component);R.propTypes=P,R.defaultProps={idDocument:"",automatic:!1,isDocumentRequired:!1},t.Z=(0,l.Z)(["checkout","validation"])(R)},89678:function(e,t,n){"use strict";var r=n(85893),o=n(45697),i=n.n(o),a=n(26793),c=n(59387),u=(n(94099),{isOpen:i().bool,onRequestClose:i().func});function l(e){var t=e.isOpen,n=e.onRequestClose,o=(0,a.$)("checkout").t;return(0,r.jsx)(c.u_,{displayActions:!0,closeIcon:"close",type:"dialog",isOpen:t,onRequestClose:n,children:(0,r.jsxs)("div",{className:"store-closed-alert",children:[(0,r.jsx)("h2",{className:"store-closed-alert__title",children:o("alert.something-unexpected")}),(0,r.jsx)("span",{className:"store-closed-alert__description",children:o("alert.store-closed")}),(0,r.jsx)(c.zx,{variant:"store-closed-alert__button",theme:"link",label:o("alert.button-text"),onClick:n})]})})}l.propTypes=u,l.defaultProps={isOpen:!1,onRequestClose:function(){}},t.Z=l},24450:function(e,t,n){"use strict";n.d(t,{SJ:function(){return Ke},pN:function(){return Me},I1:function(){return r.Z},hR:function(){return S}});n(7257);var r=n(63163),o=n(85893),i=n(67294),a=n(45697),c=n.n(a),u=n(14890),l=n(14416),s=n(91768),d=n(27361),f=n.n(d),p=n(45881),m=n(39368),b=n(59387),v=n(36750),y=n(67926),h=n(67525);n(80786);function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function C(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?g(e):t}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}var P={setCheckoutCpf:p.M6},R=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}({},h.Z,{actions:(0,v.Z)(Object.keys(P),c().func.isRequired).isRequired,checkout:c().object.isRequired,isOpen:c().bool,onCloseModal:c().func.isRequired,accountDocument:c().string}),D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,n,i,a=w(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).submitForm=t.submitForm.bind(g(t)),t}return t=c,(n=[{key:"submitForm",value:function(e){var t=this.props,n=t.checkout,r=t.actions,o=t.onCloseModal;r.setCheckoutCpf({restaurantId:n.currentRestaurant,cpf:e.idDocument}),o()}},{key:"render",value:function(){var e,t,n=this.props,i=n.checkout,a=n.accountDocument,c=n.isOpen,u=n.onCloseModal,l=n.t,s=i.currentRestaurant,d=null===(e=i[s])||void 0===e||null===(t=e.restaurant)||void 0===t?void 0:t.isDocumentRequired,p=f()(i[s],"cpf")||a;return(0,o.jsxs)(b.u_,{isOpen:c,type:"fullpage",variant:"order-receipt-modal",animation:"right",children:[(0,o.jsx)(m.$T,{title:l("receipt.header-title"),leftIcon:"arrow-left-thin",theme:"primary",leftAriaLabel:l("receipt.header-left-aria-label"),sidePadding:!1,onClickLeftButton:u}),(0,o.jsx)(r.Z,{isDocumentRequired:d,idDocument:p,onSubmit:this.submitForm,onHeaderBackClick:u})]})}}])&&O(t.prototype,n),i&&O(t,i),c}(i.Component);D.propTypes=R,D.defaultProps={isOpen:!1,accountDocument:""};var S=(0,y.Z)(D,[(0,l.$j)((function(e){var t=e.account,n=e.checkout;return{accountDocument:f()(t,"cpf"),checkout:n}}),(function(e){return{actions:(0,u.DE)(P,e)}})),(0,s.Z)(["checkout","validation"])]),N=n(26793),I=n(82580),q=n(74231),M=n(23279),T=n.n(M),Z=n(7058),A=n(84033);n(34096);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function L(e,t){return!t||"object"!==z(t)&&"function"!==typeof t?E(e):t}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}var z=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}var W={currentCardTypeSet:A.i3},J=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}({},h.Z,{actions:(0,v.Z)(Object.keys(W),c().func.isRequired).isRequired,cardType:c().string,setFieldValue:c().func,setFieldTouched:c().func}),K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,i=$(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this)).selectCardType=e.selectCardType.bind(E(e)),e}return t=a,(n=[{key:"selectCardType",value:function(e,t){var n=this.props,r=n.setFieldValue,o=n.actions;r(e,t),o.currentCardTypeSet({cardType:t})}},{key:"render",value:function(){var e=this.props,t=e.values,n=e.t,r=e.setFieldTouched;return(0,o.jsxs)(I.l0,{className:"payment-type-selection",children:[(0,o.jsxs)("label",{htmlFor:"credit",className:"selection-type",children:[(0,o.jsx)("span",{className:"selection-type__label",children:n("credit")}),(0,o.jsx)(Z.Y8,{name:"cardType",id:"credit",value:"credit",checked:"credit"===t.cardType,onChange:this.selectCardType,onBlur:r})]}),(0,o.jsxs)("label",{htmlFor:"debit",className:"selection-type",children:[(0,o.jsx)("span",{className:"selection-type__label",children:n("debit")}),(0,o.jsx)(Z.Y8,{name:"cardType",id:"debit",value:"debit",checked:"debit"===t.cardType,onChange:this.selectCardType,onBlur:r})]})]})}}])&&F(t.prototype,n),r&&F(t,r),a}(i.Component);K.propTypes=J,K.defaultProps={cardType:"credit",setFieldValue:null,setFieldTouched:null};var Y=(0,y.Z)(K,[(0,I.j0)({mapPropsToValues:function(e){return{cardType:e.debit?"debit":"credit"}}}),(0,l.$j)((function(e){return{debit:e.wallet.currentCard.debit}}),(function(e){return{actions:(0,u.DE)(W,e)}})),(0,s.Z)(["payment"])]);n(90804);function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}({},h.Z,{isOpen:c().bool,onRequestClose:c().func.isRequired}),Q=function(e){var t=e.isOpen,n=e.t,r=e.onRequestClose;return(0,o.jsxs)(b.u_,{isOpen:t,type:"dialog",animation:"bottom",onRequestClose:r,variant:"cvv-disclaimer-dialog",children:[(0,o.jsx)("p",{tabIndex:"0",className:"cvv-disclaimer-dialog__title",children:n("cvv-dialog.title")}),(0,o.jsx)("p",{tabIndex:"0",className:"cvv-disclaimer-dialog__description",children:n("cvv-dialog.description")}),(0,o.jsx)(b.JO,{className:"cvv-disclaimer-dialog__icon",name:"cvv"}),(0,o.jsx)(b.zx,{tabIndex:"0",color:"primary",fullWidth:!0,label:n("cvv-dialog.confirm-button-label"),type:"button",onClick:r,"data-test-id":"cvv-disclaimer-dialog__confirm-button"})]})};Q.propTypes=G,Q.defaultProps={isOpen:!1};var X=(0,s.Z)("checkout")(Q),ee=n(25091),te=n(97591),ne=n(48602),re=n(43932),oe=n(35183),ie=n(52668),ae=n(18967),ce=n(72683),ue=n(77659),le=n(59810);n(61416);function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){return pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},pe(e)}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){fe(e,t,n[t])}))}return e}function be(e,t){return!t||"object"!==ye(t)&&"function"!==typeof t?se(e):t}function ve(e,t){return ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve(e,t)}var ye=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function he(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe(e);if(t){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return be(this,n)}}var ge={unsetCardValidate:ue.lL,wipeCurrentCard:A.rN},Oe=me({},h.Z,{onSubmit:c().func,onCompletedForm:c().func,restaurantUuid:c().string.isRequired,geoLocated:c().bool,currentCard:{debit:c().bool,cardNumber:c().string,expiration:c().string,cvv:c().string,holderName:c().string,idDocument:c().string,paymentMethod:c().object},cardValidation:c().shape({isLoading:c().bool.isRequired,isValid:c().bool.isRequired}).isRequired,paymentOptions:c().arrayOf(c().shape({code:c().string,description:c().string,acceptChange:c().bool,creditCardRegex:c().string,debitSupported:c().bool,userAllowed:c().bool})).isRequired,checkout:c().object}),je={geoLocated:!1,onSubmit:function(){},onCompletedForm:void 0,currentCard:{},checkout:{}},_e={mapPropsToValues:function(e){var t,n,r,o,i,a,c,u=null!==(t=e.currentCard)&&void 0!==t?t:{};return{cardNumber:null!==(n=u.cardNumber)&&void 0!==n?n:"",expiration:null!==(r=u.expiration)&&void 0!==r?r:"",cvv:null!==(o=u.cvv)&&void 0!==o?o:"",holderName:null!==(i=u.holderName)&&void 0!==i?i:"",idDocument:null!==(a=u.idDocument)&&void 0!==a?a:"",paymentMethod:null!==(c=u.paymentMethod)&&void 0!==c?c:{}}},validationSchema:function(e){var t=e.t,n=e.paymentOptions;return q.Ry().shape({cardNumber:q.Z_().test("isCardNumberValid",t("validation:card-number:invalid"),(function(e){return Boolean((0,te.y_)(e,n))})),expiration:q.Z_().test("isCardExpirationValid",t("validation:card-expiration:invalid"),te.PK),cvv:q.Z_().min(3,t("validation:cvv.min",{min:3})).required(t("validation:cvv.invalid")),holderName:q.Z_().matches(ee._tj,{message:t("validation:name.required"),excludeEmptyString:!0}).required(t("validation:name.required")),idDocument:q.Z_().nullable().test("isIdDocumentValid",(function(e){return t(function(e){var t;return le.F7&&(null===e||void 0===e?void 0:e.value)&&(null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.length)>14?"validation:cnpjDocument.invalid":"validation:idDocument.invalid"}(e))}),re.ZP).required(t("validation:idDocument.invalid"))})}},Ce=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(a,e);var t,n,r,i=he(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={isCvvDisclaimerOpen:!1,isMulti:null,hasSetPayment:!1},t.handleCardNumber=t.handleCardNumber.bind(se(t)),t.eraseCardNumber=t.eraseCardNumber.bind(se(t)),t.onCompletedForm=T()(e.onCompletedForm,750),t}return t=a,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t,n,r,o,i,a=this.props,c=a.actions,u=a.restaurantUuid,l=a.cardValidation,s=a.currentCard,d=a.checkout,f=this.state.hasSetPayment,p=(null!==(o=null===(t=e.checkout)||void 0===t?void 0:t[d.currentRestaurant])&&void 0!==o?o:{}).paymentMethod,m=Object.keys(e.values).every((function(t){return!(0,oe.f)(e.values[t])})),b=s.debit!==e.currentCard.debit,v=(0,oe.x)(e.errors),y=Boolean(e.values.paymentMethod.credit||e.values.paymentMethod.debit),h="OFFLINE"===(null===p||void 0===p||null===(n=p.type)||void 0===n?void 0:n.name),g=m&&y&&!h&&!v&&(!f||b),O=v&&((null===l||void 0===l?void 0:l.isValid)||f);(null==this.state.isMulti||b)&&(null===(r=e.currentCard)||void 0===r?void 0:r.cardNumber)&&this.handleCardNumber(null===(i=e.currentCard)||void 0===i?void 0:i.cardNumber),g?this.setState({hasSetPayment:!0},(function(){return function(e,t){var n,r=t.values,o=t.geoLocated,i=t.restaurantUuid,a=t.currentCard,c=r.paymentMethod,u=null!==(n=a.debit)&&void 0!==n&&n;e({geoLocated:o,restaurantId:i,card:me({},r,{cardNumber:r.cardNumber.replace(/\D/g,""),holderName:r.holderName.toUpperCase(),codeIfood:"",debit:u}),debit:u,paymentMethod:me({debit:u},c)})}(e.onCompletedForm,e)})):O&&(this.setState({hasSetPayment:!1}),c.unsetCardValidate({restaurantId:u}))}},{key:"handleCardNumber",value:function(e){var t=this.props,n=t.paymentOptions,r=t.setFieldValue,o=t.values.paymentMethod,i=(0,te.dK)(e,n),a=!(!i.credit||!i.debit);(i.credit||i.debit)&&i!==o?(this.setState({isMulti:a}),r("paymentMethod",i)):(this.setState({isMulti:!1}),r("paymentMethod",{}))}},{key:"eraseCardNumber",value:function(e){var t=this.props.setFieldValue;t(e,""),t("paymentMethod",{})}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.t,i=n.touched,a=n.errors,c=n.values,u=n.setFieldValue,l=this.state.isMulti,s=null===(e=c.paymentMethod)||void 0===e?void 0:e.credit;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I.l0,{children:(0,o.jsxs)("div",{className:"checkout-card-form",children:[(0,o.jsxs)("div",{className:"checkout-card-form__card-container",children:[(0,o.jsx)(Z.II,{tabIndex:"0",error:i.cardNumber&&a.cardNumber,label:r("card-form.card-number-label"),name:"cardNumber",type:"tel",value:c.cardNumber,mask:{mask:ne.CC,guide:!1},eraseAction:this.eraseCardNumber,onKeyUp:function(e){var n=e.target.value;return t.handleCardNumber(n)},ariaRequired:!0,"data-test-id":"checkout-card-form__input-card-number",autoComplete:"cc-number"}),(null===s||void 0===s?void 0:s.brand)?(0,o.jsx)("div",{className:"checkout-card-form__brand-icon",children:(0,o.jsx)("img",{src:(0,ae.QW)(ie.el.PAYMENT_ICON,s.brand.id,ie.zf.THUMBNAIL),alt:r("card-form.card-brand",{brand:s.brand.description}),crossOrigin:"anonymous"})},s.brand.id):(0,o.jsx)(b.JO,{name:"lock",className:"checkout-card-form__input-icon"})]}),(0,o.jsxs)("div",{className:"checkout-card-form__flex",children:[(0,o.jsx)(Z.II,{tabIndex:"0",error:i.expiration&&a.expiration,label:r("card-form.expiration-label"),name:"expiration",type:"tel",value:c.expiration,mask:{mask:ne.pz,guide:!1,pipe:ne.Fh},eraseAction:u,ariaRequired:!0,autoComplete:"cc-exp"}),(0,o.jsx)(Z.II,{tabIndex:"0",error:i.cvv&&a.cvv,label:r("card-form.cvv-label"),name:"cvv",type:"tel",value:c.cvv,maxLength:4,eraseAction:u,ariaRequired:!0,autoComplete:"cc-csc"}),(0,o.jsx)("button",{tabIndex:"-1",className:"checkout-card-form__question-button","aria-label":r("card-form.cvv-disclaimer-button"),onClick:function(){return t.setState({isCvvDisclaimerOpen:!0})},type:"button",children:"?"})]}),(0,o.jsx)(Z.II,{tabIndex:"0",error:i.holderName&&a.holderName,label:r("card-form.holder-name-label"),name:"holderName",type:"text",value:c.holderName,eraseAction:u,ariaRequired:!0,autoComplete:"cc-name"}),(0,o.jsx)(Z.II,{tabIndex:"0",error:i.idDocument&&a.idDocument,label:r("card-form.idDocument-label"),name:"idDocument",type:"tel",value:c.idDocument,mask:{mask:ne.yy,guide:!1},eraseAction:u,ariaRequired:!0}),l&&(0,o.jsx)(Y,{})]})}),(0,o.jsx)(X,{isOpen:this.state.isCvvDisclaimerOpen,onRequestClose:function(){return t.setState({isCvvDisclaimerOpen:!1})}})]})}}])&&de(t.prototype,n),r&&de(t,r),a}(i.Component);Ce.propTypes=Oe,Ce.defaultProps=je;var xe=(0,y.Z)(Ce,[(0,I.j0)(_e),(0,l.$j)((function(e){return{currentCard:e.wallet.currentCard,checkout:e.checkout}}),(function(e){return{actions:(0,u.DE)(ge,e)}})),ce.Z,(0,s.Z)(["checkout","validation"])]);n(72945);function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ke(e,t,n[t])}))}return e}({},h.Z,{isOpen:c().bool,onRequestClose:c().func.isRequired,disclaimer:c().string}),Pe={isOpen:!1,disclaimer:void 0},Re=function(e){var t=e.isOpen,n=e.t,r=e.onRequestClose,i=e.disclaimer;return(0,o.jsxs)(b.u_,{isOpen:t,type:"dialog",animation:"bottom",onRequestClose:r,variant:"debit-disclaimer-dialog",children:[(0,o.jsx)("p",{tabIndex:"0",className:"debit-disclaimer-dialog__title",children:n("debit-disclaimer-dialog.title")}),(0,o.jsx)("p",{tabIndex:"0",className:"debit-disclaimer-dialog__description",children:i}),(0,o.jsx)(b.zx,{tabIndex:"0",color:"primary",fullWidth:!0,label:n("debit-disclaimer-dialog.confirm-button-label"),type:"button",onClick:r,"data-test-id":"debit-disclaimer-dialog__confirm-button"})]})};Re.propTypes=we,Re.defaultProps=Pe;var De=(0,s.Z)("checkout")(Re),Se=n(44213);n(59920);function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ne(e,t,n[t])}))}return e}function qe(){var e,t=(0,i.useState)(!1),n=t[0],r=t[1],a=(0,l.v9)((function(e){return e.checkout})),c=(0,l.v9)((function(e){return e.address.location})).geoLocated,u=a.currentRestaurant,s=a[u].paymentMethod,d=(0,l.v9)((function(t){return null!==(e=(t.restaurant.paymentTypes.find((function(e){return e.localeKey===Se.mo}))||{}).options)&&void 0!==e?e:[]})),p=(0,l.I0)(),m=(0,N.$)("checkout").t,b=d.map((function(e){return f()(e,'gatewayOptions["ifood.gateway.debit.disclaimer"]')})).find((function(e){return void 0!==e}));return(0,o.jsxs)("div",{className:"online-payment",children:[b&&(0,o.jsxs)("p",{className:"online-payment__debit-disclaimer",children:["".concat(m("card-modal.debit-disclaimer")),(0,o.jsx)("button",{className:"online-payment__question-button","aria-label":m("card-modal.debit-disclaimer-button"),onClick:function(){r(!0)},type:"button",children:"?"})]}),(0,o.jsx)(xe,{paymentOptions:d,geoLocated:c,cardValidation:s.cardValidation||{},restaurantUuid:u,onCompletedForm:function(e){var t=e.paymentMethod,n=e.debit||!t.credit&&t.debit?t.debit:t.credit,r=Ie({},e.card,{paymentMethod:Ie({},n)});p((0,ue.Ci)(Ie({},e,{card:r})))}}),(0,o.jsx)(De,{isOpen:n,onRequestClose:function(){r(!1)},disclaimer:b})]})}qe.propTypes={},qe.defaultProps={};var Me=qe,Te=n(69729),Ze=n(91800),Ae=n(19198),Ee=n(19286),Fe=n(84340),Ve=n(85433),Be=n(63390);n(71300);function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Le(e,t,n[t])}))}return e}var ze={toggleCartShuffleModal:Te.n,unsetCheckoutRestaurant:p.Bt,setCheckoutRestaurant:p.x0,addCheckoutItem:p.J6,addCartItem:Ze._7,unsetCart:Ze.ni,setCartDeliveryMethod:Ze.CW,setMerchantDeliveryMethod:Ze.wd},$e={actions:(0,v.Z)(Object.keys(ze),c().func.isRequired).isRequired,currentRestaurant:c().string,isOpen:c().bool,newCart:c().object,checkoutDeliveryMethod:c().object},We={isOpen:!1,currentRestaurant:null,newCart:{},checkoutDeliveryMethod:void 0},Je=function(e){var t=e.isOpen,n=e.newCart,r=e.actions,i=e.currentRestaurant,a=e.checkoutDeliveryMethod,c=function(){return r.toggleCartShuffleModal({isOpen:!1,newCart:{}})},u=(0,Be.Z)(n.dish);return(0,o.jsx)(b.u_,{type:"dialog",animation:"bottom",onRequestClose:c,isOpen:t,displayActions:!0,closeIcon:"close",overlayClassName:"cart-shuffle-modal__overlay",children:(0,o.jsx)(Ae.Z,{onRequestClose:c,onAccept:function(){var e,t,o,l,s,d,f,p,m;r.unsetCheckoutRestaurant({restaurantId:i}),r.unsetCart(),r.setCheckoutRestaurant({restaurantId:n.restaurant.uuid,name:n.restaurant.details.name,restaurantSlug:n.restaurantSlug,details:n.restaurant.details,isDocumentRequired:n.restaurant.details.isDocumentRequired,charging:n.restaurant.details.charging,deliveryMethods:n.restaurant.deliveryMethods,scheduling:Ue({},n.restaurant.scheduling,{deliveryMethod:null!==a&&void 0!==a?a:null===(e=n.restaurant.scheduling)||void 0===e?void 0:e.deliveryMethod})}),r.setMerchantDeliveryMethod(null===(t=n.restaurant.scheduling)||void 0===t?void 0:t.deliveryMethod,n.restaurant.uuid);var b=Ue({},n.dish,{menuCode:null===(l=(0,Fe.H5)(n.restaurant.menu,null===(o=n.dish)||void 0===o?void 0:o.code))||void 0===l?void 0:l.code,qty:1,obs:"",restaurantId:n.restaurant.uuid,garnish:[],garnishForm:{},category:(0,Ee.n)(null===n||void 0===n||null===(s=n.restaurant)||void 0===s||null===(d=s.details)||void 0===d?void 0:d.type,null===n||void 0===n||null===(f=n.restaurant)||void 0===f||null===(p=f.details)||void 0===p||null===(m=p.mainCategory)||void 0===m?void 0:m.code),scalePrices:(0,Ve.Ru)({unitPrice:n.unitPrice,promotionalPrice:n.promotionalPrice,scalePrices:n.scalePrices}),isLowStock:u});r.addCheckoutItem(b),c()}})})};Je.propTypes=$e,Je.defaultProps=We;var Ke=(0,l.$j)((function(e){var t,n,r,o=e.cartShuffleModal,i=e.checkout;return{isOpen:o.isOpen,newCart:o.newCart,currentRestaurant:i.currentRestaurant,checkoutDeliveryMethod:null===(r=i[null===(t=o.newCart)||void 0===t||null===(n=t.restaurant)||void 0===n?void 0:n.uuid])||void 0===r?void 0:r.deliveryMethod}}),(function(e){return{actions:(0,u.DE)(ze,e)}}))(Je);n(89678)},43932:function(e,t,n){"use strict";var r=n(65100),o=n(32790),i=n.n(o),a=n(49927);function c(e){return!(e&&e.length>0&&e.length<=14)||function(e){if(void 0===e||""===e)return!1;var t=e.replace(/[^\d]+/g,"");if(11!==t.length||"00000000000"===t||"11111111111"===t||"22222222222"===t||"33333333333"===t||"44444444444"===t||"55555555555"===t||"66666666666"===t||"77777777777"===t||"88888888888"===t||"99999999999"===t)return!1;for(var n=0,r=0;r<9;r+=1)n+=parseInt(t.charAt(r),10)*(10-r);var o=11-n%11;if(10!==o&&11!==o||(o=0),o!==parseInt(t.charAt(9),10))return!1;n=0;for(var i=0;i<10;i+=1)n+=parseInt(t.charAt(i),10)*(11-i);return 10!==(o=11-n%11)&&11!==o||(o=0),o===parseInt(t.charAt(10),10)}(e)}t.ZP=function(e){switch(i().LOCALE){case a.Ng.locale:return(t=e)&&t.length>5&&t.length<=15;case a.bm.locale:default:return e&&e.length>14?function(e){return!(e&&e.length>0)||(0,r.Gu)(e)}(e):c(e)}var t}},6812:function(){},71300:function(){},61416:function(){},90804:function(){},72945:function(){},59920:function(){},51751:function(){},80786:function(){},94099:function(){},34096:function(){}}]);
//# sourceMappingURL=4450-dd3ab2662def2973.js.map
//# debugId=082e6df2-acd8-5e7e-8587-81fa01a15e61
