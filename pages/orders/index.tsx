'use client'
import { OrderSumaries } from '@/components/templates'
import { HFLayout } from '@/layouts/Layouts'
import { RootState } from '@/redux/features/store'
import { ProductType } from '@/types/product'
import { checkQuatityListProduct } from 'apis/checkout'
import { setCookies } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
export type DataFormType = {
  orders: Array<ProductType>
}
const OrderSumariesPage = () => {
  const orders = useSelector((state: RootState) => state.cart)
  const router = useRouter()
  const dataForm = useForm<DataFormType>({
    defaultValues: { orders }
  })
  const onCheckout = async () => {
    if (orders.length) {
      await checkQuatityListProduct(orders)
        .then(async (res) => {
          console.log(res)
          const id = await shortid.generate()
          await setCookies('checkout_id', id)
          await router.push('/checkout/' + id)
        })
        .catch((error) => {
          console.log(error)
          const message = error.response?.data?.message
          enqueueSnackbar(message, { variant: 'error' })
        })
    }
  }
  const props = {
    orders,
    dataForm,
    onCheckout
  }

  return <OrderSumaries {...props} />
}

OrderSumariesPage.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>
}
export default OrderSumariesPage
