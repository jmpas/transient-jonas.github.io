
        __NEXT_REGISTER_CHUNK('components_menu_nav_d1a5743fbe6854a43a020abac159a404', function() {
      webpackJsonp([5],{

/***/ "./components/link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
var _jsxFileName = "/Users/nipher/code/nipher/src/components/link.js";



function onClickHandler(href, as, middleware, delay, sameRouteFallback) {
  return function (e) {
    e.preventDefault();
    if (__WEBPACK_IMPORTED_MODULE_1_next_router___default.a.pathname === href) return sameRouteFallback();
    middleware();
    setTimeout(function () {
      return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(href, as);
    }, delay);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      href = _ref.href,
      as = _ref.as,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? function () {} : _ref$middleware,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      sameRouteFallback = _ref.sameRouteFallback;
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("a", {
    href: href,
    onClick: onClickHandler(href, as, middleware, delay, sameRouteFallback),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, children);
});

/***/ }),

/***/ "./components/menu-item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link__ = __webpack_require__("./components/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_item_styles__ = __webpack_require__("./components/menu-item.styles.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/menu-item.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover,
      children = _ref.children,
      slug = _ref.slug,
      href = _ref.href,
      middleware = _ref.middleware,
      sameRouteFallback = _ref.sameRouteFallback,
      modifier = _ref.modifier;
  return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("li", {
    onMouseEnter: function onMouseEnter() {
      return onHover(slug);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1592231724 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash) + " " + "menu-item ".concat(modifier)
  }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__link__["a" /* default */], _extends({
    href: href,
    sameRouteFallback: sameRouteFallback
  }, {
    middleware: middleware,
    delay: 1400,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1592231724 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash) + " " + 'title'
  }, children, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1592231724 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash) + " " + 'line'
  }))), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scoped
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1592231724",
    css: ".menu-item.jsx-1592231724 a{display:block;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUd1QixjQUNGLFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL2xpbmsnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51LWl0ZW0uc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkhvdmVyID0gKCkgPT4geyB9LCBjaGlsZHJlbiwgc2x1ZywgaHJlZiwgbWlkZGxld2FyZSwgc2FtZVJvdXRlRmFsbGJhY2ssIG1vZGlmaWVyIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT17YG1lbnUtaXRlbSAke21vZGlmaWVyfWB9IG9uTW91c2VFbnRlcj17KCgpID0+IG9uSG92ZXIoc2x1ZykpfT5cbiAgICA8TGluayB7IC4uLnsgaHJlZiwgc2FtZVJvdXRlRmFsbGJhY2sgfSB9IG1pZGRsZXdhcmU9e21pZGRsZXdhcmV9IGRlbGF5PXsxNDAwfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluZSc+PC9kaXY+XG4gICAgICA8L2gyPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubWVudS1pdGVtIDpnbG9iYWwoYSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcbiJdfQ== */\n/*@ sourceURL=components/menu-item.js */"
  }));
});

/***/ }),

/***/ "./components/menu-item.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_variables_font__ = __webpack_require__("./styles/variables/font.js");


