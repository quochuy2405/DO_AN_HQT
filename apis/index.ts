import AxiosServices from './AxiosServices'

export const getProvinces = async () => {
  return await AxiosServices.get<Array<any>>('https://provinces.open-api.vn/api/')
}

export const getDistrict = async (provinceId: string) => {
  return await AxiosServices.get(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`)
}

export const getWards = async (districtId: string) => {
  return await AxiosServices.get(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
}
