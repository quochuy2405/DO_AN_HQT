import AxiosServices from './AxiosServices'
import { CategoryType, FormatResponse } from './types'

export const getAllCategories = async () => {
  return await AxiosServices.get<FormatResponse<Array<CategoryType>>>('categories/')
}
