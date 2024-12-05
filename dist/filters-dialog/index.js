"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FiltersDialog;
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _Unstable_Grid = _interopRequireDefault(require("@mui/material/Unstable_Grid2"));
var _react = require("react");
var _DeleteFilterButton = _interopRequireDefault(require("./components/DeleteFilterButton"));
var _FilterBox = _interopRequireDefault(require("./components/FilterBox"));
var _SmallAutoComplete = _interopRequireDefault(require("./components/SmallAutoComplete"));
var _utils = require("./utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function FiltersDialog(_ref) {
  var open = _ref.open,
    onClosed = _ref.onClosed,
    parentFilters = _ref.parentFilters,
    onFiltersUpdated = _ref.onFiltersUpdated,
    onFiltersCleared = _ref.onFiltersCleared,
    extraFilter = _ref.extraFilter,
    filterTypes = _ref.filterTypes,
    fieldNameToComponentMap = _ref.fieldNameToComponentMap;
  var _useState = (0, _react.useState)(parentFilters),
    _useState2 = _slicedToArray(_useState, 2),
    filtersData = _useState2[0],
    setFiltersData = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    nextUniqueFilterID = _useState4[0],
    setNextUniqueFilterID = _useState4[1];
  function handleAddFilterButtonClicked() {
    var newFilters = filtersData.slice();
    newFilters.push({
      _id: nextUniqueFilterID
    });
    setFiltersData(newFilters);
    setNextUniqueFilterID(nextUniqueFilterID + 1);
  }
  function handleRemoveFilterButtonClickedWrapper(rowIndex) {
    return function () {
      var newFilters = filtersData.slice();
      newFilters.splice(rowIndex, 1);
      setFiltersData(newFilters);
      onFiltersUpdated(newFilters);
    };
  }
  function handleFilterSelectedWrapper(rowIndex) {
    return function (value) {
      var newFilters = filtersData.slice();
      var existingFilterID = newFilters[rowIndex]._id;
      newFilters[rowIndex] = {
        _id: existingFilterID || nextUniqueFilterID,
        field: value.fieldName,
        type: undefined,
        value: undefined,
        exact: false,
        _complete: false
      };
      setFiltersData(newFilters);
    };
  }
  function handleFilterPropertyChangedWrapper(rowIndex) {
    return function (property) {
      var filterDataInUpdate = filtersData[rowIndex];
      filterDataInUpdate[property.name] = property.value;
      var newFilters = filtersData.slice();
      setFiltersData(newFilters);
      if (property.name == "exact") {
        onFiltersUpdated(newFilters);
      }
    };
  }
  function handleFilterConfigCompleteChangedWrapper(rowIndex) {
    return function (isConfigComplete) {
      var newFilters = filtersData.slice();
      newFilters[rowIndex]._complete = isConfigComplete;
      setFiltersData(newFilters);
      onFiltersUpdated(newFilters);
    };
  }
  (0, _react.useEffect)(function () {
    setFiltersData(parentFilters.map(function (filterData, index) {
      return _objectSpread(_objectSpread({}, filterData), {}, {
        _id: index + 1,
        _complete: true
      });
    }));
    setNextUniqueFilterID(parentFilters.length + 1);
  }, [parentFilters]);
  return /*#__PURE__*/React.createElement(_Dialog["default"], {
    open: open,
    fullWidth: true,
    maxWidth: "md",
    keepMounted: true,
    "aria-describedby": "Modal to add leads filters"
  }, /*#__PURE__*/React.createElement(_DialogContent["default"], {
    sx: {
      pb: 1,
      px: 2
    }
  }, filtersData.length == 0 && !extraFilter ? /*#__PURE__*/React.createElement(_DialogContentText["default"], {
    sx: {
      textAlign: "center"
    }
  }, "Add filters by pressing the ", /*#__PURE__*/React.createElement("strong", null, "Add"), " button \u2198\uFE0F") : /*#__PURE__*/React.createElement(FilterRows, {
    filterTypes: filterTypes,
    filtersData: filtersData,
    fieldNameToComponentMap: fieldNameToComponentMap,
    onFilterTypeChanged: handleFilterSelectedWrapper,
    onFilterPropertyChanged: handleFilterPropertyChangedWrapper,
    onFilterConfigCompleteChanged: handleFilterConfigCompleteChangedWrapper,
    onRemoveFilter: handleRemoveFilterButtonClickedWrapper
  }), extraFilter), /*#__PURE__*/React.createElement(_DialogActions["default"], null, /*#__PURE__*/React.createElement(_Button["default"], {
    variant: "text",
    color: "primary",
    onClick: onFiltersCleared
  }, "Clear"), /*#__PURE__*/React.createElement(_Button["default"], {
    variant: "outlined",
    color: "primary",
    onClick: onClosed
  }, "Close"), /*#__PURE__*/React.createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    endIcon: /*#__PURE__*/React.createElement(_Add["default"], null),
    disabled: !filtersData.every(function (_ref2) {
      var _complete = _ref2._complete;
      return _complete;
    }),
    onClick: handleAddFilterButtonClicked
  }, "Add")));
}
function FilterBodyComponent(_ref3) {
  var fieldConfig = _ref3.fieldConfig,
    onPropertyChanged = _ref3.onPropertyChanged,
    onConfigCompleteChanged = _ref3.onConfigCompleteChanged,
    fieldNameToComponentMap = _ref3.fieldNameToComponentMap;
  var Component = fieldNameToComponentMap[fieldConfig.field];
  if (!Component) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Component, {
    fieldConfig: fieldConfig,
    onPropertyChanged: onPropertyChanged,
    onConfigCompleteChanged: onConfigCompleteChanged
  });
}
function FilterRows(_ref4) {
  var filterTypes = _ref4.filterTypes,
    filtersData = _ref4.filtersData,
    fieldNameToComponentMap = _ref4.fieldNameToComponentMap,
    onFilterTypeChanged = _ref4.onFilterTypeChanged,
    onFilterPropertyChanged = _ref4.onFilterPropertyChanged,
    onFilterConfigCompleteChanged = _ref4.onFilterConfigCompleteChanged,
    onRemoveFilter = _ref4.onRemoveFilter;
  return filtersData.map(function (filterData, index) {
    return /*#__PURE__*/React.createElement(FilterRow, {
      key: index,
      filterData: filterData,
      filterTypes: filterTypes,
      fieldNameToComponentMap: fieldNameToComponentMap,
      onFilterTypeChanged: onFilterTypeChanged,
      onFilterPropertyChanged: onFilterPropertyChanged,
      onFilterConfigCompleteChanged: onFilterConfigCompleteChanged,
      onRemoveFilter: onRemoveFilter,
      index: index
    });
  });
}
function FilterRow(_ref5) {
  var filterData = _ref5.filterData,
    filterTypes = _ref5.filterTypes,
    fieldNameToComponentMap = _ref5.fieldNameToComponentMap,
    onFilterTypeChanged = _ref5.onFilterTypeChanged,
    onFilterPropertyChanged = _ref5.onFilterPropertyChanged,
    onFilterConfigCompleteChanged = _ref5.onFilterConfigCompleteChanged,
    onRemoveFilter = _ref5.onRemoveFilter,
    index = _ref5.index;
  var _useHandleAutocomplet = (0, _utils.useHandleAutocompleteInputValue)(filterData.filter, (0, _utils.getFieldNameMap)(filterTypes)),
    inputValue = _useHandleAutocomplet.inputValue,
    onInputChange = _useHandleAutocomplet.onInputChange,
    isOptionEqualToValue = _useHandleAutocomplet.isOptionEqualToValue,
    getOptionLabel = _useHandleAutocomplet.getOptionLabel;
  var filterTypeSelected = Object.keys(filterData).length > 1;
  return /*#__PURE__*/React.createElement(_FilterBox["default"], {
    key: filterData._id
  }, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    xs: filterTypeSelected ? 4 : 12
  }, /*#__PURE__*/React.createElement(_SmallAutoComplete["default"], {
    options: filterTypes,
    label: "Field",
    value: filterData.field,
    onChange: onFilterTypeChanged(index),
    autoCompleteProps: {
      inputValue: inputValue,
      onInputChange: onInputChange,
      isOptionEqualToValue: isOptionEqualToValue,
      getOptionLabel: getOptionLabel
    }
  })), filterTypeSelected && /*#__PURE__*/React.createElement(_Unstable_Grid["default"], {
    container: true,
    xs: 8
  }, /*#__PURE__*/React.createElement(FilterBodyComponent, {
    fieldConfig: filterData,
    onPropertyChanged: onFilterPropertyChanged(index),
    onConfigCompleteChanged: onFilterConfigCompleteChanged(index),
    fieldNameToComponentMap: fieldNameToComponentMap
  }))), /*#__PURE__*/React.createElement(_DeleteFilterButton["default"], {
    onClick: onRemoveFilter(index)
  }));
}