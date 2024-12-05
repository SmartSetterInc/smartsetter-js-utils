"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OfficeNameFilterBody;
var _FourOptionWithExactAndWeirdTextFieldFilterBody = _interopRequireDefault(require("./FourOptionWithExactAndWeirdTextFieldFilterBody"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function OfficeNameFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  return /*#__PURE__*/React.createElement(_FourOptionWithExactAndWeirdTextFieldFilterBody["default"], {
    label: "Office",
    fieldConfig: fieldConfig,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  });
}