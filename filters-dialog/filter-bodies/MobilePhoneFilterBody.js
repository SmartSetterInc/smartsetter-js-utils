import Grid from "@mui/material/Unstable_Grid2"

import SimpleOrCommaSeparatedTextField from "../components/CommaSeparatedTextField"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import {
  EXISTS_OPTION,
  IS_NONE_OF_OPTION,
  IS_NOT_OPTION,
  IS_ONE_OF_OPTION,
  IS_OPTION,
  NOT_EXISTS_OPTION,
} from "../data"
import {
  broadcastPropertyChange,
  isConfigComplete4Options,
  isSingleSelection,
  typeExistsOrNot,
} from "../utils"

export default function MobilePhoneFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
  label = "Mobile Phone",
}) {
  function isConfigComplete(newConfig) {
    if (typeExistsOrNot(newConfig)) {
      return true
    } else {
      return isConfigComplete4Options(newConfig)
    }
  }
  return (
    <>
      <Grid xs={4}>
        <FilterTypeSmallAutoComplete
          typeOptions={[
            IS_OPTION,
            IS_NOT_OPTION,
            IS_ONE_OF_OPTION,
            IS_NONE_OF_OPTION,
            EXISTS_OPTION,
            NOT_EXISTS_OPTION,
          ]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
      <Grid xs={8}>
        {!typeExistsOrNot(fieldConfig) && (
          <SimpleOrCommaSeparatedTextField
            label={label}
            simple={isSingleSelection(fieldConfig)}
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
        )}
      </Grid>
    </>
  )
}
