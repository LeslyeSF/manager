import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/globals'
import { AuthProvider } from '../context/authProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    <GlobalStyles/>
  </>
)

export default MyApp
