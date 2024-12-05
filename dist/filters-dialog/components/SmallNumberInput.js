"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallNumberInput;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SmallNumberInput(_ref) {
  var label = _ref.label,
    fieldConfig = _ref.fieldConfig,
    isConfigCompleteFunction = _ref.isConfigCompleteFunction,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged,
    textFieldProps = _ref.textFieldProps;
  return /*#__PURE__*/React.createElement(_TextField["default"], _extends({
    size: "small",
    type: "number",
    label: label,
    sx: {
      width: "100%"
    },
    value: fieldConfig.value,
    onChange: function onChange(e) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: e.target.value && parseInt(e.target.value)
      }, fieldConfig, isConfigCompleteFunction, onPropertyChanged, onConfigCompleteChanged);
    }
  }, textFieldProps));
}