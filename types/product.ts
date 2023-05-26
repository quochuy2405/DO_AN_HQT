export type ProductType = {
  id?: string
  name: string
  imagename: string
  sizes: Array<string> | string
  imagesURL?: Array<string>
  price: number
  colors: Array<string>
  quantity: number
  quantityOrder: number
  highlights: string
  details: string
  descriptions: string
  category: string
}
