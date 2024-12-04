import FourOptionWithExactAndWeirdTextFieldFilterBody from "./FourOptionWithExactAndWeirdTextFieldFilterBody"

export default function OfficeNameFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <FourOptionWithExactAndWeirdTextFieldFilterBody
      label="Office"
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
    />
  )
}
