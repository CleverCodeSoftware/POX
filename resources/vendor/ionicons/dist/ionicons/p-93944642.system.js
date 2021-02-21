var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{o(n.next(e))}catch(t){i(t)}}function s(e){try{o(n["throw"](e))}catch(t){i(t)}}function o(e){e.done?r(e.value):a(e.value).then(l,s)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return o([e,t])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(s){l=[6,s];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","ionicons");var a;var i;var l=false;var s=0;var o=false;var f=e("w",typeof window!=="undefined"?window:{});var u=e("C",f.CSS);var $=e("d",f.document||{head:{}});var c=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}});var v=function(){return($.head.attachShadow+"").indexOf("[native")>-1}();var h=e("a",(function(e){return Promise.resolve(e)}));var d=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var m=function(e,t){if(t===void 0){t=""}{return function(){return}}};var g=function(e,t){{return function(){return}}};var y=new WeakMap;var w=function(e,t,r){var n=ye.get(e);if(d&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}ye.set(e,n)};var b=function(e,t,r,n){var a=_(t);var i=ye.get(a);e=e.nodeType===11?e:$;if(i){if(typeof i==="string"){e=e.head||e;var l=y.get(e);var s=void 0;if(!l){y.set(e,l=new Set)}if(!l.has(a)){{if(c.$cssShim$){s=c.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var o=s["s-sc"];if(o){a=o;l=null}}else{s=$.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=m("attachStyles",t.$tagName$);var i=b(v&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var _=function(e,t){return"sc-"+e.$tagName$};var R={};var x=function(e){return e!=null};var C=function(e){e=typeof e;return e==="object"||e==="function"};var N=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var l=false;var s=[];var o=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&l){s[s.length-1].$text$+=a}else{s.push(i?E(null,a):a)}l=i}}};o(r);if(t){{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=E(e,null);u.$attrs$=t;if(s.length>0){u.$children$=s}return u}));var E=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var M=e("H",{});var j=function(e){return e&&e.$tag$===M};var k=function(e,t,r,n,a,i){if(r!==n){var l=de(e,t);var s=t.toLowerCase();if(t==="class"){var o=e.classList;var f=P(r);var u=P(n);o.remove.apply(o,f.filter((function(e){return e&&!u.includes(e)})));o.add.apply(o,u.filter((function(e){return e&&!f.includes(e)})))}else{var $=C(n);if((l||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(v){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!$){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var A=/\s/;var P=function(e){return!e?[]:e.split(A)};var T=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||R;var l=t.$attrs$||R;{for(n in i){if(!(n in l)){k(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){k(a,n,i[n],l[n],r,t.$flags$)}};var L=function(e,t,r,n){var i=t.$children$[r];var s=0;var o;var f;if(i.$text$!==null){o=i.$elm$=$.createTextNode(i.$text$)}else{o=i.$elm$=$.createElement(i.$tag$);{T(null,i,l)}if(x(a)&&o["s-si"]!==a){o.classList.add(o["s-si"]=a)}if(i.$children$){for(s=0;s<i.$children$.length;++s){f=L(e,i,s);if(f){o.appendChild(f)}}}}return o};var O=function(e,t,r,n,a,l){var s=e;var o;if(s.shadowRoot&&s.tagName===i){s=s.shadowRoot}for(;a<=l;++a){if(n[a]){o=L(null,r,a);if(o){n[a].$elm$=o;s.insertBefore(o,t)}}}};var I=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var U=function(e,t,r,n){var a=0;var i=0;var l=t.length-1;var s=t[0];var o=t[l];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=l&&i<=f){if(s==null){s=t[++a]}else if(o==null){o=t[--l]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(z(s,u)){B(s,u);s=t[++a];u=n[++i]}else if(z(o,$)){B(o,$);o=t[--l];$=n[--f]}else if(z(s,$)){B(s,$);e.insertBefore(s.$elm$,o.$elm$.nextSibling);s=t[++a];$=n[--f]}else if(z(o,u)){B(o,u);e.insertBefore(o.$elm$,s.$elm$);o=t[--l];u=n[++i]}else{{c=L(t&&t[i],r,i);u=n[++i]}if(c){{s.$elm$.parentNode.insertBefore(c,s.$elm$)}}}}if(a>l){O(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){I(t,a,l)}};var z=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var B=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$text$;if(i===null){{{T(e,t,l)}}if(n!==null&&a!==null){U(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}O(r,null,t,a,0,a.length-1)}else if(n!==null){I(n,0,n.length-1)}}else if(e.$text$!==i){r.data=i}};var H=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var l=e.$vnode$||E(null,null);var s=j(t)?t:N(null,null,t);i=r.tagName;if(n.$attrsToReflect$){s.$attrs$=s.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return s.$attrs$[n]=r[t]}))}s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=l.$elm$=r.shadowRoot||r;{a=r["s-sc"]}B(l,s)};var V=e("c",(function(e){return ce(e).$hostElement$}));var q=function(e,t,r){var n=new CustomEvent(t,r);e.dispatchEvent(n);return n};var W=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var F=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}W(e,e.$ancestorComponent$);var r=function(){return G(e,t)};return Ee(r)};var G=function(e,t){var r=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;r();return Z(a,(function(){return Q(e,n,t)}))};var Q=function(e,t,r){var n=e.$hostElement$;var a=m("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){S(e)}var l=m("render",e.$cmpMeta$.$tagName$);{{H(e,D(e,t))}}if(c.$cssShim$){c.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}l();a();{var s=n["s-p"];var o=function(){return J(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}};var D=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){pe(r)}return t};var J=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=m("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ee(r)}n();{e.$onReadyResolve$(r);if(!a){X()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ne((function(){return F(e,false)}))}e.$flags$&=~(4|512)}};var K=function(e){{var t=ce(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){F(t,false)}return r}};var X=function(e){{ee($.documentElement)}{c.$flags$|=2}Ne((function(){return q(f,"appload",{detail:{namespace:n}})}))};var Y=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){pe(n)}}return undefined};var Z=function(e,t){return e&&e.then?e.then(t):t()};var ee=function(e){return e.classList.add("hydrated")};var te=function(e,t){if(e!=null&&!C(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var re=function(e,t){return ce(e).$instanceValues$.get(t)};var ne=function(e,t,r,n){var a=ce(e);var i=a.$instanceValues$.get(t);var l=a.$flags$;var s=a.$lazyInstance$;r=te(r,n.$members$[t][0]);if((!(l&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(s){if(n.$watchers$){if(l&128){var o=n.$watchers$[t];if(o){o.map((function(e){try{s[e](r,i,t)}catch(n){pe(n)}}))}}}if((l&(2|16))===2){F(a,false)}}}};var ae=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return re(this,n)},set:function(e){ne(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;c.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ie=function(e,n,a,i,l){return __awaiter(r,void 0,void 0,(function(){var e,r,i,s,o,f,u;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;l=ge(a);if(!l.then)return[3,2];e=g();return[4,l];case 1:l=$.sent();e();$.label=2;case 2:if(!l.isProxied){{a.$watchers$=l.watchers}ae(l,a,2);l.isProxied=true}r=m("createInstance",a.$tagName$);{n.$flags$|=8}try{new l(n)}catch(c){pe(c)}{n.$flags$&=~8}{n.$flags$|=128}r();le(n.$lazyInstance$);if(!l.style)return[3,5];i=l.style;s=_(a);if(!!ye.has(s))return[3,5];o=m("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-9ca7810c.system.js").then((function(e){return e.scopeCss(i,s,false)}))];case 3:i=$.sent();$.label=4;case 4:w(s,i,!!(a.$flags$&1));o();$.label=5;case 5:f=n.$ancestorComponent$;u=function(){return F(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var le=function(e){{Y(e,"connectedCallback")}};var se=function(e){if((c.$flags$&1)===0){var t=ce(e);var r=t.$cmpMeta$;var n=m("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){W(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Ne((function(){return ie(e,t,r)}))}}else{le(t.$lazyInstance$)}n()}};var oe=function(e){if((c.$flags$&1)===0){var t=ce(e);var r=t.$lazyInstance$;if(c.$cssShim$){c.$cssShim$.removeHost(e)}{Y(r,"disconnectedCallback")}}};var fe=e("b",(function(e,t){if(t===void 0){t={}}var r=m();var n=[];var a=t.exclude||[];var i=f.customElements;var l=$.head;var s=l.querySelector("meta[charset]");var o=$.createElement("style");var u=[];var h;var d=true;Object.assign(c,t);c.$resourcesUrl$=new URL(t.resourcesUrl||"./",$.baseURI).href;{if(t.syncQueue){c.$flags$|=4}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!v&&r.$flags$&1){r.$flags$|=8}var l=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;he(t,r);if(r.$flags$&1){if(v){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){u.push(this)}else{c.jmp((function(){return se(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return oe(e)}))};t.prototype.forceUpdate=function(){K(this)};t.prototype.componentOnReady=function(){return ce(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ae(s,r,1))}}))}));{o.innerHTML=n+p;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}d=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{c.jmp((function(){return h=setTimeout(X,30)}))}}r()}));var ue=e("g",(function(e){var t=new URL(e,c.$resourcesUrl$);return t.origin!==f.location.origin?t.href:t.pathname}));var $e=new WeakMap;var ce=function(e){return $e.get(e)};var ve=e("r",(function(e,t){return $e.set(t.$lazyInstance$=e,t)}));var he=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return $e.set(e,r)};var de=function(e,t){return t in e};var pe=function(e){return console.error(e)};var me=new Map;var ge=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=me.get(i);if(l){return l[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{me.set(i,e)}return e[a]}),pe)};var ye=new Map;var we=[];var be=[];var Se=[];var _e=function(e,t){return function(r){e.push(r);if(!o){o=true;if(t&&c.$flags$&4){Ne(Ce)}else{c.raf(Ce)}}}};var Re=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){pe(r)}}e.length=0};var xe=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){pe(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var Ce=function(){{s++}Re(we);{var e=(c.$flags$&6)===2?performance.now()+14*Math.ceil(s*(1/10)):Infinity;xe(be,e);xe(Se,e);if(be.length>0){Se.push.apply(Se,be);be.length=0}if(o=we.length+be.length+Se.length>0){c.raf(Ce)}else{s=0}}};var Ne=function(e){return h().then(e)};var Ee=_e(be,true)}}}));