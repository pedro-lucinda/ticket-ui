import classNames from 'classnames'
import React from 'react'
import {
  ISpinnerSize,
  ISpinnerColor,
  Spinner,
} from '@/components/elements/spinner'

export type LoadingComponentProps = {
  title?: string
  size?: ISpinnerSize
  color?: ISpinnerColor
}

export const LoadingComponent = ({
  title,
  color,
  size,
}: LoadingComponentProps) => {
  return (
    <div className="flex items-center mx-auto gap-2">
      {title && (
        <p
          className={classNames('font-bold capitalize', {
            'text-purple-500': color === 'purple',
            'text-sm': size === 'sm',
            'text-md': size === 'md',
            'text-lg': size === 'lg',
          })}
        >
          {title}
        </p>
      )}{' '}
      <Spinner color={color} size={size} />
    </div>
  )
}
