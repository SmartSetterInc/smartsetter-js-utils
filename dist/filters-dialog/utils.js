"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastPropertyChange = broadcastPropertyChange;
exports.getFieldNameMap = getFieldNameMap;
exports.isConfigComplete4Options = isConfigComplete4Options;
exports.isConfigCompleteAllOptions = isConfigCompleteAllOptions;
exports.isSingleSelection = isSingleSelection;
exports.typeExistsOrNot = typeExistsOrNot;
exports.useBroadcastDebouncedValue = useBroadcastDebouncedValue;
exports.useDialogState = useDialogState;
exports.useFiltersState = useFiltersState;
exports.useHandleAutocompleteInputValue = useHandleAutocompleteInputValue;
var _react = require("react");
var _usehooksTs = require("usehooks-ts");
var _data = require("./data");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function typeExistsOrNot(config) {
  return [_data.EXISTS_OPTION.value, _data.NOT_EXISTS_OPTION.value].indexOf(config.type) != -1;
}
function broadcastPropertyChange(updatedProperty, fieldConfig, isConfigCompleteFunction, onPropertyChanged, onConfigCompleteChanged) {
  var newConfig = _objectSpread(_objectSpread({}, fieldConfig), _defineProperty({}, updatedProperty.name, updatedProperty.value));
  onPropertyChanged(updatedProperty);
  onConfigCompleteChanged(isConfigCompleteFunction(newConfig));
}
function isSingleSelection(config) {
  return [_data.IS_OPTION.value, _data.IS_NOT_OPTION.value].indexOf(config.type) != -1;
}
function isConfigCompleteAllOptions(newConfig) {
  if (typeExistsOrNot(newConfig)) {
    return true;
  }
  return !!newConfig.type && !!newConfig.value && newConfig.value.length > 0;
}
function isConfigComplete4Options(newConfig) {
  if (isSingleSelection(newConfig)) {
    return !!newConfig.type && !!newConfig.value;
  } else {
    return !!newConfig.type && !!newConfig.value && newConfig.value.length > 0;
  }
}
function useHandleAutocompleteInputValue(fieldConfigProperty, optionNameToLabelMap) {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  (0, _react.useEffect)(function () {
    if (fieldConfigProperty) {
      setInputValue(_data.TYPE_OPTION_NAME_MAP[fieldConfigProperty]);
    }
  }, [fieldConfigProperty]);
  function onInputChange(_, newValue) {
    setInputValue(newValue);
  }
  function isOptionEqualToValue(option, value) {
    if (typeof value === "string") {
      return option.fieldName === value;
    }
    return option.id === value.id;
  }
  function getOptionLabel(option) {
    if (typeof option === "string") {
      return optionNameToLabelMap[option];
    }
    return option.label;
  }
  return {
    inputValue: inputValue,
    onInputChange: onInputChange,
    isOptionEqualToValue: isOptionEqualToValue,
    getOptionLabel: getOptionLabel
  };
}
function useBroadcastDebouncedValue(_ref) {
  var value = _ref.value,
    fieldConfig = _ref.fieldConfig,
    isConfigComplete = _ref.isConfigComplete,
    onPropertyChanged = _ref.onPropertyChanged,
    onConfigCompleteChanged = _ref.onConfigCompleteChanged;
  var debouncedValue = (0, _usehooksTs.useDebounce)(value);
  (0, _react.useEffect)(function () {
    broadcastPropertyChange({
      name: "value",
      value: debouncedValue
    }, fieldConfig, isConfigComplete, onPropertyChanged, onConfigCompleteChanged);
  }, [debouncedValue]);
}
function useFiltersState() {
  var processFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (filters) {
    return filters;
  };
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filters = _useState4[0],
    setFilters = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    mapFilter = _useState6[0],
    setMapFilter = _useState6[1];
  function combineFilters() {
    var combinedFilters = processFilters(filters.slice());
    if (mapFilter) {
      combinedFilters = combinedFilters.concat(mapFilter);
    }
    return combinedFilters;
  }
  return {
    filters: filters,
    setFilters: setFilters,
    mapFilter: mapFilter,
    setMapFilter: setMapFilter,
    combineFilters: combineFilters
  };
}
function useDialogState() {
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFiltersDialogOpen = _useState8[0],
    setFiltersDialogOpen = _useState8[1];
  function openFiltersDialog() {
    setFiltersDialogOpen(true);
  }
  function closeFiltersDialog() {
    setFiltersDialogOpen(false);
  }
  function updateFiltersIfComplete(updateFilters) {
    return function (newFilters) {
      if (newFilters.every(function (_ref2) {
        var _complete = _ref2._complete;
        return _complete;
      })) {
        updateFilters(newFilters);
      }
    };
  }
  return {
    isFiltersDialogOpen: isFiltersDialogOpen,
    openFiltersDialog: openFiltersDialog,
    closeFiltersDialog: closeFiltersDialog,
    updateFiltersIfComplete: updateFiltersIfComplete
  };
}
function getFieldNameMap(filterFields) {
  return Object.fromEntries(filterFields.map(function (field) {
    return [field.fieldName, field.label];
  }));
}