"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = YearsInBusinessFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallNumberInput = _interopRequireDefault(require("../components/SmallNumberInput"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function YearsInBusinessFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    if ((0, _utils.typeExistsOrNot)(newConfig)) {
      return true;
    }
    return !!newConfig.type && !isNaN(parseInt(newConfig.value));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.GREATER_THAN_OPTION, _data.LESS_THAN_OPTION, _data.EXISTS_OPTION, _data.NOT_EXISTS_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallNumberInput["default"], {
    label: "Years",
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged,
    textFieldProps: {
      disabled: (0, _utils.typeExistsOrNot)(fieldConfig)
    }
  })));
}