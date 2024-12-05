"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextAutocomplete;
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextAutocomplete(_ref) {
  var label = _ref.label,
    options = _ref.options,
    value = _ref.value,
    _onChange = _ref.onChange,
    autoCompleteProps = _ref.autoCompleteProps;
  return /*#__PURE__*/React.createElement(_Autocomplete["default"], _extends({
    options: options,
    value: value,
    onChange: function onChange(_, value) {
      return _onChange(value);
    },
    renderInput: function renderInput(props) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({}, props, {
        label: label
      }));
    }
  }, autoCompleteProps));
}