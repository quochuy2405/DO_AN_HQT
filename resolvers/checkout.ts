import * as yup from 'yup'
export const schema = yup.object().shape({
  name: yup.string().required('Không được để trống họ tên.'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  ward: yup.string().test('ward', 'Vui lòng chọn phường/xã.', (value) => {
    return !!value
  }),
  province: yup.string().test('ward', 'Vui lòng chọn tỉnh thành.', (value) => {
    return !!value
  }),
  district: yup.string().test('ward', 'Vui lòng chọn quận huyện.', (value) => {
    return !!value
  }),
  phone: yup.string().test('phone', 'Số điện thoại không hợp lệ.', (value: string) => {
    const reg = /((84|0[3|5|7|8|9])+([0-9]{8})\b)|(1[8|9]00)+([0-9]{4}\b)/g
    return !!reg.test(value.toString())
  })
})
