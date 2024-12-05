import TextAutocomplete from "../../common/components/TextAutocomplete"

export default function SmallAutocomplete({
  options,
  label,
  value,
  onChange,
  autoCompleteProps,
}) {
  return (
    <TextAutocomplete
      options={options}
      value={value}
      onChange={onChange}
      label={label}
      autoCompleteProps={{ size: "small", ...autoCompleteProps }}
    />
  )
}
