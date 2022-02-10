export type MenuItemType = {
  Icon: any
  id: number
  title: string
  route: string
}
export type UserSettingsMenuType = {
  id: number
  label: string
}
export type StatsItemType = {
  id: number
  label: string
  value: string
}
export type statsPeriodItemType = {
  id: number
  label: string
}
export type HeaderMenuItemType = {
  id: string
  Icon: any
  title: string
}
export type Jobstype = {
  _id: number
  nom_organisation: string
  poste: string
  lieu_affectation: string
  date_publication: string
  date_limite: string
  details_offre: string
  email: string
}
export type SelectItemType = {
  id: number
  label: string
  value: string
}
export type BillingType = {
  id?: number
  value: string
  label: string
}
export type ExportOptionsType = {
  id?: number
  value: string
  label: string
}

export type BillingTableHeaderOptionsType = {
  id?: number
  label: string
}
export type currentBillType = {
  id: number
  name: string
  rate: string
  subTotal: number
  dataUsage: string
}
export type PaymentMethodType = {
  id?: number
  card_experintionDetails: string
}
export type SVGType = {
  color?: string
  color2?: string
  width?: string
  height?: string
}
export type SettingsMenuTypes = {
  id: number
  title: string
}
export type ColumnsWithOptions = {
  id: any
  label: string
  minWidth?: number
  align?: 'right'
}
export type UserSearchFormType = {
  text: string
}
export type SimActivateFormType = {
  email: string
  phone: string
  number: string
  lastName: string
  firstName: string
}
export type UserActivateFormType = {
  nodeName: string
  serialNumber: string
  securityCode: string
}

export type ResponseProps = {
  loading: boolean
  error: any | null
  response: { isValid: boolean } | void | null
}
