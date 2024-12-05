"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _default = exports["default"] = (0, _styles.styled)(function (props) {
  return /*#__PURE__*/React.createElement(_IconButton["default"], _extends({
    color: "error",
    title: "Delete"
  }, props), /*#__PURE__*/React.createElement(_Delete["default"], null));
})(function () {
  return {};
});