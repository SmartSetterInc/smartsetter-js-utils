import TextField from "@mui/material/TextField"

import { broadcastPropertyChange } from "../utils"

export default function SmallNumberInput({
  label,
  fieldConfig,
  isConfigCompleteFunction,
  onPropertyChanged,
  onConfigCompleteChanged,
  textFieldProps,
}) {
  return (
    <TextField
      size="small"
      type="number"
      label={label}
      sx={{ width: "100%" }}
      value={fieldConfig.value}
      onChange={(e) =>
        broadcastPropertyChange(
          {
            name: "value",
            value: e.target.value && parseInt(e.target.value),
          },
          fieldConfig,
          isConfigCompleteFunction,
          onPropertyChanged,
          onConfigCompleteChanged
        )
      }
      {...textFieldProps}
    />
  )
}
