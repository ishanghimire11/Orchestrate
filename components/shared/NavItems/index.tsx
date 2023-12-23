"use client"

import React from 'react'
import Link from 'next/link'

import { headerLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='flex flex-col gap-y-4 lg:justify-between lg:flex-row lg:gap-y-0 lg:gap-x-8 lg:items-center list-none'>
        {headerLinks.map(link => {
            const isActive = pathname.startsWith(link.route)
            
            return <li key={link.id} className='w-fit'>
                <Link href={link.route} className={`flex items-center gap-x-2 text-md hover:text-blue-500 ${isActive ? "active text-blue-500 font-semibold" : ""}`}>
                    {link.title}
                </Link>
            </li>
        })}
    </ul>
  )
}

export default NavItems