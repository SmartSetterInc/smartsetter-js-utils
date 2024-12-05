import Grid from "@mui/material/Unstable_Grid2"

import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallNumberInput from "../components/SmallNumberInput"
import {
  EXISTS_OPTION,
  GREATER_THAN_OPTION,
  LESS_THAN_OPTION,
  NOT_EXISTS_OPTION,
} from "../data"
import { typeExistsOrNot } from "../utils"

export default function YearsInBusinessFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    if (typeExistsOrNot(newConfig)) {
      return true
    }
    return !!newConfig.type && !isNaN(parseInt(newConfig.value))
  }
  return (
    <>
      <Grid xs={6}>
        <FilterTypeSmallAutoComplete
          typeOptions={[
            GREATER_THAN_OPTION,
            LESS_THAN_OPTION,
            EXISTS_OPTION,
            NOT_EXISTS_OPTION,
          ]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
      <Grid xs={6}>
        <SmallNumberInput
          label="Years"
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
          textFieldProps={{ disabled: typeExistsOrNot(fieldConfig) }}
        />
      </Grid>
    </>
  )
}
