"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModifiedDateFilterBody;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _utils = require("../../common/utils");
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _data = require("../data");
var _utils2 = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ModifiedDateFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !!newConfig.value;
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
  }, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, {
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return (0, _utils2.broadcastPropertyChange)({
        name: "value",
        value: (0, _utils.formatDateForBackend)(value)
      }, fieldConfig, isConfigComplete, onPropertyChanged, onConfigCompleteChanged);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({
        size: "small"
      }, params));
    }
  })));
}