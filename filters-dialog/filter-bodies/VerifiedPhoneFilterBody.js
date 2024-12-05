import MobilePhoneFilterBody from "./MobilePhoneFilterBody"

export default function VerifiedPhoneFilterBody({
  fieldConfig,
  onPropertyChanged,
  onConfigCompleteChanged,
}) {
  return (
    <MobilePhoneFilterBody
      fieldConfig={fieldConfig}
      onPropertyChanged={onPropertyChanged}
      onConfigCompleteChanged={onConfigCompleteChanged}
      label="Verfied Phone"
    />
  )
}
