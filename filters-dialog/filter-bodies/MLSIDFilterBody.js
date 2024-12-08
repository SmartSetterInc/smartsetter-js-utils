import Grid from "@mui/material/Unstable_Grid2"
import { createContext, useContext, useState, useEffect } from "react"

import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallAutocomplete from "../components/SmallAutoComplete"
import { IS_NOT_OPTION, IS_OPTION } from "../data"
import { broadcastPropertyChange } from "../utils"
import { noAuthAxios } from "../../common/axios"

export default function MLSIDFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {

  const availableMLS = useContext(AvailableMLSContext)

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
      <Grid xs={8}>
        <SmallAutocomplete
          options={availableMLS.map((mls) => ({
            id: mls.id,
            label: mls.name,
          }))}
          label="MLS"
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
          autoCompleteProps={{
            isOptionEqualToValue: (option, value) => option.id === value.id,
          }}
        />
      </Grid>
    </>
  )
}

export const AvailableMLSContext = createContext([])

export function useLoadAvailableMLS() {
  const [availableMLS, setAvailableMLS] = useState([])
  const [availableMlsLoaded, setAvailableMLSLoaded] = useState(false)

  useEffect(() => {
    noAuthAxios.get("/realitydb/api/available-mls/")
    .then(({ data }) => {
      setAvailableMLS(data)
      setAvailableMLSLoaded(true)
      return Promise.resolve(data)
    })
  }, [])

  return {
    availableMLS,
    availableMlsLoaded
  }
}
