"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MobilePhoneFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _CommaSeparatedTextField = _interopRequireDefault(require("../components/CommaSeparatedTextField"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function MobilePhoneFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Mobile Phone" : _ref$label;
  function isConfigComplete(newConfig) {
    if ((0, _utils.typeExistsOrNot)(newConfig)) {
      return true;
    } else {
      return (0, _utils.isConfigComplete4Options)(newConfig);
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 4
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.IS_OPTION, _data.IS_NOT_OPTION, _data.IS_ONE_OF_OPTION, _data.IS_NONE_OF_OPTION, _data.EXISTS_OPTION, _data.NOT_EXISTS_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: isConfigComplete,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 8
  }, !(0, _utils.typeExistsOrNot)(fieldConfig) && /*#__PURE__*/React.createElement(_CommaSeparatedTextField["default"], {
    label: label,
    simple: (0, _utils.isSingleSelection)(fieldConfig),
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: value
      }, fieldConfig, isConfigComplete, onPropertyChanged, onConfigCompleteChanged);
    }
  })));
}