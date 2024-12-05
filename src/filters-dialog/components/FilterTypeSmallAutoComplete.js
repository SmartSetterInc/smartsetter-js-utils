import { TYPE_OPTION_NAME_MAP } from "../data"
import {
  broadcastPropertyChange,
  useHandleAutocompleteInputValue,
} from "../utils"
import SmallAutocomplete from "./SmallAutoComplete"

export default function FilterTypeSmallAutoComplete({
  typeOptions,
  fieldConfig,
  isConfigCompleteFunction,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  const { inputValue, onInputChange, isOptionEqualToValue, getOptionLabel } =
    useHandleAutocompleteInputValue(fieldConfig.type, TYPE_OPTION_NAME_MAP)

  return (
    <SmallAutocomplete
      options={typeOptions}
      label="Type"
      value={fieldConfig.type}
      onChange={(value) =>
        broadcastPropertyChange(
          { name: "type", value: value && value.value },
          fieldConfig,
          isConfigCompleteFunction,
          onPropertyChanged,
          onConfigCompleteChanged
        )
      }
      autoCompleteProps={{
        inputValue,
        onInputChange,
        isOptionEqualToValue,
        getOptionLabel,
      }}
    />
  )
}
