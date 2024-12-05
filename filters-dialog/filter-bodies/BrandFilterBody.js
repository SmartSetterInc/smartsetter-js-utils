import Grid from "@mui/material/Unstable_Grid2"

import { BRANDS } from "../../common/data"
import ExactCheckbox from "../components/ExactCheckbox"
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
} from "../utils"

export default function BrandFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <>
      <Grid xs={4}>
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
      <Grid xs={2}>
        <ExactCheckbox
          checked={fieldConfig.exact}
          onChange={(exact) =>
            onPropertyChanged({ name: "exact", value: exact })
          }
        />
      </Grid>
      <Grid xs={6}>
        <SmallAutocompleteSelectMultiple
          options={BRANDS}
          label="Brand"
          value={fieldConfig.value}
          onChange={(brand) =>
            broadcastPropertyChange(
              { name: "value", value: brand },
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
