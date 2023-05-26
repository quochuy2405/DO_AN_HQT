'use client'
import { Product } from '@/components/templates'
import { HFLayout } from '@/layouts/Layouts'
import { getAllCategories } from 'apis/categories'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ProductPage = () => {
  const stateStore = useForm({
    defaultValues: {
      categories: []
    }
  })
  const { query, isReady } = useRouter()
  console.log(query)
  useEffect(() => {
    if (isReady) {
      getAllCategories()
        .then(({ data }) => {
          console.log(data)
          stateStore.setValue('categories', data.rows)
        })
        .catch((error) => console.log(error))
    }
  }, [isReady])
  const props = {
    stateStore,
    gender: query.type as string
  }
  return <Product {...props} />
}
ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>
}
export default ProductPage
