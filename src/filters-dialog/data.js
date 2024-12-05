export class FilterField {
  constructor(fieldName, label) {
    this.fieldName = fieldName
    this.label = label
  }
}

class Option {
  constructor(id, label, value) {
    this.id = id
    this.label = label
    this.value = value
  }
}

export const IS_OPTION = new Option("is", "Is", "is")
export const CONTAINS_OPTION = new Option("contains", "Contains", "contains")
export const IS_NOT_OPTION = new Option("is_not", "Is not", "is_not")
export const DOES_NOT_CONTAIN_OPTION = new Option(
  "not_contains",
  "Not contains",
  "contains"
)
export const IS_ONE_OF_OPTION = new Option(
  "is_one_of",
  "Is one of",
  "is_one_of"
)
export const IS_NONE_OF_OPTION = new Option(
  "is_none_of",
  "Is none of",
  "is_none_of"
)
export const GREATER_THAN_OPTION = new Option("gt", "Greater than", "gt")
export const LESS_THAN_OPTION = new Option("lt", "Less than", "lt")
export const EXISTS_OPTION = new Option("exists", "Exists", "exists")
export const NOT_EXISTS_OPTION = new Option(
  "not_exists",
  "Not exists",
  "not_exists"
)

export const TYPE_OPTIONS = [
  IS_OPTION,
  CONTAINS_OPTION,
  IS_NOT_OPTION,
  DOES_NOT_CONTAIN_OPTION,
  IS_ONE_OF_OPTION,
  IS_NONE_OF_OPTION,
  GREATER_THAN_OPTION,
  LESS_THAN_OPTION,
  EXISTS_OPTION,
  NOT_EXISTS_OPTION,
]

export const TYPE_OPTION_NAME_MAP = Object.fromEntries(
  TYPE_OPTIONS.map((option) => [option.id, option.label])
)

export const COUNTRIES = ["US", "CA"]

export const REALITY_FIELD_NAMES = {
  MLS_ID: "mls_id",
  NO_OF_SALES: "sales_count",
  SALES_VOLUME: "total_dollar_ltm",
  CITY: "city",
  EMAIL: "email",
  PHONE: "phone",
  VERIFIED_PHONE: "verified_phone",
  OFFICE_NAME: "office_name",
  BRAND: "brand__code",
  STATE: "state",
  ZIPCODE: "zipcode",
  YEARS_IN_BUSINESS: "years_in_business",
}
