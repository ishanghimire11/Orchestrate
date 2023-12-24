import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import logo from "../../../app/orchestrate.svg"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import NavItems from '../NavItems'
import MobileNav from '../MobileNav'


const Header = () => {
    return (
    <header className='flex items-center py-2 justify-between bg-gray-100 shadow-md px-4 md:px-12 lg:px-16 gap-x-8'>
        <SignedIn>
            <div className='hidden lg:block flex-1'>
                <nav className='w-fit flex items-center justify-between'>
                    <NavItems/>
                </nav>
            </div>
        </SignedIn>

        <div className='flex-initial'>
            <Link href="/" className='flex items-center gap-x-2'>
                <Image src={logo} height={"100"} width={"100"} alt={"Orcherstrate"} className='w-8 md:w-10'/>
                <h3 className=' text-2xl md:text-4xl font-semibold tracking-widest'>Orchestrate</h3>
            </Link>
        </div>

        <div className='flex-1'>
            <div className='flex gap-x-4 items-center justify-end'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <MobileNav />
                </SignedIn>
            </div>

            <div className='flex justify-end items-center'>
                <SignedOut>
                    <Link href={"/sign-in"}>
                        <Button className='flex items-center gap-x-2 justify-end'>
                                Sign-in
                                <ArrowRightIcon />
                        </Button>
                    </Link>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header;