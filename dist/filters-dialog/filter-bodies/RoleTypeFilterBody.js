"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RoleTypeFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _data = require("../../common/data");
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallSelectOneOrMultiple = _interopRequireDefault(require("../components/SmallSelectOneOrMultiple"));
var _data2 = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function RoleTypeFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data2.IS_OPTION, _data2.IS_NOT_OPTION, _data2.IS_ONE_OF_OPTION, _data2.IS_NONE_OF_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: _utils.isConfigComplete4Options,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallSelectOneOrMultiple["default"], {
    multiple: !(0, _utils.isSingleSelection)(fieldConfig),
    fieldConfig: fieldConfig,
    label: "Role Type",
    options: _data.ROLE_TYPES,
    isConfigCompleteFunction: _utils.isConfigComplete4Options,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })));
}