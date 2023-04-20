'use client'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  id: string
  handleChange?: (value: string) => void
}

export const Input = ({
  label,
  id,
  handleChange,
  className,
  ...props
}: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (handleChange) handleChange(event.target.value)
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="mb-2 text-xs font-bold">
          {label}:
        </label>
      )}
      <input
        {...props}
        id={id}
        onChange={handleInputChange}
        className={`bg-gray300 text-black text-sm p-2 rounded-md focus:outline-none focus:border-purple500 ${className}`}
      />
    </div>
  )
}
