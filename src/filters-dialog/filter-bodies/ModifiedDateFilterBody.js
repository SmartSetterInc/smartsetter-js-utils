import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Unstable_Grid2"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { formatDateForBackend } from "../../common/utils"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import { GREATER_THAN_OPTION, LESS_THAN_OPTION } from "../data"
import { broadcastPropertyChange } from "../utils"

export default function ModifiedDateFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    return !!newConfig.type && !!newConfig.value
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
        <DatePicker
          value={fieldConfig.value}
          onChange={(value) =>
            broadcastPropertyChange(
              { name: "value", value: formatDateForBackend(value) },
              fieldConfig,
              isConfigComplete,
              onPropertyChanged,
              onConfigCompleteChanged
            )
          }
          renderInput={(params) => <TextField size="small" {...params} />}
        />
      </Grid>
    </>
  )
}
