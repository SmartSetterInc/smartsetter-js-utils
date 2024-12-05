"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvailableMLSContext = void 0;
exports["default"] = MLSIDFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _react = require("react");
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallAutoComplete = _interopRequireDefault(require("../components/SmallAutoComplete"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function MLSIDFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  var availableMLS = (0, _react.useContext)(AvailableMLSContext);
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
    xs: 8
  }, /*#__PURE__*/React.createElement(_SmallAutoComplete["default"], {
    options: availableMLS.map(function (mls) {
      return {
        id: mls.id,
        label: mls.name
      };
    }),
    label: "MLS",
    value: fieldConfig.value,
    onChange: function onChange(value) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: value
      }, fieldConfig, isConfigComplete, onPropertyChanged, onConfigCompleteChanged);
    },
    autoCompleteProps: {
      isOptionEqualToValue: function isOptionEqualToValue(option, value) {
        return option.id === value.id;
      }
    }
  })));
}
var AvailableMLSContext = exports.AvailableMLSContext = /*#__PURE__*/(0, _react.createContext)([]);