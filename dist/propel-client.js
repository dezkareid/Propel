!function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return i(n?n:e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return function(n){"statuschange"===n.type&&u(e,{action:n.isSubscribed?"subscribe":"unsubscribe",subscription:n.currentSubscription,data:t})}}function u(e,t){return fetch(e,{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c={"not supported":"Your browser doesn't support push messaging.",blocked:"The user denied permission to show notifications.",prompt:"The user dismissed the notification permission dialog.",endpoint:"No endpoint URL specified.",nogcmid:'Please ensure you have a Web App Manifest with a "gcm_sender_id" defined.'},p=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this));return n.message="Subscription failed.",c[e]&&(n.message+=" "+c[e]),n.type=e,n}return o(t,e),t}(Error),f=function b(e,t){var n=this;if(r(this,b),this.type=e,t){var i=Object.keys(t);i.forEach(function(e){n[e]=t[e]})}},h=function(){function e(){r(this,e),this._eventTypes=new Map}return a(e,[{key:"addEventListener",value:function(e,t){this._eventTypes.has(e)||this._eventTypes.set(e,new Set),this._eventTypes.get(e).add(t)}},{key:"removeEventListener",value:function(e,t){this._eventTypes.has(e)&&this._eventTypes.get(e)["delete"](t)}},{key:"dispatchEvent",value:function(e){if(this._eventTypes.has(e.type)){var t=this._eventTypes.get(e.type);t.forEach(function(t){t(e)})}}}]),e}(),d="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"permissions"in navigator&&"showNotification"in ServiceWorkerRegistration.prototype,v={"bad constructor":"The PushClient constructor expects either service worker registration or the path to a service worker file and an optional scope string.","redundant worker":"Worker became redundant"},l=function(e){if(e.active)return Promise.resolve(e);var t=e.installing||e.waiting;return new Promise(function(n,r){if("activated"===t.state)return void n(e);var i=function o(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(new Error(v["redundant worker"]))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",i)})},g=function(e){function t(e,n){r(this,t);var o=i(this,Object.getPrototypeOf(t).call(this));if(!t.supported())throw new Error("Your browser does not support the web push API");if(e instanceof ServiceWorkerRegistration)o._registrationPromise=Promise.resolve(e);else{var s=e;if(!s||"string"!=typeof s||0===s.length)throw new Error(v["bad constructor"]);var u=void 0;n&&(u={scope:n}),o._registrationPromise=navigator.serviceWorker.register(e,u)}return o._dispatchStatusUpdate(),o}return o(t,e),a(t,[{key:"_dispatchStatusUpdate",value:function(){var e=this;return Promise.all([this.getSubscription(),t.getPermissionState()]).then(function(e){return{isSubscribed:null!==e[0],currentSubscription:e[0],permissionState:e[1].state}}).then(function(t){e.dispatchEvent(new f("statuschange",t))})["catch"](function(e){console.warn("Unable to dispatch a status event getSubscription() failed.",e)})}},{key:"subscribe",value:function(){var e=this;return this.requestPermission(!1).then(function(t){if("granted"!==t)throw e._dispatchStatusUpdate(),new p(t);return e.dispatchEvent(new f("requestingsubscription")),e._registrationPromise}).then(l).then(function(e){return e.pushManager.subscribe({userVisibleOnly:!0})["catch"](function(e){throw"Registration failed - no sender id provided"===e.message?new p("nogcmid"):e})}).then(function(t){return e._dispatchStatusUpdate(),t})}},{key:"unsubscribe",value:function(){var e=this;return this.getRegistration().then(function(e){return e?e.pushManager.getSubscription():void 0}).then(function(e){return e?e.unsubscribe():void 0}).then(function(){e._dispatchStatusUpdate()})}},{key:"getRegistration",value:function(){return this._registrationPromise}},{key:"getSubscription",value:function(){return this.getRegistration().then(function(e){return e?e.pushManager.getSubscription():null})}},{key:"requestPermission",value:function(){var e=this,n=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];return t.getPermissionState().then(function(t){return"prompt"===t.state&&e.dispatchEvent(new f("requestingpermission")),new Promise(function(e){return Notification.requestPermission(e)}).then(function(t){return n&&e._dispatchStatusUpdate(),t})})}}],[{key:"supported",value:function(){return d}},{key:"getPermissionState",value:function(){return navigator.permissions.query({name:"push",userVisibleOnly:!0})}}]),t}(h);window.goog=window.goog||{},window.goog.propel=window.goog.propel||{PropelClient:g,serverUpdater:s}},{}]},{},[1]);
//# sourceMappingURL=propel-client.js.map
