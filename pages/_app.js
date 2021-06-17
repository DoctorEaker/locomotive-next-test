import { useRef } from 'react'
import { SmoothScrollProvider } from '../src/contexts/SmoothScroll.context'

require('../style.css')

export default function NextApp({ Component, pageProps }) {
  const containerRef = useRef(null)

  return (
    <SmoothScrollProvider containerRef={containerRef}>
      <main data-scroll-container className="container">
        <Component {...pageProps} />
      </main>
    </SmoothScrollProvider>
  )
}
