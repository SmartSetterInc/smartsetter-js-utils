"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EmailFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _SmallTextField = _interopRequireDefault(require("../../common/components/SmallTextField"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function EmailFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    if ((0, _utils.typeExistsOrNot)(newConfig)) {
      return true;
    }
    return !!newConfig.type && !!newConfig.value;
  }
  (0, _utils.useBroadcastDebouncedValue)({
    value: fieldConfig.value,
    fieldConfig: fieldConfig,
    isConfigComplete: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.CONTAINS_OPTION, _data.DOES_NOT_CONTAIN_OPTION, _data.EXISTS_OPTION, _data.NOT_EXISTS_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onConfigCompleteChanged: onConfigCompleteChanged,
    onPropertyChanged: onPropertyChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallTextField["default"], {
    label: "Email",
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return onPropertyChanged({
        name: "value",
        value: value
      });
    },
    textFieldProps: {
      disabled: (0, _utils.typeExistsOrNot)(fieldConfig)
    }
  })));
}