"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallTextField;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SmallTextField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _onChange = _ref.onChange,
    textFieldProps = _ref.textFieldProps;
  return /*#__PURE__*/React.createElement(_TextField["default"], _extends({
    size: "small",
    sx: {
      width: "100%"
    },
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    label: label
  }, textFieldProps));
}