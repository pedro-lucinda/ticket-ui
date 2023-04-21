'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
import Button from '@/components/elements/button'
import { Input } from '@/components/elements/input'
import { NavLink } from '@/components/elements/nav-link'
import { PATHS } from '@/constants'
import { useForm } from '@/utils/hooks/use-form'

type FormInputs = {
  email: string
  password: string
}

export const LoginView = () => {
  const router = useRouter()

  const initialState: FormInputs = {
    email: '',
    password: '',
  }

  const { formState, handleInputChange, resetForm } = useForm(initialState)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function handleLogin() {
    if (!formState.email || !formState.password) {
      toast.error('Please fill all the fields')
      return
    }
    setIsLoading(true)
    resetForm()
    toast.success('Login successful')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center gap-10 max-screen-size my-10 mx-auto">
      <h1 className="font-bold text-3xl text-center">Login</h1>

      <section className="flex flex-col items-center w-full">
        <Input
          id="email"
          label="Email"
          type="email"
          value={formState.email}
          onChange={(e) => handleInputChange(e, 'email')}
          className="md:min-w-[500px]"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={formState.password}
          onChange={(e) => handleInputChange(e, 'password')}
          className="md:min-w-[500px]"
        />
      </section>
      <Button
        label="Login"
        size="sm"
        className="w-[200px]"
        onClick={handleLogin}
        isLoading={isLoading}
      />
      <NavLink
        title="Don't have an account? Signup here!"
        onClick={() => router.push(PATHS.SIGNUP)}
        color="black"
      />
    </div>
  )
}
