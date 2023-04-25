import type { AppProps } from 'next/app'
import  "../../public/styles/style.css"
import Link from 'next/link'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Component {...pageProps} />
      </>
  )
}
