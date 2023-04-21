'use client'
import classNames from 'classnames'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'
import Button from '@/components/elements/button'
import { NavLink } from '@/components/elements/nav-link'
import { LOGO, NAV_LINKS, PATHS } from '@/constants'

export const NavBar = () => {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <div
      className={classNames('flex justify-between items-center px-5 py-5', {
        'bg-purple900': pathName !== PATHS.HOME,
        'bg-transparent absolute md:max-screen-size mx-auto w-full top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2':
          pathName === PATHS.HOME,
      })}
    >
      <div
        className={classNames(
          'md:max-screen-size mx-auto flex justify-between items-center w-full',
          {
            ' bg-purple900': pathName !== PATHS.HOME,
          },
        )}
      >
        <img
          src={LOGO}
          alt="Ticket"
          onClick={() => router.push(PATHS.HOME)}
          className="cursor-pointer"
        />

        <section className="flex gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              title={link.label}
              onClick={() => router.push(link.path)}
            />
          ))}
          <Button
            variant="purple"
            label="Login"
            size="sm"
            onClick={() => router.push(PATHS.LOGIN)}
          />
        </section>
      </div>
    </div>
  )
}
