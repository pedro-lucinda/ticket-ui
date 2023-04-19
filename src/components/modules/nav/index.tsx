'use client'

import classNames from 'classnames'
import { useRouter, usePathname } from 'next/navigation'
import { NavLink } from '@/components/elements/nav-link'
import { LOGO, NAV_LINKS } from '@/constants'

export const NavBar = () => {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div
      className={classNames('flex justify-between items-center px-5 py-5', {
        'bg-purple500': pathName === '/',
        'bg-transparent': pathName !== '/',
      })}
    >
      <img src={LOGO} alt="Ticket" />

      <section className="flex gap-10">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.label}
            title={link.label}
            onClick={() => router.push(link.path)}
          />
        ))}
      </section>
    </div>
  )
}
