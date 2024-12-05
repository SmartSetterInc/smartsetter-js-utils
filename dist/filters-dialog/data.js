"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE_OPTION_NAME_MAP = exports.TYPE_OPTIONS = exports.REALITY_FIELD_NAMES = exports.NOT_EXISTS_OPTION = exports.LESS_THAN_OPTION = exports.IS_OPTION = exports.IS_ONE_OF_OPTION = exports.IS_NOT_OPTION = exports.IS_NONE_OF_OPTION = exports.GREATER_THAN_OPTION = exports.FilterField = exports.EXISTS_OPTION = exports.DOES_NOT_CONTAIN_OPTION = exports.COUNTRIES = exports.CONTAINS_OPTION = void 0;
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var FilterField = exports.FilterField = /*#__PURE__*/_createClass(function FilterField(fieldName, label) {
  _classCallCheck(this, FilterField);
  this.fieldName = fieldName;
  this.label = label;
});
var Option = /*#__PURE__*/_createClass(function Option(id, label, value) {
  _classCallCheck(this, Option);
  this.id = id;
  this.label = label;
  this.value = value;
});
var IS_OPTION = exports.IS_OPTION = new Option("is", "Is", "is");
var CONTAINS_OPTION = exports.CONTAINS_OPTION = new Option("contains", "Contains", "contains");
var IS_NOT_OPTION = exports.IS_NOT_OPTION = new Option("is_not", "Is not", "is_not");
var DOES_NOT_CONTAIN_OPTION = exports.DOES_NOT_CONTAIN_OPTION = new Option("not_contains", "Not contains", "contains");
var IS_ONE_OF_OPTION = exports.IS_ONE_OF_OPTION = new Option("is_one_of", "Is one of", "is_one_of");
var IS_NONE_OF_OPTION = exports.IS_NONE_OF_OPTION = new Option("is_none_of", "Is none of", "is_none_of");
var GREATER_THAN_OPTION = exports.GREATER_THAN_OPTION = new Option("gt", "Greater than", "gt");
var LESS_THAN_OPTION = exports.LESS_THAN_OPTION = new Option("lt", "Less than", "lt");
var EXISTS_OPTION = exports.EXISTS_OPTION = new Option("exists", "Exists", "exists");
var NOT_EXISTS_OPTION = exports.NOT_EXISTS_OPTION = new Option("not_exists", "Not exists", "not_exists");
var TYPE_OPTIONS = exports.TYPE_OPTIONS = [IS_OPTION, CONTAINS_OPTION, IS_NOT_OPTION, DOES_NOT_CONTAIN_OPTION, IS_ONE_OF_OPTION, IS_NONE_OF_OPTION, GREATER_THAN_OPTION, LESS_THAN_OPTION, EXISTS_OPTION, NOT_EXISTS_OPTION];
var TYPE_OPTION_NAME_MAP = exports.TYPE_OPTION_NAME_MAP = Object.fromEntries(TYPE_OPTIONS.map(function (option) {
  return [option.id, option.label];
}));
var COUNTRIES = exports.COUNTRIES = ["US", "CA"];
var REALITY_FIELD_NAMES = exports.REALITY_FIELD_NAMES = {
  MLS_ID: "mls_id",
  NO_OF_SALES: "sales_count",
  SALES_VOLUME: "total_dollar_ltm",
  CITY: "city",
  EMAIL: "email",
  PHONE: "phone",
  VERIFIED_PHONE: "verified_phone",
  OFFICE_NAME: "office_name",
  BRAND: "brand__code",
  STATE: "state",
  ZIPCODE: "zipcode",
  YEARS_IN_BUSINESS: "years_in_business"
};