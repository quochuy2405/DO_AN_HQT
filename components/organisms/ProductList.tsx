'use client'
import { storage } from '@/firebase/config'
import { ProductType } from '@/types/product'
import { getAllProduct, getProductByCategoryId } from 'apis/products'
import clsx from 'clsx'
import { getDownloadURL, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
interface ProductListProps {
  title?: string
  id?: number
}

const ProductList: React.FC<ProductListProps> = ({ id, title }) => {
  const { setValue, control } = useForm<{ products: ProductType[] }>({
    defaultValues: {
      products: []
    }
  })

  const refactorData = async (data: Array<ProductType>) => {
    const products = data.map(async (item) => {
      const names = [1, 2, 3, 4]
      try {
      } catch (error) {}
      const imagesURL = names.map(async (name) => {
        try {
          const imageRef = ref(
            storage,
            'products/' +
              item.imageName
                .trim()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLocaleLowerCase()
                .replace(/\s/g, '_') +
              '/' +
              name
          )
          const imageURL = await getDownloadURL(imageRef)
          return imageURL
        } catch (error) {
          return ''
        }
      })

      return {
        ...item,
        imagesURL: await Promise.all(imagesURL),
        sizes: (item?.sizes as string)?.split(',')
      }
    })
    return await Promise.all(products)
  }
  const fetch = async () => {
    if (id) {
      await getProductByCategoryId(id)
        .then(async ({ data }) => {
          console.log(data)
          setValue('products', await refactorData(data.rows))
        })
        .catch((error) => console.log(error))
    } else {
      await getAllProduct()
        .then(async ({ data }) => {
          console.log(data)
          setValue('products', await refactorData(data.rows))
        })
        .catch((error) => console.log(error))
    }
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6  lg:max-w-7xl lg:px-8">
        {title && <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Controller
            name="products"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <>
                {[...field.value].map((item) => (
                  <Link href={`/products/${item.id}`} key={item.id}>
                    <div
                      key={item?.imagesURL[0]}
                      className="w-[90%] min-w-[270px] md:max-w-[280px] md:w-[33.333%] lg:w-[25%] bg-white rounded-lg flex flex-col p-4 gap-2 shadow-lg transition-all ease-linear h-full flex-1 hover:shadow-2xl"
                    >
                      <div className="w-full h-[240px] relative overflow-hidden">
                        <Image
                          src={item.imagesURL[0] || 'https://www.freeiconspng.com/img/23494'}
                          width={1000}
                          height={1000}
                          alt=""
                          className="w-full max-h-[240px] object-contain md:object-cover rounded-md"
                        />
                      </div>
                      <div className="flex items-start justify-between flex-1">
                        <p className="w-fit p-2 h-7  flex items-center text-black justify-center font-bold text-sm">
                          {item.name}
                        </p>
                      </div>

                      <div className="w-full text-white text-sm flex-1 flex items-start justify-between gap-2 px-2">
                        <p className="text-black font-medium rounded-lg text-xs ">
                          Giá: {(Number(item.price) * 1000)?.toLocaleString()}đ
                        </p>
                      </div>
                      <div className="w-full text-white text-sm flex-1 flex items-start justify-between gap-2 px-2">
                        <div className="flex gap-1 flex-1 flex-wrap justify-start">
                          {[...item.sizes].map((item, index) => (
                            <p
                              key={item + index}
                              className={clsx(
                                'w-6 h-6 rounded-full border-2 cursor-pointer border-gray-500 flex items-center text-black justify-center font-bold text-[9px]'
                              )}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          />
        </div>
      </div>
    </section>
  )
}
export default ProductList
