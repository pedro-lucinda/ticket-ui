import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

type IVariants = 'purple' | 'outline' | 'outlinePurple'
type ISizes = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IVariants
  onClick?: () => void
  label: string
  size?: ISizes
  className?: string
}

const Button = ({
  variant = 'purple',
  onClick,
  label,
  size = 'md',
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classNames(
    'px-4 py-2 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
    className,
    {
      'text-white bg-purple500 hover:bg-purple600 focus:ring-purple500':
        variant === 'purple',
      'text-white border-2 border-white focus:ring-gray300':
        variant === 'outline',
      'text-purple500 border-2 border-purple500 focus:ring-purple500':
        variant === 'outlinePurple',
      'max-w-[120px] h-[40px] text-sm': size === 'sm',
      'max-w-[200px] h-[60px] text-md': size === 'md',
      'max-w-lg h-[60px] text-md': size === 'lg',
    },
  )

  return (
    <button type="button" className={buttonClasses} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button
