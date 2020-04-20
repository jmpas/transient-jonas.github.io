
        __NEXT_REGISTER_CHUNK('components_menu_slider_6ad459d3f62e64cf0f635431d40a9cf7', function() {
      webpackJsonp([4],{

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
      lineNumber: 14
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
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1592231724 " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash) + " " + "title"
  }, children)), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: __WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scopedHash,
    css: __WEBPACK_IMPORTED_MODULE_3__menu_item_styles__["a" /* default */].__scoped
  }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1592231724",
    css: ".menu-item.jsx-1592231724 a{display:block;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHdUIsY0FDRixZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaXBoZXIvY29kZS9uaXBoZXIvc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21lbnUtaXRlbS5zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgb25Ib3ZlciA9ICgpID0+IHt9LFxuICBjaGlsZHJlbixcbiAgc2x1ZyxcbiAgaHJlZixcbiAgbWlkZGxld2FyZSxcbiAgc2FtZVJvdXRlRmFsbGJhY2ssXG4gIG1vZGlmaWVyLFxufSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7bW9kaWZpZXJ9YH0gb25Nb3VzZUVudGVyPXsoKSA9PiBvbkhvdmVyKHNsdWcpfT5cbiAgICA8TGluayB7Li4ueyBocmVmLCBzYW1lUm91dGVGYWxsYmFjayB9fSBtaWRkbGV3YXJlPXttaWRkbGV3YXJlfSBkZWxheT17MTQwMH0+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57Y2hpbGRyZW59PC9oMj5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1lbnUtaXRlbSA6Z2xvYmFsKGEpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuIl19 */\n/*@ sourceURL=components/menu-item.js */"
  }));
});

/***/ }),

/***/ "./components/menu-item.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_variables_font__ = __webpack_require__("./styles/variables/font.js");


var _defaultExport = new String(".menu-item{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;}.menu-item.wip:hover::before{opacity:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);}.menu-item.wip::before{content:\"Coming Soon\";padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);background:#333;}.menu-item .title{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHdUIsQUFVUixBQUtZLEFBbUJKLFVBdkJtQyxRQVYxQyxBQWtDSCxJQW5CVSxJQW9CVCxHQWxDTSxNQW1DaUIsS0FwQnRCLElBZCtCLE1BZTlCLFdBQ00saUJBQ0YsT0FoQkEsUUFpQjBCLHlCQVQzQyxnQkFVWSxNQWdCRCxJQWZTLEtBZ0JPLEVBbENQLFdBbUJWLE9BbEJPLENBbUJOLElBZVgsS0Fka0MsS0FuQmxDLG9HQW9CVyxTQUNDLFVBQzJDLDRHQUNyQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LWl0ZW0uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaXBoZXIvY29kZS9uaXBoZXIvc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uL3N0eWxlcy92YXJpYWJsZXMvZm9udFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIC5tZW51LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udH07XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubWVudS1pdGVtLndpcDpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC43LCAwLjMsIDAsIDEpO1xuICB9XG5cbiAgLm1lbnUtaXRlbS53aXA6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJDb21pbmcgU29vblwiO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LWZhbWlseTogJHtmb250fTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjcsIDAuMywgMCwgMSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgfVxuXG4gIC5tZW51LWl0ZW0gLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5gO1xuIl19 */\n/*@ sourceURL=components/menu-item.styles.js */"));

