"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallAutocompleteSelectMultiple;
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SmallAutocompleteSelectMultiple(_ref) {
  var options = _ref.options,
    label = _ref.label,
    value = _ref.value,
    _onChange = _ref.onChange,
    autoCompleteProps = _ref.autoCompleteProps;
  var renderTagsForSelectMultiple = function renderTagsForSelectMultiple(value, getTagProps) {
    return value.map(function (option, index) {
      return /*#__PURE__*/React.createElement(_Chip["default"], _extends({
        key: index,
        variant: "filled",
        label: option,
        size: "small"
      }, getTagProps({
        index: index
      })));
    });
  };
  return /*#__PURE__*/React.createElement(_Autocomplete["default"], _extends({
    multiple: true,
    filterSelectedOptions: true,
    limitTags: 2,
    size: "small",
    options: options,
    value: value,
    onChange: function onChange(_, value) {
      return _onChange(value);
    },
    renderInput: function renderInput(props) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({}, props, {
        label: label
      }));
    },
    renderTags: renderTagsForSelectMultiple,
    sx: {
      width: "100%"
    }
  }, autoCompleteProps));
}