"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExactCheckbox;
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ExactCheckbox(_ref) {
  var checked = _ref.checked,
    _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/React.createElement(_Checkbox["default"], {
      checked: checked,
      onChange: function onChange(e) {
        return _onChange(e.target.checked);
      }
    }),
    label: "Exact"
  });
}