var _defaultExport = new String(".menu-item{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;-webkit-transition:.5s background,color ease-out;transition:.5s background,color ease-out;}.menu-item:hover{color:#555;-webkit-transition:background .5s cubic-bezier(.7,.3,0,1),color .5s cubic-bezier(.7,.3,0,1);transition:background .5s cubic-bezier(.7,.3,0,1),color .5s cubic-bezier(.7,.3,0,1);}.menu-item.wip:hover::before{opacity:1;-webkit-transition:opacity .5s cubic-bezier(.7,.3,0,1);transition:opacity .5s cubic-bezier(.7,.3,0,1);}.menu-item.wip::before{content:'Coming Soon';padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity .5s cubic-bezier(.7,.3,0,1);transition:opacity .5s cubic-bezier(.7,.3,0,1);background:#333;}.menu-item .title{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;}.menu-item .title .line{width:100%;height:2px;background:linear-gradient(to right,#555,#555) no-repeat 0 0;background-size:0% 2px;-webkit-transition:background-size 0.4s ease-out;transition:background-size 0.4s ease-out;}.menu-item:hover .title .line{background-size:100% 2px;-webkit-transition:background 1s cubic-bezier(.7,.3,0,1);transition:background 1s cubic-bezier(.7,.3,0,1);}.menu-item:hover .title .line{background-size:100% 2px;-webkit-transition:background 1s cubic-bezier(.7,.3,0,1);transition:background 1s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUIsQUFXUCxBQUtELEFBS1ksQUFtQkosQUFRUCxBQVFjLEFBS0EsVUE1Q3lCLENBTHlDLEFBcUNoRixPQWhEQSxBQXdDSCxJQW5CVSxBQTRCNkMsR0FPWCxBQUtBLENBcEIzQyxHQXhDTSxNQXlDaUIsS0FwQnRCLElBcEIrQixNQXFCOUIsV0FDTSxpQkFDRixLQXlCUSxFQS9DUixRQXVCMEIsYUF5QkEsTUFsQzNDLG1CQXdDQSxBQUtBLEdBbkNZLE1BZ0JELElBZlMsS0FnQnBCLEVBeENvQixXQXlCVixPQXhCTyxDQXlCTixTQUN1QixLQXpCVSxHQU01QyxTQXdDQSw4RUE3Q0EsVUF5QlcsU0FDQyxVQUN3QyxzR0FDbEMsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmlwaGVyL2NvZGUvbmlwaGVyL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmltcG9ydCBmb250IGZyb20gJy4uL3N0eWxlcy92YXJpYWJsZXMvZm9udCdcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuLm1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6ICR7Zm9udH07XG4gIGZsZXgtYmFzaXM6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC41cyBiYWNrZ3JvdW5kLCBjb2xvciBlYXNlLW91dDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjNTU1O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgY29sb3IgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1pdGVtLndpcDpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LWl0ZW0ud2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnQ29taW5nIFNvb24nO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogJHtmb250fTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuLm1lbnUtaXRlbSAudGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXJnaW46IDA7XG59XG5cbi5tZW51LWl0ZW0gLnRpdGxlIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NTUsICM1NTUpIG5vLXJlcGVhdCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC40cyBlYXNlLW91dDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAudGl0bGUgLmxpbmUge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC50aXRsZSAubGluZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59YFxuIl19 */\n/*@ sourceURL=components/menu-item.styles.js */"));

