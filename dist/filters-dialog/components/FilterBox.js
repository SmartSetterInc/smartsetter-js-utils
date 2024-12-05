"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@mui/material/styles");
var _Row = _interopRequireDefault(require("../../common/components/Row"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = (0, _styles.styled)(_Row["default"])(function (_ref) {
  var theme = _ref.theme;
  return {
    alignItems: "center",
    marginBottom: theme.spacing(2)
  };
});