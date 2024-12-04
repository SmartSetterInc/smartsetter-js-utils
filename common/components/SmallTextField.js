import TextField from "@mui/material/TextField"

export default function SmallTextField({
  label,
  value,
  onChange,
  textFieldProps,
}) {
  return (
    <TextField
      size="small"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      {...textFieldProps}
    />
  )
}
