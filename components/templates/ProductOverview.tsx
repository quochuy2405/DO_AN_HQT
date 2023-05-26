'use client'
import { ProductType } from '@/types/product'
import { RadioGroup } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'

const breadcrumbs = [
  { id: 1, name: 'Trang chủ', href: '#' },
  { id: 2, name: 'Sản phẩm', href: '#' }
]

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
interface ProductOverviewProps {
  data?: ProductType
  addToCart: (data: ProductType) => void
}
const ProductOverview: React.FC<ProductOverviewProps> = ({ addToCart, data }) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const handelAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...data, sizes: [selectedSize], quantityOrder: 1 })
    } else {
      enqueueSnackbar('Vui lòng chọn size nhó :v', { variant: 'info' })
    }
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <p className="font-medium text-gray-500 hover:text-gray-600">{data?.name}</p>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            {data?.imagesURL[0] && (
              <Image
                src={data?.imagesURL[0]}
                alt={''}
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            )}
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {data?.imagesURL[1] && (
                <Image
                  src={data?.imagesURL[1]}
                  alt={''}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {data?.imagesURL[2] && (
                <Image
                  src={data?.imagesURL[2]}
                  alt={''}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover object-center"
                />
              )}
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            {data?.imagesURL[3] && (
              <Image
                src={data?.imagesURL[3]}
                alt={''}
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data?.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl font-medium tracking-tight text-gray-900">
              {(data?.price * 1000).toLocaleString()} VND
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <Link
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-black hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </Link>
              </div>
            </div>

            <div className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <Link href="#" className="text-sm font-medium text-black hover:text-indigo-500">
                    Hướng dẫn chọn size
                  </Link>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {(data?.sizes as string[])?.map((size) => (
                      <RadioGroup.Option
                        key={size}
                        value={size}
                        disabled={!size}
                        className={({ active }) =>
                          classNames(
                            size
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                            {size ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="button"
                onClick={handelAddToCart}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-black hover:border-black hover:border ease-linear transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Mô tả sản phẩm</h3>

              <div className="space-y-6">
                <div className="text-sm text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: data?.descriptions }}></div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Nổi bật</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <div className="text-sm text-gray-600">
                    <div dangerouslySetInnerHTML={{ __html: data?.highlights }}></div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-sm font-medium text-gray-900">Chi tiết khác</h2>

              <div className="mt-4 space-y-6">
                <div className="text-sm text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: data?.details }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductOverview
