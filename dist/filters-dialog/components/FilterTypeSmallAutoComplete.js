"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FilterTypeSmallAutoComplete;
var _data = require("../data");
var _utils = require("../utils");
var _SmallAutoComplete = _interopRequireDefault(require("./SmallAutoComplete"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function FilterTypeSmallAutoComplete(_ref) {
  var typeOptions = _ref.typeOptions,
    fieldConfig = _ref.fieldConfig,
    isConfigCompleteFunction = _ref.isConfigCompleteFunction,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  var _useHandleAutocomplet = (0, _utils.useHandleAutocompleteInputValue)(fieldConfig.type, _data.TYPE_OPTION_NAME_MAP),
    inputValue = _useHandleAutocomplet.inputValue,
    onInputChange = _useHandleAutocomplet.onInputChange,
    isOptionEqualToValue = _useHandleAutocomplet.isOptionEqualToValue,
    getOptionLabel = _useHandleAutocomplet.getOptionLabel;
  return /*#__PURE__*/React.createElement(_SmallAutoComplete["default"], {
    options: typeOptions,
    label: "Type",
    value: fieldConfig.type,
    onChange: function onChange(value) {
      return (0, _utils.broadcastPropertyChange)({
        name: "type",
        value: value && value.value
      }, fieldConfig, isConfigCompleteFunction, onPropertyChanged, onConfigCompleteChanged);
    },
    autoCompleteProps: {
      inputValue: inputValue,
      onInputChange: onInputChange,
      isOptionEqualToValue: isOptionEqualToValue,
      getOptionLabel: getOptionLabel
    }
  });
}