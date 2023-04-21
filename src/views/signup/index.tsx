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
  name: string
  email: string
  password: string
}

export const SignupView = () => {
  const router = useRouter()

  const initialState: FormInputs = {
    name: '',
    email: '',
    password: '',
  }

  const { formState, handleInputChange, resetForm } = useForm(initialState)

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function handleSignup() {
    if (!formState.name || !formState.email || !formState.password) {
      toast.error('Please fill all the fields')
      return
    }
    setIsLoading(true)
    resetForm()
    toast.success('Signup successful')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center gap-10 max-screen-size my-10 mx-auto">
      <h1 className="font-bold text-3xl text-center">Signup</h1>

      <section className="flex flex-col items-center w-full gap-2">
        <Input
          id="name"
          label="Name"
          type="name"
          value={formState.name}
          onChange={(e) => handleInputChange(e, 'name')}
          className="md:min-w-[500px]"
        />
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
        label="Signup"
        size="sm"
        className="w-[200px]"
        onClick={handleSignup}
        isLoading={isLoading}
      />
      <NavLink
        title="Already have an account? Login here!"
        onClick={() => router.push(PATHS.LOGIN)}
        color="black"
      />
    </div>
  )
}
