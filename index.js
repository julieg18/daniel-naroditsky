(()=>{"use strict";var e="/daniel-naroditsky/";const t=e+"src/images/favicon_package_v0.16/favicon-32x32.png",n=e+"src/images/favicon_package_v0.16/favicon-16x16.png",o=e+"src/images/favicon_package_v0.16/safari-pinned-tab.svg",i=e+"src/images/favicon_package_v0.16/apple-touch-icon.png";var c=document.querySelector('link[rel="apple-touch-icon"]'),a=document.querySelector('link[rel="icon"][sizes="16x16"]'),r=document.querySelector('link[rel="icon"][sizes="32x32"]'),s=document.querySelector('link[rel="mask-icon"]'),u=document.querySelector(".page__background"),d=document.querySelector(".nav__btn_icon_menu"),l=document.querySelector(".nav__btn_icon_exit"),v=document.querySelector(".nav__items"),_=Array.from(document.querySelectorAll(".nav__link")),m=Array.from(document.querySelectorAll(".videos__list_group_new .video")),f=Array.from(document.querySelectorAll(".videos__list_group_popular .video"));function p(e){l.tabIndex.toString()!==e.toString()&&(_.forEach((function(t){t.tabIndex=e})),l.tabIndex=e)}function h(e){var t=e.target,n=t.classList.contains("la-bars")||t.classList.contains("nav__btn_icon_menu"),o=t===v||v.contains(t),i=t.classList.contains("nav__link");(!n&&!o||i)&&g()}function g(){v.classList.remove("nav__items_show"),u.removeEventListener("click",h),p(-1)}function y(){v.classList.contains("nav__items_show")||p(document.body.offsetWidth<1024?-1:0)}function w(e){var t=e.url;return fetch(t).then((function(e){return e.ok?e.json():Promise.reject(new Error("Err: ".concat(e.status)))}))}function k(e){e.forEach((function(e){e.classList.add("video_failed")}))}function b(e){var t=e.list,n=e.video,o=n.videoId,i=n.title,c=e.index,a=document.querySelector("#video__ytplayer").content.cloneNode(!0).querySelector(".video__ytplayer");a.src=function(e){return"https://www.youtube.com/embed/".concat(e)}(o),a.srcdoc=function(e){var t=e.videoId,n=e.title;return"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/".concat(t,"?autoplay=1><img src=https://img.youtube.com/vi/").concat(t,"/hqdefault.jpg alt='").concat(n,"'><span>▶</span></a>")}({videoId:o,title:i}),a.title=i,t[c].append(a)}c.href=i,a.href=n,r.href=t,s.href=o,y(),d.addEventListener("click",(function(){v.classList.add("nav__items_show"),u.addEventListener("click",h),p(0)})),l.addEventListener("click",g),window.addEventListener("resize",y),w({url:"https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyCMJE-BJQ4OnG25T5y_nue_lxeoUSjed7k","&channelId=").concat("UCHP9CdeguNUI-_nBv_UXBhw","&part=snippet,id&maxResults=5&order=date")}).then((function(e){return e.items.map((function(e){var t=e.id.videoId;return{title:e.snippet.title,videoId:t}}))})).then((function(e){e.forEach((function(e,t){b({list:m,video:e,index:t})}))})).catch((function(e){console.log(e.message),k(m)})),w({url:"https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyCMJE-BJQ4OnG25T5y_nue_lxeoUSjed7k","&channelId=").concat("UCHP9CdeguNUI-_nBv_UXBhw","&part=snippet,id&maxResults=3&order=viewCount")}).then((function(e){return e.items.map((function(e){var t=e.id.videoId;return{title:e.snippet.title,videoId:t}}))})).then((function(e){e.forEach((function(e,t){b({list:f,video:e,index:t})}))})).catch((function(e){console.log(e.message),k(f)}))})();