_defaultExport.__hash = "3590617432";
_defaultExport.__scoped = ".menu-item.jsx-4251878745{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;}.menu-item.wip.jsx-4251878745:hover.jsx-4251878745::before{opacity:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);}.menu-item.wip.jsx-4251878745::before{content:\"Coming Soon\";padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);background:#333;}.menu-item.jsx-4251878745 .title.jsx-4251878745{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHdUIsQUFVUixBQUtZLEFBbUJKLFVBdkJtQyxRQVYxQyxBQWtDSCxJQW5CVSxJQW9CVCxHQWxDTSxNQW1DaUIsS0FwQnRCLElBZCtCLE1BZTlCLFdBQ00saUJBQ0YsT0FoQkEsUUFpQjBCLHlCQVQzQyxnQkFVWSxNQWdCRCxJQWZTLEtBZ0JPLEVBbENQLFdBbUJWLE9BbEJPLENBbUJOLElBZVgsS0Fka0MsS0FuQmxDLG9HQW9CVyxTQUNDLFVBQzJDLDRHQUNyQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LWl0ZW0uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uaXBoZXIvY29kZS9uaXBoZXIvc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uL3N0eWxlcy92YXJpYWJsZXMvZm9udFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIC5tZW51LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udH07XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubWVudS1pdGVtLndpcDpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC43LCAwLjMsIDAsIDEpO1xuICB9XG5cbiAgLm1lbnUtaXRlbS53aXA6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJDb21pbmcgU29vblwiO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LWZhbWlseTogJHtmb250fTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjcsIDAuMywgMCwgMSk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgfVxuXG4gIC5tZW51LWl0ZW0gLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5gO1xuIl19 */\n/*@ sourceURL=components/menu-item.styles.js */");
_defaultExport.__scopedHash = "4251878745";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./components/menu-slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_swipeable__ = __webpack_require__("./node_modules/react-swipeable/lib/Swipeable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_swipeable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_swipeable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_item__ = __webpack_require__("./components/menu-item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logo__ = __webpack_require__("./components/logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay__ = __webpack_require__("./components/overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_slider_styles__ = __webpack_require__("./components/menu-slider.styles.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/menu-slider.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var items = [{
  slug: 'blog',
  href: '/blog',
  modifier: '',
  label: 'Articles'
}, {
  slug: 'photography',
  href: '/photography',
  modifier: '',
  label: 'Photography'
}, {
  slug: 'experiment',
  href: '/experiments',
  modifier: '',
  label: 'Experiments'
}, {
  slug: 'contact',
  href: '/about',
  modifier: '',
  label: 'Contact'
}];

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
        logoShape: 'blog',
        currentItem: items[0]
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSwipedLeft", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentIndex = _this.currentIndex();

        if (currentIndex === items.length - 1) return;

        _this.changeCurrentItem(items[currentIndex + 1]);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSwipedRight", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentIndex = _this.currentIndex();

        if (currentIndex === 0) return;

        _this.changeCurrentItem(items[currentIndex - 1]);
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "currentIndex",
    value: function currentIndex() {
      return items.indexOf(this.state.currentItem);
    }
  }, {
    key: "changeCurrentItem",
    value: function changeCurrentItem(currentItem) {
      this.setState({
        logoShape: currentItem.slug,
        currentItem: currentItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          show = _props.show,
          routeTransition = _props.routeTransition,
          closeMenu = _props.closeMenu;
      return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_6__menu_slider_styles__["a" /* default */].__scopedHash) + " " + "menu-slider ".concat(show ? 'visible' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2_react_swipeable___default.a, {
        preventDefaultTouchmoveEvent: true,
        onSwipedLeft: this.onSwipedLeft,
        onSwipedRight: this.onSwipedRight,
        className: "swipeable-container",
        delta: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__overlay__["a" /* default */], {
        show: show,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__logo__["a" /* default */], {
        shape: this.state.logoShape,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_6__menu_slider_styles__["a" /* default */].__scopedHash)
      }, items.map(function (_ref2, idx) {
        var slug = _ref2.slug,
            href = _ref2.href,
            modifier = _ref2.modifier,
            label = _ref2.label;
        var modifiers = modifier;

        if (idx > _this2.currentIndex()) {
          modifiers = "".concat(modifier, " next");
        } else if (idx < _this2.currentIndex()) {
          modifiers = "".concat(modifier, " prev");
        }

        var routeProps = {};

        if (href) {
          routeProps = {
            middleware: routeTransition,
            sameRouteFallback: closeMenu
          };
        }

        return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__menu_item__["a" /* default */], _extends({
          key: idx
        }, {
          slug: slug,
          href: href,
          modifier: modifiers
        }, routeProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), label);
      }))), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_6__menu_slider_styles__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_6__menu_slider_styles__["a" /* default */].__scoped
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/menu-slider.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".menu-slider{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transform:translateY(-100%);z-index:2;overflow:hidden;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-slider.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-slider ul{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav.visible .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}.menu-slider .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transform:translateY(0);}.menu-slider .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:200px;height:200px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-slider.visible .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}.menu-slider .swipeable-container{height:100%;}.menu-slider .logo.blog{width:300px;height:300px;-webkit-transition:opacity 2s 1.3s ease,width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:opacity 2s 1.3s ease,width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-slider .logo.photography .polygon{border-radius:50%;}.menu-slider .menu-item{position:absolute;height:100%;width:100%;min-height:100vh;-webkit-flex-basis:none;-ms-flex-preferred-size:none;flex-basis:none;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transform:translateX(0);opacity:0;display:block;-webkit-transition:opacity .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}.menu-slider.visible .menu-item{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transform:translateX(0);-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}.menu-slider.visible .menu-item.prev{-webkit-transform:translateX(-100vh);-ms-transform:translateX(-100vh);transform:translateX(-100vh);-webkit-transform:translateX(-100vh);opacity:0;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;-webkit-transition:opacity 1s ease-in-out,transform 2s ease;transition:opacity 1s ease-in-out,transform 2s ease;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;}.menu-slider.visible .menu-item.next,.menu-slider.visible .menu-item.next:last-child{-webkit-transform:translateX(100vh);-ms-transform:translateX(100vh);transform:translateX(100vh);-webkit-transform:translateX(100vh);opacity:0;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;-webkit-transition:opacity 1s ease-in-out,transform 2s ease;transition:opacity 1s ease-in-out,transform 2s ease;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;}.menu-slider.visible .menu-item .title{width:100%;}.menu-slider.visible .menu-item .wip-block{background:#333;position:absolute;color:#fff;opacity:0.7;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transform:translateY(-100%);width:100%;}.menu-slider .menu-item .title .line{display:none;}@-webkit-keyframes bounceDownEffect{0%{-webkit-transform:translateY(-130px) rotate(180deg);-ms-transform:translateY(-130px) rotate(180deg);transform:translateY(-130px) rotate(180deg);}100%{-webkit-transform:translateY(-120px) rotate(180deg);-ms-transform:translateY(-120px) rotate(180deg);transform:translateY(-120px) rotate(180deg);}}@keyframes bounceDownEffect{0%{-webkit-transform:translateY(-130px) rotate(180deg);-ms-transform:translateY(-130px) rotate(180deg);transform:translateY(-130px) rotate(180deg);}100%{-webkit-transform:translateY(-120px) rotate(180deg);-ms-transform:translateY(-120px) rotate(180deg);transform:translateY(-120px) rotate(180deg);}}@-webkit-keyframes bounceUpEffect{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}@keyframes bounceUpEffect{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}.menu-slider .menu-item:hover{color:#aaa;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1zbGlkZXIuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUd1QixBQWFNLEFBTVosQUFPRixBQU1jLEFBS04sQUFhUixBQU1FLEFBSUEsQUFPTSxBQUlBLEFBZVIsQUFTbUIsQUFVRCxBQVNqQixBQUlLLEFBVUgsQUFJbUMsQUFDRSxBQUluQixBQUNFLEFBSXRCLFVBbEg0RCxBQXdCQSxBQW1DL0MsQ0E0QjFCLEFBNEJvRSxDQTNIdkQsQUFxQ2IsQUFJZSxDQW9FZixHQVZvQixFQXRIWCxBQXFDQyxBQThCVixBQUljLEtBbkRDLEVBbkJMLEFBNkQwRyxDQXhCekcsSUFrQ0UsR0F0RUwsQ0FxSEssQ0FoRnFCLElBcEN2QixFQXNFUSxJQStDTCxHQXBIZ0IsU0FxSEEsQ0EvQ1osMEJBN0RnQixBQW1CQSxTQXdHQSxBQUNFLENBbERGLEVBa0JJLENBcEZQLEVBMEVRLGlCQWpGZSxBQW1CdEQsVUF3RG9FLENBZDFDLEtBK0JkLElBVkEsSUF4RDhCLEVBb0VhLEVBdkdqQixBQThIYSxBQUNFLEVBbENFLE9Bd0JqQixHQTlGdEMsQUF3QkEsdUJBWGMsQ0FuQ0YsU0FxSEMsQ0FwSEssQ0FtQ0gsU0FrRmYsSUFqRlksRUFuQzhDLEtBb0V4QixHQS9CSixNQXZCOUIsVUF5SG9GLGFBbEV4RSxJQWRaLE1BZWdCLGNBRWlELFdBbENqRSxTQS9CQSx3QkFpSUEsV0FuQ3VFLElBVkEsbUJBVGEsNENBakZwRixDQXFHQSxJQVZBLGdDQVRBLG1EQVZpRiw4RUFDakYiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LXNsaWRlci5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIC5tZW51LXNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyAuOHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCh1bCkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG5cbiAgLm1lbnUtbmF2LnZpc2libGUgOmdsb2JhbCgubG9nbykge1xuICAgIG9wYWNpdHk6IDE7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDEuM3MgZWFzZSwgd2lkdGggMXMgLjNzIGVhc2UsIGhlaWdodCAxcyAuM3MgZWFzZTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5vdmVybGF5KSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLm1lbnUtc2xpZGVyIDpnbG9iYWwoLmxvZ28pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5sb2dvKSB7XG4gICAgb3BhY2l0eTogMTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgMS4zcyBlYXNlLCB3aWR0aCAxcyAuM3MgZWFzZSwgaGVpZ2h0IDFzIC4zcyBlYXNlO1xuICB9XG5cbiAgLm1lbnUtc2xpZGVyIDpnbG9iYWwoLnN3aXBlYWJsZS1jb250YWluZXIpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICB0cmFuc2l0aW9uIG9wYWNpdHkgMnMgMS4zcyBlYXNlLCB3aWR0aCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIGhlaWdodCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSAucG9seWdvbikge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5tZW51LWl0ZW0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtYmFzaXM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5tZW51LXNsaWRlci52aXNpYmxlIDpnbG9iYWwoLm1lbnUtaXRlbSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0ucHJldikge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdmgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2aCk7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAycyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMnMgZWFzZTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlci52aXNpYmxlIDpnbG9iYWwoLm1lbnUtaXRlbS5uZXh0KSxcbiAgLm1lbnUtc2xpZGVyLnZpc2libGUgOmdsb2JhbCgubWVudS1pdGVtLm5leHQ6bGFzdC1jaGlsZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2aCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdmgpO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMnMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDJzIGVhc2U7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0gLnRpdGxlKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0gLndpcC1ibG9jaykge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5tZW51LWl0ZW0gLnRpdGxlIC5saW5lKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYm91bmNlRG93bkVmZmVjdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2VVcEVmZmVjdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubWVudS1pdGVtOmhvdmVyKSB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gIH1gXG5cbiJdfQ== */\n/*@ sourceURL=components/menu-slider.styles.js */");

_defaultExport.__hash = "2110064018";
_defaultExport.__scoped = ".menu-slider.jsx-510070163{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transform:translateY(-100%);z-index:2;overflow:hidden;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-slider.visible.jsx-510070163{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-slider.jsx-510070163 ul{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav.visible.jsx-510070163 .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}.menu-slider.jsx-510070163 .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transform:translateY(0);}.menu-slider.jsx-510070163 .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:200px;height:200px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-slider.visible.jsx-510070163 .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}.menu-slider.jsx-510070163 .swipeable-container{height:100%;}.menu-slider.jsx-510070163 .logo.blog{width:300px;height:300px;-webkit-transition:opacity 2s 1.3s ease,width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:opacity 2s 1.3s ease,width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-slider.jsx-510070163 .logo.photography .polygon{border-radius:50%;}.menu-slider.jsx-510070163 .menu-item{position:absolute;height:100%;width:100%;min-height:100vh;-webkit-flex-basis:none;-ms-flex-preferred-size:none;flex-basis:none;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transform:translateX(0);opacity:0;display:block;-webkit-transition:opacity .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}.menu-slider.visible.jsx-510070163 .menu-item{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transform:translateX(0);-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}.menu-slider.visible.jsx-510070163 .menu-item.prev{-webkit-transform:translateX(-100vh);-ms-transform:translateX(-100vh);transform:translateX(-100vh);-webkit-transform:translateX(-100vh);opacity:0;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;-webkit-transition:opacity 1s ease-in-out,transform 2s ease;transition:opacity 1s ease-in-out,transform 2s ease;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;}.menu-slider.visible.jsx-510070163 .menu-item.next,.menu-slider.visible.jsx-510070163 .menu-item.next:last-child{-webkit-transform:translateX(100vh);-ms-transform:translateX(100vh);transform:translateX(100vh);-webkit-transform:translateX(100vh);opacity:0;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;-webkit-transition:opacity 1s ease-in-out,transform 2s ease;transition:opacity 1s ease-in-out,transform 2s ease;-webkit-transition:opacity 1s ease-in-out,-webkit-transform 2s ease;}.menu-slider.visible.jsx-510070163 .menu-item .title{width:100%;}.menu-slider.visible.jsx-510070163 .menu-item .wip-block{background:#333;position:absolute;color:#fff;opacity:0.7;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transform:translateY(-100%);width:100%;}.menu-slider.jsx-510070163 .menu-item .title .line{display:none;}@-webkit-keyframes bounceDownEffect-jsx-510070163{0%{-webkit-transform:translateY(-130px) rotate(180deg);-ms-transform:translateY(-130px) rotate(180deg);transform:translateY(-130px) rotate(180deg);}100%{-webkit-transform:translateY(-120px) rotate(180deg);-ms-transform:translateY(-120px) rotate(180deg);transform:translateY(-120px) rotate(180deg);}}@keyframes bounceDownEffect-jsx-510070163{0%{-webkit-transform:translateY(-130px) rotate(180deg);-ms-transform:translateY(-130px) rotate(180deg);transform:translateY(-130px) rotate(180deg);}100%{-webkit-transform:translateY(-120px) rotate(180deg);-ms-transform:translateY(-120px) rotate(180deg);transform:translateY(-120px) rotate(180deg);}}@-webkit-keyframes bounceUpEffect-jsx-510070163{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}@keyframes bounceUpEffect-jsx-510070163{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}}.menu-slider.jsx-510070163 .menu-item:hover{color:#aaa;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;transition:opacity 1s .4s ease-in-out,transform 1.2s ease-in-out;-webkit-transition:opacity 1s .4s ease-in-out,-webkit-transform 1.2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1zbGlkZXIuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUd1QixBQWFNLEFBTVosQUFPRixBQU1jLEFBS04sQUFhUixBQU1FLEFBSUEsQUFPTSxBQUlBLEFBZVIsQUFTbUIsQUFVRCxBQVNqQixBQUlLLEFBVUgsQUFJbUMsQUFDRSxBQUluQixBQUNFLEFBSXRCLFVBbEg0RCxBQXdCQSxBQW1DL0MsQ0E0QjFCLEFBNEJvRSxDQTNIdkQsQUFxQ2IsQUFJZSxDQW9FZixHQVZvQixFQXRIWCxBQXFDQyxBQThCVixBQUljLEtBbkRDLEVBbkJMLEFBNkQwRyxDQXhCekcsSUFrQ0UsR0F0RUwsQ0FxSEssQ0FoRnFCLElBcEN2QixFQXNFUSxJQStDTCxHQXBIZ0IsU0FxSEEsQ0EvQ1osMEJBN0RnQixBQW1CQSxTQXdHQSxBQUNFLENBbERGLEVBa0JJLENBcEZQLEVBMEVRLGlCQWpGZSxBQW1CdEQsVUF3RG9FLENBZDFDLEtBK0JkLElBVkEsSUF4RDhCLEVBb0VhLEVBdkdqQixBQThIYSxBQUNFLEVBbENFLE9Bd0JqQixHQTlGdEMsQUF3QkEsdUJBWGMsQ0FuQ0YsU0FxSEMsQ0FwSEssQ0FtQ0gsU0FrRmYsSUFqRlksRUFuQzhDLEtBb0V4QixHQS9CSixNQXZCOUIsVUF5SG9GLGFBbEV4RSxJQWRaLE1BZWdCLGNBRWlELFdBbENqRSxTQS9CQSx3QkFpSUEsV0FuQ3VFLElBVkEsbUJBVGEsNENBakZwRixDQXFHQSxJQVZBLGdDQVRBLG1EQVZpRiw4RUFDakYiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LXNsaWRlci5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pcGhlci9jb2RlL25pcGhlci9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG4gIC5tZW51LXNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyAuOHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCh1bCkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB9XG5cbiAgLm1lbnUtbmF2LnZpc2libGUgOmdsb2JhbCgubG9nbykge1xuICAgIG9wYWNpdHk6IDE7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDEuM3MgZWFzZSwgd2lkdGggMXMgLjNzIGVhc2UsIGhlaWdodCAxcyAuM3MgZWFzZTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5vdmVybGF5KSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLm1lbnUtc2xpZGVyIDpnbG9iYWwoLmxvZ28pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5sb2dvKSB7XG4gICAgb3BhY2l0eTogMTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgMS4zcyBlYXNlLCB3aWR0aCAxcyAuM3MgZWFzZSwgaGVpZ2h0IDFzIC4zcyBlYXNlO1xuICB9XG5cbiAgLm1lbnUtc2xpZGVyIDpnbG9iYWwoLnN3aXBlYWJsZS1jb250YWluZXIpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICB0cmFuc2l0aW9uIG9wYWNpdHkgMnMgMS4zcyBlYXNlLCB3aWR0aCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIGhlaWdodCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSAucG9seWdvbikge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5tZW51LWl0ZW0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGZsZXgtYmFzaXM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5tZW51LXNsaWRlci52aXNpYmxlIDpnbG9iYWwoLm1lbnUtaXRlbSkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0ucHJldikge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdmgpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2aCk7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAycyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMnMgZWFzZTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlci52aXNpYmxlIDpnbG9iYWwoLm1lbnUtaXRlbS5uZXh0KSxcbiAgLm1lbnUtc2xpZGVyLnZpc2libGUgOmdsb2JhbCgubWVudS1pdGVtLm5leHQ6bGFzdC1jaGlsZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2aCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdmgpO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMnMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDJzIGVhc2U7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0gLnRpdGxlKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWVudS1zbGlkZXIudmlzaWJsZSA6Z2xvYmFsKC5tZW51LWl0ZW0gLndpcC1ibG9jaykge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tZW51LXNsaWRlciA6Z2xvYmFsKC5tZW51LWl0ZW0gLnRpdGxlIC5saW5lKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYm91bmNlRG93bkVmZmVjdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2VVcEVmZmVjdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB9XG4gIH1cblxuICAubWVudS1zbGlkZXIgOmdsb2JhbCgubWVudS1pdGVtOmhvdmVyKSB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAuNHMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDEuMnMgZWFzZS1pbi1vdXQ7XG4gIH1gXG5cbiJdfQ== */\n/*@ sourceURL=components/menu-slider.styles.js */";
_defaultExport.__scopedHash = "510070163";
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

/***/ "./node_modules/detect-passive-events/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/react-swipeable/lib/Swipeable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
var PropTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
var DetectPassiveEvents = __webpack_require__("./node_modules/detect-passive-events/lib/index.js").default;

function getInitialState() {
  return {
    x: null,
    y: null,
    swiping: false,
    start: 0
  };
}

function getMovingPosition(e) {
  return 'changedTouches' in e ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY } : { x: e.clientX, y: e.clientY };
}
function getPosition(e) {
  return 'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
}

