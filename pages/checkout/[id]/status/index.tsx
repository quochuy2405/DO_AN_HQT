'use client'
import { Finish } from '@/components/templates'
import { DefaultLayout } from '@/layouts/Layouts'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import shortid from 'shortid'
const FinishPage = () => {
  const { query } = useRouter()
  if (!shortid.isValid(query.id) || query.id != getCookie('checkout_id'))
    return <Finish status="error" />
  return <Finish status="success" />
}

FinishPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default FinishPage
