
        __NEXT_REGISTER_CHUNK('components_menu_nav_942732780fc87d3afe529866aed128da', function() {
      webpackJsonp([5],{

/***/ "./components/link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
var _jsxFileName = "/home/jonas/code/nipher.github.io/src/components/link.js";



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
var _jsxFileName = "/home/jonas/code/nipher.github.io/src/components/menu-item.js";



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
    css: ".menu-item.jsx-1592231724 a{display:block;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZ0IsQUFHdUIsY0FDRixZQUNkIiwiZmlsZSI6ImNvbXBvbmVudHMvbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pvbmFzL2NvZGUvbmlwaGVyLmdpdGh1Yi5pby9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWVudS1pdGVtLnN0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBvbkhvdmVyID0gKCkgPT4ge30sXG4gIGNoaWxkcmVuLFxuICBzbHVnLFxuICBocmVmLFxuICBtaWRkbGV3YXJlLFxuICBzYW1lUm91dGVGYWxsYmFjayxcbiAgbW9kaWZpZXIsXG59KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHttb2RpZmllcn1gfSBvbk1vdXNlRW50ZXI9eygpID0+IG9uSG92ZXIoc2x1Zyl9PlxuICAgIDxMaW5rIHsuLi57IGhyZWYsIHNhbWVSb3V0ZUZhbGxiYWNrIH19IG1pZGRsZXdhcmU9e21pZGRsZXdhcmV9IGRlbGF5PXsxNDAwfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntjaGlsZHJlbn08L2gyPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubWVudS1pdGVtIDpnbG9iYWwoYSkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG4iXX0= */\n/*@ sourceURL=components/menu-item.js */"
  }));
});

/***/ }),

/***/ "./components/menu-item.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_variables_font__ = __webpack_require__("./styles/variables/font.js");


var _defaultExport = new String(".menu-item{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;}.menu-item.wip:hover::before{opacity:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);}.menu-item.wip::before{content:\"Coming Soon\";padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);background:#333;}.menu-item .title{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHdUIsQUFVUixBQUtZLEFBbUJKLFVBdkJtQyxRQVYxQyxBQWtDSCxJQW5CVSxJQW9CVCxHQWxDTSxNQW1DaUIsS0FwQnRCLElBZCtCLE1BZTlCLFdBQ00saUJBQ0YsT0FoQkEsUUFpQjBCLHlCQVQzQyxnQkFVWSxNQWdCRCxJQWZTLEtBZ0JPLEVBbENQLFdBbUJWLE9BbEJPLENBbUJOLElBZVgsS0Fka0MsS0FuQmxDLG9HQW9CVyxTQUNDLFVBQzJDLDRHQUNyQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LWl0ZW0uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pvbmFzL2NvZGUvbmlwaGVyLmdpdGh1Yi5pby9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuXG5pbXBvcnQgZm9udCBmcm9tIFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy9mb250XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcbiAgLm1lbnUtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LWZhbWlseTogJHtmb250fTtcbiAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5tZW51LWl0ZW0ud2lwOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjcsIDAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1pdGVtLndpcDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNvbWluZyBTb29uXCI7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNywgMC4zLCAwLCAxKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICB9XG5cbiAgLm1lbnUtaXRlbSAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=components/menu-item.styles.js */"));

