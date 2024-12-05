"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MLSLegalNameFilterBody;
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _react = require("react");
var _axios = require("../../common/axios");
var _FilterTypeSmallAutoComplete = _interopRequireDefault(require("../components/FilterTypeSmallAutoComplete"));
var _SmallAutoCompleteSelectMultiple = _interopRequireDefault(require("../components/SmallAutoCompleteSelectMultiple"));
var _data = require("../data");
var _utils = require("../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function MLSLegalNameFilterBody(_ref) {
  var fieldConfig = _ref.fieldConfig,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    availableMLS = _useState2[0],
    setAvailableMLS = _useState2[1];
  function isConfigComplete(newConfig) {
    if ((0, _utils.typeExistsOrNot)(newConfig)) {
      return true;
    } else {
      return !!newConfig.type && !!newConfig.value;
    }
  }
  (0, _utils.useBroadcastDebouncedValue)({
    value: fieldConfig.value,
    fieldConfig: fieldConfig,
    isConfigComplete: isConfigComplete,
    onConfigCompleteChanged: onConfigCompleteChanged,
    onPropertyChanged: onPropertyChanged
  });
  (0, _react.useEffect)(function () {
    _axios.noAuthAxios.get("/campaigns/api/mls-names/").then(function (_ref2) {
      var data = _ref2.data;
      return setAvailableMLS(data.mls_names);
    });
  },
  // eslint-disable-next-line
  []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_FilterTypeSmallAutoComplete["default"], {
    typeOptions: [_data.IS_ONE_OF_OPTION, _data.IS_NONE_OF_OPTION, _data.EXISTS_OPTION, _data.NOT_EXISTS_OPTION],
    fieldConfig: fieldConfig,
    isConfigCompleteFunction: _utils.isConfigCompleteAllOptions,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  })), /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: 6
  }, /*#__PURE__*/React.createElement(_SmallAutoCompleteSelectMultiple["default"], {
    label: "MLS Legal Name",
    options: availableMLS,
    value: fieldConfig.value,
    onChange: function onChange(mls) {
      return (0, _utils.broadcastPropertyChange)({
        name: "value",
        value: mls
      }, fieldConfig, _utils.isConfigCompleteAllOptions, onPropertyChanged, onConfigCompleteChanged);
    },
    autoCompleteProps: {
      disabled: (0, _utils.typeExistsOrNot)(fieldConfig),
      freeSolo: true
    }
  })));
}