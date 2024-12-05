import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

export default function TextAutocomplete({
  label,
  options,
  value,
  onChange,
  autoCompleteProps,
}) {
  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(_, value) => onChange(value)}
      renderInput={(props) => <TextField {...props} label={label} />}
      {...autoCompleteProps}
    />
  )
}
