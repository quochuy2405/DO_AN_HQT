export type CategoryType = {
  id: number
  name: string
}

export type FormatResponse<T> = {
  rows: T
  message: string
}
