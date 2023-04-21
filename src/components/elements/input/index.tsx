'use client'
import classNames from 'classnames'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  id: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  label,
  id,
  className,
  onChange,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="mb-2 text-xs font-bold">
          {label}:
        </label>
      )}
      <input
        id={id}
        className={classNames(
          'bg-gray300 text-black text-sm p-2 rounded-md focus:outline-none focus:border-purple500',
          {
            className: className,
          },
        )}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
