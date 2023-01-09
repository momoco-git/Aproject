
import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/styles/global';
import { Global } from '@emotion/react';
function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>)
}

export default MyApp