_defaultExport.__hash = "3590617432";
_defaultExport.__scoped = ".menu-item.jsx-4251878745{position:relative;color:#aaa;font-size:21px;font-family:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;text-align:center;cursor:pointer;}.menu-item.wip.jsx-4251878745:hover.jsx-4251878745::before{opacity:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);}.menu-item.wip.jsx-4251878745::before{content:\"Coming Soon\";padding:10px 10px;width:60%;color:#fff;font-weight:bold;font-size:21px;font-family:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_variables_font__["a" /* default */], ";opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;z-index:1;-webkit-transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);transition:opacity 0.5s cubic-bezier(0.7,0.3,0,1);background:#333;}.menu-item.jsx-4251878745 .title.jsx-4251878745{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1pdGVtLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHdUIsQUFVUixBQUtZLEFBbUJKLFVBdkJtQyxRQVYxQyxBQWtDSCxJQW5CVSxJQW9CVCxHQWxDTSxNQW1DaUIsS0FwQnRCLElBZCtCLE1BZTlCLFdBQ00saUJBQ0YsT0FoQkEsUUFpQjBCLHlCQVQzQyxnQkFVWSxNQWdCRCxJQWZTLEtBZ0JPLEVBbENQLFdBbUJWLE9BbEJPLENBbUJOLElBZVgsS0Fka0MsS0FuQmxDLG9HQW9CVyxTQUNDLFVBQzJDLDRHQUNyQyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LWl0ZW0uc3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pvbmFzL2NvZGUvbmlwaGVyLmdpdGh1Yi5pby9zcmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xuXG5pbXBvcnQgZm9udCBmcm9tIFwiLi4vc3R5bGVzL3ZhcmlhYmxlcy9mb250XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BcbiAgLm1lbnUtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LWZhbWlseTogJHtmb250fTtcbiAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5tZW51LWl0ZW0ud2lwOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjcsIDAuMywgMCwgMSk7XG4gIH1cblxuICAubWVudS1pdGVtLndpcDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNvbWluZyBTb29uXCI7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnR9O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgY3ViaWMtYmV6aWVyKDAuNywgMC4zLCAwLCAxKTtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICB9XG5cbiAgLm1lbnUtaXRlbSAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbmA7XG4iXX0= */\n/*@ sourceURL=components/menu-item.styles.js */");
_defaultExport.__scopedHash = "4251878745";
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
var _jsxFileName = "/home/jonas/code/nipher.github.io/src/components/menu-nav.js";



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
        css: ".menu-nav .menu-item{-webkit-transform:translateX(-5%);-ms-transform:translateX(-5%);transform:translateX(-5%);opacity:0;-webkit-transition:-webkit-transform 1s ease,opacity .3s ease;-webkit-transition:transform 1s ease,opacity .3s ease;transition:transform 1s ease,opacity .3s ease;}.menu-nav.visible .menu-item{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;-webkit-transition:-webkit-transform 1s 1.1s ease,opacity .3s 1.1s ease;-webkit-transition:transform 1s 1.1s ease,opacity .3s 1.1s ease;transition:transform 1s 1.1s ease,opacity .3s 1.1s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkIyQixBQUd1QyxBQU9GLG9GQUNkLE1BUEEsSUFTK0MsTUFQVixrS0FDakQsd0JBT0EiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qb25hcy9jb2RlL25pcGhlci5naXRodWIuaW8vc3JjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL21lbnUtaXRlbSdcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vb3ZlcmxheSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lbnUtbmF2LnN0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgbG9nb1NoYXBlOiAnbG9nbycgfVxuXG4gIGNoYW5nZUxvZ28gPSBzbHVnID0+IHRoaXMuc2V0U3RhdGUoeyBsb2dvU2hhcGU6IHNsdWcgfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93LCByb3V0ZVRyYW5zaXRpb24sIGNsb3NlTWVudSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbWVudS1uYXYgJHtzaG93ID8gJ3Zpc2libGUnIDogJyd9YH0+XG4gICAgICAgIDxPdmVybGF5IHNob3c9e3Nob3d9IC8+XG4gICAgICAgIDxMb2dvIHNoYXBlPXt0aGlzLnN0YXRlLmxvZ29TaGFwZX0gLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkhvdmVyPXt0aGlzLmNoYW5nZUxvZ299IHNsdWc9J2Jsb2cnIG1vZGlmaWVyPSd3aXRoLWhvdmVyJyBocmVmPScvYmxvZycgbWlkZGxld2FyZT17cm91dGVUcmFuc2l0aW9ufSBzYW1lUm91dGVGYWxsYmFjaz17Y2xvc2VNZW51fT5BcnRpY2xlczwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIG9uSG92ZXI9e3RoaXMuY2hhbmdlTG9nb30gc2x1Zz0ncGhvdG9ncmFwaHknIG1vZGlmaWVyPSd3aXRoLWhvdmVyJyBocmVmPScvcGhvdG9ncmFwaHknIG1pZGRsZXdhcmU9e3JvdXRlVHJhbnNpdGlvbn0gc2FtZVJvdXRlRmFsbGJhY2s9e2Nsb3NlTWVudX0+UGhvdG9ncmFwaHk8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkhvdmVyPXt0aGlzLmNoYW5nZUxvZ299IHNsdWc9J2V4cGVyaW1lbnQnIG1vZGlmaWVyPSd3aXRoLWhvdmVyJyBocmVmPScvZXhwZXJpbWVudHMnIG1pZGRsZXdhcmU9e3JvdXRlVHJhbnNpdGlvbn0gc2FtZVJvdXRlRmFsbGJhY2s9e2Nsb3NlTWVudX0+RXhwZXJpbWVudHM8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkhvdmVyPXt0aGlzLmNoYW5nZUxvZ299IHNsdWc9J2NvbnRhY3QnIG1vZGlmaWVyPSd3aXRoLWhvdmVyJyBocmVmPScvYWJvdXQnIG1pZGRsZXdhcmU9e3JvdXRlVHJhbnNpdGlvbn0gc2FtZVJvdXRlRmFsbGJhY2s9e2Nsb3NlTWVudX0+Q29udGFjdDwvTWVudUl0ZW0+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIC5tZW51LW5hdiAubWVudS1pdGVtIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UsIG9wYWNpdHkgLjNzIGVhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtbmF2LnZpc2libGUgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgMS4xcyBlYXNlLCBvcGFjaXR5IC4zcyAxLjFzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/menu-nav.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/menu-nav.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".menu-nav{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);z-index:2;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-nav.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-nav ul{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.menu-nav .logo.blog{width:700px;height:700px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav .logo.photography{width:450px;height:450px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav .logo.photography .polygon{border-radius:50%;}.menu-nav .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:500px;width:500px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-nav.visible .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}@media (max-width:780px){.menu-nav .logo{width:200px;height:200px;}.menu-nav .logo.blog{width:300px;height:300px;}.menu-nav .logo.photography{width:150px;height:150px;}.menu-nav ul{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdxQixBQVdNLEFBS1osQUFPWSxBQUlaLEFBT0EsQUFPTSxBQUlBLEFBWVIsQUFPSSxBQUtBLEFBS0EsQUFLVSxVQXBCK0MsRUExQzVELEFBV0UsQUFPQSxBQThCRSxBQUtBLEFBS0EsTUExRVIsQUF5Q1QsQUFJVSxLQTVCSyxFQWhCTCxBQTRCb0YsQUFPQSxBQTZCNUYsQUFLQSxBQUtBLENBN0JTLE9BNUNILEVBNkMwQixJQTVDdkIsU0FDbUIsOEJBMkU1QixNQXBFb0QsQUFZdEQsYUFMK0IsMkNBOEJoQixJQTNDSCxTQTRDRSxDQTNDNEMsRUFxRDFELFNBVFksVUFFa0IsOEJBdEI5QixBQU9BLGVBbEJBLG1CQWtDQSxnQkF6Q0Esa0ZBTEEiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvam9uYXMvY29kZS9uaXBoZXIuZ2l0aHViLmlvL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5tZW51LW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIC44cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm1lbnUtbmF2LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdiB1bCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgub3ZlcmxheSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvLmJsb2cpIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDcwMHB4O1xuXG4gIHRyYW5zaXRpb24gd2lkdGggMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBoZWlnaHQgMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSkge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNDUwcHg7XG5cbiAgdHJhbnNpdGlvbiB3aWR0aCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIGhlaWdodCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvLnBob3RvZ3JhcGh5IC5wb2x5Z29uKSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG59XG5cbi5tZW51LW5hdi52aXNpYmxlIDpnbG9iYWwoLmxvZ28pIHtcbiAgb3BhY2l0eTogMTtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDEuM3MgZWFzZSwgd2lkdGggMXMgLjNzIGVhc2UsIGhlaWdodCAxcyAuM3MgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvKSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAubWVudS1uYXYgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSkge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59YFxuIl19 */\n/*@ sourceURL=components/menu-nav.styles.js */");

_defaultExport.__hash = "4225576184";
_defaultExport.__scoped = ".menu-nav.jsx-591870265{position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);z-index:2;-webkit-transition:-webkit-transform .6s .8s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s .8s cubic-bezier(.7,.3,0,1);transition:transform .6s .8s cubic-bezier(.7,.3,0,1);}.menu-nav.visible.jsx-591870265{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .6s cubic-bezier(.7,.3,0,1);-webkit-transition:transform .6s cubic-bezier(.7,.3,0,1);transition:transform .6s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 ul.jsx-591870265{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menu-nav.jsx-591870265 .overlay{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.menu-nav.jsx-591870265 .logo.blog{width:700px;height:700px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 .logo.photography{width:450px;height:450px;-webkit-transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);transition:width 1s .2s cubic-bezier(.7,.3,0,1),height 1s .2s cubic-bezier(.7,.3,0,1);}.menu-nav.jsx-591870265 .logo.photography .polygon{border-radius:50%;}.menu-nav.jsx-591870265 .logo{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:500px;width:500px;opacity:0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;}.menu-nav.visible.jsx-591870265 .logo{opacity:1;-webkit-transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;transition:opacity 2s 1.3s ease,width 1s .3s ease,height 1s .3s ease;}@media (max-width:780px){.menu-nav.jsx-591870265 .logo{width:200px;height:200px;}.menu-nav.jsx-591870265 .logo.blog{width:300px;height:300px;}.menu-nav.jsx-591870265 .logo.photography{width:150px;height:150px;}.menu-nav.jsx-591870265 ul.jsx-591870265{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVudS1uYXYuc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUdxQixBQVdNLEFBS1osQUFPWSxBQUlaLEFBT0EsQUFPTSxBQUlBLEFBWVIsQUFPSSxBQUtBLEFBS0EsQUFLVSxVQXBCK0MsRUExQzVELEFBV0UsQUFPQSxBQThCRSxBQUtBLEFBS0EsTUExRVIsQUF5Q1QsQUFJVSxLQTVCSyxFQWhCTCxBQTRCb0YsQUFPQSxBQTZCNUYsQUFLQSxBQUtBLENBN0JTLE9BNUNILEVBNkMwQixJQTVDdkIsU0FDbUIsOEJBMkU1QixNQXBFb0QsQUFZdEQsYUFMK0IsMkNBOEJoQixJQTNDSCxTQTRDRSxDQTNDNEMsRUFxRDFELFNBVFksVUFFa0IsOEJBdEI5QixBQU9BLGVBbEJBLG1CQWtDQSxnQkF6Q0Esa0ZBTEEiLCJmaWxlIjoiY29tcG9uZW50cy9tZW51LW5hdi5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvam9uYXMvY29kZS9uaXBoZXIuZ2l0aHViLmlvL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5tZW51LW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIC44cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm1lbnUtbmF2LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdiB1bCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgub3ZlcmxheSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvLmJsb2cpIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDcwMHB4O1xuXG4gIHRyYW5zaXRpb24gd2lkdGggMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBoZWlnaHQgMXMgLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSkge1xuICB3aWR0aDogNDUwcHg7XG4gIGhlaWdodDogNDUwcHg7XG5cbiAgdHJhbnNpdGlvbiB3aWR0aCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSksIGhlaWdodCAxcyAuMnMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSk7XG59XG5cbi5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvLnBob3RvZ3JhcGh5IC5wb2x5Z29uKSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1lbnUtbmF2IDpnbG9iYWwoLmxvZ28pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG59XG5cbi5tZW51LW5hdi52aXNpYmxlIDpnbG9iYWwoLmxvZ28pIHtcbiAgb3BhY2l0eTogMTtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIDEuM3MgZWFzZSwgd2lkdGggMXMgLjNzIGVhc2UsIGhlaWdodCAxcyAuM3MgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5tZW51LW5hdiA6Z2xvYmFsKC5sb2dvKSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAubWVudS1uYXYgOmdsb2JhbCgubG9nby5ibG9nKSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAubWVudS1uYXYgOmdsb2JhbCgubG9nby5waG90b2dyYXBoeSkge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLm1lbnUtbmF2IHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59YFxuIl19 */\n/*@ sourceURL=components/menu-nav.styles.js */";
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
var _jsxFileName = "/home/jonas/code/nipher.github.io/src/components/overlay.js";



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
var _defaultExport = new String(".overlay{position:absolute;left:0;right:0;top:0;bottom:0;background:#333;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);-webkit-transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);}.overlay.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);}.polygon{position:absolute;height:100%;width:100%;opacity:1;background:#fff;-webkit-transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon{-webkit-transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 0,50% 0%);clip-path:polygon(0% 0%,50% 0,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 100%,50% 0%);clip-path:polygon(0% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 100%,50% 100%);clip-path:polygon(0% 100%,0% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 0%,50% 100%);clip-path:polygon(0% 100%,0% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 0%,50% 0%);clip-path:polygon(100% 0%,50% 0%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 100%,50% 0%);clip-path:polygon(100% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay .polygon:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 100%,50% 100%);clip-path:polygon(100% 100%,100% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible .polygon:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 0%,50% 100%);clip-path:polygon(100% 100%,100% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBR3FCLEFBWU0sQUFNTixBQVU0RixBQUl0RSxBQUdHLEFBSUcsQUFHRixBQUlELEFBR0UsQUFJSyxBQUdGLGtCQXZEekMsQUFrQkssT0FqQkosS0FrQkcsR0FqQkwsTUFDRyxFQWlCQyxPQWhCTSxHQWlCQSxhQWhCWSxHQWtCa0YsaUJBVnBELEFBbUJYLE1BR0EsQUFXQSxFQUpBLEVBT0EsRUFWQSxJQWlCQSxJQUhBLHlCQXJCQyxNQUdBLEFBV0EsRUFKQSxFQU9BLEVBVkEsSUFpQkEsSUFIQSxXQTlDb0QsMENBT3RHLFlBY0EsbUVBSkEsc0xBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvam9uYXMvY29kZS9uaXBoZXIuZ2l0aHViLmlvL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgLjlzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBiYWNrZ3JvdW5kIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC42cyAxLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ucG9seWdvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjZzIC4zcyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgLXdlYmtpdC1jbGlwLXBhdGggLjZzIC4zcyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbiB7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAuNnMgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCAtd2Via2l0LWNsaXAtcGF0aCAuNnMgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoMSkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUwJSAwLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbjpudGgtY2hpbGQoMSkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUwJSAxMDAlLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoMikge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgMCUgMTAwJSwgNTAlIDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbjpudGgtY2hpbGQoMikge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgMCUgMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDMpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDUwJSAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDMpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDUwJSAxMDAlLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoNCkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDQpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTAwJSwgMTAwJSAwJSwgNTAlIDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufWBcbiJdfQ== */\n/*@ sourceURL=components/overlay.styles.js */");

_defaultExport.__hash = "4202885491";
_defaultExport.__scoped = ".overlay.jsx-1514855602{position:absolute;left:0;right:0;top:0;bottom:0;background:#333;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);-webkit-transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);transition:transform 0.6s .9s cubic-bezier(.7,.3,0,1),background .5s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);transition:background .6s 1.2s cubic-bezier(.7,.3,0,1);}.polygon.jsx-1514855602{position:absolute;height:100%;width:100%;opacity:1;background:#fff;-webkit-transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .3s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .3s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602{-webkit-transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);transition:clip-path .6s .5s cubic-bezier(.7,.3,0,1),-webkit-clip-path .6s .5s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 0,50% 0%);clip-path:polygon(0% 0%,50% 0,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(1){-webkit-clip-path:polygon(0% 0%,50% 100%,50% 0%);clip-path:polygon(0% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 100%,50% 100%);clip-path:polygon(0% 100%,0% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(2){-webkit-clip-path:polygon(0% 100%,0% 0%,50% 100%);clip-path:polygon(0% 100%,0% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 0%,50% 0%);clip-path:polygon(100% 0%,50% 0%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(3){-webkit-clip-path:polygon(100% 0%,50% 100%,50% 0%);clip-path:polygon(100% 0%,50% 100%,50% 0%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.jsx-1514855602 .polygon.jsx-1514855602:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 100%,50% 100%);clip-path:polygon(100% 100%,100% 100%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}.overlay.visible.jsx-1514855602 .polygon.jsx-1514855602:nth-child(4){-webkit-clip-path:polygon(100% 100%,100% 0%,50% 100%);clip-path:polygon(100% 100%,100% 0%,50% 100%);-webkit-clip-path:4s cubic-bezier(.7,.3,0,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBR3FCLEFBWU0sQUFNTixBQVU0RixBQUl0RSxBQUdHLEFBSUcsQUFHRixBQUlELEFBR0UsQUFJSyxBQUdGLGtCQXZEekMsQUFrQkssT0FqQkosS0FrQkcsR0FqQkwsTUFDRyxFQWlCQyxPQWhCTSxHQWlCQSxhQWhCWSxHQWtCa0YsaUJBVnBELEFBbUJYLE1BR0EsQUFXQSxFQUpBLEVBT0EsRUFWQSxJQWlCQSxJQUhBLHlCQXJCQyxNQUdBLEFBV0EsRUFKQSxFQU9BLEVBVkEsSUFpQkEsSUFIQSxXQTlDb0QsMENBT3RHLFlBY0EsbUVBSkEsc0xBaEJBIiwiZmlsZSI6ImNvbXBvbmVudHMvb3ZlcmxheS5zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvam9uYXMvY29kZS9uaXBoZXIuZ2l0aHViLmlvL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgLjlzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBiYWNrZ3JvdW5kIC41cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC42cyAxLjJzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ucG9seWdvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjZzIC4zcyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgLXdlYmtpdC1jbGlwLXBhdGggLjZzIC4zcyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbiB7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAuNnMgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCAtd2Via2l0LWNsaXAtcGF0aCAuNnMgLjVzIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO1xufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoMSkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUwJSAwLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbjpudGgtY2hpbGQoMSkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDUwJSAxMDAlLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoMikge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgMCUgMTAwJSwgNTAlIDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuLm92ZXJsYXkudmlzaWJsZSAucG9seWdvbjpudGgtY2hpbGQoMikge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMTAwJSwgMCUgMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cblxuLm92ZXJsYXkgLnBvbHlnb246bnRoLWNoaWxkKDMpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDUwJSAwJSwgNTAlIDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDMpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCUsIDUwJSAxMDAlLCA1MCUgMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufVxuXG4ub3ZlcmxheSAucG9seWdvbjpudGgtY2hpbGQoNCkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDUwJSAxMDAlKTtcbiAgLXdlYmtpdC1jbGlwLXBhdGggNHMgY3ViaWMtYmV6aWVyKC43LCAuMywgMCwgMSlcbn1cbi5vdmVybGF5LnZpc2libGUgLnBvbHlnb246bnRoLWNoaWxkKDQpIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMTAwJSwgMTAwJSAwJSwgNTAlIDEwMCUpO1xuICAtd2Via2l0LWNsaXAtcGF0aCA0cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKVxufWBcbiJdfQ== */\n/*@ sourceURL=components/overlay.styles.js */";
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
//# sourceMappingURL=components_menu_nav_942732780fc87d3afe529866aed128da.js.map