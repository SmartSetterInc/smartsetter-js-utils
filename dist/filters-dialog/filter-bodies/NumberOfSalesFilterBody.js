"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NumberOfSalesFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallNumberInput = _interopRequireDefault(require("../components/SmallNumberInput"));
var _data = require("../data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function NumberOfSalesFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !isNaN(parseInt(newConfig.value));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.GREATER_THAN_OPTION, _data.LESS_THAN_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallNumberInput["default"], {
    label: "Number Of Sales (#)",
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })));
}