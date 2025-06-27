import localFont from 'next/font/local'

export const Helvetica = localFont({
  src: '../../public/fonts/Helvetica.woff2',
  display: 'swap',
  variable: '--font-bold',
})

export const HelveticaBold = localFont({
  src: '../../public/fonts/HelveticaBold.woff2',
  display: 'swap',
  variable: '--font-regular',
})
