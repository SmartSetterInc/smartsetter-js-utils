import { useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"

import {
  EXISTS_OPTION,
  IS_NOT_OPTION,
  IS_OPTION,
  NOT_EXISTS_OPTION,
  TYPE_OPTION_NAME_MAP,
} from "./data"

export function typeExistsOrNot(config) {
  return (
    [EXISTS_OPTION.value, NOT_EXISTS_OPTION.value].indexOf(config.type) != -1
  )
}

export function broadcastPropertyChange(
  updatedProperty,
  fieldConfig,
  isConfigCompleteFunction,
  onPropertyChanged,
  onConfigCompleteChanged
) {
  const newConfig = {
    ...fieldConfig,
    ...{ [updatedProperty.name]: updatedProperty.value },
  }
  onPropertyChanged(updatedProperty)
  onConfigCompleteChanged(isConfigCompleteFunction(newConfig))
}

export function isSingleSelection(config) {
  return [IS_OPTION.value, IS_NOT_OPTION.value].indexOf(config.type) != -1
}

export function isConfigCompleteAllOptions(newConfig) {
  if (typeExistsOrNot(newConfig)) {
    return true
  }
  return !!newConfig.type && !!newConfig.value && newConfig.value.length > 0
}

export function isConfigComplete4Options(newConfig) {
  if (isSingleSelection(newConfig)) {
    return !!newConfig.type && !!newConfig.value
  } else {
    return !!newConfig.type && !!newConfig.value && newConfig.value.length > 0
  }
}

export function useHandleAutocompleteInputValue(
  fieldConfigProperty,
  optionNameToLabelMap
) {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (fieldConfigProperty) {
      setInputValue(TYPE_OPTION_NAME_MAP[fieldConfigProperty])
    }
  }, [fieldConfigProperty])

  function onInputChange(_, newValue) {
    setInputValue(newValue)
  }

  function isOptionEqualToValue(option, value) {
    if (typeof value === "string") {
      return option.fieldName === value
    }
    return option.id === value.id
  }

  function getOptionLabel(option) {
    if (typeof option === "string") {
      return optionNameToLabelMap[option]
    }
    return option.label
  }

  return {
    inputValue,
    onInputChange,
    isOptionEqualToValue,
    getOptionLabel,
  }
}

export function useBroadcastDebouncedValue({
  value,
  fieldConfig,
  isConfigComplete,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  const debouncedValue = useDebounce(value)

  useEffect(() => {
    broadcastPropertyChange(
      { name: "value", value: debouncedValue },
      fieldConfig,
      isConfigComplete,
      onPropertyChanged,
      onConfigCompleteChanged
    )
  }, [debouncedValue])
}

export function useFiltersState(processFilters = (filters) => filters) {
  const [filters, setFilters] = useState([])
  const [mapFilter, setMapFilter] = useState(null)

  function combineFilters() {
    let combinedFilters = processFilters(filters.slice())
    if (mapFilter) {
      combinedFilters = combinedFilters.concat(mapFilter)
    }
    return combinedFilters
  }

  return {
    filters,
    setFilters,
    mapFilter,
    setMapFilter,
    combineFilters,
  }
}

export function useDialogState() {
  const [isFiltersDialogOpen, setFiltersDialogOpen] = useState(false)

  function openFiltersDialog() {
    setFiltersDialogOpen(true)
  }

  function closeFiltersDialog() {
    setFiltersDialogOpen(false)
  }

  function updateFiltersIfComplete(updateFilters) {
    return (newFilters) => {
      if (newFilters.every(({ _complete }) => _complete)) {
        updateFilters(newFilters)
      }
    }
  }

  return {
    isFiltersDialogOpen,
    openFiltersDialog,
    closeFiltersDialog,
    updateFiltersIfComplete,
  }
}

export function getFieldNameMap(filterFields) {
  return Object.fromEntries(
    filterFields.map((field) => [field.fieldName, field.label])
  )
}
