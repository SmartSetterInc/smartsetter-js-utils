import Grid from "@mui/material/Unstable_Grid2"

import ExactCheckbox from "../components/ExactCheckbox"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallAutocomplete from "../components/SmallAutoComplete"
import { COUNTRIES, IS_NOT_OPTION, IS_OPTION } from "../data"
import { broadcastPropertyChange } from "../utils"

export default function CountryFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !!newConfig.value
  }
  return (
    <>
      <Grid xs={4}>
        <FilterTypeSmallAutoComplete
          typeOptions={[IS_OPTION, IS_NOT_OPTION]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
      <Grid xs={2}>
        <ExactCheckbox
          checked={fieldConfig.exact}
          onChange={(value) => onPropertyChanged({ name: "exact", value })}
        />
      </Grid>
      <Grid xs={6}>
        <SmallAutocomplete
          options={COUNTRIES}
          label="Country"
          value={fieldConfig.value}
          onChange={(value) =>
            broadcastPropertyChange(
              { name: "value", value },
              fieldConfig,
              isConfigComplete,
              onPropertyChanged,
              onConfigCompleteChanged
            )
          }
        />
      </Grid>
    </>
  )
}
