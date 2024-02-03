import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import heroImage from "@/app/heroImage1.jpg"
import { Button } from '@/components/ui/button';
import { CaretDownIcon } from '@radix-ui/react-icons';

const Hero = () => {
    return(
        <div className='h-[100vh] object-cover flex items-center justify-center relative px-8 md:px-12 lg:px-16' >
          <Image src={heroImage} width={1920} height={1080} alt='hero' className='h-full w-full object-cover absolute z-0 hero-image'/>
          <div className='absolute inset-0 bg-black opacity-70 z-10'></div>
          <div className='z-20 text-center'>
            <h1 className='text-5xl md:text-7xl text-white'>Orchestrate your vision. Elevate your event.</h1>
          </div>
          
          <Button type='button' className='w-fit z-20 p-0 hover:bg-transparent absolute bottom-24' variant={"ghost"}>
              <Link href="#events" className= "text-white flex flex-col justify-center items-center">
                <CaretDownIcon className='w-16 h-16 animate-bounce'/>
                  <span>Our Events</span>
                </Link>
          </Button>
        </div>    
    )
}

export default Hero;