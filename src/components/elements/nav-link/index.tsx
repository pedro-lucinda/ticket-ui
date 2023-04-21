'use client'
import classNames from 'classnames'
import React from 'react'

export type NavLinkProps = {
  title: string
  onClick: () => void
  color?: 'white' | 'black'
  className?: string
}

export const NavLink = ({
  title,
  onClick,
  className,
  color = 'white',
}: NavLinkProps) => {
  return (
    <p
      onClick={onClick}
      className={classNames(
        'font-bold capitalize text-sm hover:scale-[95%] transition-all duration-200 cursor-pointer',
        {
          className: className,
          'text-white': color === 'white',
          'text-black': color === 'black',
        },
      )}
    >
      {title}
    </p>
  )
}
