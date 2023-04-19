'use client'
import React from 'react'

export type NavLinkProps = {
  title: string
  onClick: () => void
}

export const NavLink = ({ title, onClick }: NavLinkProps) => {
  return (
    <p
      onClick={onClick}
      className="font-bold text-white capitalize text-sm hover:scale-[95%] transition-all duration-200"
    >
      {title}
    </p>
  )
}
