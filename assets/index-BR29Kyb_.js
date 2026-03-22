(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},Gl={},rg={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),dv=Symbol.for("react.portal"),pv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),gv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),vv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),yv=Symbol.for("react.suspense"),Sv=Symbol.for("react.memo"),Mv=Symbol.for("react.lazy"),Id=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,ag={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=Bs.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=ag,this.updater=n||sg}var ff=hf.prototype=new lg;ff.constructor=hf;og(ff,Bs.prototype);ff.isPureReactComponent=!0;var Ud=Array.isArray,cg=Object.prototype.hasOwnProperty,df={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qo,type:t,key:s,ref:o,props:r,_owner:df.current}}function wv(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function Tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Od=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tv(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case dv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+dc(o,0):i,Ud(r)?(n="",t!=null&&(n=t.replace(Od,"$&/")+"/"),Ya(r,e,n,"",function(c){return c})):r!=null&&(pf(r)&&(r=wv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+dc(s,a);o+=Ya(s,e,n,l,r)}else if(l=Ev(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+dc(s,a++),o+=Ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},qa={transition:null},Cv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:qa,ReactCurrentOwner:df};function fg(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Bs;We.Fragment=pv;We.Profiler=gv;We.PureComponent=hf;We.StrictMode=mv;We.Suspense=yv;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;We.act=fg;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qo,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};We.createElement=hg;We.createFactory=function(t){var e=hg.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:xv,render:t}};We.isValidElement=pf;We.lazy=function(t){return{$$typeof:Mv,_payload:{_status:-1,_result:t},_init:Av}};We.memo=function(t,e){return{$$typeof:Sv,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};We.unstable_act=fg;We.useCallback=function(t,e){return $t.current.useCallback(t,e)};We.useContext=function(t){return $t.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};We.useEffect=function(t,e){return $t.current.useEffect(t,e)};We.useId=function(){return $t.current.useId()};We.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return $t.current.useMemo(t,e)};We.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};We.useRef=function(t){return $t.current.useRef(t)};We.useState=function(t){return $t.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return $t.current.useTransition()};We.version="18.3.1";rg.exports=We;var Xe=rg.exports;const Rv=fv(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=Xe,bv=Symbol.for("react.element"),Lv=Symbol.for("react.fragment"),Dv=Object.prototype.hasOwnProperty,Nv=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iv={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dv.call(e,i)&&!Iv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bv,type:t,key:s,ref:o,props:r,_owner:Nv.current}}Gl.Fragment=Lv;Gl.jsx=dg;Gl.jsxs=dg;ig.exports=Gl;var N=ig.exports,Mu={},pg={exports:{}},vn={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var J=D.length;D.push(Y);e:for(;0<J;){var re=J-1>>>1,Te=D[re];if(0<r(Te,Y))D[re]=Y,D[J]=Te,J=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],J=D.pop();if(J!==Y){D[0]=J;e:for(var re=0,Te=D.length,ze=Te>>>1;re<ze;){var W=2*(re+1)-1,te=D[W],fe=W+1,le=D[fe];if(0>r(te,J))fe<Te&&0>r(le,te)?(D[re]=le,D[fe]=J,re=fe):(D[re]=te,D[W]=J,re=W);else if(fe<Te&&0>r(le,J))D[re]=le,D[fe]=J,re=fe;else break e}}return Y}function r(D,Y){var J=D.sortIndex-Y.sortIndex;return J!==0?J:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(D){if(y=!1,_(D),!g)if(n(l)!==null)g=!0,B(b);else{var Y=n(c);Y!==null&&Q(S,Y.startTime-D)}}function b(D,Y){g=!1,y&&(y=!1,h(P),P=-1),p=!0;var J=f;try{for(_(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||D&&!E());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var Te=re(d.expirationTime<=Y);Y=t.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&i(l),_(Y)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var W=n(c);W!==null&&Q(S,W.startTime-Y),ze=!1}return ze}finally{d=null,f=J,p=!1}}var R=!1,T=null,P=-1,X=5,x=-1;function E(){return!(t.unstable_now()-x<X)}function z(){if(T!==null){var D=t.unstable_now();x=D;var Y=!0;try{Y=T(!0,D)}finally{Y?k():(R=!1,T=null)}}else R=!1}var k;if(typeof v=="function")k=function(){v(z)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,K=G.port2;G.port1.onmessage=z,k=function(){K.postMessage(null)}}else k=function(){m(z,0)};function B(D){T=D,R||(R=!0,k())}function Q(D,Y){P=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,B(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var J=f;f=Y;try{return D()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=f;f=D;try{return Y()}finally{f=J}},t.unstable_scheduleCallback=function(D,Y,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,D={id:u++,callback:Y,priorityLevel:D,startTime:J,expirationTime:Te,sortIndex:-1},J>re?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(y?(h(P),P=-1):y=!0,Q(S,J-re))):(D.sortIndex=Te,e(l,D),g||p||(g=!0,B(b))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var Y=f;return function(){var J=f;f=Y;try{return D.apply(this,arguments)}finally{f=J}}}})(gg);mg.exports=gg;var Uv=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=Xe,_n=Uv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,Co={};function Ur(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Co[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,Fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fd={},kd={};function kv(t){return Eu.call(kd,t)?!0:Eu.call(Fd,t)?!1:Fv.test(t)?kd[t]=!0:(Fd[t]=!0,!1)}function zv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bv(t,e,n,i){if(e===null||typeof e>"u"||zv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);Ft[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);Ft[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _f(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bv(e,n,r,i)&&(n=null),i||r===null?kv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),xg=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),zd=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,pc;function lo(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function Hv(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case wu:return"Profiler";case vf:return"StrictMode";case Tu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xg:return(t.displayName||"Context")+".Consumer";case vg:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function Vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gv(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=Gv(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Eg(t,e){e=e.checked,e!=null&&_f(t,"checked",e,!1)}function Pu(t,e){Eg(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&bu(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bu(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(co(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function wg(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,Ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function Rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uu=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,_s=null,vs=null;function Wd(t){if(t=Zo(t)){if(typeof Ou!="function")throw Error(se(280));var e=t.stateNode;e&&(e=ql(e),Ou(t.stateNode,t.type,e))}}function Pg(t){_s?vs?vs.push(t):vs=[t]:_s=t}function bg(){if(_s){var t=_s,e=vs;if(vs=_s=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function Lg(t,e){return t(e)}function Dg(){}var _c=!1;function Ng(t,e,n){if(_c)return t(e,n);_c=!0;try{return Lg(t,e,n)}finally{_c=!1,(_s!==null||vs!==null)&&(Dg(),bg())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Fu=!1;if(xi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Fu=!1}function Xv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var go=!1,pl=null,ml=!1,ku=null,Yv={onError:function(t){go=!0,pl=t}};function qv(t,e,n,i,r,s,o,a,l){go=!1,pl=null,Xv.apply(Yv,arguments)}function $v(t,e,n,i,r,s,o,a,l){if(qv.apply(this,arguments),go){if(go){var c=pl;go=!1,pl=null}else throw Error(se(198));ml||(ml=!0,ku=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jd(t){if(Or(t)!==t)throw Error(se(188))}function Kv(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jd(r),t;if(s===i)return jd(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Ug(t){return t=Kv(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var Fg=_n.unstable_scheduleCallback,Xd=_n.unstable_cancelCallback,Zv=_n.unstable_shouldYield,Jv=_n.unstable_requestPaint,St=_n.unstable_now,Qv=_n.unstable_getCurrentPriorityLevel,Mf=_n.unstable_ImmediatePriority,kg=_n.unstable_UserBlockingPriority,gl=_n.unstable_NormalPriority,ex=_n.unstable_LowPriority,zg=_n.unstable_IdlePriority,Wl=null,Zn=null;function tx(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:rx,nx=Math.log,ix=Math.LN2;function rx(t){return t>>>=0,t===0?32:31-(nx(t)/ix|0)|0}var la=64,ca=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=sx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bg(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vg,wf,Gg,Wg,jg,Bu=!1,ua=[],Hi=null,Vi=null,Gi=null,bo=new Map,Lo=new Map,Oi=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zo(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cx(t,e,n,i,r){switch(e){case"focusin":return Hi=Ys(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Ys(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Ys(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bo.set(s,Ys(bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Lo.set(s,Ys(Lo.get(s)||null,t,e,n,i,r)),!0}return!1}function Xg(t){var e=vr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Ig(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uu=i,n.target.dispatchEvent(i),Uu=null}else return e=Zo(n),e!==null&&wf(e),t.blockedOn=n,!1;e.shift()}return!0}function qd(t,e,n){$a(t)&&n.delete(e)}function ux(){Bu=!1,Hi!==null&&$a(Hi)&&(Hi=null),Vi!==null&&$a(Vi)&&(Vi=null),Gi!==null&&$a(Gi)&&(Gi=null),bo.forEach(qd),Lo.forEach(qd)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,ux)))}function Do(t){function e(r){return qs(r,t)}if(0<ua.length){qs(ua[0],t);for(var n=1;n<ua.length;n++){var i=ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&qs(Hi,t),Vi!==null&&qs(Vi,t),Gi!==null&&qs(Gi,t),bo.forEach(e),Lo.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)Xg(n),n.blockedOn===null&&Oi.shift()}var xs=wi.ReactCurrentBatchConfig,vl=!0;function hx(t,e,n,i){var r=nt,s=xs.transition;xs.transition=null;try{nt=1,Tf(t,e,n,i)}finally{nt=r,xs.transition=s}}function fx(t,e,n,i){var r=nt,s=xs.transition;xs.transition=null;try{nt=4,Tf(t,e,n,i)}finally{nt=r,xs.transition=s}}function Tf(t,e,n,i){if(vl){var r=Hu(t,e,n,i);if(r===null)Rc(t,e,i,xl,n),Yd(t,i);else if(cx(r,t,e,n,i))i.stopPropagation();else if(Yd(t,i),e&4&&-1<lx.indexOf(t)){for(;r!==null;){var s=Zo(r);if(s!==null&&Vg(s),s=Hu(t,e,n,i),s===null&&Rc(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var xl=null;function Hu(t,e,n,i){if(xl=null,t=Sf(i),t=vr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qv()){case Mf:return 1;case kg:return 4;case gl:case ex:return 16;case zg:return 536870912;default:return 16}default:return 16}}var zi=null,Af=null,Ka=null;function qg(){if(Ka)return Ka;var t,e=Af,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ka=r.slice(t,1<i?1-i:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function $d(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:$d,this.isPropagationStopped=$d,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=xn(Hs),Ko=_t({},Hs,{view:0,detail:0}),dx=xn(Ko),xc,yc,$s,jl=_t({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(xc=t.screenX-$s.screenX,yc=t.screenY-$s.screenY):yc=xc=0,$s=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Kd=xn(jl),px=_t({},jl,{dataTransfer:0}),mx=xn(px),gx=_t({},Ko,{relatedTarget:0}),Sc=xn(gx),_x=_t({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=xn(_x),xx=_t({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=xn(xx),Sx=_t({},Hs,{data:0}),Zd=xn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function Rf(){return Tx}var Ax=_t({},Ko,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cx=xn(Ax),Rx=_t({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=xn(Rx),Px=_t({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),bx=xn(Px),Lx=_t({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=xn(Lx),Nx=_t({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=xn(Nx),Ux=[9,13,27,32],Pf=xi&&"CompositionEvent"in window,_o=null;xi&&"documentMode"in document&&(_o=document.documentMode);var Ox=xi&&"TextEvent"in window&&!_o,$g=xi&&(!Pf||_o&&8<_o&&11>=_o),Qd=" ",ep=!1;function Kg(t,e){switch(t){case"keyup":return Ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Fx(t,e){switch(t){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(ep=!0,Qd);case"textInput":return t=e.data,t===Qd&&ep?null:t;default:return null}}function kx(t,e){if(is)return t==="compositionend"||!Pf&&Kg(t,e)?(t=qg(),Ka=Af=zi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zx[t.type]:e==="textarea"}function Jg(t,e,n,i){Pg(i),e=yl(e,"onChange"),0<e.length&&(n=new Cf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vo=null,No=null;function Bx(t){c0(t,0)}function Xl(t){var e=os(t);if(Mg(e))return t}function Hx(t,e){if(t==="change")return e}var Qg=!1;if(xi){var Mc;if(xi){var Ec="oninput"in document;if(!Ec){var np=document.createElement("div");np.setAttribute("oninput","return;"),Ec=typeof np.oninput=="function"}Mc=Ec}else Mc=!1;Qg=Mc&&(!document.documentMode||9<document.documentMode)}function ip(){vo&&(vo.detachEvent("onpropertychange",e0),No=vo=null)}function e0(t){if(t.propertyName==="value"&&Xl(No)){var e=[];Jg(e,No,t,Sf(t)),Ng(Bx,e)}}function Vx(t,e,n){t==="focusin"?(ip(),vo=e,No=n,vo.attachEvent("onpropertychange",e0)):t==="focusout"&&ip()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(No)}function Wx(t,e){if(t==="click")return Xl(e)}function jx(t,e){if(t==="input"||t==="change")return Xl(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Xx;function Io(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function t0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n0(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yx(t){var e=n0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t0(n.ownerDocument.documentElement,n)){if(i!==null&&bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=xi&&"documentMode"in document&&11>=document.documentMode,rs=null,Vu=null,xo=null,Gu=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||rs==null||rs!==dl(i)||(i=rs,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&Io(xo,i)||(xo=i,i=yl(Vu,"onSelect"),0<i.length&&(e=new Cf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},wc={},i0={};xi&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Yl(t){if(wc[t])return wc[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i0)return wc[t]=e[n];return t}var r0=Yl("animationend"),s0=Yl("animationiteration"),o0=Yl("animationstart"),a0=Yl("transitionend"),l0=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){l0.set(t,e),Ur(e,[t])}for(var Tc=0;Tc<ap.length;Tc++){var Ac=ap[Tc],$x=Ac.toLowerCase(),Kx=Ac[0].toUpperCase()+Ac.slice(1);nr($x,"on"+Kx)}nr(r0,"onAnimationEnd");nr(s0,"onAnimationIteration");nr(o0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(a0,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$v(i,e,void 0,t),t.currentTarget=null}function c0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(ml)throw t=ku,ml=!1,ku=null,t}function lt(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(u0(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),u0(n,t,i,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[da]){t[da]=!0,_g.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[da]||(e[da]=!0,Cc("selectionchange",!1,e))}}function u0(t,e,n,i){switch(Yg(e)){case 1:var r=hx;break;case 4:r=fx;break;default:r=Tf}n=r.bind(null,e,n,t),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ng(function(){var c=s,u=Sf(n),d=[];e:{var f=l0.get(t);if(f!==void 0){var p=Cf,g=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":p=Cx;break;case"focusin":g="focus",p=Sc;break;case"focusout":g="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bx;break;case r0:case s0:case o0:p=vx;break;case a0:p=Dx;break;case"scroll":p=dx;break;case"wheel":p=Ix;break;case"copy":case"cut":case"paste":p=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jd}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Po(v,h),S!=null&&y.push(Oo(v,S,_)))),m)break;v=v.return}0<y.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Uu&&(g=n.relatedTarget||n.fromElement)&&(vr(g)||g[yi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?vr(g):null,g!==null&&(m=Or(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Kd,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jd,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:os(p),_=g==null?f:os(g),f=new y(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=_,S=null,vr(u)===c&&(y=new y(h,v+"enter",g,n,u),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,h=g,v=0,_=y;_;_=zr(_))v++;for(_=0,S=h;S;S=zr(S))_++;for(;0<v-_;)y=zr(y),v--;for(;0<_-v;)h=zr(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=zr(y),h=zr(h)}y=null}else y=null;p!==null&&cp(d,f,p,y,!1),g!==null&&m!==null&&cp(d,m,g,y,!0)}}e:{if(f=c?os(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=Hx;else if(tp(f))if(Qg)b=jx;else{b=Gx;var R=Vx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Wx);if(b&&(b=b(t,c))){Jg(d,b,n,u);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&bu(f,"number",f.value)}switch(R=c?os(c):window,t){case"focusin":(tp(R)||R.contentEditable==="true")&&(rs=R,Vu=c,xo=null);break;case"focusout":xo=Vu=rs=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,op(d,n,u);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":op(d,n,u)}var T;if(Pf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else is?Kg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($g&&n.locale!=="ko"&&(is||P!=="onCompositionStart"?P==="onCompositionEnd"&&is&&(T=qg()):(zi=u,Af="value"in zi?zi.value:zi.textContent,is=!0)),R=yl(c,P),0<R.length&&(P=new Zd(P,t,null,n,u),d.push({event:P,listeners:R}),T?P.data=T:(T=Zg(n),T!==null&&(P.data=T)))),(T=Ox?Fx(t,n):kx(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(u=new Zd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}c0(d,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Po(t,n),s!=null&&i.unshift(Oo(t,s,r)),s=Po(t,e),s!=null&&i.push(Oo(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Po(n,s),l!=null&&o.unshift(Oo(n,l,a))):r||(l=Po(n,s),l!=null&&o.push(Oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace(Qx,"")}function pa(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(se(425))}function Sl(){}var Wu=null,ju=null;function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(ny)}:Yu;function ny(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Do(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Do(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Vs,Fo="__reactProps$"+Vs,yi="__reactContainer$"+Vs,qu="__reactEvents$"+Vs,iy="__reactListeners$"+Vs,ry="__reactHandles$"+Vs;function vr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[$n])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[$n]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function ql(t){return t[Fo]||null}var $u=[],as=-1;function ir(t){return{current:t}}function ht(t){0>as||(t.current=$u[as],$u[as]=null,as--)}function ot(t,e){as++,$u[as]=t.current,t.current=e}var Qi={},Wt=ir(Qi),rn=ir(!1),Tr=Qi;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Ml(){ht(rn),ht(Wt)}function dp(t,e,n){if(Wt.current!==Qi)throw Error(se(168));ot(Wt,e),ot(rn,n)}function h0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Vv(t)||"Unknown",r));return _t({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=Wt.current,ot(Wt,t),ot(rn,rn.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=h0(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ht(rn),ht(Wt),ot(Wt,t)):ht(rn),ot(rn,n)}var di=null,$l=!1,bc=!1;function f0(t){di===null?di=[t]:di.push(t)}function sy(t){$l=!0,f0(t)}function rr(){if(!bc&&di!==null){bc=!0;var t=0,e=nt;try{var n=di;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,$l=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),Fg(Mf,rr),r}finally{nt=e,bc=!1}}return null}var ls=[],cs=0,wl=null,Tl=0,wn=[],Tn=0,Ar=null,pi=1,mi="";function dr(t,e){ls[cs++]=Tl,ls[cs++]=wl,wl=t,Tl=e}function d0(t,e,n){wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Ar,Ar=t;var i=pi;t=mi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Vn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function Lf(t){t.return!==null&&(dr(t,1),d0(t,1,0))}function Df(t){for(;t===wl;)wl=ls[--cs],ls[cs]=null,Tl=ls[--cs],ls[cs]=null;for(;t===Ar;)Ar=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null,pi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,dt=!1,kn=null;function p0(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(dt){var e=mn;if(e){var n=e;if(!mp(t,e)){if(Ku(t))throw Error(se(418));e=Wi(n.nextSibling);var i=gn;e&&mp(t,e)?p0(i,n):(t.flags=t.flags&-4097|2,dt=!1,gn=t)}}else{if(Ku(t))throw Error(se(418));t.flags=t.flags&-4097|2,dt=!1,gn=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ma(t){if(t!==gn)return!1;if(!dt)return gp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xu(t.type,t.memoizedProps)),e&&(e=mn)){if(Ku(t))throw m0(),Error(se(418));for(;e;)p0(t,e),e=Wi(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Wi(t.stateNode.nextSibling):null;return!0}function m0(){for(var t=mn;t;)t=Wi(t.nextSibling)}function Ps(){mn=gn=null,dt=!1}function Nf(t){kn===null?kn=[t]:kn.push(t)}var oy=wi.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function g0(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=qi(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,S){return v===null||v.tag!==6?(v=Fc(_,h.mode,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,S){var b=_.type;return b===ns?u(h,v,_.props.children,S,_.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ni&&_p(b)===v.type)?(S=r(v,_.props),S.ref=Ks(h,v,_),S.return=h,S):(S=rl(_.type,_.key,_.props,null,h.mode,S),S.ref=Ks(h,v,_),S.return=h,S)}function c(h,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=kc(_,h.mode,S),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,S,b){return v===null||v.tag!==7?(v=wr(_,h.mode,S,b),v.return=h,v):(v=r(v,_),v.return=h,v)}function d(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Fc(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sa:return _=rl(v.type,v.key,v.props,null,h.mode,_),_.ref=Ks(h,null,v),_.return=h,_;case ts:return v=kc(v,h.mode,_),v.return=h,v;case Ni:var S=v._init;return d(h,S(v._payload),_)}if(co(v)||js(v))return v=wr(v,h.mode,_,null),v.return=h,v;ga(h,v)}return null}function f(h,v,_,S){var b=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(h,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sa:return _.key===b?l(h,v,_,S):null;case ts:return _.key===b?c(h,v,_,S):null;case Ni:return b=_._init,f(h,v,b(_._payload),S)}if(co(_)||js(_))return b!==null?null:u(h,v,_,S,null);ga(h,_)}return null}function p(h,v,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(v,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case sa:return h=h.get(S.key===null?_:S.key)||null,l(v,h,S,b);case ts:return h=h.get(S.key===null?_:S.key)||null,c(v,h,S,b);case Ni:var R=S._init;return p(h,v,_,R(S._payload),b)}if(co(S)||js(S))return h=h.get(_)||null,u(v,h,S,b,null);ga(v,S)}return null}function g(h,v,_,S){for(var b=null,R=null,T=v,P=v=0,X=null;T!==null&&P<_.length;P++){T.index>P?(X=T,T=null):X=T.sibling;var x=f(h,T,_[P],S);if(x===null){T===null&&(T=X);break}t&&T&&x.alternate===null&&e(h,T),v=s(x,v,P),R===null?b=x:R.sibling=x,R=x,T=X}if(P===_.length)return n(h,T),dt&&dr(h,P),b;if(T===null){for(;P<_.length;P++)T=d(h,_[P],S),T!==null&&(v=s(T,v,P),R===null?b=T:R.sibling=T,R=T);return dt&&dr(h,P),b}for(T=i(h,T);P<_.length;P++)X=p(T,h,P,_[P],S),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?P:X.key),v=s(X,v,P),R===null?b=X:R.sibling=X,R=X);return t&&T.forEach(function(E){return e(h,E)}),dt&&dr(h,P),b}function y(h,v,_,S){var b=js(_);if(typeof b!="function")throw Error(se(150));if(_=b.call(_),_==null)throw Error(se(151));for(var R=b=null,T=v,P=v=0,X=null,x=_.next();T!==null&&!x.done;P++,x=_.next()){T.index>P?(X=T,T=null):X=T.sibling;var E=f(h,T,x.value,S);if(E===null){T===null&&(T=X);break}t&&T&&E.alternate===null&&e(h,T),v=s(E,v,P),R===null?b=E:R.sibling=E,R=E,T=X}if(x.done)return n(h,T),dt&&dr(h,P),b;if(T===null){for(;!x.done;P++,x=_.next())x=d(h,x.value,S),x!==null&&(v=s(x,v,P),R===null?b=x:R.sibling=x,R=x);return dt&&dr(h,P),b}for(T=i(h,T);!x.done;P++,x=_.next())x=p(T,h,P,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?P:x.key),v=s(x,v,P),R===null?b=x:R.sibling=x,R=x);return t&&T.forEach(function(z){return e(h,z)}),dt&&dr(h,P),b}function m(h,v,_,S){if(typeof _=="object"&&_!==null&&_.type===ns&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case sa:e:{for(var b=_.key,R=v;R!==null;){if(R.key===b){if(b=_.type,b===ns){if(R.tag===7){n(h,R.sibling),v=r(R,_.props.children),v.return=h,h=v;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ni&&_p(b)===R.type){n(h,R.sibling),v=r(R,_.props),v.ref=Ks(h,R,_),v.return=h,h=v;break e}n(h,R);break}else e(h,R);R=R.sibling}_.type===ns?(v=wr(_.props.children,h.mode,S,_.key),v.return=h,h=v):(S=rl(_.type,_.key,_.props,null,h.mode,S),S.ref=Ks(h,v,_),S.return=h,h=S)}return o(h);case ts:e:{for(R=_.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=kc(_,h.mode,S),v.return=h,h=v}return o(h);case Ni:return R=_._init,m(h,v,R(_._payload),S)}if(co(_))return g(h,v,_,S);if(js(_))return y(h,v,_,S);ga(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=Fc(_,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var bs=g0(!0),_0=g0(!1),Al=ir(null),Cl=null,us=null,If=null;function Uf(){If=us=Cl=null}function Of(t){var e=Al.current;ht(Al),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Cl=t,If=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Cl===null)throw Error(se(308));us=t,Cl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var xr=null;function Ff(t){xr===null?xr=[t]:xr.push(t)}function v0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=_t({},d,f);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=d}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Jo={},Jn=ir(Jo),ko=ir(Jo),zo=ir(Jo);function yr(t){if(t===Jo)throw Error(se(174));return t}function zf(t,e){switch(ot(zo,e),ot(ko,t),ot(Jn,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}ht(Jn),ot(Jn,e)}function Ls(){ht(Jn),ht(ko),ht(zo)}function y0(t){yr(zo.current);var e=yr(Jn.current),n=Du(e,t.type);e!==n&&(ot(ko,t),ot(Jn,n))}function Bf(t){ko.current===t&&(ht(Jn),ht(ko))}var pt=ir(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function Hf(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Qa=wi.ReactCurrentDispatcher,Dc=wi.ReactCurrentBatchConfig,Cr=0,gt=null,At=null,Lt=null,bl=!1,yo=!1,Bo=0,ay=0;function kt(){throw Error(se(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Gf(t,e,n,i,r,s){if(Cr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?hy:fy,t=n(i,r),yo){s=0;do{if(yo=!1,Bo=0,25<=s)throw Error(se(301));s+=1,Lt=At=null,e.updateQueue=null,Qa.current=dy,t=n(i,r)}while(yo)}if(Qa.current=Ll,e=At!==null&&At.next!==null,Cr=0,Lt=At=gt=null,bl=!1,e)throw Error(se(300));return t}function Wf(){var t=Bo!==0;return Bo=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function bn(){if(At===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?gt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(se(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ho(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Cr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=u,Rr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=bn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function S0(){}function M0(t,e){var n=gt,i=bn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,jf(T0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Vo(9,w0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(se(349));Cr&30||E0(n,e,r)}return r}function E0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,i){e.value=n,e.getSnapshot=i,A0(e)&&C0(t)}function T0(t,e,n){return n(function(){A0(e)&&C0(t)})}function A0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function C0(t){var e=Si(t,1);e!==null&&Gn(e,t,1,-1)}function yp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,gt,t),[e.memoizedState,t]}function Vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R0(){return bn().memoizedState}function el(t,e,n,i){var r=Xn();gt.flags|=t,r.memoizedState=Vo(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Vf(i,o.deps)){r.memoizedState=Vo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Vo(1|e,n,s,i)}function Sp(t,e){return el(8390656,8,t,e)}function jf(t,e){return Kl(2048,8,t,e)}function P0(t,e){return Kl(4,2,t,e)}function b0(t,e){return Kl(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D0(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,L0.bind(null,e,t),n)}function Xf(){}function N0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function I0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function U0(t,e,n){return Cr&21?(Wn(n,e)||(n=Bg(),gt.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function ly(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{nt=n,Dc.transition=i}}function O0(){return bn().memoizedState}function cy(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},F0(t))k0(e,n);else if(n=v0(t,e,n,i),n!==null){var r=Yt();Gn(n,t,i,r),z0(n,e,i)}}function uy(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(F0(t))k0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=v0(t,e,r,i),n!==null&&(r=Yt(),Gn(n,t,i,r),z0(n,e,i))}}function F0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function k0(t,e){yo=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}var Ll={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},hy={readContext:Pn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:Xf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=ly.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Xn();if(dt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Dt===null)throw Error(se(349));Cr&30||E0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sp(T0.bind(null,i,s,t),[t]),i.flags|=2048,Vo(9,w0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Dt.identifierPrefix;if(dt){var n=mi,i=pi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fy={readContext:Pn,useCallback:N0,useContext:Pn,useEffect:jf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:b0,useMemo:I0,useReducer:Nc,useRef:R0,useState:function(){return Nc(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=bn();return U0(e,At.memoizedState,t)},useTransition:function(){var t=Nc(Ho)[0],e=bn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:M0,useId:O0,unstable_isNewReconciler:!1},dy={readContext:Pn,useCallback:N0,useContext:Pn,useEffect:jf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:b0,useMemo:I0,useReducer:Ic,useRef:R0,useState:function(){return Ic(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=bn();return At===null?e.memoizedState=t:U0(e,At.memoizedState,t)},useTransition:function(){var t=Ic(Ho)[0],e=bn().memoizedState;return[t,e]},useMutableSource:S0,useSyncExternalStore:M0,useId:O0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Yi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Gn(e,t,i,n),Ja(e,t,i))}};function Mp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function B0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?Tr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function eh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?Tr:Wt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=Hv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,hh=i),th(t,e)},n}function V0(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){th(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var my=wi.ReactCurrentOwner,nn=!1;function Xt(t,e,n,i){e.child=t===null?_0(e,null,n,i):bs(e,t.child,n,i)}function Cp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Gf(t,e,n,i,s,r),n=Wf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&n&&Lf(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G0(t,e,s,i,r)):(t=rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function G0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return nh(t,e,n,i,r)}function W0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(fs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(fs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(fs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(fs,dn),dn|=i;return Xt(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nh(t,e,n,i,r){var s=sn(n)?Tr:Wt.current;return s=Rs(e,s),ys(e,r),n=Gf(t,e,n,i,s,r),i=Wf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&i&&Lf(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(sn(n)){var s=!0;El(e)}else s=!1;if(ys(e,r),e.stateNode===null)tl(t,e),B0(e,n,i),eh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=sn(n)?Tr:Wt.current,c=Rs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ep(e,o,i,c),Ii=!1;var f=e.memoizedState;o.state=f,Rl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||rn.current||Ii?(typeof u=="function"&&(Qu(e,n,u,i),l=e.memoizedState),(a=Ii||Mp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,x0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?Tr:Wt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ep(e,o,i,l),Ii=!1,f=e.memoizedState,o.state=f,Rl(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||rn.current||Ii?(typeof p=="function"&&(Qu(e,n,p,i),g=e.memoizedState),(c=Ii||Mp(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ih(t,e,n,i,s,r)}function ih(t,e,n,i,r,s){j0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),Mi(t,e,s);i=e.stateNode,my.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function X0(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),zf(t,e.containerInfo)}function bp(t,e,n,i,r){return Ps(),Nf(r),e.flags|=256,Xt(t,e,n,i),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sh(n),e.memoizedState=rh,t):Yf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rh,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&Nf(i),bs(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(se(422))),_a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=rh,s);if(!(e.mode&1))return _a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Uc(s,i,void 0),_a(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Gn(i,t,r,-1))}return Qf(),i=Uc(Error(se(421))),_a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Wi(r.nextSibling),gn=e,dt=!0,kn=null,t!==null&&(wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Ar,pi=t.id,mi=t.overflow,Ar=e),e=Yf(e,i.children),e.flags|=4096,e)}function Lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lp(t,n,e);else if(t.tag===19)Lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:X0(e),Ps();break;case 5:y0(e);break;case 1:sn(e.type)&&El(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(ot(pt,pt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,W0(t,e,n)}return Mi(t,e,n)}var $0,oh,K0,Z0;$0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oh=function(){};K0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Jn.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Lu(t,r),i=Lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Nu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&Ml(),zt(e),null;case 3:return i=e.stateNode,Ls(),ht(rn),ht(Wt),Hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(ph(kn),kn=null))),oh(t,e),zt(e),null;case 5:Bf(e);var r=yr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)K0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return zt(e),null}if(t=yr(Jn.current),ma(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<ho.length;r++)lt(ho[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Bd(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Vd(i,s),lt("invalid",i)}Nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pa(i.textContent,a,t),r=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":oa(i),Hd(i,s,!0);break;case"textarea":oa(i),Gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[Fo]=i,$0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Iu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ho.length;r++)lt(ho[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Bd(t,i),r=Ru(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Vd(t,i),r=Lu(t,i),lt("invalid",t);break;default:r=i}Nu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(t,l):typeof l=="number"&&Ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&_f(t,s,l,o))}switch(n){case"input":oa(t),Hd(t,i,!1);break;case"textarea":oa(t),Gd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=yr(zo.current),yr(Jn.current),ma(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return zt(e),null;case 13:if(ht(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))m0(),Ps(),e.flags|=98560,s=!1;else if(s=ma(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[$n]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(ph(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):Qf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ls(),oh(t,e),t===null&&Uo(e.stateNode.containerInfo),zt(e),null;case 10:return Of(e.type._context),zt(e),null;case 17:return sn(e.type)&&Ml(),zt(e),null;case 19:if(ht(pt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ns&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return zt(e),null}else 2*St()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function xy(t,e){switch(Df(e),e.tag){case 1:return sn(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),ht(rn),ht(Wt),Hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(ht(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(pt),null;case 4:return Ls(),null;case 10:return Of(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var va=!1,Vt=!1,yy=typeof WeakSet=="function"?WeakSet:Set,we=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function ah(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Dp=!1;function Sy(t,e){if(Wu=vl,t=n0(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:t,selectionRange:n},vl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=Dp,Dp=!1,g}function So(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ah(e,n,s)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Fo],delete e[qu],delete e[iy],delete e[ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var It=null,Fn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)e_(t,e,n),n=n.sibling}function e_(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Vt||hs(n,e);case 6:var i=It,r=Fn;It=null,Ai(t,e,n),It=i,Fn=r,It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Do(t)):Pc(It,n.stateNode));break;case 4:i=It,r=Fn,It=n.stateNode.containerInfo,Fn=!0,Ai(t,e,n),It=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ah(n,e,o),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Vt&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ai(t,e,n),Vt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yy),e.forEach(function(i){var r=by.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Fn=!1;break e;case 3:It=a.stateNode.containerInfo,Fn=!0;break e;case 4:It=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(It===null)throw Error(se(160));e_(s,o,r),It=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t_(e,t),e=e.sibling}function t_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),jn(t),i&4){try{So(3,t,t.return),Jl(3,t)}catch(y){xt(t,t.return,y)}try{So(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Dn(e,t),jn(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Dn(e,t),jn(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Ro(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Eg(r,s),Iu(a,o);var c=Iu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Rg(r,d):u==="dangerouslySetInnerHTML"?Ag(r,d):u==="children"?Ro(r,d):_f(r,u,d,c)}switch(a){case"input":Pu(r,s);break;case"textarea":wg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?gs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Dn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Dn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Dn(e,t),jn(t);break;case 13:Dn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kf=St())),i&4&&Ip(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||u,Dn(e,t),Vt=c):Dn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(d=we=u;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:hs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:hs(f,f.return);break;case 22:if(f.memoizedState!==null){Op(d);continue}}p!==null?(p.return=f,we=p):Op(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(y){xt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){xt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),jn(t),i&4&&Ip(t);break;case 21:break;default:Dn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ro(r,""),i.flags&=-33);var s=Np(t);uh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Np(t);ch(t,a,o);break;default:throw Error(se(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){we=t,n_(t)}function n_(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=va;var c=Vt;if(va=o,(Vt=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,we=l):Fp(r);for(;s!==null;)we=s,n_(s),s=s.sibling;we=r,va=a,Vt=c}Up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Up(t)}}function Up(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Do(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Vt||e.flags&512&&lh(e)}catch(f){xt(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Op(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Fp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{lh(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{lh(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var Ey=Math.ceil,Dl=wi.ReactCurrentDispatcher,qf=wi.ReactCurrentOwner,Rn=wi.ReactCurrentBatchConfig,$e=0,Dt=null,wt=null,Ot=0,dn=0,fs=ir(0),Ct=0,Go=null,Rr=0,Ql=0,$f=0,Mo=null,tn=null,Kf=0,Ns=1/0,hi=null,Nl=!1,hh=null,Xi=null,xa=!1,Bi=null,Il=0,Eo=0,fh=null,nl=-1,il=0;function Yt(){return $e&6?St():nl!==-1?nl:nl=St()}function Yi(t){return t.mode&1?$e&2&&Ot!==0?Ot&-Ot:oy.transition!==null?(il===0&&(il=Bg()),il):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Yg(t.type)),t):1}function Gn(t,e,n,i){if(50<Eo)throw Eo=0,fh=null,Error(se(185));$o(t,n,i),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(Ql|=n),Ct===4&&Fi(t,Ot)),on(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ns=St()+500,$l&&rr()))}function on(t,e){var n=t.callbackNode;ox(t,e);var i=_l(t,t===Dt?Ot:0);if(i===0)n!==null&&Xd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xd(n),e===1)t.tag===0?sy(kp.bind(null,t)):f0(kp.bind(null,t)),ty(function(){!($e&6)&&rr()}),n=null;else{switch(Hg(i)){case 1:n=Mf;break;case 4:n=kg;break;case 16:n=gl;break;case 536870912:n=zg;break;default:n=gl}n=u_(n,i_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i_(t,e){if(nl=-1,il=0,$e&6)throw Error(se(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=_l(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=$e;$e|=2;var s=s_();(Dt!==t||Ot!==e)&&(hi=null,Ns=St()+500,Er(t,e));do try{Ay();break}catch(a){r_(t,a)}while(!0);Uf(),Dl.current=s,$e=r,wt!==null?e=0:(Dt=null,Ot=0,e=Ct)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=dh(t,r))),e===1)throw n=Go,Er(t,0),Fi(t,i),on(t,St()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=Ul(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=dh(t,s))),e===1))throw n=Go,Er(t,0),Fi(t,i),on(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:pr(t,tn,hi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Kf+500-St(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yu(pr.bind(null,t,tn,hi),e);break}pr(t,tn,hi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ey(i/1960))-i,10<i){t.timeoutHandle=Yu(pr.bind(null,t,tn,hi),i);break}pr(t,tn,hi);break;case 5:pr(t,tn,hi);break;default:throw Error(se(329))}}}return on(t,St()),t.callbackNode===n?i_.bind(null,t):null}function dh(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=tn,tn=n,e!==null&&ph(e)),t}function ph(t){tn===null?tn=t:tn.push.apply(tn,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~$f,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if($e&6)throw Error(se(327));Ss();var e=_l(t,0);if(!(e&1))return on(t,St()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=dh(t,i))}if(n===1)throw n=Go,Er(t,0),Fi(t,e),on(t,St()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,tn,hi),on(t,St()),null}function Zf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ns=St()+500,$l&&rr())}}function Pr(t){Bi!==null&&Bi.tag===0&&!($e&6)&&Ss();var e=$e;$e|=1;var n=Rn.transition,i=nt;try{if(Rn.transition=null,nt=1,t)return t()}finally{nt=i,Rn.transition=n,$e=e,!($e&6)&&rr()}}function Jf(){dn=fs.current,ht(fs)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ey(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Ls(),ht(rn),ht(Wt),Hf();break;case 5:Bf(i);break;case 4:Ls();break;case 13:ht(pt);break;case 19:ht(pt);break;case 10:Of(i.type._context);break;case 22:case 23:Jf()}n=n.return}if(Dt=t,wt=t=qi(t.current,null),Ot=dn=e,Ct=0,Go=null,$f=Ql=Rr=0,tn=Mo=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function r_(t,e){do{var n=wt;try{if(Uf(),Qa.current=Ll,bl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(Cr=0,Lt=At=gt=null,yo=!1,Bo=0,qf.current=null,n===null||n.return===null){Ct=1,Go=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tp(o);if(p!==null){p.flags&=-257,Ap(p,o,a,s,e),p.mode&1&&wp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){wp(s,c,e),Qf();break e}l=Error(se(426))}}else if(dt&&a.mode&1){var m=Tp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ap(m,o,a,s,e),Nf(Ds(l,a));break e}}s=l=Ds(l,a),Ct!==4&&(Ct=2),Mo===null?Mo=[s]:Mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=H0(s,l,e);vp(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Xi===null||!Xi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=V0(s,a,e);vp(s,S);break e}}s=s.return}while(s!==null)}a_(n)}catch(b){e=b,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function s_(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Qf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Rr&268435455)&&!(Ql&268435455)||Fi(Dt,Ot)}function Ul(t,e){var n=$e;$e|=2;var i=s_();(Dt!==t||Ot!==e)&&(hi=null,Er(t,e));do try{Ty();break}catch(r){r_(t,r)}while(!0);if(Uf(),$e=n,Dl.current=i,wt!==null)throw Error(se(261));return Dt=null,Ot=0,Ct}function Ty(){for(;wt!==null;)o_(wt)}function Ay(){for(;wt!==null&&!Zv();)o_(wt)}function o_(t){var e=c_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?a_(t):wt=e,qf.current=null}function a_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xy(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=vy(n,e,dn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function pr(t,e,n){var i=nt,r=Rn.transition;try{Rn.transition=null,nt=1,Cy(t,e,n,i)}finally{Rn.transition=r,nt=i}return null}function Cy(t,e,n,i){do Ss();while(Bi!==null);if($e&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ax(t,s),t===Dt&&(wt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,u_(gl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=nt;nt=1;var a=$e;$e|=4,qf.current=null,Sy(t,n),t_(n,t),Yx(ju),vl=!!Wu,ju=Wu=null,t.current=n,My(n),Jv(),$e=a,nt=o,Rn.transition=s}else t.current=n;if(xa&&(xa=!1,Bi=t,Il=r),s=t.pendingLanes,s===0&&(Xi=null),tx(n.stateNode),on(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=hh,hh=null,t;return Il&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===fh?Eo++:(Eo=0,fh=t):Eo=0,rr(),null}function Ss(){if(Bi!==null){var t=Hg(Il),e=Rn.transition,n=nt;try{if(Rn.transition=null,nt=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Il=0,$e&6)throw Error(se(331));var r=$e;for($e|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:So(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var f=u.sibling,p=u.return;if(J0(u),u===c){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var v=t.current;for(we=v;we!==null;){o=we;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,we=_;else e:for(o=v;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(b){xt(a,a.return,b)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if($e=r,rr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{nt=n,Rn.transition=e}}return!1}function zp(t,e,n){e=Ds(n,e),e=H0(t,e,1),t=ji(t,e,1),e=Yt(),t!==null&&($o(t,1,e),on(t,e))}function xt(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Ds(n,t),t=V0(e,t,1),e=ji(e,t,1),t=Yt(),e!==null&&($o(e,1,t),on(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(Ct===4||Ct===3&&(Ot&130023424)===Ot&&500>St()-Kf?Er(t,0):$f|=n),on(t,e)}function l_(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=Yt();t=Si(t,e),t!==null&&($o(t,e,n),on(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l_(t,n)}function by(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),l_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,_y(t,e,n);nn=!!(t.flags&131072)}else nn=!1,dt&&e.flags&1048576&&d0(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tl(t,e),t=e.pendingProps;var r=Rs(e,Wt.current);ys(e,n),r=Gf(null,e,i,t,r,n);var s=Wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kf(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,eh(e,i,t,n),e=ih(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Lf(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=On(i,t),r){case 0:e=nh(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=Cp(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Pp(t,e,i,r,n);case 3:e:{if(X0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,x0(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(se(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(se(424)),e),e=bp(t,e,i,n,r);break e}else for(mn=Wi(e.stateNode.containerInfo.firstChild),gn=e,dt=!0,kn=null,n=_0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=Mi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return y0(e),t===null&&Zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xu(i,r)?o=null:s!==null&&Xu(i,s)&&(e.flags|=32),j0(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return Y0(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Cp(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Al,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=Pn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Rp(t,e,i,r,n);case 15:return G0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),tl(t,e),e.tag=1,sn(i)?(t=!0,El(e)):t=!1,ys(e,n),B0(e,i,r),eh(e,i,r,n),ih(null,e,i,!0,t,n);case 19:return q0(t,e,n);case 22:return W0(t,e,n)}throw Error(se(156,e.tag))};function u_(t,e){return Fg(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Ly(t,e,n,i)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===yf)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return wr(n.children,r,s,e);case vf:o=8,r|=8;break;case wu:return t=An(12,n,e,r|2),t.elementType=wu,t.lanes=s,t;case Tu:return t=An(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case Au:return t=An(19,n,e,r),t.elementType=Au,t.lanes=s,t;case yg:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vg:o=10;break e;case xg:o=9;break e;case xf:o=11;break e;case yf:o=14;break e;case Ni:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=An(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function td(t,e,n,i,r,s,o,a,l){return t=new Ny(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(s),t}function Iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function h_(t){if(!t)return Qi;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(sn(n))return h0(t,n,e)}return e}function f_(t,e,n,i,r,s,o,a,l){return t=td(n,i,!0,t,r,s,o,a,l),t.context=h_(null),n=t.current,i=Yt(),r=Yi(n),s=vi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,$o(t,r,i),on(t,i),t}function tc(t,e,n,i){var r=e.current,s=Yt(),o=Yi(r);return n=h_(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,o),t!==null&&(Gn(t,r,o,s),Ja(t,r,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function Uy(){return null}var d_=typeof reportError=="function"?reportError:function(t){console.error(t)};function id(t){this._internalRoot=t}nc.prototype.render=id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tc(t,e,null,null)};nc.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){tc(null,t,null,null)}),e[yi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&Xg(t)}};function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function Oy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ol(o);s.call(c)}}var o=f_(e,i,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[yi]=o.current,Uo(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ol(l);a.call(c)}}var l=td(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[yi]=l.current,Uo(t.nodeType===8?t.parentNode:t),Pr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}tc(e,o,t,r)}else o=Oy(n,e,t,r,i);return Ol(o)}Vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Ef(e,n|1),on(e,St()),!($e&6)&&(Ns=St()+500,rr()))}break;case 13:Pr(function(){var i=Si(t,1);if(i!==null){var r=Yt();Gn(i,t,1,r)}}),nd(t,1)}};wf=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Yt();Gn(e,t,134217728,n)}nd(t,134217728)}};Gg=function(t){if(t.tag===13){var e=Yi(t),n=Si(t,e);if(n!==null){var i=Yt();Gn(n,t,e,i)}nd(t,e)}};Wg=function(){return nt};jg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(se(90));Mg(i),Pu(i,r)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};Lg=Zf;Dg=Pr;var Fy={usingClientEntryPoint:!1,Events:[Zo,os,ql,Pg,bg,Zf]},Js={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ug(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Wl=ya.inject(ky),Zn=ya}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(e))throw Error(se(200));return Iy(t,e,null,n)};vn.createRoot=function(t,e){if(!rd(t))throw Error(se(299));var n=!1,i="",r=d_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=td(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,Uo(t.nodeType===8?t.parentNode:t),new id(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Ug(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Pr(t)};vn.hydrate=function(t,e,n){if(!ic(e))throw Error(se(200));return rc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!rd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=d_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f_(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,Uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};vn.render=function(t,e,n){if(!ic(e))throw Error(se(200));return rc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(se(40));return t._reactRootContainer?(Pr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};vn.unstable_batchedUpdates=Zf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return rc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(t){console.error(t)}}p_(),pg.exports=vn;var zy=pg.exports,Vp=zy;Mu.createRoot=Vp.createRoot,Mu.hydrateRoot=Vp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="169",Ms={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},By=0,Gp=1,Hy=2,m_=1,Vy=2,ui=3,er=0,an=1,Kn=2,$i=0,Es=1,Wp=2,jp=3,Xp=4,Gy=5,gr=100,Wy=101,jy=102,Xy=103,Yy=104,qy=200,$y=201,Ky=202,Zy=203,mh=204,gh=205,Jy=206,Qy=207,eS=208,tS=209,nS=210,iS=211,rS=212,sS=213,oS=214,_h=0,vh=1,xh=2,Is=3,yh=4,Sh=5,Mh=6,Eh=7,g_=0,aS=1,lS=2,Ki=0,cS=1,uS=2,hS=3,fS=4,dS=5,pS=6,mS=7,__=300,Us=301,Os=302,wh=303,Th=304,sc=306,Ah=1e3,Sr=1001,Ch=1002,Cn=1003,gS=1004,Sa=1005,zn=1006,zc=1007,Mr=1008,Ei=1009,v_=1010,x_=1011,Wo=1012,od=1013,br=1014,gi=1015,Qo=1016,ad=1017,ld=1018,Fs=1020,y_=35902,S_=1021,M_=1022,Hn=1023,E_=1024,w_=1025,ws=1026,ks=1027,T_=1028,cd=1029,A_=1030,ud=1031,hd=1033,sl=33776,ol=33777,al=33778,ll=33779,Rh=35840,Ph=35841,bh=35842,Lh=35843,Dh=36196,Nh=37492,Ih=37496,Uh=37808,Oh=37809,Fh=37810,kh=37811,zh=37812,Bh=37813,Hh=37814,Vh=37815,Gh=37816,Wh=37817,jh=37818,Xh=37819,Yh=37820,qh=37821,cl=36492,$h=36494,Kh=36495,C_=36283,Zh=36284,Jh=36285,Qh=36286,_S=3200,vS=3201,R_=0,xS=1,ki="",Yn="srgb",sr="srgb-linear",fd="display-p3",oc="display-p3-linear",Fl="linear",ct="srgb",kl="rec709",zl="p3",Br=7680,Yp=519,yS=512,SS=513,MS=514,P_=515,ES=516,wS=517,TS=518,AS=519,qp=35044,$p="300 es",_i=2e3,Bl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,ef=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function CS(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const RS={DEG2RAD:ul};class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],v=r[1],_=r[4],S=r[7],b=r[2],R=r[5],T=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*_+l*R,s[6]=o*h+a*S+l*T,s[1]=c*y+u*v+d*b,s[4]=c*m+u*_+d*R,s[7]=c*h+u*S+d*T,s[2]=f*y+p*v+g*b,s[5]=f*m+p*_+g*R,s[8]=f*h+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new Ge;function b_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PS(){const t=Hl("canvas");return t.style.display="block",t}const Kp={};function hl(t){t in Kp||(Kp[t]=!0,console.warn(t))}function bS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function LS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[sr]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:ct,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Fl,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Zp)},[fd]:{transfer:ct,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jp),fromReference:t=>t.applyMatrix3(Zp).convertLinearToSRGB()}},NS=new Set([sr,oc]),et={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!NS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=eo[e].toReference,r=eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return eo[t].primaries},getTransfer:function(t){return t===ki?Fl:eo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(eo[e].luminanceCoefficients)}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class IS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=Hl("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class L_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class ln extends Fr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Sr,r=Sr,s=zn,o=Mr,a=Hn,l=Ei,c=ln.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Gs(),this.name="",this.source=new L_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==__)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=__;ln.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,n=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,b=(h+1)/2,R=(u+f)/4,T=(d+y)/4,P=(g+m)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=T/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rt(0,0,e,n),this.scissorTest=!1,this.viewport=new rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new L_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends FS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const b=Math.sqrt(_),R=Math.atan2(b,h*v);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,d=d*m+y*S,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new L,Qp=new Dr;class ea{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Ea.subVectors(this.max,to),Vr.subVectors(e.a,to),Gr.subVectors(e.b,to),Wr.subVectors(e.c,to),Ci.subVectors(Gr,Vr),Ri.subVectors(Wr,Gr),ar.subVectors(Vr,Wr);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ar.z,ar.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ar.z,0,-ar.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ar.y,ar.x,0];return!jc(n,Vr,Gr,Wr,Ea)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,Vr,Gr,Wr,Ea))?!1:(wa.crossVectors(Ci,Ri),n=[wa.x,wa.y,wa.z],jc(n,Vr,Gr,Wr,Ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,Ma=new ea,Vr=new L,Gr=new L,Wr=new L,Ci=new L,Ri=new L,ar=new L,to=new L,Ea=new L,wa=new L,lr=new L;function jc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zS=new ea,no=new L,Xc=new L;class dd{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Xc)),this.expandByPoint(no.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new L,Yc=new L,Ta=new L,Pi=new L,qc=new L,Aa=new L,$c=new L;class pd{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yc.copy(e).add(n).multiplyScalar(.5),Ta.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ta),a=Pi.dot(this.direction),l=-Pi.dot(Ta),c=Pi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yc).addScaledVector(Ta,f),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){qc.subVectors(n,e),Aa.subVectors(i,e),$c.crossVectors(qc,Aa);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Aa.crossVectors(Pi,Aa));if(l<0)return null;const c=a*this.direction.dot(qc.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot($c);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BS,e,HS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),bi.crossVectors(i,hn),bi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),bi.crossVectors(i,hn)),bi.normalize(),Ca.crossVectors(hn,bi),r[0]=bi.x,r[4]=Ca.x,r[8]=hn.x,r[1]=bi.y,r[5]=Ca.y,r[9]=hn.y,r[2]=bi.z,r[6]=Ca.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],v=i[3],_=i[7],S=i[11],b=i[15],R=r[0],T=r[4],P=r[8],X=r[12],x=r[1],E=r[5],z=r[9],k=r[13],G=r[2],K=r[6],B=r[10],Q=r[14],D=r[3],Y=r[7],J=r[11],re=r[15];return s[0]=o*R+a*x+l*G+c*D,s[4]=o*T+a*E+l*K+c*Y,s[8]=o*P+a*z+l*B+c*J,s[12]=o*X+a*k+l*Q+c*re,s[1]=u*R+d*x+f*G+p*D,s[5]=u*T+d*E+f*K+p*Y,s[9]=u*P+d*z+f*B+p*J,s[13]=u*X+d*k+f*Q+p*re,s[2]=g*R+y*x+m*G+h*D,s[6]=g*T+y*E+m*K+h*Y,s[10]=g*P+y*z+m*B+h*J,s[14]=g*X+y*k+m*Q+h*re,s[3]=v*R+_*x+S*G+b*D,s[7]=v*T+_*E+S*K+b*Y,s[11]=v*P+_*z+S*B+b*J,s[15]=v*X+_*k+S*Q+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],v=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,_=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,S=u*y*c-g*d*c+g*a*p-o*y*p-u*a*h+o*d*h,b=g*d*l-u*y*l-g*a*f+o*y*f+u*a*m-o*d*m,R=n*v+i*_+r*S+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*d*s-u*y*s-g*i*p+n*y*p+u*i*h-n*d*h)*T,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(u*y*r-g*d*r+g*i*f-n*y*f-u*i*m+n*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,y=o*u,m=o*d,h=a*d,v=l*c,_=l*u,S=l*d,b=i.x,R=i.y,T=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+S)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(f+h))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/o,d=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===_i)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Bl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,y;if(a===_i)g=(o+s)*d,y=-2*d;else if(a===Bl)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new L,In=new ft,BS=new L(0,0,0),HS=new L(1,1,1),bi=new L,Ca=new L,hn=new L,em=new ft,tm=new Dr;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VS=0;const nm=new L,Xr=new Dr,oi=new ft,Ra=new L,io=new L,GS=new L,WS=new Dr,im=new L(1,0,0),rm=new L(0,1,0),sm=new L(0,0,1),om={type:"added"},jS={type:"removed"},Yr={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Gt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new L,n=new ei,i=new Dr,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ra.copy(e):Ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(io,Ra,this.up):oi.lookAt(Ra,io,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(oi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jS),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new L(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ai=new L,Zc=new L,li=new L,qr=new L,$r=new L,am=new L,Jc=new L,Qc=new L,eu=new L,tu=new rt,nu=new rt,iu=new rt;class Bn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ai.subVectors(i,n),Zc.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ai),l=Un.dot(Zc),c=ai.dot(ai),u=ai.dot(Zc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tu.setScalar(0),nu.setScalar(0),iu.setScalar(0),tu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tu,s.x),o.addScaledVector(nu,s.y),o.addScaledVector(iu,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ai.subVectors(e,n),Un.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Un.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),$r.subVectors(s,i),Jc.subVectors(e,i);const l=qr.dot(Jc),c=$r.dot(Jc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const u=qr.dot(Qc),d=$r.dot(Qc);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(qr,o);eu.subVectors(e,s);const p=qr.dot(eu),g=$r.dot(eu);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector($r,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return am.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(am,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(qr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=CS(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ru(o,s,e+1/3),this.g=ru(o,s,e),this.b=ru(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return et.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Ut(Ht.r*255,0,255))*65536+Math.round(Ut(Ht.g*255,0,255))*256+Math.round(Ut(Ht.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Yn){et.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Pa);const i=Bc(Li.h,Pa.h,n),r=Bc(Li.s,Pa.s,n),s=Bc(Li.l,Pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ke;Ke.NAMES=N_;let XS=0;class ta extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Es,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gd extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new L,ba=new ue;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qp,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ba.fromBufferAttribute(this,n),ba.applyMatrix3(e),this.setXY(n,ba.x,ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class I_ extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U_ extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YS=0;const Mn=new ft,su=new Gt,Kr=new L,fn=new ea,ro=new ea,bt=new L;class ti extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?U_:I_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(fn.min,ro.min),fn.expandByPoint(bt),bt.addVectors(fn.max,ro.max),fn.expandByPoint(bt)):(fn.expandByPoint(ro.min),fn.expandByPoint(ro.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),bt.add(Kr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;const c=new L,u=new L,d=new L,f=new ue,p=new ue,g=new ue,y=new L,m=new L;function h(P,X,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,X),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[P].add(y),a[X].add(y),a[x].add(y),l[P].add(m),l[X].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,X=v.length;P<X;++P){const x=v[P],E=x.start,z=x.count;for(let k=E,G=E+z;k<G;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new L,S=new L,b=new L,R=new L;function T(P){b.fromBufferAttribute(r,P),R.copy(b);const X=a[P];_.copy(X),_.sub(b.multiplyScalar(b.dot(X))).normalize(),S.crossVectors(R,X);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,X=v.length;P<X;++P){const x=v[P],E=x.start,z=x.count;for(let k=E,G=E+z;k<G;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Qn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new ft,cr=new pd,La=new dd,cm=new L,Da=new L,Na=new L,Ia=new L,ou=new L,Ua=new L,um=new L,Oa=new L;class ut extends Gt{constructor(e=new ti,n=new gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ou.fromBufferAttribute(d,e),o?Ua.addScaledVector(ou,u):Ua.addScaledVector(ou.sub(n),u))}n.add(Ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(La.containsPoint(cr.origin)===!1&&(cr.intersectSphere(La,cm)===null||cr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),cr.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=_;S<b;S+=3){const R=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Fa(this,h,e,i,c,u,d,R,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Fa(this,o,e,i,c,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,b=_;S<b;S+=3){const R=S,T=S+1,P=S+2;r=Fa(this,h,e,i,c,u,d,R,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=m,_=m+1,S=m+2;r=Fa(this,o,e,i,c,u,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qS(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===er,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:t}}function Fa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Da),t.getVertexPosition(l,Na),t.getVertexPosition(c,Ia);const u=qS(t,e,n,i,Da,Na,Ia,um);if(u){const d=new L;Bn.getBarycoord(um,Da,Na,Ia,d),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,d,new ue)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,d,new ue)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Bn.getNormal(Da,Na,Ia,f.normal),u.face=f,u.barycoord=d}return u}class Nr extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function g(y,m,h,v,_,S,b,R,T,P,X){const x=S/T,E=b/P,z=S/2,k=b/2,G=R/2,K=T+1,B=P+1;let Q=0,D=0;const Y=new L;for(let J=0;J<B;J++){const re=J*E-k;for(let Te=0;Te<K;Te++){const ze=Te*x-z;Y[y]=ze*v,Y[m]=re*_,Y[h]=G,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[h]=R>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Te/T),d.push(1-J/P),Q+=1}}for(let J=0;J<P;J++)for(let re=0;re<T;re++){const Te=f+re+K*J,ze=f+re+K*(J+1),W=f+(re+1)+K*(J+1),te=f+(re+1)+K*J;l.push(Te,ze,te),l.push(ze,W,te),D+=6}a.addGroup(p,D,X),p+=D,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function $S(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const KS={clone:zs,merge:jt};var ZS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZS,this.fragmentShader=JS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=$S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class F_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new L,hm=new ue,fm=new ue;class pn extends F_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,hm,fm),n.subVectors(fm,hm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Jr=1;class QS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Zr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Zr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new pn(Zr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new pn(Zr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Zr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new pn(Zr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k_ extends ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eM extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:$i});s.uniforms.tEquirect.value=n;const o=new ut(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=zn),new QS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new L,tM=new L,nM=new Ge;class Ui{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(tM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nM.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new dd,ka=new L;class _d{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+g,S+v).normalize(),i[3].setComponents(l-o,f-u,m-g,S-v).normalize(),i[4].setComponents(l-a,f-d,m-y,S-_).normalize(),n===_i)i[5].setComponents(l+a,f+d,m+y,S+_).normalize();else if(n===Bl)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Zi extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let _=0;_<c;_++){const S=_*d-s;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+c*h,S=v+c*(h+1),b=v+1+c*(h+1),R=v+1+c*h;p.push(_,S,R),p.push(S,b,R)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(y,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:rM,alphahash_pars_fragment:sM,alphamap_fragment:oM,alphamap_pars_fragment:aM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:dM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:_M,bumpmap_pars_fragment:vM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:EM,color_pars_fragment:wM,color_pars_vertex:TM,color_vertex:AM,common:CM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:PM,displacementmap_pars_vertex:bM,displacementmap_vertex:LM,emissivemap_fragment:DM,emissivemap_pars_fragment:NM,colorspace_fragment:IM,colorspace_pars_fragment:UM,envmap_fragment:OM,envmap_common_pars_fragment:FM,envmap_pars_fragment:kM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:KM,envmap_vertex:BM,fog_vertex:HM,fog_pars_vertex:VM,fog_fragment:GM,fog_pars_fragment:WM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:XM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:qM,lights_pars_begin:$M,lights_toon_fragment:ZM,lights_toon_pars_fragment:JM,lights_phong_fragment:QM,lights_phong_pars_fragment:eE,lights_physical_fragment:tE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:rE,lights_fragment_end:sE,logdepthbuf_fragment:oE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:hE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:yE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:wE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:CE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:bE,opaque_fragment:LE,packing:DE,premultiplied_alpha_fragment:NE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:OE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:BE,shadowmap_vertex:HE,shadowmask_pars_fragment:VE,skinbase_vertex:GE,skinning_pars_vertex:WE,skinning_vertex:jE,skinnormal_vertex:XE,specularmap_fragment:YE,specularmap_pars_fragment:qE,tonemapping_fragment:$E,tonemapping_pars_fragment:KE,transmission_fragment:ZE,transmission_pars_fragment:JE,uv_pars_fragment:QE,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:r1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distanceRGBA_vert:h1,distanceRGBA_frag:f1,equirect_vert:d1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:_1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:y1,meshmatcap_vert:S1,meshmatcap_frag:M1,meshnormal_vert:E1,meshnormal_frag:w1,meshphong_vert:T1,meshphong_frag:A1,meshphysical_vert:C1,meshphysical_frag:R1,meshtoon_vert:P1,meshtoon_frag:b1,points_vert:L1,points_frag:D1,shadow_vert:N1,shadow_frag:I1,sprite_vert:U1,sprite_frag:O1},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qn={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qn.physical={uniforms:jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const za={r:0,b:0,g:0},hr=new ei,F1=new ft;function k1(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=g(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===sc)?(u===void 0&&(u=new ut(new Nr(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:zs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(_.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(hr)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ut(new Zi(2,2),new tr({name:"BackgroundMaterial",uniforms:zs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,_){v.getRGB(za,O_(t)),i.buffers.color.setClear(za.r,za.g,za.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:y,addToRenderList:m}}function z1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,E,z,k,G){let K=!1;const B=d(k,z,E);s!==B&&(s=B,c(s.object)),K=p(x,k,z,G),K&&g(x,k,z,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,E,z,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,E,z){const k=z.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);let K=G[E.id];K===void 0&&(K={},G[E.id]=K);let B=K[k];return B===void 0&&(B=f(l()),K[k]=B),B}function f(x){const E=[],z=[],k=[];for(let G=0;G<n;G++)E[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,E,z,k){const G=s.attributes,K=E.attributes;let B=0;const Q=z.getAttributes();for(const D in Q)if(Q[D].location>=0){const J=G[D];let re=K[D];if(re===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(x,E,z,k){const G={},K=E.attributes;let B=0;const Q=z.getAttributes();for(const D in Q)if(Q[D].location>=0){let J=K[D];J===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),G[D]=re,B++}s.attributes=G,s.attributesNum=B,s.index=k}function y(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function m(x){h(x,0)}function h(x,E){const z=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;z[x]=1,k[x]===0&&(t.enableVertexAttribArray(x),k[x]=1),G[x]!==E&&(t.vertexAttribDivisor(x,E),G[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,k=E.length;z<k;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function _(x,E,z,k,G,K,B){B===!0?t.vertexAttribIPointer(x,E,z,G,K):t.vertexAttribPointer(x,E,z,k,G,K)}function S(x,E,z,k){y();const G=k.attributes,K=z.getAttributes(),B=E.defaultAttributeValues;for(const Q in K){const D=K[Q];if(D.location>=0){let Y=G[Q];if(Y===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const J=Y.normalized,re=Y.itemSize,Te=e.get(Y);if(Te===void 0)continue;const ze=Te.buffer,W=Te.type,te=Te.bytesPerElement,fe=W===t.INT||W===t.UNSIGNED_INT||Y.gpuType===od;if(Y.isInterleavedBufferAttribute){const le=Y.data,Pe=le.stride,Ne=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<D.locationSize;Ie++)h(D.location+Ie,le.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<D.locationSize;Ie++)m(D.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ie=0;Ie<D.locationSize;Ie++)_(D.location+Ie,re/D.locationSize,W,J,Pe*te,(Ne+re/D.locationSize*Ie)*te,fe)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)h(D.location+le,Y.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<D.locationSize;le++)m(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<D.locationSize;le++)_(D.location+le,re/D.locationSize,W,J,re*te,re/D.locationSize*le*te,fe)}}else if(B!==void 0){const J=B[Q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}v()}function b(){P();for(const x in i){const E=i[x];for(const z in E){const k=E[z];for(const G in k)u(k[G].object),delete k[G];delete E[z]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const k=E[z];for(const G in k)u(k[G].object),delete k[G];delete E[z]}delete i[x.id]}function T(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const k=z[x.id];for(const G in k)u(k[G].object),delete k[G];delete z[x.id]}}function P(){X(),o=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function B1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];for(let y=0;y<f.length;y++)n.update(g,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:b,maxSamples:R}}function V1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let S=h.clippingState||null;l.value=S,S=u(g,f,_,p);for(let b=0;b!==_;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function G1(t){let e=new WeakMap;function n(o,a){return a===wh?o.mapping=Us:a===Th&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wh||a===Th)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class B_ extends F_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=4,dm=[.125,.215,.35,.446,.526,.582],_r=20,lu=new B_,pm=new Ke;let cu=null,uu=0,hu=0,fu=!1;const mr=(1+Math.sqrt(5))/2,Qr=1/mr,mm=[new L(-mr,Qr,0),new L(mr,Qr,0),new L(-Qr,0,mr),new L(Qr,0,mr),new L(0,mr,-Qr),new L(0,mr,Qr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,hu),this._renderer.xr.enabled=fu,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Qo,format:Hn,colorSpace:sr,depthBuffer:!1},r=_m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(s)),this._blurMaterial=j1(s,e,n)}return r}_compileMaterial(e){const n=new ut(this._lodPlanes[0],e);this._renderer.compile(n,lu)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pm),u.toneMapping=Ki,u.autoClear=!1;const p=new gd({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new ut(new Nr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(pm),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;Ba(r,v*_,h>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const h=[];let v=0;for(let T=0;T<_r;++T){const P=T/y,X=Math.exp(-P*P/2);h.push(X),T===0?v+=X:T<m&&(v+=2*X)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-ps?r-_+ps:0),R=4*(this._cubeSize-S);Ba(n,b,R,3*S,2*S),l.setRenderTarget(n),l.render(d,lu)}}function W1(t){const e=[],n=[],i=[];let r=t;const s=t-ps+1+dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ps?l=dm[o-t+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,m=2,h=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,P=R>2?0:-1,X=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(X,y*g*R),_.set(f,m*g*R);const x=[R,R,R,R,R,R];S.set(x,h*g*R)}const b=new ti;b.setAttribute("position",new Qn(v,y)),b.setAttribute("uv",new Qn(_,m)),b.setAttribute("faceIndex",new Qn(S,h)),e.push(b),r>ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _m(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function j1(t,e,n){const i=new Float32Array(_r),r=new L(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function vm(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function xm(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wh||l===Th,u=l===Us||l===Os;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new gm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Y1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function q1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const b=v[_+0],R=v[_+1],T=v[_+2];f.push(b,R,R,T,T,b)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const b=_+0,R=_+1,T=_+2;f.push(b,R,R,T,T,b)}}else return;const m=new(b_(f)?U_:I_)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $1(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<y.length;v++)n.update(h,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function K1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Z1(t,e,n){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*R*4*d),P=new D_(T,b,R,d);P.type=gi,P.needsUpdate=!0;const X=S*4;for(let E=0;E<d;E++){const z=h[E],k=v[E],G=_[E],K=b*R*4*E;for(let B=0;B<z.count;B++){const Q=B*X;g===!0&&(r.fromBufferAttribute(z,B),T[K+Q+0]=r.x,T[K+Q+1]=r.y,T[K+Q+2]=r.z,T[K+Q+3]=0),y===!0&&(r.fromBufferAttribute(k,B),T[K+Q+4]=r.x,T[K+Q+5]=r.y,T[K+Q+6]=r.z,T[K+Q+7]=0),m===!0&&(r.fromBufferAttribute(G,B),T[K+Q+8]=r.x,T[K+Q+9]=r.y,T[K+Q+10]=r.z,T[K+Q+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new ue(b,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function J1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class H_ extends ln{constructor(e,n,i,r,s,o,a,l,c,u=ws){if(u!==ws&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=br),i===void 0&&u===ks&&(i=Fs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const V_=new ln,ym=new H_(1,1),G_=new D_,W_=new kS,j_=new k_,Sm=[],Mm=[],Em=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),Pt(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),Pt(n,i)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Em.set(i),t.uniformMatrix4fv(this.addr,!1,Em),Pt(n,i)}}function ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ym.compareFunction=P_,s=ym):s=V_,n.setTexture2D(e||s,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||W_,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||j_,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||G_,r)}function vw(t){switch(t){case 5126:return Q1;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return hw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(t,e){t.uniform1fv(this.addr,e)}function yw(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function Sw(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function Mw(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function Ew(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ww(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Tw(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Aw(t,e){t.uniform1iv(this.addr,e)}function Cw(t,e){t.uniform2iv(this.addr,e)}function Rw(t,e){t.uniform3iv(this.addr,e)}function Pw(t,e){t.uniform4iv(this.addr,e)}function bw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Dw(t,e){t.uniform3uiv(this.addr,e)}function Nw(t,e){t.uniform4uiv(this.addr,e)}function Iw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||V_,s[o])}function Uw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||W_,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||j_,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||G_,s[o])}function kw(t){switch(t){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return Ew;case 35675:return ww;case 35676:return Tw;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return bw;case 36294:return Lw;case 36295:return Dw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Fw}}class zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vw(n.type)}}class Bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kw(n.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function Vw(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),o=du.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(n,c===void 0?new zw(a,t,e):new Bw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Hw(a),Am(n,d)),n=d}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Vw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Gw=37297;let Ww=0;function jw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Xw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case sr:case oc:return[i,"LinearTransferOETF"];case Yn:case fd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jw(t.getShaderSource(e),o)}else return r}function Yw(t,e){const n=Xw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function qw(t,e){let n;switch(e){case cS:n="Linear";break;case uS:n="Reinhard";break;case hS:n="Cineon";break;case fS:n="ACESFilmic";break;case pS:n="AgX";break;case mS:n="Neutral";break;case dS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ha=new L;function $w(){et.getLuminanceCoefficients(Ha);const t=Ha.x.toFixed(4),e=Ha.y.toFixed(4),n=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(t){return t.replace(Qw,tT)}const eT=new Map;function tT(t,e){let n=Ve[e];if(n===void 0){const i=eT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(t){return t.replace(nT,iT)}function iT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===m_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function aT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case aS:e="ENVMAP_BLENDING_MIX";break;case lS:e="ENVMAP_BLENDING_ADD";break}return e}function lT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rT(n),c=sT(n),u=oT(n),d=aT(n),f=lT(n),p=Kw(n),g=Zw(s),y=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),h.length>0&&(h+=`
`)):(m=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),h=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Ki?qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Yw("linearToOutputTexel",n.outputColorSpace),$w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=tf(o),o=Pm(o,n),o=bm(o,n),a=tf(a),a=Pm(a,n),a=bm(a,n),o=Lm(o),a=Lm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+o,S=v+h+a,b=Cm(r,r.VERTEX_SHADER,_),R=Cm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(b).trim(),G=r.getShaderInfoLog(R).trim();let K=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,R);else{const Q=Rm(r,b,"vertex"),D=Rm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+Q+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(B=!1);B&&(E.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(b),r.deleteShader(R),P=new fl(r,y),X=Jw(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Gw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=R,this}let uT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=uT++,this.code=e,this.usedTimes=0}}function dT(t,e,n,i,r,s,o){const a=new md,l=new hT,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function h(x,E,z,k,G){const K=k.fog,B=G.geometry,Q=x.isMeshStandardMaterial?k.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),Y=D&&D.mapping===sc?D.image.height:null,J=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Te=re!==void 0?re.length:0;let ze=0;B.morphAttributes.position!==void 0&&(ze=1),B.morphAttributes.normal!==void 0&&(ze=2),B.morphAttributes.color!==void 0&&(ze=3);let W,te,fe,le;if(J){const Jt=qn[J];W=Jt.vertexShader,te=Jt.fragmentShader}else W=x.vertexShader,te=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const Pe=t.getRenderTarget(),Ne=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,Ue=!!x.map,Z=!!x.matcap,C=!!D,ce=!!x.aoMap,ae=!!x.lightMap,ie=!!x.bumpMap,de=!!x.normalMap,be=!!x.displacementMap,ge=!!x.emissiveMap,A=!!x.metalnessMap,M=!!x.roughnessMap,F=x.anisotropy>0,$=x.clearcoat>0,ee=x.dispersion>0,q=x.iridescence>0,Ae=x.sheen>0,pe=x.transmission>0,_e=F&&!!x.anisotropyMap,je=$&&!!x.clearcoatMap,oe=$&&!!x.clearcoatNormalMap,ye=$&&!!x.clearcoatRoughnessMap,Oe=q&&!!x.iridescenceMap,Fe=q&&!!x.iridescenceThicknessMap,Se=Ae&&!!x.sheenColorMap,Ye=Ae&&!!x.sheenRoughnessMap,He=!!x.specularMap,st=!!x.specularColorMap,I=!!x.specularIntensityMap,Me=pe&&!!x.transmissionMap,j=pe&&!!x.thicknessMap,ne=!!x.gradientMap,ve=!!x.alphaMap,Ee=x.alphaTest>0,qe=!!x.alphaHash,Mt=!!x.extensions;let Zt=Ki;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Zt=t.toneMapping);const Ze={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:te,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pe===null?t.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:sr,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:Z,envMap:C,envMapMode:C&&D.mapping,envMapCubeUVHeight:Y,aoMap:ce,lightMap:ae,bumpMap:ie,normalMap:de,displacementMap:p&&be,emissiveMap:ge,normalMapObjectSpace:de&&x.normalMapType===xS,normalMapTangentSpace:de&&x.normalMapType===R_,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:_e,clearcoat:$,clearcoatMap:je,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:ee,iridescence:q,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:Ae,sheenColorMap:Se,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:st,specularIntensityMap:I,transmission:pe,transmissionMap:Me,thicknessMap:j,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ee,alphaHash:qe,combine:x.combine,mapUv:Ue&&m(x.map.channel),aoMapUv:ce&&m(x.aoMap.channel),lightMapUv:ae&&m(x.lightMap.channel),bumpMapUv:ie&&m(x.bumpMap.channel),normalMapUv:de&&m(x.normalMap.channel),displacementMapUv:be&&m(x.displacementMap.channel),emissiveMapUv:ge&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:_e&&m(x.anisotropyMap.channel),clearcoatMapUv:je&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(x.sheenRoughnessMap.channel),specularMapUv:He&&m(x.specularMap.channel),specularColorMapUv:st&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:Me&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:ve&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(Ue||ve),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kn,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(E,x),S(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=y[x.type];let z;if(E){const k=qn[E];z=KS.clone(k.uniforms)}else z=x.uniforms;return z}function R(x,E){let z;for(let k=0,G=u.length;k<G;k++){const K=u[k];if(K.cacheKey===E){z=K,++z.usedTimes;break}}return z===void 0&&(z=new cT(t,E,x,s),u.push(z)),z}function T(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function X(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:b,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:X}}function pT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,g,y,m){const h=o(d,f,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,y,m){const h=o(d,f,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||mT),i.length>1&&i.sort(f||Nm),r.length>1&&r.sort(f||Nm)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Im,t.set(i,[o])):r>=s.length?(o=new Im,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function _T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ke};break;case"SpotLight":n={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function yT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ST(t){const e=new _T,n=vT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new ft,o=new ft;function a(c){let u=0,d=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,v=0,_=0,S=0,b=0,R=0,T=0;c.sort(yT);for(let X=0,x=c.length;X<x;X++){const E=c[X],z=E.color,k=E.intensity,G=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=z.r*k,d+=z.g*k,f+=z.b*k;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],k);T++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,D=n.get(E);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=B,p++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(z).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[y]=B;const Q=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,Q.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[y]=Q.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=K,S++}y++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(z).multiplyScalar(k),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=B,m++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const Q=E.shadow,D=n.get(E);D.shadowIntensity=Q.intensity,D.shadowBias=Q.bias,D.shadowNormalBias=Q.normalBias,D.shadowRadius=Q.radius,D.shadowMapSize=Q.mapSize,D.shadowCameraNear=Q.camera.near,D.shadowCameraFar=Q.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=B,g++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(k),B.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[h]=B,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=T,i.version=xT++)}function l(c,u){let d=0,f=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Um(t){const e=new ST(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Um(t),e.set(r,[a])):s>=o.length?(a=new Um(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ET extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wT extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CT(t,e,n){let i=new _d;const r=new ue,s=new ue,o=new rt,a=new ET({depthPacking:vS}),l=new wT,c={},u=n.maxTextureSize,d={[er]:an,[an]:er,[Kn]:Kn},f=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:TT,fragmentShader:AT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m_;let h=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending($i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=h!==ui&&this.type===ui,G=h===ui&&this.type!==ui;for(let K=0,B=R.length;K<B;K++){const Q=R[K],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||k===!0||G===!0){const re=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};D.map!==null&&D.map.dispose(),D.map=new Lr(r.x,r.y,re),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let re=0;re<J;re++){const Te=D.getViewport(re);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),z.viewport(o),D.updateMatrices(Q,re),i=D.getFrustum(),S(T,P,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&v(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(X,x,E)};function v(R,T){const P=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Lr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function _(R,T,P,X){let x=null;const E=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=x.uuid,k=T.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let K=G[k];K===void 0&&(K=x.clone(),G[k]=K,T.addEventListener("dispose",b)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,X===ui?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=P}return x}function S(R,T,P,X,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const k=e.update(R),G=R.material;if(Array.isArray(G)){const K=k.groups;for(let B=0,Q=K.length;B<Q;B++){const D=K[B],Y=G[D.materialIndex];if(Y&&Y.visible){const J=_(R,Y,X,x);R.onBeforeShadow(t,R,T,P,k,J,D),t.renderBufferDirect(P,null,k,J,R,D),R.onAfterShadow(t,R,T,P,k,J,D)}}}else if(G.visible){const K=_(R,G,X,x);R.onBeforeShadow(t,R,T,P,k,K,null),t.renderBufferDirect(P,null,k,K,R,null),R.onAfterShadow(t,R,T,P,k,K,null)}}const z=R.children;for(let k=0,G=z.length;k<G;k++)S(z[k],T,P,X,x)}function b(R){R.target.removeEventListener("dispose",b);for(const P in c){const X=c[P],x=R.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const RT={[_h]:vh,[xh]:Mh,[yh]:Eh,[Is]:Sh,[vh]:_h,[Mh]:xh,[Eh]:yh,[Sh]:Is};function PT(t){function e(){let I=!1;const Me=new rt;let j=null;const ne=new rt(0,0,0,0);return{setMask:function(ve){j!==ve&&!I&&(t.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){I=ve},setClear:function(ve,Ee,qe,Mt,Zt){Zt===!0&&(ve*=Mt,Ee*=Mt,qe*=Mt),Me.set(ve,Ee,qe,Mt),ne.equals(Me)===!1&&(t.clearColor(ve,Ee,qe,Mt),ne.copy(Me))},reset:function(){I=!1,j=null,ne.set(-1,0,0,0)}}}function n(){let I=!1,Me=!1,j=null,ne=null,ve=null;return{setReversed:function(Ee){Me=Ee},setTest:function(Ee){Ee?fe(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Ee){j!==Ee&&!I&&(t.depthMask(Ee),j=Ee)},setFunc:function(Ee){if(Me&&(Ee=RT[Ee]),ne!==Ee){switch(Ee){case _h:t.depthFunc(t.NEVER);break;case vh:t.depthFunc(t.ALWAYS);break;case xh:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case yh:t.depthFunc(t.EQUAL);break;case Sh:t.depthFunc(t.GEQUAL);break;case Mh:t.depthFunc(t.GREATER);break;case Eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){ve!==Ee&&(t.clearDepth(Ee),ve=Ee)},reset:function(){I=!1,j=null,ne=null,ve=null}}}function i(){let I=!1,Me=null,j=null,ne=null,ve=null,Ee=null,qe=null,Mt=null,Zt=null;return{setTest:function(Ze){I||(Ze?fe(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ze){Me!==Ze&&!I&&(t.stencilMask(Ze),Me=Ze)},setFunc:function(Ze,Jt,ii){(j!==Ze||ne!==Jt||ve!==ii)&&(t.stencilFunc(Ze,Jt,ii),j=Ze,ne=Jt,ve=ii)},setOp:function(Ze,Jt,ii){(Ee!==Ze||qe!==Jt||Mt!==ii)&&(t.stencilOp(Ze,Jt,ii),Ee=Ze,qe=Jt,Mt=ii)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Zt!==Ze&&(t.clearStencil(Ze),Zt=Ze)},reset:function(){I=!1,Me=null,j=null,ne=null,ve=null,Ee=null,qe=null,Mt=null,Zt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,b=null,R=new Ke(0,0,0),T=0,P=!1,X=null,x=null,E=null,z=null,k=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=B>=2);let D=null,Y={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Te=new rt().fromArray(J),ze=new rt().fromArray(re);function W(I,Me,j,ne){const ve=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(I,Ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<j;qe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(Me+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Ee}const te={};te[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Is),ae(!1),ie(Gp),fe(t.CULL_FACE),C($i);function fe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function le(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Pe(I,Me){return u[I]!==Me?(t.bindFramebuffer(I,Me),u[I]=Me,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Me),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ne(I,Me){let j=f,ne=!1;if(I){j=d.get(Me),j===void 0&&(j=[],d.set(Me,j));const ve=I.textures;if(j.length!==ve.length||j[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,qe=ve.length;Ee<qe;Ee++)j[Ee]=t.COLOR_ATTACHMENT0+Ee;j.length=ve.length,ne=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ne=!0);ne&&t.drawBuffers(j)}function Ie(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Ue={[gr]:t.FUNC_ADD,[Wy]:t.FUNC_SUBTRACT,[jy]:t.FUNC_REVERSE_SUBTRACT};Ue[Xy]=t.MIN,Ue[Yy]=t.MAX;const Z={[qy]:t.ZERO,[$y]:t.ONE,[Ky]:t.SRC_COLOR,[mh]:t.SRC_ALPHA,[nS]:t.SRC_ALPHA_SATURATE,[eS]:t.DST_COLOR,[Jy]:t.DST_ALPHA,[Zy]:t.ONE_MINUS_SRC_COLOR,[gh]:t.ONE_MINUS_SRC_ALPHA,[tS]:t.ONE_MINUS_DST_COLOR,[Qy]:t.ONE_MINUS_DST_ALPHA,[iS]:t.CONSTANT_COLOR,[rS]:t.ONE_MINUS_CONSTANT_COLOR,[sS]:t.CONSTANT_ALPHA,[oS]:t.ONE_MINUS_CONSTANT_ALPHA};function C(I,Me,j,ne,ve,Ee,qe,Mt,Zt,Ze){if(I===$i){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(fe(t.BLEND),g=!0),I!==Gy){if(I!==y||Ze!==P){if((m!==gr||_!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,_=gr),Ze)switch(I){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.ONE,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,v=null,S=null,b=null,R.set(0,0,0),T=0,y=I,P=Ze}return}ve=ve||Me,Ee=Ee||j,qe=qe||ne,(Me!==m||ve!==_)&&(t.blendEquationSeparate(Ue[Me],Ue[ve]),m=Me,_=ve),(j!==h||ne!==v||Ee!==S||qe!==b)&&(t.blendFuncSeparate(Z[j],Z[ne],Z[Ee],Z[qe]),h=j,v=ne,S=Ee,b=qe),(Mt.equals(R)===!1||Zt!==T)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Zt),R.copy(Mt),T=Zt),y=I,P=!1}function ce(I,Me){I.side===Kn?le(t.CULL_FACE):fe(t.CULL_FACE);let j=I.side===an;Me&&(j=!j),ae(j),I.blending===Es&&I.transparent===!1?C($i):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ne=I.stencilWrite;o.setTest(ne),ne&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function ae(I){X!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),X=I)}function ie(I){I!==By?(fe(t.CULL_FACE),I!==x&&(I===Gp?t.cullFace(t.BACK):I===Hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),x=I}function de(I){I!==E&&(K&&t.lineWidth(I),E=I)}function be(I,Me,j){I?(fe(t.POLYGON_OFFSET_FILL),(z!==Me||k!==j)&&(t.polygonOffset(Me,j),z=Me,k=j)):le(t.POLYGON_OFFSET_FILL)}function ge(I){I?fe(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+G-1),D!==I&&(t.activeTexture(I),D=I)}function M(I,Me,j){j===void 0&&(D===null?j=t.TEXTURE0+G-1:j=D);let ne=Y[j];ne===void 0&&(ne={type:void 0,texture:void 0},Y[j]=ne),(ne.type!==I||ne.texture!==Me)&&(D!==j&&(t.activeTexture(j),D=j),t.bindTexture(I,Me||te[I]),ne.type=I,ne.texture=Me)}function F(){const I=Y[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Te.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function Se(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Ye(I,Me){let j=l.get(Me);j===void 0&&(j=new WeakMap,l.set(Me,j));let ne=j.get(I);ne===void 0&&(ne=t.getUniformBlockIndex(Me,I.name),j.set(I,ne))}function He(I,Me){const ne=l.get(Me).get(I);a.get(Me)!==ne&&(t.uniformBlockBinding(Me,ne,I.__bindingPointIndex),a.set(Me,ne))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Y={},u={},d=new WeakMap,f=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,b=null,R=new Ke(0,0,0),T=0,P=!1,X=null,x=null,E=null,z=null,k=null,Te.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:le,bindFramebuffer:Pe,drawBuffers:Ne,useProgram:Ie,setBlending:C,setMaterial:ce,setFlipSided:ae,setCullFace:ie,setLineWidth:de,setPolygonOffset:be,setScissorTest:ge,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:ye,texImage3D:Oe,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:je,texStorage3D:oe,texSubImage2D:q,texSubImage3D:Ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Fe,viewport:Se,reset:st}}function Om(t,e,n,i){const r=bT(i);switch(n){case S_:return t*e;case E_:return t*e;case w_:return t*e*2;case T_:return t*e/r.components*r.byteLength;case cd:return t*e/r.components*r.byteLength;case A_:return t*e*2/r.components*r.byteLength;case ud:return t*e*2/r.components*r.byteLength;case M_:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case hd:return t*e*4/r.components*r.byteLength;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Lh:return Math.max(t,16)*Math.max(e,8)/4;case Rh:case bh:return Math.max(t,8)*Math.max(e,8)/2;case Dh:case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cl:case $h:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case C_:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jh:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bT(t){switch(t){case Ei:case v_:return{byteLength:1,components:1};case Wo:case x_:case Qo:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case br:case od:case gi:return{byteLength:4,components:1};case y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function LT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Hl("canvas")}function y(A,M,F){let $=1;const ee=ge(A);if((ee.width>F||ee.height>F)&&($=F/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor($*ee.width),Ae=Math.floor($*ee.height);d===void 0&&(d=g(q,Ae));const pe=M?g(q,Ae):d;return pe.width=q,pe.height=Ae,pe.getContext("2d").drawImage(A,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ae+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Cn&&A.minFilter!==zn}function h(A){t.generateMipmap(A)}function v(A,M,F,$,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===t.RED&&(F===t.FLOAT&&(q=t.R32F),F===t.HALF_FLOAT&&(q=t.R16F),F===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.R8UI),F===t.UNSIGNED_SHORT&&(q=t.R16UI),F===t.UNSIGNED_INT&&(q=t.R32UI),F===t.BYTE&&(q=t.R8I),F===t.SHORT&&(q=t.R16I),F===t.INT&&(q=t.R32I)),M===t.RG&&(F===t.FLOAT&&(q=t.RG32F),F===t.HALF_FLOAT&&(q=t.RG16F),F===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RG8UI),F===t.UNSIGNED_SHORT&&(q=t.RG16UI),F===t.UNSIGNED_INT&&(q=t.RG32UI),F===t.BYTE&&(q=t.RG8I),F===t.SHORT&&(q=t.RG16I),F===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(q=t.RGB16UI),F===t.UNSIGNED_INT&&(q=t.RGB32UI),F===t.BYTE&&(q=t.RGB8I),F===t.SHORT&&(q=t.RGB16I),F===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),F===t.UNSIGNED_INT&&(q=t.RGBA32UI),F===t.BYTE&&(q=t.RGBA8I),F===t.SHORT&&(q=t.RGBA16I),F===t.INT&&(q=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const Ae=ee?Fl:et.getTransfer($);F===t.FLOAT&&(q=t.RGBA32F),F===t.HALF_FLOAT&&(q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(q=Ae===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(A,M){let F;return A?M===null||M===br||M===Fs?F=t.DEPTH24_STENCIL8:M===gi?F=t.DEPTH32F_STENCIL8:M===Wo&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===Fs?F=t.DEPTH_COMPONENT24:M===gi?F=t.DEPTH_COMPONENT32F:M===Wo&&(F=t.DEPTH_COMPONENT16),F}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){const M=A.target;M.removeEventListener("dispose",b),T(M),M.isVideoTexture&&u.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),X(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const F=A.source,$=f.get(F);if($){const ee=$[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(A),Object.keys($).length===0&&f.delete(F)}i.remove(A)}function P(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const F=A.source,$=f.get(F);delete $[M.__cacheKey],o.memory.textures--}function X(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ee=0;ee<M.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let $=0,ee=F.length;$<ee;$++){const q=i.get(F[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(A)}let x=0;function E(){x=0}function z(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function G(A,M){const F=i.get(A);if(A.isVideoTexture&&de(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(F,A,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function K(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ze(F,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function B(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ze(F,A,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function Q(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){W(F,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const D={[Ah]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Ch]:t.MIRRORED_REPEAT},Y={[Cn]:t.NEAREST,[gS]:t.NEAREST_MIPMAP_NEAREST,[Sa]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},J={[yS]:t.NEVER,[AS]:t.ALWAYS,[SS]:t.LESS,[P_]:t.LEQUAL,[MS]:t.EQUAL,[TS]:t.GEQUAL,[ES]:t.GREATER,[wS]:t.NOTEQUAL};function re(A,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===zc||M.magFilter===Sa||M.magFilter===Mr||M.minFilter===zn||M.minFilter===zc||M.minFilter===Sa||M.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==Sa&&M.minFilter!==Mr||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Te(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",b));const $=M.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const q=k(M);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[q].usedTimes++;const Ae=ee[A.__cacheKey];Ae!==void 0&&(ee[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(M)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return F}function ze(A,M,F){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const ee=Te(A,M),q=M.source;n.bindTexture($,A.__webglTexture,t.TEXTURE0+F);const Ae=i.get(q);if(q.version!==Ae.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const pe=et.getPrimaries(et.workingColorSpace),_e=M.colorSpace===ki?null:et.getPrimaries(M.colorSpace),je=M.colorSpace===ki||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let oe=y(M.image,!1,r.maxTextureSize);oe=be(M,oe);const ye=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type);let Fe=v(M.internalFormat,ye,Oe,M.colorSpace,M.isVideoTexture);re($,M);let Se;const Ye=M.mipmaps,He=M.isVideoTexture!==!0,st=Ae.__version===void 0||ee===!0,I=q.dataReady,Me=S(M,oe);if(M.isDepthTexture)Fe=_(M.format===ks,M.type),st&&(He?n.texStorage2D(t.TEXTURE_2D,1,Fe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ye,Oe,null));else if(M.isDataTexture)if(Ye.length>0){He&&st&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,Ye[0].width,Ye[0].height);for(let j=0,ne=Ye.length;j<ne;j++)Se=Ye[j],He?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,Se.width,Se.height,ye,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,j,Fe,Se.width,Se.height,0,ye,Oe,Se.data);M.generateMipmaps=!1}else He?(st&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,Oe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ye,Oe,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Fe,Ye[0].width,Ye[0].height,oe.depth);for(let j=0,ne=Ye.length;j<ne;j++)if(Se=Ye[j],M.format!==Hn)if(ye!==null)if(He){if(I)if(M.layerUpdates.size>0){const ve=Om(Se.width,Se.height,M.format,M.type);for(const Ee of M.layerUpdates){const qe=Se.data.subarray(Ee*ve/Se.data.BYTES_PER_ELEMENT,(Ee+1)*ve/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,Ee,Se.width,Se.height,1,ye,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,oe.depth,ye,Se.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Fe,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,oe.depth,ye,Oe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Fe,Se.width,Se.height,oe.depth,0,ye,Oe,Se.data)}else{He&&st&&n.texStorage2D(t.TEXTURE_2D,Me,Fe,Ye[0].width,Ye[0].height);for(let j=0,ne=Ye.length;j<ne;j++)Se=Ye[j],M.format!==Hn?ye!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,Se.width,Se.height,ye,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,j,Fe,Se.width,Se.height,0,ye,Oe,Se.data)}else if(M.isDataArrayTexture)if(He){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Fe,oe.width,oe.height,oe.depth),I)if(M.layerUpdates.size>0){const j=Om(oe.width,oe.height,M.format,M.type);for(const ne of M.layerUpdates){const ve=oe.data.subarray(ne*j/oe.data.BYTES_PER_ELEMENT,(ne+1)*j/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,ye,Oe,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Oe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,ye,Oe,oe.data);else if(M.isData3DTexture)He?(st&&n.texStorage3D(t.TEXTURE_3D,Me,Fe,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Oe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,ye,Oe,oe.data);else if(M.isFramebufferTexture){if(st)if(He)n.texStorage2D(t.TEXTURE_2D,Me,Fe,oe.width,oe.height);else{let j=oe.width,ne=oe.height;for(let ve=0;ve<Me;ve++)n.texImage2D(t.TEXTURE_2D,ve,Fe,j,ne,0,ye,Oe,null),j>>=1,ne>>=1}}else if(Ye.length>0){if(He&&st){const j=ge(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Me,Fe,j.width,j.height)}for(let j=0,ne=Ye.length;j<ne;j++)Se=Ye[j],He?I&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ye,Oe,Se):n.texImage2D(t.TEXTURE_2D,j,Fe,ye,Oe,Se);M.generateMipmaps=!1}else if(He){if(st){const j=ge(oe);n.texStorage2D(t.TEXTURE_2D,Me,Fe,j.width,j.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Oe,oe)}else n.texImage2D(t.TEXTURE_2D,0,Fe,ye,Oe,oe);m(M)&&h($),Ae.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function W(A,M,F){if(M.image.length!==6)return;const $=Te(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const q=i.get(ee);if(ee.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+F);const Ae=et.getPrimaries(et.workingColorSpace),pe=M.colorSpace===ki?null:et.getPrimaries(M.colorSpace),_e=M.colorSpace===ki||Ae===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let ne=0;ne<6;ne++)!je&&!oe?ye[ne]=y(M.image[ne],!0,r.maxCubemapSize):ye[ne]=oe?M.image[ne].image:M.image[ne],ye[ne]=be(M,ye[ne]);const Oe=ye[0],Fe=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Ye=v(M.internalFormat,Fe,Se,M.colorSpace),He=M.isVideoTexture!==!0,st=q.__version===void 0||$===!0,I=ee.dataReady;let Me=S(M,Oe);re(t.TEXTURE_CUBE_MAP,M);let j;if(je){He&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ye,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){j=ye[ne].mipmaps;for(let ve=0;ve<j.length;ve++){const Ee=j[ve];M.format!==Hn?Fe!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ee.width,Ee.height,Fe,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ee.width,Ee.height,Fe,Se,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ye,Ee.width,Ee.height,0,Fe,Se,Ee.data)}}}else{if(j=M.mipmaps,He&&st){j.length>0&&Me++;const ne=ge(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye[ne].width,ye[ne].height,Fe,Se,ye[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,ye[ne].width,ye[ne].height,0,Fe,Se,ye[ne].data);for(let ve=0;ve<j.length;ve++){const qe=j[ve].image[ne].image;He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,qe.width,qe.height,Fe,Se,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ye,qe.width,qe.height,0,Fe,Se,qe.data)}}else{He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Fe,Se,ye[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Fe,Se,ye[ne]);for(let ve=0;ve<j.length;ve++){const Ee=j[ve];He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Fe,Se,Ee.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ye,Fe,Se,Ee.image[ne])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),q.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,F,$,ee,q){const Ae=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),_e=v(F.internalFormat,Ae,pe,F.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>q),ye=Math.max(1,M.height>>q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,q,_e,oe,ye,M.depth,0,Ae,pe,null):n.texImage2D(ee,q,_e,oe,ye,0,Ae,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,i.get(F).__webglTexture,0,ae(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,i.get(F).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const $=M.depthTexture,ee=$&&$.isDepthTexture?$.type:null,q=_(M.stencilBuffer,ee),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=ae(M);ie(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,q,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,A)}else{const $=M.textures;for(let ee=0;ee<$.length;ee++){const q=$[ee],Ae=s.convert(q.format,q.colorSpace),pe=s.convert(q.type),_e=v(q.internalFormat,Ae,pe,q.colorSpace),je=ae(M);F&&ie(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,_e,M.width,M.height):ie(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,ee=ae(M);if(M.depthTexture.format===ws)ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(M.depthTexture.format===ks)ie(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=$}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[$],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(A,M,F){const $=i.get(A);M!==void 0&&te($.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Pe(A)}function Ie(A){const M=A.texture,F=i.get(A),$=i.get(M);A.addEventListener("dispose",R);const ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ae=ee.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)F.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else F.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)F.__webglFramebuffer[pe]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let pe=0,_e=ee.length;pe<_e;pe++){const je=i.get(ee[pe]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&ie(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){const _e=ee[pe];F.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const je=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),ye=v(_e.internalFormat,je,oe,_e.colorSpace,A.isXRRenderTarget===!0),Oe=ae(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),re(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)te(F.__webglFramebuffer[pe][_e],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else te(F.__webglFramebuffer[pe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let pe=0,_e=ee.length;pe<_e;pe++){const je=ee[pe],oe=i.get(je);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),re(t.TEXTURE_2D,je),te(F.__webglFramebuffer,A,je,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(je)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,$.__webglTexture),re(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)te(F.__webglFramebuffer[_e],A,M,t.COLOR_ATTACHMENT0,pe,_e);else te(F.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,pe,0);m(M)&&h(pe),n.unbindTexture()}A.depthBuffer&&Pe(A)}function Ue(A){const M=A.textures;for(let F=0,$=M.length;F<$;F++){const ee=M[F];if(m(ee)){const q=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ee).__webglTexture;n.bindTexture(q,Ae),h(q),n.unbindTexture()}}}const Z=[],C=[];function ce(A){if(A.samples>0){if(ie(A)===!1){const M=A.textures,F=A.width,$=A.height;let ee=t.COLOR_BUFFER_BIT;const q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(A),pe=M.length>1;if(pe)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const je=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,F,$,0,0,F,$,ee,t.NEAREST),l===!0&&(Z.length=0,C.length=0,Z.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Z.push(q),C.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const je=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ae(A){return Math.min(r.maxSamples,A.samples)}function ie(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function be(A,M){const F=A.colorSpace,$=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==sr&&F!==ki&&(et.getTransfer(F)===ct?($!==Hn||ee!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ie}function DT(t,e){function n(i,r=ki){let s;const o=et.getTransfer(r);if(i===Ei)return t.UNSIGNED_BYTE;if(i===ad)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return t.UNSIGNED_SHORT_5_5_5_1;if(i===y_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===v_)return t.BYTE;if(i===x_)return t.SHORT;if(i===Wo)return t.UNSIGNED_SHORT;if(i===od)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Qo)return t.HALF_FLOAT;if(i===S_)return t.ALPHA;if(i===M_)return t.RGB;if(i===Hn)return t.RGBA;if(i===E_)return t.LUMINANCE;if(i===w_)return t.LUMINANCE_ALPHA;if(i===ws)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===T_)return t.RED;if(i===cd)return t.RED_INTEGER;if(i===A_)return t.RG;if(i===ud)return t.RG_INTEGER;if(i===hd)return t.RGBA_INTEGER;if(i===sl||i===ol||i===al||i===ll)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===Ph||i===bh||i===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Nh||i===Ih)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dh||i===Nh)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ih)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uh||i===Oh||i===Fh||i===kh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===Yh||i===qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===$h||i===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===C_||i===Zh||i===Jh||i===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class NT extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class po extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IT={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const UT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new tr({vertexShader:UT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ut(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const y=new FT,m=n.getContextAttributes();let h=null,v=null;const _=[],S=[],b=new ue;let R=null;const T=new pn;T.layers.enable(1),T.viewport=new rt;const P=new pn;P.layers.enable(2),P.viewport=new rt;const X=[T,P],x=new NT;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=_[W];return te===void 0&&(te=new pu,_[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=_[W];return te===void 0&&(te=new pu,_[W]=te),te.getGripSpace()},this.getHand=function(W){let te=_[W];return te===void 0&&(te=new pu,_[W]=te),te.getHandSpace()};function k(W){const te=S.indexOf(W.inputSource);if(te===-1)return;const fe=_[te];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||o),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let W=0;W<_.length;W++){const te=S[W];te!==null&&(S[W]=null,_[W].disconnect(te))}E=null,z=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Lr(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,fe=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?ks:ws,fe=m.stencil?Fs:br);const Pe={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Lr(f.textureWidth,f.textureHeight,{format:Hn,type:Ei,depthTexture:new H_(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(W){for(let te=0;te<W.removed.length;te++){const fe=W.removed[te],le=S.indexOf(fe);le>=0&&(S[le]=null,_[le].disconnect(fe))}for(let te=0;te<W.added.length;te++){const fe=W.added[te];let le=S.indexOf(fe);if(le===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=S.length){S.push(fe),le=Ne;break}else if(S[Ne]===null){S[Ne]=fe,le=Ne;break}if(le===-1)break}const Pe=_[le];Pe&&Pe.connect(fe)}}const B=new L,Q=new L;function D(W,te,fe){B.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const le=B.distanceTo(Q),Pe=te.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),Ue=Pe[14]/(Pe[10]+1),Z=(Pe[9]+1)/Pe[5],C=(Pe[9]-1)/Pe[5],ce=(Pe[8]-1)/Pe[0],ae=(Ne[8]+1)/Ne[0],ie=Ie*ce,de=Ie*ae,be=le/(-ce+ae),ge=be*-ce;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Pe[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const A=Ie+be,M=Ue+be,F=ie-ge,$=de+(le-ge),ee=Z*Ue/M*A,q=C*Ue/M*A;W.projectionMatrix.makePerspective(F,$,ee,q,A,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,fe=W.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),x.near=P.near=T.near=te,x.far=P.far=T.far=fe,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const le=W.parent,Pe=x.cameras;Y(x,le);for(let Ne=0;Ne<Pe.length;Ne++)Y(Pe[Ne],le);Pe.length===2?D(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),J(W,x,le)};function J(W,te,fe){fe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ef*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Te(W,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Ne=0;Ne<fe.length;Ne++){const Ie=fe[Ne];let Ue=null;if(p!==null)Ue=p.getViewport(Ie);else{const C=d.getViewSubImage(f,Ie);Ue=C.viewport,Ne===0&&(e.setRenderTargetTextures(v,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(v))}let Z=X[Ne];Z===void 0&&(Z=new pn,Z.layers.enable(Ne),Z.viewport=new rt,X[Ne]=Z),Z.matrix.fromArray(Ie.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ie.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ne===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(Z)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ne=d.getDepthInformation(fe[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let fe=0;fe<_.length;fe++){const le=S[fe],Pe=_[fe];le!==null&&Pe!==void 0&&Pe.update(le,te,c||o)}re&&re(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const ze=new z_;ze.setAnimationLoop(Te),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}const fr=new ei,zT=new ft;function BT(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,O_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,fr.copy(S),fr.x*=-1,fr.y*=-1,fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(zT.makeRotationFromEuler(fr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const _=d();v.__bindingPointIndex=_;const S=t.createBuffer(),b=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],S=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,T=S.length;R<T;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let X=0,x=P.length;X<x;X++){const E=P[X];if(p(E,R,X,b)===!0){const z=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let K=0;K<k.length;K++){const B=k[K],Q=y(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,z+G,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,b){const R=v.value,T=_+"_"+S;if(b[T]===void 0)return typeof R=="number"||typeof R=="boolean"?b[T]=R:b[T]=R.clone(),!0;{const P=b[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return b[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(v){const _=v.uniforms;let S=0;const b=16;for(let T=0,P=_.length;T<P;T++){const X=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,E=X.length;x<E;x++){const z=X[x],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=k.length;G<K;G++){const B=k[G],Q=y(B),D=S%b,Y=D%Q.boundary,J=D+Y;S+=Y,J!==0&&b-J<Q.storage&&(S+=b-J),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const R=S%b;return R>0&&(S+=b-R),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class VT{constructor(e={}){const{canvas:n=PS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=Ki,this.toneMappingExposure=1;const _=this;let S=!1,b=0,R=0,T=null,P=-1,X=null;const x=new rt,E=new rt;let z=null;const k=new Ke(0);let G=0,K=n.width,B=n.height,Q=1,D=null,Y=null;const J=new rt(0,0,K,B),re=new rt(0,0,K,B);let Te=!1;const ze=new _d;let W=!1,te=!1;const fe=new ft,le=new ft,Pe=new L,Ne=new rt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Z(){return T===null?Q:1}let C=i;function ce(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sd}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),C===null){const U="webgl2";if(C=ce(U,w),C===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,ie,de,be,ge,A,M,F,$,ee,q,Ae,pe,_e,je,oe,ye,Oe,Fe,Se,Ye,He,st,I;function Me(){ae=new Y1(C),ae.init(),He=new DT(C,ae),ie=new H1(C,ae,e,He),de=new PT(C),ie.reverseDepthBuffer&&de.buffers.depth.setReversed(!0),be=new K1(C),ge=new pT,A=new LT(C,ae,de,ge,ie,He,be),M=new G1(_),F=new X1(_),$=new iM(C),st=new z1(C,$),ee=new q1(C,$,be,st),q=new J1(C,ee,$,be),Fe=new Z1(C,ie,A),oe=new V1(ge),Ae=new dT(_,M,F,ae,ie,st,oe),pe=new BT(_,ge),_e=new gT,je=new MT(ae),Oe=new k1(_,M,F,de,q,f,l),ye=new CT(_,q,ie),I=new HT(C,be,ie,de),Se=new B1(C,ae,be),Ye=new $1(C,ae,be),be.programs=Ae.programs,_.capabilities=ie,_.extensions=ae,_.properties=ge,_.renderLists=_e,_.shadowMap=ye,_.state=de,_.info=be}Me();const j=new kT(_,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(K,B,!1))},this.getSize=function(w){return w.set(K,B)},this.setSize=function(w,U,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,B=U,n.width=Math.floor(w*Q),n.height=Math.floor(U*Q),H===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(K*Q,B*Q).floor()},this.setDrawingBufferSize=function(w,U,H){K=w,B=U,Q=H,n.width=Math.floor(w*H),n.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,U,H,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,U,H,V),de.viewport(x.copy(J).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,U,H,V){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,U,H,V),de.scissor(E.copy(re).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){de.setScissorTest(Te=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let O=!1;if(T!==null){const he=T.texture.format;O=he===hd||he===ud||he===cd}if(O){const he=T.texture.type,xe=he===Ei||he===br||he===Wo||he===Fs||he===ad||he===ld,Ce=Oe.getClearColor(),Re=Oe.getClearAlpha(),ke=Ce.r,Be=Ce.g,Le=Ce.b;xe?(p[0]=ke,p[1]=Be,p[2]=Le,p[3]=Re,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=ke,g[1]=Be,g[2]=Le,g[3]=Re,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}U&&(V|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),je.dispose(),ge.dispose(),M.dispose(),F.dispose(),q.dispose(),st.dispose(),I.dispose(),Ae.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ad),j.removeEventListener("sessionend",Cd),or.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=be.autoReset,U=ye.enabled,H=ye.autoUpdate,V=ye.needsUpdate,O=ye.type;Me(),be.autoReset=w,ye.enabled=U,ye.autoUpdate=H,ye.needsUpdate=V,ye.type=O}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){const U=w.target;U.removeEventListener("dispose",qe),Mt(U)}function Mt(w){Zt(w),ge.remove(w)}function Zt(w){const U=ge.get(w).programs;U!==void 0&&(U.forEach(function(H){Ae.releaseProgram(H)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,O,he){U===null&&(U=Ie);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Ce=lv(w,U,H,V,O);de.setMaterial(V,xe);let Re=H.index,ke=1;if(V.wireframe===!0){if(Re=ee.getWireframeAttribute(H),Re===void 0)return;ke=2}const Be=H.drawRange,Le=H.attributes.position;let tt=Be.start*ke,at=(Be.start+Be.count)*ke;he!==null&&(tt=Math.max(tt,he.start*ke),at=Math.min(at,(he.start+he.count)*ke)),Re!==null?(tt=Math.max(tt,0),at=Math.min(at,Re.count)):Le!=null&&(tt=Math.max(tt,0),at=Math.min(at,Le.count));const vt=at-tt;if(vt<0||vt===1/0)return;st.setup(O,V,Ce,H,Re);let cn,Je=Se;if(Re!==null&&(cn=$.get(Re),Je=Ye,Je.setIndex(cn)),O.isMesh)V.wireframe===!0?(de.setLineWidth(V.wireframeLinewidth*Z()),Je.setMode(C.LINES)):Je.setMode(C.TRIANGLES);else if(O.isLine){let De=V.linewidth;De===void 0&&(De=1),de.setLineWidth(De*Z()),O.isLineSegments?Je.setMode(C.LINES):O.isLineLoop?Je.setMode(C.LINE_LOOP):Je.setMode(C.LINE_STRIP)}else O.isPoints?Je.setMode(C.POINTS):O.isSprite&&Je.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,Nt=O._multiDrawCounts,Qe=O._multiDrawCount,Ln=Re?$.get(Re).bytesPerElement:1,kr=ge.get(V).currentProgram.getUniforms();for(let un=0;un<Qe;un++)kr.setValue(C,"_gl_DrawID",un),Je.render(De[un]/Ln,Nt[un])}else if(O.isInstancedMesh)Je.renderInstances(tt,vt,O.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Nt=Math.min(H.instanceCount,De);Je.renderInstances(tt,vt,Nt)}else Je.render(tt,vt)};function Ze(w,U,H){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,ia(w,U,H),w.side=er,w.needsUpdate=!0,ia(w,U,H),w.side=Kn):ia(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),m=je.get(H),m.init(U),v.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ce=he[xe];Ze(Ce,H,O),V.add(Ce)}else Ze(he,H,O),V.add(he)}),v.pop(),m=null,V},this.compileAsync=function(w,U,H=null){const V=this.compile(w,U,H);return new Promise(O=>{function he(){if(V.forEach(function(xe){ge.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){O(w);return}setTimeout(he,10)}ae.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Jt=null;function ii(w){Jt&&Jt(w)}function Ad(){or.stop()}function Cd(){or.start()}const or=new z_;or.setAnimationLoop(ii),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(w){Jt=w,j.setAnimationLoop(w),w===null?or.stop():or.start()},j.addEventListener("sessionstart",Ad),j.addEventListener("sessionend",Cd),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,T),m=je.get(w,v.length),m.init(U),v.push(m),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(le),te=this.localClippingEnabled,W=oe.init(this.clippingPlanes,te),y=_e.get(w,h.length),y.init(),h.push(y),j.enabled===!0&&j.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&cc(he,U,-1/0,_.sortObjects)}cc(w,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,Y),Ue=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ue&&Oe.addToRenderList(y,w),this.info.render.frame++,W===!0&&oe.beginShadows();const H=m.state.shadowsArray;ye.render(H,w,U),W===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=y.opaque,O=y.transmissive;if(m.setupLights(),U.isArrayCamera){const he=U.cameras;if(O.length>0)for(let xe=0,Ce=he.length;xe<Ce;xe++){const Re=he[xe];Pd(V,O,w,Re)}Ue&&Oe.render(w);for(let xe=0,Ce=he.length;xe<Ce;xe++){const Re=he[xe];Rd(y,w,Re,Re.viewport)}}else O.length>0&&Pd(V,O,w,U),Ue&&Oe.render(w),Rd(y,w,U);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,U),st.resetDefaultState(),P=-1,X=null,v.pop(),v.length>0?(m=v[v.length-1],W===!0&&oe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function cc(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){V&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const xe=q.update(w),Ce=w.material;Ce.visible&&y.push(w,xe,Ce,H,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const xe=q.update(w),Ce=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Ce)){const Re=xe.groups;for(let ke=0,Be=Re.length;ke<Be;ke++){const Le=Re[ke],tt=Ce[Le.materialIndex];tt&&tt.visible&&y.push(w,xe,tt,H,Ne.z,Le)}}else Ce.visible&&y.push(w,xe,Ce,H,Ne.z,null)}}const he=w.children;for(let xe=0,Ce=he.length;xe<Ce;xe++)cc(he[xe],U,H,V)}function Rd(w,U,H,V){const O=w.opaque,he=w.transmissive,xe=w.transparent;m.setupLightsView(H),W===!0&&oe.setGlobalState(_.clippingPlanes,H),V&&de.viewport(x.copy(V)),O.length>0&&na(O,U,H),he.length>0&&na(he,U,H),xe.length>0&&na(xe,U,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Pd(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Lr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Qo:Ei,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const he=m.state.transmissionRenderTarget[V.id],xe=V.viewport||x;he.setSize(xe.z,xe.w);const Ce=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(k),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Ue&&Oe.render(H);const Re=_.toneMapping;_.toneMapping=Ki;const ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&oe.setGlobalState(_.clippingPlanes,V),na(w,H,V),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,tt=U.length;Le<tt;Le++){const at=U[Le],vt=at.object,cn=at.geometry,Je=at.material,De=at.group;if(Je.side===Kn&&vt.layers.test(V.layers)){const Nt=Je.side;Je.side=an,Je.needsUpdate=!0,bd(vt,H,V,cn,Je,De),Je.side=Nt,Je.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he))}_.setRenderTarget(Ce),_.setClearColor(k,G),ke!==void 0&&(V.viewport=ke),_.toneMapping=Re}function na(w,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,he=w.length;O<he;O++){const xe=w[O],Ce=xe.object,Re=xe.geometry,ke=V===null?xe.material:V,Be=xe.group;Ce.layers.test(H.layers)&&bd(Ce,U,H,Re,ke,Be)}}function bd(w,U,H,V,O,he){w.onBeforeRender(_,U,H,V,O,he),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,U,H,V,w,he),O.transparent===!0&&O.side===Kn&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,_.renderBufferDirect(H,U,V,O,w,he),O.side=er,O.needsUpdate=!0,_.renderBufferDirect(H,U,V,O,w,he),O.side=Kn):_.renderBufferDirect(H,U,V,O,w,he),w.onAfterRender(_,U,H,V,O,he)}function ia(w,U,H){U.isScene!==!0&&(U=Ie);const V=ge.get(w),O=m.state.lights,he=m.state.shadowsArray,xe=O.state.version,Ce=Ae.getParameters(w,O.state,he,U,H),Re=Ae.getProgramCacheKey(Ce);let ke=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?F:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",qe),ke=new Map,V.programs=ke);let Be=ke.get(Re);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===xe)return Dd(w,Ce),Be}else Ce.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Ce,_),Be=Ae.acquireProgram(Ce,Re),ke.set(Re,Be),V.uniforms=Ce.uniforms;const Le=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=oe.uniform),Dd(w,Ce),V.needsLights=uv(w),V.lightsStateVersion=xe,V.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Ld(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=fl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Dd(w,U){const H=ge.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function lv(w,U,H,V,O){U.isScene!==!0&&(U=Ie),A.resetTextureUnits();const he=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,Ce=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sr,Re=(V.isMeshStandardMaterial?F:M).get(V.envMap||xe),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let vt=Ki;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=_.toneMapping);const cn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=cn!==void 0?cn.length:0,De=ge.get(V),Nt=m.state.lights;if(W===!0&&(te===!0||w!==X)){const Sn=w===X&&V.id===P;oe.setState(V,w,Sn)}let Qe=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Nt.state.version||De.outputColorSpace!==Ce||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Re||V.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==tt||De.morphColors!==at||De.toneMapping!==vt||De.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,De.__version=V.version);let Ln=De.currentProgram;Qe===!0&&(Ln=ia(V,U,O));let kr=!1,un=!1,uc=!1;const yt=Ln.getUniforms(),Ti=De.uniforms;if(de.useProgram(Ln.program)&&(kr=!0,un=!0,uc=!0),V.id!==P&&(P=V.id,un=!0),kr||X!==w){ie.reverseDepthBuffer?(fe.copy(w.projectionMatrix),LS(fe),DS(fe),yt.setValue(C,"projectionMatrix",fe)):yt.setValue(C,"projectionMatrix",w.projectionMatrix),yt.setValue(C,"viewMatrix",w.matrixWorldInverse);const Sn=yt.map.cameraPosition;Sn!==void 0&&Sn.setValue(C,Pe.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,un=!0,uc=!0)}if(O.isSkinnedMesh){yt.setOptional(C,O,"bindMatrix"),yt.setOptional(C,O,"bindMatrixInverse");const Sn=O.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),yt.setValue(C,"boneTexture",Sn.boneTexture,A))}O.isBatchedMesh&&(yt.setOptional(C,O,"batchingTexture"),yt.setValue(C,"batchingTexture",O._matricesTexture,A),yt.setOptional(C,O,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",O._indirectTexture,A),yt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",O._colorsTexture,A));const hc=H.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0)&&Fe.update(O,H,Ln),(un||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,yt.setValue(C,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ti.envMap.value=Re,Ti.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Ti.envMapIntensity.value=U.environmentIntensity),un&&(yt.setValue(C,"toneMappingExposure",_.toneMappingExposure),De.needsLights&&cv(Ti,uc),he&&V.fog===!0&&pe.refreshFogUniforms(Ti,he),pe.refreshMaterialUniforms(Ti,V,Q,B,m.state.transmissionRenderTarget[w.id]),fl.upload(C,Ld(De),Ti,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fl.upload(C,Ld(De),Ti,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(C,"center",O.center),yt.setValue(C,"modelViewMatrix",O.modelViewMatrix),yt.setValue(C,"normalMatrix",O.normalMatrix),yt.setValue(C,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Sn=V.uniformsGroups;for(let fc=0,hv=Sn.length;fc<hv;fc++){const Nd=Sn[fc];I.update(Nd,Ln),I.bind(Nd,Ln)}}return Ln}function cv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function uv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,U,H){ge.get(w.texture).__webglTexture=U,ge.get(w.depthTexture).__webglTexture=H;const V=ge.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=ge.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){T=w,b=U,R=H;let V=!0,O=null,he=!1,xe=!1;if(w){const Re=ge.get(w);if(Re.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Re.__hasExternalTextures)A.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&ge.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Be=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?O=Be[U][H]:O=Be[U],he=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?O=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[H]:O=Be,x.copy(w.viewport),E.copy(w.scissor),z=w.scissorTest}else x.copy(J).multiplyScalar(Q).floor(),E.copy(re).multiplyScalar(Q).floor(),z=Te;if(de.bindFramebuffer(C.FRAMEBUFFER,O)&&V&&de.drawBuffers(w,O),de.viewport(x),de.scissor(E),de.setScissorTest(z),he){const Re=ge.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,H)}else if(xe){const Re=ge.get(w.texture),ke=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,ke)}P=-1},this.readRenderTargetPixels=function(w,U,H,V,O,he,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){de.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const Re=w.texture,ke=Re.format,Be=Re.type;if(!ie.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-O&&C.readPixels(U,H,V,O,He.convert(ke),He.convert(Be),he)}finally{const Re=T!==null?ge.get(T).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,O,he,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){const Re=w.texture,ke=Re.format,Be=Re.type;if(!ie.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-O){de.bindFramebuffer(C.FRAMEBUFFER,Ce);const Le=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.bufferData(C.PIXEL_PACK_BUFFER,he.byteLength,C.STREAM_READ),C.readPixels(U,H,V,O,He.convert(ke),He.convert(Be),0);const tt=T!==null?ge.get(T).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,tt);const at=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bS(C,at,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,he),C.deleteBuffer(Le),C.deleteSync(at),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(w.image.width*V),he=Math.floor(w.image.height*V),xe=U!==null?U.x:0,Ce=U!==null?U.y:0;A.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,xe,Ce,O,he),de.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,V=null,O=0){w.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let he,xe,Ce,Re,ke,Be;H!==null?(he=H.max.x-H.min.x,xe=H.max.y-H.min.y,Ce=H.min.x,Re=H.min.y):(he=w.image.width,xe=w.image.height,Ce=0,Re=0),V!==null?(ke=V.x,Be=V.y):(ke=0,Be=0);const Le=He.convert(U.format),tt=He.convert(U.type);A.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const at=C.getParameter(C.UNPACK_ROW_LENGTH),vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),cn=C.getParameter(C.UNPACK_SKIP_PIXELS),Je=C.getParameter(C.UNPACK_SKIP_ROWS),De=C.getParameter(C.UNPACK_SKIP_IMAGES),Nt=w.isCompressedTexture?w.mipmaps[O]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Re),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,ke,Be,he,xe,Le,tt,Nt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,ke,Be,Nt.width,Nt.height,Le,Nt.data):C.texSubImage2D(C.TEXTURE_2D,O,ke,Be,he,xe,Le,tt,Nt),C.pixelStorei(C.UNPACK_ROW_LENGTH,at),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,cn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,De),O===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,O=0){w.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0);let he,xe,Ce,Re,ke,Be,Le,tt,at;const vt=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(he=H.max.x-H.min.x,xe=H.max.y-H.min.y,Ce=H.max.z-H.min.z,Re=H.min.x,ke=H.min.y,Be=H.min.z):(he=vt.width,xe=vt.height,Ce=vt.depth,Re=0,ke=0,Be=0),V!==null?(Le=V.x,tt=V.y,at=V.z):(Le=0,tt=0,at=0);const cn=He.convert(U.format),Je=He.convert(U.type);let De;if(U.isData3DTexture)A.setTexture3D(U,0),De=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),De=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Nt=C.getParameter(C.UNPACK_ROW_LENGTH),Qe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ln=C.getParameter(C.UNPACK_SKIP_PIXELS),kr=C.getParameter(C.UNPACK_SKIP_ROWS),un=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,vt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(De,O,Le,tt,at,he,xe,Ce,cn,Je,vt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(De,O,Le,tt,at,he,xe,Ce,cn,vt.data):C.texSubImage3D(De,O,Le,tt,at,he,xe,Ce,cn,Je,vt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,kr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,un),O===0&&U.generateMipmaps&&C.generateMipmap(De),de.unbindTexture()},this.initRenderTarget=function(w){ge.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){b=0,R=0,T=null,de.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===oc?"display-p3":"srgb"}}let GT=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ue:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new L,r=[],s=[],o=[],a=new L,l=new ft;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ut(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xd extends ni{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ue){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WT extends xd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Va=new L,mu=new yd,gu=new yd,_u=new yd;class jT extends ni{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Va.subVectors(r[0],r[1]).add(r[0]),c=Va);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Va.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),mu.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,y,m),gu.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,y,m),_u.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),gu.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),_u.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(mu.calc(l),gu.calc(l),_u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function XT(t,e){const n=1-t;return n*n*e}function YT(t,e){return 2*(1-t)*t*e}function qT(t,e){return t*t*e}function wo(t,e,n,i){return XT(t,e)+YT(t,n)+qT(t,i)}function $T(t,e){const n=1-t;return n*n*n*e}function KT(t,e){const n=1-t;return 3*n*n*t*e}function ZT(t,e){return 3*(1-t)*t*t*e}function JT(t,e){return t*t*t*e}function To(t,e,n,i,r){return $T(t,e)+KT(t,n)+ZT(t,i)+JT(t,r)}class X_ extends ni{constructor(e=new ue,n=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QT extends ni{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y),To(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y_ extends ni{constructor(e=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ue){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eA extends ni{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends ni{constructor(e=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tA extends ni{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y),wo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ue){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Fm(a,l.x,c.x,u.x,d.x),Fm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ue().fromArray(r))}return this}}var nf=Object.freeze({__proto__:null,ArcCurve:WT,CatmullRomCurve3:jT,CubicBezierCurve:X_,CubicBezierCurve3:QT,EllipseCurve:xd,LineCurve:Y_,LineCurve3:eA,QuadraticBezierCurve:q_,QuadraticBezierCurve3:tA,SplineCurve:$_});class nA extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new nf[r.type]().fromJSON(r))}return this}}class km extends nA{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Y_(this.currentPoint.clone(),new ue(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new q_(this.currentPoint.clone(),new ue(e,n),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new X_(this.currentPoint.clone(),new ue(e,n),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new $_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new xd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fi extends ti{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const y=[],m=i/2;let h=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function v(){const S=new L,b=new L;let R=0;const T=(n-e)/i;for(let P=0;P<=s;P++){const X=[],x=P/s,E=x*(n-e)+e;for(let z=0;z<=r;z++){const k=z/r,G=k*l+a,K=Math.sin(G),B=Math.cos(G);b.x=E*K,b.y=-x*i+m,b.z=E*B,d.push(b.x,b.y,b.z),S.set(K,T,B).normalize(),f.push(S.x,S.y,S.z),p.push(k,1-x),X.push(g++)}y.push(X)}for(let P=0;P<r;P++)for(let X=0;X<s;X++){const x=y[X][P],E=y[X+1][P],z=y[X+1][P+1],k=y[X][P+1];e>0&&(u.push(x,E,k),R+=3),n>0&&(u.push(E,z,k),R+=3)}c.addGroup(h,R,0),h+=R}function _(S){const b=g,R=new ue,T=new L;let P=0;const X=S===!0?e:n,x=S===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let z=0;z<=r;z++){const G=z/r*l+a,K=Math.cos(G),B=Math.sin(G);T.x=X*B,T.y=m*x,T.z=X*K,d.push(T.x,T.y,T.z),f.push(0,x,0),R.x=K*.5+.5,R.y=B*.5*x+.5,p.push(R.x,R.y),g++}for(let z=0;z<r;z++){const k=b+z,G=E+z;S===!0?u.push(G,G+1,k):u.push(G+1,G,k),P+=3}c.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class K_ extends km{constructor(e){super(e),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new km().fromJSON(r))}return this}}const iA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Z_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,f,p;if(i&&(s=lA(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)d=t[g],f=t[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return jo(s,o,n,a,l,p,0),o}};function Z_(t,e,n,i,r){let s,o;if(r===xA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=zm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=zm(s,t[s],t[s+1],o);return o&&lc(o,o.next)&&(Yo(o),o=o.next),o}function Ir(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(lc(n,n.next)||mt(n.prev,n,n.next)===0)){if(Yo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function jo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&dA(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?sA(t,i,r,s):rA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Yo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=oA(Ir(t),e,n),jo(t,e,n,i,r,s,2)):o===2&&aA(t,e,n,i,r,s):jo(Ir(t),e,n,i,r,s,1);break}}}function rA(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&ms(r,a,s,l,o,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<d?u<f?u:f:d<f?d:f,y=a>l?a>c?a:c:l>c?l:c,m=u>d?u>f?u:f:d>f?d:f,h=rf(p,g,e,n,i),v=rf(y,m,e,n,i);let _=t.prevZ,S=t.nextZ;for(;_&&_.z>=h&&S&&S.z<=v;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&ms(a,u,l,d,c,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ms(a,u,l,d,c,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=h;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&ms(a,u,l,d,c,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=y&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ms(a,u,l,d,c,f,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function oA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!lc(r,s)&&J_(r,i,i.next,s)&&Xo(r,s)&&Xo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Yo(i),Yo(i.next),i=t=s),i=i.next}while(i!==t);return Ir(i)}function aA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gA(o,a)){let l=Q_(o,a);o=Ir(o,o.next),l=Ir(l,l.next),jo(o,e,n,i,r,s,0),jo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function lA(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Z_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(mA(c));for(r.sort(cA),s=0;s<r.length;s++)n=uA(r[s],n);return n}function cA(t,e){return t.x-e.x}function uA(t,e){const n=hA(t,e);if(!n)return e;const i=Q_(n,t);return Ir(i,i.next),Ir(n,n.next)}function hA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=s&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ms(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Xo(n,t)&&(d<u||d===u&&(n.x>r.x||n.x===r.x&&fA(r,n)))&&(r=n,u=d)),n=n.next;while(n!==a);return r}function fA(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function dA(t,e,n,i){let r=t;do r.z===0&&(r.z=rf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,pA(r)}function pA(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function rf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function mA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ms(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function gA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!_A(t,e)&&(Xo(t,e)&&Xo(e,t)&&vA(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||lc(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function lc(t,e){return t.x===e.x&&t.y===e.y}function J_(t,e,n,i){const r=Wa(mt(t,e,n)),s=Wa(mt(t,e,i)),o=Wa(mt(n,i,t)),a=Wa(mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ga(t,n,e)||s===0&&Ga(t,i,e)||o===0&&Ga(n,t,i)||a===0&&Ga(n,e,i))}function Ga(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Wa(t){return t>0?1:t<0?-1:0}function _A(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&J_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Xo(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function vA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Q_(t,e){const n=new sf(t.i,t.x,t.y),i=new sf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function zm(t,e,n,i){const r=new sf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Yo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function sf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Ao{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ao.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Bm(e),Hm(i,e);let o=e.length;n.forEach(Bm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Hm(i,n[l]);const a=iA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Bm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Hm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Sd extends ti{constructor(e=new K_([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const h=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:yA;let _,S=!1,b,R,T,P;h&&(_=h.getSpacedPoints(u),S=!0,f=!1,b=h.computeFrenetFrames(u,!1),R=new L,T=new L,P=new L),f||(m=0,p=0,g=0,y=0);const X=a.extractPoints(c);let x=X.shape;const E=X.holes;if(!Ao.isClockWise(x)){x=x.reverse();for(let Z=0,C=E.length;Z<C;Z++){const ce=E[Z];Ao.isClockWise(ce)&&(E[Z]=ce.reverse())}}const k=Ao.triangulateShape(x,E),G=x;for(let Z=0,C=E.length;Z<C;Z++){const ce=E[Z];x=x.concat(ce)}function K(Z,C,ce){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(C,ce)}const B=x.length,Q=k.length;function D(Z,C,ce){let ae,ie,de;const be=Z.x-C.x,ge=Z.y-C.y,A=ce.x-Z.x,M=ce.y-Z.y,F=be*be+ge*ge,$=be*M-ge*A;if(Math.abs($)>Number.EPSILON){const ee=Math.sqrt(F),q=Math.sqrt(A*A+M*M),Ae=C.x-ge/ee,pe=C.y+be/ee,_e=ce.x-M/q,je=ce.y+A/q,oe=((_e-Ae)*M-(je-pe)*A)/(be*M-ge*A);ae=Ae+be*oe-Z.x,ie=pe+ge*oe-Z.y;const ye=ae*ae+ie*ie;if(ye<=2)return new ue(ae,ie);de=Math.sqrt(ye/2)}else{let ee=!1;be>Number.EPSILON?A>Number.EPSILON&&(ee=!0):be<-Number.EPSILON?A<-Number.EPSILON&&(ee=!0):Math.sign(ge)===Math.sign(M)&&(ee=!0),ee?(ae=-ge,ie=be,de=Math.sqrt(F)):(ae=be,ie=ge,de=Math.sqrt(F/2))}return new ue(ae/de,ie/de)}const Y=[];for(let Z=0,C=G.length,ce=C-1,ae=Z+1;Z<C;Z++,ce++,ae++)ce===C&&(ce=0),ae===C&&(ae=0),Y[Z]=D(G[Z],G[ce],G[ae]);const J=[];let re,Te=Y.concat();for(let Z=0,C=E.length;Z<C;Z++){const ce=E[Z];re=[];for(let ae=0,ie=ce.length,de=ie-1,be=ae+1;ae<ie;ae++,de++,be++)de===ie&&(de=0),be===ie&&(be=0),re[ae]=D(ce[ae],ce[de],ce[be]);J.push(re),Te=Te.concat(re)}for(let Z=0;Z<m;Z++){const C=Z/m,ce=p*Math.cos(C*Math.PI/2),ae=g*Math.sin(C*Math.PI/2)+y;for(let ie=0,de=G.length;ie<de;ie++){const be=K(G[ie],Y[ie],ae);le(be.x,be.y,-ce)}for(let ie=0,de=E.length;ie<de;ie++){const be=E[ie];re=J[ie];for(let ge=0,A=be.length;ge<A;ge++){const M=K(be[ge],re[ge],ae);le(M.x,M.y,-ce)}}}const ze=g+y;for(let Z=0;Z<B;Z++){const C=f?K(x[Z],Te[Z],ze):x[Z];S?(T.copy(b.normals[0]).multiplyScalar(C.x),R.copy(b.binormals[0]).multiplyScalar(C.y),P.copy(_[0]).add(T).add(R),le(P.x,P.y,P.z)):le(C.x,C.y,0)}for(let Z=1;Z<=u;Z++)for(let C=0;C<B;C++){const ce=f?K(x[C],Te[C],ze):x[C];S?(T.copy(b.normals[Z]).multiplyScalar(ce.x),R.copy(b.binormals[Z]).multiplyScalar(ce.y),P.copy(_[Z]).add(T).add(R),le(P.x,P.y,P.z)):le(ce.x,ce.y,d/u*Z)}for(let Z=m-1;Z>=0;Z--){const C=Z/m,ce=p*Math.cos(C*Math.PI/2),ae=g*Math.sin(C*Math.PI/2)+y;for(let ie=0,de=G.length;ie<de;ie++){const be=K(G[ie],Y[ie],ae);le(be.x,be.y,d+ce)}for(let ie=0,de=E.length;ie<de;ie++){const be=E[ie];re=J[ie];for(let ge=0,A=be.length;ge<A;ge++){const M=K(be[ge],re[ge],ae);S?le(M.x,M.y+_[u-1].y,_[u-1].x+ce):le(M.x,M.y,d+ce)}}}W(),te();function W(){const Z=r.length/3;if(f){let C=0,ce=B*C;for(let ae=0;ae<Q;ae++){const ie=k[ae];Pe(ie[2]+ce,ie[1]+ce,ie[0]+ce)}C=u+m*2,ce=B*C;for(let ae=0;ae<Q;ae++){const ie=k[ae];Pe(ie[0]+ce,ie[1]+ce,ie[2]+ce)}}else{for(let C=0;C<Q;C++){const ce=k[C];Pe(ce[2],ce[1],ce[0])}for(let C=0;C<Q;C++){const ce=k[C];Pe(ce[0]+B*u,ce[1]+B*u,ce[2]+B*u)}}i.addGroup(Z,r.length/3-Z,0)}function te(){const Z=r.length/3;let C=0;fe(G,C),C+=G.length;for(let ce=0,ae=E.length;ce<ae;ce++){const ie=E[ce];fe(ie,C),C+=ie.length}i.addGroup(Z,r.length/3-Z,1)}function fe(Z,C){let ce=Z.length;for(;--ce>=0;){const ae=ce;let ie=ce-1;ie<0&&(ie=Z.length-1);for(let de=0,be=u+m*2;de<be;de++){const ge=B*de,A=B*(de+1),M=C+ae+ge,F=C+ie+ge,$=C+ie+A,ee=C+ae+A;Ne(M,F,$,ee)}}}function le(Z,C,ce){l.push(Z),l.push(C),l.push(ce)}function Pe(Z,C,ce){Ie(Z),Ie(C),Ie(ce);const ae=r.length/3,ie=v.generateTopUV(i,r,ae-3,ae-2,ae-1);Ue(ie[0]),Ue(ie[1]),Ue(ie[2])}function Ne(Z,C,ce,ae){Ie(Z),Ie(C),Ie(ae),Ie(C),Ie(ce),Ie(ae);const ie=r.length/3,de=v.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Ue(de[0]),Ue(de[1]),Ue(de[3]),Ue(de[1]),Ue(de[2]),Ue(de[3])}function Ie(Z){r.push(l[Z*3+0]),r.push(l[Z*3+1]),r.push(l[Z*3+2])}function Ue(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return SA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new nf[r.type]().fromJSON(r)),new Sd(i,e.options)}}const yA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-d),new ue(f,1-g),new ue(y,1-h)]:[new ue(a,1-l),new ue(u,1-d),new ue(p,1-g),new ue(m,1-h)]}};function SA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Vl extends ti{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,d=new L,f=new L;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(y,m,v),o.push(m,h,v)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class En extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R_,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Md extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const vu=new ft,Vm=new L,Gm=new L;class ev{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gm),n.updateMatrixWorld(),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wm=new ft,so=new L,xu=new L;class MA extends ev{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),i.position.copy(so),xu.copy(i.position),xu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(xu),i.updateMatrixWorld(),r.makeTranslation(-so.x,-so.y,-so.z),Wm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wm)}}class EA extends Md{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new MA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wA extends ev{constructor(){super(new B_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends Md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new wA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TA extends Md{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xm=new ft;class AA{constructor(e,n,i=0,r=1/0){this.ray=new pd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xm),this}intersectObject(e,n=!0,i=[]){return of(e,this,i,n),i.sort(Ym),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)of(e[r],this,i,n);return i.sort(Ym),i}}function Ym(t,e){return t.distance-e.distance}function of(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)of(s[o],e,n,!0)}}class qm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class CA extends Fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);const $m={type:"change"},Ed={type:"start"},tv={type:"end"},ja=new pd,Km=new Ui,RA=Math.cos(70*RS.DEG2RAD),Tt=new L,en=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yu=1e-6;class PA extends CA{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Dr,this._lastTargetPosition=new L,this._quat=new Dr().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qm,this._sphericalDelta=new qm,this._scale=1,this._panOffset=new L,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new L,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LA.bind(this),this._onPointerDown=bA.bind(this),this._onPointerUp=DA.bind(this),this._onContextMenu=zA.bind(this),this._onMouseWheel=UA.bind(this),this._onKeyDown=OA.bind(this),this._onTouchStart=FA.bind(this),this._onTouchMove=kA.bind(this),this._onMouseDown=NA.bind(this),this._onMouseMove=IA.bind(this),this._interceptControlDown=BA.bind(this),this._interceptControlUp=HA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($m),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;Tt.copy(n).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ja.origin.copy(this.object.position),ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ja.direction))<RA?this.object.lookAt(this.target):(Km.setFromNormalAndCoplanarPoint(this.object.up,this.target),ja.intersectPlane(Km,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yu||this._lastTargetPosition.distanceToSquared(this.target)>yu?(this.dispatchEvent($m),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Tt.setFromMatrixColumn(n,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,n){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(n,1):(Tt.setFromMatrixColumn(n,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function LA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function DA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tv),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function NA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case Ms.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case Ms.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ed)}function IA(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UA(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(Ed),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(tv))}function OA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function FA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ed)}function kA(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function zA(t){this.enabled!==!1&&t.preventDefault()}function BA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VA(){const t=new po,e=new En({color:15791352,roughness:.45,metalness:.1}),n=new En({color:13753576,roughness:.4,metalness:.15}),i=new En({color:1712172,roughness:.8,metalness:.1}),r=new En({color:2963272,roughness:.9,metalness:.1}),s=new En({color:6333946,emissive:2450411,emissiveIntensity:.8,roughness:.3,metalness:.5}),o=1.8,a=2.4,c=35*Math.PI/180,u=a*.45,d=a*.55,f=.9,p=f-d*Math.tan(c),g=new Nr(o,f,u),y=new ut(g,e);y.position.set(0,f/2,u*.5),y.castShadow=!0,y.receiveShadow=!0,t.add(y);const m=new K_;m.moveTo(0,0),m.lineTo(-d,0),m.lineTo(-d,p),m.lineTo(0,f),m.closePath();const h=new Sd(m,{depth:o,bevelEnabled:!1}),v=new ut(h,e);v.rotation.y=-Math.PI/2,v.position.set(o/2,0,0),v.castShadow=!0,v.receiveShadow=!0,t.add(v);const _=o*.8,S=d*.78,b=-d/2,R=(f+p)/2,T=.012,P=T*Math.cos(c),X=T*Math.sin(c),x=Math.PI/2-c,E=.05,z=new Zi(_+E*2,S+E*2),k=new ut(z,i);k.rotation.x=x,k.position.set(0,R+P,b+X),t.add(k);const G=new En({color:988970,emissive:1981023,emissiveIntensity:.45,roughness:1,metalness:0}),K=new Zi(_,S),B=new ut(K,G);B.rotation.x=x,B.position.set(0,R+P*2,b+X*2),t.add(B);const Q=new gd({transparent:!0,opacity:0,side:Kn}),D=new Zi(_,S),Y=new ut(D,Q);Y.rotation.x=x,Y.position.set(0,R+P*3,b+X*3),t.add(Y);const J=new Nr(o+.04,.035,.05),re=new ut(J,s);re.position.set(0,.018,-d),t.add(re);const Te=o*.9/3*.36,ze=.13;{const Ue=new fi(Te+.035,Te+.035,ze,24),Z=new ut(Ue,n);Z.position.set(0,f+ze/2,u*.5),t.add(Z);const C=new fi(Te,Te,ze+.05,24),ce=new ut(C,r);ce.position.set(0,f+ze/2,u*.5),t.add(ce);const ae=new Vl(Te+.035,.022,8,24),ie=new ut(ae,n);ie.position.set(0,f+ze,u*.5),ie.rotation.x=Math.PI/2,t.add(ie)}{const Ue=u*.5,Z=.195,C=.68,ce=.215,ae=.11,ie=.28,de=f-.04,be=de+C/2,ge=de+C+ae/2,A=new En({color:12869136,roughness:.35,metalness:0,transparent:!0,opacity:.82}),M=new fi(Z,Z*.93,C,32),F=new ut(M,A);F.position.set(0,be,Ue),F.castShadow=!0,t.add(F);const $=new En({color:16316660,roughness:.9,metalness:0}),ee=new fi(Z+.002,Z*.93+.002,ie,32),q=new ut(ee,$);q.position.set(0,de+C*.38,Ue),q.castShadow=!0,t.add(q);const Ae=new En({color:15659244,roughness:.75,metalness:.05}),pe=new fi(ce,ce*.97,ae,32),_e=new ut(pe,Ae);_e.position.set(0,ge,Ue),_e.castShadow=!0,t.add(_e);const je=new fi(ce*.96,ce*.96,.016,32),oe=new ut(je,Ae);oe.position.set(0,ge+ae/2+.008,Ue),t.add(oe);const ye=new En({color:14212054,roughness:.9,metalness:0});for(let Oe=0;Oe<3;Oe++){const Fe=new Vl(ce+.004,.008,6,32),Se=new ut(Fe,ye);Se.rotation.x=Math.PI/2,Se.position.set(0,ge-ae*.25+Oe*ae*.22,Ue),t.add(Se)}}const W=new En({color:65416,emissive:52326,emissiveIntensity:1.2,roughness:.5}),te=new fi(.04,.04,.014,16),fe=new ut(te,W);fe.rotation.x=Math.PI/2,fe.position.set(-o*.38,p*.5,-d+.008),t.add(fe);const le=new EA(65416,.5,1.2);le.position.set(-o*.38,p*.5,-d+.05),t.add(le);function Pe(){return[new L(_/2,S/2,0),new L(-_/2,S/2,0),new L(-_/2,-S/2,0),new L(_/2,-S/2,0)].map(Ue=>Ue.applyMatrix4(Y.matrixWorld))}function Ne(Ie,Ue){Y.updateMatrixWorld(!0);const Z=Pe(),C=Ue.getSize(new ue);return Z.map(ce=>{const ae=ce.clone().project(Ie);return{x:(ae.x+1)/2*C.x,y:(1-(ae.y+1)/2)*C.y}})}return t.rotation.y=Math.PI,{group:t,getScreenCorners:Ne,screenMesh:Y,rimMat:s,ledMat:W,ledLight:le}}const Xa=new L(0,3.5,6.5),ci=new L(0,.3,0),GA=Math.sin(35*Math.PI/180),WA=Math.cos(35*Math.PI/180),af=new L(0,.19,.82),Zm=3,jA=new L(0,af.y+GA*Zm,af.z+WA*Zm),XA=af.clone();function YA({onScreenCornersUpdate:t,isFullscreen:e,onScreenClick:n,lightColor:i}){const r=Xe.useRef(null),s=Xe.useRef({}),o=Xe.useRef(n);return Xe.useEffect(()=>{o.current=n},[n]),Xe.useEffect(()=>{const{rimMat:a,ledMat:l,ledLight:c}=s.current;!a||!i||(a.color.set(i),a.emissive.set(i),l.color.set(i),l.emissive.set(i),c.color.set(i))},[i]),Xe.useEffect(()=>{const{camera:a,controls:l,camAnim:c}=s.current;!a||!l||!c||(e?(l.enabled=!1,c.active=!0,c.targetPos.copy(jA),c.targetLookAt.copy(XA),c.onComplete=null):(c.active=!0,c.targetPos.copy(Xa),c.targetLookAt.copy(ci),c.onComplete=()=>{l.enabled=!0}))},[e]),Xe.useEffect(()=>{const a=r.current,l=new VT({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(a.clientWidth,a.clientHeight),l.shadowMap.enabled=!0,a.appendChild(l.domElement);const c=new GT;c.background=new Ke(988969);const u=new pn(45,a.clientWidth/a.clientHeight,.1,100);u.position.copy(Xa),u.lookAt(ci);const d=new TA(16777215,.5);c.add(d);const f=new jm(16777215,1.2);f.position.set(3,5,4),f.castShadow=!0,c.add(f);const p=new jm(4491519,.4);p.position.set(-4,2,-2),c.add(p);const{group:g,getScreenCorners:y,screenMesh:m,rimMat:h,ledMat:v,ledLight:_}=VA();g.position.y=-.5,c.add(g);const S=new Zi(12,12),b=new En({color:1450302,roughness:1}),R=new ut(S,b);R.rotation.x=-Math.PI/2,R.position.y=-.5,R.receiveShadow=!0,c.add(R);const T=new PA(u,l.domElement);T.target.copy(ci),T.enableDamping=!0,T.dampingFactor=.05;const P=Xa.y-ci.y,X=Xa.z-ci.z,x=Math.sqrt(P*P+X*X),E=Math.acos(P/x);T.minPolarAngle=E,T.maxPolarAngle=E,T.minDistance=x,T.maxDistance=x,T.minAzimuthAngle=-Math.PI/3,T.maxAzimuthAngle=Math.PI/3;const z={active:!1,targetPos:new L,targetLookAt:new L,onComplete:null};s.current={renderer:l,scene:c,camera:u,controls:T,getScreenCorners:y,camAnim:z,rimMat:h,ledMat:v,ledLight:_};let k=!0;const G=performance.now(),K=Math.PI/4.5,B=.38;T.enabled=!1;const Q=new AA;let D=0,Y=0;function J(te){D=te.clientX,Y=te.clientY,k&&(k=!1,T.enabled=!0)}function re(te){var Ie;const fe=te.clientX-D,le=te.clientY-Y;if(Math.sqrt(fe*fe+le*le)>5)return;const Pe=l.domElement.getBoundingClientRect(),Ne={x:(te.clientX-Pe.left)/Pe.width*2-1,y:-((te.clientY-Pe.top)/Pe.height)*2+1};Q.setFromCamera(Ne,u),Q.intersectObject(m).length>0&&((Ie=o.current)==null||Ie.call(o))}l.domElement.addEventListener("mousedown",J),l.domElement.addEventListener("click",re);let Te;function ze(){if(Te=requestAnimationFrame(ze),z.active)u.position.lerp(z.targetPos,.08),T.target.lerp(z.targetLookAt,.08),u.position.distanceTo(z.targetPos)<.005&&(u.position.copy(z.targetPos),T.target.copy(z.targetLookAt),z.active=!1,z.onComplete&&z.onComplete());else if(k){const fe=(performance.now()-G)/1e3,le=Math.sin(fe*B)*K,Pe=Math.sin(E),Ne=Math.cos(E);u.position.set(ci.x+x*Pe*Math.sin(le),ci.y+x*Ne,ci.z+x*Pe*Math.cos(le)),u.lookAt(ci)}T.update(),l.render(c,u);const te=y(u,l);t(te)}ze();function W(){u.aspect=a.clientWidth/a.clientHeight,u.updateProjectionMatrix(),l.setSize(a.clientWidth,a.clientHeight)}return window.addEventListener("resize",W),()=>{cancelAnimationFrame(Te),window.removeEventListener("resize",W),l.domElement.removeEventListener("mousedown",J),l.domElement.removeEventListener("click",re),T.dispose(),l.dispose(),a.removeChild(l.domElement)}},[]),N.jsx("div",{ref:r,style:{position:"absolute",inset:0}})}function qA({corners:t,resolution:e,children:n}){const i=(e==null?void 0:e.w)||1024,r=(e==null?void 0:e.h)||768,{containerStyle:s,innerStyle:o,visible:a}=Xe.useMemo(()=>{if(!t||t.length<4)return{containerStyle:{display:"none"},innerStyle:{},visible:!1};const[l,c,u,d]=t,f=Math.hypot(c.x-l.x,c.y-l.y),p=Math.hypot(d.x-l.x,d.y-l.y);if(f<10||p<10)return{containerStyle:{display:"none"},innerStyle:{},visible:!1};const g=$A(i,r,l,c,u,d);return{visible:!0,containerStyle:{position:"absolute",left:0,top:0,width:i,height:r,transformOrigin:"0 0",transform:`matrix3d(${g.join(",")})`,overflow:"hidden",pointerEvents:"none"},innerStyle:{width:i,height:r,overflow:"hidden",pointerEvents:"none"}}},[t,i,r]);return N.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:N.jsx("div",{style:s,children:a&&N.jsx("div",{style:o,children:typeof n=="function"?n(i,r):n})})})}function $A(t,e,n,i,r,s){const o=[[0,0],[t,0],[t,e],[0,e]],a=[[n.x,n.y],[i.x,i.y],[r.x,r.y],[s.x,s.y]],l=KA(o,a),[c,u,d,f,p,g,y,m,h]=l;return[c,f,0,y,u,p,0,m,0,0,1,0,d,g,0,h]}function KA(t,e){const n=[],i=[];for(let s=0;s<4;s++){const[o,a]=t[s],[l,c]=e[s];n.push([o,a,1,0,0,0,-l*o,-l*a]),i.push(l),n.push([0,0,0,o,a,1,-c*o,-c*a]),i.push(c)}return[...ZA(n,i),1]}function ZA(t,e){const n=e.length,i=t.map((s,o)=>[...s,e[o]]);for(let s=0;s<n;s++){let o=s;for(let l=s+1;l<n;l++)Math.abs(i[l][s])>Math.abs(i[o][s])&&(o=l);[i[s],i[o]]=[i[o],i[s]];const a=i[s][s];if(!(Math.abs(a)<1e-12))for(let l=s+1;l<n;l++){const c=i[l][s]/a;for(let u=s;u<=n;u++)i[l][u]-=c*i[s][u]}}const r=new Array(n).fill(0);for(let s=n-1;s>=0;s--){r[s]=i[s][n];for(let o=s+1;o<n;o++)r[s]-=i[s][o]*r[o];r[s]/=i[s][s]}return r}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=t=>{const e=QA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=Xe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Xe.createElement("svg",{ref:l,...eC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:nv("lucide",r),...!s&&!tC(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>Xe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=(t,e)=>{const n=Xe.forwardRef(({className:i,...r},s)=>Xe.createElement(nC,{ref:s,iconNode:e,className:nv(`lucide-${JA(Jm(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Jm(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],rC=yn("building-2",iC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],As=yn("check",sC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lf=yn("chevron-down",oC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],cf=yn("chevron-up",aC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],cC=yn("clipboard-list",lC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],hC=yn("maximize-2",uC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],uf=yn("mic",fC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],pC=yn("minimize-2",dC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],gC=yn("phone",mC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],iv=yn("pill",_C);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],xC=yn("stethoscope",vC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],SC=yn("triangle-alert",yC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rv=yn("x",MC);function wd({title:t,onBack:e,onToggleFullscreen:n,isFullscreen:i}){return N.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-white border-b border-gray-200",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[e&&N.jsx("button",{onClick:e,className:"text-blue-500 hover:text-blue-400 text-xl leading-none pr-1",children:"‹"}),N.jsx("span",{className:"text-gray-900 font-semibold text-sm tracking-tight truncate",children:t})]}),n&&N.jsx("button",{onClick:n,className:"text-gray-400 hover:text-gray-600 transition-colors text-sm",title:i?"Exit fullscreen":"Expand to fullscreen",children:i?N.jsx(pC,{size:16}):N.jsx(hC,{size:16})})]})}const Td={good:{label:"On track",badge:"bg-green-500",badgeText:"text-white",alert:"bg-green-50 border border-green-200 text-green-700",barClass:"bg-green-500",barGlow:"0 -8px 20px 4px rgba(34,197,94,0.50)",hex:"#22c55e"},pending:{label:"Refill Soon",badge:"bg-amber-400",badgeText:"text-white",alert:"bg-amber-50 border border-amber-200 text-amber-700",barClass:"bg-amber-400",barGlow:"0 -8px 20px 4px rgba(251,191,36,0.50)",hex:"#fbbf24"},alert:{label:"Action Required",badge:"bg-red-500",badgeText:"text-white",alert:"bg-red-50 border border-red-200 text-red-700",barClass:"bg-red-500",barGlow:"0 -8px 20px 4px rgba(239,68,68,0.50)",hex:"#ef4444"}};function sv(t){return t.status==="action_required"?"alert":t.status==="refill_soon"?"pending":"good"}const Qm={taken:"bg-green-500 hover:bg-green-400 text-white",due:"bg-blue-500 hover:bg-blue-400 text-white"};function ov(t){return t.todayTaken?Qm.taken:Qm.due}function av(t){return t>.5?"bg-green-500":t>.2?"bg-amber-400":"bg-red-500"}const EC={ok:"good",refill_soon:"pending",action_required:"alert"},wC={ok:"Active",refill_soon:"Refill Due",action_required:"Refill Issue"};function eg({status:t,state:e,label:n}){const i=e??EC[t]??"good",r=Td[i],s=n??wC[t]??r.label;return N.jsx("span",{className:`inline-flex items-center gap-1 rounded-full font-semibold text-sm px-3 py-1.5 ${r.badge} ${r.badgeText}`,children:s})}function TC({navigate:t,onVoice:e,med:n,onToggleDose:i,onAddTimelineStep:r,onToggleFullscreen:s,isFullscreen:o}){const[a,l]=Xe.useState(!1),[c,u]=Xe.useState(!1),[d,f]=Xe.useState(!1),p=Math.round(n.pillsRemaining/n.pillsTotal*100),g=av(p/100),y=ov(n);function m(){f(!0),r("Refill requested")}return N.jsxs("div",{className:"flex flex-col h-full bg-[#F2F2F7] text-gray-900 text-sm",children:[N.jsx(wd,{title:"ScriptBridge",onToggleFullscreen:s,isFullscreen:o}),N.jsxs("div",{className:"flex-1 overflow-y-auto pb-4",children:[N.jsxs("div",{className:"px-3 pt-3 pb-1",children:[N.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Today"}),N.jsxs("div",{className:"space-y-3",children:[N.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:[N.jsxs("div",{className:"p-4",children:[N.jsxs("div",{className:"flex items-start justify-between mb-1",children:[N.jsxs("div",{children:[N.jsx("h2",{className:"text-base font-bold text-gray-900",children:n.name}),N.jsxs("p",{className:"text-gray-500 text-xs",children:[n.dosage," · ",n.frequency]})]}),N.jsx(eg,{state:n.todayTaken?"good":"alert",label:n.todayTaken?N.jsxs(N.Fragment,{children:[N.jsx(As,{size:13}),"Taken"]}):N.jsxs(N.Fragment,{children:[N.jsx(rv,{size:13}),"Not taken"]})})]}),N.jsxs("div",{className:"mt-3",children:[N.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mb-1",children:[N.jsxs("span",{children:[n.pillsRemaining," pills left"]}),N.jsxs("span",{children:[p,"%"]})]}),N.jsx("div",{className:"h-1.5 bg-gray-200 rounded-full overflow-hidden",children:N.jsx("div",{className:`h-full rounded-full ${g}`,style:{width:`${p}%`}})})]})]}),N.jsxs("button",{onClick:()=>l(h=>!h),className:"w-full flex items-center justify-between px-4 py-2.5 border-t border-gray-100 text-xs text-blue-500 font-semibold",children:[N.jsx("span",{children:"View instructions"}),a?N.jsx(cf,{size:14}):N.jsx(lf,{size:14})]}),a&&N.jsxs("div",{className:"border-t border-gray-100 px-4 py-3 space-y-2 bg-gray-50",children:[N.jsx(oo,{label:"Medication",value:n.name}),N.jsx(oo,{label:"Dose",value:n.dosage}),N.jsx(oo,{label:"Schedule",value:n.frequency}),N.jsx(oo,{label:"Take with",value:"Food or milk"}),N.jsx(oo,{label:"Notes",value:"Do not skip doses. Take at the same time each day."})]})]}),N.jsx("button",{onClick:i,className:`w-full rounded-xl py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${y}`,children:n.todayTaken?N.jsxs(N.Fragment,{children:[N.jsx(As,{size:16}),N.jsx("span",{children:"Dose taken today"})]}):"Mark dose as taken"})]})]}),N.jsx("div",{className:"mx-3 my-3 border-t border-gray-200"}),N.jsxs("div",{className:"px-3 pb-1",children:[N.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2",children:"Orders"}),N.jsxs("div",{className:"space-y-3",children:[N.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:[N.jsxs("div",{className:"p-4",children:[N.jsxs("div",{className:"flex items-start justify-between mb-2",children:[N.jsxs("div",{children:[N.jsx("h2",{className:"text-base font-bold text-gray-900",children:n.name}),N.jsx("p",{className:"text-gray-500 text-xs",children:n.dosage})]}),N.jsx(eg,{status:n.status})]}),N.jsxs("div",{className:"flex gap-2 text-xs text-gray-500",children:[N.jsxs("span",{className:"flex items-center gap-1",children:[N.jsx(iv,{size:12})," ",n.pillsRemaining," remaining"]}),N.jsx("span",{children:"·"}),N.jsxs("span",{children:["Last filled: ",n.lastRefillDate]})]})]}),N.jsxs("button",{onClick:()=>u(h=>!h),className:"w-full flex items-center justify-between px-4 py-2.5 border-t border-gray-100 text-xs text-blue-500 font-semibold",children:[N.jsx("span",{children:"View timeline"}),c?N.jsx(cf,{size:14}):N.jsx(lf,{size:14})]}),c&&N.jsx("div",{className:"border-t border-gray-100 px-4 py-3 bg-gray-50",children:n.timeline.map((h,v)=>N.jsx(AC,{step:h,isLast:v===n.timeline.length-1},v))})]}),n.refillStatus==="eligible"&&(d?N.jsxs("div",{className:"bg-green-100 border border-green-200 rounded-xl py-4 text-center text-sm text-green-700 font-semibold flex items-center justify-center gap-2",children:[N.jsx(As,{size:16})," Refill requested · Est. delivery in 3–5 days"]}):N.jsx("button",{onClick:m,className:"w-full bg-blue-500 hover:bg-blue-400 text-white rounded-xl py-4 text-sm font-semibold transition-colors",children:"Request Refill"})),n.refillStatus==="on_hold"&&N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 flex items-start gap-2",children:[N.jsx(SC,{size:14,className:"shrink-0 mt-0.5"})," ",n.issue]}),N.jsx("button",{onClick:()=>t("comms"),className:"w-full bg-orange-500 hover:bg-orange-400 text-white rounded-xl py-4 text-sm font-semibold transition-colors",children:"Appeal or Resubmit Claim →"})]}),n.refillStatus==="not_yet"&&N.jsxs("div",{className:"bg-white rounded-xl py-4 text-center text-gray-400 text-sm shadow-sm",children:["Next refill available: ",n.nextDueDate]})]})]})]})]})}function oo({label:t,value:e}){return N.jsxs("div",{className:"flex justify-between gap-3",children:[N.jsx("span",{className:"text-xs text-gray-500 shrink-0",children:t}),N.jsx("span",{className:"text-xs text-gray-900 text-right",children:e})]})}function AC({step:t,isLast:e}){const n=t.error?"bg-red-500":t.done?"bg-green-500":"bg-gray-300",i=t.done&&!t.error?"bg-green-300":"bg-gray-200";return N.jsxs("div",{className:"flex gap-2",children:[N.jsxs("div",{className:"flex flex-col items-center",children:[N.jsx("div",{className:`w-3 h-3 rounded-full flex-shrink-0 mt-0.5 ${n}`}),!e&&N.jsx("div",{className:`w-0.5 h-5 ${i} my-0.5`})]}),N.jsxs("div",{className:"pb-1",children:[N.jsx("p",{className:`text-xs font-medium ${t.error?"text-red-600":t.done?"text-gray-900":"text-gray-400"}`,children:t.step}),t.date&&N.jsx("p",{className:"text-xs text-gray-400",children:t.date})]})]})}function CC({navigate:t,med:e,onToggleDose:n,onToggleFullscreen:i,isFullscreen:r}){if(!e)return null;const s=e.pillsRemaining/e.pillsTotal,o=av(s),a=ov(e);return N.jsxs("div",{className:"flex flex-col h-full bg-[#F2F2F7] text-gray-900 text-sm",children:[N.jsx(wd,{title:"Instructions",onBack:()=>t("home"),onToggleFullscreen:i,isFullscreen:r}),N.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-3 space-y-3",children:[N.jsxs("div",{className:"bg-white rounded-xl p-3 shadow-sm space-y-2",children:[N.jsx(ao,{label:"Medication",value:e.name}),N.jsx(ao,{label:"Dose",value:e.dosage}),N.jsx(ao,{label:"Schedule",value:e.frequency}),N.jsx(ao,{label:"Take with",value:"Food or milk"}),N.jsx(ao,{label:"Notes",value:"Do not skip doses. Take at the same time each day."})]}),N.jsxs("div",{className:"bg-white rounded-xl p-3 shadow-sm",children:[N.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mb-1",children:[N.jsx("span",{children:"Pills remaining"}),N.jsxs("span",{className:"font-semibold text-gray-900",children:[e.pillsRemaining," / ",e.pillsTotal]})]}),N.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden",children:N.jsx("div",{className:`h-full rounded-full ${o}`,style:{width:`${s*100}%`}})})]}),N.jsx("button",{onClick:n,className:`w-full rounded-xl py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${a}`,children:e.todayTaken?N.jsxs(N.Fragment,{children:[N.jsx(As,{size:16}),N.jsx("span",{children:"Dose taken today"})]}):"Mark dose as taken"})]})]})}function ao({label:t,value:e}){return N.jsxs("div",{className:"flex justify-between gap-3",children:[N.jsx("span",{className:"text-xs text-gray-500 shrink-0",children:t}),N.jsx("span",{className:"text-xs text-gray-900 text-right",children:e})]})}const Su={insurance:{name:"Gotham Insurance",Icon:rC,phone:"1-800-555-0100",color:"bg-blue-500"},doctor:{name:"Dr. Strange",Icon:xC,phone:"1-800-555-0199",color:"bg-teal-500"},pharmacy:{name:"Metropolis Pharmacy",Icon:iv,phone:"1-800-555-0150",color:"bg-purple-500"}},tg={action_required:{insurance:["I am appealing the rejection of my 90-day Proproprozol claim. Please reopen the review and reconsider coverage.","Would you cover a 30-day supply of Proproprozol as an alternative to the rejected 90-day claim?","Can you authorize a 7-day emergency supply of Proproprozol while the appeal is under review?"],doctor:["Gotham Insurance rejected my 90-day Proproprozol prescription. Can you write a letter of medical necessity to support my appeal?","Please resubmit my Proproprozol prescription for a 30-day supply so insurance is more likely to approve it.","I am running out of Proproprozol while the insurance issue is resolved. Can you write a 7-day bridge prescription?"],pharmacy:["What would the out-of-pocket cost be for a 7-day supply of Proproprozol if insurance does not cover it?","Can you resubmit the claim for the 90 day supply to see if it will go through this time?"]},refill_soon:{insurance:["I would like to confirm my Proproprozol refill will be covered before it is submitted."],doctor:["My Proproprozol supply is running low. Can you authorize a refill?"],pharmacy:["I would like to request a refill for my Proproprozol prescription.","My prescription is running low. Can you initiate a refill?"]},default:{insurance:["I have a question about my prescription coverage."],doctor:["I have a question about my Proproprozol prescription."],pharmacy:["I have a question about my prescription status."]}};function RC({navigate:t,onVoice:e,med:n,onAddTimelineStep:i,onToggleFullscreen:r,isFullscreen:s}){const[o,a]=Xe.useState([]),[l,c]=Xe.useState([]),u=tg[n.status]||tg.default;function d(p,g){const y=o.some(m=>m.contact===p);a(m=>[...m,{contact:p,message:g,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),y||i(`Message sent to ${Su[p].name}`)}function f(p){l.includes(p)||i(`Called ${Su[p].name}`),c(g=>[...g,p])}return N.jsxs("div",{className:"flex flex-col h-full bg-[#F2F2F7] text-gray-900 text-sm",children:[N.jsx(wd,{title:"Contact",onBack:()=>t("home"),onToggleFullscreen:r,isFullscreen:s}),N.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-3 space-y-3",children:[(o.length>0||l.length>0)&&N.jsxs("button",{onClick:()=>t("home"),className:"w-full flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-3 py-2.5 text-xs text-blue-700 hover:bg-blue-100 transition-colors animate-slide-down",children:[N.jsxs("span",{className:"flex items-center gap-2",children:[N.jsx(cC,{size:14})," Message was sent"]}),N.jsx("span",{className:"text-blue-500",children:"← Back to home"})]}),n.issue&&N.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-xl p-3",children:[N.jsxs("p",{className:"text-xs text-red-600 font-semibold",children:["Active Issue — ",n.name]}),N.jsx("p",{className:"text-xs text-red-700 mt-0.5",children:n.issue})]}),Object.entries(Su).map(([p,g])=>N.jsx(PC,{contact:g,suggestions:u[p]||[],onSend:y=>d(p,y),onCall:()=>f(p),called:l.includes(p),sentMessages:o.filter(y=>y.contact===p)},p))]})]})}function PC({contact:t,suggestions:e,onSend:n,onCall:i,called:r,sentMessages:s}){const[o,a]=Xe.useState(!1),[l,c]=Xe.useState("");return N.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-sm",children:[N.jsxs("button",{className:"w-full flex items-center gap-3 p-3 transition-colors",onClick:()=>a(u=>!u),children:[N.jsx("div",{className:`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`,children:N.jsx(t.Icon,{size:18,color:"white"})}),N.jsx("div",{className:"flex-1 text-left",children:N.jsx("p",{className:"font-medium text-gray-900 text-xs",children:t.name})}),s.length>0&&N.jsxs("span",{className:"text-xs text-green-600 flex items-center gap-0.5",children:[N.jsx(As,{size:12})," Sent"]}),N.jsx("span",{className:"text-gray-400",children:o?N.jsx(cf,{size:14}):N.jsx(lf,{size:14})})]}),o&&N.jsxs("div",{className:"px-3 pb-3 border-t border-gray-100 pt-2 space-y-2",children:[N.jsx("p",{className:"text-xs text-gray-500",children:"Send message:"}),N.jsx("div",{className:"space-y-1.5",children:e.map((u,d)=>N.jsxs("button",{onClick:()=>n(u),className:"w-full text-left text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-2.5 py-2 transition-colors",children:['"',u,'"']},d))}),N.jsxs("div",{className:"flex gap-1.5",children:[N.jsx("input",{type:"text",value:l,onChange:u=>c(u.target.value),placeholder:"Custom message…",className:"flex-1 bg-gray-100 text-gray-900 text-xs rounded-lg px-2.5 py-1.5 outline-none placeholder:text-gray-400"}),N.jsx("button",{onClick:()=>{l.trim()&&(n(l),c(""))},className:"bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-2.5 py-1.5 text-xs font-semibold",children:"Send"})]}),s.map((u,d)=>N.jsxs("div",{className:"text-xs text-green-700 bg-green-50 rounded px-2 py-1 flex items-start gap-1",children:[N.jsx(As,{size:12,className:"shrink-0 mt-0.5"})," ",u.time,': "',u.message.slice(0,50),u.message.length>50?"…":"",'"']},d)),N.jsx("button",{onClick:i,className:`w-full py-2 rounded-lg text-xs font-semibold transition-colors ${r?"bg-green-100 text-green-700":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:N.jsxs("span",{className:"flex items-center justify-center gap-1.5",children:[N.jsx(gC,{size:12}),r?"Called":`Call ${t.name} · ${t.phone}`]})})]})]})}const bC={proproprozol:"Your Proproprozol has an action required issue. Your insurance rejected the claim for a 90-day supply. You can appeal the decision or ask your doctor to resubmit for a 30-day supply instead.",refill:"Your Proproprozol refill is on hold because the insurance claim for a 90-day supply was rejected. Contact your insurance or doctor to resolve it first.",status:"Your Proproprozol needs attention. Gotham Insurance rejected the 90-day supply claim. You may need to appeal or switch to a 30-day supply.",insurance:"Gotham Insurance rejected the claim for a 90-day supply of Proproprozol. You can call them at 1-800-555-0100 to appeal, or ask your doctor to resubmit for a 30-day supply.",rejected:"The rejection means Gotham Insurance will not cover 90 pills at once. Your options are to appeal the decision or have your doctor resubmit the prescription for a 30-day supply.",appeal:"To appeal, contact Gotham Insurance Insurance at 1-800-555-0100 and reference your Proproprozol prescription. You can also send them a message from the Contact screen.",30:"Switching to a 30-day supply is often faster than appealing. Ask your doctor to resubmit the prescription for 30 pills instead of 90.",dose:"You have not marked today's Proproprozol dose as taken yet. You can do that from the home screen.",taken:"You have not marked today's Proproprozol dose as taken yet. Tap the big blue button on the home screen to log it.",help:"I can help you understand the insurance rejection, appeal the decision, switch to a 30-day supply, or log your dose. What would you like to know?"};function LC(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(bC))if(e.includes(n))return i;return"I'm sorry, I didn't catch that. You can ask about your medication status, insurance issue, refill, or dose."}function DC({onClose:t}){const[e,n]=Xe.useState([{role:"assistant",text:"Hello! How can I help you with your Proproprozol? Your insurance recently rejected the refill claim — I can help explain your options."}]),[i,r]=Xe.useState(""),[s,o]=Xe.useState(!0);function a(){const c=i.trim();if(!c)return;const u=LC(c);n(d=>[...d,{role:"user",text:c},{role:"assistant",text:u}]),r("")}function l(){o(c=>!c),s&&r("What is the status of my medication?")}return N.jsxs("div",{className:"absolute inset-0 bg-[#F2F2F7] flex flex-col z-50",children:[N.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx(uf,{size:22,className:"text-blue-500"}),N.jsx("span",{className:"text-gray-900 font-bold text-base",children:"Voice Assistant"})]}),N.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 text-2xl leading-none px-1","aria-label":"Close",children:N.jsx(rv,{size:22})})]}),N.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3",children:e.map((c,u)=>N.jsx("div",{className:`flex ${c.role==="user"?"justify-end":"justify-start"}`,children:N.jsx("div",{className:`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${c.role==="user"?"bg-blue-500 text-white rounded-br-sm":"bg-white text-gray-800 rounded-bl-sm shadow-sm"}`,children:c.text})},u))}),N.jsxs("div",{className:"flex flex-col items-center gap-2 py-3",children:[N.jsx("button",{onClick:l,className:`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all shadow-md ${s?"bg-red-500 animate-pulse scale-110":"bg-blue-500 hover:bg-blue-400"}`,"aria-label":s?"Stop listening":"Tap to speak",children:N.jsx(uf,{size:28,color:"white"})}),N.jsx("span",{className:"text-gray-400 text-xs",children:s?"Listening…":"Tap to speak"})]}),N.jsxs("div",{className:"px-4 pb-4 flex gap-2",children:[N.jsx("input",{type:"text",value:i,onChange:c=>r(c.target.value),onKeyDown:c=>c.key==="Enter"&&a(),placeholder:"Or type your question here…",className:"flex-1 bg-white text-gray-900 text-sm rounded-xl px-4 py-3 outline-none placeholder:text-gray-400 shadow-sm border border-gray-200"}),N.jsx("button",{onClick:a,className:"bg-blue-500 hover:bg-blue-400 text-white rounded-xl px-4 py-3 text-sm font-semibold",children:"Ask"})]})]})}const NC={good:"Prescription OK",pending:"Refill soon",alert:"Action required"};function IC({med:t}){const e=sv(t),n=Td[e];return N.jsx("div",{className:`absolute bottom-0 left-0 right-0 z-50 transition-colors duration-700 ${n.barClass}`,style:{height:5,boxShadow:n.barGlow},title:NC[e]})}function ng({isFullscreen:t,onToggleFullscreen:e,med:n,onToggleDose:i,onAddTimelineStep:r}){const[s,o]=Xe.useState("home"),[a,l]=Xe.useState(!1),c={navigate:o,onVoice:()=>l(!0),onToggleFullscreen:e,isFullscreen:t,med:n,onAddTimelineStep:r};return N.jsxs("div",{className:"w-full h-full relative overflow-hidden rounded-lg bg-[#F2F2F7] font-sans",children:[s==="home"&&N.jsx(TC,{...c,onToggleDose:i}),s==="detail"&&N.jsx(CC,{...c,onToggleDose:i}),s==="comms"&&N.jsx(RC,{...c}),!a&&N.jsxs("button",{onClick:()=>l(!0),className:"absolute bottom-4 right-3 bg-blue-500 hover:bg-blue-400 active:scale-95 text-white rounded-full shadow-md flex items-center gap-2 pl-3 pr-4 py-2.5 transition-all z-40",children:[N.jsx(uf,{size:20}),N.jsx("span",{className:"text-sm font-semibold",children:"Ask"})]}),a&&N.jsx(DC,{onClose:()=>l(!1)}),N.jsx(IC,{med:n})]})}const UC={id:1,name:"Proproprozol",dosage:"500mg",frequency:"Twice daily",pillsRemaining:12,pillsTotal:90,status:"action_required",issue:"Gotham Insurance rejected claim for 90 day supply",refillStatus:"on_hold",lastRefillDate:"2026-01-15",nextDueDate:"2026-03-20",todayTaken:!1,timeline:[{step:"Prescribed (90-day supply)",date:"2025-12-01",done:!0},{step:"Claim submitted to insurance",date:"2026-01-10",done:!0},{step:"Insurance rejected 90 day claim",date:"2026-03-05",done:!0,error:!0},{step:"Appeal or resubmit as 30-day supply",date:null,done:!1},{step:"Ready for refill",date:null,done:!1}]},es={w:800,h:600};function OC(){const[t,e]=Xe.useState(null),[n,i]=Xe.useState(!1),[r,s]=Xe.useState(UC),o=Td[sv(r)].hex,a=Xe.useCallback(y=>{e(y)},[]);function l(){s(y=>({...y,todayTaken:!y.todayTaken}))}function c(y){const m=new Date().toISOString().split("T")[0];s(h=>({...h,timeline:[...h.timeline,{step:y,date:m,done:!0}]}))}Xe.useEffect(()=>{function y(m){m.key==="Escape"&&n&&i(!1)}return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[n]);const[u,d]=Xe.useState({w:window.innerWidth,h:window.innerHeight});Xe.useEffect(()=>{const y=()=>d({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const f=u.w<es.w,p=f?1:Math.min(1,u.w/es.w,u.h/es.h),g={med:r,onToggleDose:l,onAddTimelineStep:c};return N.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[N.jsx(YA,{onScreenCornersUpdate:a,isFullscreen:n,onScreenClick:()=>i(!0),lightColor:o}),!n&&N.jsxs(N.Fragment,{children:[N.jsx(qA,{corners:t,resolution:es,children:(y,m)=>N.jsx(ng,{width:y,height:m,...g})}),N.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.35)",fontSize:11,pointerEvents:"none",fontFamily:"system-ui, sans-serif",letterSpacing:"0.05em"},children:"Drag to rotate · Click screen to expand"})]}),n&&N.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#111"},children:N.jsx("div",{style:{width:f?u.w:es.w,height:f?u.h:es.h,position:"relative",flexShrink:0,transform:`scale(${p})`,transformOrigin:"center center"},children:N.jsx(ng,{isFullscreen:!0,onToggleFullscreen:()=>i(!1),...g})})})]})}Mu.createRoot(document.getElementById("root")).render(N.jsx(Rv.StrictMode,{children:N.jsx(OC,{})}));
