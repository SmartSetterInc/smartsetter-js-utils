"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerifiedPhoneFilterBody;
var _MobilePhoneFilterBody = _interopRequireDefault(require("./MobilePhoneFilterBody"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function VerifiedPhoneFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  return /*#__PURE__*/React.createElement(_MobilePhoneFilterBody["default"], {
    fieldConfig: fieldConfig,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged,
    label: "Verfied Phone"
  });
}