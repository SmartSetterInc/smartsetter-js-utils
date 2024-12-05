"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backendParamTrueOrFalse = backendParamTrueOrFalse;
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.formatDateForBackend = formatDateForBackend;
exports.formatExportFileDate = formatExportFileDate;
exports.formatNumber = formatNumber;
exports.getIsInIFrame = getIsInIFrame;
exports.useLoadCampaignsAccountManagers = useLoadCampaignsAccountManagers;
exports.useSelectedAccountManager = useSelectedAccountManager;
var _dateFns = require("date-fns");
var _react = require("react");
var _axios = require("./axios");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function formatNumber(n) {
  n = n || 0;
  return Number(n).toLocaleString();
}
function formatDateForBackend(date) {
  return date && (0, _dateFns.format)(date, "yyyy-MM-d");
}
function formatExportFileDate() {
  return (0, _dateFns.format)(new Date(), "MMM dd yyyy");
}
function formatDate(dateStr) {
  return (0, _dateFns.format)(new Date(dateStr), "yyyy/MM/d");
}
function useLoadCampaignsAccountManagers() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    availableCampaigns = _useState2[0],
    setAvailableCampaigns = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    availableAccountManagers = _useState4[0],
    setAvailableAccountManagers = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  function loadCampaignsAccountManagers() {
    setIsLoading(true);
    return _axios.noAuthAxios.get("/campaigns/api/realtors/export/vici/data/").then(function (_ref) {
      var _ref$data = _ref.data,
        campaigns = _ref$data.campaigns,
        account_managers = _ref$data.account_managers;
      setAvailableCampaigns(campaigns);
      setAvailableAccountManagers(account_managers);
    })["finally"](function () {
      return setIsLoading(false);
    });
  }
  return {
    availableAccountManagers: availableAccountManagers,
    availableCampaigns: availableCampaigns,
    isLoading: isLoading,
    loadCampaignsAccountManagers: loadCampaignsAccountManagers
  };
}
function backendParamTrueOrFalse(param) {
  return param ? "true" : "false";
}
function useSelectedAccountManager() {
  var ACCOUNT_MANAGER_STORAGE_KEY = "accountManager";
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedAccountManager = _useState8[0],
    setSelectedAccountManager = _useState8[1];
  function handleAccountManagerChanged(newAccountManager) {
    localStorage.setItem(ACCOUNT_MANAGER_STORAGE_KEY, newAccountManager);
    setSelectedAccountManager(newAccountManager);
  }
  function loadStorageAccountManager() {
    setSelectedAccountManager(localStorage.getItem(ACCOUNT_MANAGER_STORAGE_KEY) || "");
  }
  return {
    selectedAccountManager: selectedAccountManager,
    loadStorageAccountManager: loadStorageAccountManager,
    handleAccountManagerChanged: handleAccountManagerChanged
  };
}
function getIsInIFrame() {
  return window.top !== window.self;
}
function formatCurrency(value) {
  return value ? "$".concat(value.toLocaleString()) : "";
}