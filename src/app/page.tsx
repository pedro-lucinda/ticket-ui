import { HomeView } from '@/views/home'

export const metadata = {
  title: 'Home',
  description: 'Dashboard description',
  keywords: 'dashboard, next, react',
  robots: 'index, follow',
}

export default function Home() {
  return (
    <>
      <HomeView />
    </>
  )
}
