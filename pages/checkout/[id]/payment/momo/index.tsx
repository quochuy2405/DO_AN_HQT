import { PaymentMomo } from '@/components/templates'
import { DefaultLayout } from '@/layouts/Layouts'
import React, { ReactElement } from 'react'

const PaymentMomoPage = () => {
  return <PaymentMomo />
}

PaymentMomoPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default PaymentMomoPage
