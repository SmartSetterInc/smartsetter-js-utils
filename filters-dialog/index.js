import AddIcon from "@mui/icons-material/Add"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Grid from "@mui/material/Unstable_Grid2"
import { useEffect, useState } from "react"

import DeleteFilterButton from "./components/DeleteFilterButton"
import FilterBox from "./components/FilterBox"
import SmallAutocomplete from "./components/SmallAutoComplete"
import { getFieldNameMap, useHandleAutocompleteInputValue } from "./utils"

export default function FiltersDialog({
  open,
  onClosed,
  parentFilters,
  onFiltersUpdated,
  onFiltersCleared,
  extraFilter,
  filterTypes,
  fieldNameToComponentMap,
}) {
  const [filtersData, setFiltersData] = useState(parentFilters)
  const [nextUniqueFilterID, setNextUniqueFilterID] = useState(1)

  function handleAddFilterButtonClicked() {
    const newFilters = filtersData.slice()
    newFilters.push({ _id: nextUniqueFilterID })
    setFiltersData(newFilters)
    setNextUniqueFilterID(nextUniqueFilterID + 1)
  }

  function handleRemoveFilterButtonClickedWrapper(rowIndex) {
    return function () {
      const newFilters = filtersData.slice()
      newFilters.splice(rowIndex, 1)
      setFiltersData(newFilters)
      onFiltersUpdated(newFilters)
    }
  }

  function handleFilterSelectedWrapper(rowIndex) {
    return function (value) {
      const newFilters = filtersData.slice()
      const existingFilterID = newFilters[rowIndex]._id
      newFilters[rowIndex] = {
        _id: existingFilterID || nextUniqueFilterID,
        field: value.fieldName,
        type: undefined,
        value: undefined,
        exact: false,
        _complete: false,
      }
      setFiltersData(newFilters)
    }
  }

  function handleFilterPropertyChangedWrapper(rowIndex) {
    return function (property) {
      const filterDataInUpdate = filtersData[rowIndex]
      filterDataInUpdate[property.name] = property.value
      const newFilters = filtersData.slice()
      setFiltersData(newFilters)
      if (property.name == "exact") {
        onFiltersUpdated(newFilters)
      }
    }
  }

  function handleFilterConfigCompleteChangedWrapper(rowIndex) {
    return function (isConfigComplete) {
      const newFilters = filtersData.slice()
      newFilters[rowIndex]._complete = isConfigComplete
      setFiltersData(newFilters)
      onFiltersUpdated(newFilters)
    }
  }

  useEffect(() => {
    setFiltersData(
      parentFilters.map((filterData, index) => ({
        ...filterData,
        _id: index + 1,
        _complete: true,
      }))
    )
    setNextUniqueFilterID(parentFilters.length + 1)
  }, [parentFilters])

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      keepMounted
      aria-describedby="Modal to add leads filters"
    >
      <DialogContent
        sx={{
          pb: 1,
          px: 2,
        }}
      >
        {filtersData.length == 0 && !extraFilter ? (
          <DialogContentText sx={{ textAlign: "center" }}>
            Add filters by pressing the <strong>Add</strong> button ↘️
          </DialogContentText>
        ) : (
          <FilterRows
            filterTypes={filterTypes}
            filtersData={filtersData}
            fieldNameToComponentMap={fieldNameToComponentMap}
            onFilterTypeChanged={handleFilterSelectedWrapper}
            onFilterPropertyChanged={handleFilterPropertyChangedWrapper}
            onFilterConfigCompleteChanged={
              handleFilterConfigCompleteChangedWrapper
            }
            onRemoveFilter={handleRemoveFilterButtonClickedWrapper}
          />
        )}
        {extraFilter}
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="primary" onClick={onFiltersCleared}>
          Clear
        </Button>
        <Button variant="outlined" color="primary" onClick={onClosed}>
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddIcon />}
          disabled={!filtersData.every(({ _complete }) => _complete)}
          onClick={handleAddFilterButtonClicked}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function FilterBodyComponent({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
  fieldNameToComponentMap,
}) {
  const Component = fieldNameToComponentMap[fieldConfig.field]
  if (!Component) {
    return null
  }
  return (
    <Component
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
    />
  )
}

function FilterRows({
  filterTypes,
  filtersData,
  fieldNameToComponentMap,
  onFilterTypeChanged,
  onFilterPropertyChanged,
  onFilterConfigCompleteChanged,
  onRemoveFilter,
}) {
  return filtersData.map((filterData, index) => (
    <FilterRow
      key={index}
      filterData={filterData}
      filterTypes={filterTypes}
      fieldNameToComponentMap={fieldNameToComponentMap}
      onFilterTypeChanged={onFilterTypeChanged}
      onFilterPropertyChanged={onFilterPropertyChanged}
      onFilterConfigCompleteChanged={onFilterConfigCompleteChanged}
      onRemoveFilter={onRemoveFilter}
      index={index}
    />
  ))
}

function FilterRow({
  filterData,
  filterTypes,
  fieldNameToComponentMap,
  onFilterTypeChanged,
  onFilterPropertyChanged,
  onFilterConfigCompleteChanged,
  onRemoveFilter,
  index,
}) {
  const { inputValue, onInputChange, isOptionEqualToValue, getOptionLabel } =
    useHandleAutocompleteInputValue(
      filterData.filter,
      getFieldNameMap(filterTypes)
    )
  const filterTypeSelected = Object.keys(filterData).length > 1
  return (
    <FilterBox key={filterData._id}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={filterTypeSelected ? 4 : 12}>
          <SmallAutocomplete
            options={filterTypes}
            label="Field"
            value={filterData.field}
            onChange={onFilterTypeChanged(index)}
            autoCompleteProps={{
              inputValue,
              onInputChange,
              isOptionEqualToValue,
              getOptionLabel,
            }}
          />
        </Grid>
        {filterTypeSelected && (
          <Grid container xs={8}>
            <FilterBodyComponent
              fieldConfig={filterData}
              onPropertyChanged={onFilterPropertyChanged(index)}
              onConfigCompleteChanged={onFilterConfigCompleteChanged(index)}
              fieldNameToComponentMap={fieldNameToComponentMap}
            />
          </Grid>
        )}
      </Grid>
      <DeleteFilterButton onClick={onRemoveFilter(index)} />
    </FilterBox>
  )
}
