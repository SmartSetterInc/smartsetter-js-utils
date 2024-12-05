import Grid from "@mui/material/Unstable_Grid2"
import { useEffect, useState } from "react"

import { noAuthAxios } from "../../common/axios"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallAutocompleteSelectMultiple from "../components/SmallAutoCompleteSelectMultiple"
import {
  EXISTS_OPTION,
  IS_NONE_OF_OPTION,
  IS_ONE_OF_OPTION,
  NOT_EXISTS_OPTION,
} from "../data"
import {
  broadcastPropertyChange,
  isConfigCompleteAllOptions,
  typeExistsOrNot,
  useBroadcastDebouncedValue,
} from "../utils"

export default function MLSLegalNameFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  const [availableMLS, setAvailableMLS] = useState([])

  function isConfigComplete(newConfig) {
    if (typeExistsOrNot(newConfig)) {
      return true
    } else {
      return !!newConfig.type && !!newConfig.value
    }
  }

  useBroadcastDebouncedValue({
    value: fieldConfig.value,
    fieldConfig,
    isConfigComplete,
    onConfigCompleteChanged,
    onPropertyChanged,
  })

  useEffect(
    () => {
      noAuthAxios
        .get("/campaigns/api/mls-names/")
        .then(({ data }) => setAvailableMLS(data.mls_names))
    },
    // eslint-disable-next-line
    []
  )

  return (
    <>
      <Grid xs={6}>
        <FilterTypeSmallAutoComplete
          typeOptions={[
            IS_ONE_OF_OPTION,
            IS_NONE_OF_OPTION,
            EXISTS_OPTION,
            NOT_EXISTS_OPTION,
          ]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigCompleteAllOptions}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
      <Grid xs={6}>
        <SmallAutocompleteSelectMultiple
          label="MLS Legal Name"
          options={availableMLS}
          value={fieldConfig.value}
          onChange={(mls) =>
            broadcastPropertyChange(
              { name: "value", value: mls },
              fieldConfig,
              isConfigCompleteAllOptions,
              onPropertyChanged,
              onConfigCompleteChanged
            )
          }
          autoCompleteProps={{
            disabled: typeExistsOrNot(fieldConfig),
            freeSolo: true,
          }}
        />
      </Grid>
    </>
  )
}
