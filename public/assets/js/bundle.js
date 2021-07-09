(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r=document.querySelector(".modal-wrapper.pledge-options"),o=document.querySelector(".modal-wrapper.completed-pledge"),a=document.getElementById("close-completed-pledge"),i=(document.querySelectorAll("input[type='radio']"),document.querySelectorAll("input[type='number']")),l=document.querySelectorAll(".modal .card"),u=function(e){if("Escape"==e.key)return c.close()},c=function(){function t(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var c,f;return c=t,f=[{key:"open",value:function(){r.classList.add("on"),window.addEventListener("keydown",u)}},{key:"close",value:function(){r.classList.remove("on"),window.removeEventListener("keydown",u),function(){var e,t=n(i);try{for(t.s();!(e=t.n()).done;)e.value.value=""}catch(e){t.e(e)}finally{t.f()}}(),function(){var e,t=n(l);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.querySelector("input[type='radio']").checked=!1,r.classList.remove("selected")}}catch(e){t.e(e)}finally{t.f()}}()}},{key:"openCompletedPledgeModal",value:function(){o.classList.add("on"),a.addEventListener("click",t.closeCompletedPledgeModal)}},{key:"closeCompletedPledgeModal",value:function(){o.classList.remove("on"),a.removeEventListener("click",t.closeCompletedPledgeModal)}}],null&&e(c.prototype,null),f&&e(c,f),t}();function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y={totalPledgers:0,totalFund:0,fundOptions:[{name:"Suporte de Bambu",remainingDonates:150},{name:"Suporte Black Edition",remainingDonates:100}]},v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"getFundInfo",value:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},y)}},{key:"updateTotalPledgers",value:function(){y.totalPledgers+=1}},{key:"updateTotalFund",value:function(e){y.totalFund+=e}},{key:"updateFundOptions",value:function(e){y.fundOptions[e].remainingDonates-=1}}],null&&d(n.prototype,null),t&&d(n,t),e}();function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var g=document.getElementById("donate-form"),h=document.querySelectorAll("input[type='radio']"),w=document.querySelectorAll("input[type='number']"),S=document.querySelectorAll(".modal .card"),k=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"handleSubmit",value:function(){g.addEventListener("submit",(function(e){e.preventDefault();try{var n=document.querySelector(".modal .card.selected input[type='number']"),t=document.querySelector(".modal .card.selected .total-remaining span"),r=Number(n.value);if(function(e){if(!e)throw new Error("Valor inválido. Por favor, tente novamente.")}(r),t){var o=t.dataset.option;!function(e){if(0==v.getFundInfo().fundOptions[e].remainingDonates)throw new Error("Número limite de doações para esta opção atingido.")}(o),v.updateFundOptions(o)}v.updateTotalPledgers(),v.updateTotalFund(r),c.close(),c.openCompletedPledgeModal(),Q.reload()}catch(e){alert(e.message)}}))}},{key:"handleCardSelection",value:function(){var e,n=m(h);try{var t=function(){var n=e.value,t=Number(n.dataset.card);n.addEventListener("change",(function(e){!function(){var e,n=m(w);try{for(n.s();!(e=n.n()).done;)e.value.value=""}catch(e){n.e(e)}finally{n.f()}}();var n,r=m(S);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.dataset.card==t?o.classList.add("selected"):o.classList.remove("selected")}}catch(e){r.e(e)}finally{r.f()}}))};for(n.s();!(e=n.n()).done;)t()}catch(e){n.e(e)}finally{n.f()}}}],null&&p(n.prototype,null),t&&p(n,t),e}();function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function A(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=document.getElementById("total-fund"),j=document.getElementById("total-pledgers"),L=document.querySelector(".progress-bar"),I=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"updateFundInfo",value:function(){var e=v.getFundInfo(),n=Math.floor(100*e.totalFund/1e5);E.innerText=e.totalFund.toLocaleString("pt-br",{style:"currency",currency:"BRL"}),j.innerText=e.totalPledgers,L.style.width=n>=100?"100%":"".concat(n,"%")}},{key:"updateOptionsRemainingDonates",value:function(){var e,n=v.getFundInfo(),t=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}(document.querySelectorAll(".remaining-donates"));try{for(t.s();!(e=t.n()).done;){var r=e.value,o=r.dataset.option;r.innerText=n.fundOptions[o].remainingDonates}}catch(e){t.e(e)}finally{t.f()}}}],null&&A(n.prototype,null),t&&A(n,t),e}();function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=document.querySelectorAll(".card.non-static"),q=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"checkOptionState",value:function(){var e,n=v.getFundInfo(),t=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}(T);try{for(t.s();!(e=t.n()).done;){var r=e.value,o=r.querySelector('input[type="radio"'),a=r.querySelector("button"),i=Number(r.dataset.option);if(0==n.fundOptions[i].remainingDonates)return r.classList.add("out-of-stock"),a.setAttribute("disabled","disabled"),void(o&&o.setAttribute("disabled","disabled"));r.classList.remove("out-of-stock"),a.removeAttribute("disabled"),o&&o.removeAttribute("disabled")}}catch(e){t.e(e)}finally{t.f()}}}],null&&C(n.prototype,null),t&&C(n,t),e}();function F(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=document.querySelector("#page-header nav .menu"),B=document.getElementById("open-menu"),R=(document.getElementById("close-menu"),M.querySelectorAll("ul li a")),U=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"open",value:function(){M.classList.add("show"),B.classList.add("hide");var n,t=F(R);try{for(t.s();!(n=t.n()).done;)n.value.addEventListener("click",e.close)}catch(e){t.e(e)}finally{t.f()}}},{key:"close",value:function(){M.classList.remove("show"),B.classList.remove("hide");var n,t=F(R);try{for(t.s();!(n=t.n()).done;)n.value.removeEventListener("click",e.close)}catch(e){t.e(e)}finally{t.f()}}}],null&&x(n.prototype,null),t&&x(n,t),e}();function $(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=document.getElementById("open-menu"),V=document.getElementById("close-menu"),Y=document.getElementById("bookmark-project"),z=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"handleClicks",value:function(){window.addEventListener("click",(function(e){var n=e.target;return n.classList.contains("open-modal")?c.open():n.classList.contains("close-modal")?c.close():n==N?U.open():n==V?U.close():void 0})),Y.addEventListener("click",(function(e){e.preventDefault();var n=Y.querySelector("img"),t=Y.querySelector("span");if(Y.classList.contains("bookmarked"))return Y.classList.remove("bookmarked"),n.src="./assets/images/icon-bookmark.svg",void(t.innerText="Marcar");Y.classList.add("bookmarked"),n.src="./assets/images/icon-bookmarked.svg",t.innerText="Marcado"}))}}],null&&$(n.prototype,null),t&&$(n,t),e}();function G(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=document.querySelector(".back-to-top"),J=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"handleScroll",value:function(){window.addEventListener("scroll",(function(e){window.scrollY>=200?H.classList.add("show"):H.classList.remove("show")}))}}],null&&G(n.prototype,null),t&&G(n,t),e}();function K(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"init",value:function(){I.updateFundInfo(),I.updateOptionsRemainingDonates(),q.checkOptionState(),k.handleCardSelection(),k.handleSubmit(),z.handleClicks(),J.handleScroll()}},{key:"reload",value:function(){I.updateFundInfo(),I.updateOptionsRemainingDonates(),q.checkOptionState()}}],null&&K(n.prototype,null),t&&K(n,t),e}();ScrollReveal({origin:"top",distance:"30px",duration:700,reset:!0}).reveal("#product-info h3, #product-info p, #product-info .btn-group,\n  #fund-info .text-container .text,\n  #fund-options header h2, #fund-options header p, #fund-options .card",{interval:100}),Q.init()})();
//# sourceMappingURL=bundle.js.map