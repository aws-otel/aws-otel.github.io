"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[6976],{14715:function(t,e,n){var r=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.styles=void 0;var a=r(n(38416)),i=r(n(70215)),o=r(n(10434)),s=r(n(67294)),l=(r(n(45697)),r(n(75900))),c=(n(73976),r(n(6988))),u=n(53017),d=(r(n(66857)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(t){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return d.forEach((function(t,r){0!==r&&(n["spacing-".concat(e,"-").concat(t)]={margin:-t/2,width:"calc(100% + ".concat(t,"px)"),"& > $item":{padding:t/2}})})),n}(0,"xs"),u.keys.reduce((function(e,n){return function(t,e,n){var r={};f.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.default)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))};function g(t){var e,n=t.alignContent,r=t.alignItems,c=t.classes,u=t.className,d=t.component,f=t.container,p=t.direction,x=t.item,m=t.justify,h=t.lg,y=t.md,v=t.sm,b=t.spacing,Z=t.wrap,w=t.xl,j=t.xs,O=t.zeroMinWidth,C=(0,i.default)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=(0,l.default)((e={},(0,a.default)(e,c.container,f),(0,a.default)(e,c.item,x),(0,a.default)(e,c.zeroMinWidth,O),(0,a.default)(e,c["spacing-xs-".concat(String(b))],f&&0!==b),(0,a.default)(e,c["direction-xs-".concat(String(p))],p!==g.defaultProps.direction),(0,a.default)(e,c["wrap-xs-".concat(String(Z))],Z!==g.defaultProps.wrap),(0,a.default)(e,c["align-items-xs-".concat(String(r))],r!==g.defaultProps.alignItems),(0,a.default)(e,c["align-content-xs-".concat(String(n))],n!==g.defaultProps.alignContent),(0,a.default)(e,c["justify-xs-".concat(String(m))],m!==g.defaultProps.justify),(0,a.default)(e,c["grid-xs-".concat(String(j))],!1!==j),(0,a.default)(e,c["grid-sm-".concat(String(v))],!1!==v),(0,a.default)(e,c["grid-md-".concat(String(y))],!1!==y),(0,a.default)(e,c["grid-lg-".concat(String(h))],!1!==h),(0,a.default)(e,c["grid-xl-".concat(String(w))],!1!==w),e),u);return s.default.createElement(d,(0,o.default)({className:P},C))}e.styles=p,g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var x=(0,c.default)(p,{name:"MuiGrid"})(g);e.default=x},97322:function(t,e,n){var r=n(64836);Object.defineProperty(e,"Z",{enumerable:!0,get:function(){return a.default}});var a=r(n(14715))},66857:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){return function(){return null}};e.default=n},33817:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(94578),a=n(67294),i=n(25444),o=n(45163),s=n(45447),l=n(12426),c=n(20589),u=n(69262),d=n(59706),f=n(6988),p={root:{textAlign:"left",margin:"50px 0",borderRadius:"12px"},media:{height:140}},g=n(23431),x=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.classes;return(0,g.tZ)(o.Z,{className:t.root},(0,g.tZ)(s.Z,null,(0,g.tZ)(i.Link,{to:this.props.link,target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer"},(0,g.tZ)("div",{style:{height:"20px"}}),(0,g.tZ)(c.Z,null,(0,g.tZ)(d.Z,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.title),(0,g.tZ)(d.Z,{variant:"caption",color:"textSecondary",component:"p"},this.props.date),(0,g.tZ)("div",{style:{height:"20px"}}),(0,g.tZ)(d.Z,{variant:"body1",color:"textSecondary",component:"p"},this.props.blurb)))),(0,g.tZ)(l.Z,null,(0,g.tZ)(i.Link,{to:this.props.link,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},(0,g.tZ)(u.default,{size:"small",color:"primary"},"Read More"))))},e}(a.Component),m=(0,f.default)(p)(x)},48359:function(t,e,n){var r=n(87462),a=n(63366),i=(n(67294),n(6988)),o=n(97322),s=n(23431),l=["classes","children","className"];function c(t){var e=Object.assign({},t),n=e.classes,i=e.children,c=e.className,u=(0,a.Z)(e,l);return(0,s.tZ)(o.Z,(0,r.Z)({container:!0},u,{className:n.grid+" "+c}),i)}c.defaultProps={className:""},e.Z=(0,i.default)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(c)},55212:function(t,e,n){var r=n(87462),a=n(63366),i=(n(67294),n(6988)),o=n(97322),s=n(23431),l=["classes","children","className"];e.Z=(0,i.default)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})((function(t){var e=Object.assign({},t),n=e.classes,i=e.children,c=e.className,u=(0,a.Z)(e,l);return(0,s.tZ)(o.Z,(0,r.Z)({item:!0},u,{className:n.grid+" "+c}),i)}))},50196:function(t,e,n){n.r(e);n(67294);var r=n(25444),a=n(6988),i=n(33817),o=n(23431);e.default=(0,a.default)({})((function(t){var e=(0,r.useStaticQuery)("606509639");return(0,o.tZ)("div",null,e.allAnnouncementsYaml.edges[0].node.announcements.map((function(t,e){return(0,o.tZ)(i.Z,{key:e,title:t.title,date:t.date,blurb:t.blurb,link:t.link})})))}))},64691:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(94578),a=n(67294),i=n(6988),o=n(48359),s=n(55212),l=n(4942);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={section:{padding:"70px 0 100px 0",textAlign:"center"},title:u(u({},n(35985).TN),{},{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},f=n(50196),p=n(23431),g=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this.props.classes;return(0,p.tZ)("div",{className:t.section},(0,p.tZ)(o.Z,{justify:"center"},(0,p.tZ)(s.Z,{xs:12,sm:12,md:12},(0,p.tZ)("h1",{className:t.title},"Announcements"),(0,p.tZ)(f.default,null))))},e}(a.Component),x=(0,i.default)(d)(g)}}]);
//# sourceMappingURL=39973b2b31dc3e685519cfacf0059c2f1210a28a-e7749bb69d946a18794c.js.map