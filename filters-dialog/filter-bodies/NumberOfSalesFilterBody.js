import Grid from "@mui/material/Unstable_Grid2"

import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallNumberInput from "../components/SmallNumberInput"
import { GREATER_THAN_OPTION, LESS_THAN_OPTION } from "../data"

export default function NumberOfSalesFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !isNaN(parseInt(newConfig.value))
  }

  return (
    <>
      <Grid xs={6}>
        <FilterTypeSmallAutoComplete
          typeOptions={[GREATER_THAN_OPTION, LESS_THAN_OPTION]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
      <Grid xs={6}>
        <SmallNumberInput
          label="Number Of Sales (#)"
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
    </>
  )
}
