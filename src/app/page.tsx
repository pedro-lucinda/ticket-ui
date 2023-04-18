import Button from '@/components/elements/button'

export const metadata = {
  title: 'Home',
  description: 'Dashboard description',
  keywords: 'dashboard, next, react',
  robots: 'index, follow',
}

export default function Home() {
  return (
    <div>
      <h1>
        <Button label="Click" />
      </h1>
    </div>
  )
}
