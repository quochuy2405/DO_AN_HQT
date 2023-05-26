'use client'
import { Register } from '@/components/templates'
import { create } from '@/firebase/base'
import { db } from '@/firebase/config'
import { DefaultLayout } from '@/layouts/Layouts'
import { closeLoading, setLoading } from '@/redux/features/slices/loading'
import { registerSchema } from '@/utils/register'
import { collection } from '@firebase/firestore'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
const RegisterPage = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(registerSchema)
  })
  const dispatch = useDispatch()

  const handleSubmit = async (data) => {
    dispatch(setLoading({ status: true, mode: 'default', title: 'Đang tạo tài khoản' }))
    const accountRef = collection(db, 'accounts')
    await create(accountRef, data).then(() => {
      dispatch(
        setLoading({
          status: true,
          mode: 'success',
          title: (
            <div className="flex flex-col pt-3 justify-center items-center">
              <p>Tạo thành công</p>
              <Link
                href="/login"
                onClick={() => dispatch(closeLoading())}
                className="flex-1 mt-2 items-center py-2 px-4 text-xs font-medium text-center text-white bg-emerald-400 rounded-lg focus:ring-4 focus:ring-emerald-200 hover:bg-emerald-600"
              >
                Về trang đăng nhập
              </Link>
            </div>
          )
        })
      )
    })
  }
  const props = {
    methods,
    handleSubmit
  }
  return <Register {...props} />
}
RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default RegisterPage
