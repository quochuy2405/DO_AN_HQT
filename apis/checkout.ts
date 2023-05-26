import { ProductType } from '@/types/product'
import AxiosServices from './AxiosServices'
import { OrderType } from '@/types/common'

export const checkQuatityListProduct = async (products: Array<ProductType>) => {
  return await AxiosServices.post('orders/check_quantity', { products })
}
export const createOrders = async (orders: OrderType) => {
  return await AxiosServices.post('orders/checkout', orders)
}
