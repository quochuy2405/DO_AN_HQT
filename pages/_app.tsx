import AppProvider from '@/providers/AppProvider'
import { AppProps } from '@/types/next'
import '../styles/global.css'
function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page)
  const layouts = getLayout(<Component {...pageProps} />)

  return <AppProvider>{layouts}</AppProvider>
}

export default App
