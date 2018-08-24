
        __NEXT_REGISTER_CHUNK('components_profile_picture_cfef85467372e3f76fe3250310b2bb19', function() {
      webpackJsonp([6],{

/***/ "./components/polygon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/polygon.js";

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var coords = _ref.coords,
      color = _ref.color,
      opacity = _ref.opacity,
      duration = _ref.duration,
      delay = _ref.delay;
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: "polygon",
    style: {
      clipPath: "polygon(".concat(coords, ")"),
      WebkitClipPath: "polygon(".concat(coords, ")"),
      background: "rgba(".concat(color, ", ").concat(opacity, ")"),
      transition: "-webkit-clip-path ".concat(duration, "s ").concat(delay, "s cubic-bezier(.7, .3, 0, 1), clip-path ").concat(duration, "s ").concat(delay, "s cubic-bezier(.7, .3, 0, 1), background-color ").concat(duration, "s ").concat(delay, "s cubic-bezier(.7, .3, 0, 1)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
});

/***/ }),

/***/ "./components/profile-picture.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polygon__ = __webpack_require__("./components/polygon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__ = __webpack_require__("./components/profile-picture.styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_fade_in__ = __webpack_require__("./styles/fade-in.js");
var _jsxFileName = "/Users/nipher/code/nipher/src/components/profile-picture.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var structure = [["104,160 0,296 94,414", "255,255,255"], ["121,125 29,0 131,288", "197,220,244"], ["113,424 237,483 129,666", "167,172,171"], ["114,318 0,352 0,8", "255,220,218"], ["0,126 121,179 12,0", "92,116,145"], ["20,242 44,172 92,239", "80,34,25"], ["40,141 83,187 0,166", "255,255,255"], ["71,666 113,503 207,666", "149,147,146"], ["55,26 106,99 0,0", "211,220,226"], ["103,270 84,379 0,249", "255,255,251"], ["12,331 98,324 46,358", "255,223,213"], ["0,394 50,403 0,428", "255,189,178"], ["21,236 32,266 98,239", "171,122,115"], ["119,247 99,279 99,195", "21,6,9"], ["96,634 0,409 1,665", "10,0,2"], ["187,445 106,437 237,510", "209,213,217"], ["98,219 86,200 17,204", "252,198,183"], ["124,357 134,212 111,107", "209,208,208"], ["137,568 182,591 173,481", "17,13,16"], ["0,127 64,158 0,46", "43,44,56"], ["83,208 97,219 97,315", "255,224,215"], ["111,343 113,263 99,308", "10,0,0"], ["51,295 0,323 0,200", "255,255,255"], ["119,395 5,491 45,350", "94,58,54"], ["149,665 237,530 222,475", "141,143,143"], ["50,252 33,214 68,223", "44,27,27"], ["20,0 37,144 43,81", "175,188,207"], ["0,132 0,185 68,164", "255,229,226"], ["94,203 4,193 97,178", "49,38,42"], ["46,208 9,176 18,241", "179,108,87"], ["65,150 77,77 76,158", "189,200,218"], ["0,399 0,418 41,412", "240,183,178"], ["0,407 20,316 2,324", "92,33,21"], ["130,278 90,417 132,333", "160,152,151"], ["106,210 97,208 114,186", "24,31,47"], ["122,666 68,626 120,427", "103,93,97"], ["114,587 142,561 160,666", "155,157,154"], ["98,199 94,156 122,179", "203,218,229"], ["88,549 38,468 0,559", "20,8,9"], ["0,357 21,400 22,337", "63,29,24"], ["64,66 50,50 55,180", "186,194,211"], ["140,541 123,531 131,440", "176,177,175"], ["34,431 67,394 87,449", "41,22,21"], ["57,30 89,71 48,67", "150,159,172"], ["29,301 0,209 0,304", "255,252,247"], ["0,418 45,411 4,482", "120,84,78"], ["131,330 62,375 76,404", "159,133,134"], ["0,115 0,129 55,145", "50,10,0"], ["145,567 177,467 131,552", "88,87,88"], ["0,22 0,0 48,22", "177,185,193"], ["167,600 147,576 178,491", "48,44,47"], ["227,563 193,666 234,666", "7,8,10"], ["103,225 114,203 114,210", "35,43,62"], ["0,330 52,385 60,355", "151,113,107"], ["237,552 200,519 201,603", "77,76,77"], ["49,454 86,479 64,445", "163,113,105"], ["39,243 42,274 84,238", "188,148,143"], ["109,423 126,476 237,513", "148,148,148"], ["0,42 17,72 17,130", "151,173,197"], ["0,123 5,98 0,41", "0,0,19"], ["39,142 46,134 90,179", "57,22,19"], ["31,495 0,420 69,469", "96,68,65"], ["226,487 237,534 198,457", "208,208,210"], ["87,140 122,142 103,94", "182,189,199"], ["116,253 105,329 97,228", "42,26,26"], ["69,167 80,196 0,138", "232,217,219"], ["20,205 17,247 0,200", "229,178,166"], ["7,666 54,632 50,664", "25,15,16"], ["160,609 195,596 178,512", "89,87,88"], ["113,386 94,364 84,428", "89,83,87"], ["73,104 59,44 52,43", "46,60,82"], ["25,50 30,111 11,45", "15,30,49"], ["124,356 131,271 108,211", "133,121,123"], ["63,140 72,113 67,71", "24,31,48"], ["182,666 172,582 195,620", "146,149,146"], ["48,217 84,237 68,222", "45,25,23"], ["108,580 47,547 60,581", "75,66,70"], ["218,495 237,569 237,529", "130,125,128"], ["88,517 78,465 27,499", "62,36,35"], ["16,318 92,237 102,280", "252,232,229"], ["91,360 53,353 96,320", "255,221,212"], ["140,489 144,534 183,488", "90,88,89"], ["142,446 222,479 170,439", "198,200,201"], ["28,64 61,44 19,15", "127,144,165"], ["73,245 66,227 61,243", "211,229,243"], ["41,414 20,391 9,425", "201,147,140"], ["228,666 177,575 237,632", "31,28,31"], ["86,343 67,255 94,257", "254,242,241"], ["133,666 160,666 134,623", "151,154,150"], ["0,529 53,570 0,481", "2,3,4"], ["97,252 99,207 84,247", "202,159,153"], ["97,327 125,324 106,293", "73,51,51"], ["48,450 29,428 62,361", "79,51,47"], ["215,487 212,537 234,517", "149,151,155"], ["115,360 96,326 102,416", "104,96,97"], ["116,224 48,178 77,180", "112,109,118"], ["95,125 131,253 132,208", "183,190,199"], ["17,72 30,82 25,130", "20,33,51"], ["37,370 1,357 1,402", "58,32,30"], ["10,336 87,364 58,292", "237,207,201"], ["12,333 0,343 1,299", "225,163,149"], ["195,607 174,666 139,561", "116,117,115"], ["18,110 37,134 25,135", "29,33,44"], ["54,242 32,218 50,221", "43,18,16"], ["113,588 66,512 75,652", "80,67,71"], ["0,326 20,302 16,317", "219,165,153"], ["104,96 71,46 87,98", "193,197,202"], ["85,144 76,143 88,122", "16,20,34"], ["121,443 62,422 0,347", "58,42,42"], ["67,359 99,351 79,381", "216,178,175"], ["97,342 125,547 117,430", "98,97,97"], ["192,666 192,583 208,666", "81,80,82"], ["112,358 131,301 125,350", "173,175,175"], ["35,414 16,389 39,401", "173,107,95"], ["46,120 34,128 28,93", "141,155,176"], ["9,243 29,237 65,288", "218,185,182"], ["47,256 71,247 20,241", "160,105,96"], ["91,115 96,135 95,101", "66,84,107"], ["185,0 124,0 129,0", "186,189,189"], ["45,472 57,466 57,479", "158,119,113"], ["108,410 92,429 44,382", "85,69,70"], ["17,18 0,17 7,104", "99,122,146"], ["47,137 61,69 59,128", "162,174,193"], ["39,140 0,128 63,159", "196,107,87"], ["43,291 13,312 69,361", "230,198,190"], ["110,197 108,205 94,199", "21,27,43"], ["110,161 113,189 120,179", "110,123,137"], ["0,204 0,158 33,174", "204,163,157"], ["54,666 110,666 118,601", "129,127,127"], ["89,135 126,170 119,134", "156,163,173"], ["30,457 51,484 39,504", "46,36,38"], ["127,309 98,384 113,294", "100,78,76"], ["86,115 78,69 71,61", "74,92,114"], ["129,478 118,428 146,454", "161,162,163"], ["20,666 0,570 65,649", "32,27,28"], ["114,621 107,609 109,619", "210,204,206"], ["106,394 109,369 113,430", "128,125,125"], ["60,31 -2,-3 0,7", "193,188,183"], ["141,562 115,550 143,615", "158,157,157"], ["65,392 77,380 36,351", "92,77,79"], ["163,666 139,644 156,582", "136,138,134"], ["22,332 40,353 27,297", "245,231,229"], ["0,234 82,305 0,309", "248,229,228"], ["28,390 0,403 -5,395", "159,85,76"], ["27,184 88,194 15,201", "69,49,46"], ["95,170 91,189 89,158", "0,0,8"], ["76,183 0,150 34,142", "241,226,225"], ["3,324 16,331 27,320", "146,55,40"], ["51,663 57,591 85,637", "64,50,52"], ["108,229 117,203 117,194", "56,73,93"], ["57,142 88,171 88,163", "133,150,174"], ["54,171 22,179 50,181", "202,173,173"], ["36,181 34,217 0,192", "163,116,105"], ["197,639 247,586 224,562", "48,46,48"], ["1,499 20,485 0,427", "49,42,46"], ["92,100 104,98 117,147", "184,188,195"], ["172,469 183,529 155,458", "105,104,104"], ["69,284 8,251 58,260", "221,198,198"], ["58,210 25,217 22,232", "116,59,52"], ["34,228 17,237 46,244", "153,141,140"], ["125,535 132,666 101,516", "118,114,114"], ["36,522 74,555 78,574", "33,25,27"], ["150,548 103,548 151,535", "120,118,118"], ["34,404 0,416 0,399", "217,167,168"], ["45,197 52,183 77,193", "32,33,39"], ["59,484 27,444 26,450", "134,101,95"], ["78,130 86,120 80,172", "54,63,79"], ["3,84 22,121 13,126", "136,151,172"], ["98,251 114,226 101,218", "17,13,15"], ["100,368 79,387 65,369", "171,144,143"], ["86,163 86,140 82,156", "181,192,207"], ["85,666 70,655 55,666", "144,143,141"], ["0,510 24,492 39,530", "10,7,8"], ["46,382 26,341 0,343", "102,69,63"], ["71,153 78,145 79,98", "177,186,203"], ["57,386 44,363 44,378", "134,118,119"], ["58,216 70,217 90,234", "213,182,180"], ["108,161 112,138 102,151", "195,208,226"], ["81,189 92,177 100,202", "3,0,3"], ["116,470 78,462 92,485", "71,48,48"], ["204,505 196,582 175,572", "127,127,125"], ["32,23 52,86 41,34", "45,59,80"], ["111,244 122,284 112,270", "32,21,22"], ["213,607 210,666 229,666", "19,15,17"], ["76,151 85,116 77,129", "89,99,117"], ["59,151 67,167 72,148", "58,38,41"], ["0,134 -3,127 17,132", "144,74,62"], ["90,435 38,450 123,470", "97,70,69"], ["237,585 233,529 226,537", "84,78,78"], ["16,18 23,104 6,12", "83,94,113"], ["80,602 95,560 118,558", "105,92,96"], ["111,225 128,185 130,274", "181,188,198"], ["155,449 120,456 230,505", "146,148,149"], ["44,145 41,73 54,89", "44,53,72"], ["154,578 172,611 171,655", "101,99,100"], ["86,239 87,225 79,218", "177,74,51"], ["88,131 94,145 86,73", "187,200,219"], ["42,409 58,408 17,378", "105,65,57"], ["183,594 170,666 194,666", "132,133,130"], ["107,238 118,227 123,260", "116,123,137"], ["123,336 122,284 113,272", "150,115,109"], ["219,476 212,469 179,445", "127,129,127"], ["29,324 46,339 11,336", "244,233,232"], ["108,209 89,214 117,200", "133,132,144"], ["64,59 56,57 63,84", "80,92,112"], ["76,198 31,202 86,203", "198,152,142"], ["61,37 72,93 76,84", "192,204,223"], ["194,596 154,552 156,581", "51,47,50"], ["83,495 86,478 113,509", "114,92,95"], ["85,544 61,531 78,608", "62,54,58"], ["232,665 237,609 226,560", "49,51,50"], ["58,153 75,174 84,198", "154,102,95"], ["97,230 58,201 94,210", "235,211,210"], ["58,367 69,378 60,362", "61,37,34"], ["58,192 45,183 56,179", "94,86,89"], ["56,480 62,483 40,451", "143,107,102"], ["107,143 101,141 105,126", "70,89,111"], ["216,473 206,462 186,448", "64,65,65"], ["13,429 28,449 -5,442", "62,45,43"], ["63,634 63,572 71,626", "38,30,31"], ["122,618 114,618 110,627", "130,135,137"], ["81,402 101,446 115,427", "61,55,58"], ["166,497 135,495 147,465", "120,120,118"], ["220,477 228,496 169,456", "190,192,196"], ["33,36 12,5 37,72", "162,171,187"], ["42,29 47,22 72,50", "198,193,189"], ["25,478 0,414 14,468", "99,83,84"], ["65,439 89,456 60,448", "65,42,39"], ["102,287 98,245 96,241", "179,124,112"], ["177,500 179,535 149,512", "61,58,60"], ["59,150 54,124 61,143", "169,182,202"], ["62,51 55,65 43,55", "152,167,188"], ["37,299 22,320 82,374", "224,195,188"], ["122,270 105,266 122,287", "87,70,69"], ["119,459 124,500 82,488", "79,74,76"], ["88,192 107,215 65,188", "104,99,106"], ["133,239 111,165 126,171", "183,183,184"], ["135,318 129,326 113,311", "127,114,112"], ["92,154 82,110 85,112", "58,70,87"], ["93,598 69,650 124,636", "103,93,95"], ["45,49 51,77 49,125", "37,47,64"], ["118,538 100,554 84,509", "99,84,89"], ["42,220 56,220 49,232", "18,16,18"], ["65,228 56,225 53,233", "147,150,164"], ["101,160 99,156 93,180", "168,177,188"], ["50,425 78,461 76,399", "50,35,34"], ["71,92 71,119 66,108", "36,45,60"], ["204,571 205,545 234,560", "75,74,74"], ["16,214 3,206 5,241", "239,205,197"], ["41,562 63,500 77,517", "41,27,27"], ["44,352 41,379 16,349", "105,80,76"], ["42,607 33,586 12,578", "71,66,69"], ["16,68 9,57 0,5", "152,168,186"], ["112,113 96,90 102,93", "128,123,119"], ["41,417 38,403 11,434", "147,93,83"], ["14,305 21,318 1,315", "219,170,160"], ["62,211 36,214 33,225", "104,59,53"], ["79,125 71,121 72,101", "132,142,158"], ["0,537 -6,538 0,535", "188,188,190"], ["41,132 37,102 37,128", "177,188,207"], ["168,480 161,486 183,514", "91,90,91"], ["116,352 107,395 111,370", "142,140,140"], ["38,553 1,539 1,552", "15,15,17"], ["10,421 16,433 0,473", "72,54,53"], ["28,218 54,202 5,200", "190,131,111"], ["176,445 185,449 166,437", "54,54,54"], ["83,555 76,493 109,583", "88,75,79"], ["0,170 0,137 41,178", "219,199,200"], ["22,637 14,587 36,593", "43,38,40"], ["43,562 73,564 76,588", "73,65,68"], ["53,175 60,157 31,153", "246,230,227"], ["28,82 35,81 35,114", "95,106,125"], ["1,350 14,375 0,385", "36,25,24"], ["213,514 193,593 213,589", "89,89,89"], ["40,49 46,83 41,108", "97,108,127"], ["29,197 10,231 24,226", "183,130,114"], ["96,161 111,192 99,196", "199,215,228"], ["26,346 80,361 41,345", "193,156,150"], ["59,198 58,188 34,194", "42,26,25"], ["141,555 171,569 174,581", "36,31,33"], ["8,416 43,435 -8,418", "128,94,87"], ["35,78 25,24 29,44", "70,82,100"], ["121,144 126,199 128,192", "195,193,189"], ["5,38 0,20 10,68", "66,83,103"], ["57,115 52,144 55,121", "92,105,123"], ["115,430 74,476 68,469", "97,77,76"], ["31,32 40,85 37,87", "175,186,204"], ["100,306 99,271 70,248", "248,234,230"], ["10,224 28,256 16,206", "195,155,148"], ["4,111 0,53 0,122", "7,24,40"], ["85,496 68,468 67,487", "50,35,35"], ["65,105 69,81 56,53", "100,110,127"], ["0,220 0,330 0,361", "255,255,255"], ["19,61 16,38 15,72", "101,112,130"], ["55,200 67,201 92,230", "207,163,152"], ["0,120 55,152 54,145", "66,33,27"], ["93,557 96,570 93,555", "131,130,135"], ["87,385 98,364 100,336", "159,133,135"], ["68,135 77,159 70,148", "192,205,224"], ["217,606 178,576 149,580", "78,76,77"], ["131,547 155,549 142,558", "91,90,90"], ["17,21 21,70 28,66", "47,56,74"], ["81,111 79,126 67,68", "179,190,207"], ["16,393 37,379 57,394", "63,39,36"], ["16,201 42,185 46,176", "124,96,91"], ["2,328 6,333 21,328", "179,90,73"], ["168,605 192,597 175,585", "113,112,112"], ["115,289 102,334 98,317", "48,37,40"], ["73,454 95,443 94,468", "94,74,74"], ["131,300 132,309 115,339", "129,126,127"], ["130,260 121,266 131,275", "159,158,157"], ["147,449 123,437 122,433", "197,197,198"], ["67,151 83,192 92,181", "34,31,39"], ["1,110 0,122 19,129", "27,41,55"], ["43,399 0,396 25,392", "151,92,83"], ["65,57 84,63 48,25", "191,192,193"], ["61,216 78,217 60,210", "158,82,67"], ["0,544 24,536 12,523", "34,29,31"], ["15,221 30,222 21,231", "169,114,103"], ["56,114 47,43 56,84", "169,182,201"], ["88,88 83,97 91,125", "183,195,214"], ["110,531 140,521 142,545", "146,147,145"], ["50,666 0,666 0,658", "67,60,63"], ["149,539 168,498 148,511", "86,85,86"], ["20,105 28,102 27,123", "12,21,39"], ["27,124 32,104 37,81", "155,168,187"], ["72,103 77,115 71,87", "166,178,195"], ["112,154 101,192 119,151", "134,145,156"], ["116,254 102,277 100,227", "32,25,26"], ["68,458 57,438 63,480", "154,115,108"], ["177,529 187,575 175,576", "93,91,92"], ["91,525 93,533 104,517", "122,114,119"], ["56,353 101,394 94,389", "165,136,134"], ["58,149 72,155 45,136", "60,82,104"], ["10,365 28,396 28,374", "83,65,66"], ["15,413 25,411 0,406", "224,192,187"], ["138,657 130,556 141,584", "163,161,162"], ["41,344 26,325 14,276", "246,231,225"], ["48,246 57,244 44,241", "191,175,177"], ["14,34 0,10 3,6", "78,89,104"], ["233,521 185,503 165,454", "144,145,145"], ["169,452 161,439 218,477", "193,192,191"], ["63,430 73,473 72,467", "170,134,128"], ["237,636 219,590 203,601", "57,54,56"], ["88,427 65,376 74,392", "160,126,121"], ["62,123 72,116 76,116", "58,68,87"], ["79,645 58,648 80,625", "69,52,55"], ["22,223 49,218 51,214", "131,87,79"], ["228,493 233,514 182,449", "185,185,186"], ["64,233 56,242 68,219", "93,82,84"], ["104,98 101,108 111,113", "187,186,184"], ["99,257 107,253 104,206", "25,18,19"], ["8,372 17,378 -4,355", "40,24,22"], ["37,239 56,241 41,226", "99,65,60"], ["62,145 61,135 67,142", "43,52,71"], ["188,640 196,666 199,603", "87,86,87"], ["37,145 0,136 11,133", "201,161,155"], ["99,639 120,662 99,635", "154,160,156"], ["104,160 114,181 112,174", "59,66,76"], ["99,120 104,113 89,72", "179,188,201"], ["173,604 190,648 185,596", "134,133,132"], ["190,470 213,502 229,504", "157,163,169"], ["44,439 47,444 57,451", "49,34,33"], ["21,9 75,53 0,0", "176,176,178"], ["0,373 0,366 0,349", "136,105,101"], ["11,159 0,166 0,214", "207,167,160"], ["124,306 113,277 130,291", "150,138,136"], ["176,493 219,540 237,535", "119,117,116"], ["65,445 57,419 61,409", "28,15,15"], ["125,542 119,534 126,465", "131,131,129"], ["134,550 135,563 107,554", "151,151,150"], ["64,108 60,114 75,100", "109,121,140"], ["52,76 38,65 40,72", "61,72,91"], ["2,564 24,569 0,602", "20,19,21"], ["63,156 80,179 49,147", "112,49,38"], ["53,308 55,288 4,310", "234,216,211"], ["73,234 69,222 85,236", "93,60,57"], ["83,501 84,478 126,505", "96,82,84"], ["48,468 40,450 33,453", "67,49,49"], ["163,632 130,666 149,585", "139,139,137"], ["93,632 93,591 98,620", "75,58,61"], ["54,387 30,347 42,370", "90,74,76"], ["26,269 2,292 0,217", "250,235,231"], ["18,436 6,421 39,503", "63,48,49"], ["120,282 112,248 100,253", "57,45,46"], ["114,357 126,322 128,333", "179,179,180"], ["112,612 82,569 126,597", "107,102,105"], ["101,431 96,415 103,412", "47,37,40"], ["43,446 19,456 26,428", "113,83,78"], ["113,503 72,535 66,506", "78,65,68"], ["133,316 123,337 128,334", "149,148,148"], ["106,282 110,276 114,292", "0,0,1"], ["32,406 40,399 22,396", "167,113,104"], ["90,615 69,615 74,585", "57,47,50"], ["90,375 98,397 116,356", "92,82,84"], ["92,152 84,137 106,163", "48,50,63"], ["189,494 195,580 182,543", "137,137,135"], ["161,520 173,510 167,561", "43,39,41"], ["125,260 116,214 111,214", "155,171,192"], ["101,217 92,198 79,192", "124,114,119"], ["101,288 95,341 99,269", "236,193,182"], ["84,398 75,384 67,390", "119,101,103"], ["176,467 144,442 183,461", "167,172,181"], ["87,207 96,230 92,236", "238,215,209"], ["2,336 46,353 7,334", "160,123,117"], ["237,535 230,512 237,554", "127,119,117"], ["79,243 43,251 74,246", "139,102,97"], ["68,649 59,663 129,621", "111,103,106"], ["88,618 79,659 103,655", "114,107,108"], ["86,160 75,160 90,170", "130,147,167"], ["29,459 29,463 28,463", "139,126,131"], ["21,346 0,346 5,353", "90,61,54"], ["13,597 -3,589 17,606", "11,10,11"], ["117,447 125,445 110,410", "119,114,115"], ["46,576 26,577 48,594", "16,16,18"], ["64,578 60,574 71,580", "26,14,13"], ["61,635 63,606 37,632", "56,49,51"], ["102,217 111,221 111,256", "55,49,53"], ["99,351 90,374 99,373", "148,129,132"], ["58,46 58,43 46,32", "105,115,121"], ["112,403 101,413 85,385", "88,86,90"], ["62,358 73,386 45,362", "103,80,78"], ["107,587 107,598 82,554", "76,63,67"], ["110,465 117,450 109,427", "82,83,87"], ["94,181 76,174 60,150", "32,26,28"], ["30,30 21,30 20,7", "160,167,178"], ["117,238 108,238 120,249", "90,91,102"], ["140,666 139,636 134,666", "152,152,151"], ["84,101 75,61 76,87", "101,114,131"], ["83,197 76,199 63,197", "78,56,54"], ["106,116 100,141 106,128", "125,140,158"], ["226,507 204,520 236,523", "136,135,137"], ["95,101 85,73 96,119", "103,120,137"], ["91,154 99,184 111,172", "192,204,215"], ["57,615 54,595 32,579", "51,48,50"], ["62,348 96,350 86,305", "242,222,216"], ["54,476 71,513 53,504", "67,47,45"], ["225,624 201,603 224,647", "25,20,22"], ["144,652 143,666 173,666", "119,119,118"], ["0,89 4,100 6,92", "43,54,71"], ["131,438 124,439 149,450", "179,179,181"], ["111,155 116,126 121,137", "135,132,131"], ["31,29 41,72 34,33", "53,63,82"], ["72,461 74,466 78,470", "32,12,10"], ["47,577 61,586 33,557", "64,59,62"], ["28,118 21,121 28,69", "27,35,50"], ["34,71 30,55 30,44", "81,91,109"], ["35,299 99,295 29,268", "241,229,229"], ["74,124 66,141 67,143", "150,162,181"], ["78,374 64,316 96,326", "238,218,211"], ["88,495 90,501 101,487", "110,98,102"], ["90,324 59,305 94,273", "248,235,232"], ["65,188 76,178 45,175", "171,164,171"], ["117,434 108,415 99,451", "81,78,80"], ["0,400 18,390 0,385", "107,51,45"], ["101,608 76,585 75,582", "145,128,131"], ["9,137 3,149 48,150", "221,198,197"], ["175,533 173,557 145,561", "55,52,55"], ["38,235 48,242 35,219", "84,69,67"], ["112,270 108,270 116,284", "126,95,93"], ["159,444 228,499 222,482", "187,188,190"], ["129,443 125,478 136,545", "159,158,157"], ["10,229 47,258 19,245", "198,163,158"], ["33,250 62,278 18,249", "214,189,188"], ["69,478 57,463 59,493", "94,57,50"], ["4,322 2,336 1,309", "204,157,147"], ["61,350 84,371 82,383", "189,159,156"], ["37,230 18,236 40,239", "135,127,126"], ["28,57 13,70 26,62", "61,71,87"], ["107,294 104,358 120,327", "78,64,65"], ["56,440 58,394 55,386", "52,31,28"], ["78,557 88,560 66,522", "45,39,41"], ["85,110 90,103 94,136", "175,186,204"], ["96,461 94,431 83,427", "99,83,87"], ["114,361 125,349 119,354", "173,174,173"], ["96,384 112,405 100,376", "87,82,83"], ["21,260 2,211 5,253", "239,217,211"], ["98,582 101,589 79,556", "128,120,123"], ["23,393 0,384 31,389", "77,45,39"], ["91,407 95,403 99,409", "141,124,128"], ["5,43 0,44 0,24", "125,157,183"], ["48,54 28,65 43,59", "103,116,135"], ["101,452 88,438 91,438", "139,123,126"], ["104,298 102,281 116,298", "51,45,48"], ["102,212 109,244 101,253", "19,14,14"], ["7,504 0,493 0,529", "4,1,2"], ["67,406 69,413 86,402", "87,62,59"], ["92,563 102,573 97,570", "58,49,52"], ["205,593 206,666 195,648", "65,62,64"], ["27,358 29,369 1,356", "59,38,35"], ["42,193 35,200 24,187", "99,69,64"], ["9,85 4,117 12,95", "97,109,129"], ["106,666 130,666 129,648", "105,107,106"], ["66,575 61,548 59,572", "82,73,76"], ["105,464 95,455 102,466", "122,104,107"], ["13,664 22,655 45,666", "53,41,43"], ["113,448 95,430 91,439", "59,50,54"], ["41,377 40,369 31,364", "112,94,96"], ["109,561 110,565 101,555", "174,154,158"], ["112,476 109,505 118,489", "65,67,68"], ["104,190 106,181 100,186", "111,126,143"], ["99,638 107,606 98,624", "135,134,134"], ["53,210 18,216 43,203", "182,120,101"], ["104,403 113,417 115,427", "125,119,119"], ["62,323 49,340 29,307", "224,193,186"], ["179,571 206,574 195,587", "113,112,112"], ["20,565 6,549 52,577", "56,48,51"], ["103,393 105,393 97,391", "178,184,190"], ["121,493 117,439 124,476", "113,114,113"], ["64,120 61,130 67,139", "38,47,65"], ["117,264 117,226 120,225", "125,129,140"], ["12,146 58,176 19,167", "234,219,220"], ["55,502 59,499 51,483", "103,69,62"], ["182,582 198,592 204,629", "67,64,66"], ["133,649 121,676 133,665", "126,126,123"], ["61,182 79,182 62,178", "181,174,177"], ["71,432 66,447 35,429", "67,49,49"], ["65,57 69,52 75,80", "158,170,188"], ["35,559 29,499 16,550", "15,11,12"], ["48,199 65,198 83,199", "143,97,88"], ["16,81 12,100 18,119", "156,165,182"], ["76,470 45,453 69,461", "162,128,121"], ["49,106 42,89 40,113", "83,92,110"], ["56,243 73,244 70,233", "201,198,205"], ["45,22 93,85 85,66", "192,190,188"], ["118,537 127,530 104,524", "121,121,120"], ["73,175 56,159 54,152", "202,143,130"], ["49,247 54,250 62,249", "137,84,75"], ["108,180 101,195 111,188", "228,242,252"], ["0,431 0,417 17,427", "100,78,76"], ["74,201 59,208 91,213", "223,204,205"], ["43,199 17,203 17,195", "142,94,88"], ["100,264 99,251 103,285", "104,73,66"], ["33,341 54,350 37,331", "236,216,212"], ["75,241 69,230 57,225", "158,165,173"], ["27,88 5,99 6,91", "106,117,135"], ["195,460 223,483 210,468", "165,164,163"], ["71,508 107,556 103,540", "89,75,78"], ["98,234 97,239 98,249", "126,88,81"], ["27,476 27,484 18,466", "121,92,87"], ["60,450 58,460 51,481", "98,74,71"], ["44,550 54,554 44,541", "24,13,13"], ["60,59 61,72 63,70", "144,152,171"], ["143,605 146,580 164,599", "133,133,132"], ["14,200 7,182 0,201", "187,142,132"], ["72,503 82,514 96,499", "71,54,56"], ["54,389 21,370 34,371", "74,62,67"], ["0,449 4,476 5,464", "75,65,70"], ["108,395 108,379 111,409", "137,135,135"], ["90,144 86,162 100,154", "79,86,101"], ["60,253 62,260 97,240", "225,185,176"], ["26,491 15,464 45,512", "48,35,36"], ["114,479 110,465 124,475", "100,101,102"], ["36,447 44,416 27,421", "100,67,61"], ["50,572 35,538 35,557", "14,10,11"], ["48,201 85,223 61,200", "200,151,139"], ["92,122 82,156 94,141", "155,167,184"], ["57,124 46,100 52,116", "77,85,104"], ["86,613 91,613 108,587", "106,94,98"], ["23,321 12,317 21,314", "200,141,126"], ["8,27 7,25 10,46", "167,179,198"], ["36,112 37,87 37,135", "172,182,200"], ["11,129 39,133 24,125", "36,35,42"], ["52,47 31,13 57,68", "172,183,198"], ["73,57 97,94 83,86", "170,179,193"], ["55,603 54,592 70,616", "39,33,35"], ["39,105 39,92 40,105", "182,190,208"], ["79,384 84,378 58,362", "155,131,130"], ["201,516 226,536 217,549", "107,104,105"], ["83,643 76,605 89,634", "89,75,79"], ["99,414 94,415 89,428", "86,79,83"]].map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      coords = _ref2[0],
      color = _ref2[1];

  return {
    color: color,
    coords: coords.split(' ').map(function (values) {
      return values.split(',');
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          a = _ref4[0],
          b = _ref4[1];

      return "".concat(a / 238 * 100, "% ").concat(b / 667 * 100, "%");
    }).join(',')
  };
}); // converts SVG px coordinates to % and clip path format e.g '{x} {y}, {x} {y}, {x} {y}'
// 238 is the svg width and 667 is the height, so we can calculate the correct "%" coords for each polygon

var initialStructure = structure.map(function (_ref5) {
  var coords = _ref5.coords;
  return {
    color: '255,255,255',
    opacity: 0,
    coords: coords.split(',').map(function (xy) {
      return xy.split(' ');
    }).map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          x = _ref7[0],
          y = _ref7[1];

      return "".concat(x.replace('%', '') * 1 + Math.random() * 100, "% ").concat(y);
    }).join(',')
  };
});

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref8;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref8 = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref8, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        structure: initialStructure,
        displayImg: false
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState(_objectSpread({}, _this2.state, {
          structure: structure
        }));
      }, 500);
      setTimeout(function () {
        _this2.setState(_objectSpread({}, _this2.state, {
          displayImg: true
        }));
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var displayImg = this.state.displayImg;
      return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scopedHash) + " " + 'profile-picture fade-in'
      }, this.state.structure.map(function (_ref9, i) {
        var coords = _ref9.coords,
            color = _ref9.color,
            _ref9$opacity = _ref9.opacity,
            opacity = _ref9$opacity === void 0 ? 0.5 : _ref9$opacity;
        var duration = 1;
        var delay = i * .005;
        return __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__polygon__["a" /* default */], _extends({
          key: i
        }, {
          coords: coords,
          color: color,
          duration: duration,
          delay: delay,
          opacity: displayImg ? 0 : opacity
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          }
        }));
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("source", {
        srcSet: "/static/profile.png",
        media: "(min-width: 600px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scopedHash)
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement("img", {
        src: "/static/profile_small.png",
        alt: "Profile Picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scopedHash) + " " + "".concat(displayImg ? 'visible' : '')
      })), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_3__profile_picture_styles__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_4__styles_fade_in__["a" /* default */].__scoped
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/profile-picture.styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = new String(".profile-picture{position:fixed;left:0;top:0;z-index:-1;height:100vh;-webkit-mask-image:-webkit-gradient(linear,left top,right top,color-stop(0.7,rgba(0,0,0,1)),color-stop(0.95,rgba(0,0,0,0)));}.profile-picture img{height:100vh;opacity:0;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}.profile-picture img.visible{opacity:.8;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}@media (max-width:500px){.profile-picture img.visible{opacity:.4;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS1waWN0dXJlLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFHa0IsQUFVRixBQU9GLEFBT0UsV0FMc0MsQUFNRSxFQWQzQyxFQVZILE9BQ0QsQ0FXNkMsS0FWeEMsV0FDRSxhQUVxSCwrREFjcEksQUFNRSxZQVpGLGlEQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS1waWN0dXJlLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmlwaGVyL2NvZGUvbmlwaGVyL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5wcm9maWxlLXBpY3R1cmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjcsIHJnYmEoMCwwLDAsMSkpLCBjb2xvci1zdG9wKDAuOTUsIHJnYmEoMCwwLDAsMCkpKTtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSBpbWcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSBpbWcudmlzaWJsZSB7XG4gIG9wYWNpdHk6IC44O1xuXG4gIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wcm9maWxlLXBpY3R1cmUgaW1nLnZpc2libGUge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbiAgfVxufWBcbiJdfQ== */\n/*@ sourceURL=components/profile-picture.styles.js */");

_defaultExport.__hash = "1110503262";
_defaultExport.__scoped = ".profile-picture.jsx-3493065567{position:fixed;left:0;top:0;z-index:-1;height:100vh;-webkit-mask-image:-webkit-gradient(linear,left top,right top,color-stop(0.7,rgba(0,0,0,1)),color-stop(0.95,rgba(0,0,0,0)));}.profile-picture.jsx-3493065567 img.jsx-3493065567{height:100vh;opacity:0;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}.profile-picture.jsx-3493065567 img.visible.jsx-3493065567{opacity:.8;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}@media (max-width:500px){.profile-picture.jsx-3493065567 img.visible.jsx-3493065567{opacity:.4;-webkit-transition:2.5s opacity cubic-bezier(.7,.3,0,1);transition:2.5s opacity cubic-bezier(.7,.3,0,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS1waWN0dXJlLnN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFa0IsQUFHa0IsQUFVRixBQU9GLEFBT0UsV0FMc0MsQUFNRSxFQWQzQyxFQVZILE9BQ0QsQ0FXNkMsS0FWeEMsV0FDRSxhQUVxSCwrREFjcEksQUFNRSxZQVpGLGlEQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS1waWN0dXJlLnN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbmlwaGVyL2NvZGUvbmlwaGVyL3NyYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Bcbi5wcm9maWxlLXBpY3R1cmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLjcsIHJnYmEoMCwwLDAsMSkpLCBjb2xvci1zdG9wKDAuOTUsIHJnYmEoMCwwLDAsMCkpKTtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSBpbWcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSBpbWcudmlzaWJsZSB7XG4gIG9wYWNpdHk6IC44O1xuXG4gIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5wcm9maWxlLXBpY3R1cmUgaW1nLnZpc2libGUge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHRyYW5zaXRpb246IDIuNXMgb3BhY2l0eSBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKTtcbiAgfVxufWBcbiJdfQ== */\n/*@ sourceURL=components/profile-picture.styles.js */";
_defaultExport.__scopedHash = "3493065567";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ })

})
        })
      ;
//# sourceMappingURL=components_profile_picture_cfef85467372e3f76fe3250310b2bb19.js.map