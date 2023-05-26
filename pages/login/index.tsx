'use client'
import { Login } from '@/components/templates'
import { DefaultLayout } from '@/layouts/Layouts'
import { loginSchema } from '@/utils/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  })

  const handleSubmit = (data) => {
    console.log(data)
  }
  const props = {
    methods,
    handleSubmit
  }
  return <Login {...props} />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
export default LoginPage
