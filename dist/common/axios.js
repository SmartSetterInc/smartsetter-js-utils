"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noAuthAxios = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var noAuthAxios = exports.noAuthAxios = _axios["default"].create({
  baseURL: process.env.REACT_APP_API_URL
});