import { ReactNode } from 'react'
import '../styles/globals.css'
import Providers from '@/config/provider'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Home',
  },
}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
