!function(){"use strict";var e={726:function(e,n,t){var i=t(879),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.box {\n  margin: 100px auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  border-radius: 20px;\n  border: 10px solid #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.box .con {\n  width: 304px;\n  height: 304px;\n  border: 2px solid #000;\n  position: relative;\n}\n.box #snake > div {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n}\n.box #food {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #b7d4a8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n.box #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: #000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.box .bot {\n  width: 304px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n",""]),n.Z=o},879:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:function(e,n,t){var i,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function s(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},i=[],o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],l=t[c]||0,f="".concat(c," ").concat(l);t[c]=l+1;var u=s(f),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:f,updater:b(d,n),references:1}),i.push(f)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var r=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}function d(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,p=0;function b(e,n){var t,i,o;if(n.singleton){var r=p++;t=h||(h=c(n)),i=u.bind(null,t,r,!1),o=u.bind(null,t,r,!0)}else t=c(n),i=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var o=s(t[i]);r[o].references--}for(var c=a(e,n),l=0;l<t.length;l++){var f=s(t[l]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}t=c}}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e=t(379),n=t.n(e),i=t(726);function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.ele=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.ele.getElementsByTagName("div")}var n,t;return n=e,(t=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkCollision()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){if(this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkCollision()}}},{key:"changeBody",value:function(){this.ele.insertAdjacentHTML("beforeend","<div></div>")}},{key:"moveBody",value:function(){for(var e=this.bodies.length-1;e>0;e--){var n=this.bodies[e-1].offsetLeft,t=this.bodies[e-1].offsetTop;this.bodies[e].style.left=n+"px",this.bodies[e].style.top=t+"px"}}},{key:"checkCollision",value:function(){for(var e=1;e<this.bodies.length;e++){var n=this.bodies[e];if(this.X===n.offsetLeft&&this.Y===n.offsetTop)throw new Error("撞到自己了")}}}])&&o(n.prototype,t),e}();function s(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.ele=document.getElementById("food")}var n,t;return n=e,(t=[{key:"X",get:function(){return this.ele.offsetLeft}},{key:"Y",get:function(){return this.ele.offsetTop}},{key:"change",value:function(){var e=10*Math.round(29*Math.random()),n=10*Math.round(29*Math.random());this.ele.style.left=e+"px",this.ele.style.top=n+"px"}}])&&s(n.prototype,t),e}();function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;c(this,e),this.score=0,this.level=1,this.scroeEle=document.getElementById("score"),this.levelEle=document.getElementById("level"),this.maxLevel=n,this.upScore=t}var n,t;return n=e,(t=[{key:"addScore",value:function(){this.scroeEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}])&&l(n.prototype,t),e}();function u(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.isLive=!0,this.snake=new r,this.food=new a,this.scorePanel=new f,this.init()}var n,t;return n=e,(t=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.food.change(),this.run()}},{key:"keydownHandler",value:function(e){-1!=e.key.indexOf("Arrow")&&(this.direction=e.key)}},{key:"run",value:function(){var e=this.snake.X,n=this.snake.Y;switch(this.direction){case"ArrowUp":n-=10;break;case"ArrowRight":e+=10;break;case"ArrowDown":n+=10;break;case"ArrowLeft":e-=10}this.checkEat(e,n);try{this.snake.X=e,this.snake.Y=n}catch(e){alert(e.message+"Game Over"),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))}},{key:"checkEat",value:function(e,n){e===this.food.X&&n===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.changeBody())}}])&&u(n.prototype,t),e}())}()}();