import SmallAutocomplete from "../components/SmallAutoComplete"
import SmallAutocompleteSelectMultiple from "../components/SmallAutoCompleteSelectMultiple"
import { broadcastPropertyChange } from "../utils"

export default function SmallSelectOneOrMultiple({
  multiple,
  label,
  options,
  fieldConfig,
  isConfigCompleteFunction,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  if (multiple) {
    return (
      <SmallAutocompleteSelectMultiple
        options={options}
        label={label}
        value={fieldConfig.value}
        onChange={(value) =>
          broadcastPropertyChange(
            { name: "value", value },
            fieldConfig,
            isConfigCompleteFunction,
            onPropertyChanged,
            onConfigCompleteChanged
          )
        }
      />
    )
  } else {
    return (
      <SmallAutocomplete
        label={label}
        options={options}
        value={fieldConfig.value}
        onChange={(value) => {
          broadcastPropertyChange(
            { name: "value", value },
            fieldConfig,
            isConfigCompleteFunction,
            onPropertyChanged,
            onConfigCompleteChanged
          )
        }}
      />
    )
  }
}
