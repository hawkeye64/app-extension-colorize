(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["8a06f4c8"],{"4b82":function(e,t,o){"use strict";var n=o("be16");t["a"]=n["a"]},6372:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[o("q-toggle",{staticClass:"col-12",attrs:{label:"Enable themes"},model:{value:e.enableTheme,callback:function(t){e.enableTheme=t},expression:"enableTheme"}}),o("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change theme",options:e.themesList,disable:!0!==e.enableTheme},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}})],1),o("q-separator"),o("div",{staticClass:"q-pa-md row justify-around"},[o("my-component",{staticClass:"text-center",attrs:{"enable-theme":e.enableTheme,theme:e.theme}},[o("div",{staticClass:"text-h4"},[e._v("Some Text")])])],1)],1)},r=[],a=(o("8e6e"),o("8a81"),o("456d"),o("c47a")),l=o.n(a),s=(o("7f7f"),o("ac6a"),o("cadf"),o("06db"),o("5df3"),o("f400"),o("2b0e")),c=o("7d9b"),i=o("4b82");function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(o,!0).forEach(function(t){l()(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var b=s["a"].extend({name:"my-component",mixins:[c["a"],i["a"]],render:function(e){var t,o,n=new Map,r=this.useDefaultTheme;return!0===this.enableTheme&&(t="color",o="bgColor",n=this.getThemeColors([t,o]),r=this.setBothColors),e("div",r(n.get(t),n.get(o),{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),p={components:{MyComponent:b},data:function(){return{enableTheme:!0,theme:void 0,themes:[{name:"Default"},{name:"Dark",color:"blue-grey-2",bgColor:"blue-grey-8"},{name:"Teal",color:"teal-2",bgColor:"teal-8"},{name:"Brown",color:"brown-2",bgColor:"brown-8"},{name:"Deep Purple",color:"deep-purple-2",bgColor:"deep-purple-8"},{name:"Indigo",color:"grey-2",bgColor:"indigo-8"},{name:"Blue",color:"blue-2",bgColor:"blue-8"}]}},computed:{themesList:function(){var e=[];return this.themes.forEach(function(t){e.push({label:t.name,value:m({},t)})}),e}}},h=p,d=o("2877"),f=Object(d["a"])(h,n,r,!1,null,null,null);t["default"]=f.exports},"7d9b":function(e,t,o){"use strict";var n=o("aee3");t["a"]=n["a"]}}]);