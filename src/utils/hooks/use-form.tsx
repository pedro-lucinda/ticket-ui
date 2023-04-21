// hooks/useForm.ts
import { useState, useCallback, ChangeEvent } from 'react'

type FormState = {
  [key: string]: string
}

type UseForm = {
  formState: FormState
  handleInputChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    key: keyof FormState,
  ) => void
  resetForm: () => void
}

export const useForm = (initialState: FormState): UseForm => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleInputChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
      key: keyof FormState,
    ) => {
      const value = event.target.value
      setFormState((prevFormState) => ({ ...prevFormState, [key]: value }))
    },
    [],
  )

  const resetForm = useCallback(() => {
    setFormState(initialState)
  }, [initialState])

  return { formState, handleInputChange, resetForm }
}
