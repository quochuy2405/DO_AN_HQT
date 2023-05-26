import { Footer, Header } from '@/components/organisms'
import Metadata from '@/layouts/Metadata'
import * as React from 'react'

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js'
// }
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  preload: false,
  weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900']
})

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={inter.className}>
      <Metadata title="Beliy StressWear" description="Khám phá phong cách độc đáo" />
      {children}
    </div>
  )
}

const HFLayout = ({ children }: MainLayoutProps) => (
  <MainLayout>
    <Header />
    {children}
    <Footer />
  </MainLayout>
)

const DefaultLayout = ({ children }: MainLayoutProps) => <MainLayout>{children}</MainLayout>
const FooterLayout = ({ children }: MainLayoutProps) => (
  <MainLayout>
    {children}
    <Footer />
  </MainLayout>
)
export default MainLayout
export { HFLayout, DefaultLayout, FooterLayout }
