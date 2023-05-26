import LogoSvg from '@/assets/LogoSvg'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white  border-t mt-2">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="ml-4 flex-1 flex justify-center items-center lg:ml-0 w-36 h-36"
              passHref
            >
              <LogoSvg />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Thông tin</h2>
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Địa chỉ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Kênh bán</h2>
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Giới thiệu</h2>
              <ul className="text-gray-600  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pet Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Olded Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              BeliyStore
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
