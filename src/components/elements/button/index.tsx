import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  label: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  onClick,
  label,
  ...rest
}) => {
  const buttonClasses = classNames(
    'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500':
        variant === 'primary',
      'bg-gray-300 hover:bg-gray-400 text-black focus:ring-gray-300':
        variant === 'secondary',
    },
    className,
  )

  return (
    <button type="button" className={buttonClasses} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button
