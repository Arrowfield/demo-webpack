!function(e){var n={};function r(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)r.d(t,c,function(n){return e[n]}.bind(null,c));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="../asset/dev/",r(r.s=0)}([function(module,exports,__webpack_require__){eval("//index.js 语法（common.js）\r\nconst greeter = __webpack_require__(1)\r\ndocument.querySelector('#root').appendChild(greeter())\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvaW5kZXguanM/NjFlMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLENBQVc7QUFDbkMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanMg6K+t5rOV77yIY29tbW9uLmpz77yJXHJcbmNvbnN0IGdyZWV0ZXIgPSByZXF1aXJlKCcuL2dyZWV0ZXInKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLmFwcGVuZENoaWxkKGdyZWV0ZXIoKSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){eval("//greeter.js (语法common.js)\r\nvar config = __webpack_require__(2)\r\nmodule.exports = function(){\r\n  var greeter = document.createElement('div')\r\n  greeter.textContent = config.greetText\r\n  return greeter\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgvZ3JlZXRlci5qcz8wNjczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLENBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9ncmVldGVyLmpzICjor63ms5Vjb21tb24uanMpXHJcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qc29uJylcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xyXG4gIHZhciBncmVldGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBncmVldGVyLnRleHRDb250ZW50ID0gY29uZmlnLmdyZWV0VGV4dFxyXG4gIHJldHVybiBncmVldGVyXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")},function(module){eval('module.exports = {"greetText":"Hi my name is fangziping"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')}]);