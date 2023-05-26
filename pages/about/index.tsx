'use client'
import { About } from '@/components/templates'
import { HFLayout } from '@/layouts/Layouts'
import { ReactElement } from 'react'

const AboutPage = () => {
  return <About />
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>
}
export default AboutPage
