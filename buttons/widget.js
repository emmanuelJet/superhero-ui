!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([,function(t,e){document.addEventListener("DOMContentLoaded",(function(t){for(var e=document.querySelectorAll("a.superhero-tip-button"),r=[],n=0;n<e.length;n++){var o=e[n].getAttribute("data-size")?e[n].getAttribute("data-size"):"icon",u=e[n].getAttribute("data-href")?e[n].getAttribute("data-href"):window.location.href,i=e[n].getAttribute("data-account"),a=document.createElement("iframe");a.src="https://superhero.com/buttons/v1/"+o+"?url="+u,a.setAttribute("style","max-width:210px;max-height:120px;overflow:hidden;"),a.setAttribute("scrolling","no"),a.setAttribute("frameborder","0"),a.className="superhero-tip-button",i&&a.setAttribute("data-account",i),r[n]=a}for(var c in r)document.querySelectorAll("a.superhero-tip-button")[0].replaceWith(r[c])}))}]);