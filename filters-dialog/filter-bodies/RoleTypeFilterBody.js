import Grid from "@mui/material/Unstable_Grid2"

import { ROLE_TYPES } from "../../common/data"
import FilterTypeSmallAutoComplete from "../components/FilterTypeSmallAutoComplete"
import SmallSelectOneOrMultiple from "../components/SmallSelectOneOrMultiple"
import {
  IS_NONE_OF_OPTION,
  IS_NOT_OPTION,
  IS_ONE_OF_OPTION,
  IS_OPTION,
} from "../data"
import { isConfigComplete4Options, isSingleSelection } from "../utils"

export default function RoleTypeFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <>
      <Grid xs={6}>
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
      <Grid xs={6}>
        <SmallSelectOneOrMultiple
          multiple={!isSingleSelection(fieldConfig)}
          fieldConfig={fieldConfig}
          label="Role Type"
          options={ROLE_TYPES}
          isConfigCompleteFunction={isConfigComplete4Options}
          onPropertyChanged={onPropertyChanged}
          onConfigCompleteChanged={onConfigCompleteChanged}
        />
      </Grid>
    </>
  )
}
