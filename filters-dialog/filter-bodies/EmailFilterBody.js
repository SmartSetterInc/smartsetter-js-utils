import Grid from "@mui/material/Unstable_Grid2"

import SmallTextField from "../../common/components/SmallTextField"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import {
  CONTAINS_OPTION,
  DOES_NOT_CONTAIN_OPTION,
  EXISTS_OPTION,
  NOT_EXISTS_OPTION,
} from "../data"
import { typeExistsOrNot, useBroadcastDebouncedValue } from "../utils"

export default function EmailFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    if (typeExistsOrNot(newConfig)) {
      return true
    }
    return !!newConfig.type && !!newConfig.value
  }

  useBroadcastDebouncedValue({
    value: fieldConfig.value,
    fieldConfig,
    isConfigComplete,
    onPropertyChanged,
    onConfigCompleteChanged,
  })

  return (
    <>
      <Grid xs={6}>
        <FilterTypeSmallAutoComplete
          typeOptions={[
            CONTAINS_OPTION,
            DOES_NOT_CONTAIN_OPTION,
            EXISTS_OPTION,
            NOT_EXISTS_OPTION,
          ]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onConfigCompleteChanged={onConfigCompleteChanged}
          onPropertyChanged={onPropertyChanged}
        />
      </Grid>
      <Grid xs={6}>
        <SmallTextField
          label="Email"
          value={fieldConfig.value}
          onChange={(value) => onPropertyChanged({ name: "value", value })}
          textFieldProps={{ disabled: typeExistsOrNot(fieldConfig) }}
        />
      </Grid>
    </>
  )
}
