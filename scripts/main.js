"use strict";window.g_bjJ=class{constructor(c,a){this.g_aYq=c,this.g_bjK=a,this.g_bjL=!1,this.g_aXv=()=>this.g_atc()}g_bjM(){}g_bjN(e,a,b,c){this.g_aYq.g_bjO(this.g_bjK,e,a,b,c)}g_bjP(e,a,b,c){return this.g_aYq.g_bjQ(this.g_bjK,e,a,b,c)}g_bjR(d,a,b){this.g_aYq.g_bjS()?this.g_bjN(d,a,b):this.g_aYq.g_bjT()._OnMessageFromDOM({type:"event",component:this.g_bjK,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_bjU(c,a){this.g_aYq.g_bjV(this.g_bjK,c,a)}g_bjW(d){for(const[a,b]of d)this.g_bjU(a,b)}g_bjX(){return this.g_aYq}g_bjY(){return this.g_bjK}g_aMf(){this.g_bjL||(this.g_aYq.g_bjZ(this.g_aXv),this.g_bjL=!0)}g_aLS(){this.g_bjL&&(this.g_aYq.g_bj_(this.g_aXv),this.g_bjL=!1)}g_atc(){}},"use strict",window.g_bj$=class extends g_bjJ{constructor(c,a){super(c,a),this.g_bka=new Map,this.g_bkb=!0,this.g_bjU("create",b=>this.g_bkc(b)),this.g_bjU("destroy",b=>this.g_bkd(b)),this.g_bjU("set-visible",b=>this.g_bke(b)),this.g_bjU("update-position",b=>this.g_bkf(b)),this.g_bjU("update-state",b=>this.g_beu(b)),this.g_bjU("focus",b=>this.g_bkg(b)),this.g_bjU("set-css-style",b=>this.g_bkh(b))}g_bki(b){this.g_bkb=!!b}g_bkj(c,e){this.g_bjU(c,b=>{const a=b.elementId,c=this.g_bka.get(a);return e(c,b)})}g_bkc(d){const a=d.elementId,b=this.g_aMF(a,d);this.g_bka.set(a,b),d.isVisible||(b.style.display="none"),this.g_bkb&&document.body.appendChild(b)}g_aMF(){throw new Error("required override")}g_bkk(){}g_bkd(d){const a=d.elementId,b=this.g_bka.get(a);this.g_bkk(b),this.g_bkb&&b.parentElement.removeChild(b),this.g_bka.delete(a)}g_bkl(d,a,b){b||(b={}),b.elementId=a,this.g_bjN(d,b)}g_bkm(d,a,b){b||(b={}),b.elementId=a,this.g_bjR(d,b)}g_bke(c){if(this.g_bkb){const a=this.g_bka.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_bkf(d){if(this.g_bkb){const a=this.g_bka.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_beu(c){const a=this.g_bka.get(c.elementId);this.g_bkn(a,c)}g_bkn(){throw new Error("required override")}g_bkg(c){const a=this.g_bka.get(c.elementId);c.focus?a.focus():a.blur()}g_bkh(c){const a=this.g_bka.get(c.elementId);a.style[c.prop]=c.val}g_bko(b){return this.g_bka.get(b)}},"use strict";{function n(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function o(c){const a=await p(c),b=new TextDecoder("utf-8");return b.decode(a)}function p(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;const j=[];self.g_bkp=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");j.push(b)},window.g_bkq=class b{constructor(b){this.g_bkr=b.g_bks,this.g_bkt=null,this.g_aWu="",this.g_bku=b.g_bkv,this.g_bkw={},this.g_bkx=null,this.g_bky=null,this.g_bkz=[],this.g_bkA=null,this.g_aUA=null,this.g_aYk=null,this.g_aVh=-1,this.g_bkB=()=>this.g_bkC(),this.g_bkD=[],this.g_aWz=b.g_fE,("cordova"===this.g_aWz||"playable-ad"===this.g_aWz||"instant-games"===this.g_aWz)&&this.g_bkr&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_bkr=!1),/CrOS/.test(navigator.userAgent)&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Chrome OS due to reports of crashes. Reverting to DOM mode."),this.g_bkr=!1),this.g_bkE=!1,this.g_bkF=null,("html5"===this.g_aWz||"playable-ad"===this.g_aWz)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_bjV("runtime","cordova-fetch-local-file",b=>this.g_bkG(b)),this.g_bjV("runtime","create-job-worker",b=>this.g_bkH(b)),"cordova"===this.g_aWz?document.addEventListener("deviceready",()=>this.g_aKV(b)):this.g_aKV(b)}g_RM(){this.g_bkI(),this.g_bkt&&(this.g_bkt.onmessage=null,this.g_bkt=null),this.g_bkx&&(this.g_bkx.terminate(),this.g_bkx=null),this.g_bky&&(this.g_bky.g_RM(),this.g_bky=null),this.g_aUA&&(this.g_aUA.parentElement.removeChild(this.g_aUA),this.g_aUA=null)}g_bkJ(){return this.g_aUA}g_Sp(){return this.g_aWu}g_bjS(){return this.g_bkr}g_aZN(){return this.g_aWz}g_aYI(){return"cordova"===this.g_aWz&&a}g_bkK(){return"cordova"===this.g_aWz&&!1===a}async g_aKV(d){if("playable-ad"===this.g_aWz){this.g_bkF=self.c3_base64files,await this.g_bkL();for(let a=0,b=d.g_bkM.length;a<b;++a){const b=d.g_bkM[a].toLowerCase();this.g_bkF.hasOwnProperty(b)&&(d.g_bkM[a]=URL.createObjectURL(this.g_bkF[b]))}}if(d.g_bkN)this.g_aWu=d.g_bkN;else{const c=location.origin;this.g_aWu=("null"===c?"file:///":c)+location.pathname;const a=this.g_aWu.lastIndexOf("/");-1!==a&&(this.g_aWu=this.g_aWu.substr(0,a+1))}if(d.g_bkO)for(const[a,b]of Object.entries(d.g_bkO))this.g_bkw[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_bkt=a.port1,this.g_bkt.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_bkP(b)),this.g_aYk=new self.g_bkQ(this),await this.g_aYk.g_aRM(),this.g_bkR(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_bkS(),this.g_bkr?await this.g_bkT(d,a.port2):await this.g_bkU(d,a.port2)}g_bkV(b){return this.g_bkw.hasOwnProperty(b)?this.g_bkw[b]:b.endsWith("/workermain.js")&&this.g_bkw.hasOwnProperty("workermain.js")?this.g_bkw["workermain.js"]:"playable-ad"===this.g_aWz&&this.g_bkF.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_bkF[b.toLowerCase()]):b}async g_bkW(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aYI()){const a=await this.g_akK(this.g_bku+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_bkR(){if(this.g_aYI()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_bkX(d){return{baseUrl:this.g_aWu,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_aVI(),projectData:d.g_bkY,previewImageBlobs:window.cr_previewImageBlobs||this.g_bkF,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:d.g_fE,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_bkZ,jobScheduler:this.g_aYk.g_bk_(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_bku+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_bku+"opus.wasm.wasm",isWKWebView:this.g_aYI(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_bkT(e,a){const b=this.g_bkV(e.g_bk$);this.g_bkx=await this.g_bkW(b,this.g_aWu,{name:"Runtime"}),this.g_aUA=document.createElement("canvas"),this.g_aUA.style.display="none";const c=this.g_aUA.transferControlToOffscreen();document.body.appendChild(this.g_aUA),window.c3canvas=this.g_aUA,this.g_bkx.postMessage(Object.assign(this.g_bkX(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_bla||[],engineScripts:e.g_bkM,projectScripts:window.g_blb,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aYk.g_blc()]),this.g_bkz=f.map(b=>new b(this)),this.g_bld(),self.c3_callFunction=(c,a)=>this.g_bkA.g_aCM(c,a),"preview"===this.g_aWz&&(self.goToLastErrorScript=()=>this.g_bjO("runtime","go-to-last-error-script"))}async g_bkU(a,b){this.g_aUA=document.createElement("canvas"),this.g_aUA.style.display="none",document.body.appendChild(this.g_aUA),window.c3canvas=this.g_aUA,this.g_bkz=f.map(b=>new b(this)),this.g_bld();const c=a.g_bkM.map(b=>new URL(b,this.g_aWu).toString());if(Array.isArray(a.g_bla)&&c.unshift(...a.g_bla),await Promise.all(c.map(a=>n(a))),a.g_ble&&0<a.g_ble.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_ble.map(a=>n(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_blf(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_blf(b),100)}}if("preview"===this.g_aWz&&"object"!=typeof self.g_Ov.g_bjI)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_bkX(a),{isInWorker:!1,messagePort:b,canvas:this.g_aUA,runOnStartupFunctions:j});this.g_bky=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_bky,d)}g_blf(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_bkH(){const b=await this.g_aYk.g_blg();return{outputPort:b,transferables:[b]}}g_bjT(){if(this.g_bkr)throw new Error("not available in worker mode");return this.g_bky}g_bjO(f,a,b,c,d){this.g_bkt.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_bkE?void 0:d)}g_bjQ(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_bkt.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_bkE?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_blh(c);else if("result"===a)this.g_bli(c);else if("runtime-ready"===a)this.g_blj();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_blh(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_blk(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_blk(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_blk(c,!1,d.toString())}):this.g_blk(c,!0,f))}g_blk(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_bkt.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_bli(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_bjV(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_bll(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_bld(){for(const b of this.g_bkz)if("runtime"===b.g_bjY())return void(this.g_bkA=b);throw new Error("cannot find runtime DOM handler")}g_bkP(b){this.g_bjO("debugger","message",b)}g_blj(){for(const b of this.g_bkz)b.g_bjM()}static g_aVI(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_blm(){return await this.g_bjQ("runtime","get-remote-preview-status-info")}g_bjZ(b){this.g_bkD.push(b),this.g_bln()}g_bj_(c){const a=this.g_bkD.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_bkD.splice(a,1),this.g_bkD.length||this.g_bkI()}g_bln(){-1===this.g_aVh&&this.g_bkD.length&&(this.g_aVh=requestAnimationFrame(this.g_bkB))}g_bkI(){-1!==this.g_aVh&&(cancelAnimationFrame(this.g_aVh),this.g_aVh=-1)}g_bkC(){this.g_aVh=-1;for(const b of this.g_bkD)b();this.g_bln()}g_blo(b){this.g_bkA.g_blo(b)}g_blp(b){this.g_bkA.g_blp(b)}g_blq(){this.g_bkA.g_blq()}g_EB(b){this.g_bkA.g_EB(b)}g_ald(b){return!!c[b]}async g_aNU(c){const a=await this.g_bjQ("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_SU(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_SV(b){return!this.g_SU(b)}async g_bkG(c){const a=c.filename;switch(c.as){case"text":return await this.g_akL(a);case"buffer":return await this.g_akK(a);default:throw new Error("unsupported type");}}g_blr(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_akL(b){const a=await this.g_blr(b);return await o(a)}g_bls(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_blt(b.filename,b.g_pd,b.g_pe)}}g_akK(f){return new Promise((g,b)=>{d.push({filename:f,g_pd:b=>{e--,this.g_bls(),g(b)},g_pe:c=>{e--,this.g_bls(),b(c)}}),this.g_bls()})}async g_blt(c,a,b){try{const b=await this.g_blr(c),d=await p(b);a(d)}catch(c){b(c)}}async g_bkL(){const d=[];for(const[a,b]of Object.entries(this.g_bkF))d.push(this.g_blu(a,b));await Promise.all(d)}async g_blu(e,a){if("object"==typeof a)this.g_bkF[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_bkF[e]=c}}g_bkS(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_bkE=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function p(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function q(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function r(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function s(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function d(c){const a=c.target.tagName.toLowerCase();i.has(a)&&c.preventDefault()}function e(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}const f=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),h={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},g={dispatchUserScriptEvent:!0},c={dispatchRuntimeEvent:!0},i=new Set(["canvas","body","html"]);self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let j=!1;document.addEventListener("pause",()=>j=!0),document.addEventListener("resume",()=>j=!1);const k=class extends g_bjJ{constructor(f){super(f,"runtime"),this.g_blv=!0,this.g_blw=-1,this.g_blx="any",this.g_bly=!1,this.g_blz=!1,this.g_blA=null,f.g_bjV("canvas","update-size",b=>this.g_blB(b)),f.g_bjV("runtime","invoke-download",b=>this.g_blC(b)),f.g_bjV("runtime","raster-svg-image",b=>this.g_blD(b)),f.g_bjV("runtime","set-target-orientation",b=>this.g_blE(b)),f.g_bjV("runtime","register-sw",()=>this.g_blF()),f.g_bjV("runtime","post-to-debugger",b=>this.g_blG(b)),f.g_bjV("runtime","go-to-script",b=>this.g_blG(b)),f.g_bjV("runtime","before-start-ticking",()=>this.g_blH()),f.g_bjV("runtime","debug-highlight",b=>this.g_blI(b)),f.g_bjV("runtime","enable-device-orientation",()=>this.g_blJ()),f.g_bjV("runtime","enable-device-motion",()=>this.g_blK()),f.g_bjV("runtime","add-stylesheet",b=>this.g_blL(b));const g=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();g.has(c)||s(a)||b.preventDefault()}),window.addEventListener("selectstart",d),window.addEventListener("gesturehold",d),window.addEventListener("touchstart",d,{passive:!1});const a=f.g_bkJ();"undefined"==typeof PointerEvent?a.addEventListener("touchstart",d):(window.addEventListener("pointerdown",d,{passive:!1}),a.addEventListener("pointerdown",d)),this.g_blM=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",e,{passive:!1}),window.addEventListener("wheel",e,{passive:!1}),window.addEventListener("resize",()=>this.g_aVv()),this.g_blN=new Set,this.g_blO=new WeakSet,this.g_bem=!1}g_blH(){return"cordova"===this.g_aYq.g_aZN()?(document.addEventListener("pause",()=>this.g_aYm(!0)),document.addEventListener("resume",()=>this.g_aYm(!1))):document.addEventListener("visibilitychange",()=>this.g_aYm(document.hidden)),{isSuspended:!!(document.hidden||j)}}g_bjM(){window.addEventListener("focus",()=>this.g_blP("window-focus")),window.addEventListener("blur",()=>{this.g_blP("window-blur",{parentHasFocus:b()}),this.g_blM=0}),window.addEventListener("fullscreenchange",()=>this.g_aVw()),window.addEventListener("webkitfullscreenchange",()=>this.g_aVw()),window.addEventListener("mozfullscreenchange",()=>this.g_aVw()),window.addEventListener("fullscreenerror",b=>this.g_aVx(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aVx(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aVx(b)),window.addEventListener("keydown",b=>this.g_blQ("keydown",b)),window.addEventListener("keyup",b=>this.g_blQ("keyup",b)),window.addEventListener("dblclick",b=>this.g_blR("dblclick",b,h)),window.addEventListener("wheel",b=>this.g_blS("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_blT("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_blT("pointermove",b)),window.addEventListener("mouseup",b=>this.g_blT("pointerup",b)),window.addEventListener("touchstart",b=>this.g_blU("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_blU("pointermove",b)),window.addEventListener("touchend",b=>this.g_blU("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_blU("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_blV("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_blV("pointermove",b)),window.addEventListener("pointerup",b=>this.g_blV("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_blV("pointercancel",b)));const c=()=>this.g_blq();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_blP(d,a){this.g_bjN(d,a||null,c)}g_blW(){return Math.max(window.innerWidth,1)}g_blX(){return Math.max(window.innerHeight,1)}g_aVv(){const c=this.g_blW(),a=this.g_blX();this.g_blP("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aYq.g_aYI()&&(-1!==this.g_blw&&clearTimeout(this.g_blw),this.g_blY(c,a,0))}g_blZ(d,a,b){-1!==this.g_blw&&clearTimeout(this.g_blw),this.g_blw=setTimeout(()=>this.g_blY(d,a,b),48)}g_blY(f,a,b){const c=this.g_blW(),d=this.g_blX();this.g_blw=-1,c!=f||d!=a?this.g_blP("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_blZ(c,d,b+1)}g_blE(b){this.g_blx=b.targetOrientation}g_bl_(){const c=this.g_blx;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aVw(){const b=g_bkq.g_aVI();b&&"any"!==this.g_blx&&this.g_bl_(),this.g_bjN("fullscreenchange",{isFullscreen:b,innerWidth:this.g_blW(),innerHeight:this.g_blX()})}g_aVx(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_bjN("fullscreenerror",{isFullscreen:g_bkq.g_aVI(),innerWidth:this.g_blW(),innerHeight:this.g_blX()})}g_aYm(b){b?this.g_aYq.g_bkI():this.g_aYq.g_bln(),this.g_bjN("visibilitychange",{hidden:b})}g_blQ(d,a){const b=f.get(a.code)||a.code;this.g_bjR(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},h)}g_blS(c,a){this.g_bjN(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},h)}g_blR(a,b,c){p(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_bjR(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_blT(a,e){if(!p(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_blM;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_bjR(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},h),this.g_blM=e.buttons,this.g_blR(e.type,e,g)}}g_blV(d,a){"pointerdown"===d&&window!==window.top&&window.focus();let b=0;if("mouse"===a.pointerType&&(b=this.g_blM),this.g_bjR(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},h),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_blR(b,a,g),this.g_blM=a.buttons}}g_blU(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_bjR(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},h)}}g_blJ(){this.g_bly||(this.g_bly=!0,window.addEventListener("deviceorientation",b=>this.g_baU(b)))}g_blK(){this.g_blz||(this.g_blz=!0,window.addEventListener("devicemotion",b=>this.g_baV(b)))}g_baU(b){this.g_bjN("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},h)}g_baV(i){let a=null;const j=i.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=i.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=i.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_bjN("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:i.interval,timeStamp:i.timeStamp},h)}g_blB(d){const a=this.g_bjX(),b=a.g_bkJ();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_bkR(),this.g_blv&&(b.style.display="",this.g_blv=!1)}g_blC(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_blD(d){const a=d.blob,b=d.width,c=d.height,e=await r(a),f=await self.C3_RasterSvgImage(e,b,c);return await createImageBitmap(f)}async g_blL(b){await q(b.url)}g_blq(){const c=[...this.g_blN];if(this.g_blN.clear(),!this.g_bem)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_blO.has(d)||this.g_blN.add(d)})}}g_blo(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_blO.delete(c);let a;try{a=c.play()}catch(a){return void this.g_blN.add(c)}a&&a.catch(()=>{this.g_blO.has(c)||this.g_blN.add(c)})}g_blp(b){this.g_blN.delete(b),this.g_blO.add(b)}g_EB(b){this.g_bem=!!b}g_blI(d){const a=d.show;if(!a)return void(this.g_blA&&(this.g_blA.style.display="none"));this.g_blA||(this.g_blA=document.createElement("div"),this.g_blA.id="inspectOutline",document.body.appendChild(this.g_blA));const b=this.g_blA;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_blF(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_blG(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_aCM(c,a){return this.g_bjP("js-invoke-function",{name:c,params:a})}};g_bkq.g_bll(k)}{const c=document.currentScript.src;self.g_bkQ=class{constructor(a){this.g_bl$=a,this.g_aWu=c?c.substr(0,c.lastIndexOf("/")+1):a.g_Sp(),this.g_a_o=Math.min(navigator.hardwareConcurrency||2,16),this.g_bma=null,this.g_bmb=[],this.g_a_m=null,this.g_bmc=null}async g_aRM(){if(this.g_bmd)throw new Error("already initialised");this.g_bmd=!0;const c=this.g_bl$.g_bkV("dispatchworker.js");this.g_bma=await this.g_bl$.g_bkW(c,this.g_aWu,{name:"DispatchWorker"});const a=new MessageChannel;this.g_a_m=a.port1,this.g_bma.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_bmc=await this.g_blg()}async g_blg(){const f=this.g_bmb.length,a=this.g_bl$.g_bkV("jobworker.js"),b=await this.g_bl$.g_bkW(a,this.g_aWu,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_bma.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_bmb.push(b),d.port1}g_bk_(){return{inputPort:this.g_a_m,outputPort:this.g_bmc,maxNumWorkers:this.g_a_o}}g_blc(){return[this.g_a_m,this.g_bmc]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_bkq({g_bks:!1,g_bk$:"workermain.js",g_bkM:["scripts/c3runtime.js"],g_bkv:"scripts/",g_bla:[],g_fE:"html5"})}{const b=class extends g_bjJ{constructor(b){super(b,"touch"),this.g_bjU("request-permission",b=>this.g_bme(b))}async g_bme(d){const a=d.type;let b=!0;0===a?b=await this.g_bmf():1===a&&(b=await this.g_bmg()),this.g_bjN("permission-result",{type:a,result:b})}async g_bmf(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_bmg(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_bkq.g_bll(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_bj${constructor(b){super(b,"text-input"),this.g_bkj("scroll-to-bottom",b=>this.g_bmh(b))}g_aMF(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_bkm("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_bkm("dblclick",b)}),d.addEventListener("input",()=>this.g_bkl("change",b,{text:d.value})),d.id=c.id,this.g_bkn(d,c),d}g_bkn(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_bmh(b){b.scrollTop=b.scrollHeight}};g_bkq.g_bll(b)}{function g(b){b.stopPropagation()}const a=class extends g_bj${constructor(b){super(b,"button")}g_aMF(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.userSelect="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_bkm("click",a,{isChecked:c.checked})),c.id=b.id,this.g_bkn(e,b),e}g_bsx(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_bkn(d,a){const b=this.g_bsx(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_bkq.g_bll(a)}{const b=class extends g_bjJ{constructor(b){super(b,"browser"),this.g_aWz="",this.g_bjU("get-initial-state",b=>this.g_bpS(b)),this.g_bjU("ready-for-sw-messages",()=>this.g_bpT()),this.g_bjU("alert",b=>this.g_bpU(b)),this.g_bjU("close",()=>this.g_bpV()),this.g_bjU("set-focus",b=>this.g_bkg(b)),this.g_bjU("vibrate",b=>this.g_bpW(b)),this.g_bjU("lock-orientation",b=>this.g_bpX(b)),this.g_bjU("unlock-orientation",()=>this.g_bpY()),this.g_bjU("navigate",b=>this.g_bpZ(b)),this.g_bjU("request-fullscreen",b=>this.g_bp_(b)),this.g_bjU("exit-fullscreen",()=>this.g_bp$()),window.addEventListener("online",()=>this.g_beY(!0)),window.addEventListener("offline",()=>this.g_beY(!1)),document.addEventListener("backbutton",()=>this.g_bqa()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_bqb(b))}g_bpS(b){return this.g_aWz=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_bpT(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_bjN("sw-message",b.data))}g_beY(b){this.g_bjN("online-state",{isOnline:b})}g_bqa(){this.g_bjN("backbutton")}g_bqb(b){b.handled=!0,this.g_bjN("backbutton")}g_bqc(){return"nwjs"===this.g_aWz?nw.Window.get():null}g_bpU(b){alert(b.message)}g_bpV(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_bkg(c){const d=c.isFocus;if("nwjs"===this.g_aWz){const b=this.g_bqc();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_bpW(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_bpX(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_bpY(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_bpZ(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_FM();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_beX&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_bp_(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_bp$(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_bkq.g_bll(b)}{const b=class extends g_bjJ{constructor(b){super(b,"mouse"),this.g_bjU("cursor",b=>this.g_bsy(b))}g_bsy(b){document.body.style.cursor=b}};g_bkq.g_bll(b)}