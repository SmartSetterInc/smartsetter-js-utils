import TextField from "@mui/material/TextField"

import SmallTextField from "../../common/components/SmallTextField"

export default function SimpleOrCommaSeparatedTextField({
  simple,
  label,
  value,
  onChange,
}) {
  if (simple) {
    return <SmallTextField label={label} value={value} onChange={onChange} />
  } else {
    return (
      <SmallCommaSeparatedTextField
        label={label}
        value={value}
        onChange={onChange}
      />
    )
  }
}

export function SmallCommaSeparatedTextField({ label, value, onChange }) {
  return (
    <TextField
      size="small"
      label={label}
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => {
        const text = e.target.value
        const splitterRegex = new RegExp(",\\s*")
        onChange(text.split(splitterRegex))
      }}
    />
  )
}
