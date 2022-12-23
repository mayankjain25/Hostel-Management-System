import '../styles/globals.css'
import {Toaster,toast} from 'react-hot-toast'
import {SessionProvider} from 'next-auth/react'
function MyApp({ Component, pageProps }) {
  
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />

    </SessionProvider>
  )
}

export default MyApp
