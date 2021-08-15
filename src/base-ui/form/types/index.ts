type IFormType = 'select' | 'password' | 'datepicker' | 'input'

export interface IIFromItems {
  field: string
  label: string
  rules?: any[]
  placeholder?: string
  type?: IFormType
  options?: any[]

  // 其他的屬性
  otherOptions?: any
}

export interface IForm {
  formItems: IIFromItems[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
