"use strict";(self.webpackChunk_deathbeds_ipydrawio=self.webpackChunk_deathbeds_ipydrawio||[]).push([[170],{609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},62:(e,t,n)=>{var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var u=a(c),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:c,updater:v(f,t),references:1}),i.push(c)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(e,t){var n,i,r;if(t.singleton){var o=m++;n=h||(h=l(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=l(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);o[r].references--}for(var l=s(e,t),d=0;d<n.length;d++){var c=a(n[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=l}}}},527:(e,t,n)=>{n.r(t),n.d(t,{MIME_CLASS:()=>l,extensions:()=>d,default:()=>c,RenderedDiagram:()=>u});var i=n(706),r=n(656),o=n(97),a=n(649),s=n(83);const l="jp-DiagramMedia",d=r.WY.map((e=>{const{name:t}=e;return{id:`${o.NS}:rendermime-${t}`,name:t,rendererFactory:{safe:!0,mimeTypes:[e.mimetype],createRenderer:t=>(o.eM&&console.error("creating renderer"),new u(Object.assign(Object.assign({},t),{format:e})))},dataType:"string"}})),c=d;class u extends i.Panel{constructor(e){super(),this.initialized=!1,this.addClass(l),this.format=e.format,this.content=new a.S({adapter:{format:()=>this.format,urlParams:()=>{var e,t,n;let i={};const{manager:r}=u;null!=r&&(i=(null===(t=null===(e=r.settings)||void 0===e?void 0:e.composite)||void 0===t?void 0:t.drawioUrlParams)||{});const o=((null===(n=this.lastModel)||void 0===n?void 0:n.metadata)[this.format.mimetype]||{}).drawioUrlParams;return null!=o&&(i=Object.assign(Object.assign({},i),o)),i},drawioUrl:()=>s.DRAWIO_URL,saveNeedsExport:()=>{var e;return(null===(e=this.format)||void 0===e?void 0:e.isTransformed)||!0},drawioConfig:()=>{var e,t,n;let i={};const{manager:r}=u;null!=r&&(i=(null===(t=null===(e=r.settings)||void 0===e?void 0:e.composite)||void 0===t?void 0:t.drawioConfig)||{});const o=((null===(n=this.lastModel)||void 0===n?void 0:n.metadata)[this.format.mimetype]||{}).drawioConfig;return null!=o&&(i=Object.assign(Object.assign({},i),o)),i},toXML:()=>{var e;return null==this.lastModel?"":(null===(e=this.lastModel.data[this.format.mimetype])||void 0===e?void 0:e.toString())||""},fromXML:()=>{}}}),this.layout.addWidget(this.content)}onAfterShow(){this.initialized||(this.content.onAfterShow(),this.initialized=!0),this.content.onContentChanged()}async renderModel(e){const t=e.metadata||{},n=t?t[this.format.mimetype]:null;if(null!=n){const e=n.height?`${n.height}`:"";this.node.style.minHeight=e}this.lastModel=e,this.initialized?this.content.onContentChanged():this.isVisible?this.onAfterShow():setTimeout((()=>this.onAfterShow()),100)}}}}]);