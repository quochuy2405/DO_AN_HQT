import { PaymentBanking } from '@/components/templates'
import { DefaultLayout } from '@/layouts/Layouts'
import React, { ReactElement } from 'react'

const PaymentBankingPage = () => {
  return <PaymentBanking />
}

PaymentBankingPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
export default PaymentBankingPage
