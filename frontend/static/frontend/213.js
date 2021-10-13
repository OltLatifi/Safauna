(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[213],{9738:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2122),o=n(1253),i=n(7294),a=(n(5697),n(6010)),s=n(4670),c=n(4720),l=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,u=e.focusVisibleClassName,f=(0,o.Z)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(c.Z,(0,r.Z)({className:(0,a.Z)(s.root,l),focusVisibleClassName:(0,a.Z)(u,s.focusVisible),ref:t},f),n,i.createElement("span",{className:s.focusHighlight}))}));const u=(0,s.Z)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},9912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(2122),o=n(1253),i=n(7294),a=(n(5697),n(6010)),s=n(4670),c=i.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,u=(0,o.Z)(e,["classes","className","component"]);return i.createElement(l,(0,r.Z)({className:(0,a.Z)(n.root,s),ref:t},u))}));const l=(0,s.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},951:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2122),o=n(1253),i=n(7294),a=(n(5697),n(6010)),s=n(4670),c=["video","audio","picture","iframe","img"],l=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,u=e.component,f=void 0===u?"div":u,p=e.image,d=e.src,h=e.style,m=(0,o.Z)(e,["children","classes","className","component","image","src","style"]),y=-1!==c.indexOf(f),b=!y&&p?(0,r.Z)({backgroundImage:'url("'.concat(p,'")')},h):h;return i.createElement(f,(0,r.Z)({className:(0,a.Z)(s.root,l,y&&s.media,-1!=="picture img".indexOf(f)&&s.img),ref:t,style:b,src:y?p||d:void 0},m),n)}));const u=(0,s.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},8463:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2122),o=n(1253),i=n(7294),a=(n(5697),n(6010)),s=n(9895),c=n(4670),l=i.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.raised,u=void 0!==l&&l,f=(0,o.Z)(e,["classes","className","raised"]);return i.createElement(s.Z,(0,r.Z)({className:(0,a.Z)(n.root,c),elevation:u?8:1,ref:t},f))}));const u=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},8744:(e,t,n)=>{"use strict";t.Z=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}(n(7294)),i=n(5697),a=(r=n(6034))&&r.__esModule?r:{default:r};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,r,i,s=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),h(p(t=s.call(this,e)),"_isMounted",!1),h(p(t),"handleTruncate",(function(e){t._isMounted&&e!==t.state.truncated&&(t.setState({truncated:e}),e&&t.truncateRef.onResize())})),h(p(t),"toggleLines",(function(e){e.preventDefault();var n=p(t);t._isMounted&&t.setState({expanded:!t.state.expanded},(function(){n.props.onClick&&n.props.onClick(n.state.expanded)}))})),t.state={expanded:!1,truncated:!1},t}return t=c,(n=[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.setState({expanded:this.props.expanded})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.more,i=t.less,s=t.lines,c=t.anchorClass,l=t.className,u=t.width,f=t.keepNewLines,p=t.truncatedEndingComponent,d=this.state,h=d.expanded,m=d.truncated;return o.default.createElement("div",{className:l},o.default.createElement(a.default,{width:u,lines:!h&&s,ellipsis:o.default.createElement("span",null,p,o.default.createElement("a",{href:"",className:c,onClick:this.toggleLines},r)),onTruncate:this.handleTruncate,ref:function(t){return e.truncateRef=t}},f?n.split("\n").map((function(e,t,n){return e=o.default.createElement("span",{key:t},e),t===n.length-1?e:[e,o.default.createElement("br",{key:t+"br"})]})):n),!m&&h&&o.default.createElement("span",null," ",o.default.createElement("a",{href:"",className:c,onClick:this.toggleLines},i)))}}])&&l(t.prototype,n),c}(o.Component);h(m,"defaultProps",{lines:3,more:"Show more",less:"Show less",anchorClass:"",onClick:void 0,expanded:!1,width:0,keepNewLines:!1,truncatedEndingComponent:"... "}),h(m,"propTypes",{children:i.PropTypes.node,lines:i.PropTypes.number,more:i.PropTypes.node,less:i.PropTypes.node,anchorClass:i.PropTypes.string,className:i.PropTypes.string,onClick:i.PropTypes.func,expanded:i.PropTypes.bool,width:i.PropTypes.number,keepNewLines:i.PropTypes.bool,truncatedEndingComponent:i.PropTypes.node});var y=m;t.Z=y},6034:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(7294)),o=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,e);var t,n,o,i,a=(o=m,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function m(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return c(this,m),h(p(e=a.call.apply(a,[this].concat(n))),"state",{}),h(p(e),"extractReplaceLinksKeys",(function(t){var n=p(e),r=0;return e.replacedLinks=[],t.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g,(function(){var e=Array.prototype.slice.call(arguments,1,4);e.key="["+"@".repeat(e[2].length-1)+"="+r+++"]",n.replacedLinks.push(e),t=t.replace(e[0],e.key)})),t})),h(p(e),"restoreReplacedLinks",(function(t){return e.replacedLinks.forEach((function(e){t=t.replace(e.key,e[0])})),e.createMarkup(t)})),h(p(e),"innerText",(function(t){var n=document.createElement("div"),r="innerText"in window.HTMLElement.prototype?"innerText":"textContent",o=t.innerHTML.replace(/\r\n|\r|\n/g," ");n.innerHTML=e.extractReplaceLinksKeys(o);var i=n[r],a=document.createElement("div");return a.innerHTML="foo<br/>bar","foo\nbar"!==a[r].replace(/\r\n|\r/g,"\n")&&(n.innerHTML=n.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=n[r]),i})),h(p(e),"onResize",(function(){e.calcTargetWidth()})),h(p(e),"onTruncate",(function(t){var n=e.props.onTruncate;"function"==typeof n&&(e.timeout=window.requestAnimationFrame((function(){n(t)})))})),h(p(e),"calcTargetWidth",(function(t){var n=p(e),r=n.elements.target,o=n.calcTargetWidth,i=n.canvasContext,a=n.props.width;if(r){var s=a||Math.floor(r.parentNode.getBoundingClientRect().width);if(!s)return window.requestAnimationFrame((function(){return o(t)}));var c=window.getComputedStyle(r),l=[c["font-weight"],c["font-style"],c["font-size"],c["font-family"]].join(" ");i.font=l,e.setState({targetWidth:s},t)}})),h(p(e),"measureWidth",(function(t){return e.canvasContext.measureText(t).width})),h(p(e),"ellipsisWidth",(function(e){return e.offsetWidth})),h(p(e),"trimRight",(function(e){return e.replace(/\s+$/,"")})),h(p(e),"createMarkup",(function(e){return r.default.createElement("span",{dangerouslySetInnerHTML:{__html:e}})})),h(p(e),"getLines",(function(){for(var t=p(e),n=t.elements,o=t.props,i=o.lines,a=o.ellipsis,s=o.trimWhitespace,c=t.state.targetWidth,l=t.innerText,u=t.measureWidth,f=t.onTruncate,d=t.trimRight,h=t.renderLine,m=t.restoreReplacedLinks,y=[],b=l(n.text).split("\n").map((function(e){return e.split(" ")})),v=!0,g=e.ellipsisWidth(e.elements.ellipsis),w=1;w<=i;w++){var k=b[0];if(0!==k.length){var O=k.join(" ");if(u(O)<=c&&1===b.length){v=!1,O=m(O),y.push(O);break}if(w===i){for(var T=k.join(" "),E=0,P=T.length-1;E<=P;){var C=Math.floor((E+P)/2);u(T.slice(0,C+1))+g<=c?E=C+1:P=C-1}var j=T.slice(0,E);if(s)for(j=d(j);!j.length&&y.length;)j=d(y.pop());"]["===j.substr(j.length-2)&&(j=j.substring(0,j.length-1)),j=m(j=j.replace(/\[@+$/,"")),O=r.default.createElement("span",null,j,a)}else{for(var x=0,_=k.length-1;x<=_;){var M=Math.floor((x+_)/2);u(k.slice(0,M+1).join(" "))<=c?x=M+1:_=M-1}if(0===x){w=i-1;continue}O=m(O=k.slice(0,x).join(" ")),b[0].splice(0,x)}y.push(O)}else y.push(),b.shift(),w--}return f(v),y.map(h)})),h(p(e),"renderLine",(function(e,t,n){if(t===n.length-1)return r.default.createElement("span",{key:t},e);var o=r.default.createElement("br",{key:t+"br"});return e?[r.default.createElement("span",{key:t},e),o]:o})),h(p(e),"styles",{ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}}),e.elements={},e.replacedLinks=[],e}return t=m,(n=[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"render",value:function(){var e,t=this,n=this.elements.target,o=this.props,i=o.children,a=o.ellipsis,c=o.lines,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(o,["children","ellipsis","lines"]),u=this.state.targetWidth,f=this.getLines,p=this.onTruncate;return"undefined"!=typeof window&&!(!n||!u)&&(c>0?e=f():(e=i,p(!1))),delete l.onTruncate,delete l.trimWhitespace,r.default.createElement("span",s({},l,{ref:function(e){t.elements.target=e}}),r.default.createElement("span",null,e),r.default.createElement("span",{ref:function(e){t.elements.text=e}},i),r.default.createElement("span",{ref:function(e){t.elements.ellipsis=e},style:this.styles.ellipsis},a))}}])&&l(t.prototype,n),m}(r.default.Component);t.default=m,h(m,"propTypes",{children:o.default.node,ellipsis:o.default.node,lines:o.default.oneOfType([o.default.oneOf([!1]),o.default.number]),trimWhitespace:o.default.bool,width:o.default.number,onTruncate:o.default.func}),h(m,"defaultProps",{children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0})}}]);