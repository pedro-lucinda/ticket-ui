import React from 'react'
import Button from '@/components/elements/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button label="click me" onClick={() => console.log('oi')} />
    </main>
  )
}
