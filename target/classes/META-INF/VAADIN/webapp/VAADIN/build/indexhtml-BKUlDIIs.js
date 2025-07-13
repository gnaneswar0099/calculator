function gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.copilotFlow=!1;window.Vaadin.featureFlags.copilotI18n=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xd={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Pm=Symbol.for("react.fragment"),Tm=Symbol.for("react.strict_mode"),zm=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Lm=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Dm=Symbol.for("react.memo"),Mm=Symbol.for("react.lazy"),Cu=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,kd={};function zr(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||wd}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ed(){}Ed.prototype=zr.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||wd}var ts=es.prototype=new Ed;ts.constructor=es;Sd(ts,zr.prototype);ts.isPureReactComponent=!0;var _u=Array.isArray,Cd=Object.prototype.hasOwnProperty,ns={current:null},_d={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Cd.call(t,r)&&!_d.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:No,type:e,key:i,ref:l,props:o,_owner:ns.current}}function Am(e,t){return{$$typeof:No,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function Im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Im(""+e.key):t.toString(36)}function ui(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case No:case bm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Sl(l,0):r,_u(o)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),ui(o,t,n,"",function(u){return u})):o!=null&&(rs(o)&&(o=Am(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(bu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_u(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Sl(i,a);l+=ui(i,t,n,s,o)}else if(s=Om(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Sl(i,a++),l+=ui(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wo(e,t,n){if(e==null)return e;var r=[],o=0;return ui(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},ci={transition:null},Um={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:ci,ReactCurrentOwner:ns};function Pd(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Wo,forEach:function(e,t,n){Wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wo(e,function(){t++}),t},toArray:function(e){return Wo(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=zr;G.Fragment=Pm;G.Profiler=zm;G.PureComponent=es;G.StrictMode=Tm;G.Suspense=Nm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;G.act=Pd;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ns.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Cd.call(t,s)&&!_d.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:No,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e};G.createElement=bd;G.createFactory=function(e){var t=bd.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:$m,render:e}};G.isValidElement=rs;G.lazy=function(e){return{$$typeof:Mm,_payload:{_status:-1,_result:e},_init:Fm}};G.memo=function(e,t){return{$$typeof:Dm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=ci.transition;ci.transition={};try{e()}finally{ci.transition=t}};G.unstable_act=Pd;G.useCallback=function(e,t){return Xe.current.useCallback(e,t)};G.useContext=function(e){return Xe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};G.useEffect=function(e,t){return Xe.current.useEffect(e,t)};G.useId=function(){return Xe.current.useId()};G.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Xe.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};G.useRef=function(e){return Xe.current.useRef(e)};G.useState=function(e){return Xe.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Xe.current.useTransition()};G.version="18.3.1";xd.exports=G;var b=xd.exports;const jm=yd(b),Bm=gd({__proto__:null,default:jm},[b]);var Td={exports:{}},at={},zd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,F){var j=P.length;P.push(F);e:for(;0<j;){var q=j-1>>>1,Z=P[q];if(0<o(Z,F))P[q]=F,P[j]=Z,j=q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],j=P.pop();if(j!==F){P[0]=j;e:for(var q=0,Z=P.length,Qe=Z>>>1;q<Qe;){var Ue=2*(q+1)-1,je=P[Ue],Le=Ue+1,$e=P[Le];if(0>o(je,j))Le<Z&&0>o($e,je)?(P[q]=$e,P[Le]=j,q=Le):(P[q]=je,P[Ue]=j,q=Ue);else if(Le<Z&&0>o($e,j))P[q]=$e,P[Le]=j,q=Le;else break e}}return F}function o(P,F){var j=P.sortIndex-F.sortIndex;return j!==0?j:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,c=3,y=!1,w=!1,S=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=P)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function E(P){if(S=!1,v(P),!w)if(n(s)!==null)w=!0,St(z);else{var F=n(u);F!==null&&dt(E,F.startTime-P)}}function z(P,F){w=!1,S&&(S=!1,m(R),R=-1),y=!0;var j=c;try{for(v(F),f=n(s);f!==null&&(!(f.expirationTime>F)||P&&!K());){var q=f.callback;if(typeof q=="function"){f.callback=null,c=f.priorityLevel;var Z=q(f.expirationTime<=F);F=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(s)&&r(s),v(F)}else r(s);f=n(s)}if(f!==null)var Qe=!0;else{var Ue=n(u);Ue!==null&&dt(E,Ue.startTime-F),Qe=!1}return Qe}finally{f=null,c=j,y=!1}}var D=!1,h=null,R=-1,I=5,N=-1;function K(){return!(e.unstable_now()-N<I)}function te(){if(h!==null){var P=e.unstable_now();N=P;var F=!0;try{F=h(!0,P)}finally{F?oe():(D=!1,h=null)}}else D=!1}var oe;if(typeof p=="function")oe=function(){p(te)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,_e=xe.port2;xe.port1.onmessage=te,oe=function(){_e.postMessage(null)}}else oe=function(){L(te,0)};function St(P){h=P,D||(D=!0,oe())}function dt(P,F){R=L(function(){P(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,St(z))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(c){case 1:case 2:case 3:var F=3;break;default:F=c}var j=c;c=F;try{return P()}finally{c=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=c;c=P;try{return F()}finally{c=j}},e.unstable_scheduleCallback=function(P,F,j){var q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?q+j:q):j=q,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=j+Z,P={id:d++,callback:F,priorityLevel:P,startTime:j,expirationTime:Z,sortIndex:-1},j>q?(P.sortIndex=j,t(u,P),n(s)===null&&P===n(u)&&(S?(m(R),R=-1):S=!0,dt(E,j-q))):(P.sortIndex=Z,t(s,P),w||y||(w=!0,St(z))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var F=c;return function(){var j=c;c=F;try{return P.apply(this,arguments)}finally{c=j}}}})(Rd);zd.exports=Rd;var Vm=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=b,lt=Vm;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,co={};function Wn(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(co[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,Wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},Tu={};function Qm(e){return ta.call(Tu,e)?!0:ta.call(Pu,e)?!1:Wm.test(e)?Tu[e]=!0:(Pu[e]=!0,!1)}function Km(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gm(e,t,n,r){if(t===null||typeof t>"u"||Km(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,is);Fe[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,is);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,is);Fe[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gm(t,n,o,r)&&(n=null),r||o===null?Qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),$d=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),ss=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Dd=Symbol.for("react.offscreen"),zu=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,kl;function Yr(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Ym(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case na:return"Profiler";case as:return"StrictMode";case ra:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case $d:return(e._context.displayName||"Context")+".Provider";case ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:ia(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return ia(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ia(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jm(e){var t=Md(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=Jm(e))}function Od(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Md(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ad(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function aa(e,t){Ad(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&sa(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sa(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Xr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Id(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Go,Ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zm=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){Zm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qm=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,t){if(t){if(qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,mr=null,hr=null;function Du(e){if(e=Oo(e)){if(typeof ma!="function")throw Error(C(280));var t=e.stateNode;t&&(t=tl(t),ma(e.stateNode,e.type,t))}}function Vd(e){mr?hr?hr.push(e):hr=[e]:mr=e}function Hd(){if(mr){var e=mr,t=hr;if(hr=mr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Wd(e,t){return e(t)}function Qd(){}var _l=!1;function Kd(e,t,n){if(_l)return e(t,n);_l=!0;try{return Wd(e,t,n)}finally{_l=!1,(mr!==null||hr!==null)&&(Qd(),Hd())}}function po(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ha=!1;if(Vt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ha=!1}function eh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var eo=!1,Ei=null,Ci=!1,va=null,th={onError:function(e){eo=!0,Ei=e}};function nh(e,t,n,r,o,i,l,a,s){eo=!1,Ei=null,eh.apply(th,arguments)}function rh(e,t,n,r,o,i,l,a,s){if(nh.apply(this,arguments),eo){if(eo){var u=Ei;eo=!1,Ei=null}else throw Error(C(198));Ci||(Ci=!0,va=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mu(e){if(Qn(e)!==e)throw Error(C(188))}function oh(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mu(o),e;if(i===r)return Mu(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Yd(e){return e=oh(e),e!==null?Xd(e):null}function Xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xd(e);if(t!==null)return t;e=e.sibling}return null}var Jd=lt.unstable_scheduleCallback,Ou=lt.unstable_cancelCallback,ih=lt.unstable_shouldYield,lh=lt.unstable_requestPaint,ge=lt.unstable_now,ah=lt.unstable_getCurrentPriorityLevel,ds=lt.unstable_ImmediatePriority,Zd=lt.unstable_UserBlockingPriority,_i=lt.unstable_NormalPriority,sh=lt.unstable_LowPriority,qd=lt.unstable_IdlePriority,Ji=null,Mt=null;function uh(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:fh,ch=Math.log,dh=Math.LN2;function fh(e){return e>>>=0,e===0?32:31-(ch(e)/dh|0)|0}var Yo=64,Xo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Jr(a):(i&=l,i!==0&&(r=Jr(i)))}else l=n&~o,l!==0?r=Jr(l):i!==0&&(r=Jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),o=1<<n,r|=e[n],t&=~o;return r}function ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Tt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=ph(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function hh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,ps,rf,of,lf,ya=!1,Jo=[],an=null,sn=null,un=null,mo=new Map,ho=new Map,tn=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Oo(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function gh(e,t,n,r,o){switch(t){case"focusin":return an=Ur(an,e,t,n,r,o),!0;case"dragenter":return sn=Ur(sn,e,t,n,r,o),!0;case"mouseover":return un=Ur(un,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mo.set(i,Ur(mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ho.set(i,Ur(ho.get(i)||null,e,t,n,r,o)),!0}return!1}function af(e){var t=Pn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gd(n),t!==null){e.blockedOn=t,lf(e.priority,function(){rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return t=Oo(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){di(e)&&n.delete(t)}function yh(){ya=!1,an!==null&&di(an)&&(an=null),sn!==null&&di(sn)&&(sn=null),un!==null&&di(un)&&(un=null),mo.forEach(Iu),ho.forEach(Iu)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,yh)))}function vo(e){function t(o){return jr(o,e)}if(0<Jo.length){jr(Jo[0],e);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&jr(an,e),sn!==null&&jr(sn,e),un!==null&&jr(un,e),mo.forEach(t),ho.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)af(n),n.blockedOn===null&&tn.shift()}var vr=Kt.ReactCurrentBatchConfig,Pi=!0;function xh(e,t,n,r){var o=ee,i=vr.transition;vr.transition=null;try{ee=1,ms(e,t,n,r)}finally{ee=o,vr.transition=i}}function wh(e,t,n,r){var o=ee,i=vr.transition;vr.transition=null;try{ee=4,ms(e,t,n,r)}finally{ee=o,vr.transition=i}}function ms(e,t,n,r){if(Pi){var o=xa(e,t,n,r);if(o===null)Ol(e,t,r,Ti,n),Au(e,r);else if(gh(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<vh.indexOf(e)){for(;o!==null;){var i=Oo(o);if(i!==null&&nf(i),i=xa(e,t,n,r),i===null&&Ol(e,t,r,Ti,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ti=null;function xa(e,t,n,r){if(Ti=null,e=cs(r),e=Pn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ah()){case ds:return 1;case Zd:return 4;case _i:case sh:return 16;case qd:return 536870912;default:return 16}default:return 16}}var on=null,hs=null,fi=null;function uf(){if(fi)return fi;var e,t=hs,n=t.length,r,o="value"in on?on.value:on.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return fi=o.slice(e,1<r?1-r:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Fu(){return!1}function st(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zo:Fu,this.isPropagationStopped=Fu,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=st(Rr),Mo=he({},Rr,{view:0,detail:0}),Sh=st(Mo),Pl,Tl,Br,Zi=he({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Pl=e.screenX-Br.screenX,Tl=e.screenY-Br.screenY):Tl=Pl=0,Br=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Uu=st(Zi),kh=he({},Zi,{dataTransfer:0}),Eh=st(kh),Ch=he({},Mo,{relatedTarget:0}),zl=st(Ch),_h=he({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),bh=st(_h),Ph=he({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Th=st(Ph),zh=he({},Rr,{data:0}),ju=st(zh),Rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$h[e])?!!t[e]:!1}function gs(){return Nh}var Dh=he({},Mo,{key:function(e){if(e.key){var t=Rh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mh=st(Dh),Oh=he({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bu=st(Oh),Ah=he({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),Ih=st(Ah),Fh=he({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=st(Fh),jh=he({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=st(jh),Vh=[9,13,27,32],ys=Vt&&"CompositionEvent"in window,to=null;Vt&&"documentMode"in document&&(to=document.documentMode);var Hh=Vt&&"TextEvent"in window&&!to,cf=Vt&&(!ys||to&&8<to&&11>=to),Vu=" ",Hu=!1;function df(e,t){switch(e){case"keyup":return Vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Wh(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(Hu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Hu?null:e;default:return null}}function Qh(e,t){if(rr)return e==="compositionend"||!ys&&df(e,t)?(e=uf(),fi=hs=on=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kh[e.type]:t==="textarea"}function pf(e,t,n,r){Vd(r),t=zi(t,"onChange"),0<t.length&&(n=new vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var no=null,go=null;function Gh(e){Cf(e,0)}function qi(e){var t=lr(e);if(Od(t))return e}function Yh(e,t){if(e==="change")return t}var mf=!1;if(Vt){var Rl;if(Vt){var Ll="oninput"in document;if(!Ll){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Ll=typeof Qu.oninput=="function"}Rl=Ll}else Rl=!1;mf=Rl&&(!document.documentMode||9<document.documentMode)}function Ku(){no&&(no.detachEvent("onpropertychange",hf),go=no=null)}function hf(e){if(e.propertyName==="value"&&qi(go)){var t=[];pf(t,go,e,cs(e)),Kd(Gh,t)}}function Xh(e,t,n){e==="focusin"?(Ku(),no=t,go=n,no.attachEvent("onpropertychange",hf)):e==="focusout"&&Ku()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(go)}function Zh(e,t){if(e==="click")return qi(t)}function qh(e,t){if(e==="input"||e==="change")return qi(t)}function ev(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:ev;function yo(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ta.call(t,o)||!Rt(e[o],t[o]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yu(e,t){var n=Gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gu(n)}}function vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gf(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tv(e){var t=gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vf(n.ownerDocument.documentElement,n)){if(r!==null&&xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Yu(n,i);var l=Yu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nv=Vt&&"documentMode"in document&&11>=document.documentMode,or=null,wa=null,ro=null,Sa=!1;function Xu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||or==null||or!==ki(r)||(r=or,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&yo(ro,r)||(ro=r,r=zi(wa,"onSelect"),0<r.length&&(t=new vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},$l={},yf={};Vt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function el(e){if($l[e])return $l[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return $l[e]=t[n];return e}var xf=el("animationend"),wf=el("animationiteration"),Sf=el("animationstart"),kf=el("transitionend"),Ef=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Ef.set(e,t),Wn(t,[e])}for(var Nl=0;Nl<Ju.length;Nl++){var Dl=Ju[Nl],rv=Dl.toLowerCase(),ov=Dl[0].toUpperCase()+Dl.slice(1);yn(rv,"on"+ov)}yn(xf,"onAnimationEnd");yn(wf,"onAnimationIteration");yn(Sf,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(kf,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rh(r,t,void 0,e),e.currentTarget=null}function Cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Zu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Zu(o,a,u),i=s}}}if(Ci)throw e=va,Ci=!1,va=null,e}function le(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||(_f(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),_f(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[ei]){e[ei]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(iv.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,Ml("selectionchange",!1,t))}}function _f(e,t,n,r){switch(sf(t)){case 1:var o=xh;break;case 4:o=wh;break;default:o=ms}n=o.bind(null,t,n,e),o=void 0,!ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Kd(function(){var u=i,d=cs(n),f=[];e:{var c=Ef.get(e);if(c!==void 0){var y=vs,w=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":y=Mh;break;case"focusin":w="focus",y=zl;break;case"focusout":w="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ih;break;case xf:case wf:case Sf:y=bh;break;case kf:y=Uh;break;case"scroll":y=Sh;break;case"wheel":y=Bh;break;case"copy":case"cut":case"paste":y=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bu}var S=(t&4)!==0,L=!S&&e==="scroll",m=S?c!==null?c+"Capture":null:c;S=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=po(p,m),E!=null&&S.push(wo(p,E,v)))),L)break;p=p.return}0<S.length&&(c=new y(c,w,null,n,d),f.push({event:c,listeners:S}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",c&&n!==pa&&(w=n.relatedTarget||n.fromElement)&&(Pn(w)||w[Ht]))break e;if((y||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Pn(w):null,w!==null&&(L=Qn(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=Uu,E="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Bu,E="onPointerLeave",m="onPointerEnter",p="pointer"),L=y==null?c:lr(y),v=w==null?c:lr(w),c=new S(E,p+"leave",y,n,d),c.target=L,c.relatedTarget=v,E=null,Pn(d)===u&&(S=new S(m,p+"enter",w,n,d),S.target=v,S.relatedTarget=L,E=S),L=E,y&&w)t:{for(S=y,m=w,p=0,v=S;v;v=Xn(v))p++;for(v=0,E=m;E;E=Xn(E))v++;for(;0<p-v;)S=Xn(S),p--;for(;0<v-p;)m=Xn(m),v--;for(;p--;){if(S===m||m!==null&&S===m.alternate)break t;S=Xn(S),m=Xn(m)}S=null}else S=null;y!==null&&qu(f,c,y,S,!1),w!==null&&L!==null&&qu(f,L,w,S,!0)}}e:{if(c=u?lr(u):window,y=c.nodeName&&c.nodeName.toLowerCase(),y==="select"||y==="input"&&c.type==="file")var z=Yh;else if(Wu(c))if(mf)z=qh;else{z=Jh;var D=Xh}else(y=c.nodeName)&&y.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(z=Zh);if(z&&(z=z(e,u))){pf(f,z,n,d);break e}D&&D(e,c,u),e==="focusout"&&(D=c._wrapperState)&&D.controlled&&c.type==="number"&&sa(c,"number",c.value)}switch(D=u?lr(u):window,e){case"focusin":(Wu(D)||D.contentEditable==="true")&&(or=D,wa=u,ro=null);break;case"focusout":ro=wa=or=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Xu(f,n,d);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":Xu(f,n,d)}var h;if(ys)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else rr?df(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(cf&&n.locale!=="ko"&&(rr||R!=="onCompositionStart"?R==="onCompositionEnd"&&rr&&(h=uf()):(on=d,hs="value"in on?on.value:on.textContent,rr=!0)),D=zi(u,R),0<D.length&&(R=new ju(R,e,null,n,d),f.push({event:R,listeners:D}),h?R.data=h:(h=ff(n),h!==null&&(R.data=h)))),(h=Hh?Wh(e,n):Qh(e,n))&&(u=zi(u,"onBeforeInput"),0<u.length&&(d=new ju("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=h))}Cf(f,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=po(e,n),i!=null&&r.unshift(wo(e,i,o)),i=po(e,t),i!=null&&r.push(wo(e,i,o))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=po(n,i),s!=null&&l.unshift(wo(n,s,a))):o||(s=po(n,i),s!=null&&l.push(wo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lv=/\r\n?/g,av=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(lv,`
`).replace(av,"")}function ti(e,t,n){if(t=ec(t),ec(e)!==t&&n)throw Error(C(425))}function Ri(){}var ka=null,Ea=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(cv)}:_a;function cv(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vo(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Lr,So="__reactProps$"+Lr,Ht="__reactContainer$"+Lr,ba="__reactEvents$"+Lr,dv="__reactListeners$"+Lr,fv="__reactHandles$"+Lr;function Pn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nc(e);e!==null;){if(n=e[Dt])return n;e=nc(e)}return t}e=n,n=e.parentNode}return null}function Oo(e){return e=e[Dt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function tl(e){return e[So]||null}var Pa=[],ar=-1;function xn(e){return{current:e}}function ae(e){0>ar||(e.current=Pa[ar],Pa[ar]=null,ar--)}function ie(e,t){ar++,Pa[ar]=e.current,e.current=t}var gn={},We=xn(gn),et=xn(!1),An=gn;function wr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function Li(){ae(et),ae(We)}function rc(e,t,n){if(We.current!==gn)throw Error(C(168));ie(We,t),ie(et,n)}function bf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Xm(e)||"Unknown",o));return he({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,An=We.current,ie(We,e),ie(et,et.current),!0}function oc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=bf(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ae(et),ae(We),ie(We,e)):ae(et),ie(et,n)}var Ft=null,nl=!1,Il=!1;function Pf(e){Ft===null?Ft=[e]:Ft.push(e)}function pv(e){nl=!0,Pf(e)}function wn(){if(!Il&&Ft!==null){Il=!0;var e=0,t=ee;try{var n=Ft;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,nl=!1}catch(o){throw Ft!==null&&(Ft=Ft.slice(e+1)),Jd(ds,wn),o}finally{ee=t,Il=!1}}return null}var sr=[],ur=0,Ni=null,Di=0,mt=[],ht=0,In=null,Ut=1,jt="";function _n(e,t){sr[ur++]=Di,sr[ur++]=Ni,Ni=e,Di=t}function Tf(e,t,n){mt[ht++]=Ut,mt[ht++]=jt,mt[ht++]=In,In=e;var r=Ut;e=jt;var o=32-Tt(r)-1;r&=~(1<<o),n+=1;var i=32-Tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ut=1<<32-Tt(t)+o|n<<o|r,jt=i+e}else Ut=1<<i|n<<o|r,jt=e}function ws(e){e.return!==null&&(_n(e,1),Tf(e,1,0))}function Ss(e){for(;e===Ni;)Ni=sr[--ur],sr[ur]=null,Di=sr[--ur],sr[ur]=null;for(;e===In;)In=mt[--ht],mt[ht]=null,jt=mt[--ht],mt[ht]=null,Ut=mt[--ht],mt[ht]=null}var it=null,ot=null,ce=!1,Pt=null;function zf(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Ut,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,ot=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(ce){var t=ot;if(t){var n=t;if(!ic(e,t)){if(Ta(e))throw Error(C(418));t=cn(n.nextSibling);var r=it;t&&ic(e,t)?zf(r,n):(e.flags=e.flags&-4097|2,ce=!1,it=e)}}else{if(Ta(e))throw Error(C(418));e.flags=e.flags&-4097|2,ce=!1,it=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function ni(e){if(e!==it)return!1;if(!ce)return lc(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=ot)){if(Ta(e))throw Rf(),Error(C(418));for(;t;)zf(e,t),t=cn(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?cn(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=ot;e;)e=cn(e.nextSibling)}function Sr(){ot=it=null,ce=!1}function ks(e){Pt===null?Pt=[e]:Pt.push(e)}var mv=Kt.ReactCurrentBatchConfig;function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function Lf(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=mn(m,p),m.index=0,m.sibling=null,m}function i(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,E){return p===null||p.tag!==6?(p=Wl(v,m.mode,E),p.return=m,p):(p=o(p,v),p.return=m,p)}function s(m,p,v,E){var z=v.type;return z===nr?d(m,p,v.props.children,E,v.key):p!==null&&(p.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qt&&ac(z)===p.type)?(E=o(p,v.props),E.ref=Vr(m,p,v),E.return=m,E):(E=wi(v.type,v.key,v.props,null,m.mode,E),E.ref=Vr(m,p,v),E.return=m,E)}function u(m,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ql(v,m.mode,E),p.return=m,p):(p=o(p,v.children||[]),p.return=m,p)}function d(m,p,v,E,z){return p===null||p.tag!==7?(p=Mn(v,m.mode,E,z),p.return=m,p):(p=o(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wl(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:return v=wi(p.type,p.key,p.props,null,m.mode,v),v.ref=Vr(m,null,p),v.return=m,v;case tr:return p=Ql(p,m.mode,v),p.return=m,p;case qt:var E=p._init;return f(m,E(p._payload),v)}if(Xr(p)||Ir(p))return p=Mn(p,m.mode,v,null),p.return=m,p;ri(m,p)}return null}function c(m,p,v,E){var z=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return z!==null?null:a(m,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return v.key===z?s(m,p,v,E):null;case tr:return v.key===z?u(m,p,v,E):null;case qt:return z=v._init,c(m,p,z(v._payload),E)}if(Xr(v)||Ir(v))return z!==null?null:d(m,p,v,E,null);ri(m,v)}return null}function y(m,p,v,E,z){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(p,m,""+E,z);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qo:return m=m.get(E.key===null?v:E.key)||null,s(p,m,E,z);case tr:return m=m.get(E.key===null?v:E.key)||null,u(p,m,E,z);case qt:var D=E._init;return y(m,p,v,D(E._payload),z)}if(Xr(E)||Ir(E))return m=m.get(v)||null,d(p,m,E,z,null);ri(p,E)}return null}function w(m,p,v,E){for(var z=null,D=null,h=p,R=p=0,I=null;h!==null&&R<v.length;R++){h.index>R?(I=h,h=null):I=h.sibling;var N=c(m,h,v[R],E);if(N===null){h===null&&(h=I);break}e&&h&&N.alternate===null&&t(m,h),p=i(N,p,R),D===null?z=N:D.sibling=N,D=N,h=I}if(R===v.length)return n(m,h),ce&&_n(m,R),z;if(h===null){for(;R<v.length;R++)h=f(m,v[R],E),h!==null&&(p=i(h,p,R),D===null?z=h:D.sibling=h,D=h);return ce&&_n(m,R),z}for(h=r(m,h);R<v.length;R++)I=y(h,m,R,v[R],E),I!==null&&(e&&I.alternate!==null&&h.delete(I.key===null?R:I.key),p=i(I,p,R),D===null?z=I:D.sibling=I,D=I);return e&&h.forEach(function(K){return t(m,K)}),ce&&_n(m,R),z}function S(m,p,v,E){var z=Ir(v);if(typeof z!="function")throw Error(C(150));if(v=z.call(v),v==null)throw Error(C(151));for(var D=z=null,h=p,R=p=0,I=null,N=v.next();h!==null&&!N.done;R++,N=v.next()){h.index>R?(I=h,h=null):I=h.sibling;var K=c(m,h,N.value,E);if(K===null){h===null&&(h=I);break}e&&h&&K.alternate===null&&t(m,h),p=i(K,p,R),D===null?z=K:D.sibling=K,D=K,h=I}if(N.done)return n(m,h),ce&&_n(m,R),z;if(h===null){for(;!N.done;R++,N=v.next())N=f(m,N.value,E),N!==null&&(p=i(N,p,R),D===null?z=N:D.sibling=N,D=N);return ce&&_n(m,R),z}for(h=r(m,h);!N.done;R++,N=v.next())N=y(h,m,R,N.value,E),N!==null&&(e&&N.alternate!==null&&h.delete(N.key===null?R:N.key),p=i(N,p,R),D===null?z=N:D.sibling=N,D=N);return e&&h.forEach(function(te){return t(m,te)}),ce&&_n(m,R),z}function L(m,p,v,E){if(typeof v=="object"&&v!==null&&v.type===nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:e:{for(var z=v.key,D=p;D!==null;){if(D.key===z){if(z=v.type,z===nr){if(D.tag===7){n(m,D.sibling),p=o(D,v.props.children),p.return=m,m=p;break e}}else if(D.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qt&&ac(z)===D.type){n(m,D.sibling),p=o(D,v.props),p.ref=Vr(m,D,v),p.return=m,m=p;break e}n(m,D);break}else t(m,D);D=D.sibling}v.type===nr?(p=Mn(v.props.children,m.mode,E,v.key),p.return=m,m=p):(E=wi(v.type,v.key,v.props,null,m.mode,E),E.ref=Vr(m,p,v),E.return=m,m=E)}return l(m);case tr:e:{for(D=v.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=o(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ql(v,m.mode,E),p.return=m,m=p}return l(m);case qt:return D=v._init,L(m,p,D(v._payload),E)}if(Xr(v))return w(m,p,v,E);if(Ir(v))return S(m,p,v,E);ri(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,v),p.return=m,m=p):(n(m,p),p=Wl(v,m.mode,E),p.return=m,m=p),l(m)):n(m,p)}return L}var kr=Lf(!0),$f=Lf(!1),Mi=xn(null),Oi=null,cr=null,Es=null;function Cs(){Es=cr=Oi=null}function _s(e){var t=Mi.current;ae(Mi),e._currentValue=t}function Ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){Oi=e,Es=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Oi===null)throw Error(C(308));cr=e,Oi.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Tn=null;function bs(e){Tn===null?Tn=[e]:Tn.push(e)}function Nf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}function sc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var o=e.updateQueue;en=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=u=s=null,a=i;do{var c=a.lane,y=a.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(c=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(y,f,c);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,c=typeof w=="function"?w.call(y,f,c):w,c==null)break e;f=he({},f,c);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[a]:c.push(a))}else y={eventTime:y,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,s=f):d=d.next=y,l|=c;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;c=a,a=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Un|=l,e.lanes=l,e.memoizedState=f}}function uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Ao={},Ot=xn(Ao),ko=xn(Ao),Eo=xn(Ao);function zn(e){if(e===Ao)throw Error(C(174));return e}function Ts(e,t){switch(ie(Eo,t),ie(ko,e),ie(Ot,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ca(t,e)}ae(Ot),ie(Ot,t)}function Er(){ae(Ot),ae(ko),ae(Eo)}function Mf(e){zn(Eo.current);var t=zn(Ot.current),n=ca(t,e.type);t!==n&&(ie(ko,e),ie(Ot,n))}function zs(e){ko.current===e&&(ae(Ot),ae(ko))}var pe=xn(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Rs(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var hi=Kt.ReactCurrentDispatcher,Ul=Kt.ReactCurrentBatchConfig,Fn=0,me=null,ke=null,Pe=null,Fi=!1,oo=!1,Co=0,hv=0;function Be(){throw Error(C(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,o,i){if(Fn=i,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=e===null||e.memoizedState===null?xv:wv,e=n(r,o),oo){i=0;do{if(oo=!1,Co=0,25<=i)throw Error(C(301));i+=1,Pe=ke=null,t.updateQueue=null,hi.current=Sv,e=n(r,o)}while(oo)}if(hi.current=Ui,t=ke!==null&&ke.next!==null,Fn=0,Pe=ke=me=null,Fi=!1,t)throw Error(C(300));return e}function Ns(){var e=Co!==0;return Co=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function wt(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Pe===null?me.memoizedState:Pe.next;if(t!==null)Pe=t,ke=e;else{if(e===null)throw Error(C(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Pe===null?me.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function _o(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=wt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Fn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,me.lanes|=d,Un|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Rt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,me.lanes|=i,Un|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=wt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Rt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Of(){}function Af(e,t){var n=me,r=wt(),o=t(),i=!Rt(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,Ds(Uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,bo(9,Ff.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(C(349));Fn&30||If(n,t,o)}return o}function If(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ff(e,t,n,r){t.value=n,t.getSnapshot=r,jf(t)&&Bf(e)}function Uf(e,t,n){return n(function(){jf(t)&&Bf(e)})}function jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Bf(e){var t=Wt(e,1);t!==null&&zt(t,e,1,-1)}function cc(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:e},t.queue=e,e=e.dispatch=yv.bind(null,me,e),[t.memoizedState,e]}function bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vf(){return wt().memoizedState}function vi(e,t,n,r){var o=Nt();me.flags|=e,o.memoizedState=bo(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var o=wt();r=r===void 0?null:r;var i=void 0;if(ke!==null){var l=ke.memoizedState;if(i=l.destroy,r!==null&&Ls(r,l.deps)){o.memoizedState=bo(t,n,i,r);return}}me.flags|=e,o.memoizedState=bo(1|t,n,i,r)}function dc(e,t){return vi(8390656,8,e,t)}function Ds(e,t){return rl(2048,8,e,t)}function Hf(e,t){return rl(4,2,e,t)}function Wf(e,t){return rl(4,4,e,t)}function Qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kf(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Qf.bind(null,t,e),n)}function Ms(){}function Gf(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yf(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xf(e,t,n){return Fn&21?(Rt(n,t)||(n=ef(),me.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function vv(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{ee=n,Ul.transition=r}}function Jf(){return wt().memoizedState}function gv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))qf(t,n);else if(n=Nf(e,t,n,r),n!==null){var o=Ye();zt(n,e,r,o),ep(n,t,r)}}function yv(e,t,n){var r=pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))qf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Rt(a,l)){var s=t.interleaved;s===null?(o.next=o,bs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Nf(e,t,o,r),n!==null&&(o=Ye(),zt(n,e,r,o),ep(n,t,r))}}function Zf(e){var t=e.alternate;return e===me||t!==null&&t===me}function qf(e,t){oo=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}var Ui={readContext:xt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},xv={readContext:xt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4194308,4,Qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gv.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:cc,useDebugValue:Ms,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=cc(!1),t=e[0];return e=vv.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=Nt();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ze===null)throw Error(C(349));Fn&30||If(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,dc(Uf.bind(null,r,i,e),[e]),r.flags|=2048,bo(9,Ff.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=ze.identifierPrefix;if(ce){var n=jt,r=Ut;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wv={readContext:xt,useCallback:Gf,useContext:xt,useEffect:Ds,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Yf,useReducer:jl,useRef:Vf,useState:function(){return jl(_o)},useDebugValue:Ms,useDeferredValue:function(e){var t=wt();return Xf(t,ke.memoizedState,e)},useTransition:function(){var e=jl(_o)[0],t=wt().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Af,useId:Jf,unstable_isNewReconciler:!1},Sv={readContext:xt,useCallback:Gf,useContext:xt,useEffect:Ds,useImperativeHandle:Kf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Yf,useReducer:Bl,useRef:Vf,useState:function(){return Bl(_o)},useDebugValue:Ms,useDeferredValue:function(e){var t=wt();return ke===null?t.memoizedState=e:Xf(t,ke.memoizedState,e)},useTransition:function(){var e=Bl(_o)[0],t=wt().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Af,useId:Jf,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),o=pn(e),i=Bt(r,o);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(zt(t,e,o,r),mi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),o=pn(e),i=Bt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(zt(t,e,o,r),mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=pn(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(zt(t,e,r,n),mi(t,e,r))}};function fc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(o,i):!0}function tp(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=xt(i):(o=tt(t)?An:We.current,r=t.contextTypes,i=(r=r!=null)?wr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function $a(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ps(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=xt(i):(i=tt(t)?An:We.current,o.context=wr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(La(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ai(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=Ym(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kv=typeof WeakMap=="function"?WeakMap:Map;function np(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bi||(Bi=!0,Va=r),Na(e,t)},n}function rp(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Na(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function mc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ov.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var Ev=Kt.ReactCurrentOwner,qe=!1;function Ge(e,t,n,r){t.child=e===null?$f(t,null,n,r):kr(t,e.child,n,r)}function gc(e,t,n,r,o){n=n.render;var i=t.ref;return gr(t,o),r=$s(e,t,n,r,i,o),n=Ns(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ce&&n&&ws(t),t.flags|=1,Ge(e,t,r,o),t.child)}function yc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Vs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,op(e,t,i,r,o)):(e=wi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(l,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yo(i,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Da(e,t,n,r,o)}function ip(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(fr,rt),rt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(fr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(fr,rt),rt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(fr,rt),rt|=r;return Ge(e,t,o,n),t.child}function lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Da(e,t,n,r,o){var i=tt(n)?An:We.current;return i=wr(t,i),gr(t,o),n=$s(e,t,n,r,i,o),r=Ns(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(ce&&r&&ws(t),t.flags|=1,Ge(e,t,n,o),t.child)}function xc(e,t,n,r,o){if(tt(n)){var i=!0;$i(t)}else i=!1;if(gr(t,o),t.stateNode===null)gi(e,t),tp(t,n,r),$a(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=tt(n)?An:We.current,u=wr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&pc(t,l,r,u),en=!1;var c=t.memoizedState;l.state=c,Ai(t,r,l,o),s=t.memoizedState,a!==r||c!==s||et.current||en?(typeof d=="function"&&(La(t,n,d,r),s=t.memoizedState),(a=en||fc(t,n,a,r,c,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Df(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ct(t.type,a),l.props=u,f=t.pendingProps,c=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=xt(s):(s=tt(n)?An:We.current,s=wr(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||c!==s)&&pc(t,l,r,s),en=!1,c=t.memoizedState,l.state=c,Ai(t,r,l,o);var w=t.memoizedState;a!==f||c!==w||et.current||en?(typeof y=="function"&&(La(t,n,y,r),w=t.memoizedState),(u=en||fc(t,n,u,r,c,w,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,i,o)}function Ma(e,t,n,r,o,i){lp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&oc(t,n,!1),Qt(e,t,i);r=t.stateNode,Ev.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kr(t,e.child,null,i),t.child=kr(t,null,a,i)):Ge(e,t,a,i),t.memoizedState=r.state,o&&oc(t,n,!0),t.child}function ap(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),Ts(e,t.containerInfo)}function wc(e,t,n,r,o){return Sr(),ks(o),t.flags|=256,Ge(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,t,n){var r=t.pendingProps,o=pe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(pe,o&1),e===null)return za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=al(l,r,0,null),e=Mn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Aa(n),t.memoizedState=Oa,e):Os(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Cv(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=Mn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Aa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Os(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&ks(r),kr(t,e.child,null,n),e=Os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(C(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),i=Mn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&kr(t,e.child,null,l),t.child.memoizedState=Aa(l),t.memoizedState=Oa,i);if(!(t.mode&1))return oi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Vl(i,r,void 0),oi(e,t,l,r)}if(a=(l&e.childLanes)!==0,qe||a){if(r=ze,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wt(e,o),zt(r,e,o,-1))}return Bs(),r=Vl(Error(C(421))),oi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Av.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ot=cn(o.nextSibling),it=t,ce=!0,Pt=null,e!==null&&(mt[ht++]=Ut,mt[ht++]=jt,mt[ht++]=In,Ut=e.id,jt=e.overflow,In=t),t=Os(t,r.children),t.flags|=4096,t)}function Sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ra(e.return,t,n)}function Hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function up(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,n,t);else if(e.tag===19)Sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ii(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _v(e,t,n){switch(t.tag){case 3:ap(t),Sr();break;case 5:Mf(t);break;case 1:tt(t.type)&&$i(t);break;case 4:Ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Mi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?sp(e,t,n):(ie(pe,pe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return up(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,ip(e,t,n)}return Qt(e,t,n)}var cp,Ia,dp,fp;cp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};dp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,zn(Ot.current);var i=null;switch(n){case"input":o=la(e,o),r=la(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=ua(e,o),r=ua(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}da(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&le("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bv(e,t,n){var r=t.pendingProps;switch(Ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return tt(t.type)&&Li(),Ve(t),null;case 3:return r=t.stateNode,Er(),ae(et),ae(We),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Qa(Pt),Pt=null))),Ia(e,t),Ve(t),null;case 5:zs(t);var o=zn(Eo.current);if(n=t.type,e!==null&&t.stateNode!=null)dp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ve(t),null}if(e=zn(Ot.current),ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Dt]=t,r[So]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)le(Zr[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Ru(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":$u(r,i),le("invalid",r)}da(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),o=["children",""+a]):co.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":Ko(r),Lu(r,i,!0);break;case"textarea":Ko(r),Nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ri)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Dt]=t,e[So]=r,cp(e,t,!1,!1),t.stateNode=e;e:{switch(l=fa(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)le(Zr[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":Ru(e,r),o=la(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":$u(e,r),o=ua(e,r),le("invalid",e);break;default:o=r}da(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Bd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ud(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&fo(e,s):typeof s=="number"&&fo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(co.hasOwnProperty(i)?s!=null&&i==="onScroll"&&le("scroll",e):s!=null&&ls(e,i,s,l))}switch(n){case"input":Ko(e),Lu(e,r,!1);break;case"textarea":Ko(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=zn(Eo.current),zn(Ot.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(i=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Ve(t),null;case 13:if(ae(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&ot!==null&&t.mode&1&&!(t.flags&128))Rf(),Sr(),t.flags|=98560,i=!1;else if(i=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Dt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),i=!1}else Pt!==null&&(Qa(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Ce===0&&(Ce=3):Bs())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Er(),Ia(e,t),e===null&&xo(t.stateNode.containerInfo),Ve(t),null;case 10:return _s(t.type._context),Ve(t),null;case 17:return tt(t.type)&&Li(),Ve(t),null;case 19:if(ae(pe),i=t.memoizedState,i===null)return Ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Hr(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ii(e),l!==null){for(t.flags|=128,Hr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(pe,pe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>_r&&(t.flags|=128,r=!0,Hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ii(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ce)return Ve(t),null}else 2*ge()-i.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Hr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,n=pe.current,ie(pe,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Pv(e,t){switch(Ss(t),t.tag){case 1:return tt(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ae(et),ae(We),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(ae(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(pe),null;case 4:return Er(),null;case 10:return _s(t.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var ii=!1,He=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,M=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){ve(e,t,r)}}var kc=!1;function zv(e,t){if(ka=Pi,e=gf(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)c=f,f=y;for(;;){if(f===e)break t;if(c===n&&++u===o&&(a=l),c===i&&++d===r&&(s=l),(y=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Pi=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,L=w.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ct(t.type,S),L);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){ve(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=kc,kc=!1,w}function io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fa(t,n,i)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[So],delete t[ba],delete t[dv],delete t[fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var Ae=null,_t=!1;function Jt(e,t,n){for(n=n.child;n!==null;)hp(e,t,n),n=n.sibling}function hp(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:He||dr(n,t);case 6:var r=Ae,o=_t;Ae=null,Jt(e,t,n),Ae=r,_t=o,Ae!==null&&(_t?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(_t?(e=Ae,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),vo(e)):Al(Ae,n.stateNode));break;case 4:r=Ae,o=_t,Ae=n.stateNode.containerInfo,_t=!0,Jt(e,t,n),Ae=r,_t=o;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fa(n,t,l),o=o.next}while(o!==r)}Jt(e,t,n);break;case 1:if(!He&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Jt(e,t,n),He=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tv),t.forEach(function(r){var o=Iv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,_t=!1;break e;case 3:Ae=a.stateNode.containerInfo,_t=!0;break e;case 4:Ae=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Ae===null)throw Error(C(160));hp(i,l,o),Ae=null,_t=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}function vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),$t(e),r&4){try{io(3,e,e.return),il(3,e)}catch(S){ve(e,e.return,S)}try{io(5,e,e.return)}catch(S){ve(e,e.return,S)}}break;case 1:kt(t,e),$t(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(kt(t,e),$t(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{fo(o,"")}catch(S){ve(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ad(o,i),fa(a,l);var u=fa(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?Bd(o,f):d==="dangerouslySetInnerHTML"?Ud(o,f):d==="children"?fo(o,f):ls(o,d,f,u)}switch(a){case"input":aa(o,i);break;case"textarea":Id(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?pr(o,!!i.multiple,y,!1):c!==!!i.multiple&&(i.defaultValue!=null?pr(o,!!i.multiple,i.defaultValue,!0):pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[So]=i}catch(S){ve(e,e.return,S)}}break;case 6:if(kt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ve(e,e.return,S)}}break;case 3:if(kt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(S){ve(e,e.return,S)}break;case 4:kt(t,e),$t(e);break;case 13:kt(t,e),$t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Fs=ge())),r&4&&Cc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||d,kt(t,e),He=u):kt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(c=M,y=c.child,c.tag){case 0:case 11:case 14:case 15:io(4,c,c.return);break;case 1:dr(c,c.return);var w=c.stateNode;if(typeof w.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){ve(r,n,S)}}break;case 5:dr(c,c.return);break;case 22:if(c.memoizedState!==null){bc(f);continue}}y!==null?(y.return=c,M=y):bc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=jd("display",l))}catch(S){ve(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){ve(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(t,e),$t(e),r&4&&Cc(e);break;case 21:break;default:kt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mp(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fo(o,""),r.flags&=-33);var i=Ec(e);Ba(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ec(e);ja(e,a,l);break;default:throw Error(C(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rv(e,t,n){M=e,gp(e)}function gp(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ii;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||He;a=ii;var u=He;if(ii=l,(He=s)&&!u)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?Pc(o):s!==null?(s.return=l,M=s):Pc(o);for(;i!==null;)M=i,gp(i),i=i.sibling;M=o,ii=a,He=u}_c(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):_c(e)}}function _c(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}He||t.flags&512&&Ua(t)}catch(c){ve(t,t.return,c)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function bc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Pc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(s){ve(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ve(t,o,s)}}var i=t.return;try{Ua(t)}catch(s){ve(t,i,s)}break;case 5:var l=t.return;try{Ua(t)}catch(s){ve(t,l,s)}}}catch(s){ve(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var Lv=Math.ceil,ji=Kt.ReactCurrentDispatcher,As=Kt.ReactCurrentOwner,yt=Kt.ReactCurrentBatchConfig,J=0,ze=null,Se=null,Ie=0,rt=0,fr=xn(0),Ce=0,Po=null,Un=0,ll=0,Is=0,lo=null,Ze=null,Fs=0,_r=1/0,It=null,Bi=!1,Va=null,fn=null,li=!1,ln=null,Vi=0,ao=0,Ha=null,yi=-1,xi=0;function Ye(){return J&6?ge():yi!==-1?yi:yi=ge()}function pn(e){return e.mode&1?J&2&&Ie!==0?Ie&-Ie:mv.transition!==null?(xi===0&&(xi=ef()),xi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:sf(e.type)),e):1}function zt(e,t,n,r){if(50<ao)throw ao=0,Ha=null,Error(C(185));Do(e,n,r),(!(J&2)||e!==ze)&&(e===ze&&(!(J&2)&&(ll|=n),Ce===4&&nn(e,Ie)),nt(e,r),n===1&&J===0&&!(t.mode&1)&&(_r=ge()+500,nl&&wn()))}function nt(e,t){var n=e.callbackNode;mh(e,t);var r=bi(e,e===ze?Ie:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?pv(Tc.bind(null,e)):Pf(Tc.bind(null,e)),uv(function(){!(J&6)&&wn()}),n=null;else{switch(tf(r)){case 1:n=ds;break;case 4:n=Zd;break;case 16:n=_i;break;case 536870912:n=qd;break;default:n=_i}n=_p(n,yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yp(e,t){if(yi=-1,xi=0,J&6)throw Error(C(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=bi(e,e===ze?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hi(e,r);else{t=r;var o=J;J|=2;var i=wp();(ze!==e||Ie!==t)&&(It=null,_r=ge()+500,Dn(e,t));do try{Dv();break}catch(a){xp(e,a)}while(!0);Cs(),ji.current=i,J=o,Se!==null?t=0:(ze=null,Ie=0,t=Ce)}if(t!==0){if(t===2&&(o=ga(e),o!==0&&(r=o,t=Wa(e,o))),t===1)throw n=Po,Dn(e,0),nn(e,r),nt(e,ge()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!$v(o)&&(t=Hi(e,r),t===2&&(i=ga(e),i!==0&&(r=i,t=Wa(e,i))),t===1))throw n=Po,Dn(e,0),nn(e,r),nt(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:bn(e,Ze,It);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Fs+500-ge(),10<t)){if(bi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_a(bn.bind(null,e,Ze,It),t);break}bn(e,Ze,It);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lv(r/1960))-r,10<r){e.timeoutHandle=_a(bn.bind(null,e,Ze,It),r);break}bn(e,Ze,It);break;case 5:bn(e,Ze,It);break;default:throw Error(C(329))}}}return nt(e,ge()),e.callbackNode===n?yp.bind(null,e):null}function Wa(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=Hi(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Qa(t)),e}function Qa(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function $v(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Is,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(J&6)throw Error(C(327));yr();var t=bi(e,0);if(!(t&1))return nt(e,ge()),null;var n=Hi(e,t);if(e.tag!==0&&n===2){var r=ga(e);r!==0&&(t=r,n=Wa(e,r))}if(n===1)throw n=Po,Dn(e,0),nn(e,t),nt(e,ge()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Ze,It),nt(e,ge()),null}function Us(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(_r=ge()+500,nl&&wn())}}function jn(e){ln!==null&&ln.tag===0&&!(J&6)&&yr();var t=J;J|=1;var n=yt.transition,r=ee;try{if(yt.transition=null,ee=1,e)return e()}finally{ee=r,yt.transition=n,J=t,!(J&6)&&wn()}}function js(){rt=fr.current,ae(fr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sv(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:Er(),ae(et),ae(We),Rs();break;case 5:zs(r);break;case 4:Er();break;case 13:ae(pe);break;case 19:ae(pe);break;case 10:_s(r.type._context);break;case 22:case 23:js()}n=n.return}if(ze=e,Se=e=mn(e.current,null),Ie=rt=t,Ce=0,Po=null,Is=ll=Un=0,Ze=lo=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Tn=null}return e}function xp(e,t){do{var n=Se;try{if(Cs(),hi.current=Ui,Fi){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fi=!1}if(Fn=0,Pe=ke=me=null,oo=!1,Co=0,As.current=null,n===null||n.return===null){Ce=1,Po=t,Se=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=hc(l);if(y!==null){y.flags&=-257,vc(y,l,a,i,t),y.mode&1&&mc(i,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if(!(t&1)){mc(i,u,t),Bs();break e}s=Error(C(426))}}else if(ce&&a.mode&1){var L=hc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),vc(L,l,a,i,t),ks(Cr(s,a));break e}}i=s=Cr(s,a),Ce!==4&&(Ce=2),lo===null?lo=[i]:lo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=np(i,s,t);sc(i,m);break e;case 1:a=s;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fn===null||!fn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=rp(i,a,t);sc(i,E);break e}}i=i.return}while(i!==null)}kp(n)}catch(z){t=z,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function wp(){var e=ji.current;return ji.current=Ui,e===null?Ui:e}function Bs(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),ze===null||!(Un&268435455)&&!(ll&268435455)||nn(ze,Ie)}function Hi(e,t){var n=J;J|=2;var r=wp();(ze!==e||Ie!==t)&&(It=null,Dn(e,t));do try{Nv();break}catch(o){xp(e,o)}while(!0);if(Cs(),J=n,ji.current=r,Se!==null)throw Error(C(261));return ze=null,Ie=0,Ce}function Nv(){for(;Se!==null;)Sp(Se)}function Dv(){for(;Se!==null&&!ih();)Sp(Se)}function Sp(e){var t=Cp(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?kp(e):Se=t,As.current=null}function kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pv(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Se=null;return}}else if(n=bv(n,t,rt),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ce===0&&(Ce=5)}function bn(e,t,n){var r=ee,o=yt.transition;try{yt.transition=null,ee=1,Mv(e,t,n,r)}finally{yt.transition=o,ee=r}return null}function Mv(e,t,n,r){do yr();while(ln!==null);if(J&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(hh(e,i),e===ze&&(Se=ze=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,_p(_i,function(){return yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var l=ee;ee=1;var a=J;J|=4,As.current=null,zv(e,n),vp(n,e),tv(Ea),Pi=!!ka,Ea=ka=null,e.current=n,Rv(n),lh(),J=a,ee=l,yt.transition=i}else e.current=n;if(li&&(li=!1,ln=e,Vi=o),i=e.pendingLanes,i===0&&(fn=null),uh(n.stateNode),nt(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Bi)throw Bi=!1,e=Va,Va=null,e;return Vi&1&&e.tag!==0&&yr(),i=e.pendingLanes,i&1?e===Ha?ao++:(ao=0,Ha=e):ao=0,wn(),null}function yr(){if(ln!==null){var e=tf(Vi),t=yt.transition,n=ee;try{if(yt.transition=null,ee=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Vi=0,J&6)throw Error(C(331));var o=J;for(J|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:io(8,d,i)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var c=d.sibling,y=d.return;if(pp(d),d===u){M=null;break}if(c!==null){c.return=y,M=c;break}M=y}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var L=S.sibling;S.sibling=null,S=L}while(S!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:io(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){l=M;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,M=v;else e:for(l=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(z){ve(a,a.return,z)}if(a===l){M=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,M=E;break e}M=a.return}}if(J=o,wn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{ee=n,yt.transition=t}}return!1}function zc(e,t,n){t=Cr(n,t),t=np(e,t,1),e=dn(e,t,1),t=Ye(),e!==null&&(Do(e,1,t),nt(e,t))}function ve(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Cr(n,e),e=rp(t,e,1),t=dn(t,e,1),e=Ye(),t!==null&&(Do(t,1,e),nt(t,e));break}}t=t.return}}function Ov(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ie&n)===n&&(Ce===4||Ce===3&&(Ie&130023424)===Ie&&500>ge()-Fs?Dn(e,0):Is|=n),nt(e,t)}function Ep(e,t){t===0&&(e.mode&1?(t=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):t=1);var n=Ye();e=Wt(e,t),e!==null&&(Do(e,t,n),nt(e,n))}function Av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ep(e,n)}function Iv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Ep(e,n)}var Cp;Cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,_v(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ce&&t.flags&1048576&&Tf(t,Di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gi(e,t),e=t.pendingProps;var o=wr(t,We.current);gr(t,n),o=$s(null,t,r,e,o,n);var i=Ns();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,$i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,$a(t,r,e,n),t=Ma(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&ws(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Uv(r),e=Ct(r,e),o){case 0:t=Da(null,t,r,e,n);break e;case 1:t=xc(null,t,r,e,n);break e;case 11:t=gc(null,t,r,e,n);break e;case 14:t=yc(null,t,r,Ct(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),Da(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),xc(e,t,r,o,n);case 3:e:{if(ap(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Df(e,t),Ai(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cr(Error(C(423)),t),t=wc(e,t,r,n,o);break e}else if(r!==o){o=Cr(Error(C(424)),t),t=wc(e,t,r,n,o);break e}else for(ot=cn(t.stateNode.containerInfo.firstChild),it=t,ce=!0,Pt=null,n=$f(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=Qt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Mf(t),e===null&&za(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ca(r,o)?l=null:i!==null&&Ca(r,i)&&(t.flags|=32),lp(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&za(t),null;case 13:return sp(e,t,n);case 4:return Ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),gc(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ie(Mi,r._currentValue),r._currentValue=l,i!==null)if(Rt(i.value,l)){if(i.children===o.children&&!et.current){t=Qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Bt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ra(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ra(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gr(t,n),o=xt(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ct(r,t.pendingProps),o=Ct(r.type,o),yc(e,t,r,o,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ct(r,o),gi(e,t),t.tag=1,tt(r)?(e=!0,$i(t)):e=!1,gr(t,n),tp(t,r,o),$a(t,r,o,n),Ma(null,t,r,!0,e,n);case 19:return up(e,t,n);case 22:return ip(e,t,n)}throw Error(C(156,t.tag))};function _p(e,t){return Jd(e,t)}function Fv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Fv(e,t,n,r)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uv(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ss)return 11;if(e===us)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nr:return Mn(n.children,o,i,t);case as:l=8,o|=8;break;case na:return e=gt(12,n,t,o|2),e.elementType=na,e.lanes=i,e;case ra:return e=gt(13,n,t,o),e.elementType=ra,e.lanes=i,e;case oa:return e=gt(19,n,t,o),e.elementType=oa,e.lanes=i,e;case Dd:return al(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $d:l=10;break e;case Nd:l=9;break e;case ss:l=11;break e;case us:l=14;break e;case qt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=gt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Mn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Dd,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,i,l,a,s){return e=new jv(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=gt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(i),e}function Bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bp(e){if(!e)return gn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(tt(n))return bf(e,n,t)}return t}function Pp(e,t,n,r,o,i,l,a,s){return e=Hs(n,r,!0,e,o,i,l,a,s),e.context=bp(null),n=e.current,r=Ye(),o=pn(n),i=Bt(r,o),i.callback=t??null,dn(n,i,o),e.current.lanes=o,Do(e,o,r),nt(e,r),e}function sl(e,t,n,r){var o=t.current,i=Ye(),l=pn(o);return n=bp(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,l),e!==null&&(zt(e,o,l,i),mi(e,o,l)),l}function Wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function Vv(){return null}var Tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}ul.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));sl(e,t,null,null)};ul.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){sl(null,e,null,null)}),t[Ht]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&af(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lc(){}function Hv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wi(l);i.call(u)}}var l=Pp(t,r,e,0,null,!1,!1,"",Lc);return e._reactRootContainer=l,e[Ht]=l.current,xo(e.nodeType===8?e.parentNode:e),jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Wi(s);a.call(u)}}var s=Hs(e,0,!1,null,null,!1,!1,"",Lc);return e._reactRootContainer=s,e[Ht]=s.current,xo(e.nodeType===8?e.parentNode:e),jn(function(){sl(t,s,n,r)}),s}function dl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Wi(l);a.call(s)}}sl(t,l,e,o)}else l=Hv(n,t,e,o,r);return Wi(l)}nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(fs(t,n|1),nt(t,ge()),!(J&6)&&(_r=ge()+500,wn()))}break;case 13:jn(function(){var r=Wt(e,1);if(r!==null){var o=Ye();zt(r,e,1,o)}}),Ws(e,1)}};ps=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Ye();zt(t,e,134217728,n)}Ws(e,134217728)}};rf=function(e){if(e.tag===13){var t=pn(e),n=Wt(e,t);if(n!==null){var r=Ye();zt(n,e,t,r)}Ws(e,t)}};of=function(){return ee};lf=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ma=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=tl(r);if(!o)throw Error(C(90));Od(r),aa(r,o)}}}break;case"textarea":Id(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};Wd=Us;Qd=jn;var Wv={usingClientEntryPoint:!1,Events:[Oo,lr,tl,Vd,Hd,Us]},Wr={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qv={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{Ji=ai.inject(Qv),Mt=ai}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(C(200));return Bv(e,t,null,n)};at.createRoot=function(e,t){if(!Ks(e))throw Error(C(299));var n=!1,r="",o=Tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[Ht]=t.current,xo(e.nodeType===8?e.parentNode:e),new Qs(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Yd(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return jn(e)};at.hydrate=function(e,t,n){if(!cl(t))throw Error(C(200));return dl(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Tp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pp(t,null,e,1,n??null,o,!1,i,l),e[Ht]=t.current,xo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ul(t)};at.render=function(e,t,n){if(!cl(t))throw Error(C(200));return dl(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!cl(e))throw Error(C(40));return e._reactRootContainer?(jn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};at.unstable_batchedUpdates=Us;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return dl(e,t,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)}catch(e){console.error(e)}}zp(),Td.exports=at;var Gs=Td.exports;const Kv=yd(Gs),Gv=gd({__proto__:null,default:Kv},[Gs]);var Rp,$c=Gs;Rp=$c.createRoot,$c.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var we;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(we||(we={}));const Nc="popstate";function Yv(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return To("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Io(o)}return Jv(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function br(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xv(){return Math.random().toString(36).substr(2,8)}function Dc(e,t){return{usr:e.state,key:e.key,idx:t}}function To(e,t,n,r){return n===void 0&&(n=null),fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sn(t):t,{state:n,key:t&&t.key||r||Xv()})}function Io(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jv(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=we.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(fe({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=we.Pop;let L=d(),m=L==null?null:L-u;u=L,s&&s({action:a,location:S.location,delta:m})}function c(L,m){a=we.Push;let p=To(S.location,L,m);u=d()+1;let v=Dc(p,u),E=S.createHref(p);try{l.pushState(v,"",E)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(E)}i&&s&&s({action:a,location:S.location,delta:1})}function y(L,m){a=we.Replace;let p=To(S.location,L,m);u=d();let v=Dc(p,u),E=S.createHref(p);l.replaceState(v,"",E),i&&s&&s({action:a,location:S.location,delta:0})}function w(L){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof L=="string"?L:Io(L);return p=p.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let S={get action(){return a},get location(){return e(o,l)},listen(L){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Nc,f),s=L,()=>{o.removeEventListener(Nc,f),s=null}},createHref(L){return t(o,L)},createURL:w,encodeLocation(L){let m=w(L);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:c,replace:y,go(L){return l.go(L)}};return S}var ue;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ue||(ue={}));const Zv=new Set(["lazy","caseSensitive","path","id","index","children"]);function qv(e){return e.index===!0}function Ka(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,i],a=typeof o.id=="string"?o.id:l.join("-");if(Y(o.index!==!0||!o.children,"Cannot specify children on an index route"),Y(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),qv(o)){let s=fe({},o,t(o),{id:a});return r[a]=s,s}else{let s=fe({},o,t(o),{id:a,children:void 0});return r[a]=s,o.children&&(s.children=Ka(o.children,t,l,r)),s}})}function Rn(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Sn(t):t,o=Bn(r.pathname||"/",n);if(o==null)return null;let i=Lp(e);tg(i);let l=null;for(let a=0;l==null&&a<i.length;++a){let s=pg(o);l=cg(i[a],s)}return l}function eg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Lp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lp(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:sg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of $p(i.path))o(i,l,s)}),t}function $p(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=$p(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function tg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ug(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ng=/^:[\w-]+$/,rg=3,og=2,ig=1,lg=10,ag=-2,Mc=e=>e==="*";function sg(e,t){let n=e.split("/"),r=n.length;return n.some(Mc)&&(r+=ag),t&&(r+=og),n.filter(o=>!Mc(o)).reduce((o,i)=>o+(ng.test(i)?rg:i===""?ig:lg),r)}function ug(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function cg(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=dg({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;i.push({params:r,pathname:hn([o,d.pathname]),pathnameBase:vg(hn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=hn([o,d.pathnameBase]))}return i}function dg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:c,isOptional:y}=d;if(c==="*"){let S=a[f]||"";l=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?u[c]=void 0:u[c]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function fg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),br(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return br(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Bn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Sn(e):e;return{pathname:n?n.startsWith("/")?n:hg(n,t):t,search:gg(r),hash:yg(o)}}function hg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Np(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dp(e,t){let n=Np(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Sn(e):(o=fe({},e),Y(!o.pathname||!o.pathname.includes("?"),Kl("?","pathname","search",o)),Y(!o.pathname||!o.pathname.includes("#"),Kl("#","pathname","hash",o)),Y(!o.search||!o.search.includes("#"),Kl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let c=l.split("/");for(;c[0]==="..";)c.shift(),f-=1;o.pathname=c.join("/")}a=f>=0?t[f]:"/"}let s=mg(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),vg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ys{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Xs(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Op=["post","put","patch","delete"],xg=new Set(Op),wg=["get",...Op],Sg=new Set(wg),kg=new Set([301,302,303,307,308]),Eg=new Set([307,308]),Gl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Cg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Js=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_g=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Ap="remix-router-transitions";function bg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Y(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let g=e.detectErrorBoundary;o=x=>({hasErrorBoundary:g(x)})}else o=_g;let i={},l=Ka(e.routes,o,void 0,i),a,s=e.basename||"/",u=e.unstable_dataStrategy||Rg,d=fe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,c=new Set,y=null,w=null,S=null,L=e.hydrationData!=null,m=Rn(l,e.history.location,s),p=null;if(m==null){let g=pt(404,{pathname:e.history.location.pathname}),{matches:x,route:k}=Wc(l);m=x,p={[k.id]:g}}let v,E=m.some(g=>g.route.lazy),z=m.some(g=>g.route.loader);if(E)v=!1;else if(!z)v=!0;else if(d.v7_partialHydration){let g=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,k=T=>T.route.loader?typeof T.route.loader=="function"&&T.route.loader.hydrate===!0?!1:g&&g[T.route.id]!==void 0||x&&x[T.route.id]!==void 0:!0;if(x){let T=m.findIndex(O=>x[O.route.id]!==void 0);v=m.slice(0,T+1).every(k)}else v=m.every(k)}else v=e.hydrationData!=null;let D,h={historyAction:e.history.action,location:e.history.location,matches:m,initialized:v,navigation:Gl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},R=we.Pop,I=!1,N,K=!1,te=new Map,oe=null,xe=!1,_e=!1,St=[],dt=[],P=new Map,F=0,j=-1,q=new Map,Z=new Set,Qe=new Map,Ue=new Map,je=new Set,Le=new Map,$e=new Map,_=!1;function $(){if(f=e.history.listen(g=>{let{action:x,location:k,delta:T}=g;if(_){_=!1;return}br($e.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=wu({currentLocation:h.location,nextLocation:k,historyAction:x});if(O&&T!=null){_=!0,e.history.go(T*-1),jo(O,{state:"blocked",location:k,proceed(){jo(O,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),e.history.go(T)},reset(){let H=new Map(h.blockers);H.set(O,qn),ne({blockers:H})}});return}return En(x,k)}),n){Bg(t,te);let g=()=>Vg(t,te);t.addEventListener("pagehide",g),oe=()=>t.removeEventListener("pagehide",g)}return h.initialized||En(we.Pop,h.location,{initialHydration:!0}),D}function W(){f&&f(),oe&&oe(),c.clear(),N&&N.abort(),h.fetchers.forEach((g,x)=>Uo(x)),h.blockers.forEach((g,x)=>xu(x))}function Ne(g){return c.add(g),()=>c.delete(g)}function ne(g,x){x===void 0&&(x={}),h=fe({},h,g);let k=[],T=[];d.v7_fetcherPersist&&h.fetchers.forEach((O,H)=>{O.state==="idle"&&(je.has(H)?T.push(H):k.push(H))}),[...c].forEach(O=>O(h,{deletedFetchers:T,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),d.v7_fetcherPersist&&(k.forEach(O=>h.fetchers.delete(O)),T.forEach(O=>Uo(O)))}function de(g,x,k){var T,O;let{flushSync:H}=k===void 0?{}:k,U=h.actionData!=null&&h.navigation.formMethod!=null&&bt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((T=g.state)==null?void 0:T._isRedirect)!==!0,A;x.actionData?Object.keys(x.actionData).length>0?A=x.actionData:A=null:U?A=h.actionData:A=null;let Q=x.loaderData?Vc(h.loaderData,x.loaderData,x.matches||[],x.errors):h.loaderData,V=h.blockers;V.size>0&&(V=new Map(V),V.forEach((B,se)=>V.set(se,qn)));let De=I===!0||h.navigation.formMethod!=null&&bt(h.navigation.formMethod)&&((O=g.state)==null?void 0:O._isRedirect)!==!0;a&&(l=a,a=void 0),xe||R===we.Pop||(R===we.Push?e.history.push(g,g.state):R===we.Replace&&e.history.replace(g,g.state));let Me;if(R===we.Pop){let B=te.get(h.location.pathname);B&&B.has(g.pathname)?Me={currentLocation:h.location,nextLocation:g}:te.has(g.pathname)&&(Me={currentLocation:g,nextLocation:h.location})}else if(K){let B=te.get(h.location.pathname);B?B.add(g.pathname):(B=new Set([g.pathname]),te.set(h.location.pathname,B)),Me={currentLocation:h.location,nextLocation:g}}ne(fe({},x,{actionData:A,loaderData:Q,historyAction:R,location:g,initialized:!0,navigation:Gl,revalidation:"idle",restoreScrollPosition:ku(g,x.matches||h.matches),preventScrollReset:De,blockers:V}),{viewTransitionOpts:Me,flushSync:H===!0}),R=we.Pop,I=!1,K=!1,xe=!1,_e=!1,St=[],dt=[]}async function At(g,x){if(typeof g=="number"){e.history.go(g);return}let k=Ga(h.location,h.matches,s,d.v7_prependBasename,g,d.v7_relativeSplatPath,x?.fromRouteId,x?.relative),{path:T,submission:O,error:H}=Oc(d.v7_normalizeFormMethod,!1,k,x),U=h.location,A=To(h.location,T,x&&x.state);A=fe({},A,e.history.encodeLocation(A));let Q=x&&x.replace!=null?x.replace:void 0,V=we.Push;Q===!0?V=we.Replace:Q===!1||O!=null&&bt(O.formMethod)&&O.formAction===h.location.pathname+h.location.search&&(V=we.Replace);let De=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,Me=(x&&x.unstable_flushSync)===!0,B=wu({currentLocation:U,nextLocation:A,historyAction:V});if(B){jo(B,{state:"blocked",location:A,proceed(){jo(B,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),At(g,x)},reset(){let se=new Map(h.blockers);se.set(B,qn),ne({blockers:se})}});return}return await En(V,A,{submission:O,pendingError:H,preventScrollReset:De,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:Me})}function mm(){if(xl(),ne({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){En(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}En(R||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function En(g,x,k){N&&N.abort(),N=null,R=g,xe=(k&&k.startUninterruptedRevalidation)===!0,Em(h.location,h.matches),I=(k&&k.preventScrollReset)===!0,K=(k&&k.enableViewTransition)===!0;let T=a||l,O=k&&k.overrideNavigation,H=Rn(T,x,s),U=(k&&k.flushSync)===!0;if(!H){let B=pt(404,{pathname:x.pathname}),{matches:se,route:be}=Wc(T);wl(),de(x,{matches:se,loaderData:{},errors:{[be.id]:B}},{flushSync:U});return}if(h.initialized&&!_e&&Og(h.location,x)&&!(k&&k.submission&&bt(k.submission.formMethod))){de(x,{matches:H},{flushSync:U});return}N=new AbortController;let A=Jn(e.history,x,N.signal,k&&k.submission),Q;if(k&&k.pendingError)Q=[so(H).route.id,{type:ue.error,error:k.pendingError}];else if(k&&k.submission&&bt(k.submission.formMethod)){let B=await hm(A,x,k.submission,H,{replace:k.replace,flushSync:U});if(B.shortCircuited)return;Q=B.pendingActionResult,O=Yl(x,k.submission),U=!1,A=Jn(e.history,A.url,A.signal)}let{shortCircuited:V,loaderData:De,errors:Me}=await vm(A,x,H,O,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,U,Q);V||(N=null,de(x,fe({matches:H},Hc(Q),{loaderData:De,errors:Me})))}async function hm(g,x,k,T,O){O===void 0&&(O={}),xl();let H=Ug(x,k);ne({navigation:H},{flushSync:O.flushSync===!0});let U,A=Xa(T,x);if(!A.route.action&&!A.route.lazy)U={type:ue.error,error:pt(405,{method:g.method,pathname:x.pathname,routeId:A.route.id})};else if(U=(await Dr("action",g,[A],T))[0],g.signal.aborted)return{shortCircuited:!0};if($n(U)){let Q;return O&&O.replace!=null?Q=O.replace:Q=Uc(U.response.headers.get("Location"),new URL(g.url),s)===h.location.pathname+h.location.search,await Nr(g,U,{submission:k,replace:Q}),{shortCircuited:!0}}if(Ln(U))throw pt(400,{type:"defer-action"});if(vt(U)){let Q=so(T,A.route.id);return(O&&O.replace)!==!0&&(R=we.Push),{pendingActionResult:[Q.route.id,U]}}return{pendingActionResult:[A.route.id,U]}}async function vm(g,x,k,T,O,H,U,A,Q,V){let De=T||Yl(x,O),Me=O||H||Gc(De),B=a||l,[se,be]=Ac(e.history,h,k,Me,x,d.v7_partialHydration&&A===!0,d.unstable_skipActionErrorRevalidation,_e,St,dt,je,Qe,Z,B,s,V);if(wl(X=>!(k&&k.some(Ke=>Ke.route.id===X))||se&&se.some(Ke=>Ke.route.id===X)),j=++F,se.length===0&&be.length===0){let X=gu();return de(x,fe({matches:k,loaderData:{},errors:V&&vt(V[1])?{[V[0]]:V[1].error}:null},Hc(V),X?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Q}),{shortCircuited:!0}}if(!xe&&(!d.v7_partialHydration||!A)){be.forEach(Ke=>{let ft=h.fetchers.get(Ke.key),Oe=Qr(void 0,ft?ft.data:void 0);h.fetchers.set(Ke.key,Oe)});let X;V&&!vt(V[1])?X={[V[0]]:V[1].data}:h.actionData&&(Object.keys(h.actionData).length===0?X=null:X=h.actionData),ne(fe({navigation:De},X!==void 0?{actionData:X}:{},be.length>0?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Q})}be.forEach(X=>{P.has(X.key)&&Yt(X.key),X.controller&&P.set(X.key,X.controller)});let Or=()=>be.forEach(X=>Yt(X.key));N&&N.signal.addEventListener("abort",Or);let{loaderResults:Xt,fetcherResults:Kn}=await mu(h.matches,k,se,be,g);if(g.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Or),be.forEach(X=>P.delete(X.key));let Gn=Qc([...Xt,...Kn]);if(Gn){if(Gn.idx>=se.length){let X=be[Gn.idx-se.length].key;Z.add(X)}return await Nr(g,Gn.result,{replace:U}),{shortCircuited:!0}}let{loaderData:Yn,errors:Lt}=Bc(h,k,se,Xt,V,be,Kn,Le);Le.forEach((X,Ke)=>{X.subscribe(ft=>{(ft||X.done)&&Le.delete(Ke)})}),d.v7_partialHydration&&A&&h.errors&&Object.entries(h.errors).filter(X=>{let[Ke]=X;return!se.some(ft=>ft.route.id===Ke)}).forEach(X=>{let[Ke,ft]=X;Lt=Object.assign(Lt||{},{[Ke]:ft})});let Bo=gu(),Vo=yu(j),Ho=Bo||Vo||be.length>0;return fe({loaderData:Yn,errors:Lt},Ho?{fetchers:new Map(h.fetchers)}:{})}function gm(g,x,k,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(g)&&Yt(g);let O=(T&&T.unstable_flushSync)===!0,H=a||l,U=Ga(h.location,h.matches,s,d.v7_prependBasename,k,d.v7_relativeSplatPath,x,T?.relative),A=Rn(H,U,s);if(!A){Mr(g,x,pt(404,{pathname:U}),{flushSync:O});return}let{path:Q,submission:V,error:De}=Oc(d.v7_normalizeFormMethod,!0,U,T);if(De){Mr(g,x,De,{flushSync:O});return}let Me=Xa(A,Q);if(I=(T&&T.preventScrollReset)===!0,V&&bt(V.formMethod)){ym(g,x,Q,Me,A,O,V);return}Qe.set(g,{routeId:x,path:Q}),xm(g,x,Q,Me,A,O,V)}async function ym(g,x,k,T,O,H,U){if(xl(),Qe.delete(g),!T.route.action&&!T.route.lazy){let Oe=pt(405,{method:U.formMethod,pathname:k,routeId:x});Mr(g,x,Oe,{flushSync:H});return}let A=h.fetchers.get(g);Gt(g,jg(U,A),{flushSync:H});let Q=new AbortController,V=Jn(e.history,k,Q.signal,U);P.set(g,Q);let De=F,B=(await Dr("action",V,[T],O))[0];if(V.signal.aborted){P.get(g)===Q&&P.delete(g);return}if(d.v7_fetcherPersist&&je.has(g)){if($n(B)||vt(B)){Gt(g,Zt(void 0));return}}else{if($n(B))if(P.delete(g),j>De){Gt(g,Zt(void 0));return}else return Z.add(g),Gt(g,Qr(U)),Nr(V,B,{fetcherSubmission:U});if(vt(B)){Mr(g,x,B.error);return}}if(Ln(B))throw pt(400,{type:"defer-action"});let se=h.navigation.location||h.location,be=Jn(e.history,se,Q.signal),Or=a||l,Xt=h.navigation.state!=="idle"?Rn(Or,h.navigation.location,s):h.matches;Y(Xt,"Didn't find any matches after fetcher action");let Kn=++F;q.set(g,Kn);let Gn=Qr(U,B.data);h.fetchers.set(g,Gn);let[Yn,Lt]=Ac(e.history,h,Xt,U,se,!1,d.unstable_skipActionErrorRevalidation,_e,St,dt,je,Qe,Z,Or,s,[T.route.id,B]);Lt.filter(Oe=>Oe.key!==g).forEach(Oe=>{let Ar=Oe.key,Eu=h.fetchers.get(Ar),_m=Qr(void 0,Eu?Eu.data:void 0);h.fetchers.set(Ar,_m),P.has(Ar)&&Yt(Ar),Oe.controller&&P.set(Ar,Oe.controller)}),ne({fetchers:new Map(h.fetchers)});let Bo=()=>Lt.forEach(Oe=>Yt(Oe.key));Q.signal.addEventListener("abort",Bo);let{loaderResults:Vo,fetcherResults:Ho}=await mu(h.matches,Xt,Yn,Lt,be);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Bo),q.delete(g),P.delete(g),Lt.forEach(Oe=>P.delete(Oe.key));let X=Qc([...Vo,...Ho]);if(X){if(X.idx>=Yn.length){let Oe=Lt[X.idx-Yn.length].key;Z.add(Oe)}return Nr(be,X.result)}let{loaderData:Ke,errors:ft}=Bc(h,h.matches,Yn,Vo,void 0,Lt,Ho,Le);if(h.fetchers.has(g)){let Oe=Zt(B.data);h.fetchers.set(g,Oe)}yu(Kn),h.navigation.state==="loading"&&Kn>j?(Y(R,"Expected pending action"),N&&N.abort(),de(h.navigation.location,{matches:Xt,loaderData:Ke,errors:ft,fetchers:new Map(h.fetchers)})):(ne({errors:ft,loaderData:Vc(h.loaderData,Ke,Xt,ft),fetchers:new Map(h.fetchers)}),_e=!1)}async function xm(g,x,k,T,O,H,U){let A=h.fetchers.get(g);Gt(g,Qr(U,A?A.data:void 0),{flushSync:H});let Q=new AbortController,V=Jn(e.history,k,Q.signal);P.set(g,Q);let De=F,B=(await Dr("loader",V,[T],O))[0];if(Ln(B)&&(B=await jp(B,V.signal,!0)||B),P.get(g)===Q&&P.delete(g),!V.signal.aborted){if(je.has(g)){Gt(g,Zt(void 0));return}if($n(B))if(j>De){Gt(g,Zt(void 0));return}else{Z.add(g),await Nr(V,B);return}if(vt(B)){Mr(g,x,B.error);return}Y(!Ln(B),"Unhandled fetcher deferred data"),Gt(g,Zt(B.data))}}async function Nr(g,x,k){let{submission:T,fetcherSubmission:O,replace:H}=k===void 0?{}:k;x.response.headers.has("X-Remix-Revalidate")&&(_e=!0);let U=x.response.headers.get("Location");Y(U,"Expected a Location header on the redirect Response"),U=Uc(U,new URL(g.url),s);let A=To(h.location,U,{_isRedirect:!0});if(n){let se=!1;if(x.response.headers.has("X-Remix-Reload-Document"))se=!0;else if(Js.test(U)){const be=e.history.createURL(U);se=be.origin!==t.location.origin||Bn(be.pathname,s)==null}if(se){H?t.location.replace(U):t.location.assign(U);return}}N=null;let Q=H===!0?we.Replace:we.Push,{formMethod:V,formAction:De,formEncType:Me}=h.navigation;!T&&!O&&V&&De&&Me&&(T=Gc(h.navigation));let B=T||O;if(Eg.has(x.response.status)&&B&&bt(B.formMethod))await En(Q,A,{submission:fe({},B,{formAction:U}),preventScrollReset:I});else{let se=Yl(A,T);await En(Q,A,{overrideNavigation:se,fetcherSubmission:O,preventScrollReset:I})}}async function Dr(g,x,k,T){try{let O=await Lg(u,g,x,k,T,i,o);return await Promise.all(O.map((H,U)=>{if(Ag(H)){let A=H.result;return{type:ue.redirect,response:Dg(A,x,k[U].route.id,T,s,d.v7_relativeSplatPath)}}return Ng(H)}))}catch(O){return k.map(()=>({type:ue.error,error:O}))}}async function mu(g,x,k,T,O){let[H,...U]=await Promise.all([k.length?Dr("loader",O,k,x):[],...T.map(A=>{if(A.matches&&A.match&&A.controller){let Q=Jn(e.history,A.path,A.controller.signal);return Dr("loader",Q,[A.match],A.matches).then(V=>V[0])}else return Promise.resolve({type:ue.error,error:pt(404,{pathname:A.path})})})]);return await Promise.all([Kc(g,k,H,H.map(()=>O.signal),!1,h.loaderData),Kc(g,T.map(A=>A.match),U,T.map(A=>A.controller?A.controller.signal:null),!0)]),{loaderResults:H,fetcherResults:U}}function xl(){_e=!0,St.push(...wl()),Qe.forEach((g,x)=>{P.has(x)&&(dt.push(x),Yt(x))})}function Gt(g,x,k){k===void 0&&(k={}),h.fetchers.set(g,x),ne({fetchers:new Map(h.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Mr(g,x,k,T){T===void 0&&(T={});let O=so(h.matches,x);Uo(g),ne({errors:{[O.route.id]:k},fetchers:new Map(h.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function hu(g){return d.v7_fetcherPersist&&(Ue.set(g,(Ue.get(g)||0)+1),je.has(g)&&je.delete(g)),h.fetchers.get(g)||Cg}function Uo(g){let x=h.fetchers.get(g);P.has(g)&&!(x&&x.state==="loading"&&q.has(g))&&Yt(g),Qe.delete(g),q.delete(g),Z.delete(g),je.delete(g),h.fetchers.delete(g)}function wm(g){if(d.v7_fetcherPersist){let x=(Ue.get(g)||0)-1;x<=0?(Ue.delete(g),je.add(g)):Ue.set(g,x)}else Uo(g);ne({fetchers:new Map(h.fetchers)})}function Yt(g){let x=P.get(g);Y(x,"Expected fetch controller: "+g),x.abort(),P.delete(g)}function vu(g){for(let x of g){let k=hu(x),T=Zt(k.data);h.fetchers.set(x,T)}}function gu(){let g=[],x=!1;for(let k of Z){let T=h.fetchers.get(k);Y(T,"Expected fetcher: "+k),T.state==="loading"&&(Z.delete(k),g.push(k),x=!0)}return vu(g),x}function yu(g){let x=[];for(let[k,T]of q)if(T<g){let O=h.fetchers.get(k);Y(O,"Expected fetcher: "+k),O.state==="loading"&&(Yt(k),q.delete(k),x.push(k))}return vu(x),x.length>0}function Sm(g,x){let k=h.blockers.get(g)||qn;return $e.get(g)!==x&&$e.set(g,x),k}function xu(g){h.blockers.delete(g),$e.delete(g)}function jo(g,x){let k=h.blockers.get(g)||qn;Y(k.state==="unblocked"&&x.state==="blocked"||k.state==="blocked"&&x.state==="blocked"||k.state==="blocked"&&x.state==="proceeding"||k.state==="blocked"&&x.state==="unblocked"||k.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+x.state);let T=new Map(h.blockers);T.set(g,x),ne({blockers:T})}function wu(g){let{currentLocation:x,nextLocation:k,historyAction:T}=g;if($e.size===0)return;$e.size>1&&br(!1,"A router only supports one blocker at a time");let O=Array.from($e.entries()),[H,U]=O[O.length-1],A=h.blockers.get(H);if(!(A&&A.state==="proceeding")&&U({currentLocation:x,nextLocation:k,historyAction:T}))return H}function wl(g){let x=[];return Le.forEach((k,T)=>{(!g||g(T))&&(k.cancel(),x.push(T),Le.delete(T))}),x}function km(g,x,k){if(y=g,S=x,w=k||null,!L&&h.navigation===Gl){L=!0;let T=ku(h.location,h.matches);T!=null&&ne({restoreScrollPosition:T})}return()=>{y=null,S=null,w=null}}function Su(g,x){return w&&w(g,x.map(T=>eg(T,h.loaderData)))||g.key}function Em(g,x){if(y&&S){let k=Su(g,x);y[k]=S()}}function ku(g,x){if(y){let k=Su(g,x),T=y[k];if(typeof T=="number")return T}return null}function Cm(g){i={},a=Ka(g,o,void 0,i)}return D={get basename(){return s},get future(){return d},get state(){return h},get routes(){return l},get window(){return t},initialize:$,subscribe:Ne,enableScrollRestoration:km,navigate:At,fetch:gm,revalidate:mm,createHref:g=>e.history.createHref(g),encodeLocation:g=>e.history.encodeLocation(g),getFetcher:hu,deleteFetcher:wm,dispose:W,getBlocker:Sm,deleteBlocker:xu,_internalFetchControllers:P,_internalActiveDeferreds:Le,_internalSetRoutes:Cm},D}function Pg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ga(e,t,n,r,o,i,l,a){let s,u;if(l){s=[];for(let f of t)if(s.push(f),f.route.id===l){u=f;break}}else s=t,u=t[t.length-1];let d=Mp(o||".",Dp(s,i),Bn(e.pathname,n)||e.pathname,a==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Zs(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:hn([n,d.pathname])),Io(d)}function Oc(e,t,n,r){if(!r||!Pg(r))return{path:n};if(r.formMethod&&!Fg(r.formMethod))return{path:n,error:pt(405,{method:r.formMethod})};let o=()=>({path:n,error:pt(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=Fp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bt(l))return o();let c=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,w)=>{let[S,L]=w;return""+y+S+"="+L+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:c}}}else if(r.formEncType==="application/json"){if(!bt(l))return o();try{let c=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:c,text:void 0}}}catch{return o()}}}Y(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ya(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ya(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=jc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=jc(s)}catch{return o()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(bt(d.formMethod))return{path:n,submission:d};let f=Sn(n);return t&&f.search&&Zs(f.search)&&s.append("index",""),f.search="?"+s,{path:Io(f),submission:d}}function Tg(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Ac(e,t,n,r,o,i,l,a,s,u,d,f,c,y,w,S){let L=S?vt(S[1])?S[1].error:S[1].data:void 0,m=e.createURL(t.location),p=e.createURL(o),v=S&&vt(S[1])?S[0]:void 0,E=v?Tg(n,v):n,z=S?S[1].statusCode:void 0,D=l&&z&&z>=400,h=E.filter((I,N)=>{let{route:K}=I;if(K.lazy)return!0;if(K.loader==null)return!1;if(i)return typeof K.loader!="function"||K.loader.hydrate?!0:t.loaderData[K.id]===void 0&&(!t.errors||t.errors[K.id]===void 0);if(zg(t.loaderData,t.matches[N],I)||s.some(xe=>xe===I.route.id))return!0;let te=t.matches[N],oe=I;return Ic(I,fe({currentUrl:m,currentParams:te.params,nextUrl:p,nextParams:oe.params},r,{actionResult:L,unstable_actionStatus:z,defaultShouldRevalidate:D?!1:a||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||Ip(te,oe)}))}),R=[];return f.forEach((I,N)=>{if(i||!n.some(_e=>_e.route.id===I.routeId)||d.has(N))return;let K=Rn(y,I.path,w);if(!K){R.push({key:N,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let te=t.fetchers.get(N),oe=Xa(K,I.path),xe=!1;c.has(N)?xe=!1:u.includes(N)?xe=!0:te&&te.state!=="idle"&&te.data===void 0?xe=a:xe=Ic(oe,fe({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:L,unstable_actionStatus:z,defaultShouldRevalidate:D?!1:a})),xe&&R.push({key:N,routeId:I.routeId,path:I.path,matches:K,match:oe,controller:new AbortController})}),[h,R]}function zg(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Ip(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ic(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Fc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Y(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";br(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Zv.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,fe({},t(o),{lazy:void 0}))}function Rg(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function Lg(e,t,n,r,o,i,l,a){let s=r.reduce((f,c)=>f.add(c.route.id),new Set),u=new Set,d=await e({matches:o.map(f=>{let c=s.has(f.route.id);return fe({},f,{shouldLoad:c,resolve:w=>(u.add(f.route.id),c?$g(t,n,f,i,l,w,a):Promise.resolve({type:ue.data,result:void 0}))})}),request:n,params:o[0].params,context:a});return o.forEach(f=>Y(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,c)=>s.has(o[c].route.id))}async function $g(e,t,n,r,o,i,l){let a,s,u=d=>{let f,c=new Promise((S,L)=>f=L);s=()=>f(),t.signal.addEventListener("abort",s);let y=S=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):d({request:t,params:n.params,context:l},...S!==void 0?[S]:[]),w;return i?w=i(S=>y(S)):w=(async()=>{try{return{type:"data",result:await y()}}catch(S){return{type:"error",result:S}}})(),Promise.race([w,c])};try{let d=n.route[e];if(n.route.lazy)if(d){let f,[c]=await Promise.all([u(d).catch(y=>{f=y}),Fc(n.route,o,r)]);if(f!==void 0)throw f;a=c}else if(await Fc(n.route,o,r),d=n.route[e],d)a=await u(d);else if(e==="action"){let f=new URL(t.url),c=f.pathname+f.search;throw pt(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ue.data,result:void 0};else if(d)a=await u(d);else{let f=new URL(t.url),c=f.pathname+f.search;throw pt(404,{pathname:c})}Y(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:ue.error,result:d}}finally{s&&t.signal.removeEventListener("abort",s)}return a}async function Ng(e){let{result:t,type:n,status:r}=e;if(Up(t)){let l;try{let a=t.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?t.body==null?l=null:l=await t.json():l=await t.text()}catch(a){return{type:ue.error,error:a}}return n===ue.error?{type:ue.error,error:new Ys(t.status,t.statusText,l),statusCode:t.status,headers:t.headers}:{type:ue.data,data:l,statusCode:t.status,headers:t.headers}}if(n===ue.error)return{type:ue.error,error:t,statusCode:Xs(t)?t.status:r};if(Ig(t)){var o,i;return{type:ue.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((i=t.init)==null?void 0:i.headers)&&new Headers(t.init.headers)}}return{type:ue.data,data:t,statusCode:r}}function Dg(e,t,n,r,o,i){let l=e.headers.get("Location");if(Y(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Js.test(l)){let a=r.slice(0,r.findIndex(s=>s.route.id===n)+1);l=Ga(new URL(t.url),a,o,!0,l,i),e.headers.set("Location",l)}return e}function Uc(e,t,n){if(Js.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Bn(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function Jn(e,t,n,r){let o=e.createURL(Fp(t)).toString(),i={signal:n};if(r&&bt(r.formMethod)){let{formMethod:l,formEncType:a}=r;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=Ya(r.formData):i.body=r.formData}return new Request(o,i)}function Ya(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function jc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Mg(e,t,n,r,o,i){let l={},a=null,s,u=!1,d={},f=r&&vt(r[1])?r[1].error:void 0;return n.forEach((c,y)=>{let w=t[y].route.id;if(Y(!$n(c),"Cannot handle redirect results in processLoaderData"),vt(c)){let S=c.error;f!==void 0&&(S=f,f=void 0),a=a||{};{let L=so(e,w);a[L.route.id]==null&&(a[L.route.id]=S)}l[w]=void 0,u||(u=!0,s=Xs(c.error)?c.error.status:500),c.headers&&(d[w]=c.headers)}else Ln(c)?(o.set(w,c.deferredData),l[w]=c.deferredData.data,c.statusCode!=null&&c.statusCode!==200&&!u&&(s=c.statusCode),c.headers&&(d[w]=c.headers)):(l[w]=c.data,c.statusCode&&c.statusCode!==200&&!u&&(s=c.statusCode),c.headers&&(d[w]=c.headers))}),f!==void 0&&r&&(a={[r[0]]:f},l[r[0]]=void 0),{loaderData:l,errors:a,statusCode:s||200,loaderHeaders:d}}function Bc(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=Mg(t,n,r,o,a);for(let d=0;d<i.length;d++){let{key:f,match:c,controller:y}=i[d];Y(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let w=l[d];if(!(y&&y.signal.aborted))if(vt(w)){let S=so(e.matches,c?.route.id);u&&u[S.route.id]||(u=fe({},u,{[S.route.id]:w.error})),e.fetchers.delete(f)}else if($n(w))Y(!1,"Unhandled fetcher revalidation redirect");else if(Ln(w))Y(!1,"Unhandled fetcher deferred data");else{let S=Zt(w.data);e.fetchers.set(f,S)}}return{loaderData:s,errors:u}}function Vc(e,t,n,r){let o=fe({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function Hc(e){return e?vt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function so(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Wc(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function pt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new Ys(e||500,l,new Error(a),!0)}function Qc(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if($n(n))return{result:n,idx:t}}}function Fp(e){let t=typeof e=="string"?Sn(e):e;return Io(fe({},t,{hash:""}))}function Og(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ag(e){return Up(e.result)&&kg.has(e.result.status)}function Ln(e){return e.type===ue.deferred}function vt(e){return e.type===ue.error}function $n(e){return(e&&e.type)===ue.redirect}function Ig(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Up(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Fg(e){return Sg.has(e.toLowerCase())}function bt(e){return xg.has(e.toLowerCase())}async function Kc(e,t,n,r,o,i){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let u=e.find(f=>f.route.id===s.route.id),d=u!=null&&!Ip(u,s)&&(i&&i[s.route.id])!==void 0;if(Ln(a)&&(o||d)){let f=r[l];Y(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await jp(a,f,o).then(c=>{c&&(n[l]=c||n[l])})}}}async function jp(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ue.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ue.error,error:o}}return{type:ue.data,data:e.deferredData.data}}}function Zs(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Xa(e,t){let n=typeof t=="string"?Sn(t).search:t.search;if(e[e.length-1].route.index&&Zs(n||""))return e[e.length-1];let r=Np(e);return r[r.length-1]}function Gc(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Yl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ug(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Qr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function jg(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Zt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Bg(e,t){try{let n=e.sessionStorage.getItem(Ap);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function Vg(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Ap,JSON.stringify(n))}catch(r){br(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}const fl=b.createContext(null),Bp=b.createContext(null),pl=b.createContext(null),qs=b.createContext(null),$r=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Vp=b.createContext(null);function ml(){return b.useContext(qs)!=null}function eu(){return ml()||Y(!1),b.useContext(qs).location}function Hp(e){b.useContext(pl).static||b.useLayoutEffect(e)}function Hg(){let{isDataRoute:e}=b.useContext($r);return e?n0():Wg()}function Wg(){ml()||Y(!1);let e=b.useContext(fl),{basename:t,future:n,navigator:r}=b.useContext(pl),{matches:o}=b.useContext($r),{pathname:i}=eu(),l=JSON.stringify(Dp(o,n.v7_relativeSplatPath)),a=b.useRef(!1);return Hp(()=>{a.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Mp(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,l,i,e])}function Qg(e,t,n,r){ml()||Y(!1);let{navigator:o}=b.useContext(pl),{matches:i}=b.useContext($r),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=eu(),d;d=u;let f=d.pathname||"/",c=f;if(s!=="/"){let S=s.replace(/^\//,"").split("/");c="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Rn(e,{pathname:c});return Jg(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:hn([s,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:hn([s,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r)}function Kg(){let e=qg(),t=Xs(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const Gg=b.createElement(Kg,null);class Yg extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement($r.Provider,{value:this.props.routeContext},b.createElement(Vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xg(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(fl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement($r.Provider,{value:t},r)}function Jg(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);d>=0||Y(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:c,errors:y}=n,w=f.route.loader&&c[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,c)=>{let y,w=!1,S=null,L=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Gg,s&&(u<0&&c===0?(r0("route-fallback"),w=!0,L=null):u===c&&(w=!0,L=f.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,c+1)),p=()=>{let v;return y?v=S:w?v=L:f.route.Component?v=b.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,b.createElement(Xg,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||c===0)?b.createElement(Yg,{location:n.location,revalidation:n.revalidation,component:S,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var tu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(tu||{}),zo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zo||{});function Wp(e){let t=b.useContext(fl);return t||Y(!1),t}function Qp(e){let t=b.useContext(Bp);return t||Y(!1),t}function Zg(e){let t=b.useContext($r);return t||Y(!1),t}function Kp(e){let t=Zg(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function qg(){var e;let t=b.useContext(Vp),n=Qp(zo.UseRouteError),r=Kp(zo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}let e0=0;function t0(e){let{router:t,basename:n}=Wp(tu.UseBlocker),r=Qp(zo.UseBlocker),[o,i]=b.useState(""),l=b.useCallback(a=>{if(typeof e!="function")return!!e;if(n==="/")return e(a);let{currentLocation:s,nextLocation:u,historyAction:d}=a;return e({currentLocation:Pr({},s,{pathname:Bn(s.pathname,n)||s.pathname}),nextLocation:Pr({},u,{pathname:Bn(u.pathname,n)||u.pathname}),historyAction:d})},[n,e]);return b.useEffect(()=>{let a=String(++e0);return i(a),()=>t.deleteBlocker(a)},[t]),b.useEffect(()=>{o!==""&&t.getBlocker(o,l)},[t,o,l]),o&&r.blockers.has(o)?r.blockers.get(o):qn}function n0(){let{router:e}=Wp(tu.UseNavigateStable),t=Kp(zo.UseNavigateStable),n=b.useRef(!1);return Hp(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Pr({fromRouteId:t},i)))},[e,t])}const Yc={};function r0(e,t,n){Yc[e]||(Yc[e]=!0)}function o0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=we.Pop,navigator:i,static:l=!1,future:a}=e;ml()&&Y(!1);let s=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:l,future:Pr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Sn(r));let{pathname:d="/",search:f="",hash:c="",state:y=null,key:w="default"}=r,S=b.useMemo(()=>{let L=Bn(d,s);return L==null?null:{location:{pathname:L,search:f,hash:c,state:y,key:w},navigationType:o}},[s,d,f,c,y,w,o]);return S==null?null:b.createElement(pl.Provider,{value:u},b.createElement(qs.Provider,{children:n,value:S}))}new Promise(()=>{});function i0(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qi.apply(this,arguments)}const l0="6";try{window.__reactRouterVersion=l0}catch{}function a0(e,t){return bg({basename:t?.basename,future:Qi({},t?.future,{v7_prependBasename:!0}),history:Yv({window:t?.window}),hydrationData:t?.hydrationData||s0(),routes:e,mapRouteProperties:i0,unstable_dataStrategy:t?.unstable_dataStrategy,window:t?.window}).initialize()}function s0(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Qi({},t,{errors:u0(t.errors)})),t}function u0(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Ys(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let l=new i(o.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const c0=b.createContext({isTransitioning:!1}),d0=b.createContext(new Map),f0="startTransition",Xc=Bm[f0],p0="flushSync",Jc=Gv[p0];function m0(e){Xc?Xc(e):e()}function Kr(e){Jc?Jc(e):e()}class h0{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function v0(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=b.useState(n.state),[l,a]=b.useState(),[s,u]=b.useState({isTransitioning:!1}),[d,f]=b.useState(),[c,y]=b.useState(),[w,S]=b.useState(),L=b.useRef(new Map),{v7_startTransition:m}=r||{},p=b.useCallback(h=>{m?m0(h):h()},[m]),v=b.useCallback((h,R)=>{let{deletedFetchers:I,unstable_flushSync:N,unstable_viewTransitionOpts:K}=R;I.forEach(oe=>L.current.delete(oe)),h.fetchers.forEach((oe,xe)=>{oe.data!==void 0&&L.current.set(xe,oe.data)});let te=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!K||te){N?Kr(()=>i(h)):p(()=>i(h));return}if(N){Kr(()=>{c&&(d&&d.resolve(),c.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:K.currentLocation,nextLocation:K.nextLocation})});let oe=n.window.document.startViewTransition(()=>{Kr(()=>i(h))});oe.finished.finally(()=>{Kr(()=>{f(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),Kr(()=>y(oe));return}c?(d&&d.resolve(),c.skipTransition(),S({state:h,currentLocation:K.currentLocation,nextLocation:K.nextLocation})):(a(h),u({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}))},[n.window,c,d,L,p]);b.useLayoutEffect(()=>n.subscribe(v),[n,v]),b.useEffect(()=>{s.isTransitioning&&!s.flushSync&&f(new h0)},[s]),b.useEffect(()=>{if(d&&l&&n.window){let h=l,R=d.promise,I=n.window.document.startViewTransition(async()=>{p(()=>i(h)),await R});I.finished.finally(()=>{f(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(I)}},[p,l,d,n.window]),b.useEffect(()=>{d&&l&&o.location.key===l.location.key&&d.resolve()},[d,c,o.location,l]),b.useEffect(()=>{!s.isTransitioning&&w&&(a(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),S(void 0))},[s.isTransitioning,w]),b.useEffect(()=>{},[]);let E=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,R,I)=>n.navigate(h,{state:R,preventScrollReset:I?.preventScrollReset}),replace:(h,R,I)=>n.navigate(h,{replace:!0,state:R,preventScrollReset:I?.preventScrollReset})}),[n]),z=n.basename||"/",D=b.useMemo(()=>({router:n,navigator:E,static:!1,basename:z}),[n,E,z]);return b.createElement(b.Fragment,null,b.createElement(fl.Provider,{value:D},b.createElement(Bp.Provider,{value:o},b.createElement(d0.Provider,{value:L.current},b.createElement(c0.Provider,{value:s},b.createElement(o0,{basename:z,location:o.location,navigationType:o.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?b.createElement(g0,{routes:n.routes,future:n.future,state:o}):t))))),null)}function g0(e){let{routes:t,future:n,state:r}=e;return Qg(t,void 0,r,n)}var Zc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zc||(Zc={}));var qc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qc||(qc={}));const y0="modulepreload",x0=function(e,t){return new URL(e,t).href},ed={},Ja=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=l?.nonce||l?.getAttribute("nonce");o=Promise.all(n.map(s=>{if(s=x0(s,r),s in ed)return;ed[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let y=i.length-1;y>=0;y--){const w=i[y];if(w.href===s&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":y0,u||(c.as="script",c.crossOrigin=""),c.href=s,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((y,w)=>{c.addEventListener("load",y),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};var Xl,Ee;(function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"})(Ee||(Ee={}));class w0{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=Ee.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(Ee.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(Ee.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const n=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===Ee.CONNECTED||this.connectionState===Ee.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=Ee.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const S0=e=>!!(e==="localhost"||e==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(e)),si=window;if(!(!((Xl=si.Vaadin)===null||Xl===void 0)&&Xl.connectionState)){let e;S0(window.location.hostname)?e=!0:e=navigator.onLine,si.Vaadin||(si.Vaadin={}),si.Vaadin.connectionState=new w0(e?Ee.CONNECTED:Ee.CONNECTION_LOST)}function ut(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(i=(o<3?l(i):o>3?l(t,n,i):l(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=globalThis,nu=Si.ShadowRoot&&(Si.ShadyCSS===void 0||Si.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ru=Symbol(),td=new WeakMap;let ou=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ru)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(nu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=td.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&td.set(n,t))}return t}toString(){return this.cssText}};const Gp=e=>new ou(typeof e=="string"?e:e+"",void 0,ru),ye=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new ou(n,e,ru)},Yp=(e,t)=>{if(nu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=Si.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},nd=nu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Gp(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:k0,defineProperty:E0,getOwnPropertyDescriptor:C0,getOwnPropertyNames:_0,getOwnPropertySymbols:b0,getPrototypeOf:P0}=Object,hl=globalThis,rd=hl.trustedTypes,T0=rd?rd.emptyScript:"",z0=hl.reactiveElementPolyfillSupport,uo=(e,t)=>e,Ki={toAttribute(e,t){switch(t){case Boolean:e=e?T0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},iu=(e,t)=>!k0(e,t),od={attribute:!0,type:String,converter:Ki,reflect:!1,hasChanged:iu};Symbol.metadata??=Symbol("metadata"),hl.litPropertyMetadata??=new WeakMap;let er=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=od){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&E0(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=C0(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o?.call(this)},set(l){const a=o?.call(this);i.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??od}static _$Ei(){if(this.hasOwnProperty(uo("elementProperties")))return;const t=P0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(uo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(uo("properties"))){const n=this.properties,r=[..._0(n),...b0(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(nd(o))}else t!==void 0&&n.push(nd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yp(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Ki).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ki;this._$Em=o,this[o]=l.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??iu)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[uo("elementProperties")]=new Map,er[uo("finalized")]=new Map,z0?.({ReactiveElement:er}),(hl.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lu=globalThis,Gi=lu.trustedTypes,id=Gi?Gi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Xp="$lit$",rn=`lit$${Math.random().toFixed(9).slice(2)}$`,Jp="?"+rn,R0=`<${Jp}>`,Vn=document,Ro=()=>Vn.createComment(""),Lo=e=>e===null||typeof e!="object"&&typeof e!="function",Zp=Array.isArray,L0=e=>Zp(e)||typeof e?.[Symbol.iterator]=="function",Jl=`[ 	
\f\r]`,Gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ld=/-->/g,ad=/>/g,Cn=RegExp(`>|${Jl}(?:([^\\s"'>=/]+)(${Jl}*=${Jl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sd=/'/g,ud=/"/g,qp=/^(?:script|style|textarea|title)$/i,em=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$0=em(1),Jy=em(2),Hn=Symbol.for("lit-noChange"),Te=Symbol.for("lit-nothing"),cd=new WeakMap,Nn=Vn.createTreeWalker(Vn,129);function tm(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return id!==void 0?id.createHTML(t):t}const N0=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Gr;for(let a=0;a<n;a++){const s=e[a];let u,d,f=-1,c=0;for(;c<s.length&&(l.lastIndex=c,d=l.exec(s),d!==null);)c=l.lastIndex,l===Gr?d[1]==="!--"?l=ld:d[1]!==void 0?l=ad:d[2]!==void 0?(qp.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=Cn):d[3]!==void 0&&(l=Cn):l===Cn?d[0]===">"?(l=o??Gr,f=-1):d[1]===void 0?f=-2:(f=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?Cn:d[3]==='"'?ud:sd):l===ud||l===sd?l=Cn:l===ld||l===ad?l=Gr:(l=Cn,o=void 0);const y=l===Cn&&e[a+1].startsWith("/>")?" ":"";i+=l===Gr?s+R0:f>=0?(r.push(u),s.slice(0,f)+Xp+s.slice(f)+rn+y):s+rn+(f===-2?a:y)}return[tm(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class $o{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,d]=N0(t,n);if(this.el=$o.createElement(u,r),Nn.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Nn.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Xp)){const c=d[l++],y=o.getAttribute(f).split(rn),w=/([.?@])?(.*)/.exec(c);s.push({type:1,index:i,name:w[2],strings:y,ctor:w[1]==="."?M0:w[1]==="?"?O0:w[1]==="@"?A0:vl}),o.removeAttribute(f)}else f.startsWith(rn)&&(s.push({type:6,index:i}),o.removeAttribute(f));if(qp.test(o.tagName)){const f=o.textContent.split(rn),c=f.length-1;if(c>0){o.textContent=Gi?Gi.emptyScript:"";for(let y=0;y<c;y++)o.append(f[y],Ro()),Nn.nextNode(),s.push({type:2,index:++i});o.append(f[c],Ro())}}}else if(o.nodeType===8)if(o.data===Jp)s.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(rn,f+1))!==-1;)s.push({type:7,index:i}),f+=rn.length-1}i++}}static createElement(t,n){const r=Vn.createElement("template");return r.innerHTML=t,r}}function Tr(e,t,n=e,r){if(t===Hn)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Lo(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=Tr(e,o._$AS(e,t.values),o,r)),t}class D0{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??Vn).importNode(n,!0);Nn.currentNode=o;let i=Nn.nextNode(),l=0,a=0,s=r[0];for(;s!==void 0;){if(l===s.index){let u;s.type===2?u=new Fo(i,i.nextSibling,this,t):s.type===1?u=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(u=new I0(i,this,t)),this._$AV.push(u),s=r[++a]}l!==s?.index&&(i=Nn.nextNode(),l++)}return Nn.currentNode=Vn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Fo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Te,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Tr(this,t,n),Lo(t)?t===Te||t==null||t===""?(this._$AH!==Te&&this._$AR(),this._$AH=Te):t!==this._$AH&&t!==Hn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):L0(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Te&&Lo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=$o.createElement(tm(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new D0(o,this),l=i.u(this.options);i.p(n),this.T(l),this._$AH=i}}_$AC(t){let n=cd.get(t.strings);return n===void 0&&cd.set(t.strings,n=new $o(t)),n}k(t){Zp(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Fo(this.S(Ro()),this.S(Ro()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class vl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Te,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Te}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=Tr(this,t,n,0),l=!Lo(t)||t!==this._$AH&&t!==Hn,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=Tr(this,a[r+s],n,s),u===Hn&&(u=this._$AH[s]),l||=!Lo(u)||u!==this._$AH[s],u===Te?t=Te:t!==Te&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===Te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let M0=class extends vl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Te?void 0:t}};class O0 extends vl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Te)}}class A0 extends vl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Tr(this,t,n,0)??Te)===Hn)return;const r=this._$AH,o=t===Te&&r!==Te||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Te&&(r===Te||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class I0{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Tr(this,t)}}const F0=lu.litHtmlPolyfillSupport;F0?.($o,Fo),(lu.litHtmlVersions??=[]).push("3.1.4");const U0=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new Fo(t.insertBefore(Ro(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class On extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=U0(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Hn}}On._$litElement$=!0,On.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:On});const j0=globalThis.litElementPolyfillSupport;j0?.({LitElement:On});(globalThis.litElementVersions??=[]).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B0={attribute:!0,type:String,converter:Ki,reflect:!1,hasChanged:iu},V0=(e=B0,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(l,s,e)},init(a){return a!==void 0&&this.P(l,void 0,e),a}}}if(r==="setter"){const{name:l}=n;return function(a){const s=this[l];t.call(this,a),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+r)};function ct(e){return(t,n)=>typeof n=="object"?V0(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},W0=e=>(...t)=>({_$litDirective$:e,values:t});class Q0{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K0=W0(class extends Q0{constructor(e){if(super(e),e.type!==H0.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Hn}}),Zl="css-loading-indicator";var Et;(function(e){e.IDLE="",e.FIRST="first",e.SECOND="second",e.THIRD="third"})(Et||(Et={}));class Re extends On{static create(){var t,n;const r=window;return!((t=r.Vaadin)===null||t===void 0)&&t.connectionIndicator||(r.Vaadin||(r.Vaadin={}),r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=Et.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=Ee.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return $0`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${K0({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const n=window;!((t=n.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const n=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=n===Ee.CONNECTION_LOST,this.reconnecting=n===Ee.RECONNECTING,this.updateLoading(n===Ee.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=Et.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=Et.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=Et.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=Et.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Zl)){const t=document.createElement("style");t.id=Zl,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(Zl);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case Et.IDLE:return"display: none";case Et.FIRST:case Et.SECOND:case Et.THIRD:return"display: block";default:return""}}timeoutFor(t,n,r,o){return t!==0&&window.clearTimeout(t),n?window.setTimeout(r,o):0}static get instance(){return Re.create()}}ut([ct({type:Number})],Re.prototype,"firstDelay",void 0);ut([ct({type:Number})],Re.prototype,"secondDelay",void 0);ut([ct({type:Number})],Re.prototype,"thirdDelay",void 0);ut([ct({type:Number})],Re.prototype,"expandedDuration",void 0);ut([ct({type:String})],Re.prototype,"onlineText",void 0);ut([ct({type:String})],Re.prototype,"offlineText",void 0);ut([ct({type:String})],Re.prototype,"reconnectingText",void 0);ut([ct({type:Boolean,reflect:!0})],Re.prototype,"offline",void 0);ut([ct({type:Boolean,reflect:!0})],Re.prototype,"reconnecting",void 0);ut([ct({type:Boolean,reflect:!0})],Re.prototype,"expanded",void 0);ut([ct({type:Boolean,reflect:!0})],Re.prototype,"loading",void 0);ut([ct({type:String})],Re.prototype,"loadingBarState",void 0);ut([ct({type:Boolean})],Re.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",Re);Re.instance;var dd;const Yi=window;Yi.Vaadin||(Yi.Vaadin={});(dd=Yi.Vaadin).registrations||(dd.registrations=[]);Yi.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class fd extends Error{}const ql=window.document.body,re=window,G0=1;function nm(){return Object.keys(re.Vaadin.Flow.clients).filter(e=>e!=="TypeScript").map(e=>re.Vaadin.Flow.clients[e])}function pd(e,t){nm().forEach(n=>n.sendEventMessage(G0,e,t))}let Y0=class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",ql.$=ql.$||[],this.config=t||{},re.Vaadin=re.Vaadin||{},re.Vaadin.Flow=re.Vaadin.Flow||{},re.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const n=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||n&&n.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,re.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,re.Vaadin.connectionState.loadingFinished(),!re.Vaadin.listener&&(re.Vaadin.listener={},document.addEventListener("click",t=>{t.target&&(t.target.hasAttribute("router-link")?this.navigation="link":t.composedPath().some(n=>n.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async t=>{if(this.pathname=t.pathname,re.Vaadin.connectionState.online)try{await this.flowInit()}catch(n){if(n instanceof fd)return re.Vaadin.connectionState.state=Ee.CONNECTION_LOST,this.offlineStubAction();throw n}else return this.offlineStubAction();return this.container.onBeforeEnter=(n,r)=>this.flowNavigate(n,r),this.container.onBeforeLeave=(n,r)=>this.flowLeave(n,r),this.container}}async flowLeave(t,n){const{connectionState:r}=re.Vaadin;return this.pathname===t.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(o=>{this.loadingStarted(),this.container.serverConnected=i=>{var l;o(n&&i?n.prevent():(l=n?.continue)===null||l===void 0?void 0:l.call(n)),this.loadingFinished()},pd("ui-leave-navigation",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t)})})}async flowNavigate(t,n){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(o,i)=>{var l;n&&o?r(n.prevent()):n&&n.redirect&&i?r(n.redirect(i.pathname)):((l=n?.continue)===null||l===void 0||l.call(n),this.container.style.display="",r(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},pd("ui-navigate",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(t){return decodeURIComponent(t.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(t){return t.search&&t.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:t,appConfig:n}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:r}=n,o=`flow-container-${r.toLowerCase()}`,i=document.querySelector(o);i?this.container=i:(this.container=document.createElement(o),this.container.id=r),ql.$[r]=this.container,(await Ja(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(r),await this.config.imports());const a=await Ja(()=>import("./FlowClient-Ccq10N4j.js"),[],import.meta.url);await this.flowInitClient(a),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(t){return new Promise((n,r)=>{const o=document.createElement("script");o.onload=()=>n(),o.onerror=r,o.src=t,document.body.appendChild(o)})}injectAppIdScript(t){const n=t.substring(0,t.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",n),document.body.append(r)}async flowInitClient(t){return t.init(),new Promise(n=>{const r=setInterval(()=>{nm().reduce((i,l)=>i||l.isActive(),!1)||(clearInterval(r),n())},5)})}async flowInitUi(){const t=re.Vaadin&&re.Vaadin.TypeScript&&re.Vaadin.TypeScript.initial;return t?(re.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((n,r)=>{const i=new XMLHttpRequest,l=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",l),i.onerror=()=>r(new fd(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const a=i.getResponseHeader("content-type");a&&a.indexOf("application/json")!==-1?n(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){Re.create(),re.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){re.Vaadin.connectionState.state=Ee.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{re.Vaadin.connectionState.state=Ee.CONNECTED},t.onerror=()=>{re.Vaadin.connectionState.state=Ee.CONNECTION_LOST},setTimeout(()=>t.send(),50)}}),re.addEventListener("offline",()=>{this.isFlowClientLoaded()||(re.Vaadin.connectionState.state=Ee.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const o=()=>{r!==void 0&&(re.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return t.onBeforeEnter=(i,l,a)=>{r=()=>{re.Vaadin.connectionState.online&&(o(),a.render(i,!1))},re.Vaadin.connectionState.addStateChangeListener(r)},t.onBeforeLeave=(i,l,a)=>{o()},t}isFlowClientLoaded(){return this.response!==void 0}};var rm={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=b,J0=Symbol.for("react.element"),Z0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,ey=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function om(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)q0.call(t,r)&&!ty.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:J0,type:e,key:i,ref:l,props:o,_owner:ey.current}}gl.Fragment=Z0;gl.jsx=om;gl.jsxs=om;rm.exports=gl;var au=rm.exports;const ny=new Y0({imports:()=>Ja(()=>import("./generated-flow-imports-Wz1413Y6.js").then(e=>e.g),[],import.meta.url)}),ea={render(){return Promise.resolve()}};function ry(e){const t=e.port,n=e.protocol,i=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${i}`}function im(e){if(e.href.startsWith(document.baseURI))return"/"+e.href.slice(document.baseURI.length)}function oy(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let i=0;i<n.length;i++){const l=n[i];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a")return;const r=t;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&r.hash!==""){window.location.hash=r.hash;return}if((r.origin||ry(r))===window.location.origin)return im(new URL(r.href,r.baseURI))}function md(e,t){setTimeout(()=>window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:e,search:t}})))}function lm(){}const hd=()=>lm;function su(){const e=b.useRef(null),t=Hg(),n=t0(({currentLocation:c,nextLocation:y})=>(l.current=l.current||y.pathname===c.pathname&&y.search===c.search&&y.hash===c.hash,!0)),{pathname:r,search:o,hash:i}=eu(),l=b.useRef(!1),a=b.useRef(void 0),s=b.useCallback(c=>{const y=oy(c);y&&(c&&c.preventDefault&&c.preventDefault(),l.current=!1,t(y))},[t]),u=b.useCallback(c=>{const y=c.detail,w=im(y);w&&(c.preventDefault(),t(w))},[t]),d=b.useCallback(c=>{const y="/"+c.detail.url;l.current=!c.detail.replace,t(y,{state:c.detail.state,replace:c.detail.replace})},[t]),f=b.useCallback(c=>()=>{t(c,{replace:!0})},[t]);return b.useEffect(()=>(window.addEventListener("vaadin-router-go",u),window.addEventListener("vaadin-navigate",d),()=>{window.removeEventListener("vaadin-router-go",u),window.removeEventListener("vaadin-navigate",d)}),[u,d]),b.useEffect(()=>()=>{a.current?.parentNode?.removeChild(a.current),a.current=void 0},[]),b.useEffect(()=>{if(n.state==="blocked"){if(l.current){n.proceed();return}const{pathname:c,search:y}=n.location;let w=Rn(Array.from(sy),window.location.pathname);w&&w.filter(S=>S.route?.element?.type?.name===su.name).length!=0?(a.current?.onBeforeEnter?.call(a?.current,{pathname:c,search:y},{prevent(){n.reset(),l.current=!1},redirect:f,continue(){n.proceed()}},ea),l.current=!0):Promise.resolve(a.current?.onBeforeLeave?.call(a?.current,{pathname:c,search:y},{prevent:hd},ea)).then(S=>{S===lm&&a.current?a.current.serverConnected=L=>{L?n.reset():n.proceed()}:n.proceed()})}},[n.state,n.location]),b.useEffect(()=>{if(l.current){l.current=!1,md(r,o);return}ny.serverSideRoutes[0].action({pathname:r,search:o}).then(c=>{const y=e.current?.parentNode;return y&&y!==c.parentNode&&(y.append(c),c.onclick=s,a.current=c),c.onBeforeEnter?.call(c,{pathname:r,search:o},{prevent:hd,redirect:f,continue(){md(r,o)}},ea)}).then(c=>{typeof c=="function"&&c()})},[r,o,i]),au.jsx("output",{ref:e})}su.type="FlowContainer";const iy=[{path:"/*",element:au.jsx(su,{})}];function ly(){const e=[...iy];return{router:a0([...e],{basename:new URL(document.baseURI).pathname}),routes:e}}const{router:ay,routes:sy}=ly();function uy(){return au.jsx(v0,{router:ay})}Rp(document.getElementById("outlet")).render(b.createElement(uy));/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cy=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,o){super.attributeChangedCallback(n,r,o),n==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const am=[],Za=new Set,uu=new Set;function sm(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function dy(e){return sm(customElements.get(e))}function fy(e=[]){return[e].flat(1/0).filter(t=>t instanceof ou?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function um(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function cm(e){return e.map(t=>t.cssText).join(`
`)}const Xi="vaadin-themable-mixin-style";function py(e,t){const n=document.createElement("style");n.id=Xi,n.textContent=cm(e),t.content.appendChild(n)}function my(e){if(!e.shadowRoot)return;const t=e.constructor;if(e instanceof On)[...e.shadowRoot.querySelectorAll("style")].forEach(n=>n.remove()),Yp(e.shadowRoot,t.elementStyles);else{const n=e.shadowRoot.getElementById(Xi),r=t.prototype._template;n.textContent=r.content.getElementById(Xi).textContent}}function hy(e){Za.forEach(t=>{const n=t.deref();n instanceof e?my(n):n||Za.delete(t)})}function dm(e){if(e.prototype instanceof On)e.elementStyles=e.finalizeStyles(e.styles);else{const t=e.prototype._template;t.content.getElementById(Xi).textContent=cm(e.getStylesForThis())}uu.forEach(t=>{const n=customElements.get(t);n!==e&&n.prototype instanceof e&&dm(n)})}function vy(e,t){const n=e.__themes;return!n||!t?!1:n.some(r=>r.styles.some(o=>t.some(i=>i.cssText===o.cssText)))}function yl(e,t,n={}){t=fy(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):am.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId}),e&&uu.forEach(r=>{if(um(e,r)&&dy(r)){const o=customElements.get(r);vy(o,t)?console.warn(`Registering styles that already exist for ${r}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),dm(o),hy(o)}})}function qa(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():am}function gy(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function fm(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=qa().find(o=>o.moduleId===n);r?t.push(...fm(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function yy(e){const t=`${e}-default-theme`,n=qa().filter(r=>r.moduleId!==t&&um(r.themeFor,e)).map(r=>({...r,styles:[...fm(r),...r.styles],includePriority:gy(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:qa().filter(r=>r.moduleId===t)}const t1=e=>class extends cy(e){constructor(){super(),Za.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&uu.add(this.is),this.elementStyles)return;const n=this.prototype._template;!n||sm(this)||py(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...[n].flat(1/0),...r]:r}static getStylesForThis(){const n=e.__themes||[],r=Object.getPrototypeOf(this.prototype),o=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...o,...yy(this.is)];const i=this.__themes.flatMap(l=>l.styles);return i.filter((l,a)=>a===i.lastIndexOf(l))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xy=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},kn=(e,...t)=>{xy(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function wy(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.4.0"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sy extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}wy(Sy);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ky=ye`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,cu=ye`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;yl("",cu,{moduleId:"lumo-typography"});kn("typography-props",ky);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ey=ye`
  ${Gp(cu.cssText.replace(/,\s*:host/su,""))}
`;kn("typography",Ey);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cy=ye`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;kn("color-props",Cy);const du=ye`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;yl("",du,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */kn("color",du);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _y=ye`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ye`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;kn("style-props",_y);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fu=ye`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;yl("",fu,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */kn("badge",fu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const by=ye`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Py=ye`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint {
    background-color: var(--lumo-tint);
  }

  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade {
    background-color: var(--lumo-shade);
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ty=ye`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }

  /* === Border color === */
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zy=ye`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ry=ye`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ly=ye`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $y=ye`
  /* === Box shadow === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ny=ye`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dy=ye`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const My=ye`
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-none {
    transition: none;
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oy=ye`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pu=ye`
${by}
${Py}
${Ty}
${zy}
${Ry}
${Ly}
${$y}
${Ny}
${Dy}
${My}
${Oy}
`;yl("",pu,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */kn("utility",pu);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function a(_){var $=_.replace(l,"");return $!==_&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),$.trim()}function s(_){return"isConnected"in _?_.isConnected:document.contains(_)}function u(_){return _.filter(function($,W){return _.indexOf($)===W})}function d(_,$){return _.filter(function(W){return $.indexOf(W)===-1})}function f(_){_.parentNode.removeChild(_)}function c(_){return _.shadowRoot||n.get(_)}var y=["addRule","deleteRule","insertRule","removeRule"],w=CSSStyleSheet,S=w.prototype;S.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},S.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function L(_){return typeof _=="object"?te.isPrototypeOf(_)||S.isPrototypeOf(_):!1}function m(_){return typeof _=="object"?S.isPrototypeOf(_):!1}var p=new WeakMap,v=new WeakMap,E=new WeakMap,z=new WeakMap;function D(_,$){var W=document.createElement("style");return E.get(_).set($,W),v.get(_).push($),W}function h(_,$){return E.get(_).get($)}function R(_,$){E.get(_).delete($),v.set(_,v.get(_).filter(function(W){return W!==$}))}function I(_,$){requestAnimationFrame(function(){$.textContent=p.get(_).textContent,z.get(_).forEach(function(W){return $.sheet[W.method].apply($.sheet,W.args)})})}function N(_){if(!p.has(_))throw new TypeError("Illegal invocation")}function K(){var _=this,$=document.createElement("style");t.body.appendChild($),p.set(_,$),v.set(_,[]),E.set(_,new WeakMap),z.set(_,[])}var te=K.prototype;te.replace=function($){try{return this.replaceSync($),Promise.resolve(this)}catch(W){return Promise.reject(W)}},te.replaceSync=function($){if(N(this),typeof $=="string"){var W=this;p.get(W).textContent=a($),z.set(W,[]),v.get(W).forEach(function(Ne){Ne.isConnected()&&I(W,h(W,Ne))})}},o(te,"cssRules",{configurable:!0,enumerable:!0,get:function(){return N(this),p.get(this).sheet.cssRules}}),o(te,"media",{configurable:!0,enumerable:!0,get:function(){return N(this),p.get(this).sheet.media}}),y.forEach(function(_){te[_]=function(){var $=this;N($);var W=arguments;z.get($).push({method:_,args:W}),v.get($).forEach(function(ne){if(ne.isConnected()){var de=h($,ne).sheet;de[_].apply(de,W)}});var Ne=p.get($).sheet;return Ne[_].apply(Ne,W)}}),o(K,Symbol.hasInstance,{configurable:!0,value:L});var oe={childList:!0,subtree:!0},xe=new WeakMap;function _e(_){var $=xe.get(_);return $||($=new Ue(_),xe.set(_,$)),$}function St(_){o(_.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return _e(this).sheets},set:function($){_e(this).update($)}})}function dt(_,$){for(var W=document.createNodeIterator(_,NodeFilter.SHOW_ELEMENT,function(ne){return c(ne)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Ne=void 0;Ne=W.nextNode();)$(c(Ne))}var P=new WeakMap,F=new WeakMap,j=new WeakMap;function q(_,$){return $ instanceof HTMLStyleElement&&F.get(_).some(function(W){return h(W,_)})}function Z(_){var $=P.get(_);return $ instanceof Document?$.body:$}function Qe(_){var $=document.createDocumentFragment(),W=F.get(_),Ne=j.get(_),ne=Z(_);Ne.disconnect(),W.forEach(function(de){$.appendChild(h(de,_)||D(de,_))}),ne.insertBefore($,null),Ne.observe(ne,oe),W.forEach(function(de){I(de,h(de,_))})}function Ue(_){var $=this;$.sheets=[],P.set($,_),F.set($,[]),j.set($,new MutationObserver(function(W,Ne){if(!document){Ne.disconnect();return}W.forEach(function(ne){e||i.call(ne.addedNodes,function(de){de instanceof Element&&dt(de,function(At){_e(At).connect()})}),i.call(ne.removedNodes,function(de){de instanceof Element&&(q($,de)&&Qe($),e||dt(de,function(At){_e(At).disconnect()}))})})}))}if(Ue.prototype={isConnected:function(){var _=P.get(this);return _ instanceof Document?_.readyState!=="loading":s(_.host)},connect:function(){var _=Z(this);j.get(this).observe(_,oe),F.get(this).length>0&&Qe(this),dt(_,function($){_e($).connect()})},disconnect:function(){j.get(this).disconnect()},update:function(_){var $=this,W=P.get($)===document?"Document":"ShadowRoot";if(!Array.isArray(_))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+W+": Iterator getter is not callable.");if(!_.every(L))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+W+": Failed to convert value to 'CSSStyleSheet'");if(_.some(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+W+": Can't adopt non-constructed stylesheets");$.sheets=_;var Ne=F.get($),ne=u(_),de=d(Ne,ne);de.forEach(function(At){f(h(At,$)),R(At,$)}),F.set($,ne),$.isConnected()&&ne.length>0&&Qe($)}},window.CSSStyleSheet=K,St(Document),"ShadowRoot"in window){St(ShadowRoot);var je=Element.prototype,Le=je.attachShadow;je.attachShadow=function($){var W=Le.call(this,$);return $.mode==="closed"&&n.set(this,W),W}}var $e=_e(document);$e.isConnected()?$e.connect():document.addEventListener("DOMContentLoaded",$e.connect.bind($e))})();const{toString:Ay}=Object.prototype;function Iy(e){return Ay.call(e)==="[object RegExp]"}function Fy(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=t,i;typeof t=="function"?(o=!1,i=t):Iy(t)&&(o=!1,i=d=>t.test(d));let l=!1,a="",s="",u="";for(let d=0;d<e.length;d++){if(a=e[d],e[d-1]!=="\\"&&(a==='"'||a==="'")&&(l===a?l=!1:l||(l=a)),!l&&a==="/"&&e[d+1]==="*"){const f=e[d+2]==="!";let c=d+2;for(;c<e.length;c++){if(e[c]==="*"&&e[c+1]==="/"){o&&f||i&&i(s)?u+=`/*${s}*/`:n||(e[c+2]===`
`?c++:e[c+2]+e[c+3]===`\r
`&&(c+=2)),s="";break}s+=e[c]}d=c+1;continue}u+=a}return u}const Uy=CSSStyleSheet.toString().includes("document.createElement"),jy=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=Fy(e));for(var r,o=e;(r=n.exec(e))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const l=r[1]||r[5];l&&(i.media=l),t===document?document.head.appendChild(i):t.appendChild(i)}return o},By=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),Vy=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),Uy?By(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},Hy=(e,t)=>{const n=document.createElement("style");return n.type="text/css",n.textContent=e,document.head.insertBefore(n,void 0),()=>{n.remove()}},Zn=(e,t,n,r)=>{if(n===document){const i=Wy(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=jy(e,n);return n===document?Hy(o):Vy(o,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function vd(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function Wy(e){let t=vd(e);return t+vd(t+e)}document["_vaadintheme_vaadin-prod-bundle_componentCss"]||(document["_vaadintheme_vaadin-prod-bundle_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pm=ye`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;kn("spacing-props",pm);const Qy="",Ky=e=>{const t=[];e!==document&&(t.push(Zn(cu.cssText,"",e,!0)),t.push(Zn(du.cssText,"",e,!0)),t.push(Zn(pm.cssText,"",e,!0)),t.push(Zn(fu.cssText,"",e,!0)),t.push(Zn(pu.cssText,"",e,!0)),t.push(Zn(Qy.toString(),"",e)))},Gy=Ky;Gy(document);export{t1 as T,Ja as _,Q0 as a,H0 as b,du as c,wy as d,W0 as e,am as f,Gp as g,kn as h,ye as i,U0 as j,Te as k,cy as l,Jy as m,yl as r,On as s,cu as t,Hn as w,$0 as x};
