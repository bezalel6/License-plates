(this["webpackJsonplicense-plates"]=this["webpackJsonplicense-plates"]||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),o=n.n(i),u=(n(18),n(12)),l=n(4),h=n(13),d=n(1),s=n(6),c=n(7),v=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(s.a)(this,e),this.data=void 0,this.next=void 0,this.prev=void 0,this.data=t,this.next=n,this.prev=r,t.newArr&&(t.newArr=Object(d.a)(t.newArr))}return Object(c.a)(e,[{key:"printTree",value:function(){for(var e=this,t=!1,n=[];null!=e&&!t&&e.next;){var r="",a=[];e.data.newArr&&(a=Object(d.a)(e.data.newArr));var i=e.data.newArrIndex?e.data.newArrIndex:0;"leaf"===e.data.operation&&0===e.data.num&&(t=!0),r+=e.data.num+("plus"===e.data.operation?"+":"leaf"===e.data.operation?"#":"-");var o=Object(d.a)(a),u=a.splice(0,i)+",",l=","+(a=o).splice(i+1,a.length);a=o,u=","===u?"":u,l=","===l?"":l;var h=+e.data.num;"plus"===e.data.operation?h+=+e.data.operatingOn:"minus"===e.data.operation&&(h-=+e.data.operatingOn);var s="["+u+r+e.data.operatingOn+"="+h+l+"]";n.push(s),e=e.next}return n}}]),e}(),p=function(){function e(t){Object(s.a)(this,e),this._head=void 0,this.length=void 0,this._head=t,this.length=1}return Object(c.a)(e,[{key:"head",get:function(){if(this._head&&null!=this._head.prev){for(var e=this._head.prev;null!=e.prev;)e=e.prev;return e}return this._head}},{key:"combineList",value:function(e){if(null===this.head)return this._head=e.head,void(this.length=e.length);this.length+=e.length;var t=e.head;e._head=this.head;for(var n=this.head;null!==n&&null!==n.next;)n=n.next;n.next=t,t&&(t.prev=n)}},{key:"clear",value:function(){this._head=null,this.length=0}},{key:"printList",value:function(){for(var e=this.head,t="";null!==e&&null!==e.next;){var n=Object(d.a)(e.data.newArr),r=e.data.newArrIndex;t+=e.data.num+("plus"===e.data.operation?"+":"leaf"===e.data.operation?"=":"-");var a=n.splice(0,r+1),i=n.splice(r+2,n.length),o=n[r];console.log("[ "+a+","+t+o+","+i+"]"),e=e.next}}}]),e}();function f(e){if(1===e.length)return new p(new v({num:e[0],operation:"leaf",newArr:e,newArrIndex:0,operatingOn:e[0]}));if(e.length>=2)for(var t=0;t<e.length-1;t++){var n=e[t],r=Object(d.a)(e);r.splice(t,1),r[t]+=10*n;var a=f(r);if(g(a))return a}var i=e.pop();if(void 0===i)throw new Error("arr pop return undefined");var o=j(e,i,"minus"),u=j(e,i,"plus");if(void 0===u||void 0===o)throw new Error;return u.combineList(o),u}function b(e){if(!e||0===e.length)return 1e3;var t=e.head;if(!t)throw new Error;for(var n=t.data.num;null!==t&&t.data;)Math.abs(t.data.num)<Math.abs(n)&&(n=t.data.num),t=t.next;return n}function g(e){var t=e.head;if(!t)return!1;for(;null!==t&&t.data;){if("leaf"===t.data.operation&&0===t.data.num){for(var n=t;null!=n.prev;)n=n.prev;return n}t=t.next}return!1}function j(e,t,n){for(var r,a=0;a<e.length;a++){var i=Object(d.a)(e),o=i[a];i[a]+="minus"===n?-t:t;var u=new p(new v({num:t,operation:n,newArr:i,newArrIndex:a,operatingOn:o}));if(u.combineList(f(i)),g(u))return u;(!r||b(r)>b(u))&&(r=u),u.clear()}return r}var m=n(3);function O(){var e=Object(h.a)(),t=e.register,n=e.handleSubmit,a=e.watch,i=e.formState.errors,o=Object(r.useState)([]),d=Object(l.a)(o,2),s=d[0],c=d[1];return console.log(a("example")),Object(m.jsxs)("form",{onSubmit:n((function(e){var t=g(f(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(+r)}return t}(e.num)));if(!1!==t){var n=[];t.printTree().forEach((function(e){n.push(Object(m.jsx)("li",{children:e},e))})),c(n)}})),children:[Object(m.jsx)("input",Object(u.a)({},t("num",{required:!0}))),i.exampleRequired&&Object(m.jsx)("span",{children:"This field is required"}),Object(m.jsx)("ul",{children:s}),Object(m.jsx)("input",{type:"submit"})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),w()}},[[21,1,2]]]);
//# sourceMappingURL=main.ae86eb37.chunk.js.map