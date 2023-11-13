import '../styles/globals.css'
import { inter } from '@/styles/font'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import ScrollToTopButton from './components/common/ScrollToTopButton'

export const metadata = {
  title: 'INMOBILIARIA-Next14',
  description: 'Next14 Proyecto de Prueba.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
