import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16'>
        <Link href='/'>

         <Image 
        src='/logo.svg' 
        alt='car-logo'
        width={118}
        height={18}
        className='object-container'
        />
        </Link>

        <CustomButton 
        title='Sign In'
        containerStyles='rounded-full bg-white min-w-130px'
        btnType='button'
        />
       
      </nav>
      </header>
  )
}
