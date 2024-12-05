"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FourOptionWithExactAndWeirdTextFieldFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _CommaSeparatedTextField = _interopRequireDefault(require("../components/CommaSeparatedTextField"));
var _ExactCheckbox = _interopRequireDefault(require("../components/ExactCheckbox"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function FourOptionWithExactAndWeirdTextFieldFilterBody(_ref) {
  var label = _ref.label,
    fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 4
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.IS_OPTION, _data.IS_NOT_OPTION, _data.IS_ONE_OF_OPTION, _data.IS_NONE_OF_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: _utils.isConfigComplete4Options,
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
  }, /*#__PURE__*/React.createElement(_CommaSeparatedTextField["default"], {
    simple: (0, _utils.isSingleSelection)(fieldConfig),
    label: label,
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: value
      }, fieldConfig, _utils.isConfigComplete4Options, onPropertyChanged, onConfigCompleteChanged);
    }
  })));
}