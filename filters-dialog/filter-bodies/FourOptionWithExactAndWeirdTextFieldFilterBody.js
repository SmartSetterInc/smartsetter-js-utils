import Grid from "@mui/material/Unstable_Grid2"

import SimpleOrCommaSeparatedTextField from "../components/CommaSeparatedTextField"
import ExactCheckbox from "../components/ExactCheckbox"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import {
  IS_NONE_OF_OPTION,
  IS_NOT_OPTION,
  IS_ONE_OF_OPTION,
  IS_OPTION,
} from "../data"
import {
  broadcastPropertyChange,
  isConfigComplete4Options,
  isSingleSelection,
} from "../utils"

export default function FourOptionWithExactAndWeirdTextFieldFilterBody({
  label,
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <>
      <Grid xs={4}>
        <FilterTypeSmallAutoComplete
          typeOptions={[
            IS_OPTION,
            IS_NOT_OPTION,
            IS_ONE_OF_OPTION,
            IS_NONE_OF_OPTION,
          ]}
          fieldConfig={fieldConfig}
          isConfigCompleteFunction={isConfigComplete4Options}
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
        <SimpleOrCommaSeparatedTextField
          simple={isSingleSelection(fieldConfig)}
          label={label}
          value={fieldConfig.value}
          onChange={(value) =>
            broadcastPropertyChange(
              { name: "value", value },
              fieldConfig,
              isConfigComplete4Options,
              onPropertyChanged,
              onConfigCompleteChanged
            )
          }
        />
      </Grid>
    </>
  )
}
