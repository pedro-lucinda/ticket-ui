import { ReactNode } from 'react'
import '../styles/globals.css'
import { Footer } from '@/components/modules/footer'
import { NavBar } from '@/components/modules/nav'
import Providers from '@/config/provider'
import 'react-toastify/dist/ReactToastify.css'
import { ToastWrapper } from '@/config/toast'

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
        <Providers>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className=" flex flex-col min-w-view min-h-view">
              {children}{' '}
            </main>
            <Footer />
          </div>
        </Providers>
        <ToastWrapper />
      </body>
    </html>
  )
}
