import { Home } from '@/components/templates'
import { HFLayout } from '@/layouts/Layouts'
import { ReactElement } from 'react'

const HomePage = () => {
  return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>
}

export default HomePage
