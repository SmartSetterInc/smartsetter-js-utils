"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BrandFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _data = require("../../common/data");
var _ExactCheckbox = _interopRequireDefault(require("../components/ExactCheckbox"));
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallAutoCompleteSelectMultiple = _interopRequireDefault(require("../components/SmallAutoCompleteSelectMultiple"));
var _data2 = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function BrandFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 4
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data2.IS_ONE_OF_OPTION, _data2.IS_NONE_OF_OPTION, _data2.EXISTS_OPTION, _data2.NOT_EXISTS_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: _utils.isConfigCompleteAllOptions,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 2
  }, /*#__PURE__*/React.createElement(_ExactCheckbox["default"], {
    checked: fieldConfig.exact,
    onChange: function onChange(exact) {
      return onPropertyChanged({
        name: "exact",
        value: exact
      });
    }
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallAutoCompleteSelectMultiple["default"], {
    options: _data.BRANDS,
    label: "Brand",
    value: fieldConfig.value,
    onChange: function onChange(brand) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: brand
      }, fieldConfig, _utils.isConfigCompleteAllOptions, onPropertyChanged, onConfigCompleteChanged);
    },
    autoCompleteProps: {
      disabled: (0, _utils.typeExistsOrNot)(fieldConfig),
      freeSolo: true
    }
  })));
}