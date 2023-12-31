'use client'

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

export default function Hero() {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
    <div className="flex-1 pt-36 sm:px-16 px-6">
      <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
        Find, book, rent a car—quick and super easy!
      </h1>

      <p className="text-[27px] text-black-100 font-light mt-5">
        Streamline your car rental experience with our effortless booking
        process.
      </p>


      <CustomButton 
      title='Explore Car'
      containerStyles='bg-blue-600 text-white rounded-full my-10'
      handleClick={()=>{}}
      />
      
    </div>

    <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>

        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
            <Image 
            src='/hero.png'  
            alt='hero' fill 
            className='object-contain'/>
        </div>

        <div 
        className='bg-hero-bg bg-repeat-round h-[590px] w-full overflow-hidden xl:h-screen
         absolute xl:-top-24 xl:-right-1/2 -right-1/4 -z-10'></div>  
    </div>
  </div>
  )
}

