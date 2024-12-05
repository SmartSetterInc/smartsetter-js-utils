import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Unstable_Grid2"

import { useBroadcastDebouncedValue } from "../utils"

export default function CountOrVolumeFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  function isConfigComplete(newConfig) {
    return !!newConfig.value?.count && !!newConfig.value?.volume
  }

  function handleNumberChangedEventWrapper(propertyName) {
    return (e) =>
      onPropertyChanged({
        name: "value",
        value: { ...fieldConfig.value, [propertyName]: e.target.value },
      })
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
        <TextField
          label="Number of sales (#)"
          type="number"
          size="small"
          value={fieldConfig.value?.count}
          onChange={handleNumberChangedEventWrapper("count")}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          label="Sales volume ($)"
          type="number"
          size="small"
          value={fieldConfig.value?.volume}
          onChange={handleNumberChangedEventWrapper("volume")}
        />
      </Grid>
    </>
  )
}
