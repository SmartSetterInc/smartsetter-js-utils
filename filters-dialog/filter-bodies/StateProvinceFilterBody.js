import FourOptionWithExactAndWeirdTextFieldFilterBody from "./FourOptionWithExactAndWeirdTextFieldFilterBody"

export default function StateProvinceFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <FourOptionWithExactAndWeirdTextFieldFilterBody
      label="State/Province"
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
    />
  )
}
