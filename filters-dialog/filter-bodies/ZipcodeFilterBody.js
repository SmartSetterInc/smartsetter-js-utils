import FourOptionWithExactAndWeirdTextFieldFilterBody from "./FourOptionWithExactAndWeirdTextFieldFilterBody"

export default function ZipcodeFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <FourOptionWithExactAndWeirdTextFieldFilterBody
      label="Zipcode"
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
    />
  )
}
