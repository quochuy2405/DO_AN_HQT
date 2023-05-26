import clsx from 'clsx'
import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import React from 'react'
interface FinishProps {
  status: 'error' | 'success'
}
const Finish: React.FC<FinishProps> = ({ status }) => {
  return (
    <div className="bg-gray-100 h-screen flex items-center">
      <div className="bg-white p-6  md:mx-auto rounded-3xl">
        <svg
          viewBox="0 0 24 24"
          className={clsx('w-16 h-16 mx-auto my-6', {
            'text-green-600 ': status === 'success',
            'text-red-600 ': status === 'error'
          })}
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            {status === 'error' && 'Lỗi thanh toán'}
            {status === 'success' && 'Đã tiếp nhận đơn hàng!'}
          </h3>
          <p className="text-gray-600 my-2">
            Cảm ơn bạn đã sử dụng các sản phẩm tại Beliy Stresswear.
          </p>
          <p> Chúc bạn một ngày mới thật bùng lổ! </p>
          <div className="py-10 text-center">
            <Link
              href="/"
              onClick={() => {
                deleteCookie('checkout_id')
                deleteCookie('orders')
              }}
              className="w-36 mx-auto mt-3 flex gap-1 justify-center items-center text-sm rounded-md bg-black py-2 font-medium text-blue-50 hover:bg-gray-700"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finish
