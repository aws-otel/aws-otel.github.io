"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[1644],{1012:function(e,t,a){a(84944),a(33792);var o=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a(38416)),n=o(a(70215)),i=o(a(10434)),d=o(a(67294)),l=(o(a(45697)),o(a(75900))),c=(a(73976),o(a(6988))),u=a(16095),s=o(a(66436)),p=a(12773),f=function(e){return{root:(0,i.default)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,u.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},mini:{width:40,height:40},sizeSmall:{padding:"4px 8px",minWidth:64,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function b(e){var t,a=e.children,o=e.classes,c=e.className,u=e.color,f=e.disabled,b=e.disableFocusRipple,y=e.focusVisibleClassName,m=e.fullWidth,h=e.mini,v=e.size,x=e.variant,g=(0,n.default)(e,["children","classes","className","color","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","mini","size","variant"]),C="fab"===x||"extendedFab"===x,k="contained"===x||"raised"===x,w="text"===x||"flat"===x,S=(0,l.default)(o.root,(t={},(0,r.default)(t,o.fab,C),(0,r.default)(t,o.mini,C&&h),(0,r.default)(t,o.extendedFab,"extendedFab"===x),(0,r.default)(t,o.text,w),(0,r.default)(t,o.textPrimary,w&&"primary"===u),(0,r.default)(t,o.textSecondary,w&&"secondary"===u),(0,r.default)(t,o.flat,w),(0,r.default)(t,o.flatPrimary,w&&"primary"===u),(0,r.default)(t,o.flatSecondary,w&&"secondary"===u),(0,r.default)(t,o.contained,k||C),(0,r.default)(t,o.containedPrimary,(k||C)&&"primary"===u),(0,r.default)(t,o.containedSecondary,(k||C)&&"secondary"===u),(0,r.default)(t,o.raised,k||C),(0,r.default)(t,o.raisedPrimary,(k||C)&&"primary"===u),(0,r.default)(t,o.raisedSecondary,(k||C)&&"secondary"===u),(0,r.default)(t,o.outlined,"outlined"===x),(0,r.default)(t,o.outlinedPrimary,"outlined"===x&&"primary"===u),(0,r.default)(t,o.outlinedSecondary,"outlined"===x&&"secondary"===u),(0,r.default)(t,o["size".concat((0,p.capitalize)(v))],"medium"!==v),(0,r.default)(t,o.disabled,f),(0,r.default)(t,o.fullWidth,m),(0,r.default)(t,o.colorInherit,"inherit"===u),t),c);return d.default.createElement(s.default,(0,i.default)({className:S,disabled:f,focusRipple:!b,focusVisibleClassName:(0,l.default)(o.focusVisible,y)},g),d.default.createElement("span",{className:o.label},a))}t.styles=f,b.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var y=(0,c.default)(f,{name:"MuiButton"})(b);t.default=y},69262:function(e,t,a){var o=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=o(a(1012))},51223:function(e,t,a){var o=a(5112),r=a(70030),n=a(3070).f,i=o("unscopables"),d=Array.prototype;void 0===d[i]&&n(d,i,{configurable:!0,value:r(null)}),e.exports=function(e){d[i][e]=!0}},77475:function(e,t,a){var o=a(43157),r=a(4411),n=a(70111),i=a(5112)("species"),d=Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(r(t)&&(t===d||o(t.prototype))||n(t)&&null===(t=t[i]))&&(t=void 0)),void 0===t?d:t}},65417:function(e,t,a){var o=a(77475);e.exports=function(e,t){return new(o(e))(0===t?0:t)}},7207:function(e){var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},6790:function(e,t,a){var o=a(43157),r=a(26244),n=a(7207),i=a(49974),d=function(e,t,a,l,c,u,s,p){for(var f,b,y=c,m=0,h=!!s&&i(s,p);m<l;)m in a&&(f=h?h(a[m],m,t):a[m],u>0&&o(f)?(b=r(f),y=d(e,t,f,b,y,u-1)-1):(n(y+1),e[y]=f),y++),m++;return y};e.exports=d},49974:function(e,t,a){var o=a(21470),r=a(19662),n=a(34374),i=o(o.bind);e.exports=function(e,t){return r(e),void 0===t?e:n?i(e,t):function(){return e.apply(t,arguments)}}},21470:function(e,t,a){var o=a(84326),r=a(1702);e.exports=function(e){if("Function"===o(e))return r(e)}},60490:function(e,t,a){var o=a(35005);e.exports=o("document","documentElement")},43157:function(e,t,a){var o=a(84326);e.exports=Array.isArray||function(e){return"Array"===o(e)}},70030:function(e,t,a){var o,r=a(19670),n=a(36048),i=a(80748),d=a(3501),l=a(60490),c=a(80317),u=a(6200),s=u("IE_PROTO"),p=function(){},f=function(e){return"<script>"+e+"</"+"script>"},b=function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){try{o=new ActiveXObject("htmlfile")}catch(r){}var e,t;y="undefined"!=typeof document?document.domain&&o?b(o):((t=c("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F):b(o);for(var a=i.length;a--;)delete y.prototype[i[a]];return y()};d[s]=!0,e.exports=Object.create||function(e,t){var a;return null!==e?(p.prototype=r(e),a=new p,p.prototype=null,a[s]=e):a=y(),void 0===t?a:n.f(a,t)}},36048:function(e,t,a){var o=a(19781),r=a(3353),n=a(3070),i=a(19670),d=a(45656),l=a(81956);t.f=o&&!r?Object.defineProperties:function(e,t){i(e);for(var a,o=d(t),r=l(t),c=r.length,u=0;c>u;)n.f(e,a=r[u++],o[a]);return e}},84944:function(e,t,a){var o=a(82109),r=a(6790),n=a(47908),i=a(26244),d=a(19303),l=a(65417);o({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=n(this),a=i(t),o=l(t,0);return o.length=r(o,t,t,a,0,void 0===e?1:d(e)),o}})},33792:function(e,t,a){a(51223)("flat")}}]);
//# sourceMappingURL=a79c8f1f9ca357a768e8e50a607a4e25d557281d-212f305f15bae2e92638.js.map