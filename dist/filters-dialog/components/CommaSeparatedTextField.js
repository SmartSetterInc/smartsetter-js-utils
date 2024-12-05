"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallCommaSeparatedTextField = SmallCommaSeparatedTextField;
exports["default"] = SimpleOrCommaSeparatedTextField;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _SmallTextField = _interopRequireDefault(require("../../common/components/SmallTextField"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SimpleOrCommaSeparatedTextField(_ref) {
  var simple = _ref.simple,
    label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange;
  if (simple) {
    return /*#__PURE__*/React.createElement(_SmallTextField["default"], {
      label: label,
      value: value,
      onChange: onChange
    });
  } else {
    return /*#__PURE__*/React.createElement(SmallCommaSeparatedTextField, {
      label: label,
      value: value,
      onChange: onChange
    });
  }
}
function SmallCommaSeparatedTextField(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    _onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement(_TextField["default"], {
    size: "small",
    label: label,
    sx: {
      width: "100%"
    },
    value: value,
    onChange: function onChange(e) {
      var text = e.target.value;
      var splitterRegex = new RegExp(",\\s*");
      _onChange(text.split(splitterRegex));
    }
  });
}