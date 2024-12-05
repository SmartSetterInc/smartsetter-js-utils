"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CountOrVolumeFilterBody;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function CountOrVolumeFilterBody(_ref) {
  var _fieldConfig$value, _fieldConfig$value2;
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    var _newConfig$value, _newConfig$value2;
    return !!((_newConfig$value = newConfig.value) !== null && _newConfig$value !== void 0 && _newConfig$value.count) && !!((_newConfig$value2 = newConfig.value) !== null && _newConfig$value2 !== void 0 && _newConfig$value2.volume);
  }
  function handleNumberChangedEventWrapper(propertyName) {
    return function (e) {
      return onPropertyChanged({
        name: "value",
        value: _objectSpread(_objectSpread({}, fieldConfig.value), {}, _defineProperty({}, propertyName, e.target.value))
      });
    };
  }
  (0, _utils.useBroadcastDebouncedValue)({
    value: fieldConfig.value,
    fieldConfig: fieldConfig,
    isConfigComplete: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_TextField["default"], {
    label: "Number of sales (#)",
    type: "number",
    size: "small",
    value: (_fieldConfig$value = fieldConfig.value) === null || _fieldConfig$value === void 0 ? void 0 : _fieldConfig$value.count,
    onChange: handleNumberChangedEventWrapper("count")
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_TextField["default"], {
    label: "Sales volume ($)",
    type: "number",
    size: "small",
    value: (_fieldConfig$value2 = fieldConfig.value) === null || _fieldConfig$value2 === void 0 ? void 0 : _fieldConfig$value2.volume,
    onChange: handleNumberChangedEventWrapper("volume")
  })));
}