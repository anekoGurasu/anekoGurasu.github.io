function qv(l,i){for(var u=0;u<i.length;u++){const c=i[u];if(typeof c!="string"&&!Array.isArray(c)){for(const s in c)if(s!=="default"&&!(s in l)){const d=Object.getOwnPropertyDescriptor(c,s);d&&Object.defineProperty(l,s,d.get?d:{enumerable:!0,get:()=>c[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function $m(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ic={exports:{}},Xr={};var rm;function Bv(){if(rm)return Xr;rm=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(c,s,d){var h=null;if(d!==void 0&&(h=""+d),s.key!==void 0&&(h=""+s.key),"key"in s){d={};for(var b in s)b!=="key"&&(d[b]=s[b])}else d=s;return s=d.ref,{$$typeof:l,type:c,key:h,ref:s!==void 0?s:null,props:d}}return Xr.Fragment=i,Xr.jsx=u,Xr.jsxs=u,Xr}var im;function Yv(){return im||(im=1,Ic.exports=Bv()),Ic.exports}var w=Yv(),es={exports:{}},Oe={};var om;function Xv(){if(om)return Oe;om=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,R={};function q(E,X,W){this.props=E,this.context=X,this.refs=R,this.updater=W||T}q.prototype.isReactComponent={},q.prototype.setState=function(E,X){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,X,"setState")},q.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function K(){}K.prototype=q.prototype;function Q(E,X,W){this.props=E,this.context=X,this.refs=R,this.updater=W||T}var J=Q.prototype=new K;J.constructor=Q,z(J,q.prototype),J.isPureReactComponent=!0;var Se=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function U(E,X,W,$,ae,Ee){return W=Ee.ref,{$$typeof:l,type:E,key:X,ref:W!==void 0?W:null,props:Ee}}function ne(E,X){return U(E.type,X,void 0,void 0,void 0,E.props)}function he(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function Ue(E){var X={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(W){return X[W]})}var Me=/\/+/g;function Ae(E,X){return typeof E=="object"&&E!==null&&E.key!=null?Ue(""+E.key):X.toString(36)}function lt(){}function Ye(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(lt,lt):(E.status="pending",E.then(function(X){E.status==="pending"&&(E.status="fulfilled",E.value=X)},function(X){E.status==="pending"&&(E.status="rejected",E.reason=X)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function I(E,X,W,$,ae){var Ee=typeof E;(Ee==="undefined"||Ee==="boolean")&&(E=null);var pe=!1;if(E===null)pe=!0;else switch(Ee){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(E.$$typeof){case l:case i:pe=!0;break;case g:return pe=E._init,I(pe(E._payload),X,W,$,ae)}}if(pe)return ae=ae(E),pe=$===""?"."+Ae(E,0):$,Se(ae)?(W="",pe!=null&&(W=pe.replace(Me,"$&/")+"/"),I(ae,X,W,"",function(pn){return pn})):ae!=null&&(he(ae)&&(ae=ne(ae,W+(ae.key==null||E&&E.key===ae.key?"":(""+ae.key).replace(Me,"$&/")+"/")+pe)),X.push(ae)),1;pe=0;var vt=$===""?".":$+":";if(Se(E))for(var Le=0;Le<E.length;Le++)$=E[Le],Ee=vt+Ae($,Le),pe+=I($,X,W,Ee,ae);else if(Le=M(E),typeof Le=="function")for(E=Le.call(E),Le=0;!($=E.next()).done;)$=$.value,Ee=vt+Ae($,Le++),pe+=I($,X,W,Ee,ae);else if(Ee==="object"){if(typeof E.then=="function")return I(Ye(E),X,W,$,ae);throw X=String(E),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function N(E,X,W){if(E==null)return E;var $=[],ae=0;return I(E,$,"","",function(Ee){return X.call(W,Ee,ae++)}),$}function Z(E){if(E._status===-1){var X=E._result;X=X(),X.then(function(W){(E._status===0||E._status===-1)&&(E._status=1,E._result=W)},function(W){(E._status===0||E._status===-1)&&(E._status=2,E._result=W)}),E._status===-1&&(E._status=0,E._result=X)}if(E._status===1)return E._result.default;throw E._result}var P=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function fe(){}return Oe.Children={map:N,forEach:function(E,X,W){N(E,function(){X.apply(this,arguments)},W)},count:function(E){var X=0;return N(E,function(){X++}),X},toArray:function(E){return N(E,function(X){return X})||[]},only:function(E){if(!he(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Oe.Component=q,Oe.Fragment=u,Oe.Profiler=s,Oe.PureComponent=Q,Oe.StrictMode=c,Oe.Suspense=v,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},Oe.cache=function(E){return function(){return E.apply(null,arguments)}},Oe.cloneElement=function(E,X,W){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=z({},E.props),ae=E.key,Ee=void 0;if(X!=null)for(pe in X.ref!==void 0&&(Ee=void 0),X.key!==void 0&&(ae=""+X.key),X)!ge.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||($[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)$.children=W;else if(1<pe){for(var vt=Array(pe),Le=0;Le<pe;Le++)vt[Le]=arguments[Le+2];$.children=vt}return U(E.type,ae,void 0,void 0,Ee,$)},Oe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},Oe.createElement=function(E,X,W){var $,ae={},Ee=null;if(X!=null)for($ in X.key!==void 0&&(Ee=""+X.key),X)ge.call(X,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ae[$]=X[$]);var pe=arguments.length-2;if(pe===1)ae.children=W;else if(1<pe){for(var vt=Array(pe),Le=0;Le<pe;Le++)vt[Le]=arguments[Le+2];ae.children=vt}if(E&&E.defaultProps)for($ in pe=E.defaultProps,pe)ae[$]===void 0&&(ae[$]=pe[$]);return U(E,Ee,void 0,void 0,null,ae)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(E){return{$$typeof:b,render:E}},Oe.isValidElement=he,Oe.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:Z}},Oe.memo=function(E,X){return{$$typeof:m,type:E,compare:X===void 0?null:X}},Oe.startTransition=function(E){var X=ee.T,W={};ee.T=W;try{var $=E(),ae=ee.S;ae!==null&&ae(W,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(fe,P)}catch(Ee){P(Ee)}finally{ee.T=X}},Oe.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Oe.use=function(E){return ee.H.use(E)},Oe.useActionState=function(E,X,W){return ee.H.useActionState(E,X,W)},Oe.useCallback=function(E,X){return ee.H.useCallback(E,X)},Oe.useContext=function(E){return ee.H.useContext(E)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(E,X){return ee.H.useDeferredValue(E,X)},Oe.useEffect=function(E,X,W){var $=ee.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(E,X)},Oe.useId=function(){return ee.H.useId()},Oe.useImperativeHandle=function(E,X,W){return ee.H.useImperativeHandle(E,X,W)},Oe.useInsertionEffect=function(E,X){return ee.H.useInsertionEffect(E,X)},Oe.useLayoutEffect=function(E,X){return ee.H.useLayoutEffect(E,X)},Oe.useMemo=function(E,X){return ee.H.useMemo(E,X)},Oe.useOptimistic=function(E,X){return ee.H.useOptimistic(E,X)},Oe.useReducer=function(E,X,W){return ee.H.useReducer(E,X,W)},Oe.useRef=function(E){return ee.H.useRef(E)},Oe.useState=function(E){return ee.H.useState(E)},Oe.useSyncExternalStore=function(E,X,W){return ee.H.useSyncExternalStore(E,X,W)},Oe.useTransition=function(){return ee.H.useTransition()},Oe.version="19.1.1",Oe}var um;function gs(){return um||(um=1,es.exports=Xv()),es.exports}var _=gs();const Be=$m(_),Gv=qv({__proto__:null,default:Be},[_]);var ts={exports:{}},Gr={},ns={exports:{}},as={};var cm;function Qv(){return cm||(cm=1,(function(l){function i(N,Z){var P=N.length;N.push(Z);e:for(;0<P;){var fe=P-1>>>1,E=N[fe];if(0<s(E,Z))N[fe]=Z,N[P]=E,P=fe;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var Z=N[0],P=N.pop();if(P!==Z){N[0]=P;e:for(var fe=0,E=N.length,X=E>>>1;fe<X;){var W=2*(fe+1)-1,$=N[W],ae=W+1,Ee=N[ae];if(0>s($,P))ae<E&&0>s(Ee,$)?(N[fe]=Ee,N[ae]=P,fe=ae):(N[fe]=$,N[W]=P,fe=W);else if(ae<E&&0>s(Ee,P))N[fe]=Ee,N[ae]=P,fe=ae;else break e}}return Z}function s(N,Z){var P=N.sortIndex-Z.sortIndex;return P!==0?P:N.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var h=Date,b=h.now();l.unstable_now=function(){return h.now()-b}}var v=[],m=[],g=1,S=null,M=3,T=!1,z=!1,R=!1,q=!1,K=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function Se(N){for(var Z=u(m);Z!==null;){if(Z.callback===null)c(m);else if(Z.startTime<=N)c(m),Z.sortIndex=Z.expirationTime,i(v,Z);else break;Z=u(m)}}function ee(N){if(R=!1,Se(N),!z)if(u(v)!==null)z=!0,ge||(ge=!0,Ae());else{var Z=u(m);Z!==null&&I(ee,Z.startTime-N)}}var ge=!1,U=-1,ne=5,he=-1;function Ue(){return q?!0:!(l.unstable_now()-he<ne)}function Me(){if(q=!1,ge){var N=l.unstable_now();he=N;var Z=!0;try{e:{z=!1,R&&(R=!1,Q(U),U=-1),T=!0;var P=M;try{t:{for(Se(N),S=u(v);S!==null&&!(S.expirationTime>N&&Ue());){var fe=S.callback;if(typeof fe=="function"){S.callback=null,M=S.priorityLevel;var E=fe(S.expirationTime<=N);if(N=l.unstable_now(),typeof E=="function"){S.callback=E,Se(N),Z=!0;break t}S===u(v)&&c(v),Se(N)}else c(v);S=u(v)}if(S!==null)Z=!0;else{var X=u(m);X!==null&&I(ee,X.startTime-N),Z=!1}}break e}finally{S=null,M=P,T=!1}Z=void 0}}finally{Z?Ae():ge=!1}}}var Ae;if(typeof J=="function")Ae=function(){J(Me)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ye=lt.port2;lt.port1.onmessage=Me,Ae=function(){Ye.postMessage(null)}}else Ae=function(){K(Me,0)};function I(N,Z){U=K(function(){N(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(N){switch(M){case 1:case 2:case 3:var Z=3;break;default:Z=M}var P=M;M=Z;try{return N()}finally{M=P}},l.unstable_requestPaint=function(){q=!0},l.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=M;M=N;try{return Z()}finally{M=P}},l.unstable_scheduleCallback=function(N,Z,P){var fe=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?fe+P:fe):P=fe,N){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=P+E,N={id:g++,callback:Z,priorityLevel:N,startTime:P,expirationTime:E,sortIndex:-1},P>fe?(N.sortIndex=P,i(m,N),u(v)===null&&N===u(m)&&(R?(Q(U),U=-1):R=!0,I(ee,P-fe))):(N.sortIndex=E,i(v,N),z||T||(z=!0,ge||(ge=!0,Ae()))),N},l.unstable_shouldYield=Ue,l.unstable_wrapCallback=function(N){var Z=M;return function(){var P=M;M=Z;try{return N.apply(this,arguments)}finally{M=P}}}})(as)),as}var sm;function Zv(){return sm||(sm=1,ns.exports=Qv()),ns.exports}var ls={exports:{}},At={};var fm;function Vv(){if(fm)return At;fm=1;var l=gs();function i(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(v,m,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:S==null?null:""+S,children:v,containerInfo:m,implementation:g}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,At.createPortal=function(v,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(v,m,null,g)},At.flushSync=function(v){var m=h.T,g=c.p;try{if(h.T=null,c.p=2,v)return v()}finally{h.T=m,c.p=g,c.d.f()}},At.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(v,m))},At.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},At.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var g=m.as,S=b(g,m.crossOrigin),M=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?c.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:T}):g==="script"&&c.d.X(v,{crossOrigin:S,integrity:M,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},At.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=b(m.as,m.crossOrigin);c.d.M(v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(v)},At.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,S=b(g,m.crossOrigin);c.d.L(v,g,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},At.preloadModule=function(v,m){if(typeof v=="string")if(m){var g=b(m.as,m.crossOrigin);c.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(v)},At.requestFormReset=function(v){c.d.r(v)},At.unstable_batchedUpdates=function(v,m){return v(m)},At.useFormState=function(v,m,g){return h.H.useFormState(v,m,g)},At.useFormStatus=function(){return h.H.useHostTransitionStatus()},At.version="19.1.1",At}var dm;function Fm(){if(dm)return ls.exports;dm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),ls.exports=Vv(),ls.exports}var hm;function Pv(){if(hm)return Gr;hm=1;var l=Zv(),i=gs(),u=Fm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return b(r),e;if(o===a)return b(r),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=r,a=o;else{for(var f=!1,p=r.child;p;){if(p===n){f=!0,n=r,a=o;break}if(p===a){f=!0,a=r,n=o;break}p=p.sibling}if(!f){for(p=o.child;p;){if(p===n){f=!0,n=o,a=r;break}if(p===a){f=!0,a=o,n=r;break}p=p.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),J=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case q:return"Profiler";case R:return"StrictMode";case ee:return"Suspense";case ge:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case J:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var I=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},fe=[],E=-1;function X(e){return{current:e}}function W(e){0>E||(e.current=fe[E],fe[E]=null,E--)}function $(e,t){E++,fe[E]=e.current,e.current=t}var ae=X(null),Ee=X(null),pe=X(null),vt=X(null);function Le(e,t){switch($(pe,t),$(Ee,e),$(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ch(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ch(t),e=kh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(ae),$(ae,e)}function pn(){W(ae),W(Ee),W(pe)}function Zl(e){e.memoizedState!==null&&$(vt,e);var t=ae.current,n=kh(t,e.type);t!==n&&($(Ee,e),$(ae,n))}function el(e){Ee.current===e&&(W(ae),W(Ee)),vt.current===e&&(W(vt),Hr._currentValue=P)}var ut=Object.prototype.hasOwnProperty,vn=l.unstable_scheduleCallback,tl=l.unstable_cancelCallback,Qo=l.unstable_shouldYield,zn=l.unstable_requestPaint,$t=l.unstable_now,Zo=l.unstable_getCurrentPriorityLevel,Vl=l.unstable_ImmediatePriority,ci=l.unstable_UserBlockingPriority,nl=l.unstable_NormalPriority,Vo=l.unstable_LowPriority,si=l.unstable_IdlePriority,_n=l.log,Aa=l.unstable_setDisableYieldValue,Fn=null,Ot=null;function bt(e){if(typeof _n=="function"&&Aa(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(Fn,e)}catch{}}var Ie=Math.clz32?Math.clz32:Pl,fi=Math.log,Po=Math.LN2;function Pl(e){return e>>>=0,e===0?32:31-(fi(e)/Po|0)|0}var al=256,Ct=4194304;function bn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function za(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~o,a!==0?r=bn(a):(f&=p,f!==0?r=bn(f):n||(n=p&~e,n!==0&&(r=bn(n))))):(p=a&~o,p!==0?r=bn(p):f!==0?r=bn(f):n||(n=a&~e,n!==0&&(r=bn(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function Wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ko(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kl(){var e=al;return al<<=1,(al&4194048)===0&&(al=256),e}function _a(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jo(e,t,n,a,r,o){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,k=e.hiddenUpdates;for(n=f&~n;0<n;){var B=31-Ie(n),G=1<<B;p[B]=0,x[B]=-1;var j=k[B];if(j!==null)for(k[B]=null,B=0;B<j.length;B++){var L=j[B];L!==null&&(L.lane&=-536870913)}n&=~G}a!==0&&Jl(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function Jl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Ie(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ie(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function rl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wa(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Ih(e.type))}function hi(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var gn=Math.random().toString(36).slice(2),gt="__reactFiber$"+gn,y="__reactProps$"+gn,D="__reactContainer$"+gn,H="__reactEvents$"+gn,V="__reactListeners$"+gn,F="__reactHandles$"+gn,se="__reactResources$"+gn,te="__reactMarker$"+gn;function re(e){delete e[gt],delete e[y],delete e[H],delete e[V],delete e[F]}function ie(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[D]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lh(e);e!==null;){if(n=e[gt])return n;e=Lh(e)}return t}e=n,n=e.parentNode}return null}function ce(e){if(e=e[gt]||e[D]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function me(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function oe(e){var t=e[se];return t||(t=e[se]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ve(e){e[te]=!0}var Ce=new Set,ct={};function Ke(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(ct[e]=t,e=0;e<t.length;e++)Ce.add(t[e])}var qe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_t={},yn={};function Na(e){return ut.call(yn,e)?!0:ut.call(_t,e)?!1:qe.test(e)?yn[e]=!0:(_t[e]=!0,!1)}function Lt(e,t,n){if(Na(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function wt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function qt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Nn,xn;function un(e){if(Nn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nn=t&&t[1]||"",xn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nn+e+xn}var ea=!1;function ze(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(L){var j=L}Reflect.construct(e,[],G)}else{try{G.call()}catch(L){j=L}e.call(G.prototype)}}else{try{throw Error()}catch(L){j=L}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(L){if(L&&j&&typeof L.stack=="string")return[L.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),f=o[0],p=o[1];if(f&&p){var x=f.split(`
`),k=p.split(`
`);for(r=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;if(a===x.length||r===k.length)for(a=x.length-1,r=k.length-1;1<=a&&0<=r&&x[a]!==k[r];)r--;for(;1<=a&&0<=r;a--,r--)if(x[a]!==k[r]){if(a!==1||r!==1)do if(a--,r--,0>r||x[a]!==k[r]){var B=`
`+x[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=r);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?un(n):""}function yt(e){switch(e.tag){case 26:case 27:case 5:return un(e.type);case 16:return un("Lazy");case 13:return un("Suspense");case 19:return un("SuspenseList");case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return un("Activity");default:return""}}function Cn(e){try{var t="";do t+=yt(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function il(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(f){a=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ca(e){e._valueTracker||(e._valueTracker=il(e))}function mi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=$e(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var U0=/[\n"\\]/g;function Ft(e){return e.replace(U0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $o(e,t,n,a,r,o,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Fo(e,f,st(t)):n!=null?Fo(e,f,st(n)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+st(p):e.removeAttribute("name")}function zs(e,t,n,a,r,o,f,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+st(n):"",t=t!=null?""+st(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Fo(e,t,n){t==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ol(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+st(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function _s(e,t,n){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+st(n):""}function ws(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(I(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=st(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ul(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var j0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ns(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||j0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cs(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Ns(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&Ns(e,o,t[o])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return L0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Io=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,sl=null;function ks(e){var t=ce(e);if(t&&(e=t.stateNode)){var n=e[y]||null;e:switch(e=t.stateNode,t.type){case"input":if($o(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ft(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[y]||null;if(!r)throw Error(c(90));$o(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&mi(a)}break e;case"textarea":_s(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ol(e,!!n.multiple,t,!1)}}}var tu=!1;function Us(e,t,n){if(tu)return e(t,n);tu=!0;try{var a=e(t);return a}finally{if(tu=!1,(cl!==null||sl!==null)&&(to(),cl&&(t=cl,e=sl,sl=cl=null,ks(t),e)))for(t=0;t<e.length;t++)ks(e[t])}}function $l(e,t){var n=e.stateNode;if(n===null)return null;var a=n[y]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(kn)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{nu=!1}var ta=null,au=null,bi=null;function js(){if(bi)return bi;var e,t=au,n=t.length,a,r="value"in ta?ta.value:ta.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===r[o-a];a++);return bi=r.slice(e,1<a?1-a:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Hs(){return!1}function kt(e){function t(n,a,r,o,f){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:Hs,this.isPropagationStopped=Hs,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=kt(ka),Wl=g({},ka,{view:0,detail:0}),q0=kt(Wl),lu,ru,Il,Si=g({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(lu=e.screenX-Il.screenX,ru=e.screenY-Il.screenY):ru=lu=0,Il=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Ls=kt(Si),B0=g({},Si,{dataTransfer:0}),Y0=kt(B0),X0=g({},Wl,{relatedTarget:0}),iu=kt(X0),G0=g({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=kt(G0),Z0=g({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=kt(Z0),P0=g({},ka,{data:0}),qs=kt(P0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$0[e])?!!t[e]:!1}function ou(){return F0}var W0=g({},Wl,{key:function(e){if(e.key){var t=K0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=kt(W0),ep=g({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=kt(ep),tp=g({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),np=kt(tp),ap=g({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=kt(ap),rp=g({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=kt(rp),op=g({},ka,{newState:0,oldState:0}),up=kt(op),cp=[9,13,27,32],uu=kn&&"CompositionEvent"in window,er=null;kn&&"documentMode"in document&&(er=document.documentMode);var sp=kn&&"TextEvent"in window&&!er,Ys=kn&&(!uu||er&&8<er&&11>=er),Xs=" ",Gs=!1;function Qs(e,t){switch(e){case"keyup":return cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function fp(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(Gs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Gs?null:e;default:return null}}function dp(e,t){if(fl)return e==="compositionend"||!uu&&Qs(e,t)?(e=js(),bi=au=ta=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hp[e.type]:t==="textarea"}function Ps(e,t,n,a){cl?sl?sl.push(a):sl=[a]:cl=a,t=oo(t,"onChange"),0<t.length&&(n=new xi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var tr=null,nr=null;function mp(e){Ah(e,0)}function Ei(e){var t=me(e);if(mi(t))return e}function Ks(e,t){if(e==="change")return t}var Js=!1;if(kn){var cu;if(kn){var su="oninput"in document;if(!su){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),su=typeof $s.oninput=="function"}cu=su}else cu=!1;Js=cu&&(!document.documentMode||9<document.documentMode)}function Fs(){tr&&(tr.detachEvent("onpropertychange",Ws),nr=tr=null)}function Ws(e){if(e.propertyName==="value"&&Ei(nr)){var t=[];Ps(t,nr,e,eu(e)),Us(mp,t)}}function pp(e,t,n){e==="focusin"?(Fs(),tr=t,nr=n,tr.attachEvent("onpropertychange",Ws)):e==="focusout"&&Fs()}function vp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(nr)}function bp(e,t){if(e==="click")return Ei(t)}function gp(e,t){if(e==="input"||e==="change")return Ei(t)}function yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:yp;function ar(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!ut.call(t,r)||!Bt(e[r],t[r]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var n=Is(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Is(n)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xp=kn&&"documentMode"in document&&11>=document.documentMode,dl=null,du=null,lr=null,hu=!1;function af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||dl==null||dl!==pi(a)||(a=dl,"selectionStart"in a&&fu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),lr&&ar(lr,a)||(lr=a,a=oo(du,"onSelect"),0<a.length&&(t=new xi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=dl)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hl={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},mu={},lf={};kn&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete hl.animationend.animation,delete hl.animationiteration.animation,delete hl.animationstart.animation),"TransitionEvent"in window||delete hl.transitionend.transition);function ja(e){if(mu[e])return mu[e];if(!hl[e])return e;var t=hl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return mu[e]=t[n];return e}var rf=ja("animationend"),of=ja("animationiteration"),uf=ja("animationstart"),Sp=ja("transitionrun"),Ep=ja("transitionstart"),Op=ja("transitioncancel"),cf=ja("transitionend"),sf=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function cn(e,t){sf.set(e,t),Ke(t,[e])}var ff=new WeakMap;function Wt(e,t){if(typeof e=="object"&&e!==null){var n=ff.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Cn(t)},ff.set(e,t),t)}return{value:e,source:t,stack:Cn(t)}}var It=[],ml=0,vu=0;function Oi(){for(var e=ml,t=vu=ml=0;t<e;){var n=It[t];It[t++]=null;var a=It[t];It[t++]=null;var r=It[t];It[t++]=null;var o=It[t];if(It[t++]=null,a!==null&&r!==null){var f=a.pending;f===null?r.next=r:(r.next=f.next,f.next=r),a.pending=r}o!==0&&df(n,r,o)}}function Ti(e,t,n,a){It[ml++]=e,It[ml++]=t,It[ml++]=n,It[ml++]=a,vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function bu(e,t,n,a){return Ti(e,t,n,a),Ri(e)}function pl(e,t){return Ti(e,null,null,t),Ri(e)}function df(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-Ie(n),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),o):null}function Ri(e){if(50<zr)throw zr=0,Oc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vl={};function Tp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,a){return new Tp(e,t,n,a)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Un(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Di(e,t,n,a,r,o){var f=0;if(a=e,typeof e=="function")gu(e)&&(f=1);else if(typeof e=="string")f=Dv(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Yt(31,n,t,r),e.elementType=he,e.lanes=o,e;case z:return Ha(n.children,r,o,t);case R:f=8,r|=24;break;case q:return e=Yt(12,n,t,r|2),e.elementType=q,e.lanes=o,e;case ee:return e=Yt(13,n,t,r),e.elementType=ee,e.lanes=o,e;case ge:return e=Yt(19,n,t,r),e.elementType=ge,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case J:f=10;break e;case Q:f=9;break e;case Se:f=11;break e;case U:f=14;break e;case ne:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Yt(f,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function Ha(e,t,n,a){return e=Yt(7,e,a,t),e.lanes=n,e}function yu(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function xu(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bl=[],gl=0,Mi=null,Ai=0,en=[],tn=0,La=null,jn=1,Hn="";function qa(e,t){bl[gl++]=Ai,bl[gl++]=Mi,Mi=e,Ai=t}function mf(e,t,n){en[tn++]=jn,en[tn++]=Hn,en[tn++]=La,La=e;var a=jn;e=Hn;var r=32-Ie(a)-1;a&=~(1<<r),n+=1;var o=32-Ie(t)+r;if(30<o){var f=r-r%5;o=(a&(1<<f)-1).toString(32),a>>=f,r-=f,jn=1<<32-Ie(t)+r|n<<r|a,Hn=o+e}else jn=1<<o|n<<r|a,Hn=e}function Su(e){e.return!==null&&(qa(e,1),mf(e,1,0))}function Eu(e){for(;e===Mi;)Mi=bl[--gl],bl[gl]=null,Ai=bl[--gl],bl[gl]=null;for(;e===La;)La=en[--tn],en[tn]=null,Hn=en[--tn],en[tn]=null,jn=en[--tn],en[tn]=null}var Nt=null,nt=null,He=!1,Ba=null,Sn=!1,Ou=Error(c(519));function Ya(e){var t=Error(c(418,""));throw or(Wt(t,e)),Ou}function pf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[gt]=e,t[y]=a,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<wr.length;n++)we(wr[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),zs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ca(t);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),ws(t,a.value,a.defaultValue,a.children),Ca(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Nh(t.textContent,n)?(a.popover!=null&&(we("beforetoggle",t),we("toggle",t)),a.onScroll!=null&&we("scroll",t),a.onScrollEnd!=null&&we("scrollend",t),a.onClick!=null&&(t.onclick=uo),t=!0):t=!1,t||Ya(e)}function vf(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 13:Sn=!1;return;case 27:case 3:Sn=!0;return;default:Nt=Nt.return}}function rr(e){if(e!==Nt)return!1;if(!He)return vf(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qc(e.type,e.memoizedProps)),n=!n),n&&nt&&Ya(e),vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){nt=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}nt=null}}else t===27?(t=nt,ba(e.type)?(e=Gc,Gc=null,nt=e):nt=t):nt=Nt?fn(e.stateNode.nextSibling):null;return!0}function ir(){nt=Nt=null,He=!1}function bf(){var e=Ba;return e!==null&&(Ht===null?Ht=e:Ht.push.apply(Ht,e),Ba=null),e}function or(e){Ba===null?Ba=[e]:Ba.push(e)}var Tu=X(null),Xa=null,Ln=null;function na(e,t,n){$(Tu,t._currentValue),t._currentValue=n}function qn(e){e._currentValue=Tu.current,W(Tu)}function Ru(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Du(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var f=r.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=r;for(var x=0;x<t.length;x++)if(p.context===t[x]){o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),Ru(o.return,n,e),a||(f=null);break e}o=p.next}}else if(r.tag===18){if(f=r.return,f===null)throw Error(c(341));f.lanes|=n,o=f.alternate,o!==null&&(o.lanes|=n),Ru(f,n,e),f=null}else f=r.child;if(f!==null)f.return=r;else for(f=r;f!==null;){if(f===e){f=null;break}if(r=f.sibling,r!==null){r.return=f.return,f=r;break}f=f.return}r=f}}function ur(e,t,n,a){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var f=r.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var p=r.type;Bt(r.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(r===vt.current){if(f=r.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Hr):e=[Hr])}r=r.return}e!==null&&Du(t,e,n,a),t.flags|=262144}function zi(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Xa=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mt(e){return gf(Xa,e)}function _i(e,t){return Xa===null&&Ga(e),gf(e,t)}function gf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ln===null){if(e===null)throw Error(c(308));Ln=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ln=Ln.next=t;return n}var Rp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Dp=l.unstable_scheduleCallback,Mp=l.unstable_NormalPriority,ht={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Rp,data:new Map,refCount:0}}function cr(e){e.refCount--,e.refCount===0&&Dp(Mp,function(){e.controller.abort()})}var sr=null,Au=0,yl=0,xl=null;function Ap(e,t){if(sr===null){var n=sr=[];Au=0,yl=_c(),xl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Au++,t.then(yf,yf),t}function yf(){if(--Au===0&&sr!==null){xl!==null&&(xl.status="fulfilled");var e=sr;sr=null,yl=0,xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var xf=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ap(e,t),xf!==null&&xf(e,t)};var Qa=X(null);function zu(){var e=Qa.current;return e!==null?e:Je.pooledCache}function wi(e,t){t===null?$(Qa,Qa.current):$(Qa,t.pool)}function Sf(){var e=zu();return e===null?null:{parent:ht._currentValue,pool:e}}var fr=Error(c(460)),Ef=Error(c(474)),Ni=Error(c(542)),_u={then:function(){}};function Of(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ci(){}function Tf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ci,Ci),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Df(e),e;default:if(typeof t.status=="string")t.then(Ci,Ci);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Df(e),e}throw dr=t,fr}}var dr=null;function Rf(){if(dr===null)throw Error(c(459));var e=dr;return dr=null,e}function Df(e){if(e===fr||e===Ni)throw Error(c(483))}var aa=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Xe&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ri(e),df(e,null,n),t}return Ti(e,a,t,n),Ri(e)}function hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}function Cu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=f:o=o.next=f,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ku=!1;function mr(){if(ku){var e=xl;if(e!==null)throw e}}function pr(e,t,n,a){ku=!1;var r=e.updateQueue;aa=!1;var o=r.firstBaseUpdate,f=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var x=p,k=x.next;x.next=null,f===null?o=k:f.next=k,f=x;var B=e.alternate;B!==null&&(B=B.updateQueue,p=B.lastBaseUpdate,p!==f&&(p===null?B.firstBaseUpdate=k:p.next=k,B.lastBaseUpdate=x))}if(o!==null){var G=r.baseState;f=0,B=k=x=null,p=o;do{var j=p.lane&-536870913,L=j!==p.lane;if(L?(ke&j)===j:(a&j)===j){j!==0&&j===yl&&(ku=!0),B!==null&&(B=B.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var xe=e,be=p;j=t;var Ve=n;switch(be.tag){case 1:if(xe=be.payload,typeof xe=="function"){G=xe.call(Ve,G,j);break e}G=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=be.payload,j=typeof xe=="function"?xe.call(Ve,G,j):xe,j==null)break e;G=g({},G,j);break e;case 2:aa=!0}}j=p.callback,j!==null&&(e.flags|=64,L&&(e.flags|=8192),L=r.callbacks,L===null?r.callbacks=[j]:L.push(j))}else L={lane:j,tag:p.tag,payload:p.payload,callback:p.callback,next:null},B===null?(k=B=L,x=G):B=B.next=L,f|=j;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;L=p,p=L.next,L.next=null,r.lastBaseUpdate=L,r.shared.pending=null}}while(!0);B===null&&(x=G),r.baseState=x,r.firstBaseUpdate=k,r.lastBaseUpdate=B,o===null&&(r.shared.lanes=0),ha|=f,e.lanes=f,e.memoizedState=G}}function Mf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Af(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mf(n[e],t)}var Sl=X(null),ki=X(0);function zf(e,t){e=Vn,$(ki,e),$(Sl,t),Vn=e|t.baseLanes}function Uu(){$(ki,Vn),$(Sl,Sl.current)}function ju(){Vn=ki.current,W(Sl),W(ki)}var ia=0,Te=null,Qe=null,ft=null,Ui=!1,El=!1,Za=!1,ji=0,vr=0,Ol=null,_p=0;function rt(){throw Error(c(321))}function Hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Lu(e,t,n,a,r,o){return ia=o,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?dd:hd,Za=!1,o=n(a,r),Za=!1,El&&(o=wf(t,n,a,r)),_f(e),o}function _f(e){N.H=Xi;var t=Qe!==null&&Qe.next!==null;if(ia=0,ft=Qe=Te=null,Ui=!1,vr=0,Ol=null,t)throw Error(c(300));e===null||xt||(e=e.dependencies,e!==null&&zi(e)&&(xt=!0))}function wf(e,t,n,a){Te=e;var r=0;do{if(El&&(Ol=null),vr=0,El=!1,25<=r)throw Error(c(301));if(r+=1,ft=Qe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Hp,o=t(n,a)}while(El);return o}function wp(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?br(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Te.flags|=1024),t}function qu(){var e=ji!==0;return ji=0,e}function Bu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yu(e){if(Ui){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ui=!1}ia=0,ft=Qe=Te=null,El=!1,vr=ji=0,Ol=null}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Te.memoizedState=ft=e:ft=ft.next=e,ft}function dt(){if(Qe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=ft===null?Te.memoizedState:ft.next;if(t!==null)ft=t,Qe=e;else{if(e===null)throw Te.alternate===null?Error(c(467)):Error(c(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},ft===null?Te.memoizedState=ft=e:ft=ft.next=e}return ft}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function br(e){var t=vr;return vr+=1,Ol===null&&(Ol=[]),e=Tf(Ol,e,t),t=Te,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?dd:hd),e}function Hi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return br(e);if(e.$$typeof===J)return Mt(e)}throw Error(c(438,String(e)))}function Gu(e){var t=null,n=Te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Xu(),Te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ue;return t.index++,n}function Bn(e,t){return typeof t=="function"?t(e):t}function Li(e){var t=dt();return Qu(t,Qe,e)}function Qu(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var f=r.next;r.next=o.next,o.next=f}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var p=f=null,x=null,k=t,B=!1;do{var G=k.lane&-536870913;if(G!==k.lane?(ke&G)===G:(ia&G)===G){var j=k.revertLane;if(j===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),G===yl&&(B=!0);else if((ia&j)===j){k=k.next,j===yl&&(B=!0);continue}else G={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(p=x=G,f=o):x=x.next=G,Te.lanes|=j,ha|=j;G=k.action,Za&&n(o,G),o=k.hasEagerState?k.eagerState:n(o,G)}else j={lane:G,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},x===null?(p=x=j,f=o):x=x.next=j,Te.lanes|=G,ha|=G;k=k.next}while(k!==null&&k!==t);if(x===null?f=o:x.next=p,!Bt(o,e.memoizedState)&&(xt=!0,B&&(n=xl,n!==null)))throw n;e.memoizedState=o,e.baseState=f,e.baseQueue=x,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Zu(e){var t=dt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var f=r=r.next;do o=e(o,f.action),f=f.next;while(f!==r);Bt(o,t.memoizedState)||(xt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function Nf(e,t,n){var a=Te,r=dt(),o=He;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!Bt((Qe||r).memoizedState,n);f&&(r.memoizedState=n,xt=!0),r=r.queue;var p=Uf.bind(null,a,r,e);if(gr(2048,8,p,[e]),r.getSnapshot!==t||f||ft!==null&&ft.memoizedState.tag&1){if(a.flags|=2048,Tl(9,qi(),kf.bind(null,a,r,n,t),null),Je===null)throw Error(c(349));o||(ia&124)!==0||Cf(a,t,n)}return n}function Cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t=Xu(),Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,a){t.value=n,t.getSnapshot=a,jf(t)&&Hf(e)}function Uf(e,t,n){return n(function(){jf(t)&&Hf(e)})}function jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Hf(e){var t=pl(e,2);t!==null&&Vt(t,e,2)}function Vu(e){var t=Ut();if(typeof e=="function"){var n=e;if(e=n(),Za){bt(!0);try{n()}finally{bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},t}function Lf(e,t,n,a){return e.baseState=n,Qu(e,Qe,typeof a=="function"?a:Bn)}function Np(e,t,n,a,r){if(Yi(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};N.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,qf(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qf(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=N.T,f={};N.T=f;try{var p=n(r,a),x=N.S;x!==null&&x(f,p),Bf(e,t,p)}catch(k){Pu(e,t,k)}finally{N.T=o}}else try{o=n(r,a),Bf(e,t,o)}catch(k){Pu(e,t,k)}}function Bf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Yf(e,t,a)},function(a){return Pu(e,t,a)}):Yf(e,t,n)}function Yf(e,t,n){t.status="fulfilled",t.value=n,Xf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qf(e,n)))}function Pu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Xf(t),t=t.next;while(t!==a)}e.action=null}function Xf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Gf(e,t){return t}function Qf(e,t){if(He){var n=Je.formState;if(n!==null){e:{var a=Te;if(He){if(nt){t:{for(var r=nt,o=Sn;r.nodeType!==8;){if(!o){r=null;break t}if(r=fn(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){nt=fn(r.nextSibling),a=r.data==="F!";break e}}Ya(a)}a=!1}a&&(t=n[0])}}return n=Ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:t},n.queue=a,n=cd.bind(null,Te,a),a.dispatch=n,a=Vu(!1),o=Wu.bind(null,Te,!1,a.queue),a=Ut(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Np.bind(null,Te,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Zf(e){var t=dt();return Vf(t,Qe,e)}function Vf(e,t,n){if(t=Qu(e,t,Gf)[0],e=Li(Bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=br(t)}catch(f){throw f===fr?Ni:f}else a=t;t=dt();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(Te.flags|=2048,Tl(9,qi(),Cp.bind(null,r,n),null)),[a,o,e]}function Cp(e,t){e.action=t}function Pf(e){var t=dt(),n=Qe;if(n!==null)return Vf(t,n,e);dt(),t=t.memoizedState,n=dt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Tl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Te.updateQueue,t===null&&(t=Xu(),Te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function qi(){return{destroy:void 0,resource:void 0}}function Kf(){return dt().memoizedState}function Bi(e,t,n,a){var r=Ut();a=a===void 0?null:a,Te.flags|=e,r.memoizedState=Tl(1|t,qi(),n,a)}function gr(e,t,n,a){var r=dt();a=a===void 0?null:a;var o=r.memoizedState.inst;Qe!==null&&a!==null&&Hu(a,Qe.memoizedState.deps)?r.memoizedState=Tl(t,o,n,a):(Te.flags|=e,r.memoizedState=Tl(1|t,o,n,a))}function Jf(e,t){Bi(8390656,8,e,t)}function $f(e,t){gr(2048,8,e,t)}function Ff(e,t){return gr(4,2,e,t)}function Wf(e,t){return gr(4,4,e,t)}function If(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){n=n!=null?n.concat([e]):null,gr(4,4,If.bind(null,t,e),n)}function Ku(){}function td(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Hu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function nd(e,t){var n=dt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Hu(t,a[1]))return a[0];if(a=e(),Za){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[a,t],a}function Ju(e,t,n){return n===void 0||(ia&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=rh(),Te.lanes|=e,ha|=e,n)}function ad(e,t,n,a){return Bt(n,t)?n:Sl.current!==null?(e=Ju(e,n,a),Bt(e,t)||(xt=!0),e):(ia&42)===0?(xt=!0,e.memoizedState=n):(e=rh(),Te.lanes|=e,ha|=e,t)}function ld(e,t,n,a,r){var o=Z.p;Z.p=o!==0&&8>o?o:8;var f=N.T,p={};N.T=p,Wu(e,!1,t,n);try{var x=r(),k=N.S;if(k!==null&&k(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=zp(x,a);yr(e,t,B,Zt(e))}else yr(e,t,a,Zt(e))}catch(G){yr(e,t,{then:function(){},status:"rejected",reason:G},Zt())}finally{Z.p=o,N.T=f}}function kp(){}function $u(e,t,n,a){if(e.tag!==5)throw Error(c(476));var r=rd(e).queue;ld(e,r,t,P,n===null?kp:function(){return id(e),n(a)})}function rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function id(e){var t=rd(e).next.queue;yr(e,t,{},Zt())}function Fu(){return Mt(Hr)}function od(){return dt().memoizedState}function ud(){return dt().memoizedState}function Up(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zt();e=la(n);var a=ra(t,e,n);a!==null&&(Vt(a,t,n),hr(a,t,n)),t={cache:Mu()},e.payload=t;return}t=t.return}}function jp(e,t,n){var a=Zt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Yi(e)?sd(t,n):(n=bu(e,t,n,a),n!==null&&(Vt(n,e,a),fd(n,t,a)))}function cd(e,t,n){var a=Zt();yr(e,t,n,a)}function yr(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))sd(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,p=o(f,n);if(r.hasEagerState=!0,r.eagerState=p,Bt(p,f))return Ti(e,t,r,0),Je===null&&Oi(),!1}catch{}if(n=bu(e,t,r,a),n!==null)return Vt(n,e,a),fd(n,t,a),!0}return!1}function Wu(e,t,n,a){if(a={lane:2,revertLane:_c(),action:a,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(t)throw Error(c(479))}else t=bu(e,n,a,2),t!==null&&Vt(t,e,2)}function Yi(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function sd(e,t){El=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,di(e,n)}}var Xi={readContext:Mt,use:Hi,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt},dd={readContext:Mt,use:Hi,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Jf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Bi(4194308,4,If.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){Bi(4,2,e,t)},useMemo:function(e,t){var n=Ut();t=t===void 0?null:t;var a=e();if(Za){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Ut();if(n!==void 0){var r=n(t);if(Za){bt(!0);try{n(t)}finally{bt(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=jp.bind(null,Te,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Vu(e);var t=e.queue,n=cd.bind(null,Te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ku,useDeferredValue:function(e,t){var n=Ut();return Ju(n,e,t)},useTransition:function(){var e=Vu(!1);return e=ld.bind(null,Te,e.queue,!0,!1),Ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Te,r=Ut();if(He){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Je===null)throw Error(c(349));(ke&124)!==0||Cf(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,Jf(Uf.bind(null,a,o,e),[e]),a.flags|=2048,Tl(9,qi(),kf.bind(null,a,o,n,t),null),n},useId:function(){var e=Ut(),t=Je.identifierPrefix;if(He){var n=Hn,a=jn;n=(a&~(1<<32-Ie(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=ji++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=_p++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Fu,useFormState:Qf,useActionState:Qf,useOptimistic:function(e){var t=Ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wu.bind(null,Te,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gu,useCacheRefresh:function(){return Ut().memoizedState=Up.bind(null,Te)}},hd={readContext:Mt,use:Hi,useCallback:td,useContext:Mt,useEffect:$f,useImperativeHandle:ed,useInsertionEffect:Ff,useLayoutEffect:Wf,useMemo:nd,useReducer:Li,useRef:Kf,useState:function(){return Li(Bn)},useDebugValue:Ku,useDeferredValue:function(e,t){var n=dt();return ad(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Li(Bn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:Nf,useId:od,useHostTransitionStatus:Fu,useFormState:Zf,useActionState:Zf,useOptimistic:function(e,t){var n=dt();return Lf(n,Qe,e,t)},useMemoCache:Gu,useCacheRefresh:ud},Hp={readContext:Mt,use:Hi,useCallback:td,useContext:Mt,useEffect:$f,useImperativeHandle:ed,useInsertionEffect:Ff,useLayoutEffect:Wf,useMemo:nd,useReducer:Zu,useRef:Kf,useState:function(){return Zu(Bn)},useDebugValue:Ku,useDeferredValue:function(e,t){var n=dt();return Qe===null?Ju(n,e,t):ad(n,Qe.memoizedState,e,t)},useTransition:function(){var e=Zu(Bn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:Nf,useId:od,useHostTransitionStatus:Fu,useFormState:Pf,useActionState:Pf,useOptimistic:function(e,t){var n=dt();return Qe!==null?Lf(n,Qe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:ud},Rl=null,xr=0;function Gi(e){var t=xr;return xr+=1,Rl===null&&(Rl=[]),Tf(Rl,e,t)}function Sr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qi(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function md(e){var t=e._init;return t(e._payload)}function pd(e){function t(A,O){if(e){var C=A.deletions;C===null?(A.deletions=[O],A.flags|=16):C.push(O)}}function n(A,O){if(!e)return null;for(;O!==null;)t(A,O),O=O.sibling;return null}function a(A){for(var O=new Map;A!==null;)A.key!==null?O.set(A.key,A):O.set(A.index,A),A=A.sibling;return O}function r(A,O){return A=Un(A,O),A.index=0,A.sibling=null,A}function o(A,O,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<O?(A.flags|=67108866,O):C):(A.flags|=67108866,O)):(A.flags|=1048576,O)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function p(A,O,C,Y){return O===null||O.tag!==6?(O=yu(C,A.mode,Y),O.return=A,O):(O=r(O,C),O.return=A,O)}function x(A,O,C,Y){var le=C.type;return le===z?B(A,O,C.props.children,Y,C.key):O!==null&&(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&md(le)===O.type)?(O=r(O,C.props),Sr(O,C),O.return=A,O):(O=Di(C.type,C.key,C.props,null,A.mode,Y),Sr(O,C),O.return=A,O)}function k(A,O,C,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==C.containerInfo||O.stateNode.implementation!==C.implementation?(O=xu(C,A.mode,Y),O.return=A,O):(O=r(O,C.children||[]),O.return=A,O)}function B(A,O,C,Y,le){return O===null||O.tag!==7?(O=Ha(C,A.mode,Y,le),O.return=A,O):(O=r(O,C),O.return=A,O)}function G(A,O,C){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=yu(""+O,A.mode,C),O.return=A,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case M:return C=Di(O.type,O.key,O.props,null,A.mode,C),Sr(C,O),C.return=A,C;case T:return O=xu(O,A.mode,C),O.return=A,O;case ne:var Y=O._init;return O=Y(O._payload),G(A,O,C)}if(I(O)||Ae(O))return O=Ha(O,A.mode,C,null),O.return=A,O;if(typeof O.then=="function")return G(A,Gi(O),C);if(O.$$typeof===J)return G(A,_i(A,O),C);Qi(A,O)}return null}function j(A,O,C,Y){var le=O!==null?O.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return le!==null?null:p(A,O,""+C,Y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return C.key===le?x(A,O,C,Y):null;case T:return C.key===le?k(A,O,C,Y):null;case ne:return le=C._init,C=le(C._payload),j(A,O,C,Y)}if(I(C)||Ae(C))return le!==null?null:B(A,O,C,Y,null);if(typeof C.then=="function")return j(A,O,Gi(C),Y);if(C.$$typeof===J)return j(A,O,_i(A,C),Y);Qi(A,C)}return null}function L(A,O,C,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return A=A.get(C)||null,p(O,A,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return A=A.get(Y.key===null?C:Y.key)||null,x(O,A,Y,le);case T:return A=A.get(Y.key===null?C:Y.key)||null,k(O,A,Y,le);case ne:var De=Y._init;return Y=De(Y._payload),L(A,O,C,Y,le)}if(I(Y)||Ae(Y))return A=A.get(C)||null,B(O,A,Y,le,null);if(typeof Y.then=="function")return L(A,O,C,Gi(Y),le);if(Y.$$typeof===J)return L(A,O,C,_i(O,Y),le);Qi(O,Y)}return null}function xe(A,O,C,Y){for(var le=null,De=null,de=O,ye=O=0,Et=null;de!==null&&ye<C.length;ye++){de.index>ye?(Et=de,de=null):Et=de.sibling;var je=j(A,de,C[ye],Y);if(je===null){de===null&&(de=Et);break}e&&de&&je.alternate===null&&t(A,de),O=o(je,O,ye),De===null?le=je:De.sibling=je,De=je,de=Et}if(ye===C.length)return n(A,de),He&&qa(A,ye),le;if(de===null){for(;ye<C.length;ye++)de=G(A,C[ye],Y),de!==null&&(O=o(de,O,ye),De===null?le=de:De.sibling=de,De=de);return He&&qa(A,ye),le}for(de=a(de);ye<C.length;ye++)Et=L(de,A,ye,C[ye],Y),Et!==null&&(e&&Et.alternate!==null&&de.delete(Et.key===null?ye:Et.key),O=o(Et,O,ye),De===null?le=Et:De.sibling=Et,De=Et);return e&&de.forEach(function(Ea){return t(A,Ea)}),He&&qa(A,ye),le}function be(A,O,C,Y){if(C==null)throw Error(c(151));for(var le=null,De=null,de=O,ye=O=0,Et=null,je=C.next();de!==null&&!je.done;ye++,je=C.next()){de.index>ye?(Et=de,de=null):Et=de.sibling;var Ea=j(A,de,je.value,Y);if(Ea===null){de===null&&(de=Et);break}e&&de&&Ea.alternate===null&&t(A,de),O=o(Ea,O,ye),De===null?le=Ea:De.sibling=Ea,De=Ea,de=Et}if(je.done)return n(A,de),He&&qa(A,ye),le;if(de===null){for(;!je.done;ye++,je=C.next())je=G(A,je.value,Y),je!==null&&(O=o(je,O,ye),De===null?le=je:De.sibling=je,De=je);return He&&qa(A,ye),le}for(de=a(de);!je.done;ye++,je=C.next())je=L(de,A,ye,je.value,Y),je!==null&&(e&&je.alternate!==null&&de.delete(je.key===null?ye:je.key),O=o(je,O,ye),De===null?le=je:De.sibling=je,De=je);return e&&de.forEach(function(Lv){return t(A,Lv)}),He&&qa(A,ye),le}function Ve(A,O,C,Y){if(typeof C=="object"&&C!==null&&C.type===z&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case M:e:{for(var le=C.key;O!==null;){if(O.key===le){if(le=C.type,le===z){if(O.tag===7){n(A,O.sibling),Y=r(O,C.props.children),Y.return=A,A=Y;break e}}else if(O.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ne&&md(le)===O.type){n(A,O.sibling),Y=r(O,C.props),Sr(Y,C),Y.return=A,A=Y;break e}n(A,O);break}else t(A,O);O=O.sibling}C.type===z?(Y=Ha(C.props.children,A.mode,Y,C.key),Y.return=A,A=Y):(Y=Di(C.type,C.key,C.props,null,A.mode,Y),Sr(Y,C),Y.return=A,A=Y)}return f(A);case T:e:{for(le=C.key;O!==null;){if(O.key===le)if(O.tag===4&&O.stateNode.containerInfo===C.containerInfo&&O.stateNode.implementation===C.implementation){n(A,O.sibling),Y=r(O,C.children||[]),Y.return=A,A=Y;break e}else{n(A,O);break}else t(A,O);O=O.sibling}Y=xu(C,A.mode,Y),Y.return=A,A=Y}return f(A);case ne:return le=C._init,C=le(C._payload),Ve(A,O,C,Y)}if(I(C))return xe(A,O,C,Y);if(Ae(C)){if(le=Ae(C),typeof le!="function")throw Error(c(150));return C=le.call(C),be(A,O,C,Y)}if(typeof C.then=="function")return Ve(A,O,Gi(C),Y);if(C.$$typeof===J)return Ve(A,O,_i(A,C),Y);Qi(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,O!==null&&O.tag===6?(n(A,O.sibling),Y=r(O,C),Y.return=A,A=Y):(n(A,O),Y=yu(C,A.mode,Y),Y.return=A,A=Y),f(A)):n(A,O)}return function(A,O,C,Y){try{xr=0;var le=Ve(A,O,C,Y);return Rl=null,le}catch(de){if(de===fr||de===Ni)throw de;var De=Yt(29,de,null,A.mode);return De.lanes=Y,De.return=A,De}}}var Dl=pd(!0),vd=pd(!1),nn=X(null),En=null;function oa(e){var t=e.alternate;$(mt,mt.current&1),$(nn,e),En===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(En=e)}function bd(e){if(e.tag===22){if($(mt,mt.current),$(nn,e),En===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(En=e)}}else ua()}function ua(){$(mt,mt.current),$(nn,nn.current)}function Yn(e){W(nn),En===e&&(En=null),W(mt)}var mt=X(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Xc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Iu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:g({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Zt(),r=la(a);r.payload=t,n!=null&&(r.callback=n),t=ra(e,r,a),t!==null&&(Vt(t,e,a),hr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Zt(),r=la(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=ra(e,r,a),t!==null&&(Vt(t,e,a),hr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),a=la(n);a.tag=2,t!=null&&(a.callback=t),t=ra(e,a,n),t!==null&&(Vt(t,e,n),hr(t,e,n))}};function gd(e,t,n,a,r,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,f):t.prototype&&t.prototype.isPureReactComponent?!ar(n,a)||!ar(r,o):!0}function yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ec.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=g({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xd(e){Vi(e)}function Sd(e){console.error(e)}function Ed(e){Vi(e)}function Pi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Od(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function tc(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){Pi(e,t)},n}function Td(e){return e=la(e),e.tag=3,e}function Rd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Od(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Od(t,n,a),typeof r!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function Lp(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ur(t,n,r,!0),n=nn.current,n!==null){switch(n.tag){case 13:return En===null?Rc():n.alternate===null&&at===0&&(at=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===_u?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Mc(e,a,r)),!1;case 22:return n.flags|=65536,a===_u?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Mc(e,a,r)),!1}throw Error(c(435,n.tag))}return Mc(e,a,r),Rc(),!1}if(He)return t=nn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Ou&&(e=Error(c(422),{cause:a}),or(Wt(e,n)))):(a!==Ou&&(t=Error(c(423),{cause:a}),or(Wt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Wt(a,n),r=tc(e.stateNode,a,r),Cu(e,r),at!==4&&(at=2)),!1;var o=Error(c(520),{cause:a});if(o=Wt(o,n),Ar===null?Ar=[o]:Ar.push(o),at!==4&&(at=2),t===null)return!0;a=Wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=tc(n.stateNode,a,e),Cu(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ma===null||!ma.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Td(r),Rd(r,e,n,a),Cu(n,r),!1}n=n.return}while(n!==null);return!1}var Dd=Error(c(461)),xt=!1;function Tt(e,t,n,a){t.child=e===null?vd(t,null,n,a):Dl(t,e.child,n,a)}function Md(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var f={};for(var p in a)p!=="ref"&&(f[p]=a[p])}else f=a;return Ga(t),a=Lu(e,t,n,f,o,r),p=qu(),e!==null&&!xt?(Bu(e,t,r),Xn(e,t,r)):(He&&p&&Su(t),t.flags|=1,Tt(e,t,a,r),t.child)}function Ad(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!gu(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,zd(e,t,o,a,r)):(e=Di(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!cc(e,r)){var f=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(f,a)&&e.ref===t.ref)return Xn(e,t,r)}return t.flags|=1,e=Un(o,a),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(ar(o,a)&&e.ref===t.ref)if(xt=!1,t.pendingProps=a=o,cc(e,r))(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,Xn(e,t,r)}return nc(e,t,n,a,r)}function _d(e,t,n){var a=t.pendingProps,r=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return wd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wi(t,o!==null?o.cachePool:null),o!==null?zf(t,o):Uu(),bd(t);else return t.lanes=t.childLanes=536870912,wd(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(wi(t,o.cachePool),zf(t,o),ua(),t.memoizedState=null):(e!==null&&wi(t,null),Uu(),ua());return Tt(e,t,r,n),t.child}function wd(e,t,n,a){var r=zu();return r=r===null?null:{parent:ht._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&wi(t,null),Uu(),bd(t),e!==null&&ur(e,t,a,!0),null}function Ki(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function nc(e,t,n,a,r){return Ga(t),n=Lu(e,t,n,a,void 0,r),a=qu(),e!==null&&!xt?(Bu(e,t,r),Xn(e,t,r)):(He&&a&&Su(t),t.flags|=1,Tt(e,t,n,r),t.child)}function Nd(e,t,n,a,r,o){return Ga(t),t.updateQueue=null,n=wf(t,a,n,r),_f(e),a=qu(),e!==null&&!xt?(Bu(e,t,o),Xn(e,t,o)):(He&&a&&Su(t),t.flags|=1,Tt(e,t,n,o),t.child)}function Cd(e,t,n,a,r){if(Ga(t),t.stateNode===null){var o=vl,f=n.contextType;typeof f=="object"&&f!==null&&(o=Mt(f)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},wu(t),f=n.contextType,o.context=typeof f=="object"&&f!==null?Mt(f):vl,o.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Iu(t,n,f,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&ec.enqueueReplaceState(o,o.state,null),pr(t,a,o,r),mr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,x=Va(n,p);o.props=x;var k=o.context,B=n.contextType;f=vl,typeof B=="object"&&B!==null&&(f=Mt(B));var G=n.getDerivedStateFromProps;B=typeof G=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,B||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||k!==f)&&yd(t,o,a,f),aa=!1;var j=t.memoizedState;o.state=j,pr(t,a,o,r),mr(),k=t.memoizedState,p||j!==k||aa?(typeof G=="function"&&(Iu(t,n,G,a),k=t.memoizedState),(x=aa||gd(t,n,x,a,j,k,f))?(B||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=k),o.props=a,o.state=k,o.context=f,a=x):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Nu(e,t),f=t.memoizedProps,B=Va(n,f),o.props=B,G=t.pendingProps,j=o.context,k=n.contextType,x=vl,typeof k=="object"&&k!==null&&(x=Mt(k)),p=n.getDerivedStateFromProps,(k=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==G||j!==x)&&yd(t,o,a,x),aa=!1,j=t.memoizedState,o.state=j,pr(t,a,o,r),mr();var L=t.memoizedState;f!==G||j!==L||aa||e!==null&&e.dependencies!==null&&zi(e.dependencies)?(typeof p=="function"&&(Iu(t,n,p,a),L=t.memoizedState),(B=aa||gd(t,n,B,a,j,L,x)||e!==null&&e.dependencies!==null&&zi(e.dependencies))?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,L,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,L,x)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=L),o.props=a,o.state=L,o.context=x,a=B):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Ki(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=Dl(t,e.child,null,r),t.child=Dl(t,null,n,r)):Tt(e,t,n,r),t.memoizedState=o.state,e=t.child):e=Xn(e,t,r),e}function kd(e,t,n,a){return ir(),t.flags|=256,Tt(e,t,n,a),t.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Sf()}}function rc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=an),e}function Ud(e,t,n){var a=t.pendingProps,r=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(mt.current&2)!==0),f&&(r=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(r?oa(t):ua(),He){var p=nt,x;if(x=p){e:{for(x=p,p=Sn;x.nodeType!==8;){if(!p){p=null;break e}if(x=fn(x.nextSibling),x===null){p=null;break e}}p=x}p!==null?(t.memoizedState={dehydrated:p,treeContext:La!==null?{id:jn,overflow:Hn}:null,retryLane:536870912,hydrationErrors:null},x=Yt(18,null,null,0),x.stateNode=p,x.return=t,t.child=x,Nt=t,nt=null,x=!0):x=!1}x||Ya(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Xc(p)?t.lanes=32:t.lanes=536870912,null;Yn(t)}return p=a.children,a=a.fallback,r?(ua(),r=t.mode,p=Ji({mode:"hidden",children:p},r),a=Ha(a,r,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,r=t.child,r.memoizedState=lc(n),r.childLanes=rc(e,f,n),t.memoizedState=ac,a):(oa(t),ic(t,p))}if(x=e.memoizedState,x!==null&&(p=x.dehydrated,p!==null)){if(o)t.flags&256?(oa(t),t.flags&=-257,t=oc(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),r=a.fallback,p=t.mode,a=Ji({mode:"visible",children:a.children},p),r=Ha(r,p,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Dl(t,e.child,null,n),a=t.child,a.memoizedState=lc(n),a.childLanes=rc(e,f,n),t.memoizedState=ac,t=r);else if(oa(t),Xc(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var k=f.dgst;f=k,a=Error(c(419)),a.stack="",a.digest=f,or({value:a,source:null,stack:null}),t=oc(e,t,n)}else if(xt||ur(e,t,n,!1),f=(n&e.childLanes)!==0,xt||f){if(f=Je,f!==null&&(a=n&-n,a=(a&42)!==0?1:rl(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==x.retryLane))throw x.retryLane=a,pl(e,a),Vt(f,e,a),Dd;p.data==="$?"||Rc(),t=oc(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,nt=fn(p.nextSibling),Nt=t,He=!0,Ba=null,Sn=!1,e!==null&&(en[tn++]=jn,en[tn++]=Hn,en[tn++]=La,jn=e.id,Hn=e.overflow,La=t),t=ic(t,a.children),t.flags|=4096);return t}return r?(ua(),r=a.fallback,p=t.mode,x=e.child,k=x.sibling,a=Un(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,k!==null?r=Un(k,r):(r=Ha(r,p,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,p=e.child.memoizedState,p===null?p=lc(n):(x=p.cachePool,x!==null?(k=ht._currentValue,x=x.parent!==k?{parent:k,pool:k}:x):x=Sf(),p={baseLanes:p.baseLanes|n,cachePool:x}),r.memoizedState=p,r.childLanes=rc(e,f,n),t.memoizedState=ac,a):(oa(t),n=e.child,e=n.sibling,n=Un(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function ic(e,t){return t=Ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ji(e,t){return e=Yt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function oc(e,t,n){return Dl(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ru(e.return,t,n)}function uc(e,t,n,a,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=r)}function Hd(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;if(Tt(e,t,a.children,n),a=mt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,t);else if(e.tag===19)jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch($(mt,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),uc(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Zi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}uc(t,!0,n,null,o);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ur(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&zi(e)))}function qp(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),na(t,ht,e.memoizedState.cache),ir();break;case 27:case 5:Zl(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(oa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ud(e,t,n):(oa(t),e=Xn(e,t,n),e!==null?e.sibling:null);oa(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ur(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Hd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(mt,mt.current),a)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n);case 24:na(t,ht,e.memoizedState.cache)}return Xn(e,t,n)}function Ld(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)xt=!0;else{if(!cc(e,n)&&(t.flags&128)===0)return xt=!1,qp(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,He&&(t.flags&1048576)!==0&&mf(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")gu(a)?(e=Va(a,e),t.tag=1,t=Cd(null,t,a,e,n)):(t.tag=0,t=nc(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===Se){t.tag=11,t=Md(null,t,a,e,n);break e}else if(r===U){t.tag=14,t=Ad(null,t,a,e,n);break e}}throw t=Ye(a)||a,Error(c(306,t,""))}}return t;case 0:return nc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Va(a,t.pendingProps),Cd(e,t,a,r,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,Nu(e,t),pr(t,a,null,n);var f=t.memoizedState;if(a=f.cache,na(t,ht,a),a!==o.cache&&Du(t,[ht],n,!0),mr(),a=f.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=kd(e,t,a,n);break e}else if(a!==r){r=Wt(Error(c(424)),t),or(r),t=kd(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nt=fn(e.firstChild),Nt=t,He=!0,Ba=null,Sn=!0,n=vd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),a===r){t=Xn(e,t,n);break e}Tt(e,t,a,n)}t=t.child}return t;case 26:return Ki(e,t),e===null?(n=Xh(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(n=t.type,e=t.pendingProps,a=co(pe.current).createElement(n),a[gt]=t,a[y]=e,Dt(a,n,e),ve(a),t.stateNode=a):t.memoizedState=Xh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&He&&(a=t.stateNode=qh(t.type,t.pendingProps,pe.current),Nt=t,Sn=!0,r=nt,ba(t.type)?(Gc=r,nt=fn(a.firstChild)):nt=r),Tt(e,t,t.pendingProps.children,n),Ki(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((r=a=nt)&&(a=hv(a,t.type,t.pendingProps,Sn),a!==null?(t.stateNode=a,Nt=t,nt=fn(a.firstChild),Sn=!1,r=!0):r=!1),r||Ya(t)),Zl(t),r=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,a=o.children,qc(r,o)?a=null:f!==null&&qc(r,f)&&(t.flags|=32),t.memoizedState!==null&&(r=Lu(e,t,wp,null,null,n),Hr._currentValue=r),Ki(e,t),Tt(e,t,a,n),t.child;case 6:return e===null&&He&&((e=n=nt)&&(n=mv(n,t.pendingProps,Sn),n!==null?(t.stateNode=n,Nt=t,nt=null,e=!0):e=!1),e||Ya(t)),null;case 13:return Ud(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Dl(t,null,a,n):Tt(e,t,a,n),t.child;case 11:return Md(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,na(t,t.type,a.value),Tt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Ga(t),r=Mt(r),a=a(r),t.flags|=1,Tt(e,t,a,n),t.child;case 14:return Ad(e,t,t.type,t.pendingProps,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 19:return Hd(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Ji(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Un(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return _d(e,t,n);case 24:return Ga(t),a=Mt(ht),e===null?(r=zu(),r===null&&(r=Je,o=Mu(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},wu(t),na(t,ht,r)):((e.lanes&n)!==0&&(Nu(e,t),pr(t,null,null,n),mr()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),na(t,ht,a)):(a=o.cache,na(t,ht,a),a!==r.cache&&Du(t,[ht],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Gn(e){e.flags|=4}function qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ph(t)){if(t=nn.current,t!==null&&((ke&4194048)===ke?En!==null:(ke&62914560)!==ke&&(ke&536870912)===0||t!==En))throw dr=_u,Ef;e.flags|=8192}}function $i(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_a():536870912,e.lanes|=t,_l|=t)}function Er(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Bp(e,t,n){var a=t.pendingProps;switch(Eu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qn(ht),pn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Gn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bf())),et(t),null;case 26:return n=t.memoizedState,e===null?(Gn(t),n!==null?(et(t),qd(t,n)):(et(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Gn(t),et(t),qd(t,n)):(et(t),t.flags&=-16777217):(e.memoizedProps!==a&&Gn(t),et(t),t.flags&=-16777217),null;case 27:el(t),n=pe.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return et(t),null}e=ae.current,rr(t)?pf(t):(e=qh(r,a,n),t.stateNode=e,Gn(t))}return et(t),null;case 5:if(el(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Gn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return et(t),null}if(e=ae.current,rr(t))pf(t);else{switch(r=co(pe.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[gt]=t,e[y]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Dt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gn(t)}}return et(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Gn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=pe.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=Nt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Nh(e.nodeValue,n)),e||Ya(t)}else e=co(e).createTextNode(a),e[gt]=t,t.stateNode=e}return et(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=rr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[gt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),r=!1}else r=bf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Yn(t),t):(Yn(t),null)}if(Yn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$i(t,t.updateQueue),et(t),null;case 4:return pn(),e===null&&kc(t.stateNode.containerInfo),et(t),null;case 10:return qn(t.type),et(t),null;case 19:if(W(mt),r=t.memoizedState,r===null)return et(t),null;if(a=(t.flags&128)!==0,o=r.rendering,o===null)if(a)Er(r,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Zi(e),o!==null){for(t.flags|=128,Er(r,!1),e=o.updateQueue,t.updateQueue=e,$i(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hf(n,e),n=n.sibling;return $(mt,mt.current&1|2),t.child}e=e.sibling}r.tail!==null&&$t()>Ii&&(t.flags|=128,a=!0,Er(r,!1),t.lanes=4194304)}else{if(!a)if(e=Zi(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,$i(t,e),Er(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!He)return et(t),null}else 2*$t()-r.renderingStartTime>Ii&&n!==536870912&&(t.flags|=128,a=!0,Er(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=$t(),t.sibling=null,e=mt.current,$(mt,a?e&1|2:e&1),t):(et(t),null);case 22:case 23:return Yn(t),ju(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),n=t.updateQueue,n!==null&&$i(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&W(Qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qn(ht),et(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Yp(e,t){switch(Eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(ht),pn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return el(t),null;case 13:if(Yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(mt),null;case 4:return pn(),null;case 10:return qn(t.type),null;case 22:case 23:return Yn(t),ju(),e!==null&&W(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(ht),null;case 25:return null;default:return null}}function Bd(e,t){switch(Eu(t),t.tag){case 3:qn(ht),pn();break;case 26:case 27:case 5:el(t);break;case 4:pn();break;case 13:Yn(t);break;case 19:W(mt);break;case 10:qn(t.type);break;case 22:case 23:Yn(t),ju(),e!==null&&W(Qa);break;case 24:qn(ht)}}function Or(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,f=n.inst;a=o(),f.destroy=a}n=n.next}while(n!==r)}}catch(p){Pe(t,t.return,p)}}function ca(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var f=a.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,r=t;var x=n,k=p;try{k()}catch(B){Pe(r,x,B)}}}a=a.next}while(a!==o)}}catch(B){Pe(t,t.return,B)}}function Yd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Af(t,n)}catch(a){Pe(e,e.return,a)}}}function Xd(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Pe(e,t,a)}}function Tr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Pe(e,t,r)}}function On(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Pe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Gd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Pe(e,e.return,r)}}function sc(e,t,n){try{var a=e.stateNode;uv(a,e.type,n,t),a[y]=t}catch(r){Pe(e,e.return,r)}}function Qd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}function Fi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Zd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Dt(t,a,n),t[gt]=e,t[y]=n}catch(o){Pe(e,e.return,o)}}var Qn=!1,it=!1,hc=!1,Vd=typeof WeakSet=="function"?WeakSet:Set,St=null;function Xp(e,t){if(e=e.containerInfo,Hc=vo,e=nf(e),fu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var f=0,p=-1,x=-1,k=0,B=0,G=e,j=null;t:for(;;){for(var L;G!==n||r!==0&&G.nodeType!==3||(p=f+r),G!==o||a!==0&&G.nodeType!==3||(x=f+a),G.nodeType===3&&(f+=G.nodeValue.length),(L=G.firstChild)!==null;)j=G,G=L;for(;;){if(G===e)break t;if(j===n&&++k===r&&(p=f),j===o&&++B===a&&(x=f),(L=G.nextSibling)!==null)break;G=j,j=G.parentNode}G=L}n=p===-1||x===-1?null:{start:p,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lc={focusedElem:e,selectionRange:n},vo=!1,St=t;St!==null;)if(t=St,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,St=e;else for(;St!==null;){switch(t=St,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var xe=Va(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(xe,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(be){Pe(n,n.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,St=e;break}St=t.return}}function Pd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:sa(e,n),a&4&&Or(5,n);break;case 1:if(sa(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Pe(n,n.return,f)}else{var r=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Pe(n,n.return,f)}}a&64&&Yd(n),a&512&&Tr(n,n.return);break;case 3:if(sa(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Af(e,t)}catch(f){Pe(n,n.return,f)}}break;case 27:t===null&&a&4&&Zd(n);case 26:case 5:sa(e,n),t===null&&a&4&&Gd(n),a&512&&Tr(n,n.return);break;case 12:sa(e,n);break;case 13:sa(e,n),a&4&&$d(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Fp.bind(null,n),pv(e,n))));break;case 22:if(a=n.memoizedState!==null||Qn,!a){t=t!==null&&t.memoizedState!==null||it,r=Qn;var o=it;Qn=a,(it=t)&&!o?fa(e,n,(n.subtreeFlags&8772)!==0):sa(e,n),Qn=r,it=o}break;case 30:break;default:sa(e,n)}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&re(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,jt=!1;function Zn(e,t,n){for(n=n.child;n!==null;)Jd(e,t,n),n=n.sibling}function Jd(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Fn,n)}catch{}switch(n.tag){case 26:it||On(n,t),Zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:it||On(n,t);var a=Fe,r=jt;ba(n.type)&&(Fe=n.stateNode,jt=!1),Zn(e,t,n),Cr(n.stateNode),Fe=a,jt=r;break;case 5:it||On(n,t);case 6:if(a=Fe,r=jt,Fe=null,Zn(e,t,n),Fe=a,jt=r,Fe!==null)if(jt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(o){Pe(n,t,o)}else try{Fe.removeChild(n.stateNode)}catch(o){Pe(n,t,o)}break;case 18:Fe!==null&&(jt?(e=Fe,Hh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yr(e)):Hh(Fe,n.stateNode));break;case 4:a=Fe,r=jt,Fe=n.stateNode.containerInfo,jt=!0,Zn(e,t,n),Fe=a,jt=r;break;case 0:case 11:case 14:case 15:it||ca(2,n,t),it||ca(4,n,t),Zn(e,t,n);break;case 1:it||(On(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Xd(n,t,a)),Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:it=(a=it)||n.memoizedState!==null,Zn(e,t,n),it=a;break;default:Zn(e,t,n)}}function $d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(n){Pe(t,t.return,n)}}function Gp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vd),t;default:throw Error(c(435,e.tag))}}function mc(e,t){var n=Gp(e);t.forEach(function(a){var r=Wp.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function Xt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],o=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(ba(p.type)){Fe=p.stateNode,jt=!1;break e}break;case 5:Fe=p.stateNode,jt=!1;break e;case 3:case 4:Fe=p.stateNode.containerInfo,jt=!0;break e}p=p.return}if(Fe===null)throw Error(c(160));Jd(o,f,r),Fe=null,jt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}var sn=null;function Fd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xt(t,e),Gt(e),a&4&&(ca(3,e,e.return),Or(3,e),ca(5,e,e.return));break;case 1:Xt(t,e),Gt(e),a&512&&(it||n===null||On(n,n.return)),a&64&&Qn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=sn;if(Xt(t,e),Gt(e),a&512&&(it||n===null||On(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":o=r.getElementsByTagName("title")[0],(!o||o[te]||o[gt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),Dt(o,a,n),o[gt]=e,ve(o),a=o;break e;case"link":var f=Zh("link","href",r).get(a+(n.href||""));if(f){for(var p=0;p<f.length;p++)if(o=f[p],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(p,1);break t}}o=r.createElement(a),Dt(o,a,n),r.head.appendChild(o);break;case"meta":if(f=Zh("meta","content",r).get(a+(n.content||""))){for(p=0;p<f.length;p++)if(o=f[p],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(p,1);break t}}o=r.createElement(a),Dt(o,a,n),r.head.appendChild(o);break;default:throw Error(c(468,a))}o[gt]=e,ve(o),a=o}e.stateNode=a}else Vh(r,e.type,e.stateNode);else e.stateNode=Qh(r,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?Vh(r,e.type,e.stateNode):Qh(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&sc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Xt(t,e),Gt(e),a&512&&(it||n===null||On(n,n.return)),n!==null&&a&4&&sc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Xt(t,e),Gt(e),a&512&&(it||n===null||On(n,n.return)),e.flags&32){r=e.stateNode;try{ul(r,"")}catch(L){Pe(e,e.return,L)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,sc(e,r,n!==null?n.memoizedProps:r)),a&1024&&(hc=!0);break;case 6:if(Xt(t,e),Gt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(L){Pe(e,e.return,L)}}break;case 3:if(ho=null,r=sn,sn=so(t.containerInfo),Xt(t,e),sn=r,Gt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(L){Pe(e,e.return,L)}hc&&(hc=!1,Wd(e));break;case 4:a=sn,sn=so(e.stateNode.containerInfo),Xt(t,e),Gt(e),sn=a;break;case 12:Xt(t,e),Gt(e);break;case 13:Xt(t,e),Gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xc=$t()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mc(e,a)));break;case 22:r=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,k=Qn,B=it;if(Qn=k||r,it=B||x,Xt(t,e),it=B,Qn=k,Gt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||x||Qn||it||Pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(o=x.stateNode,r)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=x.stateNode;var G=x.memoizedProps.style,j=G!=null&&G.hasOwnProperty("display")?G.display:null;p.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(L){Pe(x,x.return,L)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=r?"":x.memoizedProps}catch(L){Pe(x,x.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,mc(e,n))));break;case 19:Xt(t,e),Gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mc(e,a)));break;case 30:break;case 21:break;default:Xt(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Qd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,o=fc(e);Fi(e,o,r);break;case 5:var f=n.stateNode;n.flags&32&&(ul(f,""),n.flags&=-33);var p=fc(e);Fi(e,p,f);break;case 3:case 4:var x=n.stateNode.containerInfo,k=fc(e);dc(e,k,x);break;default:throw Error(c(161))}}catch(B){Pe(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pd(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Pa(t);break;case 1:On(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xd(t,t.return,n),Pa(t);break;case 27:Cr(t.stateNode);case 26:case 5:On(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function fa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:fa(r,o,n),Or(4,o);break;case 1:if(fa(r,o,n),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(k){Pe(a,a.return,k)}if(a=o,r=a.updateQueue,r!==null){var p=a.stateNode;try{var x=r.shared.hiddenCallbacks;if(x!==null)for(r.shared.hiddenCallbacks=null,r=0;r<x.length;r++)Mf(x[r],p)}catch(k){Pe(a,a.return,k)}}n&&f&64&&Yd(o),Tr(o,o.return);break;case 27:Zd(o);case 26:case 5:fa(r,o,n),n&&a===null&&f&4&&Gd(o),Tr(o,o.return);break;case 12:fa(r,o,n);break;case 13:fa(r,o,n),n&&f&4&&$d(r,o);break;case 22:o.memoizedState===null&&fa(r,o,n),Tr(o,o.return);break;case 30:break;default:fa(r,o,n)}t=t.sibling}}function pc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cr(n))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e))}function Tn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,n,a),t=t.sibling}function Id(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Tn(e,t,n,a),r&2048&&Or(9,t);break;case 1:Tn(e,t,n,a);break;case 3:Tn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e)));break;case 12:if(r&2048){Tn(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,p=o.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Pe(t,t.return,x)}}else Tn(e,t,n,a);break;case 13:Tn(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?Tn(e,t,n,a):Rr(e,t):o._visibility&2?Tn(e,t,n,a):(o._visibility|=2,Ml(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&pc(f,t);break;case 24:Tn(e,t,n,a),r&2048&&vc(t.alternate,t);break;default:Tn(e,t,n,a)}}function Ml(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,p=n,x=a,k=f.flags;switch(f.tag){case 0:case 11:case 15:Ml(o,f,p,x,r),Or(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?Ml(o,f,p,x,r):Rr(o,f):(B._visibility|=2,Ml(o,f,p,x,r)),r&&k&2048&&pc(f.alternate,f);break;case 24:Ml(o,f,p,x,r),r&&k&2048&&vc(f.alternate,f);break;default:Ml(o,f,p,x,r)}t=t.sibling}}function Rr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:Rr(n,a),r&2048&&pc(a.alternate,a);break;case 24:Rr(n,a),r&2048&&vc(a.alternate,a);break;default:Rr(n,a)}t=t.sibling}}var Dr=8192;function Al(e){if(e.subtreeFlags&Dr)for(e=e.child;e!==null;)eh(e),e=e.sibling}function eh(e){switch(e.tag){case 26:Al(e),e.flags&Dr&&e.memoizedState!==null&&Av(sn,e.memoizedState,e.memoizedProps);break;case 5:Al(e);break;case 3:case 4:var t=sn;sn=so(e.stateNode.containerInfo),Al(e),sn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Dr,Dr=16777216,Al(e),Dr=t):Al(e));break;default:Al(e)}}function th(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];St=a,ah(a,e)}th(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nh(e),e=e.sibling}function nh(e){switch(e.tag){case 0:case 11:case 15:Mr(e),e.flags&2048&&ca(9,e,e.return);break;case 3:Mr(e);break;case 12:Mr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wi(e)):Mr(e);break;default:Mr(e)}}function Wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];St=a,ah(a,e)}th(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Wi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wi(t));break;default:Wi(t)}e=e.sibling}}function ah(e,t){for(;St!==null;){var n=St;switch(n.tag){case 0:case 11:case 15:ca(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,St=a;else e:for(n=e;St!==null;){a=St;var r=a.sibling,o=a.return;if(Kd(a),a===n){St=null;break e}if(r!==null){r.return=o,St=r;break e}St=o}}}var Qp={getCacheForType:function(e){var t=Mt(ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Zp=typeof WeakMap=="function"?WeakMap:Map,Xe=0,Je=null,_e=null,ke=0,Ge=0,Qt=null,da=!1,zl=!1,bc=!1,Vn=0,at=0,ha=0,Ka=0,gc=0,an=0,_l=0,Ar=null,Ht=null,yc=!1,xc=0,Ii=1/0,eo=null,ma=null,Rt=0,pa=null,wl=null,Nl=0,Sc=0,Ec=null,lh=null,zr=0,Oc=null;function Zt(){if((Xe&2)!==0&&ke!==0)return ke&-ke;if(N.T!==null){var e=yl;return e!==0?e:_c()}return wa()}function rh(){an===0&&(an=(ke&536870912)===0||He?Kl():536870912);var e=nn.current;return e!==null&&(e.flags|=32),an}function Vt(e,t,n){(e===Je&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),va(e,ke,an,!1)),wn(e,n),((Xe&2)===0||e!==Je)&&(e===Je&&((Xe&2)===0&&(Ka|=n),at===4&&va(e,ke,an,!1)),Rn(e))}function ih(e,t,n){if((Xe&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Wn(e,t),r=a?Kp(e,t):Dc(e,t,!0),o=a;do{if(r===0){zl&&!a&&va(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Vp(n)){r=Dc(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;r=Ar;var x=p.current.memoizedState.isDehydrated;if(x&&(Cl(p,f).flags|=256),f=Dc(p,f,!1),f!==2){if(bc&&!x){p.errorRecoveryDisabledLanes|=o,Ka|=o,r=4;break e}o=Ht,Ht=r,o!==null&&(Ht===null?Ht=o:Ht.push.apply(Ht,o))}r=f}if(o=!1,r!==2)continue}}if(r===1){Cl(e,0),va(e,t,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:va(a,t,an,!da);break e;case 2:Ht=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=xc+300-$t(),10<r)){if(va(a,t,an,!da),za(a,0,!0)!==0)break e;a.timeoutHandle=Uh(oh.bind(null,a,n,Ht,eo,yc,t,an,Ka,_l,da,o,2,-0,0),r);break e}oh(a,n,Ht,eo,yc,t,an,Ka,_l,da,o,0,-0,0)}}break}while(!0);Rn(e)}function oh(e,t,n,a,r,o,f,p,x,k,B,G,j,L){if(e.timeoutHandle=-1,G=t.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(jr={stylesheets:null,count:0,unsuspend:Mv},eh(t),G=zv(),G!==null)){e.cancelPendingCommit=G(mh.bind(null,e,t,o,n,a,r,f,p,x,B,1,j,L)),va(e,o,f,!k);return}mh(e,t,o,n,a,r,f,p,x)}function Vp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!Bt(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,n,a){t&=~gc,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-Ie(r),f=1<<o;a[o]=-1,r&=~f}n!==0&&Jl(e,n,t)}function to(){return(Xe&6)===0?(_r(0),!1):!0}function Tc(){if(_e!==null){if(Ge===0)var e=_e.return;else e=_e,Ln=Xa=null,Yu(e),Rl=null,xr=0,e=_e;for(;e!==null;)Bd(e.alternate,e),e=e.return;_e=null}}function Cl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Tc(),Je=e,_e=n=Un(e.current,null),ke=t,Ge=0,Qt=null,da=!1,zl=Wn(e,t),bc=!1,_l=an=gc=Ka=ha=at=0,Ht=Ar=null,yc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-Ie(a),o=1<<r;t|=e[r],a&=~o}return Vn=t,Oi(),n}function uh(e,t){Te=null,N.H=Xi,t===fr||t===Ni?(t=Rf(),Ge=3):t===Ef?(t=Rf(),Ge=4):Ge=t===Dd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,_e===null&&(at=1,Pi(e,Wt(t,e.current)))}function ch(){var e=N.H;return N.H=Xi,e===null?Xi:e}function sh(){var e=N.A;return N.A=Qp,e}function Rc(){at=4,da||(ke&4194048)!==ke&&nn.current!==null||(zl=!0),(ha&134217727)===0&&(Ka&134217727)===0||Je===null||va(Je,ke,an,!1)}function Dc(e,t,n){var a=Xe;Xe|=2;var r=ch(),o=sh();(Je!==e||ke!==t)&&(eo=null,Cl(e,t)),t=!1;var f=at;e:do try{if(Ge!==0&&_e!==null){var p=_e,x=Qt;switch(Ge){case 8:Tc(),f=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(t=!0);var k=Ge;if(Ge=0,Qt=null,kl(e,p,x,k),n&&zl){f=0;break e}break;default:k=Ge,Ge=0,Qt=null,kl(e,p,x,k)}}Pp(),f=at;break}catch(B){uh(e,B)}while(!0);return t&&e.shellSuspendCounter++,Ln=Xa=null,Xe=a,N.H=r,N.A=o,_e===null&&(Je=null,ke=0,Oi()),f}function Pp(){for(;_e!==null;)fh(_e)}function Kp(e,t){var n=Xe;Xe|=2;var a=ch(),r=sh();Je!==e||ke!==t?(eo=null,Ii=$t()+500,Cl(e,t)):zl=Wn(e,t);e:do try{if(Ge!==0&&_e!==null){t=_e;var o=Qt;t:switch(Ge){case 1:Ge=0,Qt=null,kl(e,t,o,1);break;case 2:case 9:if(Of(o)){Ge=0,Qt=null,dh(t);break}t=function(){Ge!==2&&Ge!==9||Je!==e||(Ge=7),Rn(e)},o.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:Of(o)?(Ge=0,Qt=null,dh(t)):(Ge=0,Qt=null,kl(e,t,o,7));break;case 5:var f=null;switch(_e.tag){case 26:f=_e.memoizedState;case 5:case 27:var p=_e;if(!f||Ph(f)){Ge=0,Qt=null;var x=p.sibling;if(x!==null)_e=x;else{var k=p.return;k!==null?(_e=k,no(k)):_e=null}break t}}Ge=0,Qt=null,kl(e,t,o,5);break;case 6:Ge=0,Qt=null,kl(e,t,o,6);break;case 8:Tc(),at=6;break e;default:throw Error(c(462))}}Jp();break}catch(B){uh(e,B)}while(!0);return Ln=Xa=null,N.H=a,N.A=r,Xe=n,_e!==null?0:(Je=null,ke=0,Oi(),at)}function Jp(){for(;_e!==null&&!Qo();)fh(_e)}function fh(e){var t=Ld(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?no(e):_e=t}function dh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Nd(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=Nd(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:Yu(t);default:Bd(n,t),t=_e=hf(t,Vn),t=Ld(n,t,Vn)}e.memoizedProps=e.pendingProps,t===null?no(e):_e=t}function kl(e,t,n,a){Ln=Xa=null,Yu(t),Rl=null,xr=0;var r=t.return;try{if(Lp(e,r,t,n,ke)){at=1,Pi(e,Wt(n,e.current)),_e=null;return}}catch(o){if(r!==null)throw _e=r,o;at=1,Pi(e,Wt(n,e.current)),_e=null;return}t.flags&32768?(He||a===1?e=!0:zl||(ke&536870912)!==0?e=!1:(da=e=!0,(a===2||a===9||a===3||a===6)&&(a=nn.current,a!==null&&a.tag===13&&(a.flags|=16384))),hh(t,e)):no(t)}function no(e){var t=e;do{if((t.flags&32768)!==0){hh(t,da);return}e=t.return;var n=Bp(t.alternate,t,Vn);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);at===0&&(at=5)}function hh(e,t){do{var n=Yp(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);at=6,_e=null}function mh(e,t,n,a,r,o,f,p,x){e.cancelPendingCommit=null;do ao();while(Rt!==0);if((Xe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=vu,Jo(e,n,o,f,p,x),e===Je&&(_e=Je=null,ke=0),wl=t,pa=e,Nl=n,Sc=o,Ec=r,lh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ip(nl,function(){return yh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,r=Z.p,Z.p=2,f=Xe,Xe|=4;try{Xp(e,t,n)}finally{Xe=f,Z.p=r,N.T=a}}Rt=1,ph(),vh(),bh()}}function ph(){if(Rt===1){Rt=0;var e=pa,t=wl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var r=Xe;Xe|=4;try{Fd(t,e);var o=Lc,f=nf(e.containerInfo),p=o.focusedElem,x=o.selectionRange;if(f!==p&&p&&p.ownerDocument&&tf(p.ownerDocument.documentElement,p)){if(x!==null&&fu(p)){var k=x.start,B=x.end;if(B===void 0&&(B=k),"selectionStart"in p)p.selectionStart=k,p.selectionEnd=Math.min(B,p.value.length);else{var G=p.ownerDocument||document,j=G&&G.defaultView||window;if(j.getSelection){var L=j.getSelection(),xe=p.textContent.length,be=Math.min(x.start,xe),Ve=x.end===void 0?be:Math.min(x.end,xe);!L.extend&&be>Ve&&(f=Ve,Ve=be,be=f);var A=ef(p,be),O=ef(p,Ve);if(A&&O&&(L.rangeCount!==1||L.anchorNode!==A.node||L.anchorOffset!==A.offset||L.focusNode!==O.node||L.focusOffset!==O.offset)){var C=G.createRange();C.setStart(A.node,A.offset),L.removeAllRanges(),be>Ve?(L.addRange(C),L.extend(O.node,O.offset)):(C.setEnd(O.node,O.offset),L.addRange(C))}}}}for(G=[],L=p;L=L.parentNode;)L.nodeType===1&&G.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<G.length;p++){var Y=G[p];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}vo=!!Hc,Lc=Hc=null}finally{Xe=r,Z.p=a,N.T=n}}e.current=t,Rt=2}}function vh(){if(Rt===2){Rt=0;var e=pa,t=wl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var r=Xe;Xe|=4;try{Pd(e,t.alternate,t)}finally{Xe=r,Z.p=a,N.T=n}}Rt=3}}function bh(){if(Rt===4||Rt===3){Rt=0,zn();var e=pa,t=wl,n=Nl,a=lh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Rt=5:(Rt=0,wl=pa=null,gh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ma=null),In(n),t=t.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Fn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,r=Z.p,Z.p=2,N.T=null;try{for(var o=e.onRecoverableError,f=0;f<a.length;f++){var p=a[f];o(p.value,{componentStack:p.stack})}}finally{N.T=t,Z.p=r}}(Nl&3)!==0&&ao(),Rn(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===Oc?zr++:(zr=0,Oc=e):zr=0,_r(0)}}function gh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cr(t)))}function ao(e){return ph(),vh(),bh(),yh()}function yh(){if(Rt!==5)return!1;var e=pa,t=Sc;Sc=0;var n=In(Nl),a=N.T,r=Z.p;try{Z.p=32>n?32:n,N.T=null,n=Ec,Ec=null;var o=pa,f=Nl;if(Rt=0,wl=pa=null,Nl=0,(Xe&6)!==0)throw Error(c(331));var p=Xe;if(Xe|=4,nh(o.current),Id(o,o.current,f,n),Xe=p,_r(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Fn,o)}catch{}return!0}finally{Z.p=r,N.T=a,gh(e,t)}}function xh(e,t,n){t=Wt(n,t),t=tc(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(wn(e,2),Rn(e))}function Pe(e,t,n){if(e.tag===3)xh(e,e,n);else for(;t!==null;){if(t.tag===3){xh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ma===null||!ma.has(a))){e=Wt(n,e),n=Td(2),a=ra(t,n,2),a!==null&&(Rd(n,a,t,e),wn(a,2),Rn(a));break}}t=t.return}}function Mc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Zp;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(bc=!0,r.add(n),e=$p.bind(null,e,t,n),t.then(e,e))}function $p(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Je===e&&(ke&n)===n&&(at===4||at===3&&(ke&62914560)===ke&&300>$t()-xc?(Xe&2)===0&&Cl(e,0):gc|=n,_l===ke&&(_l=0)),Rn(e)}function Sh(e,t){t===0&&(t=_a()),e=pl(e,t),e!==null&&(wn(e,t),Rn(e))}function Fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sh(e,n)}function Wp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Sh(e,n)}function Ip(e,t){return vn(e,t)}var lo=null,Ul=null,Ac=!1,ro=!1,zc=!1,Ja=0;function Rn(e){e!==Ul&&e.next===null&&(Ul===null?lo=Ul=e:Ul=Ul.next=e),ro=!0,Ac||(Ac=!0,tv())}function _r(e,t){if(!zc&&ro){zc=!0;do for(var n=!1,a=lo;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var f=a.suspendedLanes,p=a.pingedLanes;o=(1<<31-Ie(42|e)+1)-1,o&=r&~(f&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Rh(a,o))}else o=ke,o=za(a,a===Je?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Wn(a,o)||(n=!0,Rh(a,o));a=a.next}while(n);zc=!1}}function ev(){Eh()}function Eh(){ro=Ac=!1;var e=0;Ja!==0&&(cv()&&(e=Ja),Ja=0);for(var t=$t(),n=null,a=lo;a!==null;){var r=a.next,o=Oh(a,t);o===0?(a.next=null,n===null?lo=r:n.next=r,r===null&&(Ul=n)):(n=a,(e!==0||(o&3)!==0)&&(ro=!0)),a=r}_r(e)}function Oh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-Ie(o),p=1<<f,x=r[f];x===-1?((p&n)===0||(p&a)!==0)&&(r[f]=Ko(p,t)):x<=t&&(e.expiredLanes|=p),o&=~p}if(t=Je,n=ke,n=za(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&tl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&tl(a),In(n)){case 2:case 8:n=ci;break;case 32:n=nl;break;case 268435456:n=si;break;default:n=nl}return a=Th.bind(null,e),n=vn(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&tl(a),e.callbackPriority=2,e.callbackNode=null,2}function Th(e,t){if(Rt!==0&&Rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ao()&&e.callbackNode!==n)return null;var a=ke;return a=za(e,e===Je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ih(e,a,t),Oh(e,$t()),e.callbackNode!=null&&e.callbackNode===n?Th.bind(null,e):null)}function Rh(e,t){if(ao())return null;ih(e,t,!0)}function tv(){fv(function(){(Xe&6)!==0?vn(Vl,ev):Eh()})}function _c(){return Ja===0&&(Ja=Kl()),Ja}function Dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function Mh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function nv(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var o=Dh((r[y]||null).action),f=a.submitter;f&&(t=(t=f[y]||null)?Dh(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var p=new xi("action","action",null,a,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ja!==0){var x=f?Mh(r,f):new FormData(r);$u(n,{pending:!0,data:x,method:r.method,action:o},null,x)}}else typeof o=="function"&&(p.preventDefault(),x=f?Mh(r,f):new FormData(r),$u(n,{pending:!0,data:x,method:r.method,action:o},o,x))},currentTarget:r}]})}}for(var wc=0;wc<pu.length;wc++){var Nc=pu[wc],av=Nc.toLowerCase(),lv=Nc[0].toUpperCase()+Nc.slice(1);cn(av,"on"+lv)}cn(rf,"onAnimationEnd"),cn(of,"onAnimationIteration"),cn(uf,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(Sp,"onTransitionRun"),cn(Ep,"onTransitionStart"),cn(Op,"onTransitionCancel"),cn(cf,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wr));function Ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var f=a.length-1;0<=f;f--){var p=a[f],x=p.instance,k=p.currentTarget;if(p=p.listener,x!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=k;try{o(r)}catch(B){Vi(B)}r.currentTarget=null,o=x}else for(f=0;f<a.length;f++){if(p=a[f],x=p.instance,k=p.currentTarget,p=p.listener,x!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=k;try{o(r)}catch(B){Vi(B)}r.currentTarget=null,o=x}}}}function we(e,t){var n=t[H];n===void 0&&(n=t[H]=new Set);var a=e+"__bubble";n.has(a)||(zh(t,e,2,!1),n.add(a))}function Cc(e,t,n){var a=0;t&&(a|=4),zh(n,e,a,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[io]){e[io]=!0,Ce.forEach(function(n){n!=="selectionchange"&&(rv.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Cc("selectionchange",!1,t))}}function zh(e,t,n,a){switch(Ih(t)){case 2:var r=Nv;break;case 8:r=Cv;break;default:r=Kc}n=r.bind(null,t,n,e),r=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Uc(e,t,n,a,r){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var p=a.stateNode.containerInfo;if(p===r)break;if(f===4)for(f=a.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===r)return;f=f.return}for(;p!==null;){if(f=ie(p),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){a=o=f;continue e}p=p.parentNode}}a=a.return}Us(function(){var k=o,B=eu(n),G=[];e:{var j=sf.get(e);if(j!==void 0){var L=xi,xe=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":L=I0;break;case"focusin":xe="focus",L=iu;break;case"focusout":xe="blur",L=iu;break;case"beforeblur":case"afterblur":L=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=np;break;case rf:case of:case uf:L=Q0;break;case cf:L=lp;break;case"scroll":case"scrollend":L=q0;break;case"wheel":L=ip;break;case"copy":case"cut":case"paste":L=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Bs;break;case"toggle":case"beforetoggle":L=up}var be=(t&4)!==0,Ve=!be&&(e==="scroll"||e==="scrollend"),A=be?j!==null?j+"Capture":null:j;be=[];for(var O=k,C;O!==null;){var Y=O;if(C=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||C===null||A===null||(Y=$l(O,A),Y!=null&&be.push(Nr(O,Y,C))),Ve)break;O=O.return}0<be.length&&(j=new L(j,xe,null,n,B),G.push({event:j,listeners:be}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",j&&n!==Io&&(xe=n.relatedTarget||n.fromElement)&&(ie(xe)||xe[D]))break e;if((L||j)&&(j=B.window===B?B:(j=B.ownerDocument)?j.defaultView||j.parentWindow:window,L?(xe=n.relatedTarget||n.toElement,L=k,xe=xe?ie(xe):null,xe!==null&&(Ve=d(xe),be=xe.tag,xe!==Ve||be!==5&&be!==27&&be!==6)&&(xe=null)):(L=null,xe=k),L!==xe)){if(be=Ls,Y="onMouseLeave",A="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(be=Bs,Y="onPointerLeave",A="onPointerEnter",O="pointer"),Ve=L==null?j:me(L),C=xe==null?j:me(xe),j=new be(Y,O+"leave",L,n,B),j.target=Ve,j.relatedTarget=C,Y=null,ie(B)===k&&(be=new be(A,O+"enter",xe,n,B),be.target=C,be.relatedTarget=Ve,Y=be),Ve=Y,L&&xe)t:{for(be=L,A=xe,O=0,C=be;C;C=jl(C))O++;for(C=0,Y=A;Y;Y=jl(Y))C++;for(;0<O-C;)be=jl(be),O--;for(;0<C-O;)A=jl(A),C--;for(;O--;){if(be===A||A!==null&&be===A.alternate)break t;be=jl(be),A=jl(A)}be=null}else be=null;L!==null&&_h(G,j,L,be,!1),xe!==null&&Ve!==null&&_h(G,Ve,xe,be,!0)}}e:{if(j=k?me(k):window,L=j.nodeName&&j.nodeName.toLowerCase(),L==="select"||L==="input"&&j.type==="file")var le=Ks;else if(Vs(j))if(Js)le=gp;else{le=vp;var De=pp}else L=j.nodeName,!L||L.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?k&&Wo(k.elementType)&&(le=Ks):le=bp;if(le&&(le=le(e,k))){Ps(G,le,n,B);break e}De&&De(e,j,k),e==="focusout"&&k&&j.type==="number"&&k.memoizedProps.value!=null&&Fo(j,"number",j.value)}switch(De=k?me(k):window,e){case"focusin":(Vs(De)||De.contentEditable==="true")&&(dl=De,du=k,lr=null);break;case"focusout":lr=du=dl=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,af(G,n,B);break;case"selectionchange":if(xp)break;case"keydown":case"keyup":af(G,n,B)}var de;if(uu)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else fl?Qs(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(Ys&&n.locale!=="ko"&&(fl||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&fl&&(de=js()):(ta=B,au="value"in ta?ta.value:ta.textContent,fl=!0)),De=oo(k,ye),0<De.length&&(ye=new qs(ye,e,null,n,B),G.push({event:ye,listeners:De}),de?ye.data=de:(de=Zs(n),de!==null&&(ye.data=de)))),(de=sp?fp(e,n):dp(e,n))&&(ye=oo(k,"onBeforeInput"),0<ye.length&&(De=new qs("onBeforeInput","beforeinput",null,n,B),G.push({event:De,listeners:ye}),De.data=de)),nv(G,e,k,n,B)}Ah(G,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=$l(e,n),r!=null&&a.unshift(Nr(e,r,o)),r=$l(e,t),r!=null&&a.push(Nr(e,r,o))),e.tag===3)return a;e=e.return}return[]}function jl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _h(e,t,n,a,r){for(var o=t._reactName,f=[];n!==null&&n!==a;){var p=n,x=p.alternate,k=p.stateNode;if(p=p.tag,x!==null&&x===a)break;p!==5&&p!==26&&p!==27||k===null||(x=k,r?(k=$l(n,o),k!=null&&f.unshift(Nr(n,k,x))):r||(k=$l(n,o),k!=null&&f.push(Nr(n,k,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var iv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function wh(e){return(typeof e=="string"?e:""+e).replace(iv,`
`).replace(ov,"")}function Nh(e,t){return t=wh(t),wh(e)===t}function uo(){}function Ze(e,t,n,a,r,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ul(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ul(e,""+a);break;case"className":wt(e,"class",a);break;case"tabIndex":wt(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,n,a);break;case"style":Cs(e,a,o);break;case"data":if(t!=="object"){wt(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",r.name,r,null),Ze(e,t,"formEncType",r.formEncType,r,null),Ze(e,t,"formMethod",r.formMethod,r,null),Ze(e,t,"formTarget",r.formTarget,r,null)):(Ze(e,t,"encType",r.encType,r,null),Ze(e,t,"method",r.method,r,null),Ze(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=vi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=uo);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":we("beforetoggle",e),we("toggle",e),Lt(e,"popover",a);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Lt(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=H0.get(n)||n,Lt(e,n,a))}}function jc(e,t,n,a,r,o){switch(n){case"style":Cs(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ul(e,a):(typeof a=="number"||typeof a=="bigint")&&ul(e,""+a);break;case"onScroll":a!=null&&we("scroll",e);break;case"onScrollEnd":a!=null&&we("scrollend",e);break;case"onClick":a!=null&&(e.onclick=uo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[y]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Lt(e,n,a)}}}function Dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var a=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var f=n[o];if(f!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,o,f,n,null)}}r&&Ze(e,t,"srcSet",n.srcSet,n,null),a&&Ze(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var p=o=f=r=null,x=null,k=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":r=B;break;case"type":f=B;break;case"checked":x=B;break;case"defaultChecked":k=B;break;case"value":o=B;break;case"defaultValue":p=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Ze(e,t,a,B,n,null)}}zs(e,o,p,x,k,f,r,!1),Ca(e);return;case"select":we("invalid",e),a=f=o=null;for(r in n)if(n.hasOwnProperty(r)&&(p=n[r],p!=null))switch(r){case"value":o=p;break;case"defaultValue":f=p;break;case"multiple":a=p;default:Ze(e,t,r,p,n,null)}t=o,n=f,e.multiple=!!a,t!=null?ol(e,!!a,t,!1):n!=null&&ol(e,!!a,n,!0);return;case"textarea":we("invalid",e),o=r=a=null;for(f in n)if(n.hasOwnProperty(f)&&(p=n[f],p!=null))switch(f){case"value":a=p;break;case"defaultValue":r=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Ze(e,t,f,p,n,null)}ws(e,a,r,o),Ca(e);return;case"option":for(x in n)n.hasOwnProperty(x)&&(a=n[x],a!=null)&&(x==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Ze(e,t,x,a,n,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(a=0;a<wr.length;a++)we(wr[a],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(a=n[k],a!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ze(e,t,k,a,n,null)}return;default:if(Wo(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&jc(e,t,B,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&Ze(e,t,p,a,n,null))}function uv(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,f=null,p=null,x=null,k=null,B=null;for(L in n){var G=n[L];if(n.hasOwnProperty(L)&&G!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":x=G;default:a.hasOwnProperty(L)||Ze(e,t,L,null,a,G)}}for(var j in a){var L=a[j];if(G=n[j],a.hasOwnProperty(j)&&(L!=null||G!=null))switch(j){case"type":o=L;break;case"name":r=L;break;case"checked":k=L;break;case"defaultChecked":B=L;break;case"value":f=L;break;case"defaultValue":p=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,t));break;default:L!==G&&Ze(e,t,j,L,a,G)}}$o(e,f,p,x,k,B,o,r);return;case"select":L=f=p=j=null;for(o in n)if(x=n[o],n.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":L=x;default:a.hasOwnProperty(o)||Ze(e,t,o,null,a,x)}for(r in a)if(o=a[r],x=n[r],a.hasOwnProperty(r)&&(o!=null||x!=null))switch(r){case"value":j=o;break;case"defaultValue":p=o;break;case"multiple":f=o;default:o!==x&&Ze(e,t,r,o,a,x)}t=p,n=f,a=L,j!=null?ol(e,!!n,j,!1):!!a!=!!n&&(t!=null?ol(e,!!n,t,!0):ol(e,!!n,n?[]:"",!1));return;case"textarea":L=j=null;for(p in n)if(r=n[p],n.hasOwnProperty(p)&&r!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ze(e,t,p,null,a,r)}for(f in a)if(r=a[f],o=n[f],a.hasOwnProperty(f)&&(r!=null||o!=null))switch(f){case"value":j=r;break;case"defaultValue":L=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==o&&Ze(e,t,f,r,a,o)}_s(e,j,L);return;case"option":for(var xe in n)j=n[xe],n.hasOwnProperty(xe)&&j!=null&&!a.hasOwnProperty(xe)&&(xe==="selected"?e.selected=!1:Ze(e,t,xe,null,a,j));for(x in a)j=a[x],L=n[x],a.hasOwnProperty(x)&&j!==L&&(j!=null||L!=null)&&(x==="selected"?e.selected=j&&typeof j!="function"&&typeof j!="symbol":Ze(e,t,x,j,a,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in n)j=n[be],n.hasOwnProperty(be)&&j!=null&&!a.hasOwnProperty(be)&&Ze(e,t,be,null,a,j);for(k in a)if(j=a[k],L=n[k],a.hasOwnProperty(k)&&j!==L&&(j!=null||L!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(c(137,t));break;default:Ze(e,t,k,j,a,L)}return;default:if(Wo(t)){for(var Ve in n)j=n[Ve],n.hasOwnProperty(Ve)&&j!==void 0&&!a.hasOwnProperty(Ve)&&jc(e,t,Ve,void 0,a,j);for(B in a)j=a[B],L=n[B],!a.hasOwnProperty(B)||j===L||j===void 0&&L===void 0||jc(e,t,B,j,a,L);return}}for(var A in n)j=n[A],n.hasOwnProperty(A)&&j!=null&&!a.hasOwnProperty(A)&&Ze(e,t,A,null,a,j);for(G in a)j=a[G],L=n[G],!a.hasOwnProperty(G)||j===L||j==null&&L==null||Ze(e,t,G,j,a,L)}var Hc=null,Lc=null;function co(e){return e.nodeType===9?e:e.ownerDocument}function Ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bc=null;function cv(){var e=window.event;return e&&e.type==="popstate"?e===Bc?!1:(Bc=e,!0):(Bc=null,!1)}var Uh=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(dv)}:Uh;function dv(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Hh(e,t){var n=t,a=0,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&Cr(f.documentElement),n&2&&Cr(f.body),n&4)for(n=f.head,Cr(n),f=n.firstChild;f;){var p=f.nextSibling,x=f.nodeName;f[te]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=p}}if(r===0){e.removeChild(o),Yr(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);Yr(t)}function Yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yc(n),re(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function hv(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[te])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=fn(e.nextSibling),e===null)break}return null}function mv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fn(e.nextSibling),e===null))return null;return e}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function pv(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Gc=null;function Lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function qh(e,t,n){switch(t=co(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Cr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);re(e)}var ln=new Map,Bh=new Set;function so(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=Z.d;Z.d={f:vv,r:bv,D:gv,C:yv,L:xv,m:Sv,X:Ov,S:Ev,M:Tv};function vv(){var e=Pn.f(),t=to();return e||t}function bv(e){var t=ce(e);t!==null&&t.tag===5&&t.type==="form"?id(t):Pn.r(e)}var Hl=typeof document>"u"?null:document;function Yh(e,t,n){var a=Hl;if(a&&typeof t=="string"&&t){var r=Ft(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Bh.has(r)||(Bh.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Dt(t,"link",e),ve(t),a.head.appendChild(t)))}}function gv(e){Pn.D(e),Yh("dns-prefetch",e,null)}function yv(e,t){Pn.C(e,t),Yh("preconnect",e,t)}function xv(e,t,n){Pn.L(e,t,n);var a=Hl;if(a&&e&&t){var r='link[rel="preload"][as="'+Ft(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ft(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ft(n.imageSizes)+'"]')):r+='[href="'+Ft(e)+'"]';var o=r;switch(t){case"style":o=Ll(e);break;case"script":o=ql(e)}ln.has(o)||(e=g({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(o,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(kr(o))||t==="script"&&a.querySelector(Ur(o))||(t=a.createElement("link"),Dt(t,"link",e),ve(t),a.head.appendChild(t)))}}function Sv(e,t){Pn.m(e,t);var n=Hl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ft(a)+'"][href="'+Ft(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ql(e)}if(!ln.has(o)&&(e=g({rel:"modulepreload",href:e},t),ln.set(o,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ur(o)))return}a=n.createElement("link"),Dt(a,"link",e),ve(a),n.head.appendChild(a)}}}function Ev(e,t,n){Pn.S(e,t,n);var a=Hl;if(a&&e){var r=oe(a).hoistableStyles,o=Ll(e);t=t||"default";var f=r.get(o);if(!f){var p={loading:0,preload:null};if(f=a.querySelector(kr(o)))p.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(o))&&Qc(e,n);var x=f=a.createElement("link");ve(x),Dt(x,"link",e),x._p=new Promise(function(k,B){x.onload=k,x.onerror=B}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,fo(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:p},r.set(o,f)}}}function Ov(e,t){Pn.X(e,t);var n=Hl;if(n&&e){var a=oe(n).hoistableScripts,r=ql(e),o=a.get(r);o||(o=n.querySelector(Ur(r)),o||(e=g({src:e,async:!0},t),(t=ln.get(r))&&Zc(e,t),o=n.createElement("script"),ve(o),Dt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Tv(e,t){Pn.M(e,t);var n=Hl;if(n&&e){var a=oe(n).hoistableScripts,r=ql(e),o=a.get(r);o||(o=n.querySelector(Ur(r)),o||(e=g({src:e,async:!0,type:"module"},t),(t=ln.get(r))&&Zc(e,t),o=n.createElement("script"),ve(o),Dt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Xh(e,t,n,a){var r=(r=pe.current)?so(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ll(n.href),n=oe(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ll(n.href);var o=oe(r).hoistableStyles,f=o.get(e);if(f||(r=r.ownerDocument||r,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=r.querySelector(kr(e)))&&!o._p&&(f.instance=o,f.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),o||Rv(r,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ql(n),n=oe(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ll(e){return'href="'+Ft(e)+'"'}function kr(e){return'link[rel="stylesheet"]['+e+"]"}function Gh(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Rv(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Dt(t,"link",n),ve(t),e.head.appendChild(t))}function ql(e){return'[src="'+Ft(e)+'"]'}function Ur(e){return"script[async]"+e}function Qh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ft(n.href)+'"]');if(a)return t.instance=a,ve(a),a;var r=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ve(a),Dt(a,"style",r),fo(a,n.precedence,e),t.instance=a;case"stylesheet":r=Ll(n.href);var o=e.querySelector(kr(r));if(o)return t.state.loading|=4,t.instance=o,ve(o),o;a=Gh(n),(r=ln.get(r))&&Qc(a,r),o=(e.ownerDocument||e).createElement("link"),ve(o);var f=o;return f._p=new Promise(function(p,x){f.onload=p,f.onerror=x}),Dt(o,"link",a),t.state.loading|=4,fo(o,n.precedence,e),t.instance=o;case"script":return o=ql(n.src),(r=e.querySelector(Ur(o)))?(t.instance=r,ve(r),r):(a=n,(r=ln.get(o))&&(a=g({},n),Zc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),ve(r),Dt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,fo(a,n.precedence,e));return t.instance}function fo(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,f=0;f<a.length;f++){var p=a[f];if(p.dataset.precedence===t)o=p;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ho=null;function Zh(e,t,n){if(ho===null){var a=new Map,r=ho=new Map;r.set(n,a)}else r=ho,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[te]||o[gt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var p=a.get(f);p?p.push(o):a.set(f,[o])}}return a}function Vh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Dv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ph(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jr=null;function Mv(){}function Av(e,t,n){if(jr===null)throw Error(c(475));var a=jr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ll(n.href),o=e.querySelector(kr(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=mo.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,ve(o);return}o=e.ownerDocument||e,n=Gh(n),(r=ln.get(r))&&Qc(n,r),o=o.createElement("link"),ve(o);var f=o;f._p=new Promise(function(p,x){f.onload=p,f.onerror=x}),Dt(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=mo.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function zv(){if(jr===null)throw Error(c(475));var e=jr;return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function mo(){if(this.count--,this.count===0){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var po=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,po=new Map,t.forEach(_v,e),po=null,mo.call(e))}function _v(e,t){if(!(t.state.loading&4)){var n=po.get(e);if(n)var a=n.get(null);else{n=new Map,po.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var f=r[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}r=t.instance,f=r.getAttribute("data-precedence"),o=n.get(f)||a,o===a&&n.set(null,r),n.set(f,r),this.count++,a=mo.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Hr={$$typeof:J,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function wv(e,t,n,a,r,o,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ll(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.hiddenUpdates=ll(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Kh(e,t,n,a,r,o,f,p,x,k,B,G){return e=new wv(e,t,n,f,p,x,k,G),t=1,o===!0&&(t|=24),o=Yt(3,null,null,t),e.current=o,o.stateNode=e,t=Mu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},wu(o),e}function Jh(e){return e?(e=vl,e):vl}function $h(e,t,n,a,r,o){r=Jh(r),a.context===null?a.context=r:a.pendingContext=r,a=la(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=ra(e,a,t),n!==null&&(Vt(n,e,t),hr(n,e,t))}function Fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pc(e,t){Fh(e,t),(e=e.alternate)&&Fh(e,t)}function Wh(e){if(e.tag===13){var t=pl(e,67108864);t!==null&&Vt(t,e,67108864),Pc(e,67108864)}}var vo=!0;function Nv(e,t,n,a){var r=N.T;N.T=null;var o=Z.p;try{Z.p=2,Kc(e,t,n,a)}finally{Z.p=o,N.T=r}}function Cv(e,t,n,a){var r=N.T;N.T=null;var o=Z.p;try{Z.p=8,Kc(e,t,n,a)}finally{Z.p=o,N.T=r}}function Kc(e,t,n,a){if(vo){var r=Jc(a);if(r===null)Uc(e,t,a,bo,n),em(e,a);else if(Uv(r,e,t,n,a))a.stopPropagation();else if(em(e,a),t&4&&-1<kv.indexOf(e)){for(;r!==null;){var o=ce(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=bn(o.pendingLanes);if(f!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var x=1<<31-Ie(f);p.entanglements[1]|=x,f&=~x}Rn(o),(Xe&6)===0&&(Ii=$t()+500,_r(0))}}break;case 13:p=pl(o,2),p!==null&&Vt(p,o,2),to(),Pc(o,2)}if(o=Jc(a),o===null&&Uc(e,t,a,bo,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else Uc(e,t,a,null,n)}}function Jc(e){return e=eu(e),$c(e)}var bo=null;function $c(e){if(bo=null,e=ie(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bo=e,null}function Ih(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zo()){case Vl:return 2;case ci:return 8;case nl:case Vo:return 32;case si:return 268435456;default:return 32}default:return 32}}var Fc=!1,ga=null,ya=null,xa=null,Lr=new Map,qr=new Map,Sa=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function em(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Br(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=ce(t),t!==null&&Wh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Uv(e,t,n,a,r){switch(t){case"focusin":return ga=Br(ga,e,t,n,a,r),!0;case"dragenter":return ya=Br(ya,e,t,n,a,r),!0;case"mouseover":return xa=Br(xa,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return Lr.set(o,Br(Lr.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,qr.set(o,Br(qr.get(o)||null,e,t,n,a,r)),!0}return!1}function tm(e){var t=ie(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,hi(e.priority,function(){if(n.tag===13){var a=Zt();a=rl(a);var r=pl(n,a);r!==null&&Vt(r,n,a),Pc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Io=a,n.target.dispatchEvent(a),Io=null}else return t=ce(n),t!==null&&Wh(t),e.blockedOn=n,!1;t.shift()}return!0}function nm(e,t,n){go(e)&&n.delete(t)}function jv(){Fc=!1,ga!==null&&go(ga)&&(ga=null),ya!==null&&go(ya)&&(ya=null),xa!==null&&go(xa)&&(xa=null),Lr.forEach(nm),qr.forEach(nm)}function yo(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,jv)))}var xo=null;function am(e){xo!==e&&(xo=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if($c(a||n)===null)continue;break}var o=ce(n);o!==null&&(e.splice(t,3),t-=3,$u(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Yr(e){function t(x){return yo(x,e)}ga!==null&&yo(ga,e),ya!==null&&yo(ya,e),xa!==null&&yo(xa,e),Lr.forEach(t),qr.forEach(t);for(var n=0;n<Sa.length;n++){var a=Sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sa.length&&(n=Sa[0],n.blockedOn===null);)tm(n),n.blockedOn===null&&Sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],f=r[y]||null;if(typeof o=="function")f||am(n);else if(f){var p=null;if(o&&o.hasAttribute("formAction")){if(r=o,f=o[y]||null)p=f.formAction;else if($c(r)!==null)continue}else p=f.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),am(n)}}}function Wc(e){this._internalRoot=e}So.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Zt();$h(n,a,e,t,null,null)},So.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$h(e.current,2,null,e,null,null),to(),t[D]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=wa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sa.length&&t!==0&&t<Sa[n].priority;n++);Sa.splice(n,0,e),n===0&&tm(e)}};var lm=i.version;if(lm!=="19.1.1")throw Error(c(527,lm,"19.1.1"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Hv={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Fn=Eo.inject(Hv),Ot=Eo}catch{}}return Gr.createRoot=function(e,t){if(!s(e))throw Error(c(299));var n=!1,a="",r=xd,o=Sd,f=Ed,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=Kh(e,1,!1,null,null,n,a,r,o,f,p,null),e[D]=t.current,kc(e),new Wc(t)},Gr.hydrateRoot=function(e,t,n){if(!s(e))throw Error(c(299));var a=!1,r="",o=xd,f=Sd,p=Ed,x=null,k=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(k=n.formState)),t=Kh(e,1,!0,t,n??null,a,r,o,f,p,x,k),t.context=Jh(null),n=t.current,a=Zt(),a=rl(a),r=la(a),r.callback=null,ra(n,r,a),n=a,t.current.lanes=n,wn(t,n),Rn(t),e[D]=t.current,kc(e),new So(t)},Gr.version="19.1.1",Gr}var mm;function Kv(){if(mm)return ts.exports;mm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),ts.exports=Pv(),ts.exports}var Jv=Kv();const $v=$m(Jv);var Wm=l=>{throw TypeError(l)},Fv=(l,i,u)=>i.has(l)||Wm("Cannot "+u),rs=(l,i,u)=>(Fv(l,i,"read from private field"),u?u.call(l):i.get(l)),Wv=(l,i,u)=>i.has(l)?Wm("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(l):i.set(l,u),pm="popstate";function Iv(l={}){function i(c,s){let{pathname:d,search:h,hash:b}=c.location;return Wr("",{pathname:d,search:h,hash:b},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(c,s){return typeof s=="string"?s:Mn(s)}return tb(i,u,null,l)}function Re(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function ot(l,i){if(!l){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function eb(){return Math.random().toString(36).substring(2,10)}function vm(l,i){return{usr:l.state,key:l.key,idx:i}}function Wr(l,i,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof i=="string"?Ma(i):i,state:u,key:i&&i.key||c||eb()}}function Mn({pathname:l="/",search:i="",hash:u=""}){return i&&i!=="?"&&(l+=i.charAt(0)==="?"?i:"?"+i),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Ma(l){let i={};if(l){let u=l.indexOf("#");u>=0&&(i.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(i.search=l.substring(c),l=l.substring(0,c)),l&&(i.pathname=l)}return i}function tb(l,i,u,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,h=s.history,b="POP",v=null,m=g();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function g(){return(h.state||{idx:null}).idx}function S(){b="POP";let q=g(),K=q==null?null:q-m;m=q,v&&v({action:b,location:R.location,delta:K})}function M(q,K){b="PUSH";let Q=Wr(R.location,q,K);m=g()+1;let J=vm(Q,m),Se=R.createHref(Q);try{h.pushState(J,"",Se)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;s.location.assign(Se)}d&&v&&v({action:b,location:R.location,delta:1})}function T(q,K){b="REPLACE";let Q=Wr(R.location,q,K);m=g();let J=vm(Q,m),Se=R.createHref(Q);h.replaceState(J,"",Se),d&&v&&v({action:b,location:R.location,delta:0})}function z(q){return Im(q)}let R={get action(){return b},get location(){return l(s,h)},listen(q){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(pm,S),v=q,()=>{s.removeEventListener(pm,S),v=null}},createHref(q){return i(s,q)},createURL:z,encodeLocation(q){let K=z(q);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:M,replace:T,go(q){return h.go(q)}};return R}function Im(l,i=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Re(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Mn(l);return c=c.replace(/ $/,"%20"),!i&&c.startsWith("//")&&(c=u+c),new URL(c,u)}var Kr,bm=class{constructor(l){if(Wv(this,Kr,new Map),l)for(let[i,u]of l)this.set(i,u)}get(l){if(rs(this,Kr).has(l))return rs(this,Kr).get(l);if(l.defaultValue!==void 0)return l.defaultValue;throw new Error("No value found for context")}set(l,i){rs(this,Kr).set(l,i)}};Kr=new WeakMap;var nb=new Set(["lazy","caseSensitive","path","id","index","children"]);function ab(l){return nb.has(l)}var lb=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function rb(l){return lb.has(l)}function ib(l){return l.index===!0}function Ir(l,i,u=[],c={},s=!1){return l.map((d,h)=>{let b=[...u,String(h)],v=typeof d.id=="string"?d.id:b.join("-");if(Re(d.index!==!0||!d.children,"Cannot specify children on an index route"),Re(s||!c[v],`Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`),ib(d)){let m={...d,id:v};return c[v]=gm(m,i(m)),m}else{let m={...d,id:v,children:void 0};return c[v]=gm(m,i(m)),d.children&&(m.children=Ir(d.children,i,b,c,s)),m}})}function gm(l,i){return Object.assign(l,{...i,...typeof i.lazy=="object"&&i.lazy!=null?{lazy:{...l.lazy,...i.lazy}}:{}})}function Ta(l,i,u="/"){return Jr(l,i,u,!1)}function Jr(l,i,u,c){let s=typeof i=="string"?Ma(i):i,d=on(s.pathname||"/",u);if(d==null)return null;let h=e0(l);ub(h);let b=null;for(let v=0;b==null&&v<h.length;++v){let m=yb(d);b=bb(h[v],m,c)}return b}function ob(l,i){let{route:u,pathname:c,params:s}=l;return{id:u.id,pathname:c,params:s,data:i[u.id],loaderData:i[u.id],handle:u.handle}}function e0(l,i=[],u=[],c="",s=!1){let d=(h,b,v=s,m)=>{let g={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:b,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(c)&&v)return;Re(g.relativePath.startsWith(c),`Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(c.length)}let S=Dn([c,g.relativePath]),M=u.concat(g);h.children&&h.children.length>0&&(Re(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),e0(h.children,i,M,S,v)),!(h.path==null&&!h.index)&&i.push({path:S,score:pb(S,h.index),routesMeta:M})};return l.forEach((h,b)=>{if(h.path===""||!h.path?.includes("?"))d(h,b);else for(let v of t0(h.path))d(h,b,!0,v)}),i}function t0(l){let i=l.split("/");if(i.length===0)return[];let[u,...c]=i,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let h=t0(c.join("/")),b=[];return b.push(...h.map(v=>v===""?d:[d,v].join("/"))),s&&b.push(...h),b.map(v=>l.startsWith("/")&&v===""?"/":v)}function ub(l){l.sort((i,u)=>i.score!==u.score?u.score-i.score:vb(i.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var cb=/^:[\w-]+$/,sb=3,fb=2,db=1,hb=10,mb=-2,ym=l=>l==="*";function pb(l,i){let u=l.split("/"),c=u.length;return u.some(ym)&&(c+=mb),i&&(c+=fb),u.filter(s=>!ym(s)).reduce((s,d)=>s+(cb.test(d)?sb:d===""?db:hb),c)}function vb(l,i){return l.length===i.length&&l.slice(0,-1).every((c,s)=>c===i[s])?l[l.length-1]-i[i.length-1]:0}function bb(l,i,u=!1){let{routesMeta:c}=l,s={},d="/",h=[];for(let b=0;b<c.length;++b){let v=c[b],m=b===c.length-1,g=d==="/"?i:i.slice(d.length)||"/",S=jo({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},g),M=v.route;if(!S&&m&&u&&!c[c.length-1].route.index&&(S=jo({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},g)),!S)return null;Object.assign(s,S.params),h.push({params:s,pathname:Dn([d,S.pathname]),pathnameBase:Eb(Dn([d,S.pathnameBase])),route:M}),S.pathnameBase!=="/"&&(d=Dn([d,S.pathnameBase]))}return h}function jo(l,i){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=gb(l.path,l.caseSensitive,l.end),s=i.match(u);if(!s)return null;let d=s[0],h=d.replace(/(.)\/+$/,"$1"),b=s.slice(1);return{params:c.reduce((m,{paramName:g,isOptional:S},M)=>{if(g==="*"){let z=b[M]||"";h=d.slice(0,d.length-z.length).replace(/(.)\/+$/,"$1")}const T=b[M];return S&&!T?m[g]=void 0:m[g]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:h,pattern:l}}function gb(l,i=!1,u=!0){ot(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,b,v)=>(c.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),c]}function yb(l){try{return l.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ot(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),l}}function on(l,i){if(i==="/")return l;if(!l.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}function xb({basename:l,pathname:i}){return i==="/"?l:Dn([l,i])}var n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ys=l=>n0.test(l);function Sb(l,i="/"){let{pathname:u,search:c="",hash:s=""}=typeof l=="string"?Ma(l):l,d;return u?(u=u.replace(/\/\/+/g,"/"),u.startsWith("/")?d=xm(u.substring(1),"/"):d=xm(u,i)):d=i,{pathname:d,search:Ob(c),hash:Tb(s)}}function xm(l,i){let u=i.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function is(l,i,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function a0(l){return l.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function Lo(l){let i=a0(l);return i.map((u,c)=>c===i.length-1?u.pathname:u.pathnameBase)}function qo(l,i,u,c=!1){let s;typeof l=="string"?s=Ma(l):(s={...l},Re(!s.pathname||!s.pathname.includes("?"),is("?","pathname","search",s)),Re(!s.pathname||!s.pathname.includes("#"),is("#","pathname","hash",s)),Re(!s.search||!s.search.includes("#"),is("#","search","hash",s)));let d=l===""||s.pathname==="",h=d?"/":s.pathname,b;if(h==null)b=u;else{let S=i.length-1;if(!c&&h.startsWith("..")){let M=h.split("/");for(;M[0]==="..";)M.shift(),S-=1;s.pathname=M.join("/")}b=S>=0?i[S]:"/"}let v=Sb(s,b),m=h&&h!=="/"&&h.endsWith("/"),g=(d||h===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(m||g)&&(v.pathname+="/"),v}var Dn=l=>l.join("/").replace(/\/\/+/g,"/"),Eb=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ob=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Tb=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,ti=class{constructor(l,i,u,c=!1){this.status=l,this.statusText=i||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function ei(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function ni(l){return l.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var l0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function r0(l,i){let u=l;if(typeof u!="string"||!n0.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,s=!1;if(l0)try{let d=new URL(window.location.href),h=u.startsWith("//")?new URL(d.protocol+u):new URL(u),b=on(h.pathname,i);h.origin===d.origin&&b!=null?u=b+h.search+h.hash:s=!0}catch{ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:s,to:u}}var Da=Symbol("Uninstrumented");function Rb(l,i){let u={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};l.forEach(s=>s({id:i.id,index:i.index,path:i.path,instrument(d){let h=Object.keys(u);for(let b of h)d[b]&&u[b].push(d[b])}}));let c={};if(typeof i.lazy=="function"&&u.lazy.length>0){let s=Xl(u.lazy,i.lazy,()=>{});s&&(c.lazy=s)}if(typeof i.lazy=="object"){let s=i.lazy;["middleware","loader","action"].forEach(d=>{let h=s[d],b=u[`lazy.${d}`];if(typeof h=="function"&&b.length>0){let v=Xl(b,h,()=>{});v&&(c.lazy=Object.assign(c.lazy||{},{[d]:v}))}})}return["loader","action"].forEach(s=>{let d=i[s];if(typeof d=="function"&&u[s].length>0){let h=d[Da]??d,b=Xl(u[s],h,(...v)=>Sm(v[0]));b&&(s==="loader"&&h.hydrate===!0&&(b.hydrate=!0),b[Da]=h,c[s]=b)}}),i.middleware&&i.middleware.length>0&&u.middleware.length>0&&(c.middleware=i.middleware.map(s=>{let d=s[Da]??s,h=Xl(u.middleware,d,(...b)=>Sm(b[0]));return h?(h[Da]=d,h):s})),c}function Db(l,i){let u={navigate:[],fetch:[]};if(i.forEach(c=>c({instrument(s){let d=Object.keys(s);for(let h of d)s[h]&&u[h].push(s[h])}})),u.navigate.length>0){let c=l.navigate[Da]??l.navigate,s=Xl(u.navigate,c,(...d)=>{let[h,b]=d;return{to:typeof h=="number"||typeof h=="string"?h:h?Mn(h):".",...Em(l,b??{})}});s&&(s[Da]=c,l.navigate=s)}if(u.fetch.length>0){let c=l.fetch[Da]??l.fetch,s=Xl(u.fetch,c,(...d)=>{let[h,,b,v]=d;return{href:b??".",fetcherKey:h,...Em(l,v??{})}});s&&(s[Da]=c,l.fetch=s)}return l}function Xl(l,i,u){return l.length===0?null:async(...c)=>{let s=await i0(l,u(...c),()=>i(...c),l.length-1);if(s.type==="error")throw s.value;return s.value}}async function i0(l,i,u,c){let s=l[c],d;if(s){let h,b=async()=>(h?console.error("You cannot call instrumented handlers more than once"):h=i0(l,i,u,c-1),d=await h,Re(d,"Expected a result"),d.type==="error"&&d.value instanceof Error?{status:"error",error:d.value}:{status:"success",error:void 0});try{await s(b,i)}catch(v){console.error("An instrumentation function threw an error:",v)}h||await b(),await h}else try{d={type:"success",value:await u()}}catch(h){d={type:"error",value:h}}return d||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Sm(l){let{request:i,context:u,params:c,unstable_pattern:s}=l;return{request:Mb(i),params:{...c},unstable_pattern:s,context:Ab(u)}}function Em(l,i){return{currentUrl:Mn(l.state.location),..."formMethod"in i?{formMethod:i.formMethod}:{},..."formEncType"in i?{formEncType:i.formEncType}:{},..."formData"in i?{formData:i.formData}:{},..."body"in i?{body:i.body}:{}}}function Mb(l){return{method:l.method,url:l.url,headers:{get:(...i)=>l.headers.get(...i)}}}function Ab(l){if(_b(l)){let i={...l};return Object.freeze(i),i}else return{get:i=>l.get(i)}}var zb=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _b(l){if(l===null||typeof l!="object")return!1;const i=Object.getPrototypeOf(l);return i===Object.prototype||i===null||Object.getOwnPropertyNames(i).sort().join("\0")===zb}var o0=["POST","PUT","PATCH","DELETE"],wb=new Set(o0),Nb=["GET",...o0],Cb=new Set(Nb),u0=new Set([301,302,303,307,308]),kb=new Set([307,308]),os={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ub={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},jb=l=>({hasErrorBoundary:!!l.hasErrorBoundary}),c0="remix-router-transitions",s0=Symbol("ResetLoaderData");function Hb(l){const i=l.window?l.window:typeof window<"u"?window:void 0,u=typeof i<"u"&&typeof i.document<"u"&&typeof i.document.createElement<"u";Re(l.routes.length>0,"You must provide a non-empty routes array to createRouter");let c=l.hydrationRouteProperties||[],s=l.mapRouteProperties||jb,d=s;if(l.unstable_instrumentations){let y=l.unstable_instrumentations;d=D=>({...s(D),...Rb(y.map(H=>H.route).filter(Boolean),D)})}let h={},b=Ir(l.routes,d,void 0,h),v,m=l.basename||"/";m.startsWith("/")||(m=`/${m}`);let g=l.dataStrategy||Xb,S={...l.future},M=null,T=new Set,z=null,R=null,q=null,K=l.hydrationData!=null,Q=Ta(b,l.history.location,m),J=!1,Se=null,ee;if(Q==null&&!l.patchRoutesOnNavigation){let y=rn(404,{pathname:l.history.location.pathname}),{matches:D,route:H}=Oo(b);ee=!0,Q=D,Se={[H.id]:y}}else if(Q&&!l.hydrationData&&In(Q,b,l.history.location.pathname).active&&(Q=null),Q)if(Q.some(y=>y.route.lazy))ee=!1;else if(!Q.some(y=>xs(y.route)))ee=!0;else{let y=l.hydrationData?l.hydrationData.loaderData:null,D=l.hydrationData?l.hydrationData.errors:null;if(D){let H=Q.findIndex(V=>D[V.route.id]!==void 0);ee=Q.slice(0,H+1).every(V=>!hs(V.route,y,D))}else ee=Q.every(H=>!hs(H.route,y,D))}else{ee=!1,Q=[];let y=In(null,b,l.history.location.pathname);y.active&&y.matches&&(J=!0,Q=y.matches)}let ge,U={historyAction:l.history.action,location:l.history.location,matches:Q,initialized:ee,navigation:os,restoreScrollPosition:l.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:l.hydrationData&&l.hydrationData.loaderData||{},actionData:l.hydrationData&&l.hydrationData.actionData||null,errors:l.hydrationData&&l.hydrationData.errors||Se,fetchers:new Map,blockers:new Map},ne="POP",he=null,Ue=!1,Me,Ae=!1,lt=new Map,Ye=null,I=!1,N=!1,Z=new Set,P=new Map,fe=0,E=-1,X=new Map,W=new Set,$=new Map,ae=new Map,Ee=new Set,pe=new Map,vt,Le=null;function pn(){if(M=l.history.listen(({action:y,location:D,delta:H})=>{if(vt){vt(),vt=void 0;return}ot(pe.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=ll({currentLocation:U.location,nextLocation:D,historyAction:y});if(V&&H!=null){let F=new Promise(se=>{vt=se});l.history.go(H*-1),_a(V,{state:"blocked",location:D,proceed(){_a(V,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),F.then(()=>l.history.go(H))},reset(){let se=new Map(U.blockers);se.set(V,Qr),ut({blockers:se})}}),he?.resolve(),he=null;return}return zn(y,D)}),u){ig(i,lt);let y=()=>og(i,lt);i.addEventListener("pagehide",y),Ye=()=>i.removeEventListener("pagehide",y)}return U.initialized||zn("POP",U.location,{initialHydration:!0}),ge}function Zl(){M&&M(),Ye&&Ye(),T.clear(),Me&&Me.abort(),U.fetchers.forEach((y,D)=>Pl(D)),U.blockers.forEach((y,D)=>Kl(D))}function el(y){return T.add(y),()=>T.delete(y)}function ut(y,D={}){y.matches&&(y.matches=y.matches.map(F=>{let se=h[F.route.id],te=F.route;return te.element!==se.element||te.errorElement!==se.errorElement||te.hydrateFallbackElement!==se.hydrateFallbackElement?{...F,route:se}:F})),U={...U,...y};let H=[],V=[];U.fetchers.forEach((F,se)=>{F.state==="idle"&&(Ee.has(se)?H.push(se):V.push(se))}),Ee.forEach(F=>{!U.fetchers.has(F)&&!P.has(F)&&H.push(F)}),[...T].forEach(F=>F(U,{deletedFetchers:H,newErrors:y.errors??null,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),H.forEach(F=>Pl(F)),V.forEach(F=>U.fetchers.delete(F))}function vn(y,D,{flushSync:H}={}){let V=U.actionData!=null&&U.navigation.formMethod!=null&&zt(U.navigation.formMethod)&&U.navigation.state==="loading"&&y.state?._isRedirect!==!0,F;D.actionData?Object.keys(D.actionData).length>0?F=D.actionData:F=null:V?F=U.actionData:F=null;let se=D.loaderData?Nm(U.loaderData,D.loaderData,D.matches||[],D.errors):U.loaderData,te=U.blockers;te.size>0&&(te=new Map(te),te.forEach((me,oe)=>te.set(oe,Qr)));let re=I?!1:rl(y,D.matches||U.matches),ie=Ue===!0||U.navigation.formMethod!=null&&zt(U.navigation.formMethod)&&y.state?._isRedirect!==!0;v&&(b=v,v=void 0),I||ne==="POP"||(ne==="PUSH"?l.history.push(y,y.state):ne==="REPLACE"&&l.history.replace(y,y.state));let ce;if(ne==="POP"){let me=lt.get(U.location.pathname);me&&me.has(y.pathname)?ce={currentLocation:U.location,nextLocation:y}:lt.has(y.pathname)&&(ce={currentLocation:y,nextLocation:U.location})}else if(Ae){let me=lt.get(U.location.pathname);me?me.add(y.pathname):(me=new Set([y.pathname]),lt.set(U.location.pathname,me)),ce={currentLocation:U.location,nextLocation:y}}ut({...D,actionData:F,loaderData:se,historyAction:ne,location:y,initialized:!0,navigation:os,revalidation:"idle",restoreScrollPosition:re,preventScrollReset:ie,blockers:te},{viewTransitionOpts:ce,flushSync:H===!0}),ne="POP",Ue=!1,Ae=!1,I=!1,N=!1,he?.resolve(),he=null,Le?.resolve(),Le=null}async function tl(y,D){if(he?.resolve(),he=null,typeof y=="number"){he||(he=jm());let Ce=he.promise;return l.history.go(y),Ce}let H=ds(U.location,U.matches,m,y,D?.fromRouteId,D?.relative),{path:V,submission:F,error:se}=Om(!1,H,D),te=U.location,re=Wr(U.location,V,D&&D.state);re={...re,...l.history.encodeLocation(re)};let ie=D&&D.replace!=null?D.replace:void 0,ce="PUSH";ie===!0?ce="REPLACE":ie===!1||F!=null&&zt(F.formMethod)&&F.formAction===U.location.pathname+U.location.search&&(ce="REPLACE");let me=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,oe=(D&&D.flushSync)===!0,ve=ll({currentLocation:te,nextLocation:re,historyAction:ce});if(ve){_a(ve,{state:"blocked",location:re,proceed(){_a(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:re}),tl(y,D)},reset(){let Ce=new Map(U.blockers);Ce.set(ve,Qr),ut({blockers:Ce})}});return}await zn(ce,re,{submission:F,pendingError:se,preventScrollReset:me,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:oe,callSiteDefaultShouldRevalidate:D&&D.unstable_defaultShouldRevalidate})}function Qo(){Le||(Le=jm()),Ot(),ut({revalidation:"loading"});let y=Le.promise;return U.navigation.state==="submitting"?y:U.navigation.state==="idle"?(zn(U.historyAction,U.location,{startUninterruptedRevalidation:!0}),y):(zn(ne||U.historyAction,U.navigation.location,{overrideNavigation:U.navigation,enableViewTransition:Ae===!0}),y)}async function zn(y,D,H){Me&&Me.abort(),Me=null,ne=y,I=(H&&H.startUninterruptedRevalidation)===!0,di(U.location,U.matches),Ue=(H&&H.preventScrollReset)===!0,Ae=(H&&H.enableViewTransition)===!0;let V=v||b,F=H&&H.overrideNavigation,se=H?.initialHydration&&U.matches&&U.matches.length>0&&!J?U.matches:Ta(V,D,m),te=(H&&H.flushSync)===!0;if(se&&U.initialized&&!N&&$b(U.location,D)&&!(H&&H.submission&&zt(H.submission.formMethod))){vn(D,{matches:se},{flushSync:te});return}let re=In(se,V,D.pathname);if(re.active&&re.matches&&(se=re.matches),!se){let{error:Ke,notFoundMatches:tt,route:qe}=wn(D.pathname);vn(D,{matches:tt,loaderData:{},errors:{[qe.id]:Ke}},{flushSync:te});return}Me=new AbortController;let ie=Yl(l.history,D,Me.signal,H&&H.submission),ce=l.getContext?await l.getContext():new bm,me;if(H&&H.pendingError)me=[Ra(se).route.id,{type:"error",error:H.pendingError}];else if(H&&H.submission&&zt(H.submission.formMethod)){let Ke=await $t(ie,D,H.submission,se,ce,re.active,H&&H.initialHydration===!0,{replace:H.replace,flushSync:te});if(Ke.shortCircuited)return;if(Ke.pendingActionResult){let[tt,qe]=Ke.pendingActionResult;if(Kt(qe)&&ei(qe.error)&&qe.error.status===404){Me=null,vn(D,{matches:Ke.matches,loaderData:{},errors:{[tt]:qe.error}});return}}se=Ke.matches||se,me=Ke.pendingActionResult,F=us(D,H.submission),te=!1,re.active=!1,ie=Yl(l.history,ie.url,ie.signal)}let{shortCircuited:oe,matches:ve,loaderData:Ce,errors:ct}=await Zo(ie,D,se,ce,re.active,F,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,H&&H.initialHydration===!0,te,me,H&&H.callSiteDefaultShouldRevalidate);oe||(Me=null,vn(D,{matches:ve||se,...Cm(me),loaderData:Ce,errors:ct}))}async function $t(y,D,H,V,F,se,te,re={}){Ot();let ie=lg(D,H);if(ut({navigation:ie},{flushSync:re.flushSync===!0}),se){let oe=await wa(V,D.pathname,y.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){if(oe.partialMatches.length===0){let{matches:Ce,route:ct}=Oo(b);return{matches:Ce,pendingActionResult:[ct.id,{type:"error",error:oe.error}]}}let ve=Ra(oe.partialMatches).route.id;return{matches:oe.partialMatches,pendingActionResult:[ve,{type:"error",error:oe.error}]}}else if(oe.matches)V=oe.matches;else{let{notFoundMatches:ve,error:Ce,route:ct}=wn(D.pathname);return{matches:ve,pendingActionResult:[ct.id,{type:"error",error:Ce}]}}}let ce,me=Co(V,D);if(!me.route.action&&!me.route.lazy)ce={type:"error",error:rn(405,{method:y.method,pathname:D.pathname,routeId:me.route.id})};else{let oe=Gl(d,h,y,V,me,te?[]:c,F),ve=await Aa(y,oe,F,null);if(ce=ve[me.route.id],!ce){for(let Ce of V)if(ve[Ce.route.id]){ce=ve[Ce.route.id];break}}if(y.signal.aborted)return{shortCircuited:!0}}if($a(ce)){let oe;return re&&re.replace!=null?oe=re.replace:oe=zm(ce.response.headers.get("Location"),new URL(y.url),m,l.history)===U.location.pathname+U.location.search,await _n(y,ce,!0,{submission:H,replace:oe}),{shortCircuited:!0}}if(Kt(ce)){let oe=Ra(V,me.route.id);return(re&&re.replace)!==!0&&(ne="PUSH"),{matches:V,pendingActionResult:[oe.route.id,ce,me.route.id]}}return{matches:V,pendingActionResult:[me.route.id,ce]}}async function Zo(y,D,H,V,F,se,te,re,ie,ce,me,oe,ve){let Ce=se||us(D,te),ct=te||re||Um(Ce),Ke=!I&&!ce;if(F){if(Ke){let yt=Vl(oe);ut({navigation:Ce,...yt!==void 0?{actionData:yt}:{}},{flushSync:me})}let ze=await wa(H,D.pathname,y.signal);if(ze.type==="aborted")return{shortCircuited:!0};if(ze.type==="error"){if(ze.partialMatches.length===0){let{matches:Cn,route:st}=Oo(b);return{matches:Cn,loaderData:{},errors:{[st.id]:ze.error}}}let yt=Ra(ze.partialMatches).route.id;return{matches:ze.partialMatches,loaderData:{},errors:{[yt]:ze.error}}}else if(ze.matches)H=ze.matches;else{let{error:yt,notFoundMatches:Cn,route:st}=wn(D.pathname);return{matches:Cn,loaderData:{},errors:{[st.id]:yt}}}}let tt=v||b,{dsMatches:qe,revalidatingFetchers:_t}=Tm(y,V,d,h,l.history,U,H,ct,D,ce?[]:c,ce===!0,N,Z,Ee,$,W,tt,m,l.patchRoutesOnNavigation!=null,oe,ve);if(E=++fe,!l.dataStrategy&&!qe.some(ze=>ze.shouldLoad)&&!qe.some(ze=>ze.route.middleware&&ze.route.middleware.length>0)&&_t.length===0){let ze=za();return vn(D,{matches:H,loaderData:{},errors:oe&&Kt(oe[1])?{[oe[0]]:oe[1].error}:null,...Cm(oe),...ze?{fetchers:new Map(U.fetchers)}:{}},{flushSync:me}),{shortCircuited:!0}}if(Ke){let ze={};if(!F){ze.navigation=Ce;let yt=Vl(oe);yt!==void 0&&(ze.actionData=yt)}_t.length>0&&(ze.fetchers=ci(_t)),ut(ze,{flushSync:me})}_t.forEach(ze=>{Ct(ze.key),ze.controller&&P.set(ze.key,ze.controller)});let yn=()=>_t.forEach(ze=>Ct(ze.key));Me&&Me.signal.addEventListener("abort",yn);let{loaderResults:Na,fetcherResults:Lt}=await Fn(qe,_t,y,V);if(y.signal.aborted)return{shortCircuited:!0};Me&&Me.signal.removeEventListener("abort",yn),_t.forEach(ze=>P.delete(ze.key));let wt=To(Na);if(wt)return await _n(y,wt.result,!0,{replace:ie}),{shortCircuited:!0};if(wt=To(Lt),wt)return W.add(wt.key),await _n(y,wt.result,!0,{replace:ie}),{shortCircuited:!0};let{loaderData:qt,errors:Nn}=wm(U,H,Na,oe,_t,Lt);ce&&U.errors&&(Nn={...U.errors,...Nn});let xn=za(),un=Wn(E),ea=xn||un||_t.length>0;return{matches:H,loaderData:qt,errors:Nn,...ea?{fetchers:new Map(U.fetchers)}:{}}}function Vl(y){if(y&&!Kt(y[1]))return{[y[0]]:y[1].data};if(U.actionData)return Object.keys(U.actionData).length===0?null:U.actionData}function ci(y){return y.forEach(D=>{let H=U.fetchers.get(D.key),V=Zr(void 0,H?H.data:void 0);U.fetchers.set(D.key,V)}),new Map(U.fetchers)}async function nl(y,D,H,V){Ct(y);let F=(V&&V.flushSync)===!0,se=v||b,te=ds(U.location,U.matches,m,H,D,V?.relative),re=Ta(se,te,m),ie=In(re,se,te);if(ie.active&&ie.matches&&(re=ie.matches),!re){Ie(y,D,rn(404,{pathname:te}),{flushSync:F});return}let{path:ce,submission:me,error:oe}=Om(!0,te,V);if(oe){Ie(y,D,oe,{flushSync:F});return}let ve=l.getContext?await l.getContext():new bm,Ce=(V&&V.preventScrollReset)===!0;if(me&&zt(me.formMethod)){await Vo(y,D,ce,re,ve,ie.active,F,Ce,me,V&&V.unstable_defaultShouldRevalidate);return}$.set(y,{routeId:D,path:ce}),await si(y,D,ce,re,ve,ie.active,F,Ce,me)}async function Vo(y,D,H,V,F,se,te,re,ie,ce){Ot(),$.delete(y);let me=U.fetchers.get(y);bt(y,rg(ie,me),{flushSync:te});let oe=new AbortController,ve=Yl(l.history,H,oe.signal,ie);if(se){let $e=await wa(V,new URL(ve.url).pathname,ve.signal,y);if($e.type==="aborted")return;if($e.type==="error"){Ie(y,D,$e.error,{flushSync:te});return}else if($e.matches)V=$e.matches;else{Ie(y,D,rn(404,{pathname:H}),{flushSync:te});return}}let Ce=Co(V,H);if(!Ce.route.action&&!Ce.route.lazy){let $e=rn(405,{method:ie.formMethod,pathname:H,routeId:D});Ie(y,D,$e,{flushSync:te});return}P.set(y,oe);let ct=fe,Ke=Gl(d,h,ve,V,Ce,c,F),tt=await Aa(ve,Ke,F,y),qe=tt[Ce.route.id];if(!qe){for(let $e of Ke)if(tt[$e.route.id]){qe=tt[$e.route.id];break}}if(ve.signal.aborted){P.get(y)===oe&&P.delete(y);return}if(Ee.has(y)){if($a(qe)||Kt(qe)){bt(y,Jn(void 0));return}}else{if($a(qe))if(P.delete(y),E>ct){bt(y,Jn(void 0));return}else return W.add(y),bt(y,Zr(ie)),_n(ve,qe,!1,{fetcherSubmission:ie,preventScrollReset:re});if(Kt(qe)){Ie(y,D,qe.error);return}}let _t=U.navigation.location||U.location,yn=Yl(l.history,_t,oe.signal),Na=v||b,Lt=U.navigation.state!=="idle"?Ta(Na,U.navigation.location,m):U.matches;Re(Lt,"Didn't find any matches after fetcher action");let wt=++fe;X.set(y,wt);let qt=Zr(ie,qe.data);U.fetchers.set(y,qt);let{dsMatches:Nn,revalidatingFetchers:xn}=Tm(yn,F,d,h,l.history,U,Lt,ie,_t,c,!1,N,Z,Ee,$,W,Na,m,l.patchRoutesOnNavigation!=null,[Ce.route.id,qe],ce);xn.filter($e=>$e.key!==y).forEach($e=>{let il=$e.key,Ca=U.fetchers.get(il),mi=Zr(void 0,Ca?Ca.data:void 0);U.fetchers.set(il,mi),Ct(il),$e.controller&&P.set(il,$e.controller)}),ut({fetchers:new Map(U.fetchers)});let un=()=>xn.forEach($e=>Ct($e.key));oe.signal.addEventListener("abort",un);let{loaderResults:ea,fetcherResults:ze}=await Fn(Nn,xn,yn,F);if(oe.signal.aborted)return;if(oe.signal.removeEventListener("abort",un),X.delete(y),P.delete(y),xn.forEach($e=>P.delete($e.key)),U.fetchers.has(y)){let $e=Jn(qe.data);U.fetchers.set(y,$e)}let yt=To(ea);if(yt)return _n(yn,yt.result,!1,{preventScrollReset:re});if(yt=To(ze),yt)return W.add(yt.key),_n(yn,yt.result,!1,{preventScrollReset:re});let{loaderData:Cn,errors:st}=wm(U,Lt,ea,void 0,xn,ze);Wn(wt),U.navigation.state==="loading"&&wt>E?(Re(ne,"Expected pending action"),Me&&Me.abort(),vn(U.navigation.location,{matches:Lt,loaderData:Cn,errors:st,fetchers:new Map(U.fetchers)})):(ut({errors:st,loaderData:Nm(U.loaderData,Cn,Lt,st),fetchers:new Map(U.fetchers)}),N=!1)}async function si(y,D,H,V,F,se,te,re,ie){let ce=U.fetchers.get(y);bt(y,Zr(ie,ce?ce.data:void 0),{flushSync:te});let me=new AbortController,oe=Yl(l.history,H,me.signal);if(se){let qe=await wa(V,new URL(oe.url).pathname,oe.signal,y);if(qe.type==="aborted")return;if(qe.type==="error"){Ie(y,D,qe.error,{flushSync:te});return}else if(qe.matches)V=qe.matches;else{Ie(y,D,rn(404,{pathname:H}),{flushSync:te});return}}let ve=Co(V,H);P.set(y,me);let Ce=fe,ct=Gl(d,h,oe,V,ve,c,F),tt=(await Aa(oe,ct,F,y))[ve.route.id];if(P.get(y)===me&&P.delete(y),!oe.signal.aborted){if(Ee.has(y)){bt(y,Jn(void 0));return}if($a(tt))if(E>Ce){bt(y,Jn(void 0));return}else{W.add(y),await _n(oe,tt,!1,{preventScrollReset:re});return}if(Kt(tt)){Ie(y,D,tt.error);return}bt(y,Jn(tt.data))}}async function _n(y,D,H,{submission:V,fetcherSubmission:F,preventScrollReset:se,replace:te}={}){H||(he?.resolve(),he=null),D.response.headers.has("X-Remix-Revalidate")&&(N=!0);let re=D.response.headers.get("Location");Re(re,"Expected a Location header on the redirect Response"),re=zm(re,new URL(y.url),m,l.history);let ie=Wr(U.location,re,{_isRedirect:!0});if(u){let ct=!1;if(D.response.headers.has("X-Remix-Reload-Document"))ct=!0;else if(ys(re)){const Ke=Im(re,!0);ct=Ke.origin!==i.location.origin||on(Ke.pathname,m)==null}if(ct){te?i.location.replace(re):i.location.assign(re);return}}Me=null;let ce=te===!0||D.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:me,formAction:oe,formEncType:ve}=U.navigation;!V&&!F&&me&&oe&&ve&&(V=Um(U.navigation));let Ce=V||F;if(kb.has(D.response.status)&&Ce&&zt(Ce.formMethod))await zn(ce,ie,{submission:{...Ce,formAction:re},preventScrollReset:se||Ue,enableViewTransition:H?Ae:void 0});else{let ct=us(ie,V);await zn(ce,ie,{overrideNavigation:ct,fetcherSubmission:F,preventScrollReset:se||Ue,enableViewTransition:H?Ae:void 0})}}async function Aa(y,D,H,V){let F,se={};try{F=await Qb(g,y,D,V,H,!1)}catch(te){return D.filter(re=>re.shouldLoad).forEach(re=>{se[re.route.id]={type:"error",error:te}}),se}if(y.signal.aborted)return se;if(!zt(y.method))for(let te of D){if(F[te.route.id]?.type==="error")break;!F.hasOwnProperty(te.route.id)&&!U.loaderData.hasOwnProperty(te.route.id)&&(!U.errors||!U.errors.hasOwnProperty(te.route.id))&&te.shouldCallHandler()&&(F[te.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${te.route.id}`)})}for(let[te,re]of Object.entries(F))if(eg(re)){let ie=re.result;se[te]={type:"redirect",response:Kb(ie,y,te,D,m)}}else se[te]=await Pb(re);return se}async function Fn(y,D,H,V){let F=Aa(H,y,V,null),se=Promise.all(D.map(async ie=>{if(ie.matches&&ie.match&&ie.request&&ie.controller){let me=(await Aa(ie.request,ie.matches,V,ie.key))[ie.match.route.id];return{[ie.key]:me}}else return Promise.resolve({[ie.key]:{type:"error",error:rn(404,{pathname:ie.path})}})})),te=await F,re=(await se).reduce((ie,ce)=>Object.assign(ie,ce),{});return{loaderResults:te,fetcherResults:re}}function Ot(){N=!0,$.forEach((y,D)=>{P.has(D)&&Z.add(D),Ct(D)})}function bt(y,D,H={}){U.fetchers.set(y,D),ut({fetchers:new Map(U.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function Ie(y,D,H,V={}){let F=Ra(U.matches,D);Pl(y),ut({errors:{[F.route.id]:H},fetchers:new Map(U.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function fi(y){return ae.set(y,(ae.get(y)||0)+1),Ee.has(y)&&Ee.delete(y),U.fetchers.get(y)||Ub}function Po(y,D){Ct(y,D?.reason),bt(y,Jn(null))}function Pl(y){let D=U.fetchers.get(y);P.has(y)&&!(D&&D.state==="loading"&&X.has(y))&&Ct(y),$.delete(y),X.delete(y),W.delete(y),Ee.delete(y),Z.delete(y),U.fetchers.delete(y)}function al(y){let D=(ae.get(y)||0)-1;D<=0?(ae.delete(y),Ee.add(y)):ae.set(y,D),ut({fetchers:new Map(U.fetchers)})}function Ct(y,D){let H=P.get(y);H&&(H.abort(D),P.delete(y))}function bn(y){for(let D of y){let H=fi(D),V=Jn(H.data);U.fetchers.set(D,V)}}function za(){let y=[],D=!1;for(let H of W){let V=U.fetchers.get(H);Re(V,`Expected fetcher: ${H}`),V.state==="loading"&&(W.delete(H),y.push(H),D=!0)}return bn(y),D}function Wn(y){let D=[];for(let[H,V]of X)if(V<y){let F=U.fetchers.get(H);Re(F,`Expected fetcher: ${H}`),F.state==="loading"&&(Ct(H),X.delete(H),D.push(H))}return bn(D),D.length>0}function Ko(y,D){let H=U.blockers.get(y)||Qr;return pe.get(y)!==D&&pe.set(y,D),H}function Kl(y){U.blockers.delete(y),pe.delete(y)}function _a(y,D){let H=U.blockers.get(y)||Qr;Re(H.state==="unblocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="proceeding"||H.state==="blocked"&&D.state==="unblocked"||H.state==="proceeding"&&D.state==="unblocked",`Invalid blocker state transition: ${H.state} -> ${D.state}`);let V=new Map(U.blockers);V.set(y,D),ut({blockers:V})}function ll({currentLocation:y,nextLocation:D,historyAction:H}){if(pe.size===0)return;pe.size>1&&ot(!1,"A router only supports one blocker at a time");let V=Array.from(pe.entries()),[F,se]=V[V.length-1],te=U.blockers.get(F);if(!(te&&te.state==="proceeding")&&se({currentLocation:y,nextLocation:D,historyAction:H}))return F}function wn(y){let D=rn(404,{pathname:y}),H=v||b,{matches:V,route:F}=Oo(H);return{notFoundMatches:V,route:F,error:D}}function Jo(y,D,H){if(z=y,q=D,R=H||null,!K&&U.navigation===os){K=!0;let V=rl(U.location,U.matches);V!=null&&ut({restoreScrollPosition:V})}return()=>{z=null,q=null,R=null}}function Jl(y,D){return R&&R(y,D.map(V=>ob(V,U.loaderData)))||y.key}function di(y,D){if(z&&q){let H=Jl(y,D);z[H]=q()}}function rl(y,D){if(z){let H=Jl(y,D),V=z[H];if(typeof V=="number")return V}return null}function In(y,D,H){if(l.patchRoutesOnNavigation)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:Jr(D,H,m,!0)}}else return{active:!0,matches:Jr(D,H,m,!0)||[]};return{active:!1,matches:null}}async function wa(y,D,H,V){if(!l.patchRoutesOnNavigation)return{type:"success",matches:y};let F=y;for(;;){let se=v==null,te=v||b,re=h;try{await l.patchRoutesOnNavigation({signal:H,path:D,matches:F,fetcherKey:V,patch:(me,oe)=>{H.aborted||Rm(me,oe,te,re,d,!1)}})}catch(me){return{type:"error",error:me,partialMatches:F}}finally{se&&!H.aborted&&(b=[...b])}if(H.aborted)return{type:"aborted"};let ie=Ta(te,D,m),ce=null;if(ie){if(Object.keys(ie[0].params).length===0)return{type:"success",matches:ie};if(ce=Jr(te,D,m,!0),!(ce&&F.length<ce.length&&hi(F,ce.slice(0,F.length))))return{type:"success",matches:ie}}if(ce||(ce=Jr(te,D,m,!0)),!ce||hi(F,ce))return{type:"success",matches:null};F=ce}}function hi(y,D){return y.length===D.length&&y.every((H,V)=>H.route.id===D[V].route.id)}function gn(y){h={},v=Ir(y,d,void 0,h)}function gt(y,D,H=!1){let V=v==null;Rm(y,D,v||b,h,d,H),V&&(b=[...b],ut({}))}return ge={get basename(){return m},get future(){return S},get state(){return U},get routes(){return b},get window(){return i},initialize:pn,subscribe:el,enableScrollRestoration:Jo,navigate:tl,fetch:nl,revalidate:Qo,createHref:y=>l.history.createHref(y),encodeLocation:y=>l.history.encodeLocation(y),getFetcher:fi,resetFetcher:Po,deleteFetcher:al,dispose:Zl,getBlocker:Ko,deleteBlocker:Kl,patchRoutes:gt,_internalFetchControllers:P,_internalSetRoutes:gn,_internalSetStateDoNotUseOrYouWillBreakYourApp(y){ut(y)}},l.unstable_instrumentations&&(ge=Db(ge,l.unstable_instrumentations.map(y=>y.router).filter(Boolean))),ge}function Lb(l){return l!=null&&("formData"in l&&l.formData!=null||"body"in l&&l.body!==void 0)}function ds(l,i,u,c,s,d){let h,b;if(s){h=[];for(let m of i)if(h.push(m),m.route.id===s){b=m;break}}else h=i,b=i[i.length-1];let v=qo(c||".",Lo(h),on(l.pathname,u)||l.pathname,d==="path");if(c==null&&(v.search=l.search,v.hash=l.hash),(c==null||c===""||c===".")&&b){let m=Es(v.search);if(b.route.index&&!m)v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index";else if(!b.route.index&&m){let g=new URLSearchParams(v.search),S=g.getAll("index");g.delete("index"),S.filter(T=>T).forEach(T=>g.append("index",T));let M=g.toString();v.search=M?`?${M}`:""}}return u!=="/"&&(v.pathname=xb({basename:u,pathname:v.pathname})),Mn(v)}function Om(l,i,u){if(!u||!Lb(u))return{path:i};if(u.formMethod&&!ag(u.formMethod))return{path:i,error:rn(405,{method:u.formMethod})};let c=()=>({path:i,error:rn(400,{type:"invalid-body"})}),d=(u.formMethod||"get").toUpperCase(),h=v0(i);if(u.body!==void 0){if(u.formEncType==="text/plain"){if(!zt(d))return c();let S=typeof u.body=="string"?u.body:u.body instanceof FormData||u.body instanceof URLSearchParams?Array.from(u.body.entries()).reduce((M,[T,z])=>`${M}${T}=${z}
`,""):String(u.body);return{path:i,submission:{formMethod:d,formAction:h,formEncType:u.formEncType,formData:void 0,json:void 0,text:S}}}else if(u.formEncType==="application/json"){if(!zt(d))return c();try{let S=typeof u.body=="string"?JSON.parse(u.body):u.body;return{path:i,submission:{formMethod:d,formAction:h,formEncType:u.formEncType,formData:void 0,json:S,text:void 0}}}catch{return c()}}}Re(typeof FormData=="function","FormData is not available in this environment");let b,v;if(u.formData)b=ps(u.formData),v=u.formData;else if(u.body instanceof FormData)b=ps(u.body),v=u.body;else if(u.body instanceof URLSearchParams)b=u.body,v=_m(b);else if(u.body==null)b=new URLSearchParams,v=new FormData;else try{b=new URLSearchParams(u.body),v=_m(b)}catch{return c()}let m={formMethod:d,formAction:h,formEncType:u&&u.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(zt(m.formMethod))return{path:i,submission:m};let g=Ma(i);return l&&g.search&&Es(g.search)&&b.append("index",""),g.search=`?${b}`,{path:Mn(g),submission:m}}function Tm(l,i,u,c,s,d,h,b,v,m,g,S,M,T,z,R,q,K,Q,J,Se){let ee=J?Kt(J[1])?J[1].error:J[1].data:void 0,ge=s.createURL(d.location),U=s.createURL(v),ne;if(g&&d.errors){let I=Object.keys(d.errors)[0];ne=h.findIndex(N=>N.route.id===I)}else if(J&&Kt(J[1])){let I=J[0];ne=h.findIndex(N=>N.route.id===I)-1}let he=J?J[1].statusCode:void 0,Ue=he&&he>=400,Me={currentUrl:ge,currentParams:d.matches[0]?.params||{},nextUrl:U,nextParams:h[0].params,...b,actionResult:ee,actionStatus:he},Ae=ni(h),lt=h.map((I,N)=>{let{route:Z}=I,P=null;if(ne!=null&&N>ne?P=!1:Z.lazy?P=!0:xs(Z)?g?P=hs(Z,d.loaderData,d.errors):qb(d.loaderData,d.matches[N],I)&&(P=!0):P=!1,P!==null)return ms(u,c,l,Ae,I,m,i,P);let fe=!1;typeof Se=="boolean"?fe=Se:Ue?fe=!1:(S||ge.pathname+ge.search===U.pathname+U.search||ge.search!==U.search||Bb(d.matches[N],I))&&(fe=!0);let E={...Me,defaultShouldRevalidate:fe},X=Fr(I,E);return ms(u,c,l,Ae,I,m,i,X,E,Se)}),Ye=[];return z.forEach((I,N)=>{if(g||!h.some(ae=>ae.route.id===I.routeId)||T.has(N))return;let Z=d.fetchers.get(N),P=Z&&Z.state!=="idle"&&Z.data===void 0,fe=Ta(q,I.path,K);if(!fe){if(Q&&P)return;Ye.push({key:N,routeId:I.routeId,path:I.path,matches:null,match:null,request:null,controller:null});return}if(R.has(N))return;let E=Co(fe,I.path),X=new AbortController,W=Yl(s,I.path,X.signal),$=null;if(M.has(N))M.delete(N),$=Gl(u,c,W,fe,E,m,i);else if(P)S&&($=Gl(u,c,W,fe,E,m,i));else{let ae;typeof Se=="boolean"?ae=Se:Ue?ae=!1:ae=S;let Ee={...Me,defaultShouldRevalidate:ae};Fr(E,Ee)&&($=Gl(u,c,W,fe,E,m,i,Ee))}$&&Ye.push({key:N,routeId:I.routeId,path:I.path,matches:$,match:E,request:W,controller:X})}),{dsMatches:lt,revalidatingFetchers:Ye}}function xs(l){return l.loader!=null||l.middleware!=null&&l.middleware.length>0}function hs(l,i,u){if(l.lazy)return!0;if(!xs(l))return!1;let c=i!=null&&l.id in i,s=u!=null&&u[l.id]!==void 0;return!c&&s?!1:typeof l.loader=="function"&&l.loader.hydrate===!0?!0:!c&&!s}function qb(l,i,u){let c=!i||u.route.id!==i.route.id,s=!l.hasOwnProperty(u.route.id);return c||s}function Bb(l,i){let u=l.route.path;return l.pathname!==i.pathname||u!=null&&u.endsWith("*")&&l.params["*"]!==i.params["*"]}function Fr(l,i){if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate(i);if(typeof u=="boolean")return u}return i.defaultShouldRevalidate}function Rm(l,i,u,c,s,d){let h;if(l){let m=c[l];Re(m,`No route found to patch children into: routeId = ${l}`),m.children||(m.children=[]),h=m.children}else h=u;let b=[],v=[];if(i.forEach(m=>{let g=h.find(S=>f0(m,S));g?v.push({existingRoute:g,newRoute:m}):b.push(m)}),b.length>0){let m=Ir(b,s,[l||"_","patch",String(h?.length||"0")],c);h.push(...m)}if(d&&v.length>0)for(let m=0;m<v.length;m++){let{existingRoute:g,newRoute:S}=v[m],M=g,[T]=Ir([S],s,[],{},!0);Object.assign(M,{element:T.element?T.element:M.element,errorElement:T.errorElement?T.errorElement:M.errorElement,hydrateFallbackElement:T.hydrateFallbackElement?T.hydrateFallbackElement:M.hydrateFallbackElement})}}function f0(l,i){return"id"in l&&"id"in i&&l.id===i.id?!0:l.index===i.index&&l.path===i.path&&l.caseSensitive===i.caseSensitive?(!l.children||l.children.length===0)&&(!i.children||i.children.length===0)?!0:l.children.every((u,c)=>i.children?.some(s=>f0(u,s))):!1}var Dm=new WeakMap,d0=({key:l,route:i,manifest:u,mapRouteProperties:c})=>{let s=u[i.id];if(Re(s,"No route found in manifest"),!s.lazy||typeof s.lazy!="object")return;let d=s.lazy[l];if(!d)return;let h=Dm.get(s);h||(h={},Dm.set(s,h));let b=h[l];if(b)return b;let v=(async()=>{let m=ab(l),S=s[l]!==void 0&&l!=="hasErrorBoundary";if(m)ot(!m,"Route property "+l+" is not a supported lazy route property. This property will be ignored."),h[l]=Promise.resolve();else if(S)ot(!1,`Route "${s.id}" has a static property "${l}" defined. The lazy property will be ignored.`);else{let M=await d();M!=null&&(Object.assign(s,{[l]:M}),Object.assign(s,c(s)))}typeof s.lazy=="object"&&(s.lazy[l]=void 0,Object.values(s.lazy).every(M=>M===void 0)&&(s.lazy=void 0))})();return h[l]=v,v},Mm=new WeakMap;function Yb(l,i,u,c,s){let d=u[l.id];if(Re(d,"No route found in manifest"),!l.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof l.lazy=="function"){let g=Mm.get(d);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let S=(async()=>{Re(typeof l.lazy=="function","No lazy route function found");let M=await l.lazy(),T={};for(let z in M){let R=M[z];if(R===void 0)continue;let q=rb(z),Q=d[z]!==void 0&&z!=="hasErrorBoundary";q?ot(!q,"Route property "+z+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Q?ot(!Q,`Route "${d.id}" has a static property "${z}" defined but its lazy function is also returning a value for this property. The lazy route property "${z}" will be ignored.`):T[z]=R}Object.assign(d,T),Object.assign(d,{...c(d),lazy:void 0})})();return Mm.set(d,S),S.catch(()=>{}),{lazyRoutePromise:S,lazyHandlerPromise:S}}let h=Object.keys(l.lazy),b=[],v;for(let g of h){if(s&&s.includes(g))continue;let S=d0({key:g,route:l,manifest:u,mapRouteProperties:c});S&&(b.push(S),g===i&&(v=S))}let m=b.length>0?Promise.all(b).then(()=>{}):void 0;return m?.catch(()=>{}),v?.catch(()=>{}),{lazyRoutePromise:m,lazyHandlerPromise:v}}async function Am(l){let i=l.matches.filter(s=>s.shouldLoad),u={};return(await Promise.all(i.map(s=>s.resolve()))).forEach((s,d)=>{u[i[d].route.id]=s}),u}async function Xb(l){return l.matches.some(i=>i.route.middleware)?h0(l,()=>Am(l)):Am(l)}function h0(l,i){return Gb(l,i,c=>{if(ng(c))throw c;return c},Wb,u);function u(c,s,d){if(d)return Promise.resolve(Object.assign(d.value,{[s]:{type:"error",result:c}}));{let{matches:h}=l,b=Math.min(Math.max(h.findIndex(m=>m.route.id===s),0),Math.max(h.findIndex(m=>m.shouldCallHandler()),0)),v=Ra(h,h[b].route.id).route.id;return Promise.resolve({[v]:{type:"error",result:c}})}}}async function Gb(l,i,u,c,s){let{matches:d,request:h,params:b,context:v,unstable_pattern:m}=l,g=d.flatMap(M=>M.route.middleware?M.route.middleware.map(T=>[M.route.id,T]):[]);return await m0({request:h,params:b,context:v,unstable_pattern:m},g,i,u,c,s)}async function m0(l,i,u,c,s,d,h=0){let{request:b}=l;if(b.signal.aborted)throw b.signal.reason??new Error(`Request aborted: ${b.method} ${b.url}`);let v=i[h];if(!v)return await u();let[m,g]=v,S,M=async()=>{if(S)throw new Error("You may only call `next()` once per middleware");try{return S={value:await m0(l,i,u,c,s,d,h+1)},S.value}catch(T){return S={value:await d(T,m,S)},S.value}};try{let T=await g(l,M),z=T!=null?c(T):void 0;return s(z)?z:S?z??S.value:(S={value:await M()},S.value)}catch(T){return await d(T,m,S)}}function p0(l,i,u,c,s){let d=d0({key:"middleware",route:c.route,manifest:i,mapRouteProperties:l}),h=Yb(c.route,zt(u.method)?"action":"loader",i,l,s);return{middleware:d,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function ms(l,i,u,c,s,d,h,b,v=null,m){let g=!1,S=p0(l,i,u,s,d);return{...s,_lazyPromises:S,shouldLoad:b,shouldRevalidateArgs:v,shouldCallHandler(M){return g=!0,v?typeof m=="boolean"?Fr(s,{...v,defaultShouldRevalidate:m}):typeof M=="boolean"?Fr(s,{...v,defaultShouldRevalidate:M}):Fr(s,v):b},resolve(M){let{lazy:T,loader:z,middleware:R}=s.route,q=g||b||M&&!zt(u.method)&&(T||z),K=R&&R.length>0&&!z&&!T;return q&&(zt(u.method)||!K)?Zb({request:u,unstable_pattern:c,match:s,lazyHandlerPromise:S?.handler,lazyRoutePromise:S?.route,handlerOverride:M,scopedContext:h}):Promise.resolve({type:"data",result:void 0})}}}function Gl(l,i,u,c,s,d,h,b=null){return c.map(v=>v.route.id!==s.route.id?{...v,shouldLoad:!1,shouldRevalidateArgs:b,shouldCallHandler:()=>!1,_lazyPromises:p0(l,i,u,v,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ms(l,i,u,ni(c),v,d,h,!0,b))}async function Qb(l,i,u,c,s,d){u.some(m=>m._lazyPromises?.middleware)&&await Promise.all(u.map(m=>m._lazyPromises?.middleware));let h={request:i,unstable_pattern:ni(u),params:u[0].params,context:s,matches:u},v=await l({...h,fetcherKey:c,runClientMiddleware:m=>{let g=h;return h0(g,()=>m({...g,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(u.flatMap(m=>[m._lazyPromises?.handler,m._lazyPromises?.route]))}catch{}return v}async function Zb({request:l,unstable_pattern:i,match:u,lazyHandlerPromise:c,lazyRoutePromise:s,handlerOverride:d,scopedContext:h}){let b,v,m=zt(l.method),g=m?"action":"loader",S=M=>{let T,z=new Promise((K,Q)=>T=Q);v=()=>T(),l.signal.addEventListener("abort",v);let R=K=>typeof M!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${u.route.id}]`)):M({request:l,unstable_pattern:i,params:u.params,context:h},...K!==void 0?[K]:[]),q=(async()=>{try{return{type:"data",result:await(d?d(Q=>R(Q)):R())}}catch(K){return{type:"error",result:K}}})();return Promise.race([q,z])};try{let M=m?u.route.action:u.route.loader;if(c||s)if(M){let T,[z]=await Promise.all([S(M).catch(R=>{T=R}),c,s]);if(T!==void 0)throw T;b=z}else{await c;let T=m?u.route.action:u.route.loader;if(T)[b]=await Promise.all([S(T),s]);else if(g==="action"){let z=new URL(l.url),R=z.pathname+z.search;throw rn(405,{method:l.method,pathname:R,routeId:u.route.id})}else return{type:"data",result:void 0}}else if(M)b=await S(M);else{let T=new URL(l.url),z=T.pathname+T.search;throw rn(404,{pathname:z})}}catch(M){return{type:"error",result:M}}finally{v&&l.signal.removeEventListener("abort",v)}return b}async function Vb(l){let i=l.headers.get("Content-Type");return i&&/\bapplication\/json\b/.test(i)?l.body==null?null:l.json():l.text()}async function Pb(l){let{result:i,type:u}=l;if(Ss(i)){let c;try{c=await Vb(i)}catch(s){return{type:"error",error:s}}return u==="error"?{type:"error",error:new ti(i.status,i.statusText,c),statusCode:i.status,headers:i.headers}:{type:"data",data:c,statusCode:i.status,headers:i.headers}}return u==="error"?km(i)?i.data instanceof Error?{type:"error",error:i.data,statusCode:i.init?.status,headers:i.init?.headers?new Headers(i.init.headers):void 0}:{type:"error",error:Fb(i),statusCode:ei(i)?i.status:void 0,headers:i.init?.headers?new Headers(i.init.headers):void 0}:{type:"error",error:i,statusCode:ei(i)?i.status:void 0}:km(i)?{type:"data",data:i.data,statusCode:i.init?.status,headers:i.init?.headers?new Headers(i.init.headers):void 0}:{type:"data",data:i}}function Kb(l,i,u,c,s){let d=l.headers.get("Location");if(Re(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!ys(d)){let h=c.slice(0,c.findIndex(b=>b.route.id===u)+1);d=ds(new URL(i.url),h,s,d),l.headers.set("Location",d)}return l}function zm(l,i,u,c){let s=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ys(l)){let d=l,h=d.startsWith("//")?new URL(i.protocol+d):new URL(d);if(s.includes(h.protocol))throw new Error("Invalid redirect location");let b=on(h.pathname,u)!=null;if(h.origin===i.origin&&b)return h.pathname+h.search+h.hash}try{let d=c.createURL(l);if(s.includes(d.protocol))throw new Error("Invalid redirect location")}catch{}return l}function Yl(l,i,u,c){let s=l.createURL(v0(i)).toString(),d={signal:u};if(c&&zt(c.formMethod)){let{formMethod:h,formEncType:b}=c;d.method=h.toUpperCase(),b==="application/json"?(d.headers=new Headers({"Content-Type":b}),d.body=JSON.stringify(c.json)):b==="text/plain"?d.body=c.text:b==="application/x-www-form-urlencoded"&&c.formData?d.body=ps(c.formData):d.body=c.formData}return new Request(s,d)}function ps(l){let i=new URLSearchParams;for(let[u,c]of l.entries())i.append(u,typeof c=="string"?c:c.name);return i}function _m(l){let i=new FormData;for(let[u,c]of l.entries())i.append(u,c);return i}function Jb(l,i,u,c=!1,s=!1){let d={},h=null,b,v=!1,m={},g=u&&Kt(u[1])?u[1].error:void 0;return l.forEach(S=>{if(!(S.route.id in i))return;let M=S.route.id,T=i[M];if(Re(!$a(T),"Cannot handle redirect results in processLoaderData"),Kt(T)){let z=T.error;if(g!==void 0&&(z=g,g=void 0),h=h||{},s)h[M]=z;else{let R=Ra(l,M);h[R.route.id]==null&&(h[R.route.id]=z)}c||(d[M]=s0),v||(v=!0,b=ei(T.error)?T.error.status:500),T.headers&&(m[M]=T.headers)}else d[M]=T.data,T.statusCode&&T.statusCode!==200&&!v&&(b=T.statusCode),T.headers&&(m[M]=T.headers)}),g!==void 0&&u&&(h={[u[0]]:g},u[2]&&(d[u[2]]=void 0)),{loaderData:d,errors:h,statusCode:b||200,loaderHeaders:m}}function wm(l,i,u,c,s,d){let{loaderData:h,errors:b}=Jb(i,u,c);return s.filter(v=>!v.matches||v.matches.some(m=>m.shouldLoad)).forEach(v=>{let{key:m,match:g,controller:S}=v;if(S&&S.signal.aborted)return;let M=d[m];if(Re(M,"Did not find corresponding fetcher result"),Kt(M)){let T=Ra(l.matches,g?.route.id);b&&b[T.route.id]||(b={...b,[T.route.id]:M.error}),l.fetchers.delete(m)}else if($a(M))Re(!1,"Unhandled fetcher revalidation redirect");else{let T=Jn(M.data);l.fetchers.set(m,T)}}),{loaderData:h,errors:b}}function Nm(l,i,u,c){let s=Object.entries(i).filter(([,d])=>d!==s0).reduce((d,[h,b])=>(d[h]=b,d),{});for(let d of u){let h=d.route.id;if(!i.hasOwnProperty(h)&&l.hasOwnProperty(h)&&d.route.loader&&(s[h]=l[h]),c&&c.hasOwnProperty(h))break}return s}function Cm(l){return l?Kt(l[1])?{actionData:{}}:{actionData:{[l[0]]:l[1].data}}:{}}function Ra(l,i){return(i?l.slice(0,l.findIndex(c=>c.route.id===i)+1):[...l]).reverse().find(c=>c.route.hasErrorBoundary===!0)||l[0]}function Oo(l){let i=l.length===1?l[0]:l.find(u=>u.index||!u.path||u.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:i}],route:i}}function rn(l,{pathname:i,routeId:u,method:c,type:s,message:d}={}){let h="Unknown Server Error",b="Unknown @remix-run/router error";return l===400?(h="Bad Request",c&&i&&u?b=`You made a ${c} request to "${i}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`:s==="invalid-body"&&(b="Unable to encode submission body")):l===403?(h="Forbidden",b=`Route "${u}" does not match URL "${i}"`):l===404?(h="Not Found",b=`No route matches URL "${i}"`):l===405&&(h="Method Not Allowed",c&&i&&u?b=`You made a ${c.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`:c&&(b=`Invalid request method "${c.toUpperCase()}"`)),new ti(l||500,h,new Error(b),!0)}function To(l){let i=Object.entries(l);for(let u=i.length-1;u>=0;u--){let[c,s]=i[u];if($a(s))return{key:c,result:s}}}function v0(l){let i=typeof l=="string"?Ma(l):l;return Mn({...i,hash:""})}function $b(l,i){return l.pathname!==i.pathname||l.search!==i.search?!1:l.hash===""?i.hash!=="":l.hash===i.hash?!0:i.hash!==""}function Fb(l){return new ti(l.init?.status??500,l.init?.statusText??"Internal Server Error",l.data)}function Wb(l){return l!=null&&typeof l=="object"&&Object.entries(l).every(([i,u])=>typeof i=="string"&&Ib(u))}function Ib(l){return l!=null&&typeof l=="object"&&"type"in l&&"result"in l&&(l.type==="data"||l.type==="error")}function eg(l){return Ss(l.result)&&u0.has(l.result.status)}function Kt(l){return l.type==="error"}function $a(l){return(l&&l.type)==="redirect"}function km(l){return typeof l=="object"&&l!=null&&"type"in l&&"data"in l&&"init"in l&&l.type==="DataWithResponseInit"}function Ss(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.headers=="object"&&typeof l.body<"u"}function tg(l){return u0.has(l)}function ng(l){return Ss(l)&&tg(l.status)&&l.headers.has("Location")}function ag(l){return Cb.has(l.toUpperCase())}function zt(l){return wb.has(l.toUpperCase())}function Es(l){return new URLSearchParams(l).getAll("index").some(i=>i==="")}function Co(l,i){let u=typeof i=="string"?Ma(i).search:i.search;if(l[l.length-1].route.index&&Es(u||""))return l[l.length-1];let c=a0(l);return c[c.length-1]}function Um(l){let{formMethod:i,formAction:u,formEncType:c,text:s,formData:d,json:h}=l;if(!(!i||!u||!c)){if(s!=null)return{formMethod:i,formAction:u,formEncType:c,formData:void 0,json:void 0,text:s};if(d!=null)return{formMethod:i,formAction:u,formEncType:c,formData:d,json:void 0,text:void 0};if(h!==void 0)return{formMethod:i,formAction:u,formEncType:c,formData:void 0,json:h,text:void 0}}}function us(l,i){return i?{state:"loading",location:l,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}:{state:"loading",location:l,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function lg(l,i){return{state:"submitting",location:l,formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text}}function Zr(l,i){return l?{state:"loading",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:i}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function rg(l,i){return{state:"submitting",formMethod:l.formMethod,formAction:l.formAction,formEncType:l.formEncType,formData:l.formData,json:l.json,text:l.text,data:i?i.data:void 0}}function Jn(l){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:l}}function ig(l,i){try{let u=l.sessionStorage.getItem(c0);if(u){let c=JSON.parse(u);for(let[s,d]of Object.entries(c||{}))d&&Array.isArray(d)&&i.set(s,new Set(d||[]))}}catch{}}function og(l,i){if(i.size>0){let u={};for(let[c,s]of i)u[c]=[...s];try{l.sessionStorage.setItem(c0,JSON.stringify(u))}catch(c){ot(!1,`Failed to save applied view transitions in sessionStorage (${c}).`)}}}function jm(){let l,i,u=new Promise((c,s)=>{l=async d=>{c(d);try{await u}catch{}},i=async d=>{s(d);try{await u}catch{}}});return{promise:u,resolve:l,reject:i}}var Fa=_.createContext(null);Fa.displayName="DataRouter";var ai=_.createContext(null);ai.displayName="DataRouterState";var b0=_.createContext(!1);function ug(){return _.useContext(b0)}var Os=_.createContext({isTransitioning:!1});Os.displayName="ViewTransition";var g0=_.createContext(new Map);g0.displayName="Fetchers";var cg=_.createContext(null);cg.displayName="Await";var Jt=_.createContext(null);Jt.displayName="Navigation";var Bo=_.createContext(null);Bo.displayName="Location";var mn=_.createContext({outlet:null,matches:[],isDataRoute:!1});mn.displayName="Route";var Ts=_.createContext(null);Ts.displayName="RouteError";var y0="REACT_ROUTER_ERROR",sg="REDIRECT",fg="ROUTE_ERROR_RESPONSE";function dg(l){if(l.startsWith(`${y0}:${sg}:{`))try{let i=JSON.parse(l.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function hg(l){if(l.startsWith(`${y0}:${fg}:{`))try{let i=JSON.parse(l.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new ti(i.status,i.statusText,i.data)}catch{}}function mg(l,{relative:i}={}){Re(Ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=_.useContext(Jt),{hash:s,pathname:d,search:h}=li(l,{relative:i}),b=d;return u!=="/"&&(b=d==="/"?u:Dn([u,d])),c.createHref({pathname:b,search:h,hash:s})}function Ql(){return _.useContext(Bo)!=null}function An(){return Re(Ql(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Bo).location}var x0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function S0(l){_.useContext(Jt).static||_.useLayoutEffect(l)}function Wa(){let{isDataRoute:l}=_.useContext(mn);return l?zg():pg()}function pg(){Re(Ql(),"useNavigate() may be used only in the context of a <Router> component.");let l=_.useContext(Fa),{basename:i,navigator:u}=_.useContext(Jt),{matches:c}=_.useContext(mn),{pathname:s}=An(),d=JSON.stringify(Lo(c)),h=_.useRef(!1);return S0(()=>{h.current=!0}),_.useCallback((v,m={})=>{if(ot(h.current,x0),!h.current)return;if(typeof v=="number"){u.go(v);return}let g=qo(v,JSON.parse(d),s,m.relative==="path");l==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Dn([i,g.pathname])),(m.replace?u.replace:u.push)(g,m.state,m)},[i,u,d,s,l])}var vg=_.createContext(null);function bg(l){let i=_.useContext(mn).outlet;return _.useMemo(()=>i&&_.createElement(vg.Provider,{value:l},i),[i,l])}function li(l,{relative:i}={}){let{matches:u}=_.useContext(mn),{pathname:c}=An(),s=JSON.stringify(Lo(u));return _.useMemo(()=>qo(l,JSON.parse(s),c,i==="path"),[l,s,c,i])}function gg(l,i,u,c,s){Re(Ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=_.useContext(Jt),{matches:h}=_.useContext(mn),b=h[h.length-1],v=b?b.params:{},m=b?b.pathname:"/",g=b?b.pathnameBase:"/",S=b&&b.route;{let Q=S&&S.path||"";O0(m,!S||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let M=An(),T;T=M;let z=T.pathname||"/",R=z;if(g!=="/"){let Q=g.replace(/^\//,"").split("/");R="/"+z.replace(/^\//,"").split("/").slice(Q.length).join("/")}let q=Ta(l,{pathname:R});return ot(S||q!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),ot(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Og(q&&q.map(Q=>Object.assign({},Q,{params:Object.assign({},v,Q.params),pathname:Dn([g,d.encodeLocation?d.encodeLocation(Q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?g:Dn([g,d.encodeLocation?d.encodeLocation(Q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Q.pathnameBase])})),h,u,c,s)}function yg(){let l=Ag(),i=ei(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:d},"ErrorBoundary")," or"," ",_.createElement("code",{style:d},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},i),u?_.createElement("pre",{style:s},u):null,h)}var xg=_.createElement(yg,null),E0=class extends _.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,i){return i.location!==l.location||i.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:i.error,location:i.location,revalidation:l.revalidation||i.revalidation}}componentDidCatch(l,i){this.props.onError?this.props.onError(l,i):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=hg(l.digest);u&&(l=u)}let i=l!==void 0?_.createElement(mn.Provider,{value:this.props.routeContext},_.createElement(Ts.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?_.createElement(Sg,{error:l},i):i}};E0.contextType=b0;var cs=new WeakMap;function Sg({children:l,error:i}){let{basename:u}=_.useContext(Jt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let c=dg(i.digest);if(c){let s=cs.get(i);if(s)throw s;let d=r0(c.location,u);if(l0&&!cs.get(i))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw cs.set(i,h),h}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return l}function Eg({routeContext:l,match:i,children:u}){let c=_.useContext(Fa);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),_.createElement(mn.Provider,{value:l},u)}function Og(l,i=[],u=null,c=null,s=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let d=l,h=u?.errors;if(h!=null){let g=d.findIndex(S=>S.route.id&&h?.[S.route.id]!==void 0);Re(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let b=!1,v=-1;if(u)for(let g=0;g<d.length;g++){let S=d[g];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=g),S.route.id){let{loaderData:M,errors:T}=u,z=S.route.loader&&!M.hasOwnProperty(S.route.id)&&(!T||T[S.route.id]===void 0);if(S.route.lazy||z){b=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}let m=u&&c?(g,S)=>{c(g,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:ni(u.matches),errorInfo:S})}:void 0;return d.reduceRight((g,S,M)=>{let T,z=!1,R=null,q=null;u&&(T=h&&S.route.id?h[S.route.id]:void 0,R=S.route.errorElement||xg,b&&(v<0&&M===0?(O0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,q=null):v===M&&(z=!0,q=S.route.hydrateFallbackElement||null)));let K=i.concat(d.slice(0,M+1)),Q=()=>{let J;return T?J=R:z?J=q:S.route.Component?J=_.createElement(S.route.Component,null):S.route.element?J=S.route.element:J=g,_.createElement(Eg,{match:S,routeContext:{outlet:g,matches:K,isDataRoute:u!=null},children:J})};return u&&(S.route.ErrorBoundary||S.route.errorElement||M===0)?_.createElement(E0,{location:u.location,revalidation:u.revalidation,component:R,error:T,children:Q(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:m}):Q()},null)}function Rs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tg(l){let i=_.useContext(Fa);return Re(i,Rs(l)),i}function Rg(l){let i=_.useContext(ai);return Re(i,Rs(l)),i}function Dg(l){let i=_.useContext(mn);return Re(i,Rs(l)),i}function Ds(l){let i=Dg(l),u=i.matches[i.matches.length-1];return Re(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function Mg(){return Ds("useRouteId")}function Ag(){let l=_.useContext(Ts),i=Rg("useRouteError"),u=Ds("useRouteError");return l!==void 0?l:i.errors?.[u]}function zg(){let{router:l}=Tg("useNavigate"),i=Ds("useNavigate"),u=_.useRef(!1);return S0(()=>{u.current=!0}),_.useCallback(async(s,d={})=>{ot(u.current,x0),u.current&&(typeof s=="number"?await l.navigate(s):await l.navigate(s,{fromRouteId:i,...d}))},[l,i])}var Hm={};function O0(l,i,u){!i&&!Hm[l]&&(Hm[l]=!0,ot(!1,u))}var Lm={};function qm(l,i){!l&&!Lm[i]&&(Lm[i]=!0,console.warn(i))}var _g="useOptimistic",Bm=Gv[_g],wg=()=>{};function Ng(l){return Bm?Bm(l):[l,wg]}function Cg(l){let i={hasErrorBoundary:l.hasErrorBoundary||l.ErrorBoundary!=null||l.errorElement!=null};return l.Component&&(l.element&&ot(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(i,{element:_.createElement(l.Component),Component:void 0})),l.HydrateFallback&&(l.hydrateFallbackElement&&ot(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(i,{hydrateFallbackElement:_.createElement(l.HydrateFallback),HydrateFallback:void 0})),l.ErrorBoundary&&(l.errorElement&&ot(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(i,{errorElement:_.createElement(l.ErrorBoundary),ErrorBoundary:void 0})),i}var kg=["HydrateFallback","hydrateFallbackElement"],Ug=class{constructor(){this.status="pending",this.promise=new Promise((l,i)=>{this.resolve=u=>{this.status==="pending"&&(this.status="resolved",l(u))},this.reject=u=>{this.status==="pending"&&(this.status="rejected",i(u))}})}};function jg({router:l,flushSync:i,onError:u,unstable_useTransitions:c}){c=ug()||c;let[d,h]=_.useState(l.state),[b,v]=Ng(d),[m,g]=_.useState(),[S,M]=_.useState({isTransitioning:!1}),[T,z]=_.useState(),[R,q]=_.useState(),[K,Q]=_.useState(),J=_.useRef(new Map),Se=_.useCallback((ne,{deletedFetchers:he,newErrors:Ue,flushSync:Me,viewTransitionOpts:Ae})=>{Ue&&u&&Object.values(Ue).forEach(Ye=>u(Ye,{location:ne.location,params:ne.matches[0]?.params??{},unstable_pattern:ni(ne.matches)})),ne.fetchers.forEach((Ye,I)=>{Ye.data!==void 0&&J.current.set(I,Ye.data)}),he.forEach(Ye=>J.current.delete(Ye)),qm(Me===!1||i!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let lt=l.window!=null&&l.window.document!=null&&typeof l.window.document.startViewTransition=="function";if(qm(Ae==null||lt,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Ae||!lt){i&&Me?i(()=>h(ne)):c===!1?h(ne):_.startTransition(()=>{c===!0&&v(Ye=>Ym(Ye,ne)),h(ne)});return}if(i&&Me){i(()=>{R&&(T?.resolve(),R.skipTransition()),M({isTransitioning:!0,flushSync:!0,currentLocation:Ae.currentLocation,nextLocation:Ae.nextLocation})});let Ye=l.window.document.startViewTransition(()=>{i(()=>h(ne))});Ye.finished.finally(()=>{i(()=>{z(void 0),q(void 0),g(void 0),M({isTransitioning:!1})})}),i(()=>q(Ye));return}R?(T?.resolve(),R.skipTransition(),Q({state:ne,currentLocation:Ae.currentLocation,nextLocation:Ae.nextLocation})):(g(ne),M({isTransitioning:!0,flushSync:!1,currentLocation:Ae.currentLocation,nextLocation:Ae.nextLocation}))},[l.window,i,R,T,c,v,u]);_.useLayoutEffect(()=>l.subscribe(Se),[l,Se]),_.useEffect(()=>{S.isTransitioning&&!S.flushSync&&z(new Ug)},[S]),_.useEffect(()=>{if(T&&m&&l.window){let ne=m,he=T.promise,Ue=l.window.document.startViewTransition(async()=>{c===!1?h(ne):_.startTransition(()=>{c===!0&&v(Me=>Ym(Me,ne)),h(ne)}),await he});Ue.finished.finally(()=>{z(void 0),q(void 0),g(void 0),M({isTransitioning:!1})}),q(Ue)}},[m,T,l.window,c,v]),_.useEffect(()=>{T&&m&&b.location.key===m.location.key&&T.resolve()},[T,R,b.location,m]),_.useEffect(()=>{!S.isTransitioning&&K&&(g(K.state),M({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}),Q(void 0))},[S.isTransitioning,K]);let ee=_.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:ne=>l.navigate(ne),push:(ne,he,Ue)=>l.navigate(ne,{state:he,preventScrollReset:Ue?.preventScrollReset}),replace:(ne,he,Ue)=>l.navigate(ne,{replace:!0,state:he,preventScrollReset:Ue?.preventScrollReset})}),[l]),ge=l.basename||"/",U=_.useMemo(()=>({router:l,navigator:ee,static:!1,basename:ge,onError:u}),[l,ee,ge,u]);return _.createElement(_.Fragment,null,_.createElement(Fa.Provider,{value:U},_.createElement(ai.Provider,{value:b},_.createElement(g0.Provider,{value:J.current},_.createElement(Os.Provider,{value:S},_.createElement(qg,{basename:ge,location:b.location,navigationType:b.historyAction,navigator:ee,unstable_useTransitions:c},_.createElement(Hg,{routes:l.routes,future:l.future,state:b,onError:u})))))),null)}function Ym(l,i){return{...l,navigation:i.navigation.state!=="idle"?i.navigation:l.navigation,revalidation:i.revalidation!=="idle"?i.revalidation:l.revalidation,actionData:i.navigation.state!=="submitting"?i.actionData:l.actionData,fetchers:i.fetchers}}var Hg=_.memo(Lg);function Lg({routes:l,future:i,state:u,onError:c}){return gg(l,void 0,u,c,i)}function Yo({to:l,replace:i,state:u,relative:c}){Re(Ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=_.useContext(Jt);ot(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=_.useContext(mn),{pathname:h}=An(),b=Wa(),v=qo(l,Lo(d),h,c==="path"),m=JSON.stringify(v);return _.useEffect(()=>{b(JSON.parse(m),{replace:i,state:u,relative:c})},[b,m,c,i,u]),null}function T0(l){return bg(l.context)}function qg({basename:l="/",children:i=null,location:u,navigationType:c="POP",navigator:s,static:d=!1,unstable_useTransitions:h}){Re(!Ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),v=_.useMemo(()=>({basename:b,navigator:s,static:d,unstable_useTransitions:h,future:{}}),[b,s,d,h]);typeof u=="string"&&(u=Ma(u));let{pathname:m="/",search:g="",hash:S="",state:M=null,key:T="default"}=u,z=_.useMemo(()=>{let R=on(m,b);return R==null?null:{location:{pathname:R,search:g,hash:S,state:M,key:T},navigationType:c}},[b,m,g,S,M,T,c]);return ot(z!=null,`<Router basename="${b}"> is not able to match the URL "${m}${g}${S}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:_.createElement(Jt.Provider,{value:v},_.createElement(Bo.Provider,{children:i,value:z}))}var ko="get",Uo="application/x-www-form-urlencoded";function Xo(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Bg(l){return Xo(l)&&l.tagName.toLowerCase()==="button"}function Yg(l){return Xo(l)&&l.tagName.toLowerCase()==="form"}function Xg(l){return Xo(l)&&l.tagName.toLowerCase()==="input"}function Gg(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Qg(l,i){return l.button===0&&(!i||i==="_self")&&!Gg(l)}var Ro=null;function Zg(){if(Ro===null)try{new FormData(document.createElement("form"),0),Ro=!1}catch{Ro=!0}return Ro}var Vg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ss(l){return l!=null&&!Vg.has(l)?(ot(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uo}"`),null):l}function Pg(l,i){let u,c,s,d,h;if(Yg(l)){let b=l.getAttribute("action");c=b?on(b,i):null,u=l.getAttribute("method")||ko,s=ss(l.getAttribute("enctype"))||Uo,d=new FormData(l)}else if(Bg(l)||Xg(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||b.getAttribute("action");if(c=v?on(v,i):null,u=l.getAttribute("formmethod")||b.getAttribute("method")||ko,s=ss(l.getAttribute("formenctype"))||ss(b.getAttribute("enctype"))||Uo,d=new FormData(b,l),!Zg()){let{name:m,type:g,value:S}=l;if(g==="image"){let M=m?`${m}.`:"";d.append(`${M}x`,"0"),d.append(`${M}y`,"0")}else m&&d.append(m,S)}}else{if(Xo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ko,c=null,s=Uo,h=l}return d&&s==="text/plain"&&(h=d,d=void 0),{action:c,method:u.toLowerCase(),encType:s,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ms(l,i){if(l===!1||l===null||typeof l>"u")throw new Error(i)}function Kg(l,i,u,c){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${c}`:s.pathname=`${s.pathname}.${c}`:s.pathname==="/"?s.pathname=`_root.${c}`:i&&on(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function Jg(l,i){if(l.id in i)return i[l.id];try{let u=await import(l.module);return i[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $g(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Fg(l,i,u){let c=await Promise.all(l.map(async s=>{let d=i.routes[s.route.id];if(d){let h=await Jg(d,u);return h.links?h.links():[]}return[]}));return ty(c.flat(1).filter($g).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Xm(l,i,u,c,s,d){let h=(v,m)=>u[m]?v.route.id!==u[m].route.id:!0,b=(v,m)=>u[m].pathname!==v.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==v.params["*"];return d==="assets"?i.filter((v,m)=>h(v,m)||b(v,m)):d==="data"?i.filter((v,m)=>{let g=c.routes[v.route.id];if(!g||!g.hasLoader)return!1;if(h(v,m)||b(v,m))return!0;if(v.route.shouldRevalidate){let S=v.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Wg(l,i,{includeHydrateFallback:u}={}){return Ig(l.map(c=>{let s=i.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function Ig(l){return[...new Set(l)]}function ey(l){let i={},u=Object.keys(l).sort();for(let c of u)i[c]=l[c];return i}function ty(l,i){let u=new Set;return new Set(i),l.reduce((c,s)=>{let d=JSON.stringify(ey(s));return u.has(d)||(u.add(d),c.push({key:d,link:s})),c},[])}function R0(){let l=_.useContext(Fa);return Ms(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function ny(){let l=_.useContext(ai);return Ms(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var As=_.createContext(void 0);As.displayName="FrameworkContext";function D0(){let l=_.useContext(As);return Ms(l,"You must render this element inside a <HydratedRouter> element"),l}function ay(l,i){let u=_.useContext(As),[c,s]=_.useState(!1),[d,h]=_.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:m,onMouseLeave:g,onTouchStart:S}=i,M=_.useRef(null);_.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let R=K=>{K.forEach(Q=>{h(Q.isIntersecting)})},q=new IntersectionObserver(R,{threshold:.5});return M.current&&q.observe(M.current),()=>{q.disconnect()}}},[l]),_.useEffect(()=>{if(c){let R=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(R)}}},[c]);let T=()=>{s(!0)},z=()=>{s(!1),h(!1)};return u?l!=="intent"?[d,M,{}]:[d,M,{onFocus:Vr(b,T),onBlur:Vr(v,z),onMouseEnter:Vr(m,T),onMouseLeave:Vr(g,z),onTouchStart:Vr(S,T)}]:[!1,M,{}]}function Vr(l,i){return u=>{l&&l(u),u.defaultPrevented||i(u)}}function ly({page:l,...i}){let{router:u}=R0(),c=_.useMemo(()=>Ta(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?_.createElement(iy,{page:l,matches:c,...i}):null}function ry(l){let{manifest:i,routeModules:u}=D0(),[c,s]=_.useState([]);return _.useEffect(()=>{let d=!1;return Fg(l,i,u).then(h=>{d||s(h)}),()=>{d=!0}},[l,i,u]),c}function iy({page:l,matches:i,...u}){let c=An(),{future:s,manifest:d,routeModules:h}=D0(),{basename:b}=R0(),{loaderData:v,matches:m}=ny(),g=_.useMemo(()=>Xm(l,i,m,d,c,"data"),[l,i,m,d,c]),S=_.useMemo(()=>Xm(l,i,m,d,c,"assets"),[l,i,m,d,c]),M=_.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let R=new Set,q=!1;if(i.forEach(Q=>{let J=d.routes[Q.route.id];!J||!J.hasLoader||(!g.some(Se=>Se.route.id===Q.route.id)&&Q.route.id in v&&h[Q.route.id]?.shouldRevalidate||J.hasClientLoader?q=!0:R.add(Q.route.id))}),R.size===0)return[];let K=Kg(l,b,s.unstable_trailingSlashAwareDataRequests,"data");return q&&R.size>0&&K.searchParams.set("_routes",i.filter(Q=>R.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[K.pathname+K.search]},[b,s.unstable_trailingSlashAwareDataRequests,v,c,d,g,i,l,h]),T=_.useMemo(()=>Wg(S,d),[S,d]),z=ry(S);return _.createElement(_.Fragment,null,M.map(R=>_.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...u})),T.map(R=>_.createElement("link",{key:R,rel:"modulepreload",href:R,...u})),z.map(({key:R,link:q})=>_.createElement("link",{key:R,nonce:u.nonce,...q,crossOrigin:q.crossOrigin??u.crossOrigin})))}function oy(...l){return i=>{l.forEach(u=>{typeof u=="function"?u(i):u!=null&&(u.current=i)})}}var uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uy&&(window.__reactRouterVersion="7.13.0")}catch{}function cy(l,i){return Hb({basename:i?.basename,getContext:i?.getContext,future:i?.future,history:Iv({window:i?.window}),hydrationData:sy(),routes:l,mapRouteProperties:Cg,hydrationRouteProperties:kg,dataStrategy:i?.dataStrategy,patchRoutesOnNavigation:i?.patchRoutesOnNavigation,window:i?.window,unstable_instrumentations:i?.unstable_instrumentations}).initialize()}function sy(){let l=window?.__staticRouterHydrationData;return l&&l.errors&&(l={...l,errors:fy(l.errors)}),l}function fy(l){if(!l)return null;let i=Object.entries(l),u={};for(let[c,s]of i)if(s&&s.__type==="RouteErrorResponse")u[c]=new ti(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let d=window[s.__subType];if(typeof d=="function")try{let h=new d(s.message);h.stack="",u[c]=h}catch{}}if(u[c]==null){let d=new Error(s.message);d.stack="",u[c]=d}}else u[c]=s;return u}var M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A0=_.forwardRef(function({onClick:i,discover:u="render",prefetch:c="none",relative:s,reloadDocument:d,replace:h,state:b,target:v,to:m,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:M,...T},z){let{basename:R,unstable_useTransitions:q}=_.useContext(Jt),K=typeof m=="string"&&M0.test(m),Q=r0(m,R);m=Q.to;let J=mg(m,{relative:s}),[Se,ee,ge]=ay(c,T),U=my(m,{replace:h,state:b,target:v,preventScrollReset:g,relative:s,viewTransition:S,unstable_defaultShouldRevalidate:M,unstable_useTransitions:q});function ne(Ue){i&&i(Ue),Ue.defaultPrevented||U(Ue)}let he=_.createElement("a",{...T,...ge,href:Q.absoluteURL||J,onClick:Q.isExternal||d?i:ne,ref:oy(z,ee),target:v,"data-discover":!K&&u==="render"?"true":void 0});return Se&&!K?_.createElement(_.Fragment,null,he,_.createElement(ly,{page:J})):he});A0.displayName="Link";var vs=_.forwardRef(function({"aria-current":i="page",caseSensitive:u=!1,className:c="",end:s=!1,style:d,to:h,viewTransition:b,children:v,...m},g){let S=li(h,{relative:m.relative}),M=An(),T=_.useContext(ai),{navigator:z,basename:R}=_.useContext(Jt),q=T!=null&&yy(S)&&b===!0,K=z.encodeLocation?z.encodeLocation(S).pathname:S.pathname,Q=M.pathname,J=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;u||(Q=Q.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&R&&(J=on(J,R)||J);const Se=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ee=Q===K||!s&&Q.startsWith(K)&&Q.charAt(Se)==="/",ge=J!=null&&(J===K||!s&&J.startsWith(K)&&J.charAt(K.length)==="/"),U={isActive:ee,isPending:ge,isTransitioning:q},ne=ee?i:void 0,he;typeof c=="function"?he=c(U):he=[c,ee?"active":null,ge?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof d=="function"?d(U):d;return _.createElement(A0,{...m,"aria-current":ne,className:he,ref:g,style:Ue,to:h,viewTransition:b},typeof v=="function"?v(U):v)});vs.displayName="NavLink";var dy=_.forwardRef(({discover:l="render",fetcherKey:i,navigate:u,reloadDocument:c,replace:s,state:d,method:h=ko,action:b,onSubmit:v,relative:m,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:M,...T},z)=>{let{unstable_useTransitions:R}=_.useContext(Jt),q=by(),K=gy(b,{relative:m}),Q=h.toLowerCase()==="get"?"get":"post",J=typeof b=="string"&&M0.test(b),Se=ee=>{if(v&&v(ee),ee.defaultPrevented)return;ee.preventDefault();let ge=ee.nativeEvent.submitter,U=ge?.getAttribute("formmethod")||h,ne=()=>q(ge||ee.currentTarget,{fetcherKey:i,method:U,navigate:u,replace:s,state:d,relative:m,preventScrollReset:g,viewTransition:S,unstable_defaultShouldRevalidate:M});R&&u!==!1?_.startTransition(()=>ne()):ne()};return _.createElement("form",{ref:z,method:Q,action:K,onSubmit:c?v:Se,...T,"data-discover":!J&&l==="render"?"true":void 0})});dy.displayName="Form";function hy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z0(l){let i=_.useContext(Fa);return Re(i,hy(l)),i}function my(l,{target:i,replace:u,state:c,preventScrollReset:s,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b,unstable_useTransitions:v}={}){let m=Wa(),g=An(),S=li(l,{relative:d});return _.useCallback(M=>{if(Qg(M,i)){M.preventDefault();let T=u!==void 0?u:Mn(g)===Mn(S),z=()=>m(l,{replace:T,state:c,preventScrollReset:s,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:b});v?_.startTransition(()=>z()):z()}},[g,m,S,u,c,i,l,s,d,h,b,v])}var py=0,vy=()=>`__${String(++py)}__`;function by(){let{router:l}=z0("useSubmit"),{basename:i}=_.useContext(Jt),u=Mg(),c=l.fetch,s=l.navigate;return _.useCallback(async(d,h={})=>{let{action:b,method:v,encType:m,formData:g,body:S}=Pg(d,i);if(h.navigate===!1){let M=h.fetcherKey||vy();await c(M,u,h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:S,formMethod:h.method||v,formEncType:h.encType||m,flushSync:h.flushSync})}else await s(h.action||b,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:g,body:S,formMethod:h.method||v,formEncType:h.encType||m,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,s,i,u])}function gy(l,{relative:i}={}){let{basename:u}=_.useContext(Jt),c=_.useContext(mn);Re(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...li(l||".",{relative:i})},h=An();if(l==null){d.search=h.search;let b=new URLSearchParams(d.search),v=b.getAll("index");if(v.some(g=>g==="")){b.delete("index"),v.filter(S=>S).forEach(S=>b.append("index",S));let g=b.toString();d.search=g?`?${g}`:""}}return(!l||l===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:Dn([u,d.pathname])),Mn(d)}function yy(l,{relative:i}={}){let u=_.useContext(Os);Re(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=z0("useViewTransitionState"),s=li(l,{relative:i});if(!u.isTransitioning)return!1;let d=on(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=on(u.nextLocation.pathname,c)||u.nextLocation.pathname;return jo(s.pathname,h)!=null||jo(s.pathname,d)!=null}var xy=Fm();function Sy(l){return _.createElement(jg,{flushSync:xy.flushSync,...l})}const _0=_.createContext({user:null,token:null,setUser:()=>{},setToken:()=>{},difficulty:null,setDifficulty:()=>{}}),Ey=({children:l})=>{const[i,u]=_.useState(()=>{const S=localStorage.getItem("USER_DATA");return S?JSON.parse(S):{}}),[c,s]=_.useState(()=>{const S=localStorage.getItem("USER_DATA"),M=S?JSON.parse(S):{};return M.difficulty!==void 0?M.difficulty:null}),[d,h]=_.useState(localStorage.getItem("ACCESS_TOKEN")),b=S=>{h(S),S?localStorage.setItem("ACCESS_TOKEN",S):localStorage.removeItem("ACCESS_TOKEN")},v=S=>{if(S&&S.trim()!==""){const M="token_"+S.trim();return b(M),m({name:S}),!0}return!1},m=S=>{u(S),S?localStorage.setItem("USER_DATA",JSON.stringify(S)):localStorage.removeItem("USER_DATA")},g=S=>{s(S);const M=localStorage.getItem("USER_DATA"),T=M?JSON.parse(M):{};T.difficulty=S,u(T),localStorage.setItem("USER_DATA",JSON.stringify(T))};return w.jsx(_0.Provider,{value:{user:i,token:d,setUser:m,setToken:b,login:v,difficulty:c,setDifficulty:g},children:l})},Ia=()=>_.useContext(_0);function Oy(){const[l,i]=_.useState(""),[u,c]=_.useState(""),{login:s}=Ia(),d=Wa(),h=()=>{if(l.trim()===""){c("Prosím, zadejte uživatelské jméno.");return}s(l)?d("/dashboard"):c("Nepodařilo se přihlásit.")};return w.jsxs("div",{className:"login-wrapper",children:[w.jsxs("h1",{className:"site-title",children:[w.jsx("span",{className:"site-title-first",children:"I"}),"nternet",w.jsx("span",{className:"site-title-first",children:"B"}),"ez",w.jsx("span",{className:"site-title-first",children:"O"}),"bav",w.jsx("span",{className:"site-title-first",children:"."}),"cz"]}),w.jsxs("div",{className:"login-form cust-box",children:[w.jsx("p",{className:"login-error",children:u||" "}),w.jsx("h1",{children:"Přihlášení"}),w.jsx("input",{type:"text",placeholder:"Uživatelské jméno",value:l,onChange:b=>{i(b.target.value),c("")}}),w.jsx("button",{onClick:h,children:"Hrát"})]})]})}function Ty(){const{token:l}=Ia(),[i,u]=_.useState([]),[c,s]=_.useState(!0),[d,h]=_.useState(null),[b,v]=_.useState("");if(_.useEffect(()=>{(async()=>{try{s(!0);const S=await fetch("/api/dashboard"),M=await S.text();if(!S.ok)throw new Error(`Fetch failed: ${S.status}
${M}`);const T=M.indexOf("[");if(T===-1)throw new Error("Nepřišlo JSON pole.");const z=JSON.parse(M.slice(T));u(Array.isArray(z)?z:[]),h(null)}catch(S){console.error("Chyba při stahování dat:",S),h("Nepodařilo se načíst data.")}finally{s(!1)}})()},[]),!l)return w.jsx(Yo,{to:"/login"});const m=i.filter(g=>b?g.difficulty_text===b:!0);return w.jsxs("div",{className:"dashboard-content-container cust-box",children:[w.jsx("h1",{children:"Výsledky hráčů"}),d&&w.jsx("div",{className:"error-message",children:d}),w.jsx("div",{className:"dashboard-filter",children:w.jsxs("label",{children:["Filtr obtížnosti:"," ",w.jsxs("select",{value:b,onChange:g=>v(g.target.value),children:[w.jsx("option",{value:"",children:"Vše"}),w.jsx("option",{value:"Lehká",children:"Lehká"}),w.jsx("option",{value:"Střední",children:"Střední"}),w.jsx("option",{value:"Těžká",children:"Těžká"})]})]})}),w.jsxs("table",{className:"score-table",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:"Pořadí"}),w.jsx("th",{children:"Uživatelské jméno"}),w.jsx("th",{children:"Obtížnost"}),w.jsx("th",{children:"Body"})]})}),w.jsx("tbody",{children:c?w.jsx("tr",{children:w.jsx("td",{colSpan:"4",className:"loading-message",children:"Načítám výsledky... ⏳"})}):m.length>0?w.jsxs(w.Fragment,{children:[m.map((g,S)=>w.jsxs("tr",{children:[w.jsxs("td",{children:[S+1,"."]}),w.jsx("td",{children:g.username}),w.jsx("td",{children:g.difficulty_text}),w.jsx("td",{children:g.points})]},`${g.username??"user"}-${S}`)),w.jsxs("tr",{className:"more-records-row",children:[w.jsx("td",{children:"..."}),w.jsx("td",{children:"..."}),w.jsx("td",{children:"..."}),w.jsx("td",{children:"..."})]})]}):w.jsx("tr",{children:w.jsx("td",{colSpan:"4",className:"no-results",children:"Zatím žádné výsledky pro tuto obtížnost."})})})]})]})}function Ry(){return w.jsx("div",{children:"404 - Page not found"})}function Gm(){const{token:l,user:i,setDifficulty:u}=Ia(),c=Wa(),[s,d]=_.useState(!1),[h,b]=_.useState(0),v=()=>{d(!0)},m=()=>{d(!1),b(0)},g=()=>{h!==null&&(u(h),c("/game"),d(!1),b(0))};return l?w.jsxs("div",{className:"home-page",children:[w.jsxs("div",{className:"home-content-container cust-box",children:[w.jsxs("h1",{children:["Vítej, hráči ",w.jsx("span",{className:"user-highlight",children:i?.name}),"!"]}),w.jsxs("section",{class:"intro",children:[w.jsx("p",{children:"Vítej ve vzdělávací hře, která ti pomůže lépe porozumět světu internetu a naučí tě, jak se v něm chovat bezpečně. Čekají tě různé situace, se kterými se můžeš setkat na sociálních sítích, v chatech, e-mailech nebo při hraní online her."}),w.jsx("p",{children:"Tvým úkolem je správně reagovat, rozpoznat nebezpečí a vybrat nejbezpečnější řešení. Za správné odpovědi získáš body a postupně se z tebe stane skutečný mistr bezpečného internetu."})]}),w.jsxs("section",{class:"rules",children:[w.jsx("h2",{children:"Základní pravidla hry"}),w.jsxs("ul",{children:[w.jsxs("li",{children:[w.jsx("span",{className:"highlight",children:"Pečlivě"})," si čti každou situaci a zamysli se, co bys udělal/a ve skutečnosti."]}),w.jsxs("li",{children:["Vybírej odpověď, která je ",w.jsx("span",{className:"highlight",children:"nejbezpečnější"})," a ",w.jsx("span",{className:"highlight",children:"nejzodpovědnější"}),"."]}),w.jsxs("li",{children:["Chraň své ",w.jsx("span",{className:"highlight",children:"osobní údaje"})," a nikdy je ",w.jsx("span",{className:"highlight",children:"nesdílej"})," s cizími lidmi."]}),w.jsxs("li",{children:["Nenech se nachytat ",w.jsx("span",{className:"highlight",children:"podvodníky"})," a ",w.jsx("span",{className:"highlight",children:"podezřelými odkazy"}),"."]}),w.jsxs("li",{children:["Za ",w.jsx("span",{className:"highlight",children:"správné"})," odpovědi získáváš ",w.jsx("span",{className:"highlight",children:"body"}),", za špatné se můžeš poučit z vysvětlení."]}),w.jsxs("li",{children:["Cílem není vyhrát, ale ",w.jsx("span",{className:"highlight",children:"naučit se"}),", jak být na internetu v bezpečí."]})]})]}),w.jsxs("div",{className:"button-group",children:[w.jsx("button",{className:"btn-primary",onClick:v,children:"Hraj"}),w.jsx("button",{className:"btn-secondary",onClick:()=>c("/dashboard"),children:"Výsledky"})]})]}),s&&w.jsx("div",{className:"modal-overlay",children:w.jsxs("div",{className:"modal-content",children:[w.jsx("h2",{children:"Vyber obtížnost"}),w.jsxs("div",{className:"difficulty-options",children:[w.jsxs("label",{children:[w.jsx("input",{type:"radio",name:"difficulty",value:0,checked:h===0,onChange:()=>b(0)}),"Lehká"]}),w.jsxs("label",{children:[w.jsx("input",{type:"radio",name:"difficulty",value:1,checked:h===1,onChange:()=>b(1)}),"Střední"]}),w.jsxs("label",{children:[w.jsx("input",{type:"radio",name:"difficulty",value:2,checked:h===2,onChange:()=>b(2)}),"Těžká"]})]}),w.jsxs("div",{className:"modal-buttons",children:[w.jsx("button",{className:"btn-primary",onClick:g,disabled:h===null,children:"Potvrdit"}),w.jsx("button",{className:"btn-secondary",onClick:m,children:"Zrušit"})]})]})})]}):w.jsx(Yo,{to:"/login"})}function pt(l,i){i===void 0&&(i={});var u=i.insertAt;if(l&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",u==="top"&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(document.createTextNode(l))}}pt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Ne=function(){return Ne=Object.assign||function(l){for(var i,u=1,c=arguments.length;u<c;u++)for(var s in i=arguments[u])Object.prototype.hasOwnProperty.call(i,s)&&(l[s]=i[s]);return l},Ne.apply(this,arguments)};function Ho(l){return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ho(l)}var Dy=/^\s+/,My=/\s+$/;function ue(l,i){if(i=i||{},(l=l||"")instanceof ue)return l;if(!(this instanceof ue))return new ue(l,i);var u=(function(c){var s={r:0,g:0,b:0},d=1,h=null,b=null,v=null,m=!1,g=!1;typeof c=="string"&&(c=(function(z){z=z.replace(Dy,"").replace(My,"").toLowerCase();var R,q=!1;if(bs[z])z=bs[z],q=!0;else if(z=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(R=dn.rgb.exec(z))?{r:R[1],g:R[2],b:R[3]}:(R=dn.rgba.exec(z))?{r:R[1],g:R[2],b:R[3],a:R[4]}:(R=dn.hsl.exec(z))?{h:R[1],s:R[2],l:R[3]}:(R=dn.hsla.exec(z))?{h:R[1],s:R[2],l:R[3],a:R[4]}:(R=dn.hsv.exec(z))?{h:R[1],s:R[2],v:R[3]}:(R=dn.hsva.exec(z))?{h:R[1],s:R[2],v:R[3],a:R[4]}:(R=dn.hex8.exec(z))?{r:Pt(R[1]),g:Pt(R[2]),b:Pt(R[3]),a:Jm(R[4]),format:q?"name":"hex8"}:(R=dn.hex6.exec(z))?{r:Pt(R[1]),g:Pt(R[2]),b:Pt(R[3]),format:q?"name":"hex"}:(R=dn.hex4.exec(z))?{r:Pt(R[1]+""+R[1]),g:Pt(R[2]+""+R[2]),b:Pt(R[3]+""+R[3]),a:Jm(R[4]+""+R[4]),format:q?"name":"hex8"}:(R=dn.hex3.exec(z))?{r:Pt(R[1]+""+R[1]),g:Pt(R[2]+""+R[2]),b:Pt(R[3]+""+R[3]),format:q?"name":"hex"}:!1})(c)),Ho(c)=="object"&&(Kn(c.r)&&Kn(c.g)&&Kn(c.b)?(S=c.r,M=c.g,T=c.b,s={r:255*We(S,255),g:255*We(M,255),b:255*We(T,255)},m=!0,g=String(c.r).substr(-1)==="%"?"prgb":"rgb"):Kn(c.h)&&Kn(c.s)&&Kn(c.v)?(h=$r(c.s),b=$r(c.v),s=(function(z,R,q){z=6*We(z,360),R=We(R,100),q=We(q,100);var K=Math.floor(z),Q=z-K,J=q*(1-R),Se=q*(1-Q*R),ee=q*(1-(1-Q)*R),ge=K%6,U=[q,Se,J,J,ee,q][ge],ne=[ee,q,q,Se,J,J][ge],he=[J,J,ee,q,q,Se][ge];return{r:255*U,g:255*ne,b:255*he}})(c.h,h,b),m=!0,g="hsv"):Kn(c.h)&&Kn(c.s)&&Kn(c.l)&&(h=$r(c.s),v=$r(c.l),s=(function(z,R,q){var K,Q,J;function Se(U,ne,he){return he<0&&(he+=1),he>1&&(he-=1),he<1/6?U+6*(ne-U)*he:he<.5?ne:he<2/3?U+(ne-U)*(2/3-he)*6:U}if(z=We(z,360),R=We(R,100),q=We(q,100),R===0)K=Q=J=q;else{var ee=q<.5?q*(1+R):q+R-q*R,ge=2*q-ee;K=Se(ge,ee,z+1/3),Q=Se(ge,ee,z),J=Se(ge,ee,z-1/3)}return{r:255*K,g:255*Q,b:255*J}})(c.h,h,v),m=!0,g="hsl"),c.hasOwnProperty("a")&&(d=c.a));var S,M,T;return d=w0(d),{ok:m,format:c.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:d}})(l);this._originalInput=l,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||u.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=u.ok}function Qm(l,i,u){l=We(l,255),i=We(i,255),u=We(u,255);var c,s,d=Math.max(l,i,u),h=Math.min(l,i,u),b=(d+h)/2;if(d==h)c=s=0;else{var v=d-h;switch(s=b>.5?v/(2-d-h):v/(d+h),d){case l:c=(i-u)/v+(i<u?6:0);break;case i:c=(u-l)/v+2;break;case u:c=(l-i)/v+4}c/=6}return{h:c,s,l:b}}function Zm(l,i,u){l=We(l,255),i=We(i,255),u=We(u,255);var c,s,d=Math.max(l,i,u),h=Math.min(l,i,u),b=d,v=d-h;if(s=d===0?0:v/d,d==h)c=0;else{switch(d){case l:c=(i-u)/v+(i<u?6:0);break;case i:c=(u-l)/v+2;break;case u:c=(l-i)/v+4}c/=6}return{h:c,s,v:b}}function Vm(l,i,u,c){var s=[hn(Math.round(l).toString(16)),hn(Math.round(i).toString(16)),hn(Math.round(u).toString(16))];return c&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Pm(l,i,u,c){return[hn(N0(c)),hn(Math.round(l).toString(16)),hn(Math.round(i).toString(16)),hn(Math.round(u).toString(16))].join("")}function Ay(l,i){i=i===0?0:i||10;var u=ue(l).toHsl();return u.s-=i/100,u.s=Go(u.s),ue(u)}function zy(l,i){i=i===0?0:i||10;var u=ue(l).toHsl();return u.s+=i/100,u.s=Go(u.s),ue(u)}function _y(l){return ue(l).desaturate(100)}function wy(l,i){i=i===0?0:i||10;var u=ue(l).toHsl();return u.l+=i/100,u.l=Go(u.l),ue(u)}function Ny(l,i){i=i===0?0:i||10;var u=ue(l).toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(-i/100*255))),u.g=Math.max(0,Math.min(255,u.g-Math.round(-i/100*255))),u.b=Math.max(0,Math.min(255,u.b-Math.round(-i/100*255))),ue(u)}function Cy(l,i){i=i===0?0:i||10;var u=ue(l).toHsl();return u.l-=i/100,u.l=Go(u.l),ue(u)}function ky(l,i){var u=ue(l).toHsl(),c=(u.h+i)%360;return u.h=c<0?360+c:c,ue(u)}function Uy(l){var i=ue(l).toHsl();return i.h=(i.h+180)%360,ue(i)}function Km(l,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var u=ue(l).toHsl(),c=[ue(l)],s=360/i,d=1;d<i;d++)c.push(ue({h:(u.h+d*s)%360,s:u.s,l:u.l}));return c}function jy(l){var i=ue(l).toHsl(),u=i.h;return[ue(l),ue({h:(u+72)%360,s:i.s,l:i.l}),ue({h:(u+216)%360,s:i.s,l:i.l})]}function Hy(l,i,u){i=i||6,u=u||30;var c=ue(l).toHsl(),s=360/u,d=[ue(l)];for(c.h=(c.h-(s*i>>1)+720)%360;--i;)c.h=(c.h+s)%360,d.push(ue(c));return d}function Ly(l,i){i=i||6;for(var u=ue(l).toHsv(),c=u.h,s=u.s,d=u.v,h=[],b=1/i;i--;)h.push(ue({h:c,s,v:d})),d=(d+b)%1;return h}ue.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,i,u,c=this.toRgb();return l=c.r/255,i=c.g/255,u=c.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))},setAlpha:function(l){return this._a=w0(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=Zm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=Zm(this._r,this._g,this._b),i=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.v);return this._a==1?"hsv("+i+", "+u+"%, "+c+"%)":"hsva("+i+", "+u+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var l=Qm(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=Qm(this._r,this._g,this._b),i=Math.round(360*l.h),u=Math.round(100*l.s),c=Math.round(100*l.l);return this._a==1?"hsl("+i+", "+u+"%, "+c+"%)":"hsla("+i+", "+u+"%, "+c+"%, "+this._roundA+")"},toHex:function(l){return Vm(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return(function(i,u,c,s,d){var h=[hn(Math.round(i).toString(16)),hn(Math.round(u).toString(16)),hn(Math.round(c).toString(16)),hn(N0(s))];return d&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")})(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*We(this._r,255))+"%",g:Math.round(100*We(this._g,255))+"%",b:Math.round(100*We(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*We(this._r,255))+"%, "+Math.round(100*We(this._g,255))+"%, "+Math.round(100*We(this._b,255))+"%)":"rgba("+Math.round(100*We(this._r,255))+"%, "+Math.round(100*We(this._g,255))+"%, "+Math.round(100*We(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(qy[Vm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var i="#"+Pm(this._r,this._g,this._b,this._a),u=i,c=this._gradientType?"GradientType = 1, ":"";if(l){var s=ue(l);u="#"+Pm(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+i+",endColorstr="+u+")"},toString:function(l){var i=!!l;l=l||this._format;var u=!1,c=this._a<1&&this._a>=0;return i||!c||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(u=this.toRgbString()),l==="prgb"&&(u=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(u=this.toHexString()),l==="hex3"&&(u=this.toHexString(!0)),l==="hex4"&&(u=this.toHex8String(!0)),l==="hex8"&&(u=this.toHex8String()),l==="name"&&(u=this.toName()),l==="hsl"&&(u=this.toHslString()),l==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ue(this.toString())},_applyModification:function(l,i){var u=l.apply(null,[this].concat([].slice.call(i)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(wy,arguments)},brighten:function(){return this._applyModification(Ny,arguments)},darken:function(){return this._applyModification(Cy,arguments)},desaturate:function(){return this._applyModification(Ay,arguments)},saturate:function(){return this._applyModification(zy,arguments)},greyscale:function(){return this._applyModification(_y,arguments)},spin:function(){return this._applyModification(ky,arguments)},_applyCombination:function(l,i){return l.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(Hy,arguments)},complement:function(){return this._applyCombination(Uy,arguments)},monochromatic:function(){return this._applyCombination(Ly,arguments)},splitcomplement:function(){return this._applyCombination(jy,arguments)},triad:function(){return this._applyCombination(Km,[3])},tetrad:function(){return this._applyCombination(Km,[4])}},ue.fromRatio=function(l,i){if(Ho(l)=="object"){var u={};for(var c in l)l.hasOwnProperty(c)&&(u[c]=c==="a"?l[c]:$r(l[c]));l=u}return ue(l,i)},ue.equals=function(l,i){return!(!l||!i)&&ue(l).toRgbString()==ue(i).toRgbString()},ue.random=function(){return ue.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ue.mix=function(l,i,u){u=u===0?0:u||50;var c=ue(l).toRgb(),s=ue(i).toRgb(),d=u/100;return ue({r:(s.r-c.r)*d+c.r,g:(s.g-c.g)*d+c.g,b:(s.b-c.b)*d+c.b,a:(s.a-c.a)*d+c.a})},ue.readability=function(l,i){var u=ue(l),c=ue(i);return(Math.max(u.getLuminance(),c.getLuminance())+.05)/(Math.min(u.getLuminance(),c.getLuminance())+.05)},ue.isReadable=function(l,i,u){var c,s,d=ue.readability(l,i);switch(s=!1,(c=(function(h){var b,v;return b=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),v=(h.size||"small").toLowerCase(),b!=="AA"&&b!=="AAA"&&(b="AA"),v!=="small"&&v!=="large"&&(v="small"),{level:b,size:v}})(u)).level+c.size){case"AAsmall":case"AAAlarge":s=d>=4.5;break;case"AAlarge":s=d>=3;break;case"AAAsmall":s=d>=7}return s},ue.mostReadable=function(l,i,u){var c,s,d,h,b=null,v=0;s=(u=u||{}).includeFallbackColors,d=u.level,h=u.size;for(var m=0;m<i.length;m++)(c=ue.readability(l,i[m]))>v&&(v=c,b=ue(i[m]));return ue.isReadable(l,b,{level:d,size:h})||!s?b:(u.includeFallbackColors=!1,ue.mostReadable(l,["#fff","#000"],u))};var bs=ue.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},qy=ue.hexNames=(function(l){var i={};for(var u in l)l.hasOwnProperty(u)&&(i[l[u]]=u);return i})(bs);function w0(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function We(l,i){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(l)&&(l="100%");var u=(function(c){return typeof c=="string"&&c.indexOf("%")!=-1})(l);return l=Math.min(i,Math.max(0,parseFloat(l))),u&&(l=parseInt(l*i,10)/100),Math.abs(l-i)<1e-6?1:l%i/parseFloat(i)}function Go(l){return Math.min(1,Math.max(0,l))}function Pt(l){return parseInt(l,16)}function hn(l){return l.length==1?"0"+l:""+l}function $r(l){return l<=1&&(l=100*l+"%"),l}function N0(l){return Math.round(255*parseFloat(l)).toString(16)}function Jm(l){return Pt(l)/255}var Oa,Do,Mo,dn=(Do="[\\s|\\(]+("+(Oa="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")\\s*\\)?",Mo="[\\s|\\(]+("+Oa+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")[,|\\s]+("+Oa+")\\s*\\)?",{CSS_UNIT:new RegExp(Oa),rgb:new RegExp("rgb"+Do),rgba:new RegExp("rgba"+Mo),hsl:new RegExp("hsl"+Do),hsla:new RegExp("hsla"+Mo),hsv:new RegExp("hsv"+Do),hsva:new RegExp("hsva"+Mo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Kn(l){return!!dn.CSS_UNIT.exec(l)}var ri=function(l,i){var u=(typeof l=="string"?parseInt(l):l)||0;if(u>=-5&&u<=5){var c=u,s=parseFloat(i),d=s+c*(s/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},ii=function(l,i){var u=l||{},c="";switch(i){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var s={};if(u.fontSize){var d=u.fontSize;s=(function(h,b){var v={};for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&b.indexOf(m)<0&&(v[m]=h[m]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(h);g<m.length;g++)b.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(h,m[g])&&(v[m[g]]=h[m[g]])}return v})(u,["fontSize"]),c=d}return{fontSize:c,styles:s}},By={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},oi=function(l){var i=l.className,u=l.text,c=l.textColor,s=l.staticText,d=l.style;return u?Be.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Ne(Ne(Ne({},s&&By),c&&{color:c,mixBlendMode:"unset"}),d&&d)},typeof u=="string"&&u.length?u:"loading"):null},$n="rgb(50, 205, 50)";function ui(l,i){if(i===void 0&&(i=0),l.length===0)throw new Error("Input array cannot be empty!");var u=[];return(function c(s,d){return d===void 0&&(d=0),u.push.apply(u,s),u.length<d&&c(u,d),u.slice(0,d)})(l,i)}pt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ue($n).toRgb();Array.from({length:4},(function(l,i){return"--atom-phase".concat(i+1,"-rgb")}));pt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--commet-phase".concat(i+1,"-color")}));pt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Ao=Array.from({length:4},(function(l,i){return"--OP-annulus-phase".concat(i+1,"-color")})),Yy=function(l){var i,u=ii(l?.style,l?.size),c=u.styles,s=u.fontSize,d=l?.easing,h=ri(l?.speedPlus,"1.5s").animationPeriod,b=(function(m){var g={},S=Ao.length;if(m instanceof Array){for(var M=ui(m,S),T=0;T<M.length&&!(T>=4);T++)g[Ao[T]]=M[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var z=0;z<S;z++)g[Ao[z]]=m}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),z=0;z<S;z++)g[Ao[z]]=$n}return g})((i=l?.color)!==null&&i!==void 0?i:""),v=l?.dense?4.3:2.9;return Be.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),b),c),role:"status","aria-live":"polite","aria-label":"Loading"},Be.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Be.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Be.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:v,strokeMiterlimit:"10"})),Be.createElement(oi,{className:"OP-annulus-text",text:l?.text,textColor:l?.textColor})))};function fs(l){return l&&l.Math===Math&&l}pt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Bl=fs(typeof window=="object"&&window)||fs(typeof self=="object"&&self)||fs(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function C0(){var l,i;return!((l=Bl?.crypto)===null||l===void 0)&&l.randomUUID?Bl.crypto.randomUUID():!((i=Bl?.btoa)===null||i===void 0)&&i.name?Bl.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var zo=Array.from({length:4},(function(l,i){return"--OP-dotted-phase".concat(i+1,"-color")})),Xy=function(l){var i,u=ii(l?.style,l?.size),c=u.styles,s=u.fontSize,d=l?.easing,h=ri(l?.speedPlus,"1.2s").animationPeriod,b=(function(m){var g={},S=zo.length;if(m instanceof Array){for(var M=ui(m,S),T=0;T<M.length&&!(T>=4);T++)g[zo[T]]=M[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var z=0;z<S;z++)g[zo[z]]=m}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),z=0;z<S;z++)g[zo[z]]=$n}return g})((i=l?.color)!==null&&i!==void 0?i:""),v=l?.dense?16:12;return Be.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),b),c),role:"status","aria-live":"polite","aria-label":"Loading"},Be.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:v}).map((function(m,g){var S=(function(z,R,q){if(R===16){var K=360*z/R,Q=R-z,J=Number.parseFloat(q)/R*Q*-1;return{transform:"rotate(".concat(K,"deg)"),animationDelay:"".concat(J,"s")}}return{transform:"",animationDelay:""}})(g,v,h),M=S.animationDelay,T=S.transform;return Be.createElement("span",{key:C0(),className:"rli-d-i-b dot-shape-holder",style:T?{transform:T}:void 0},Be.createElement("span",{className:"dot",style:M?{animationDelay:M}:void 0}))})),Be.createElement(oi,{className:"OP-dotted-text",text:l?.text,textColor:l?.textColor})))};pt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var _o=Array.from({length:4},(function(l,i){return"--OP-spokes-phase".concat(i+1,"-color")})),Gy=function(l){var i,u=ii(l?.style,l?.size),c=u.styles,s=u.fontSize,d=l?.easing,h=ri(l?.speedPlus,"1.2s").animationPeriod,b=(function(m){var g={},S=_o.length;if(m instanceof Array){for(var M=ui(m,S),T=0;T<M.length&&!(T>=4);T++)g[_o[T]]=M[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var z=0;z<S;z++)g[_o[z]]=m}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),z=0;z<S;z++)g[_o[z]]=$n}return g})((i=l?.color)!==null&&i!==void 0?i:""),v=l?.dense?16:12;return Be.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),b),c),role:"status","aria-live":"polite","aria-label":"Loading"},Be.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:v},(function(m,g){return Be.createElement("span",{key:C0(),className:"rli-d-i-b spoke",style:Qy(g,v,h)})}))),Be.createElement(oi,{text:l?.text,textColor:l?.textColor}))};function Qy(l,i,u){if(i===16){var c=i-l,s=Number.parseFloat(u)/i;return{transform:"rotate(".concat(360*l/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((c-1)*s*-1,"s")}}}pt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var wo=Array.from({length:4},(function(l,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")})),Zy=function(l){var i,u=ii(l?.style,l?.size),c=u.styles,s=u.fontSize,d=l?.easing,h=ri(l?.speedPlus,"1.2s").animationPeriod,b=(function(m){var g={},S=wo.length;if(m instanceof Array){for(var M=ui(m,S),T=0;T<M.length&&!(T>=4);T++)g[wo[T]]=M[T];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var z=0;z<S;z++)g[wo[z]]=m}catch(R){for(R instanceof Error?console.warn("[".concat(R.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),z=0;z<S;z++)g[wo[z]]=$n}return g})((i=l?.color)!==null&&i!==void 0?i:""),v=l.dense?"0.45em":"";return Be.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),b),c),role:"status","aria-live":"polite","aria-label":"Loading"},Be.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Be.createElement("span",{className:"rli-d-i-b annulus-sectors",style:Ne({},v&&{borderWidth:v})}),Be.createElement(oi,{className:"OP-annulus-dual-sectors-text",text:l?.text,textColor:l?.textColor})))};pt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Pr=Array.from({length:4},(function(l,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]})),No=function(l){return l===void 0&&(l=1),.25*l},Vy=function(l){var i,u=ii(l?.style,l?.size),c=u.styles,s=u.fontSize,d=l?.easing,h=ri(l?.speedPlus,"1s").animationPeriod,b=(function(m){var g={},S=Pr.length;if(m instanceof Array){for(var M=ui(m,S),T=0;T<M.length&&!(T>=4);T++){var z=Pr[T];try{if(!(K=ue(M[T])).isValid())throw new Error("Invalid Color: ".concat(K.getOriginalInput()));var R=K.setAlpha(No(K.getAlpha())).toRgbString(),q=M[T];g[z[0]]=R,g[z[1]]=q}catch{q=$n,R=(K=ue($n)).setAlpha(No(K.getAlpha())).toRgbString(),g[z[0]]=R,g[z[1]]=q}}return g}try{var K=ue(m);if(typeof m!="string")throw new Error("Color String expected");if(!K.isValid())throw new Error("Invalid Color: ".concat(K.getOriginalInput()));q=m,R=K.setAlpha(No(K.getAlpha())).toRgbString();for(var Q=0;Q<S;Q++)g[(z=Pr[Q])[0]]=R,g[z[1]]=q}catch(J){for(J instanceof Error?console.warn("[".concat(J.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),q=$n,R=(K=ue($n)).setAlpha(No(K.getAlpha())).toRgbString(),Q=0;Q<Pr.length;Q++)g[(z=Pr[Q])[0]]=R,g[z[1]]=q}return g})((i=l?.color)!==null&&i!==void 0?i:""),v=l.dense?"0.45em":"";return Be.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),d&&{"--rli-animation-function":d}),b),c),role:"status","aria-live":"polite","aria-label":"Loading"},Be.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Be.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:Ne({},v&&{borderWidth:v})}),Be.createElement(oi,{className:"OP-annulus-sector-text",text:l?.text,textColor:l?.textColor})))},Py=function(l){var i=Object(l).variant,u=i===void 0?"disc":i;return u==="dotted"?Be.createElement(Xy,Ne({},l)):u==="spokes"?Be.createElement(Gy,Ne({},l)):u==="disc"?Be.createElement(Yy,Ne({},l)):u==="split-disc"?Be.createElement(Zy,Ne({},l)):u==="track-disc"?Be.createElement(Vy,Ne({},l)):null};pt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--four-square-phase".concat(i+1,"-color")}));pt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--mosaic-phase".concat(i+1,"-color")}));pt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--riple-phase".concat(i+1,"-color")}));pt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--TD-pulsate-phase".concat(i+1,"-color")}));pt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}));pt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--TD-bob-phase".concat(i+1,"-color")}));pt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--TD-bounce-phase".concat(i+1,"-color")}));pt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--shape-phase".concat(i+1,"-color")}));pt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--trophySpin-phase".concat(i+1,"-color")}));pt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--slab-phase".concat(i+1,"-color")}));pt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(l,i){return"--life-line-phase".concat(i+1,"-color")}));function Ky(){const{difficulty:l,user:i}=Ia(),u=Wa(),[c,s]=_.useState("intro"),[d,h]=_.useState([]),[b,v]=_.useState(0),[m,g]=_.useState([]),[S,M]=_.useState(0),[T,z]=_.useState(null),[R,q]=_.useState(!1),[K,Q]=_.useState(0),[J,Se]=_.useState(!1);if(_.useEffect(()=>{fetch("/api/categories",{credentials:"include"}).catch(console.error)},[]),_.useEffect(()=>{fetch("/api/categories").then(I=>I.text()).then(I=>{const N=I.indexOf("[");if(N===-1)throw new Error("No JSON array in response");const Z=JSON.parse(I.slice(N));h(Z)}).catch(console.error)},[]),l==null)return w.jsx(Yo,{to:"/"});const ee=I=>{if(!I)return[];const N=new DOMParser().parseFromString(I,"text/html");return Array.from(N.querySelectorAll("p")).map(Z=>Z.innerHTML.trim()).filter(Boolean)},ge=d[b],U=m[S],ne=async()=>{const N=await(await fetch(`/api/questions?category_id=${ge.id}&difficulty=${l}`)).text(),Z=N.indexOf("[");if(Z===-1){console.error("Questions response is not JSON:",N);return}const P=JSON.parse(N.slice(Z));g(P),M(0),s("question")},he=I=>{R||z(I.id)},Ue=()=>{if(R||T==null)return;const I=U.answers.find(N=>N.id===T);I&&(q(!0),Q(N=>N+(I.points||0)))},Me=()=>{z(null),q(!1),S+1<m.length?M(I=>I+1):Ae()},Ae=()=>{b+1<d.length?(v(I=>I+1),s("intro")):s("gameEnd")},lt=()=>{const I="XSRF-TOKEN=",Z=decodeURIComponent(document.cookie).split(";");for(let P=0;P<Z.length;P++){let fe=Z[P];for(;fe.charAt(0)===" ";)fe=fe.substring(1);if(fe.indexOf(I)===0)return fe.substring(I.length,fe.length)}return null},Ye=async()=>{if(!(!i||!i.name))try{const I=lt(),N={"Content-Type":"application/json"};I&&(N["X-XSRF-TOKEN"]=I);const Z=await fetch("/api/dashboard/save",{method:"POST",headers:N,credentials:"include",body:JSON.stringify({username:i.name,points:K,difficulty:l})});if(!Z.ok)throw new Error(`HTTP error! status: ${Z.status}`);const P=await Z.json();P.success?console.log("Skóre uloženo!",P.data):console.error("Chyba při ukládání skóre",P.error)}catch(I){console.error("Fetch error:",I)}};if(_.useEffect(()=>{c==="gameEnd"&&(async()=>(Se(!0),await Ye(),Se(!1)))()},[c]),c==="intro"&&ge){const I=ee(ge.items||"");return w.jsx("div",{className:"intro-shell",children:w.jsxs("div",{className:"intro-grid",children:[w.jsx("div",{className:"intro-cards",children:I.length===0?w.jsxs("div",{className:"tip-card",children:[w.jsx("div",{className:"tip-badge",children:"i"}),w.jsx("p",{className:"tip-text",children:"V této kategorii zatím nejsou žádné výukové body."})]}):I.map((N,Z)=>{const P=new DOMParser().parseFromString(N,"text/html"),fe=P.querySelector("strong"),E=fe?fe.innerText:`Bod ${Z+1}`;fe&&fe.remove();const X=P.body.innerHTML.replace(/^<br\s*\/?>/,"").trim();return w.jsx("div",{className:"tip-card cust-box",children:w.jsxs("div",{className:"tip-content",children:[w.jsxs("div",{className:"tip-header",children:[w.jsx("div",{className:"tip-badge",children:Z+1}),w.jsx("h3",{className:"tip-title",children:E})]}),w.jsx("p",{className:"tip-text",dangerouslySetInnerHTML:{__html:X}})]})},Z)})}),w.jsx("div",{className:"intro-center",children:w.jsxs("div",{className:"intro-center-card",children:[w.jsx("h1",{className:"intro-title",children:ge.title}),w.jsx("div",{className:"intro-desc",dangerouslySetInnerHTML:{__html:ge.desc}}),w.jsx("div",{className:"intro-actions",children:w.jsx("button",{className:"btn-primary",onClick:ne,children:"Pokračovat"})})]})})]})})}return c==="question"&&U?w.jsxs("div",{className:"game-question",children:[w.jsx("h2",{children:U.text}),w.jsx("div",{className:"answers",children:U.answers.map((I,N)=>{const Z=String.fromCharCode(65+N);let P="";return R&&(I.is_correct?P="correct":I.id===T&&(P="wrong")),w.jsxs("label",{className:`answer-option ${P}`,children:[w.jsx("input",{type:"radio",name:"answer",disabled:R,checked:T===I.id,onChange:()=>he(I)}),w.jsx("span",{className:"answer-letter",children:Z}),w.jsx("span",{className:"answer-text",children:I.text})]},I.id)})}),R?w.jsx("button",{className:"btn-primary",onClick:Me,children:"Další otázka"}):w.jsx("button",{className:"btn-primary",onClick:Ue,disabled:T==null,children:"Potvrdit odpověď"})]}):c==="gameEnd"?J?w.jsx("div",{className:"save-loading",children:"Ukládám skóre..."}):w.jsxs("div",{className:"game-end cust-box",children:[w.jsx("h1",{children:"Konec hry"}),w.jsxs("p",{children:["Celkové skóre: ",K]}),w.jsxs("div",{className:"button-group",children:[w.jsx("button",{className:"btn-primary",onClick:()=>u("/"),children:"Domů"}),w.jsx("button",{className:"btn-secondary",onClick:()=>u("/dashboard"),children:"Výsledky"})]})]}):w.jsx("div",{className:"loading",children:w.jsx(Py,{color:"#3E885B",variant:"track-disc",speedPlus:"0",easing:"ease-in-out"})})}function Jy(){const{token:l,setUser:i,setToken:u}=Ia(),c=Wa();return w.jsx("nav",{className:"top-menu",children:w.jsxs("div",{className:"nav-container",children:[w.jsxs("div",{className:"nav-left",children:[w.jsxs("div",{className:"logo",onClick:()=>c("/"),style:{cursor:"pointer"},children:[w.jsx("span",{className:"logo-first",children:"I"}),"nternet",w.jsx("span",{className:"logo-first",children:"B"}),"ez",w.jsx("span",{className:"logo-first",children:"O"}),"bav",w.jsx("span",{className:"logo-first",children:"."}),"cz"]}),w.jsxs("ul",{className:"menu-items",children:[w.jsx("li",{children:w.jsx(vs,{to:"/",children:"Domů"})}),w.jsx("li",{children:w.jsx(vs,{to:"/dashboard",children:"Výsledky"})})]})]}),l&&w.jsx("div",{className:"nav-right",children:w.jsx("button",{onClick:()=>{i(null),u(null),c("/login")},children:"Odhlásit se"})})]})})}function k0(){return w.jsx("footer",{className:"site-footer",children:w.jsx("p",{children:"© 2026 Kristýna Trávníčková. Všechna práva vyhrazena."})})}function $y(){const{user:l,token:i,setUser:u,setToken:c}=Ia();Wa();const s=An(),d=s.pathname==="/game"||s.pathname.startsWith("/game/"),h=s.pathname==="/game"||s.pathname.startsWith("/game/");return w.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[!d&&w.jsx(Jy,{}),w.jsx(T0,{}),!h&&w.jsx(k0,{})]})}function Fy(){const{token:l}=Ia(),i=An();return l&&i.pathname!=="/dashboard"&&i.pathname!=="/rules"?w.jsx(Yo,{to:"/"}):w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{flex:1},children:w.jsx(T0,{})}),w.jsx(k0,{})]})}const Wy=cy([{path:"/",element:w.jsx($y,{}),children:[{index:!0,element:w.jsx(Gm,{})},{path:"home",element:w.jsx(Gm,{})},{path:"dashboard",element:w.jsx(Ty,{})},{path:"game",element:w.jsx(Ky,{})}]},{path:"/login",element:w.jsx(Fy,{}),children:[{index:!0,element:w.jsx(Oy,{})}]},{path:"*",element:w.jsx(Ry,{})}]);$v.createRoot(document.getElementById("root")).render(w.jsx(Be.StrictMode,{children:w.jsx(Ey,{children:w.jsx(Sy,{router:Wy})})}));
