import { ProductType } from '@/types/product'
import AxiosServices from './AxiosServices'
import { FormatResponse } from './types'

export const getAllProduct = async () => {
  return await AxiosServices.get<FormatResponse<ProductType[]>>('products/')
}
export const getProductByCategoryId = async (categoryId: number) => {
  return await AxiosServices.get<FormatResponse<ProductType[]>>(`products/cat/${categoryId}`)
}
export const getProductById = async (id: number) => {
  return await AxiosServices.get<FormatResponse<ProductType>>(`products/prod/${id}`)
}
