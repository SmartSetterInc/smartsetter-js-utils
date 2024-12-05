"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallSelectOneOrMultiple;
var _SmallAutoComplete = _interopRequireDefault(require("./SmallAutoComplete"));
var _SmallAutoCompleteSelectMultiple = _interopRequireDefault(require("./SmallAutoCompleteSelectMultiple"));
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SmallSelectOneOrMultiple(_ref) {
  var multiple = _ref.multiple,
    label = _ref.label,
    options = _ref.options,
    fieldConfig = _ref.fieldConfig,
    isConfigCompleteFunction = _ref.isConfigCompleteFunction,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  if (multiple) {
    return /*#__PURE__*/React.createElement(_SmallAutoCompleteSelectMultiple["default"], {
      options: options,
      label: label,
      value: fieldConfig.value,
      onChange: function onChange(value) {
        return (0, _utils.broadcastPropertyChange)({
          name: "value",
          value: value
        }, fieldConfig, isConfigCompleteFunction, onPropertyChanged, onConfigCompleteChanged);
      }
    });
  } else {
    return /*#__PURE__*/React.createElement(_SmallAutoComplete["default"], {
      label: label,
      options: options,
      value: fieldConfig.value,
      onChange: function onChange(value) {
        (0, _utils.broadcastPropertyChange)({
          name: "value",
          value: value
        }, fieldConfig, isConfigCompleteFunction, onPropertyChanged, onConfigCompleteChanged);
      }
    });
  }
}