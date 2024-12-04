import { format } from "date-fns"
import { useState } from "react"

import { noAuthAxios } from "./axios"

export function formatNumber(n) {
  n = n || 0
  return Number(n).toLocaleString()
}

export function formatDateForBackend(date) {
  return date && format(date, "yyyy-MM-d")
}

export function formatExportFileDate() {
  return format(new Date(), "MMM dd yyyy")
}

export function formatDate(dateStr) {
  return format(new Date(dateStr), "yyyy/MM/d")
}

export function useLoadCampaignsAccountManagers() {
  const [availableCampaigns, setAvailableCampaigns] = useState([])
  const [availableAccountManagers, setAvailableAccountManagers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function loadCampaignsAccountManagers() {
    setIsLoading(true)
    return noAuthAxios
      .get("/campaigns/api/realtors/export/vici/data/")
      .then(({ data: { campaigns, account_managers } }) => {
        setAvailableCampaigns(campaigns)
        setAvailableAccountManagers(account_managers)
      })
      .finally(() => setIsLoading(false))
  }
  return {
    availableAccountManagers,
    availableCampaigns,
    isLoading,
    loadCampaignsAccountManagers,
  }
}

export function backendParamTrueOrFalse(param) {
  return param ? "true" : "false"
}

export function useSelectedAccountManager() {
  const ACCOUNT_MANAGER_STORAGE_KEY = "accountManager"
  const [selectedAccountManager, setSelectedAccountManager] = useState(null)

  function handleAccountManagerChanged(newAccountManager) {
    localStorage.setItem(ACCOUNT_MANAGER_STORAGE_KEY, newAccountManager)
    setSelectedAccountManager(newAccountManager)
  }

  function loadStorageAccountManager() {
    setSelectedAccountManager(
      localStorage.getItem(ACCOUNT_MANAGER_STORAGE_KEY) || ""
    )
  }
  return {
    selectedAccountManager,
    loadStorageAccountManager,
    handleAccountManagerChanged,
  }
}

export function getIsInIFrame() {
  return window.top !== window.self
}

export function formatCurrency(value) {
  return value ? `$${value.toLocaleString()}` : ""
}
