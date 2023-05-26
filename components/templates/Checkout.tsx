'use client'
import LogoSvg from '@/assets/LogoSvg'
import { OrderType } from '@/types/common'
import { ProductType } from '@/types/product'
import clsx from 'clsx'
import Image from 'next/image'
import React, { MutableRefObject, useCallback } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { Select, TextField } from '../atoms'
import { StateCheckoutPageType } from '@/pages/checkout/[id]'
interface CheckoutProps {
  stateStore: UseFormReturn<StateCheckoutPageType, any>
  dataForm: UseFormReturn<OrderType, any>
  orders: Array<ProductType>
  refButton: MutableRefObject<string>
  onSubmit: (data: any) => void
  onChangeDistricts: (id: string) => void
  onChangeProvince: (id: string) => void
}
const Checkout: React.FC<CheckoutProps> = ({
  orders,
  stateStore,
  dataForm,
  refButton,
  onSubmit,
  onChangeDistricts,
  onChangeProvince
}) => {
  const total = useCallback(() => {
    const total =
      orders?.reduce((total, item) => {
        return total + item?.quantityOrder * item.price
      }, 0) * 1000
    dataForm.setValue('total', total)
    return total
  }, [orders])
  return (
    <form className="p-4 pb-40 select-none" onSubmit={dataForm.handleSubmit(onSubmit)}>
      <div className="w-24 h-w-24 items-center bg-white text-sm font-medium text-white">
        <p className="flex-1 flex justify-center items-center lg:ml-0">
          <LogoSvg />
        </p>
      </div>
      <section className="grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-white border rounded-md p-3 flex flex-col gap-3">
          <Controller
            name="name"
            control={dataForm.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} errors={fieldState.error} title="Họ và tên" required />
            )}
          />
          <Controller
            name="email"
            control={dataForm.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} errors={fieldState.error} title="Email" required />
            )}
          />
          <Controller
            name="phone"
            control={dataForm.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} errors={fieldState.error} title="Số điện thoại" required />
            )}
          />
          <div className="flex gap-2">
            <Controller
              name="provinces"
              control={stateStore.control}
              defaultValue={[]}
              render={({ field: { value: opts } }) => (
                <Controller
                  name="province"
                  control={dataForm.control}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      error={fieldState.error}
                      title="Tỉnh/Thành phố"
                      onChange={(value) => {
                        onChangeProvince(value)
                        field.onChange(value)
                      }}
                      options={opts}
                    />
                  )}
                />
              )}
            />
            <Controller
              name="districts"
              control={stateStore.control}
              defaultValue={[]}
              render={({ field: { value: opts } }) => (
                <Controller
                  name="district"
                  control={dataForm.control}
                  defaultValue={''}
                  render={({ field: { onChange, ...params }, fieldState }) => (
                    <Select
                      {...params}
                      error={fieldState.error}
                      title="Quận/Huyện"
                      options={opts}
                      onChange={(value) => {
                        onChange(value)
                        onChangeDistricts(value)
                      }}
                      disabled={!opts?.length}
                    />
                  )}
                />
              )}
            />
          </div>

          <Controller
            name="wards"
            control={stateStore.control}
            defaultValue={[]}
            render={({ field: { value: opts } }) => (
              <Controller
                name="ward"
                control={dataForm.control}
                defaultValue={''}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    error={fieldState.error}
                    title="Phường/Xã"
                    options={opts}
                    disabled={!opts?.length}
                  />
                )}
              />
            )}
          />
          <Controller
            name="address_number"
            control={dataForm.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} errors={fieldState.error} title="Số nhà, đường" required />
            )}
          />

          <Controller
            name="user_id"
            control={dataForm.control}
            defaultValue={null}
            render={({ field, fieldState }) => (
              <TextField {...field} errors={fieldState.error} title="UserID để test" required />
            )}
          />
        </div>
        <section className="bg-white ">
          <div className="max-w-lg px-4 lg:px-8">
            <div className="flex flex-col gap-4 w-full">
              <div className="rounded-lg w-full bg-white p-6 border shadow-md flex flex-col gap-2">
                {orders.map((item) => (
                  <div
                    key={item.id + item.sizes[0]}
                    className="justify-between flex-1 sm:flex sm:justify-start"
                  >
                    <div className="h-28 w-36 overflow-hidden rounded-lg bg-cover bg-no-repeat">
                      <Image
                        src={item.imagesURL[0] || 'https://www.freeiconspng.com/img/23494'}
                        width={1000}
                        height={1000}
                        alt=""
                        className="w-full max-h-[240px] object-contain md:object-cover rounded-md"
                      />
                    </div>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                        <div className="flex  items-center gap-2">
                          {item.sizes
                            .toString()
                            .split(',')
                            .map((size) => (
                              <p
                                key={size}
                                className={clsx(
                                  'w-6 h-6 rounded-full border-2 cursor-pointer border-black flex items-center text-black justify-center font-bold text-[9px]'
                                )}
                              >
                                {size}
                              </p>
                            ))}
                        </div>
                        <p className="text-sm mt-2">Số lượng: {item.quantityOrder}</p>
                        <p className="text-sm mt-2">
                          {(item.quantityOrder * item.price * 1000).toLocaleString()} VND
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sub total */}

              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Tạm tính</p>
                  <p className="text-gray-700">{total().toLocaleString()}đ</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Phí ship</p>
                  <p className="text-gray-700">30.000đ</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Tổng tiền</p>
                  <div>
                    <p className="mb-1 text-lg font-bold">
                      {(total() ? total() + 30000 : 0).toLocaleString()}đ
                    </p>
                    <p className="text-sm text-gray-700">Đã bao gồm VAT</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <button
                  type="submit"
                  onClick={() => (refButton.current = 'banking')}
                  className="mt-3 w-full flex gap-1 justify-center items-center text-sm rounded-md bg-[#AE2070] py-2 font-medium text-blue-50 hover:bg-[#cc2684]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5888 0C10.7047 0 9.17752 1.61509 9.17752 3.60755C9.17752 5.59999 10.7047 7.2151 12.5888 7.2151C14.4728 7.2151 16 5.59999 16 3.60755C16 1.61509 14.4728 0 12.5888 0ZM12.5888 5.14717C11.7895 5.14717 11.1401 4.46038 11.1401 3.6151C11.1401 2.7698 11.7895 2.08302 12.5888 2.08302C13.3881 2.08302 14.0375 2.7698 14.0375 3.6151C14.0375 4.46038 13.3881 5.14717 12.5888 5.14717ZM8.19268 2.70943V7.22263H6.23015V2.6868C6.23015 2.34716 5.97324 2.07546 5.6521 2.07546C5.33095 2.07546 5.07403 2.34716 5.07403 2.6868V7.22263H3.1115V2.6868C3.1115 2.34716 2.8546 2.07546 2.53345 2.07546C2.21232 2.07546 1.9554 2.34716 1.9554 2.6868V7.22263H0V2.70943C0 1.21509 1.14897 0 2.562 0C3.14005 0 3.66815 0.203773 4.09635 0.543396C4.52453 0.203773 5.05977 0 5.63068 0C7.04372 0 8.19268 1.21509 8.19268 2.70943ZM12.5888 8.77735C10.7047 8.77735 9.17752 10.3925 9.17752 12.3849C9.17752 14.3774 10.7047 15.9924 12.5888 15.9924C14.4728 15.9924 16 14.3774 16 12.3849C16 10.3925 14.4728 8.77735 12.5888 8.77735ZM12.5888 13.9245C11.7895 13.9245 11.1401 13.2377 11.1401 12.3924C11.1401 11.5472 11.7895 10.8604 12.5888 10.8604C13.3881 10.8604 14.0375 11.5472 14.0375 12.3924C14.0375 13.2377 13.3881 13.9245 12.5888 13.9245ZM8.19268 11.4868V16H6.23015V11.4641C6.23015 11.1245 5.97324 10.8528 5.6521 10.8528C5.33095 10.8528 5.07403 11.1245 5.07403 11.4641V16H3.1115V11.4641C3.1115 11.1245 2.8546 10.8528 2.53345 10.8528C2.21232 10.8528 1.9554 11.1245 1.9554 11.4641V16H0V11.4868C0 9.99245 1.14897 8.77735 2.562 8.77735C3.14005 8.77735 3.66815 8.98113 4.09635 9.32075C4.52453 8.98113 5.05263 8.77735 5.63068 8.77735C7.04372 8.77735 8.19268 9.99245 8.19268 11.4868Z"
                      fill="white"
                    />
                  </svg>
                  <span>Mua siêu tốc với MoMo</span>
                </button>

                <button
                  type="submit"
                  onClick={() => (refButton.current = 'momo')}
                  className="w-full mt-3 flex gap-1 justify-center items-center text-sm rounded-md bg-[#005BAA] py-2 font-medium text-blue-50 hover:bg-blue-600"
                >
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_293_95)">
                      <path
                        d="M3.66675 6.41663V5.49996C3.66675 5.01373 3.8599 4.54741 4.20372 4.2036C4.54754 3.85978 5.01385 3.66663 5.50008 3.66663H7.33341"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.66675 15.5834V16.5C3.66675 16.9863 3.8599 17.4526 4.20372 17.7964C4.54754 18.1402 5.01385 18.3334 5.50008 18.3334H7.33341"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6667 3.66663H16.5001C16.9863 3.66663 17.4526 3.85978 17.7964 4.2036C18.1403 4.54741 18.3334 5.01373 18.3334 5.49996V6.41663"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6667 18.3334H16.5001C16.9863 18.3334 17.4526 18.1402 17.7964 17.7964C18.1403 17.4526 18.3334 16.9863 18.3334 16.5V15.5834"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.58325 11H17.4166"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_293_95">
                        <rect width={22} height={22} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Mua siêu tốc qua Banking</span>
                </button>

                {/* <Link href="/payment"> */}
                <button
                  type="submit"
                  onClick={() => (refButton.current = 'payment_on_delivery')}
                  className="mt-3 w-full text-sm rounded-md bg-black py-2 font-medium text-white hover:bg-gray-800"
                >
                  Thanh toán khi nhận hàng
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </form>
  )
}

export default Checkout