function rotateByAngle(pos, angle) {
  if (angle === 0) {
    return pos;
  }

  var x = pos.x,
      y = pos.y;


  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return { x: rotatedX, y: rotatedY };
}

function calculatePos(e, state) {
  var _rotateByAngle = rotateByAngle(getMovingPosition(e), state.rotationAngle),
      x = _rotateByAngle.x,
      y = _rotateByAngle.y;

  var deltaX = state.x - x;
  var deltaY = state.y - y;

  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);

  var time = Date.now() - state.start;
  var velocity = Math.sqrt(absX * absX + absY * absY) / time;

  return { deltaX: deltaX, deltaY: deltaY, absX: absX, absY: absY, velocity: velocity };
}

var Swipeable = function (_React$Component) {
  _inherits(Swipeable, _React$Component);

  function Swipeable(props, context) {
    _classCallCheck(this, Swipeable);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.swipeable = getInitialState();

    _this.eventStart = _this.eventStart.bind(_this);
    _this.eventMove = _this.eventMove.bind(_this);
    _this.eventEnd = _this.eventEnd.bind(_this);
    _this.mouseDown = _this.mouseDown.bind(_this);
    _this.mouseMove = _this.mouseMove.bind(_this);
    _this.mouseUp = _this.mouseUp.bind(_this);
    _this.cleanupMouseListeners = _this.cleanupMouseListeners.bind(_this);
    _this.setupMouseListeners = _this.setupMouseListeners.bind(_this);
    _this.elementRef = _this.elementRef.bind(_this);
    _this.setupTouchmoveEvent = _this.setupTouchmoveEvent.bind(_this);
    _this.cleanupTouchmoveEvent = _this.cleanupTouchmoveEvent.bind(_this);

    _this.hasPassiveSupport = DetectPassiveEvents.hasSupport;
    return _this;
  }

  Swipeable.prototype.componentDidMount = function componentDidMount() {
    if (this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.cleanupMouseListeners();

      this.swipeable = getInitialState();
    }

    if (prevProps.preventDefaultTouchmoveEvent && !this.props.preventDefaultTouchmoveEvent) {
      this.cleanupTouchmoveEvent();
    } else if (!prevProps.preventDefaultTouchmoveEvent && this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cleanupMouseListeners();
  };

  Swipeable.prototype.setupTouchmoveEvent = function setupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.addEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.setupMouseListeners = function setupMouseListeners() {
    document.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.cleanupTouchmoveEvent = function cleanupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.removeEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.cleanupMouseListeners = function cleanupMouseListeners() {
    document.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.mouseDown = function mouseDown(e) {
    if (!this.props.trackMouse || e.type !== 'mousedown') {
      return;
    }

    if (typeof this.props.onMouseDown === 'function') this.props.onMouseDown(e);

    this.setupMouseListeners();

    this.eventStart(e);
  };

  Swipeable.prototype.mouseMove = function mouseMove(e) {
    this.eventMove(e);
  };

  Swipeable.prototype.mouseUp = function mouseUp(e) {
    this.cleanupMouseListeners();
    this.eventEnd(e);
  };

  Swipeable.prototype.eventStart = function eventStart(e) {
    if (e.touches && e.touches.length > 1) return;

    var rotationAngle = this.props.rotationAngle;

    var _rotateByAngle2 = rotateByAngle(getPosition(e), rotationAngle),
        x = _rotateByAngle2.x,
        y = _rotateByAngle2.y;

    if (this.props.stopPropagation) e.stopPropagation();

    this.swipeable = { start: Date.now(), x: x, y: y, swiping: false, rotationAngle: rotationAngle };
  };

  Swipeable.prototype.eventMove = function eventMove(e) {
    var _props = this.props,
        stopPropagation = _props.stopPropagation,
        delta = _props.delta,
        onSwiping = _props.onSwiping,
        onSwiped = _props.onSwiped,
        onSwipingLeft = _props.onSwipingLeft,
        onSwipedLeft = _props.onSwipedLeft,
        onSwipingRight = _props.onSwipingRight,
        onSwipedRight = _props.onSwipedRight,
        onSwipingUp = _props.onSwipingUp,
        onSwipedUp = _props.onSwipedUp,
        onSwipingDown = _props.onSwipingDown,
        onSwipedDown = _props.onSwipedDown,
        preventDefaultTouchmoveEvent = _props.preventDefaultTouchmoveEvent;


    if (!this.swipeable.x || !this.swipeable.y || e.touches && e.touches.length > 1) {
      return;
    }

    var pos = calculatePos(e, this.swipeable);

    if (pos.absX < delta && pos.absY < delta && !this.swipeable.swiping) return;

    if (stopPropagation) e.stopPropagation();

    if (onSwiping) {
      onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
    }

    var cancelablePageSwipe = false;
    if (onSwiping || onSwiped) {
      cancelablePageSwipe = true;
    }

    if (pos.absX > pos.absY) {
      if (pos.deltaX > 0) {
        if (onSwipingLeft || onSwipedLeft) {
          onSwipingLeft && onSwipingLeft(e, pos.absX);
          cancelablePageSwipe = true;
        }
      } else if (onSwipingRight || onSwipedRight) {
        onSwipingRight && onSwipingRight(e, pos.absX);
        cancelablePageSwipe = true;
      }
    } else if (pos.deltaY > 0) {
      if (onSwipingUp || onSwipedUp) {
        onSwipingUp && onSwipingUp(e, pos.absY);
        cancelablePageSwipe = true;
      }
    } else if (onSwipingDown || onSwipedDown) {
      onSwipingDown && onSwipingDown(e, pos.absY);
      cancelablePageSwipe = true;
    }

    this.swipeable.swiping = true;

    if (cancelablePageSwipe && preventDefaultTouchmoveEvent) e.preventDefault();
  };

  Swipeable.prototype.eventEnd = function eventEnd(e) {
    var _props2 = this.props,
        stopPropagation = _props2.stopPropagation,
        flickThreshold = _props2.flickThreshold,
        onSwiped = _props2.onSwiped,
        onSwipedLeft = _props2.onSwipedLeft,
        onSwipedRight = _props2.onSwipedRight,
        onSwipedUp = _props2.onSwipedUp,
        onSwipedDown = _props2.onSwipedDown,
        onTap = _props2.onTap;


    if (this.swipeable.swiping) {
      var pos = calculatePos(e, this.swipeable);

      if (stopPropagation) e.stopPropagation();

      var isFlick = pos.velocity > flickThreshold;

      onSwiped && onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

      if (pos.absX > pos.absY) {
        if (pos.deltaX > 0) {
          onSwipedLeft && onSwipedLeft(e, pos.deltaX, isFlick);
        } else {
          onSwipedRight && onSwipedRight(e, pos.deltaX, isFlick);
        }
      } else if (pos.deltaY > 0) {
        onSwipedUp && onSwipedUp(e, pos.deltaY, isFlick);
      } else {
        onSwipedDown && onSwipedDown(e, pos.deltaY, isFlick);
      }
    } else {
      onTap && onTap(e);
    }

    this.swipeable = getInitialState();
  };

  Swipeable.prototype.elementRef = function elementRef(element) {
    this.element = element;
    this.props.innerRef && this.props.innerRef(element);
  };

  Swipeable.prototype.render = function render() {
    var newProps = _extends({}, this.props);
    if (!this.props.disabled) {
      newProps.onTouchStart = this.eventStart;

      if (!this.props.preventDefaultTouchmoveEvent || !this.hasPassiveSupport) {
        newProps.onTouchMove = this.eventMove;
      }

      newProps.onTouchEnd = this.eventEnd;
      newProps.onMouseDown = this.mouseDown;
    }

    newProps.ref = this.elementRef;

    delete newProps.onSwiped;
    delete newProps.onSwiping;
    delete newProps.onSwipingUp;
    delete newProps.onSwipingRight;
    delete newProps.onSwipingDown;
    delete newProps.onSwipingLeft;
    delete newProps.onSwipedUp;
    delete newProps.onSwipedRight;
    delete newProps.onSwipedDown;
    delete newProps.onSwipedLeft;
    delete newProps.onTap;
    delete newProps.flickThreshold;
    delete newProps.delta;
    delete newProps.preventDefaultTouchmoveEvent;
    delete newProps.stopPropagation;
    delete newProps.nodeName;
    delete newProps.children;
    delete newProps.trackMouse;
    delete newProps.disabled;
    delete newProps.innerRef;
    delete newProps.rotationAngle;

    return React.createElement(this.props.nodeName, newProps, this.props.children);
  };

  return Swipeable;
}(React.Component);

Swipeable.propTypes = {
  onSwiped: PropTypes.func,
  onSwiping: PropTypes.func,
  onSwipingUp: PropTypes.func,
  onSwipingRight: PropTypes.func,
  onSwipingDown: PropTypes.func,
  onSwipingLeft: PropTypes.func,
  onSwipedUp: PropTypes.func,
  onSwipedRight: PropTypes.func,
  onSwipedDown: PropTypes.func,
  onSwipedLeft: PropTypes.func,
  onTap: PropTypes.func,
  flickThreshold: PropTypes.number,
  delta: PropTypes.number,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  nodeName: PropTypes.string,
  trackMouse: PropTypes.bool,
  disabled: PropTypes.bool,
  innerRef: PropTypes.func,
  children: PropTypes.node,
  rotationAngle: PropTypes.number
};

Swipeable.defaultProps = {
  flickThreshold: 0.6,
  delta: 10,
  preventDefaultTouchmoveEvent: false,
  stopPropagation: false,
  nodeName: 'div',
  disabled: false,
  rotationAngle: 0
};

module.exports = Swipeable;

/***/ })

})
        })
      ;
//# sourceMappingURL=components_menu_slider_6ad459d3f62e64cf0f635431d40a9cf7.js.map