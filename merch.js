(()=>{var e={785:(e,t,n)=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=n.nmd(e),function(t,n){var r=function(e,t,n){"use strict";var o,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var i,a,u,c,s,l,d,f,m,v,y,p,g,b,h,_,z,E,A,L,S,x,C,k,N,w,M,q,O,T,W,I,B,F,P,D,j,R,U,H,$,G,V,K,J=t.documentElement,Q=e.HTMLPictureElement,X="addEventListener",Y=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,ne=/^picture$/i,oe=["load","error","lazyincluded","_lazyloaded"],re={},ie=Array.prototype.forEach,ae=function(e,t){return re[t]||(re[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),re[t].test(e.getAttribute("class")||"")&&re[t]},ue=function(e,t){ae(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},ce=function(e,t){var n;(n=ae(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},se=function e(t,n,o){var r=o?X:"removeEventListener";o&&e(t,n),oe.forEach((function(e){t[r](e,n)}))},le=function(e,n,r,i,a){var u=t.createEvent("Event");return r||(r={}),r.instance=o,u.initEvent(n,!i,!a),u.detail=r,e.dispatchEvent(u),u},de=function(t,n){var o;!Q&&(o=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),o({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},me=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ve=($=[],G=H=[],(K=function(e,n){R&&!n?e.apply(this,arguments):(G.push(e),U||(U=!0,(t.hidden?Z:ee)(V)))})._lsFlush=V=function(){var e=G;for(G=H.length?$:H,R=!0,U=!1;e.length;)e.shift()();R=!1},K),ye=function(e,t){return t?function(){ve(e)}:function(){var t=this,n=arguments;ve((function(){e.apply(t,n)}))}},pe=function(e){var t,o,r=function(){t=null,e()},i=function e(){var t=n.now()-o;t<99?Z(e,99-t):(te||r)(r)};return function(){o=n.now(),t||(t=Z(i,99))}},ge=(z=/^img$/i,E=/^iframe$/i,A="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,L=0,S=0,x=-1,C=function(e){S--,(!e||S<0||!e.target)&&(S=0)},k=function(e){return null==_&&(_="hidden"==fe(t.body,"visibility")),_||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},N=function(e,n){var o,r=e,i=k(e);for(p-=n,h+=n,g-=n,b+=n;i&&(r=r.offsetParent)&&r!=t.body&&r!=J;)(i=(fe(r,"opacity")||1)>0)&&"visible"!=fe(r,"overflow")&&(o=r.getBoundingClientRect(),i=b>o.left&&g<o.right&&h>o.top-1&&p<o.bottom+1);return i},M=function(e){var t,o=0,i=r.throttleDelay,a=r.ricTimeout,u=function(){t=!1,o=n.now(),e()},c=te&&a>49?function(){te(u,{timeout:a}),a!==r.ricTimeout&&(a=r.ricTimeout)}:ye((function(){Z(u)}),!0);return function(e){var r;(e=!0===e)&&(a=33),t||(t=!0,(r=i-(n.now()-o))<0&&(r=0),e||r<9?c():Z(c,r))}}(w=function(){var e,n,i,a,u,c,d,m,z,E,C,w,M=o.elements;if((f=r.loadMode)&&S<8&&(e=M.length)){for(n=0,x++;n<e;n++)if(M[n]&&!M[n]._lazyRace)if(!A||o.prematureUnveil&&o.prematureUnveil(M[n]))F(M[n]);else if((m=M[n].getAttribute("data-expand"))&&(c=1*m)||(c=L),E||(E=!r.expand||r.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:r.expand,o._defEx=E,C=E*r.expFactor,w=r.hFac,_=null,L<C&&S<1&&x>2&&f>2&&!t.hidden?(L=C,x=0):L=f>1&&x>1&&S<6?E:0),z!==c&&(v=innerWidth+c*w,y=innerHeight+c,d=-1*c,z=c),i=M[n].getBoundingClientRect(),(h=i.bottom)>=d&&(p=i.top)<=y&&(b=i.right)>=d*w&&(g=i.left)<=v&&(h||b||g||p)&&(r.loadHidden||k(M[n]))&&(l&&S<3&&!m&&(f<3||x<4)||N(M[n],c))){if(F(M[n]),u=!0,S>9)break}else!u&&l&&!a&&S<4&&x<4&&f>2&&(s[0]||r.preloadAfterLoad)&&(s[0]||!m&&(h||b||g||p||"auto"!=M[n].getAttribute(r.sizesAttr)))&&(a=s[0]||M[n]);a&&!u&&F(a)}}),O=ye(q=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(C(e),ue(t,r.loadedClass),ce(t,r.loadingClass),se(t,T),le(t,"lazyloaded"))}),T=function(e){O({target:e.target})},W=function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},I=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},B=ye((function(e,t,n,o,i){var a,u,c,s,l,f;(l=le(e,"lazybeforeunveil",t)).defaultPrevented||(o&&(n?ue(e,r.autosizesClass):e.setAttribute("sizes",o)),u=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),i&&(s=(c=e.parentNode)&&ne.test(c.nodeName||"")),f=t.firesLoad||"src"in e&&(u||a||s),l={target:e},ue(e,r.loadingClass),f&&(clearTimeout(d),d=Z(C,2500),se(e,T,!0)),s&&ie.call(c.getElementsByTagName("source"),I),u?e.setAttribute("srcset",u):a&&!s&&(E.test(e.nodeName)?W(e,a):e.src=a),i&&(u||s)&&de(e,{src:a})),e._lazyRace&&delete e._lazyRace,ce(e,r.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ue(e,r.fastLoadedClass),q(l),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&S--}),!0)})),F=function(e){if(!e._lazyRace){var t,n=z.test(e.nodeName),o=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),i="auto"==o;(!i&&l||!n||!e.getAttribute("src")&&!e.srcset||e.complete||ae(e,r.errorClass)||!ae(e,r.lazyClass))&&(t=le(e,"lazyunveilread").detail,i&&be.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,S++,B(e,t,i,o,n))}},P=pe((function(){r.loadMode=3,M()})),j=function e(){l||(n.now()-m<999?Z(e,999):(l=!0,r.loadMode=3,M(),Y("scroll",D,!0)))},{_:function(){m=n.now(),o.elements=t.getElementsByClassName(r.lazyClass),s=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),Y("scroll",M,!0),Y("resize",M,!0),Y("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&ee((function(){n.forEach((function(e){e.complete&&F(e)}))}))}})),e.MutationObserver?new MutationObserver(M).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J.addEventListener("DOMNodeInserted",M,!0),J.addEventListener("DOMAttrModified",M,!0),setInterval(M,999)),Y("hashchange",M,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,M,!0)})),/d$|^c/.test(t.readyState)?j():(Y("load",j),t.addEventListener("DOMContentLoaded",M),Z(j,2e4)),o.elements.length?(w(),ve._lsFlush()):M()},checkElems:M,unveil:F,_aLSL:D=function(){3==r.loadMode&&(r.loadMode=2),P()}}),be=(a=ye((function(e,t,n,o){var r,i,a;if(e._lazysizesWidth=o,o+="px",e.setAttribute("sizes",o),ne.test(t.nodeName||""))for(i=0,a=(r=t.getElementsByTagName("source")).length;i<a;i++)r[i].setAttribute("sizes",o);n.detail.dataAttr||de(e,n.detail)})),u=function(e,t,n){var o,r=e.parentNode;r&&(n=me(e,r,n),(o=le(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=o.detail.width)&&n!==e._lazysizesWidth&&a(e,r,o,n))},{_:function(){i=t.getElementsByClassName(r.autosizesClass),Y("resize",c)},checkElems:c=pe((function(){var e,t=i.length;if(t)for(e=0;e<t;e++)u(i[e])})),updateElem:u}),he=function e(){!e.i&&t.getElementsByClassName&&(e.i=!0,be._(),ge._())};return Z((function(){r.init&&he()})),o={cfg:r,autoSizer:be,loader:ge,init:he,uP:de,aC:ue,rC:ce,hC:ae,fire:le,gW:me,rAF:ve}}(t,t.document,Date);t.lazySizes=r,"object"==o(e)&&e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},212:(e,t,n)=>{var o,r,i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=n.nmd(e),function(u,c){c=c.bind(null,u,u.document),"object"==a(e)&&e.exports?c(n(785)):(r=[n(785)],void 0===(i="function"==typeof(o=c)?o.apply(t,r):o)||(e.exports=i))}(window,(function(e,t,n){"use strict";var o="loading"in HTMLImageElement.prototype,r="loading"in HTMLIFrameElement.prototype,i=!1,u=n.prematureUnveil,c=n.cfg,s={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};c.nativeLoading||(c.nativeLoading={}),e.addEventListener&&e.MutationObserver&&(o||r)&&(n.prematureUnveil=function(l){return i||(i||(i=!0,o&&r&&c.nativeLoading.disableListeners&&(!0===c.nativeLoading.disableListeners&&(c.nativeLoading.setLoadingAttribute=!0),d=n.loader,f=d.checkElems,m=function(){setTimeout((function(){e.removeEventListener("scroll",d._aLSL,!0)}),1e3)},(v="object"==a(c.nativeLoading.disableListeners)?c.nativeLoading.disableListeners:s).scroll&&(e.addEventListener("load",m),m(),e.removeEventListener("scroll",f,!0)),v.resize&&e.removeEventListener("resize",f,!0),Object.keys(v).forEach((function(e){v[e]&&t.removeEventListener(e,f,!0)}))),c.nativeLoading.setLoadingAttribute&&e.addEventListener("lazybeforeunveil",(function(e){var t=e.target;"loading"in t&&!t.getAttribute("loading")&&t.setAttribute("loading","lazy")}),!0))),!(!("loading"in l)||!c.nativeLoading.setLoadingAttribute&&!l.getAttribute("loading")||"auto"==l.getAttribute("data-sizes")&&!l.offsetWidth)||(u?u(l):void 0);var d,f,m,v})}))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o](r,r.exports,n),r.loaded=!0,r.exports}n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/daniel-naroditsky/",(()=>{"use strict";const e=n.p+"src/images/favicon_package_v0.16/favicon-32x32.png",t=n.p+"src/images/favicon_package_v0.16/favicon-16x16.png",o=n.p+"src/images/favicon_package_v0.16/safari-pinned-tab.svg",r=n.p+"src/images/favicon_package_v0.16/apple-touch-icon.png";var i=document.querySelector('link[rel="apple-touch-icon"]'),a=document.querySelector('link[rel="icon"][sizes="16x16"]'),u=document.querySelector('link[rel="icon"][sizes="32x32"]'),c=document.querySelector('link[rel="mask-icon"]'),s=document.querySelector(".page__background"),l=document.querySelector('.nav__items:not([role="dialog"])'),d=document.querySelector('.nav__items[role="dialog"]'),f=document.querySelector(".nav__btn_icon_menu"),m=l.querySelector(".nav__btn_icon_exit"),v=d.querySelector(".nav__btn_icon_exit"),y=Array.from(d.querySelectorAll(".nav__link"));Array.from(document.querySelectorAll(".videos__list_group_new .video")),Array.from(document.querySelectorAll(".videos__list_group_popular .video")),i.href=r,a.href=t,u.href=e,c.href=o;var p=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},g=function(e){return Array.isArray(e)?e:[e]},b=function(e,t){var n=e.tabIndex-t.tabIndex,o=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||o},h=function(e,t,n){return p(e).map((function(e,t){return{node:e,index:t,tabIndex:n&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!t||e.tabIndex>=0})).sort(b)};const _=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"];var z=_.join(","),E=z+", [data-focus-guard]",A=function(e,t){return e.reduce((function(e,n){return e.concat(p(n.querySelectorAll(t?E:z)),n.parentNode?p(n.parentNode.querySelectorAll(_.join(","))).filter((function(e){return e===n})):[])}),[])},L=function e(t){return!t||t===document||t.nodeType===Node.DOCUMENT_NODE||!((n=window.getComputedStyle(t,null))&&n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility")))&&e(t.parentNode);var n},S=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.push(t),t.parentNode&&e(t.parentNode,n),n},x=function(e,t){for(var n=S(e),o=S(t),r=0;r<n.length;r+=1){var i=n[r];if(o.indexOf(i)>=0)return i}return!1},C=function(e){return p(e).filter((function(e){return L(e)})).filter((function(e){return function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))}(e)}))},k=function(e,t){return h(C(A(e,t)),!0,t)},N=function(e){return"INPUT"===e.tagName&&"radio"===e.type},w=function(e,t){return t.filter(N).filter((function(t){return t.name===e.name})).filter((function(e){return e.checked}))[0]||e},M=function(e,t){return e.length>1&&N(e[t])&&e[t].name?e.indexOf(w(e[t],e)):t};const q=function(e){return e[0]&&e.length>1&&N(e[0])&&e[0].name?w(e[0],e):e[0]};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T="function"==typeof Symbol&&"symbol"===O(Symbol.iterator)?function(e){return O(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":O(e)},W=function e(t){for(var n=t.length,o=0;o<n;o+=1)for(var r=function(n){if(o!==n&&t[o].contains(t[n]))return{v:e(t.filter((function(e){return e!==t[n]})))}},i=0;i<n;i+=1){var a=r(i);if("object"===(void 0===a?"undefined":T(a)))return a.v}return t},I=function e(t){return t.parentNode?e(t.parentNode):t};const B=function(e){return g(e).filter(Boolean).reduce((function(e,t){var n=t.getAttribute("data-focus-lock");return e.push.apply(e,n?W(p(I(t).querySelectorAll('[data-focus-lock="'+n+'"]:not([data-focus-lock-disabled="disabled"])'))):[t]),e}),[])};var F=function(e){return e&&e.dataset&&e.dataset.focusGuard},P=function(e){return!F(e)};const D=function(e,t){var n=document&&document.activeElement,o=B(e).filter(P),r=function(e,t,n){var o=g(e),r=g(t),i=o[0],a=null;return r.filter(Boolean).forEach((function(e){a=x(a||e,e)||a,n.filter(Boolean).forEach((function(e){var t=x(i,e);t&&(a=!a||t.contains(a)?t:x(t,a))}))})),a}(n||e,e,o),i=k(o).filter((function(e){var t=e.node;return P(t)}));if(i[0]||(i=(a=o,h(C(A(a)),!1)).filter((function(e){var t=e.node;return P(t)})))[0]){var a,u,c,s,l,d=k([r]).map((function(e){return e.node})),f=(u=d,c=i,s=new Map,c.forEach((function(e){return s.set(e.node,e)})),u.map((function(e){return s.get(e)})).filter(Boolean)),m=f.map((function(e){return e.node})),v=function(e,t,n,o,r){var i=e.length,a=e[0],u=e[i-1],c=F(n);if(!(e.indexOf(n)>=0)){var s=t.indexOf(n),l=t.indexOf(o||s),d=e.indexOf(o),f=s-l,m=t.indexOf(a),v=t.indexOf(u),y=M(e,0),p=M(e,i-1);return-1===s||-1===d?e.indexOf(r&&r.length?q(r):q(e)):!f&&d>=0?d:s<=m&&c&&Math.abs(f)>1?p:s>=m&&c&&Math.abs(f)>1?y:f&&Math.abs(f)>1?d:s<=m?p:s>v?y:f?Math.abs(f)>1?d:(i+d+f)%i:void 0}}(m,d,n,t,m.filter((l=function(e){return e.reduce((function(e,t){return e.concat(function(e){return C((t=e.querySelectorAll("[data-autofocus-inside]"),p(t).map((function(e){return A([e])})).reduce((function(e,t){return e.concat(t)}),[])));var t}(t))}),[])}(o),function(e){return!!e.autofocus||e.dataset&&!!e.dataset.autofocus||l.indexOf(e)>=0})));return void 0===v?v:f[v]}};var j=0,R=!1;var U=function(e){return e===document.activeElement};var H=0,$=null,G=function(){return document&&document.activeElement===document.body||document&&p(document.querySelectorAll("[data-no-focus-lock]")).some((function(e){return e.contains(document.activeElement)}))},V=function(e){H=e,e&&function(){var e,t;if(H){var n=H;G()||(n&&(e=n,!(!(!(t=document&&document.activeElement)||t.dataset&&t.dataset.focusGuard)&&B(e).reduce((function(e,n){return e||n.contains(t)||function(e){return t=p(e.querySelectorAll("iframe")),n=U,!!t.filter((function(e){return e===n}))[0];var t,n}(n)}),!1)))&&function(e,t){var n,o=D(e,t);if(!R&&o){if(j>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),R=!0,void setTimeout((function(){R=!1}),1);j++,(n=o.node).focus(),n.contentWindow&&n.contentWindow.focus(),j--}}(n,$),$=document.activeElement)}}()},K=[],J=function(e){return!!V((t=K,t.filter((function(e){return e})).slice(-1)[0]))&&(e&&e.preventDefault(),!0);var t};const Q=function(e){0===K.length&&document.addEventListener("focusin",J),K.indexOf(e)<0&&(K.push(e),J())},X=function(e){K=K.filter((function(t){return t!==e})),J(),0===K.length&&document.removeEventListener("focusin",J)};function Y(e){var t=e.target,n=t.classList.contains("la-bars")||t.classList.contains("nav__btn_icon_menu");t.closest(".nav__items")||n||ee()}function Z(){var e=document.activeElement,t=e.classList.contains("la-bars")||e.classList.contains("nav__btn_icon_menu");e.closest(".nav__items")||t||ee()}function ee(){document.body.clientWidth<768?(d.classList.remove("nav__items_show"),X(d)):(l.classList.remove("nav__items_show"),s.removeEventListener("keyup",Z),s.removeEventListener("click",Y))}f.addEventListener("click",(function(){document.body.clientWidth<768?(d.classList.add("nav__items_show"),Q(d)):(l.classList.add("nav__items_show"),s.addEventListener("keyup",Z),s.addEventListener("click",Y))})),m.addEventListener("click",ee),v.addEventListener("click",ee),y.forEach((function(e){e.addEventListener("click",ee)})),n(785),n(212)})()})();