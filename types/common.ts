import { ProductType } from './product'

export type OptionType = {
  label: string
  value: string
}

export type OrderType = {
  address_number: string
  ward: string
  district: string
  province: string
  checkout_id: string
  email: string
  phone: string
  name: string
  user_id: number
  total: number
  payment_methods: string
  status: string
  products: Array<ProductType>
}
