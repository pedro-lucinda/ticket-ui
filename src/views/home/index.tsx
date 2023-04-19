'use client'
import { toast } from 'react-toastify'
import Button from '@/components/elements/button'

export const HomeView = () => {
  return (
    <>
      <Button label="Click" onClick={() => toast.success('hello')} />
    </>
  )
}
