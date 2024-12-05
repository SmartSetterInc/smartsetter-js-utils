import FourOptionWithExactAndWeirdTextFieldFilterBody from "./FourOptionWithExactAndWeirdTextFieldFilterBody"

export default function CityFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <FourOptionWithExactAndWeirdTextFieldFilterBody
      label="City"
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
    />
  )
}
