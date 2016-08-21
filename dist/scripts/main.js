"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(i){return e(i,t,t.document)}):"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(i,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(i)),e(s,t,t.document),s}:e(jQuery,t,t.document)}("undefined"!=typeof window?window:void 0,function(t,e,i,s){function n(i,s,n){if(D===!0)return!0;if(f[i]){if(v=!1,n&&A.before(i,m),T=1,A.sectionName&&(H!==!0||0!==i))if(history.pushState)try{history.replaceState(null,null,f[i])}catch(o){e.console&&console.warn("Scrollify warning: This needs to be hosted on a server to manipulate the hash value.")}else e.location.hash=f[i];if(s)t(A.target).stop().scrollTop(l[i]),n&&A.after(i,m);else{if(C=!0,t().velocity?t(A.target).stop().velocity("scroll",{duration:A.scrollSpeed,easing:A.easing,offset:l[i],mobileHA:!1}):t(A.target).stop().animate({scrollTop:l[i]},A.scrollSpeed,A.easing),e.location.hash.length&&A.sectionName&&e.console)try{t(e.location.hash).length&&console.warn("Scrollify warning: There are IDs on the page that match the hash value - this will cause the page to anchor.")}catch(o){console.warn("Scrollify warning:",e.location.hash,"is not a valid jQuery expression.")}t(A.target).promise().done(function(){C=!1,H=!1,n&&A.after(i,m)})}}}function o(t){function e(e){for(var i=0,s=t.slice(Math.max(t.length-e,1)),n=0;n<s.length;n++)i+=s[n];return Math.ceil(i/e)}var i=e(10),s=e(70);return i>=s}function h(t,e){for(var i=f.length;i>=0;i--)"string"==typeof t?f[i]===t&&(g=i,n(i,e,!0)):i===t&&(g=i,n(i,e,!0))}var a,r,c,u,d,l=[],f=[],m=[],p=[],g=0,T=1,E=!1,y=t(e),I=y.scrollTop(),v=!1,C=!1,S=!1,D=!1,P=[],x=(new Date).getTime(),H=!0,w=!1,A={section:".section",sectionName:"section-name",interstitialSection:"",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",standardScrollElements:!1,setHeights:!0,overflowScroll:!0,before:function(){},after:function(){},afterResize:function(){},afterRender:function(){}};t.scrollify=function(s){function h(e){t().velocity?t(A.target).stop().velocity("scroll",{duration:A.scrollSpeed,easing:A.easing,offset:e,mobileHA:!1}):t(A.target).stop().animate({scrollTop:e},A.scrollSpeed,A.easing)}function H(){var e=A.section;p=[],A.interstitialSection.length&&(e+=","+A.interstitialSection),t(e).each(function(e){A.setHeights?t(this).is(A.interstitialSection)?p[e]=!1:t(this).css("height","auto").outerHeight()<y.height()||"hidden"===t(this).css("overflow")?(t(this).css({height:y.height()}),p[e]=!1):(t(this).css({height:t(this).height()}),A.overflowScroll?p[e]=!0:p[e]=!1):t(this).outerHeight()<y.height()||A.overflowScroll===!1?p[e]=!1:p[e]=!0})}function R(i){var s=A.section;A.interstitialSection.length&&(s+=","+A.interstitialSection),l=[],f=[],m=[],t(s).each(function(i){i>0?l[i]=parseInt(t(this).offset().top)+A.offset:l[i]=parseInt(t(this).offset().top),A.sectionName&&t(this).data(A.sectionName)?f[i]="#"+t(this).data(A.sectionName).replace(/ /g,"-"):t(this).is(A.interstitialSection)===!1?f[i]="#"+(i+1):f[i]="#",m[i]=t(this);try{t(f[i]).length&&e.console&&console.warn("Scrollify warning: Section names can't match IDs on the page - this will cause the browser to anchor.")}catch(s){}e.location.hash===f[i]&&(g=i,E=!0)}),!0===i?n(g,!1,!1):A.afterRender()}function O(){return!p[g]||(I=y.scrollTop(),!(I>parseInt(l[g])))}function _(){return!p[g]||(I=y.scrollTop(),!(I<parseInt(l[g])+(m[g].outerHeight()-y.height())-28))}w=!0,t.easing.easeOutExpo=function(t,e,i,s,n){return e==n?i+s:s*(-Math.pow(2,-10*e/n)+1)+i},c={handleMousedown:function(){return D===!0||(v=!1,void(S=!1))},handleMouseup:function(){return D===!0||(v=!0,void(S&&c.calculateNearest()))},handleScroll:function(){return D===!0||(a&&clearTimeout(a),void(a=setTimeout(function(){return S=!0,v!==!1&&(v=!1,void c.calculateNearest())},200)))},calculateNearest:function(){I=y.scrollTop();for(var t,e=1,i=l.length,s=0,o=Math.abs(l[0]-I);i>e;e++)t=Math.abs(l[e]-I),o>t&&(o=t,s=e);(_()||O())&&(g=s,n(s,!1,!0))},wheelHandler:function(e,i){if(D===!0)return!0;if(A.standardScrollElements&&(t(e.target).is(A.standardScrollElements)||t(e.target).closest(A.standardScrollElements).length))return!0;p[g]||e.preventDefault();var s=(new Date).getTime();if(i=i||-e.originalEvent.detail/3||e.originalEvent.wheelDelta/120,P.length>149&&P.shift(),P.push(Math.abs(10*i)),s-x>200&&(P=[]),x=s,C)return!1;if(0>i){if(g<l.length-1&&_()){if(!o(P))return!1;e.preventDefault(),g++,C=!0,n(g,!1,!0)}}else if(i>0&&g>0&&O()){if(!o(P))return!1;e.preventDefault(),g--,C=!0,n(g,!1,!0)}},keyHandler:function(t){return D===!0||C!==!0&&void(38==t.keyCode?g>0&&O()&&(g--,n(g,!1,!0)):40==t.keyCode&&g<l.length-1&&_()&&(g++,n(g,!1,!0)))},init:function(){A.scrollbars?(y.bind("mousedown",c.handleMousedown),y.bind("mouseup",c.handleMouseup),y.bind("scroll",c.handleScroll)):t("body").css({overflow:"hidden"}),t(i).bind("DOMMouseScroll mousewheel",c.wheelHandler),t(i).bind("keydown",c.keyHandler)}},u={touches:{touchstart:{y:-1,x:-1},touchmove:{y:-1,x:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){if(D===!0)return!0;if(A.standardScrollElements&&(t(e.target).is(A.standardScrollElements)||t(e.target).closest(A.standardScrollElements).length))return!0;var i;if("undefined"!=typeof e&&"undefined"!=typeof e.touches)switch(i=e.touches[0],e.type){case"touchstart":u.touches.touchstart.y=i.pageY,u.touches.touchmove.y=-1,u.touches.touchstart.x=i.pageX,u.touches.touchmove.x=-1,u.options.timeStamp=(new Date).getTime(),u.touches.touchend=!1;case"touchmove":u.touches.touchmove.y=i.pageY,u.touches.touchmove.x=i.pageX,u.touches.touchstart.y!==u.touches.touchmove.y&&Math.abs(u.touches.touchstart.y-u.touches.touchmove.y)>Math.abs(u.touches.touchstart.x-u.touches.touchmove.x)&&(e.preventDefault(),u.touches.direction="y",u.options.timeStamp+u.options.timeGap<(new Date).getTime()&&0==u.touches.touchend&&(u.touches.touchend=!0,u.touches.touchstart.y>-1&&Math.abs(u.touches.touchmove.y-u.touches.touchstart.y)>u.options.distance&&(u.touches.touchstart.y<u.touches.touchmove.y?u.up():u.down())));break;case"touchend":u.touches[e.type]===!1&&(u.touches[e.type]=!0,u.touches.touchstart.y>-1&&u.touches.touchmove.y>-1&&"y"===u.touches.direction&&(Math.abs(u.touches.touchmove.y-u.touches.touchstart.y)>u.options.distance&&(u.touches.touchstart.y<u.touches.touchmove.y?u.up():u.down()),u.touches.touchstart.y=-1,u.touches.touchstart.x=-1,u.touches.direction="undetermined"))}},down:function(){g<=l.length-1&&(_()&&g<l.length-1?(g++,n(g,!1,!0)):Math.floor(m[g].height()/y.height())>T?(h(parseInt(l[g])+y.height()*T),T+=1):h(parseInt(l[g])+(m[g].height()-y.height())))},up:function(){g>=0&&(O()&&g>0?(g--,n(g,!1,!0)):T>2?(T-=1,h(parseInt(l[g])+y.height()*T)):(T=1,h(parseInt(l[g]))))},init:function(){i.addEventListener&&(i.addEventListener("touchstart",u.touchHandler,!1),i.addEventListener("touchmove",u.touchHandler,!1),i.addEventListener("touchend",u.touchHandler,!1))}},d={refresh:function(t){clearTimeout(r),r=setTimeout(function(){H(),R(!0),t&&A.afterResize()},400)},handleUpdate:function(){d.refresh(!1)},handleResize:function(){d.refresh(!0)}},A=t.extend(A,s),H(),R(!1),!0===E?n(g,!1,!0):setTimeout(function(){n(0,!1,!0)},200),l.length&&(c.init(),u.init(),y.bind("resize",d.handleResize),i.addEventListener&&e.addEventListener("orientationchange",d.handleResize,!1))},t.scrollify.move=function(e){return e!==s&&(e.originalEvent&&(e=t(this).attr("href")),void h(e,!1))},t.scrollify.instantMove=function(t){return t!==s&&void h(t,!0)},t.scrollify.next=function(){g<f.length&&(g+=1,n(g,!1,!0))},t.scrollify.previous=function(){g>0&&(g-=1,n(g,!1,!0))},t.scrollify.instantNext=function(){g<f.length&&(g+=1,n(g,!0,!0))},t.scrollify.instantPrevious=function(){g>0&&(g-=1,n(g,!0,!0))},t.scrollify.destroy=function(){return!!w&&(A.setHeights&&t(A.section).each(function(){t(this).css("height","auto")}),y.unbind("resize",d.handleResize),A.scrollbars&&(y.unbind("mousedown",c.handleMousedown),y.unbind("mouseup",c.handleMouseup),y.unbind("scroll",c.handleScroll)),t(i).unbind("DOMMouseScroll mousewheel",c.wheelHandler),t(i).unbind("keydown",c.keyHandler),i.addEventListener&&(i.removeEventListener("touchstart",u.touchHandler,!1),i.removeEventListener("touchmove",u.touchHandler,!1),i.removeEventListener("touchend",u.touchHandler,!1)),l=[],f=[],m=[],void(p=[]))},t.scrollify.update=function(){return!!w&&void d.handleUpdate()},t.scrollify.current=function(){return m[g]},t.scrollify.disable=function(){D=!0},t.scrollify.enable=function(){D=!1},t.scrollify.isDisabled=function(){return D},t.scrollify.setOptions=function(i){return!!w&&void("object"==("undefined"==typeof i?"undefined":_typeof(i))?(A=t.extend(A,i),d.handleUpdate()):e.console&&console.warn("Scrollify warning: Options need to be in an object."))}}),jQuery(document).ready(function(){jQuery(".menu-button").on("click",function(t){jQuery(".menu-line:eq(0)").toggleClass("menu-line-1"),jQuery(".menu-line:eq(1)").toggleClass("menu-line-2"),jQuery(".menu-line:eq(2)").toggleClass("menu-line-3"),jQuery(".menu").toggleClass("opened"),t.stopPropagation()}),jQuery(".menu").click(function(t){t.stopPropagation()}),jQuery(function(){jQuery.scrollify({section:"section",scrollbars:!1,interstitialSection:"footer"})}),jQuery(".icon-arrow").click(function(){jQuery.scrollify.next()}),jQuery("body").click(function(){jQuery(".menu").hasClass("opened")&&(jQuery(".menu").removeClass("opened"),jQuery(".menu-line:eq(0)").toggleClass("menu-line-1"),jQuery(".menu-line:eq(1)").toggleClass("menu-line-2"),jQuery(".menu-line:eq(2)").toggleClass("menu-line-3"))})}),window.onkeydown=function(t){return!(32==t.keyCode)},function(){function t(e,i){return t.instance_?t.instance_:(t.instance_=this,this.outerContainerEl=document.querySelector(e),this.containerEl=null,this.snackbarEl=null,this.config=i||t.config,this.dimensions=t.defaultDimensions,this.canvas=null,this.canvasCtx=null,this.tRex=null,this.distanceMeter=null,this.distanceRan=0,this.highestScore=0,this.time=0,this.runningTime=0,this.msPerFrame=1e3/y,this.currentSpeed=this.config.SPEED,this.obstacles=[],this.started=!1,this.activated=!1,this.crashed=!1,this.paused=!1,this.resizeTimerId_=null,this.playCount=0,this.audioBuffer=null,this.soundFx={},this.audioContext=null,this.images={},this.imagesLoaded=0,this.loadImages(),void(this.gamepadPreviousKeyDown=!1))}function e(t,e){return Math.floor(Math.random()*(e-t+1))+t}function i(t){C&&window.navigator.vibrate&&window.navigator.vibrate(t)}function s(e,i,s,n){var o=document.createElement("canvas");return o.className=n?t.classes.CANVAS+" "+n:t.classes.CANVAS,o.width=i,o.height=s,e.appendChild(o),o}function n(t){for(var e=t.length/4*3,i=atob(t),s=new ArrayBuffer(e),n=new Uint8Array(s),o=0;o<e;o++)n[o]=i.charCodeAt(o);return n.buffer}function o(){return v?(new Date).getTime():performance.now()}function h(t,e,i,s){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.canvasDimensions=s,this.textImgPos=e,this.restartImgPos=i,this.draw()}function a(e,i,s){var n=(t.defaultDimensions.WIDTH+e.xPos,new d(i.xPos+1,i.yPos+1,i.config.WIDTH-2,i.config.HEIGHT-2)),o=new d(e.xPos+1,e.yPos+1,e.typeConfig.width*e.size-2,e.typeConfig.height-2);if(s&&c(s,n,o),u(n,o))for(var h=e.collisionBoxes,a=i.ducking?f.collisionBoxes.DUCKING:f.collisionBoxes.RUNNING,l=0;l<a.length;l++)for(var m=0;m<h.length;m++){var p=r(a[l],n),g=r(h[m],o),T=u(p,g);if(s&&c(s,p,g),T)return[p,g]}return!1}function r(t,e){return new d(t.x+e.x,t.y+e.y,t.width,t.height)}function c(t,e,i){t.save(),t.strokeStyle="#f00",t.strokeRect(e.x,e.y,e.width,e.height),t.strokeStyle="#0f0",t.strokeRect(i.x,i.y,i.width,i.height),t.restore()}function u(t,e){var i=!1,s=(t.x,t.y,e.x);e.y;return t.x<s+e.width&&t.x+t.width>s&&t.y<e.y+e.height&&t.height+t.y>e.y&&(i=!0),i}function d(t,e,i,s){this.x=t,this.y=e,this.width=i,this.height=s}function l(t,i,s,n,o,h){this.canvasCtx=t,this.spritePos=s,this.typeConfig=i,this.gapCoefficient=o,this.size=e(1,l.MAX_OBSTACLE_LENGTH),this.dimensions=n,this.remove=!1,this.xPos=0,this.yPos=0,this.width=0,this.collisionBoxes=[],this.gap=0,this.speedOffset=0,this.currentFrame=0,this.timer=0,this.init(h)}function f(t,e){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.spritePos=e,this.xPos=0,this.yPos=0,this.groundYPos=0,this.currentFrame=0,this.currentAnimFrames=[],this.blinkDelay=0,this.animStartTime=0,this.timer=0,this.msPerFrame=1e3/y,this.config=f.config,this.status=f.status.WAITING,this.jumping=!1,this.ducking=!1,this.jumpVelocity=0,this.reachedMinHeight=!1,this.speedDrop=!1,this.jumpCount=0,this.jumpspotX=0,this.init()}function m(e,i,s){this.canvas=e,this.canvasCtx=e.getContext("2d"),this.image=t.imageSprite,this.spritePos=i,this.x=0,this.y=5,this.currentDistance=0,this.maxScore=0,this.highScore=0,this.container=null,this.digits=[],this.acheivement=!1,this.defaultString="",this.flashTimer=0,this.flashIterations=0,this.config=m.config,this.maxScoreUnits=this.config.MAX_DISTANCE_UNITS,this.init(s)}function p(t,i,s){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.spritePos=i,this.containerWidth=s,this.xPos=s,this.yPos=0,this.remove=!1,this.cloudGap=e(p.config.MIN_CLOUD_GAP,p.config.MAX_CLOUD_GAP),this.init()}function g(t,e){this.spritePos=e,this.canvas=t,this.canvasCtx=t.getContext("2d"),this.sourceDimensions={},this.dimensions=g.dimensions,this.sourceXPos=[this.spritePos.x,this.spritePos.x+this.dimensions.WIDTH],this.xPos=[],this.yPos=0,this.bumpThreshold=.5,this.setSourceDimensions(),this.draw()}function T(t,e,i,s){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.config=T.config,this.dimensions=i,this.gapCoefficient=s,this.obstacles=[],this.obstacleHistory=[],this.horizonOffsets=[0,0],this.cloudFrequency=this.config.CLOUD_FREQUENCY,this.spritePos=e,this.clouds=[],this.cloudSpeed=this.config.BG_CLOUD_SPEED,this.horizonLine=null,this.init()}window.Runner=t;var E=600,y=60,I=window.devicePixelRatio>1,v=window.navigator.userAgent.indexOf("CriOS")>-1||"UIWebViewForStaticFileContent"==window.navigator.userAgent,C=window.navigator.userAgent.indexOf("Mobi")>-1||v;"ontouchstart"in window;t.config={ACCELERATION:.001,BG_CLOUD_SPEED:.2,BOTTOM_PAD:10,CLEAR_TIME:3e3,CLOUD_FREQUENCY:.5,GAMEOVER_CLEAR_TIME:750,GAP_COEFFICIENT:.6,GRAVITY:.6,INITIAL_JUMP_VELOCITY:12,MAX_CLOUDS:6,MAX_OBSTACLE_LENGTH:3,MAX_OBSTACLE_DUPLICATION:2,MAX_SPEED:13,MIN_JUMP_HEIGHT:35,MOBILE_SPEED_COEFFICIENT:1.2,RESOURCE_TEMPLATE_ID:"audio-resources",SPEED:6,SPEED_DROP_COEFFICIENT:3},t.defaultDimensions={WIDTH:E,HEIGHT:150},t.classes={CANVAS:"runner-canvas",CONTAINER:"runner-container",CRASHED:"crashed",ICON:"icon-offline",SNACKBAR:"snackbar",SNACKBAR_SHOW:"snackbar-show",TOUCH_CONTROLLER:"controller"},t.spriteDefinition={LDPI:{CACTUS_LARGE:{x:332,y:2},CACTUS_SMALL:{x:228,y:2},CLOUD:{x:86,y:2},HORIZON:{x:2,y:54},PTERODACTYL:{x:134,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:484,y:2},TREX:{x:677,y:2}},HDPI:{CACTUS_LARGE:{x:652,y:2},CACTUS_SMALL:{x:446,y:2},CLOUD:{x:166,y:2},HORIZON:{x:2,y:104},PTERODACTYL:{x:260,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:954,y:2},TREX:{x:1338,y:2}}},t.sounds={BUTTON_PRESS:"offline-sound-press",HIT:"offline-sound-hit",SCORE:"offline-sound-reached"},t.keycodes={JUMP:{38:1,32:1},DUCK:{40:1},RESTART:{13:1}},t.events={ANIM_END:"webkitAnimationEnd",CLICK:"click",KEYDOWN:"keydown",KEYUP:"keyup",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",RESIZE:"resize",TOUCHEND:"touchend",TOUCHSTART:"touchstart",VISIBILITY:"visibilitychange",BLUR:"blur",FOCUS:"focus",LOAD:"load",GAMEPADCONNECTED:"gamepadconnected"},t.prototype={isDisabled:function(){return loadTimeData&&loadTimeData.valueExists("disabledEasterEgg")},setupDisabledRunner:function(){this.containerEl=document.createElement("div"),this.containerEl.className=t.classes.SNACKBAR,this.containerEl.textContent=loadTimeData.getValue("disabledEasterEgg"),this.outerContainerEl.appendChild(this.containerEl),document.addEventListener(t.events.KEYDOWN,function(e){t.keycodes.JUMP[e.keyCode]&&(this.containerEl.classList.add(t.classes.SNACKBAR_SHOW),document.querySelector(".icon").classList.add("icon-disabled"))}.bind(this))},updateConfigSetting:function(t,e){if(t in this.config&&void 0!=e)switch(this.config[t]=e,t){case"GRAVITY":case"MIN_JUMP_HEIGHT":case"SPEED_DROP_COEFFICIENT":this.tRex.config[t]=e;break;case"INITIAL_JUMP_VELOCITY":this.tRex.setJumpVelocity(e);break;case"SPEED":this.setSpeed(e)}},loadImages:function(){I?(t.imageSprite=document.getElementById("offline-resources-2x"),this.spriteDef=t.spriteDefinition.HDPI):(t.imageSprite=document.getElementById("offline-resources-1x"),this.spriteDef=t.spriteDefinition.LDPI),this.init()},loadSounds:function(){if(!v){this.audioContext=new AudioContext;var e=document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;for(var i in t.sounds){var s=e.getElementById(t.sounds[i]).src;s=s.substr(s.indexOf(",")+1);var o=n(s);this.audioContext.decodeAudioData(o,function(t,e){this.soundFx[t]=e}.bind(this,i))}}},setSpeed:function(t){var e=t||this.currentSpeed;if(this.dimensions.WIDTH<E){var i=e*this.dimensions.WIDTH/E*this.config.MOBILE_SPEED_COEFFICIENT;this.currentSpeed=i>e?e:i}else t&&(this.currentSpeed=t)},init:function(){this.adjustDimensions(),this.setSpeed(),this.containerEl=document.createElement("div"),this.containerEl.className=t.classes.CONTAINER,this.canvas=s(this.containerEl,this.dimensions.WIDTH,this.dimensions.HEIGHT,t.classes.PLAYER),this.canvasCtx=this.canvas.getContext("2d"),this.canvasCtx.fillStyle="#f7f7f7",this.canvasCtx.fill(),t.updateCanvasScaling(this.canvas),this.horizon=new T(this.canvas,this.spriteDef,this.dimensions,this.config.GAP_COEFFICIENT),this.distanceMeter=new m(this.canvas,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),this.tRex=new f(this.canvas,this.spriteDef.TREX),this.outerContainerEl.appendChild(this.containerEl),C&&this.createTouchController(),this.startListening(),this.update(),window.addEventListener(t.events.RESIZE,this.debounceResize.bind(this))},createTouchController:function(){this.touchController=document.createElement("div"),this.touchController.className=t.classes.TOUCH_CONTROLLER},debounceResize:function(){this.resizeTimerId_||(this.resizeTimerId_=setInterval(this.adjustDimensions.bind(this),250))},adjustDimensions:function(){clearInterval(this.resizeTimerId_),this.resizeTimerId_=null;var e=window.getComputedStyle(this.outerContainerEl),i=Number(e.paddingLeft.substr(0,e.paddingLeft.length-2));this.dimensions.WIDTH=this.outerContainerEl.offsetWidth-2*i,this.canvas&&(this.canvas.width=this.dimensions.WIDTH,this.canvas.height=this.dimensions.HEIGHT,t.updateCanvasScaling(this.canvas),this.distanceMeter.calcXPos(this.dimensions.WIDTH),this.clearCanvas(),this.horizon.update(0,0,!0),this.tRex.update(0),this.activated||this.crashed||this.paused?(this.containerEl.style.width=this.dimensions.WIDTH+"px",this.containerEl.style.height=this.dimensions.HEIGHT+"px",this.distanceMeter.update(0,Math.ceil(this.distanceRan)),this.stop()):this.tRex.draw(0,0),this.crashed&&this.gameOverPanel&&(this.gameOverPanel.updateDimensions(this.dimensions.WIDTH),this.gameOverPanel.draw()))},playIntro:function(){if(this.started||this.crashed)this.crashed&&this.restart();else{this.playingIntro=!0,this.tRex.playingIntro=!0;var e="@-webkit-keyframes intro { from { width:"+f.config.WIDTH+"px }to { width: "+this.dimensions.WIDTH+"px }}";document.styleSheets[1].insertRule(e,0),this.containerEl.addEventListener(t.events.ANIM_END,this.startGame.bind(this)),this.containerEl.style.webkitAnimation="intro .4s ease-out 1 both",this.containerEl.style.width=this.dimensions.WIDTH+"px",this.touchController&&this.outerContainerEl.appendChild(this.touchController),this.activated=!0,this.started=!0}},startGame:function(){this.runningTime=0,this.playingIntro=!1,this.tRex.playingIntro=!1,this.containerEl.style.webkitAnimation="",this.playCount++,document.addEventListener(t.events.VISIBILITY,this.onVisibilityChange.bind(this)),window.addEventListener(t.events.BLUR,this.onVisibilityChange.bind(this)),window.addEventListener(t.events.FOCUS,this.onVisibilityChange.bind(this))},clearCanvas:function(){this.canvasCtx.clearRect(0,0,this.dimensions.WIDTH,this.dimensions.HEIGHT)},update:function(){this.drawPending=!1;var t=o(),e=t-(this.time||t);if(this.time=t,this.activated){this.clearCanvas(),this.tRex.jumping&&this.tRex.updateJump(e),this.runningTime+=e;var i=this.runningTime>this.config.CLEAR_TIME;1!=this.tRex.jumpCount||this.playingIntro||this.playIntro(),this.playingIntro?this.horizon.update(0,this.currentSpeed,i):(e=this.started?e:0,this.horizon.update(e,this.currentSpeed,i));var s=i&&a(this.horizon.obstacles[0],this.tRex);s?this.gameOver():(this.distanceRan+=this.currentSpeed*e/this.msPerFrame,this.currentSpeed<this.config.MAX_SPEED&&(this.currentSpeed+=this.config.ACCELERATION));var n=this.distanceMeter.update(e,Math.ceil(this.distanceRan));n&&this.playSound(this.soundFx.SCORE)}this.crashed||(this.tRex.update(e),this.raq())},handleEvent:function(e){return function(t,i){switch(t){case i.KEYDOWN:case i.TOUCHSTART:case i.MOUSEDOWN:case i.GAMEPADCONNECTED:this.onKeyDown(e);break;case i.KEYUP:case i.TOUCHEND:case i.MOUSEUP:this.onKeyUp(e)}}.bind(this)(e.type,t.events)},startListening:function(){document.addEventListener(t.events.KEYDOWN,this),document.addEventListener(t.events.KEYUP,this),C?(this.touchController.addEventListener(t.events.TOUCHSTART,this),this.touchController.addEventListener(t.events.TOUCHEND,this),this.containerEl.addEventListener(t.events.TOUCHSTART,this)):(document.addEventListener(t.events.MOUSEDOWN,this),document.addEventListener(t.events.MOUSEUP,this)),window.addEventListener(t.events.GAMEPADCONNECTED,this),window.setInterval(this.pollGamepads.bind(this),10)},pollGamepads:function(){for(var t=navigator.getGamepads(),e=!1,i=0;i<t.length;i++)void 0!=t[i]&&t[i].buttons.filter(function(t){return 1==t.pressed}).length>0&&(e=!0);if(e!=this.gamepadPreviousKeyDown){this.gamepadPreviousKeyDown=e;var s=new Event(e?"keydown":"keyup");s.keyCode=32,s.which=s.keyCode,s.altKey=!1,s.ctrlKey=!0,s.shiftKey=!1,s.metaKey=!1,document.dispatchEvent(s)}},stopListening:function(){document.removeEventListener(t.events.KEYDOWN,this),document.removeEventListener(t.events.KEYUP,this),C?(this.touchController.removeEventListener(t.events.TOUCHSTART,this),this.touchController.removeEventListener(t.events.TOUCHEND,this),this.containerEl.removeEventListener(t.events.TOUCHSTART,this)):(document.removeEventListener(t.events.MOUSEDOWN,this),document.removeEventListener(t.events.MOUSEUP,this))},onKeyDown:function(e){C&&e.preventDefault(),this.crashed||!t.keycodes.JUMP[e.keyCode]&&e.type!=t.events.TOUCHSTART&&e.type!=t.events.GAMEPADCONNECTED||(this.activated||(this.loadSounds(),this.activated=!0),this.tRex.jumping||this.tRex.ducking||(this.playSound(this.soundFx.BUTTON_PRESS),this.tRex.startJump(this.currentSpeed))),this.crashed&&e.type==t.events.TOUCHSTART&&e.currentTarget==this.containerEl&&this.restart(),this.activated&&!this.crashed&&t.keycodes.DUCK[e.keyCode]&&(e.preventDefault(),this.tRex.jumping?this.tRex.setSpeedDrop():this.tRex.jumping||this.tRex.ducking||this.tRex.setDuck(!0))},onKeyUp:function(e){var i=String(e.keyCode),s=t.keycodes.JUMP[i]||e.type==t.events.TOUCHEND||e.type==t.events.MOUSEDOWN;if(this.isRunning()&&s)this.tRex.endJump();else if(t.keycodes.DUCK[i])this.tRex.speedDrop=!1,this.tRex.setDuck(!1);else if(this.crashed){var n=o()-this.time;(t.keycodes.RESTART[i]||this.isLeftClickOnCanvas(e)||n>=this.config.GAMEOVER_CLEAR_TIME&&t.keycodes.JUMP[i])&&this.restart()}else this.paused&&s&&(this.tRex.reset(),this.play())},isLeftClickOnCanvas:function(e){return null!=e.button&&e.button<2&&e.type==t.events.MOUSEUP&&e.target==this.canvas},raq:function(){this.drawPending||(this.drawPending=!0,this.raqId=requestAnimationFrame(this.update.bind(this)))},isRunning:function(){return!!this.raqId},gameOver:function(){this.playSound(this.soundFx.HIT),i(200),this.stop(),this.crashed=!0,this.distanceMeter.acheivement=!1,this.tRex.update(100,f.status.CRASHED),this.gameOverPanel?this.gameOverPanel.draw():this.gameOverPanel=new h(this.canvas,this.spriteDef.TEXT_SPRITE,this.spriteDef.RESTART,this.dimensions),this.distanceRan>this.highestScore&&(this.highestScore=Math.ceil(this.distanceRan),this.distanceMeter.setHighScore(this.highestScore)),this.time=o()},stop:function(){this.activated=!1,this.paused=!0,cancelAnimationFrame(this.raqId),this.raqId=0},play:function(){this.crashed||(this.activated=!0,this.paused=!1,this.tRex.update(0,f.status.RUNNING),this.time=o(),this.update())},restart:function(){this.raqId||(this.playCount++,this.runningTime=0,this.activated=!0,this.crashed=!1,this.distanceRan=0,this.setSpeed(this.config.SPEED),this.time=o(),this.containerEl.classList.remove(t.classes.CRASHED),this.clearCanvas(),this.distanceMeter.reset(this.highestScore),this.horizon.reset(),this.tRex.reset(),this.playSound(this.soundFx.BUTTON_PRESS),this.update())},onVisibilityChange:function(t){document.hidden||document.webkitHidden||"blur"==t.type?this.stop():this.crashed||(this.tRex.reset(),this.play())},playSound:function(t){if(t){var e=this.audioContext.createBufferSource();e.buffer=t,e.connect(this.audioContext.destination),e.start(0)}}},t.updateCanvasScaling=function(t,e,i){var s=t.getContext("2d"),n=Math.floor(window.devicePixelRatio)||1,o=Math.floor(s.webkitBackingStorePixelRatio)||1,h=n/o;if(n!==o){var a=e||t.width,r=i||t.height;return t.width=a*h,t.height=r*h,t.style.width=a+"px",t.style.height=r+"px",s.scale(h,h),!0}return 1==n&&(t.style.width=t.width+"px",t.style.height=t.height+"px"),!1},h.dimensions={TEXT_X:0,TEXT_Y:13,TEXT_WIDTH:191,TEXT_HEIGHT:11,RESTART_WIDTH:36,RESTART_HEIGHT:32},h.prototype={updateDimensions:function(t,e){this.canvasDimensions.WIDTH=t,e&&(this.canvasDimensions.HEIGHT=e)},draw:function(){var e=h.dimensions,i=this.canvasDimensions.WIDTH/2,s=e.TEXT_X,n=e.TEXT_Y,o=e.TEXT_WIDTH,a=e.TEXT_HEIGHT,r=Math.round(i-e.TEXT_WIDTH/2),c=Math.round((this.canvasDimensions.HEIGHT-25)/3),u=e.TEXT_WIDTH,d=e.TEXT_HEIGHT,l=e.RESTART_WIDTH,f=e.RESTART_HEIGHT,m=i-e.RESTART_WIDTH/2,p=this.canvasDimensions.HEIGHT/2;I&&(n*=2,s*=2,o*=2,a*=2,l*=2,f*=2),s+=this.textImgPos.x,n+=this.textImgPos.y,this.canvasCtx.drawImage(t.imageSprite,s,n,o,a,r,c,u,d),this.canvasCtx.drawImage(t.imageSprite,this.restartImgPos.x,this.restartImgPos.y,l,f,m,p,e.RESTART_WIDTH,e.RESTART_HEIGHT)}},l.MAX_GAP_COEFFICIENT=1.5,l.MAX_OBSTACLE_LENGTH=3,l.prototype={init:function(t){if(this.cloneCollisionBoxes(),this.size>1&&this.typeConfig.multipleSpeed>t&&(this.size=1),this.width=this.typeConfig.width*this.size,this.xPos=this.dimensions.WIDTH-this.width,Array.isArray(this.typeConfig.yPos)){var i=C?this.typeConfig.yPosMobile:this.typeConfig.yPos;this.yPos=i[e(0,i.length-1)]}else this.yPos=this.typeConfig.yPos;this.draw(),this.size>1&&(this.collisionBoxes[1].width=this.width-this.collisionBoxes[0].width-this.collisionBoxes[2].width,this.collisionBoxes[2].x=this.width-this.collisionBoxes[2].width),this.typeConfig.speedOffset&&(this.speedOffset=Math.random()>.5?this.typeConfig.speedOffset:-this.typeConfig.speedOffset),this.gap=this.getGap(this.gapCoefficient,t)},draw:function(){var e=this.typeConfig.width,i=this.typeConfig.height;I&&(e=2*e,i=2*i);var s=e*this.size*(.5*(this.size-1))+this.spritePos.x;this.currentFrame>0&&(s+=e*this.currentFrame),this.canvasCtx.drawImage(t.imageSprite,s,this.spritePos.y,e*this.size,i,this.xPos,this.yPos,this.typeConfig.width*this.size,this.typeConfig.height)},update:function(t,e){this.remove||(this.typeConfig.speedOffset&&(e+=this.speedOffset),this.xPos-=Math.floor(e*y/1e3*t),this.typeConfig.numFrames&&(this.timer+=t,this.timer>=this.typeConfig.frameRate&&(this.currentFrame=this.currentFrame==this.typeConfig.numFrames-1?0:this.currentFrame+1,this.timer=0)),this.draw(),this.isVisible()||(this.remove=!0))},getGap:function(t,i){var s=Math.round(this.width*i+this.typeConfig.minGap*t),n=Math.round(s*l.MAX_GAP_COEFFICIENT);return e(s,n)},isVisible:function(){return this.xPos+this.width>0},cloneCollisionBoxes:function(){for(var t=this.typeConfig.collisionBoxes,e=t.length-1;e>=0;e--)this.collisionBoxes[e]=new d(t[e].x,t[e].y,t[e].width,t[e].height)}},l.types=[{type:"CACTUS_SMALL",width:17,height:35,yPos:105,multipleSpeed:4,minGap:120,minSpeed:0,collisionBoxes:[new d(0,7,5,27),new d(4,0,6,34),new d(10,4,7,14)]},{type:"CACTUS_LARGE",width:25,height:50,yPos:90,multipleSpeed:7,minGap:120,minSpeed:0,collisionBoxes:[new d(0,12,7,38),new d(8,0,7,49),new d(13,10,10,38)]},{type:"PTERODACTYL",width:46,height:40,yPos:[100,75,50],yPosMobile:[100,50],multipleSpeed:999,minSpeed:8.5,minGap:150,collisionBoxes:[new d(15,15,16,5),new d(18,21,24,6),new d(2,14,4,3),new d(6,10,4,7),new d(10,8,6,9)],numFrames:2,frameRate:1e3/6,speedOffset:.8}],f.config={DROP_VELOCITY:-5,GRAVITY:.6,HEIGHT:47,HEIGHT_DUCK:25,INIITAL_JUMP_VELOCITY:-10,INTRO_DURATION:1500,MAX_JUMP_HEIGHT:30,MIN_JUMP_HEIGHT:30,SPEED_DROP_COEFFICIENT:3,SPRITE_WIDTH:262,START_X_POS:50,WIDTH:44,WIDTH_DUCK:59},f.collisionBoxes={DUCKING:[new d(1,18,55,25)],RUNNING:[new d(22,0,17,16),new d(1,18,30,9),new d(10,35,14,8),new d(1,24,29,5),new d(5,30,21,4),new d(9,34,15,4)]},f.status={CRASHED:"CRASHED",DUCKING:"DUCKING",JUMPING:"JUMPING",RUNNING:"RUNNING",WAITING:"WAITING"},f.BLINK_TIMING=7e3,f.animFrames={WAITING:{frames:[44,0],msPerFrame:1e3/3},RUNNING:{frames:[88,132],msPerFrame:1e3/12},CRASHED:{frames:[220],msPerFrame:1e3/60},JUMPING:{frames:[0],msPerFrame:1e3/60},DUCKING:{frames:[262,321],msPerFrame:125}},f.prototype={init:function(){this.blinkDelay=this.setBlinkDelay(),this.groundYPos=t.defaultDimensions.HEIGHT-this.config.HEIGHT-t.config.BOTTOM_PAD,this.yPos=this.groundYPos,this.minJumpHeight=this.groundYPos-this.config.MIN_JUMP_HEIGHT,this.draw(0,0),this.update(0,f.status.WAITING)},setJumpVelocity:function(t){this.config.INIITAL_JUMP_VELOCITY=-t,this.config.DROP_VELOCITY=-t/2},update:function(t,e){this.timer+=t,e&&(this.status=e,this.currentFrame=0,this.msPerFrame=f.animFrames[e].msPerFrame,this.currentAnimFrames=f.animFrames[e].frames,e==f.status.WAITING&&(this.animStartTime=o(),this.setBlinkDelay())),this.playingIntro&&this.xPos<this.config.START_X_POS&&(this.xPos+=Math.round(this.config.START_X_POS/this.config.INTRO_DURATION*t)),this.status==f.status.WAITING?this.blink(o()):this.draw(this.currentAnimFrames[this.currentFrame],0),this.timer>=this.msPerFrame&&(this.currentFrame=this.currentFrame==this.currentAnimFrames.length-1?0:this.currentFrame+1,this.timer=0),this.speedDrop&&this.yPos==this.groundYPos&&(this.speedDrop=!1,this.setDuck(!0))},draw:function(e,i){var s=e,n=i,o=this.ducking&&this.status!=f.status.CRASHED?this.config.WIDTH_DUCK:this.config.WIDTH,h=this.config.HEIGHT;I&&(s*=2,n*=2,o*=2,h*=2),s+=this.spritePos.x,n+=this.spritePos.y,this.ducking&&this.status!=f.status.CRASHED?this.canvasCtx.drawImage(t.imageSprite,s,n,o,h,this.xPos,this.yPos,this.config.WIDTH_DUCK,this.config.HEIGHT):(this.ducking&&this.status==f.status.CRASHED&&this.xPos++,this.canvasCtx.drawImage(t.imageSprite,s,n,o,h,this.xPos,this.yPos,this.config.WIDTH,this.config.HEIGHT))},setBlinkDelay:function(){this.blinkDelay=Math.ceil(Math.random()*f.BLINK_TIMING)},blink:function(t){var e=t-this.animStartTime;e>=this.blinkDelay&&(this.draw(this.currentAnimFrames[this.currentFrame],0),1==this.currentFrame&&(this.setBlinkDelay(),this.animStartTime=t))},startJump:function(t){this.jumping||(this.update(0,f.status.JUMPING),this.jumpVelocity=this.config.INIITAL_JUMP_VELOCITY-t/10,this.jumping=!0,this.reachedMinHeight=!1,this.speedDrop=!1)},endJump:function(){this.reachedMinHeight&&this.jumpVelocity<this.config.DROP_VELOCITY&&(this.jumpVelocity=this.config.DROP_VELOCITY)},updateJump:function(t,e){var i=f.animFrames[this.status].msPerFrame,s=t/i;this.speedDrop?this.yPos+=Math.round(this.jumpVelocity*this.config.SPEED_DROP_COEFFICIENT*s):this.yPos+=Math.round(this.jumpVelocity*s),
this.jumpVelocity+=this.config.GRAVITY*s,(this.yPos<this.minJumpHeight||this.speedDrop)&&(this.reachedMinHeight=!0),(this.yPos<this.config.MAX_JUMP_HEIGHT||this.speedDrop)&&this.endJump(),this.yPos>this.groundYPos&&(this.reset(),this.jumpCount++),this.update(t)},setSpeedDrop:function(){this.speedDrop=!0,this.jumpVelocity=1},setDuck:function(t){t&&this.status!=f.status.DUCKING?(this.update(0,f.status.DUCKING),this.ducking=!0):this.status==f.status.DUCKING&&(this.update(0,f.status.RUNNING),this.ducking=!1)},reset:function(){this.yPos=this.groundYPos,this.jumpVelocity=0,this.jumping=!1,this.ducking=!1,this.update(0,f.status.RUNNING),this.midair=!1,this.speedDrop=!1,this.jumpCount=0}},m.dimensions={WIDTH:10,HEIGHT:13,DEST_WIDTH:11},m.yPos=[0,13,27,40,53,67,80,93,107,120],m.config={MAX_DISTANCE_UNITS:5,ACHIEVEMENT_DISTANCE:100,COEFFICIENT:.025,FLASH_DURATION:250,FLASH_ITERATIONS:3},m.prototype={init:function(t){var e="";this.calcXPos(t),this.maxScore=this.maxScoreUnits;for(var i=0;i<this.maxScoreUnits;i++)this.draw(i,0),this.defaultString+="0",e+="9";this.maxScore=parseInt(e)},calcXPos:function(t){this.x=t-m.dimensions.DEST_WIDTH*(this.maxScoreUnits+1)},draw:function(t,e,i){var s=m.dimensions.WIDTH,n=m.dimensions.HEIGHT,o=m.dimensions.WIDTH*e,h=0,a=t*m.dimensions.DEST_WIDTH,r=this.y,c=m.dimensions.WIDTH,u=m.dimensions.HEIGHT;if(I&&(s*=2,n*=2,o*=2),o+=this.spritePos.x,h+=this.spritePos.y,this.canvasCtx.save(),i){var d=this.x-2*this.maxScoreUnits*m.dimensions.WIDTH;this.canvasCtx.translate(d,this.y)}else this.canvasCtx.translate(this.x,this.y);this.canvasCtx.drawImage(this.image,o,h,s,n,a,r,c,u),this.canvasCtx.restore()},getActualDistance:function(t){return t?Math.round(t*this.config.COEFFICIENT):0},update:function(t,e){var i=!0,s=!1;if(this.acheivement)this.flashIterations<=this.config.FLASH_ITERATIONS?(this.flashTimer+=t,this.flashTimer<this.config.FLASH_DURATION?i=!1:this.flashTimer>2*this.config.FLASH_DURATION&&(this.flashTimer=0,this.flashIterations++)):(this.acheivement=!1,this.flashIterations=0,this.flashTimer=0);else if(e=this.getActualDistance(e),e>this.maxScore&&this.maxScoreUnits==this.config.MAX_DISTANCE_UNITS?(this.maxScoreUnits++,this.maxScore=parseInt(this.maxScore+"9")):this.distance=0,e>0){e%this.config.ACHIEVEMENT_DISTANCE==0&&(this.acheivement=!0,this.flashTimer=0,s=!0);var n=(this.defaultString+e).substr(-this.maxScoreUnits);this.digits=n.split("")}else this.digits=this.defaultString.split("");if(i)for(var o=this.digits.length-1;o>=0;o--)this.draw(o,parseInt(this.digits[o]));return this.drawHighScore(),s},drawHighScore:function(){this.canvasCtx.save(),this.canvasCtx.globalAlpha=.8;for(var t=this.highScore.length-1;t>=0;t--)this.draw(t,parseInt(this.highScore[t],10),!0);this.canvasCtx.restore()},setHighScore:function(t){t=this.getActualDistance(t);var e=(this.defaultString+t).substr(-this.maxScoreUnits);this.highScore=["10","11",""].concat(e.split(""))},reset:function(){this.update(0),this.acheivement=!1}},p.config={HEIGHT:14,MAX_CLOUD_GAP:400,MAX_SKY_LEVEL:30,MIN_CLOUD_GAP:100,MIN_SKY_LEVEL:71,WIDTH:46},p.prototype={init:function(){this.yPos=e(p.config.MAX_SKY_LEVEL,p.config.MIN_SKY_LEVEL),this.draw()},draw:function(){this.canvasCtx.save();var e=p.config.WIDTH,i=p.config.HEIGHT;I&&(e=2*e,i=2*i),this.canvasCtx.drawImage(t.imageSprite,this.spritePos.x,this.spritePos.y,e,i,this.xPos,this.yPos,p.config.WIDTH,p.config.HEIGHT),this.canvasCtx.restore()},update:function(t){this.remove||(this.xPos-=Math.ceil(t),this.draw(),this.isVisible()||(this.remove=!0))},isVisible:function(){return this.xPos+p.config.WIDTH>0}},g.dimensions={WIDTH:600,HEIGHT:12,YPOS:127},g.prototype={setSourceDimensions:function(){for(var t in g.dimensions)I?"YPOS"!=t&&(this.sourceDimensions[t]=2*g.dimensions[t]):this.sourceDimensions[t]=g.dimensions[t],this.dimensions[t]=g.dimensions[t];this.xPos=[0,g.dimensions.WIDTH],this.yPos=g.dimensions.YPOS},getRandomType:function(){return Math.random()>this.bumpThreshold?this.dimensions.WIDTH:0},draw:function(){this.canvasCtx.drawImage(t.imageSprite,this.sourceXPos[0],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[0],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT),this.canvasCtx.drawImage(t.imageSprite,this.sourceXPos[1],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[1],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT)},updateXPos:function(t,e){var i=t,s=0==t?1:0;this.xPos[i]-=e,this.xPos[s]=this.xPos[i]+this.dimensions.WIDTH,this.xPos[i]<=-this.dimensions.WIDTH&&(this.xPos[i]+=2*this.dimensions.WIDTH,this.xPos[s]=this.xPos[i]-this.dimensions.WIDTH,this.sourceXPos[i]=this.getRandomType()+this.spritePos.x)},update:function(t,e){var i=Math.floor(.06*e*t);this.xPos[0]<=0?this.updateXPos(0,i):this.updateXPos(1,i),this.draw()},reset:function(){this.xPos[0]=0,this.xPos[1]=g.dimensions.WIDTH}},T.config={BG_CLOUD_SPEED:.2,BUMPY_THRESHOLD:.3,CLOUD_FREQUENCY:.5,HORIZON_HEIGHT:16,MAX_CLOUDS:6},T.prototype={init:function(){this.addCloud(),this.horizonLine=new g(this.canvas,this.spritePos.HORIZON)},update:function(t,e,i){this.runningTime+=t,this.horizonLine.update(t,e),this.updateClouds(t,e),i&&this.updateObstacles(t,e)},updateClouds:function(t,e){var i=this.cloudSpeed/1e3*t*e,s=this.clouds.length;if(s){for(var n=s-1;n>=0;n--)this.clouds[n].update(i);var o=this.clouds[s-1];s<this.config.MAX_CLOUDS&&this.dimensions.WIDTH-o.xPos>o.cloudGap&&this.cloudFrequency>Math.random()&&this.addCloud(),this.clouds=this.clouds.filter(function(t){return!t.remove})}},updateObstacles:function(t,e){for(var i=this.obstacles.slice(0),s=0;s<this.obstacles.length;s++){var n=this.obstacles[s];n.update(t,e),n.remove&&i.shift()}if(this.obstacles=i,this.obstacles.length>0){var o=this.obstacles[this.obstacles.length-1];o&&!o.followingObstacleCreated&&o.isVisible()&&o.xPos+o.width+o.gap<this.dimensions.WIDTH&&(this.addNewObstacle(e),o.followingObstacleCreated=!0)}else this.addNewObstacle(e)},addNewObstacle:function(i){var s=e(0,l.types.length-1),n=l.types[s];if(this.duplicateObstacleCheck(n.type)||i<n.minSpeed)this.addNewObstacle(i);else{var o=this.spritePos[n.type];this.obstacles.push(new l(this.canvasCtx,n,o,this.dimensions,this.gapCoefficient,i)),this.obstacleHistory.unshift(n.type),this.obstacleHistory.length>1&&this.obstacleHistory.splice(t.config.MAX_OBSTACLE_DUPLICATION)}},duplicateObstacleCheck:function(e){for(var i=0,s=0;s<this.obstacleHistory.length;s++)i=this.obstacleHistory[s]==e?i+1:0;return i>=t.config.MAX_OBSTACLE_DUPLICATION},reset:function(){this.obstacles=[],this.horizonLine.reset()},resize:function(t,e){this.canvas.width=t,this.canvas.height=e},addCloud:function(){this.clouds.push(new p(this.canvas,this.spritePos.CLOUD,this.dimensions.WIDTH))}}}(),new Runner(".interstitial-wrapper");