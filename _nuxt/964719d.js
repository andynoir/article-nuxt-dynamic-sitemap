(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{359:function(e,t,n){var content=n(369);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("59239210",content,!0,{sourceMap:!1})},368:function(e,t,n){"use strict";var r=n(359);n.n(r).a},369:function(e,t,n){(t=n(52)(!1)).push([e.i,".page__link{display:inline-flex}",""]),e.exports=t},380:function(e,t,n){"use strict";n.r(t);n(104),n(15),n(352),n(36),n(51);var r=n(6),c=n(353),o=n(356),l=n(357),f=n(354),d=n(37),h=n(355);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var r,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(c<3?r(o):c>3?r(t,n,o):r(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},m=function(e){Object(o.a)(n,e);var t=v(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).albums=[],e}return n}(h.Vue),j=m=y([Object(h.Component)({head:function(){return{title:"All Albums Page",meta:[{hid:"description",name:"description",content:"All Users Page description"}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("/albums");case 3:return r=t.sent,t.abrupt("return",{albums:r});case 5:case"end":return t.stop()}}),t)})))()}})],m),O=(n(368),n(38)),component=Object(O.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("ul",e._l(e.albums,(function(t,r){return n("li",{key:r},[e._v("\n        "+e._s(t.title)+"\n      ")])})),0)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);