_defaultExport.__hash = "1604688564";
_defaultExport.__scoped = ".menu-item.jsx-3292200949{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;-webkit-transition:.5s background,color ease-out;transition:.5s background,color ease-out;}.menu-item.jsx-3292200949:hover{color:#555;-webkit-transition:background .5s cubic-bezier(.7,.3,0,1),color .5s cubic-bezier(.7,.3,0,1);transition:background .5s cubic-bezier(.7,.3,0,1),color .5s cubic-bezier(.7,.3,0,1);}.menu-item.wip.jsx-3292200949:hover.jsx-3292200949::before{opacity:1;-webkit-transition:opacity .5s cubic-bezier(.7,.3,0,1);transition:opacity .5s cubic-bezier(.7,.3,0,1);}.menu-item.wip.jsx-3292200949::before{content:'Coming Soon';padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity .5s cubic-bezier(.7,.3,0,1);transition:opacity .5s cubic-bezier(.7,.3,0,1);background:#333;}.menu-item.jsx-3292200949 .title.jsx-3292200949{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;}.menu-item.jsx-3292200949 .title.jsx-3292200949 .line.jsx-3292200949{width:100%;height:2px;background:linear-gradient(to right,#555,#555) no-repeat 0 0;background-size:0% 2px;-webkit-transition:background-size 0.4s ease-out;transition:background-size 0.4s ease-out;}.menu-item.jsx-3292200949:hover .title.jsx-3292200949 .line.jsx-3292200949{background-size:100% 2px;-webkit-transition:background 1s cubic-bezier(.7,.3,0,1);transition:background 1s cubic-bezier(.7,.3,0,1);}.menu-item.jsx-3292200949:hover .title.jsx-3292200949 .line.jsx-3292200949{background-size:100% 2px;-webkit-transition:background 1s cubic-bezier(.7,.3,0,1);transition:background 1s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHcUIsQUFXUCxBQUtELEFBS1ksQUFtQkosQUFRUCxBQVFjLEFBS0EsVUE1Q3lCLENBTHlDLEFBcUNoRixPQWhEQSxBQXdDSCxJQW5CVSxBQTRCNkMsR0FPWCxBQUtBLENBcEIzQyxHQXhDTSxNQXlDaUIsS0FwQnRCLElBcEIrQixNQXFCOUIsV0FDTSxpQkFDRixLQXlCUSxFQS9DUixRQXVCMEIsYUF5QkEsTUFsQzNDLG1CQXdDQSxBQUtBLEdBbkNZLE1BZ0JELElBZlMsS0FnQnBCLEVBeENvQixXQXlCVixPQXhCTyxDQXlCTixTQUN1QixLQXpCVSxHQU01QyxTQXdDQSw4RUE3Q0EsVUF5QlcsU0FDQyxVQUN3QyxzR0FDbEMsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmlwaGVyL2NvZGUvbmlwaGVyL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmltcG9ydCBmb250IGZyb20gJy4uL3N0eWxlcy92YXJpYWJsZXMvZm9udCdcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuLm1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6ICR7Zm9udH07XG4gIGZsZXgtYmFzaXM6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC41cyBiYWNrZ3JvdW5kLCBjb2xvciBlYXNlLW91dDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjNTU1O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgY29sb3IgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1pdGVtLndpcDpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LWl0ZW0ud2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnQ29taW5nIFNvb24nO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogJHtmb250fTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuLm1lbnUtaXRlbSAudGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBtYXJnaW46IDA7XG59XG5cbi5tZW51LWl0ZW0gLnRpdGxlIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NTUsICM1NTUpIG5vLXJlcGVhdCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC40cyBlYXNlLW91dDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAudGl0bGUgLmxpbmUge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDFzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC50aXRsZSAubGluZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59YFxuIl19 */\n/*@ sourceURL=components/menu-item.styles.js */");
_defaultExport.__scopedHash = "3292200949";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./components/menu-nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_item__ = __webpack_require__("./components/menu-item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo__ = __webpack_require__("./components/logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay__ = __webpack_require__("./components/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_nav_styles__ = __webpack_require__("./components/menu-nav.styles.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/menu-nav.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        logoShape: 'logo'
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "changeLogo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(slug) {
        return _this.setState({
          logoShape: slug
        });
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          show = _props.show,
          routeTransition = _props.routeTransition,
          closeMenu = _props.closeMenu;
      return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3147802923 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_5__menu_nav_styles__["a" /* default */].__scopedHash) + " " + "menu-nav ".concat(show ? 'visible' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__overlay__["a" /* default */], {
        show: show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__logo__["a" /* default */], {
        shape: this.state.logoShape,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3147802923 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_5__menu_nav_styles__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__menu_item__["a" /* default */], {
        onHover: this.changeLogo,
        slug: "blog",
        modifier: "with-hover",
        href: "/blog",
        middleware: routeTransition,
        sameRouteFallback: closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Articles"), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__menu_item__["a" /* default */], {
        onHover: this.changeLogo,
        slug: "photography",
        modifier: "with-hover",
        href: "/photography",
        middleware: routeTransition,
        sameRouteFallback: closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Photography"), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__menu_item__["a" /* default */], {
        onHover: this.changeLogo,
        slug: "experiment",
        modifier: "with-hover",
        href: "/experiments",
        middleware: routeTransition,
        sameRouteFallback: closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Experiments"), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__menu_item__["a" /* default */], {
        onHover: this.changeLogo,
        slug: "contact",
        modifier: "with-hover",
        href: "/about",
        middleware: routeTransition,
        sameRouteFallback: closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Contact")), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_5__menu_nav_styles__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_5__menu_nav_styles__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3147802923",
        css: ".menu-nav .menu-item{-webkit-transform:translateX(-5%);-ms-transform:translateX(-5%);transform:translateX(-5%);opacity:0;-webkit-transition:-webkit-transform 1s ease,opacity .3s ease;-webkit-transition:transform 1s ease,opacity .3s ease;transition:transform 1s ease,opacity .3s ease;}.menu-nav.visible .menu-item{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;-webkit-transition:-webkit-transform 1s 1.1s ease,opacity .3s 1.1s ease;-webkit-transition:transform 1s 1.1s ease,opacity .3s 1.1s ease;transition:transform 1s 1.1s ease,opacity .3s 1.1s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkIyQixBQUd1QyxBQU9GLG9GQUNkLE1BUEEsSUFTK0MsTUFQVixrS0FDakQsd0JBT0EiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmlwaGVyL2NvZGUvbmlwaGVyL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9tZW51LWl0ZW0nXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL292ZXJsYXknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51LW5hdi5zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGxvZ29TaGFwZTogJ2xvZ28nIH1cblxuICBjaGFuZ2VMb2dvID0gc2x1ZyA9PiB0aGlzLnNldFN0YXRlKHsgbG9nb1NoYXBlOiBzbHVnIH0pXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvdywgcm91dGVUcmFuc2l0aW9uLCBjbG9zZU1lbnUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YG1lbnUtbmF2ICR7c2hvdyA/ICd2aXNpYmxlJyA6ICcnfWB9PlxuICAgICAgICA8T3ZlcmxheSBzaG93PXtzaG93fSAvPlxuICAgICAgICA8TG9nbyBzaGFwZT17dGhpcy5zdGF0ZS5sb2dvU2hhcGV9IC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8TWVudUl0ZW0gb25Ib3Zlcj17dGhpcy5jaGFuZ2VMb2dvfSBzbHVnPSdibG9nJyBtb2RpZmllcj0nd2l0aC1ob3ZlcicgaHJlZj0nL2Jsb2cnIG1pZGRsZXdhcmU9e3JvdXRlVHJhbnNpdGlvbn0gc2FtZVJvdXRlRmFsbGJhY2s9e2Nsb3NlTWVudX0+QXJ0aWNsZXM8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkhvdmVyPXt0aGlzLmNoYW5nZUxvZ299IHNsdWc9J3Bob3RvZ3JhcGh5JyBtb2RpZmllcj0nd2l0aC1ob3ZlcicgaHJlZj0nL3Bob3RvZ3JhcGh5JyBtaWRkbGV3YXJlPXtyb3V0ZVRyYW5zaXRpb259IHNhbWVSb3V0ZUZhbGxiYWNrPXtjbG9zZU1lbnV9PlBob3RvZ3JhcGh5PC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gb25Ib3Zlcj17dGhpcy5jaGFuZ2VMb2dvfSBzbHVnPSdleHBlcmltZW50JyBtb2RpZmllcj0nd2l0aC1ob3ZlcicgaHJlZj0nL2V4cGVyaW1lbnRzJyBtaWRkbGV3YXJlPXtyb3V0ZVRyYW5zaXRpb259IHNhbWVSb3V0ZUZhbGxiYWNrPXtjbG9zZU1lbnV9PkV4cGVyaW1lbnRzPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gb25Ib3Zlcj17dGhpcy5jaGFuZ2VMb2dvfSBzbHVnPSdjb250YWN0JyBtb2RpZmllcj0nd2l0aC1ob3ZlcicgaHJlZj0nL2Fib3V0JyBtaWRkbGV3YXJlPXtyb3V0ZVRyYW5zaXRpb259IHNhbWVSb3V0ZUZhbGxiYWNrPXtjbG9zZU1lbnV9PkNvbnRhY3Q8L01lbnVJdGVtPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAubWVudS1uYXYgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLCBvcGFjaXR5IC4zcyBlYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LW5hdi52aXNpYmxlIC5tZW51LWl0ZW0ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIDEuMXMgZWFzZSwgb3BhY2l0eSAuM3MgMS4xcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/menu-nav.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/menu-nav.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".menu-nav{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);z-index:2;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-nav.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-nav ul{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.menu-nav .logo.blog{width:700px;height:700px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav .logo.photography{width:450px;height:450px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav .logo.photography .polygon{border-radius:50%;}.menu-nav .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:500px;width:500px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-nav.visible .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}@media (max-width:780px){.menu-nav .logo{width:200px;height:200px;}.menu-nav .logo.blog{width:300px;height:300px;}.menu-nav .logo.photography{width:150px;height:150px;}.menu-nav ul{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdxQixBQVdNLEFBS1osQUFPWSxBQUlaLEFBT0EsQUFPTSxBQUlBLEFBWVIsQUFPSSxBQUtBLEFBS0EsQUFLVSxVQXBCK0MsRUExQzVELEFBV0UsQUFPQSxBQThCRSxBQUtBLEFBS0EsTUExRVIsQUF5Q1QsQUFJVSxLQTVCSyxFQWhCTCxBQTRCb0YsQUFPQSxBQTZCNUYsQUFLQSxBQUtBLENBN0JTLE9BNUNILEVBNkMwQixJQTVDdkIsU0FDbUIsOEJBMkU1QixNQXBFb0QsQUFZdEQsYUFMK0IsMkNBOEJoQixJQTNDSCxTQTRDRSxDQTNDNEMsRUFxRDFELFNBVFksVUFFa0IsOEJBdEI5QixBQU9BLGVBbEJBLG1CQWtDQSxnQkF6Q0Esa0ZBTEEiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4ubWVudS1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyAuOHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdi52aXNpYmxlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgdWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLm92ZXJsYXkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcblxuICB0cmFuc2l0aW9uIHdpZHRoIDFzIC4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgaGVpZ2h0IDFzIC4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28ucGhvdG9ncmFwaHkpIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuXG4gIHRyYW5zaXRpb24gd2lkdGggMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBoZWlnaHQgMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSAucG9seWdvbikge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgb3BhY2l0eTogMDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xufVxuXG4ubWVudS1uYXYudmlzaWJsZSA6Z2xvYmFsKC5sb2dvKSB7XG4gIG9wYWNpdHk6IDE7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyAxLjNzIGVhc2UsIHdpZHRoIDFzIC4zcyBlYXNlLCBoZWlnaHQgMXMgLjNzIGVhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAubWVudS1uYXYgOmdsb2JhbCgubG9nbykge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28uYmxvZykge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28ucGhvdG9ncmFwaHkpIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5tZW51LW5hdiB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufWBcbiJdfQ== */\n/*@ sourceURL=components/menu-nav.styles.js */");

_defaultExport.__hash = "4225576184";
_defaultExport.__scoped = ".menu-nav.jsx-591870265{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);z-index:2;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-nav.visible.jsx-591870265{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 ul.jsx-591870265{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav.jsx-591870265 .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.menu-nav.jsx-591870265 .logo.blog{width:700px;height:700px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 .logo.photography{width:450px;height:450px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 .logo.photography .polygon{border-radius:50%;}.menu-nav.jsx-591870265 .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:500px;width:500px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-nav.visible.jsx-591870265 .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}@media (max-width:780px){.menu-nav.jsx-591870265 .logo{width:200px;height:200px;}.menu-nav.jsx-591870265 .logo.blog{width:300px;height:300px;}.menu-nav.jsx-591870265 .logo.photography{width:150px;height:150px;}.menu-nav.jsx-591870265 ul.jsx-591870265{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdxQixBQVdNLEFBS1osQUFPWSxBQUlaLEFBT0EsQUFPTSxBQUlBLEFBWVIsQUFPSSxBQUtBLEFBS0EsQUFLVSxVQXBCK0MsRUExQzVELEFBV0UsQUFPQSxBQThCRSxBQUtBLEFBS0EsTUExRVIsQUF5Q1QsQUFJVSxLQTVCSyxFQWhCTCxBQTRCb0YsQUFPQSxBQTZCNUYsQUFLQSxBQUtBLENBN0JTLE9BNUNILEVBNkMwQixJQTVDdkIsU0FDbUIsOEJBMkU1QixNQXBFb0QsQUFZdEQsYUFMK0IsMkNBOEJoQixJQTNDSCxTQTRDRSxDQTNDNEMsRUFxRDFELFNBVFksVUFFa0IsOEJBdEI5QixBQU9BLGVBbEJBLG1CQWtDQSxnQkF6Q0Esa0ZBTEEiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4ubWVudS1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyAuOHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdi52aXNpYmxlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgdWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLm92ZXJsYXkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcblxuICB0cmFuc2l0aW9uIHdpZHRoIDFzIC4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgaGVpZ2h0IDFzIC4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28ucGhvdG9ncmFwaHkpIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuXG4gIHRyYW5zaXRpb24gd2lkdGggMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBoZWlnaHQgMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSAucG9seWdvbikge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgb3BhY2l0eTogMDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xufVxuXG4ubWVudS1uYXYudmlzaWJsZSA6Z2xvYmFsKC5sb2dvKSB7XG4gIG9wYWNpdHk6IDE7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyAxLjNzIGVhc2UsIHdpZHRoIDFzIC4zcyBlYXNlLCBoZWlnaHQgMXMgLjNzIGVhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAubWVudS1uYXYgOmdsb2JhbCgubG9nbykge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28uYmxvZykge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28ucGhvdG9ncmFwaHkpIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5tZW51LW5hdiB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufWBcbiJdfQ== */\n/*@ sourceURL=components/menu-nav.styles.js */";
_defaultExport.__scopedHash = "591870265";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./components/overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_styles__ = __webpack_require__("./components/overlay.styles.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/overlay.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var show = _ref.show,
      transitioning = _ref.transitioning;
  return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash) + " " + "overlay ".concat(show ? 'visible' : '', " ").concat(transitioning ? 'transitioning' : '')
  }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash) + " " + 'polygon'
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash) + " " + 'polygon'
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash) + " " + 'polygon'
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash) + " " + 'polygon'
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_2__overlay_styles__["a" /* default */].__scoped
  }));
});

