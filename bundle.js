(()=>{"use strict";var e,n,t,r={532:(e,n,t)=>{t.r(n),t.d(n,{CSSTransition:()=>x,StyleTransition:()=>b,Transition:()=>s,TransitionGroup:()=>v});var r=t(400);function o(e){return n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}}var i,_,u,l,c=t(396);(l=_||(_={})).APPEAR="appear",l.APPEAR_ACTIVE="appearActive",l.APPEAR_DONE="appearDone",l.ENTER="enter",l.ENTER_ACTIVE="enterActive",l.ENTER_DONE="enterDone",l.EXIT="exit",l.EXIT_ACTIVE="exitActive",l.EXIT_DONE="exitDone",function(e){e.ENTER="onEnter",e.ENTERING="onEntering",e.ENTERED="onEntered",e.EXIT="onExit",e.EXITING="onExiting",e.EXITED="onExited"}(u||(u={}));var a=((i={})[_.APPEAR]=[u.ENTER,_.APPEAR_ACTIVE],i[_.APPEAR_ACTIVE]=[u.ENTERING,_.APPEAR_DONE,!0],i[_.APPEAR_DONE]=[u.ENTERED],i[_.ENTER]=[u.ENTER,_.ENTER_ACTIVE],i[_.ENTER_ACTIVE]=[u.ENTERING,_.ENTER_DONE,!0],i[_.ENTER_DONE]=[u.ENTERED],i[_.EXIT]=[u.EXIT,_.EXIT_ACTIVE],i[_.EXIT_ACTIVE]=[u.EXITING,_.EXIT_DONE,!0],i[_.EXIT_DONE]=[u.EXITED],i),s=function(e){var n=e.children,t=e.in,i=void 0!==t&&t,u=e.appear,l=void 0!==u&&u,s=e.enter,f=void 0===s||s,p=e.exit,d=void 0===p||p,h=e.duration,v=void 0===h?500:h,E=e.alwaysMounted,y=void 0!==E&&E,m=e.addEndListener,T=(0,c.useRef)(),x=(0,c.useRef)(),g=!1,b=(0,c.useState)((function(){return g=!0,i?l?_.APPEAR:_.APPEAR_DONE:_.EXIT_DONE})),A=b[0],N=b[1];(0,c.useEffect)((function(){var n,t=window,r=t.setTimeout,o=t.clearTimeout,i=a[A],_=i[1],u=i[2];return null==(n=e[i[0]])||n.call(e,T.current),_&&(u?m?m(T.current,(function(){return N(_)})):x.current=r(N,v,_):N(_)),function(){o(x.current)}}),[A,v]),(0,c.useLayoutEffect)((function(){g||N(i?f?_.ENTER:_.ENTER_DONE:d?_.EXIT:_.EXIT_DONE)}),[i]);var k=(0,c.useMemo)((function(){var e={};return Object.values(_).forEach((function(n){e[n]=A===n})),e}),[A]);if(!y&&A===_.EXIT_DONE)return null;var C=n(k,A);return(0,r.cloneElement)(C,{ref:o([T,C.ref])})};function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}var d,h=function(e,n,t){var r=e.props[n];return void 0===r?t:r},v=function(e){var n=e.children,t=e.appear,o=void 0!==t&&t,i=e.enter,_=void 0===i||i,u=e.exit,l=void 0===u||u,a=e.duration,s=void 0===a?500:a,p=Array.isArray(n)?n:[n],d=(0,c.useRef)(!0),v=(0,c.useRef)([]),E=[],y=[],m=function(e,n){if(e){var t=(0,r.cloneElement)(e,f({enter:_,exit:l,duration:s},e.props,{in:!n,appear:d.current?h(e,"appear",o):h(e,"enter",_)}));E.push({visibleChild:t,removeTimeout:n}),y.push(t)}},T=0;v.current.forEach((function(e){var n,t=e.visibleChild,r=e.removeTimeout,o=t.key,i=p.findIndex((function(e){return e.key===o}));if(i<0)r?m(t,r):l&&!1!==t.props.exit&&m(t,(n=t,setTimeout((function(){var e=v.current,t=e.findIndex((function(e){return e.visibleChild.key===n.key}));t>-1&&e.splice(t,1)}),h(n,"duration",s))));else{r&&clearTimeout(r);for(var _=T;_<=i;_++)m(p[_],null)}T=Math.max(T,i+1)}));for(var x=T;x<p.length;x++)m(p[x],null);return v.current=E,d.current=!1,y},E=["children","classNames"],y=((d={})[_.APPEAR]="-appear",d[_.APPEAR_ACTIVE]="-appear-active",d[_.APPEAR_DONE]="-appear-done",d[_.ENTER]="-enter",d[_.ENTER_ACTIVE]="-enter-active",d[_.ENTER_DONE]="-enter-done",d[_.EXIT]="-exit",d[_.EXIT_ACTIVE]="-exit-active",d[_.EXIT_DONE]="-exit-done",d),m=function(){return[].slice.call(arguments).filter((function(e){return!!e})).join(" ")},T=function(e,n){return"string"==typeof n?""+n+y[e]:n[e]},x=function(e){var n=e.children,t=e.classNames,o=p(e,E);return(0,r.createElement)(s,o,(function(e,o){var i=n.props.className,u=(0,c.useMemo)((function(){return m(i,function(e,n){var t=T(e,n);switch(e){case _.APPEAR_ACTIVE:return m(T(_.APPEAR,n),t);case _.ENTER_ACTIVE:return m(T(_.ENTER,n),t);case _.EXIT_ACTIVE:return m(T(_.EXIT,n),t);default:return t}}(o,t))}),[i,t,o]);return(0,r.cloneElement)(n,{className:u})}))},g=["children","styles"],b=function(e){var n=e.children,t=e.styles,o=p(e,g);return(0,r.createElement)(s,o,(function(e,o){var i=n.props.style,u=(0,c.useMemo)((function(){return f({},function(e,n){var t=n[e];switch(e){case _.APPEAR_ACTIVE:return f({},n[_.APPEAR],t);case _.ENTER_ACTIVE:return f({},n[_.ENTER],t);case _.EXIT_ACTIVE:return f({},n[_.EXIT],t);default:return t}}(o,t),i)}),[i,t,o]);return(0,r.cloneElement)(n,{style:u})}))}},400:(e,n,t)=>{t.r(n),t.d(n,{Component:()=>m,Fragment:()=>y,cloneElement:()=>F,createContext:()=>U,createElement:()=>h,createRef:()=>E,h:()=>h,hydrate:()=>H,isValidElement:()=>_,options:()=>o,render:()=>X,toChildArray:()=>k});var r,o,i,_,u,l,c,a={},s=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,n){for(var t in n)e[t]=n[t];return e}function d(e){var n=e.parentNode;n&&n.removeChild(e)}function h(e,n,t){var o,i,_,u={};for(_ in n)"key"==_?o=n[_]:"ref"==_?i=n[_]:u[_]=n[_];if(arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return v(e,u,o,i,null)}function v(e,n,t,r,_){var u={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++i:_};return null==_&&null!=o.vnode&&o.vnode(u),u}function E(){return{current:null}}function y(e){return e.children}function m(e,n){this.props=e,this.context=n}function T(e,n){if(null==n)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?T(e):null}function x(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return x(e)}}function g(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!b.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||setTimeout)(b)}function b(){for(var e;b.__r=u.length;)e=u.sort((function(e,n){return e.__v.__b-n.__v.__b})),u=[],e.some((function(e){var n,t,r,o,i,_;e.__d&&(i=(o=(n=e).__v).__e,(_=n.__P)&&(t=[],(r=p({},o)).__v=o.__v+1,D(_,o,r,n.__n,void 0!==_.ownerSVGElement,null!=o.__h?[i]:null,t,null==i?T(o):i,o.__h),S(t,o),o.__e!=i&&x(o)))}))}function A(e,n,t,r,o,i,_,u,l,c){var f,p,d,h,E,m,x,g=r&&r.__k||s,b=g.length;for(t.__k=[],f=0;f<n.length;f++)if(null!=(h=t.__k[f]=null==(h=n[f])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?v(null,h,null,null,h):Array.isArray(h)?v(y,{children:h},null,null,null):h.__b>0?v(h.type,h.props,h.key,null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=g[f])||d&&h.key==d.key&&h.type===d.type)g[f]=void 0;else for(p=0;p<b;p++){if((d=g[p])&&h.key==d.key&&h.type===d.type){g[p]=void 0;break}d=null}D(e,h,d=d||a,o,i,_,u,l,c),E=h.__e,(p=h.ref)&&d.ref!=p&&(x||(x=[]),d.ref&&x.push(d.ref,null,h),x.push(p,h.__c||E,h)),null!=E?(null==m&&(m=E),"function"==typeof h.type&&h.__k===d.__k?h.__d=l=N(h,l,e):l=C(e,h,d,g,E,l),"function"==typeof t.type&&(t.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=T(d))}for(t.__e=m,f=b;f--;)null!=g[f]&&("function"==typeof t.type&&null!=g[f].__e&&g[f].__e==t.__d&&(t.__d=T(r,f+1)),w(g[f],g[f]));if(x)for(f=0;f<x.length;f++)V(x[f],x[++f],x[++f])}function N(e,n,t){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,n="function"==typeof r.type?N(r,n,t):C(t,r,r,o,r.__e,n));return n}function k(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){k(e,n)})):n.push(e)),n}function C(e,n,t,r,o,i){var _,u,l;if(void 0!==n.__d)_=n.__d,n.__d=void 0;else if(null==t||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),_=null;else{for(u=i,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break e;e.insertBefore(o,i),_=i}return void 0!==_?_:o.nextSibling}function P(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function I(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||P(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r||e.addEventListener(n,i?j:R,i):e.removeEventListener(n,i?j:R,i);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function R(e){this.l[e.type+!1](o.event?o.event(e):e)}function j(e){this.l[e.type+!0](o.event?o.event(e):e)}function D(e,n,t,r,i,_,u,l,c){var a,s,f,d,h,v,E,T,x,g,b,N,k,C=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,l=n.__e=t.__e,n.__h=null,_=[l]),(a=o.__b)&&a(n);try{e:if("function"==typeof C){if(T=n.props,x=(a=C.contextType)&&r[a.__c],g=a?x?x.props.value:a.__:r,t.__c?E=(s=n.__c=t.__c).__=s.__E:("prototype"in C&&C.prototype.render?n.__c=s=new C(T,g):(n.__c=s=new m(T,g),s.constructor=C,s.render=M),x&&x.sub(s),s.props=T,s.state||(s.state={}),s.context=g,s.__n=r,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=C.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=p({},s.__s)),p(s.__s,C.getDerivedStateFromProps(T,s.__s))),d=s.props,h=s.state,f)null==C.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==C.getDerivedStateFromProps&&T!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(T,g),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(T,s.__s,g)||n.__v===t.__v){s.props=T,s.state=s.__s,n.__v!==t.__v&&(s.__d=!1),s.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),s.__h.length&&u.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(T,s.__s,g),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,h,v)}))}if(s.context=g,s.props=T,s.__v=n,s.__P=e,b=o.__r,N=0,"prototype"in C&&C.prototype.render)s.state=s.__s,s.__d=!1,b&&b(n),a=s.render(s.props,s.state,s.context);else do{s.__d=!1,b&&b(n),a=s.render(s.props,s.state,s.context),s.state=s.__s}while(s.__d&&++N<25);s.state=s.__s,null!=s.getChildContext&&(r=p(p({},r),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(v=s.getSnapshotBeforeUpdate(d,h)),k=null!=a&&a.type===y&&null==a.key?a.props.children:a,A(e,Array.isArray(k)?k:[k],n,t,r,i,_,u,l,c),s.base=n.__e,n.__h=null,s.__h.length&&u.push(s),E&&(s.__E=s.__=null),s.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=O(t.__e,n,t,r,i,_,u,c);(a=o.diffed)&&a(n)}catch(e){n.__v=null,(c||null!=_)&&(n.__e=l,n.__h=!!c,_[_.indexOf(l)]=null),o.__e(e,n,t)}}function S(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function O(e,n,t,o,i,_,u,l){var c,s,f,p=t.props,h=n.props,v=n.type,E=0;if("svg"===v&&(i=!0),null!=_)for(;E<_.length;E++)if((c=_[E])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,_[E]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),_=null,l=!1}if(null===v)p===h||l&&e.data===h||(e.data=h);else{if(_=_&&r.call(e.childNodes),s=(p=t.props||a).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=_)for(p={},E=0;E<e.attributes.length;E++)p[e.attributes[E].name]=e.attributes[E].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,o){var i;for(i in t)"children"===i||"key"===i||i in n||I(e,i,null,t[i],r);for(i in n)o&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||I(e,i,n[i],t[i],r)}(e,h,p,i,l),f)n.__k=[];else if(E=n.props.children,A(e,Array.isArray(E)?E:[E],n,t,o,i&&"foreignObject"!==v,_,u,_?_[0]:t.__k&&T(t,0),l),null!=_)for(E=_.length;E--;)null!=_[E]&&d(_[E]);l||("value"in h&&void 0!==(E=h.value)&&(E!==e.value||"progress"===v&&!E||"option"===v&&E!==p.value)&&I(e,"value",E,p.value,!1),"checked"in h&&void 0!==(E=h.checked)&&E!==e.checked&&I(e,"checked",E,p.checked,!1))}return e}function V(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function w(e,n,t){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||V(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&w(r[i],n,"function"!=typeof e.type);t||null==e.__e||d(e.__e),e.__e=e.__d=void 0}function M(e,n,t){return this.constructor(e,t)}function X(e,n,t){var i,_,u;o.__&&o.__(e,n),_=(i="function"==typeof t)?null:t&&t.__k||n.__k,u=[],D(n,e=(!i&&t||n).__k=h(y,null,[e]),_||a,a,void 0!==n.ownerSVGElement,!i&&t?[t]:_?null:n.firstChild?r.call(n.childNodes):null,u,!i&&t?t:_?_.__e:n.firstChild,i),S(u,e)}function H(e,n){X(e,n,H)}function F(e,n,t){var o,i,_,u=p({},e.props);for(_ in n)"key"==_?o=n[_]:"ref"==_?i=n[_]:u[_]=n[_];return arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):t),v(e.type,u,o||e.key,i||e.ref,null)}function U(e,n){var t={__c:n="__cC"+c++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(g)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}r=s.slice,o={__e:function(e,n,t,r){for(var o,i,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(n){e=n}throw e}},i=0,_=function(e){return null!=e&&void 0===e.constructor},m.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},t),this.props)),e&&p(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},m.prototype.render=y,u=[],b.__r=0,c=0},396:(e,n,t)=>{t.r(n),t.d(n,{useCallback:()=>A,useContext:()=>N,useDebugValue:()=>k,useEffect:()=>m,useErrorBoundary:()=>C,useImperativeHandle:()=>g,useLayoutEffect:()=>T,useMemo:()=>b,useReducer:()=>y,useRef:()=>x,useState:()=>E});var r,o,i,_,u=t(400),l=0,c=[],a=[],s=u.options.__b,f=u.options.__r,p=u.options.diffed,d=u.options.__c,h=u.options.unmount;function v(e,n){u.options.__h&&u.options.__h(o,e,l||n),l=0;var t=o.__H||(o.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:a}),t.__[e]}function E(e){return l=1,y(S,e)}function y(e,n,t){var i=v(r++,2);return i.t=e,i.__c||(i.__=[t?t(n):S(void 0,n),function(e){var n=i.t(i.__[0],e);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function m(e,n){var t=v(r++,3);!u.options.__s&&D(t.__H,n)&&(t.__=e,t.u=n,o.__H.__h.push(t))}function T(e,n){var t=v(r++,4);!u.options.__s&&D(t.__H,n)&&(t.__=e,t.u=n,o.__h.push(t))}function x(e){return l=5,b((function(){return{current:e}}),[])}function g(e,n,t){l=6,T((function(){return"function"==typeof e?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0}),null==t?t:t.concat(e))}function b(e,n){var t=v(r++,7);return D(t.__H,n)?(t.__V=e(),t.u=n,t.__h=e,t.__V):t.__}function A(e,n){return l=8,b((function(){return e}),n)}function N(e){var n=o.context[e.__c],t=v(r++,9);return t.c=e,n?(null==t.__&&(t.__=!0,n.sub(o)),n.props.value):e.__}function k(e,n){u.options.useDebugValue&&u.options.useDebugValue(n?n(e):e)}function C(e){var n=v(r++,10),t=E();return n.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function P(){for(var e;e=c.shift();)if(e.__P)try{e.__H.__h.forEach(R),e.__H.__h.forEach(j),e.__H.__h=[]}catch(n){e.__H.__h=[],u.options.__e(n,e.__v)}}u.options.__b=function(e){o=null,s&&s(e)},u.options.__r=function(e){f&&f(e),r=0;var n=(o=e.__c).__H;n&&(i===o?(n.__h=[],o.__h=[],n.__.forEach((function(e){e.__V=a,e.u=void 0}))):(n.__h.forEach(R),n.__h.forEach(j),n.__h=[])),i=o},u.options.diffed=function(e){p&&p(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&_===u.options.requestAnimationFrame||((_=u.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),I&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);I&&(n=requestAnimationFrame(t))})(P)),n.__H.__.forEach((function(e){e.u&&(e.__H=e.u),e.__V!==a&&(e.__=e.__V),e.u=void 0,e.__V=a}))),i=o=null},u.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(R),e.__h=e.__h.filter((function(e){return!e.__||j(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],u.options.__e(t,e.__v)}})),d&&d(e,n)},u.options.unmount=function(e){h&&h(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{R(e)}catch(e){n=e}})),n&&u.options.__e(n,t.__v))};var I="function"==typeof requestAnimationFrame;function R(e){var n=o,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),o=n}function j(e){var n=o;e.__c=e.__(),o=n}function D(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function S(e,n){return"function"==typeof n?n(e):n}},584:(e,n,t)=>{t.r(n),t.d(n,{Fragment:()=>r.Fragment,jsx:()=>i,jsxDEV:()=>i,jsxs:()=>i});var r=t(400),o=0;function i(e,n,t,i,_){var u,l,c={};for(l in n)"ref"==l?u=n[l]:c[l]=n[l];var a={type:e,props:c,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:_,__self:i};if("function"==typeof e&&(u=e.defaultProps))for(l in u)void 0===c[l]&&(c[l]=u[l]);return r.options.vnode&&r.options.vnode(a),a}},864:function(e,n,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))};n.__esModule=!0;var i=t(584),_=t(396),u=t(532),l=["orange","purple","blue","red"],c=500;n.default=function(){var e=(0,_.useState)([Math.random()]),n=e[0],t=e[1],a=(0,_.useState)(!0),s=a[0],f=a[1],p=(0,_.useState)(0),d=p[0],h=p[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("style",{children:[".root { margin: auto; width: 400px; max-width: 100%; font: 14px/1.4 monospace; } .root pre { font: inherit; }",".container { background: beige; padding: 20px; margin: 20px; border-radius: 20px; }",".item { background: seagreen; padding: 5px 10px; color: #fff; margin: 2px; transition: all ".concat(c,"ms; border-radius: 5px; }"),"button.item { border: 0; font: inherit; display: block; width: 100%; text-align: left; }",".fade-appear { opacity: 0 }",".fade-appear-active { opacity: 1 }",".fade-appear-done { opacity: 1 }",".fade-enter { opacity: 0 }",".fade-enter-active { opacity: 1 }",".fade-enter-done { opacity: 1 }",".fade-exit { opacity: 1 }",".fade-exit-active { opacity: 0 }",".fade-exit-done { opacity: 0 }"]}),(0,i.jsxs)("div",r({className:"root"},{children:[(0,i.jsxs)("div",r({className:"container"},{children:[(0,i.jsx)("button",r({onClick:function(){return f((function(e){return!e}))},type:"button"},{children:"Toggle visibility"})),(0,i.jsx)("hr",{}),(0,i.jsx)(u.Transition,r({in:s,appear:!0,duration:c,alwaysMounted:!0},{children:function(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{children:"Transition state"}),(0,i.jsx)("pre",{children:JSON.stringify(e,null," ")})]})}})),(0,i.jsx)("hr",{}),(0,i.jsx)(u.CSSTransition,r({in:s,appear:!0,duration:c,classNames:"fade",alwaysMounted:!0},{children:(0,i.jsx)("div",r({className:"item"},{children:"Visible [class name]"}))})),(0,i.jsx)("hr",{}),(0,i.jsx)(u.StyleTransition,r({in:s,appear:!0,duration:c,alwaysMounted:!0,styles:{appear:{opacity:0},appearActive:{opacity:1},enter:{opacity:0},enterActive:{opacity:1},exit:{opacity:1},exitActive:{opacity:0},exitDone:{opacity:0}},onEnter:function(e){return console.log("onEnter",e)}},{children:(0,i.jsx)("div",r({className:"item"},{children:"Visible [inline styles]"}))}))]})),(0,i.jsxs)("div",r({className:"container"},{children:[(0,i.jsx)("button",r({onClick:function(){return t((function(e){return o(o([],e,!0),[Math.random()],!1)}))},type:"button"},{children:"Add item"}))," ",(0,i.jsx)("button",r({onClick:function(){return t((function(e){return e.slice(1)}))},type:"button"},{children:"Remove first item"})),(0,i.jsx)("hr",{}),(0,i.jsx)(u.TransitionGroup,r({duration:c},{children:n.map((function(e,n){return(0,i.jsx)(u.CSSTransition,r({classNames:"fade"},{children:(0,i.jsxs)("button",r({type:"button",className:"item",onClick:function(){return function(e){return t((function(n){return o(o([],n.slice(0,e),!0),n.slice(e+1),!0)}))}(n)}},{children:["#".concat(n," - ").concat(e)," ×"]}))}),e)}))}))]})),(0,i.jsxs)("div",r({className:"container"},{children:[(0,i.jsx)("button",r({onClick:function(){return h((function(e){return Math.min(l.length-1,e+1)}))},type:"button"},{children:"Next item color"}))," ",(0,i.jsx)("button",r({onClick:function(){return h((function(e){return Math.max(0,e-1)}))},type:"button"},{children:"Prev item color"})),(0,i.jsx)("hr",{}),(0,i.jsx)(u.TransitionGroup,r({duration:c,exit:!1},{children:(0,i.jsx)(u.CSSTransition,r({classNames:"fade"},{children:(0,i.jsx)("div",r({className:"item",style:{background:l[d]}},{children:l[d]}))}),d)}))]}))]}))]})}}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={exports:{}};return r[e].call(t.exports,t,t.exports,i),t.exports}i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=i(584),n=i(400),t=i(864),(0,n.render)((0,e.jsx)(t.default,{}),document.body)})();
//# sourceMappingURL=bundle.js.map