import Autocomplete from "@mui/material/Autocomplete"
import Chip from "@mui/material/Chip"
import TextField from "@mui/material/TextField"

export default function SmallAutocompleteSelectMultiple({
  options,
  label,
  value,
  onChange,
  autoCompleteProps,
}) {
  const renderTagsForSelectMultiple = (value, getTagProps) =>
    value.map((option, index) => (
      <Chip
        key={index}
        variant="filled"
        label={option}
        size="small"
        {...getTagProps({ index })}
      />
    ))

  return (
    <Autocomplete
      multiple
      filterSelectedOptions
      limitTags={2}
      size="small"
      options={options}
      value={value}
      onChange={(_, value) => onChange(value)}
      renderInput={(props) => <TextField {...props} label={label} />}
      renderTags={renderTagsForSelectMultiple}
      sx={{ width: "100%" }}
      {...autoCompleteProps}
    />
  )
}