/***/ }),

/***/ "./components/overlay.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".overlay{position:absolute;left:0;right:0;top:0;bottom:0;background:#333;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);-webkit-transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);}.overlay.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);}.polygon{position:absolute;height:100%;width:100%;opacity:1;background:#fff;-webkit-transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon{-webkit-transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 0,50% 0%);clip-path:polygon(0% 0%,50% 0,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 100%,50% 0%);clip-path:polygon(0% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 100%,50% 100%);clip-path:polygon(0% 100%,0% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 0%,50% 100%);clip-path:polygon(0% 100%,0% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 0%,50% 0%);clip-path:polygon(100% 0%,50% 0%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 100%,50% 0%);clip-path:polygon(100% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 100%,50% 100%);clip-path:polygon(100% 100%,100% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 0%,50% 100%);clip-path:polygon(100% 100%,100% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBR3FCLEFBWU0sQUFNTixBQVU0RixBQUl0RSxBQUdHLEFBSUcsQUFHRixBQUlELEFBR0UsQUFJSyxBQUdGLGtCQXZEekMsQUFrQkssT0FqQkosS0FrQkcsR0FqQkwsTUFDRyxFQWlCQyxPQWhCTSxHQWlCQSxhQWhCWSxHQWtCa0YsaUJBVnBELEFBbUJYLE1BR0EsQUFXQSxFQUpBLEVBT0EsRUFWQSxJQWlCQSxJQUhBLHlCQXJCQyxNQUdBLEFBV0EsRUFKQSxFQU9BLEVBVkEsSUFpQkEsSUFIQSxXQTlDb0QsMENBT3RHLFlBY0EsbUVBSkEsc0xBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIC45cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgYmFja2dyb3VuZCAuNXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5vdmVybGF5LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNnMgMS4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLnBvbHlnb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIC42cyAuM3MgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIC13ZWJraXQtY2xpcC1wYXRoIC42cyAuM3MgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb24ge1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjZzIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgLXdlYmtpdC1jbGlwLXBhdGggLjZzIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDEpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1MCUgMCwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDEpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1MCUgMTAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDIpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDAlIDEwMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDIpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDAlIDAlLCA1MCUgMTAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG5cbi5vdmVybGF5IC5wb2x5Z29uOm50aC1jaGlsZCgzKSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCA1MCUgMCUsIDUwJSAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG4ub3ZlcmxheS52aXNpYmxlIC5wb2x5Z29uOm50aC1jaGlsZCgzKSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCA1MCUgMTAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDQpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTAwJSwgMTAwJSAxMDAlLCA1MCUgMTAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG4ub3ZlcmxheS52aXNpYmxlIC5wb2x5Z29uOm50aC1jaGlsZCg0KSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDEwMCUsIDEwMCUgMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1gXG4iXX0= */\n/*@ sourceURL=components/overlay.styles.js */");

_defaultExport.__hash = "4202885491";
_defaultExport.__scoped = ".overlay.jsx-1514855602{position:absolute;left:0;right:0;top:0;bottom:0;background:#333;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);-webkit-transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);}.polygon.jsx-1514855602{position:absolute;height:100%;width:100%;opacity:1;background:#fff;-webkit-transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602{-webkit-transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 0,50% 0%);clip-path:polygon(0% 0%,50% 0,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 100%,50% 0%);clip-path:polygon(0% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 100%,50% 100%);clip-path:polygon(0% 100%,0% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 0%,50% 100%);clip-path:polygon(0% 100%,0% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 0%,50% 0%);clip-path:polygon(100% 0%,50% 0%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 100%,50% 0%);clip-path:polygon(100% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 100%,50% 100%);clip-path:polygon(100% 100%,100% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 0%,50% 100%);clip-path:polygon(100% 100%,100% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBR3FCLEFBWU0sQUFNTixBQVU0RixBQUl0RSxBQUdHLEFBSUcsQUFHRixBQUlELEFBR0UsQUFJSyxBQUdGLGtCQXZEekMsQUFrQkssT0FqQkosS0FrQkcsR0FqQkwsTUFDRyxFQWlCQyxPQWhCTSxHQWlCQSxhQWhCWSxHQWtCa0YsaUJBVnBELEFBbUJYLE1BR0EsQUFXQSxFQUpBLEVBT0EsRUFWQSxJQWlCQSxJQUhBLHlCQXJCQyxNQUdBLEFBV0EsRUFKQSxFQU9BLEVBVkEsSUFpQkEsSUFIQSxXQTlDb0QsMENBT3RHLFlBY0EsbUVBSkEsc0xBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIC45cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgYmFja2dyb3VuZCAuNXMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5vdmVybGF5LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNnMgMS4ycyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLnBvbHlnb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIC42cyAuM3MgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIC13ZWJraXQtY2xpcC1wYXRoIC42cyAuM3MgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb24ge1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjZzIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgLXdlYmtpdC1jbGlwLXBhdGggLjZzIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDEpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1MCUgMCwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDEpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA1MCUgMTAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDIpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDAlIDEwMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDIpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDEwMCUsIDAlIDAlLCA1MCUgMTAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG5cbi5vdmVybGF5IC5wb2x5Z29uOm50aC1jaGlsZCgzKSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCA1MCUgMCUsIDUwJSAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG4ub3ZlcmxheS52aXNpYmxlIC5wb2x5Z29uOm50aC1jaGlsZCgzKSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAlLCA1MCUgMTAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDQpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTAwJSwgMTAwJSAxMDAlLCA1MCUgMTAwJSk7XG4gIC13ZWJraXQtY2xpcC1wYXRoIDRzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpXG59XG4ub3ZlcmxheS52aXNpYmxlIC5wb2x5Z29uOm50aC1jaGlsZCg0KSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDEwMCUsIDEwMCUgMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1gXG4iXX0= */\n/*@ sourceURL=components/overlay.styles.js */";
_defaultExport.__scopedHash = "1514855602";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ })

})
        })
      ;
//# sourceMappingURL=components_menu_nav_d1a5743fbe6854a43a020abac159a404.js.map