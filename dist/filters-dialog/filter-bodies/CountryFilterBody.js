"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CountryFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _ExactCheckbox = _interopRequireDefault(require("../components/ExactCheckbox"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallAutoComplete = _interopRequireDefault(require("../components/SmallAutoComplete"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function CountryFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !!newConfig.value;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 4
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.IS_OPTION, _data.IS_NOT_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 2
  }, /*#__PURE__*/React.createElement(_ExactCheckbox["default"], {
    checked: fieldConfig.exact,
    onChange: function onChange(value) {
      return onPropertyChanged({
        name: "exact",
        value: value
      });
    }
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallAutoComplete["default"], {
    options: _data.COUNTRIES,
    label: "Country",
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: value
      }, fieldConfig, isConfigComplete, onPropertyChanged, onConfigCompleteChanged);
    }
  })));
}