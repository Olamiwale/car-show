'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import CardDetails from './CardDetails'


interface CarCardProps {
    car: CarProps;
}

export default function CarCard({car}: CarCardProps) {

    const {make, model, year, transmission, drive, city_mpg} = car

    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false)

   
  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>

        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-xl font-bold capitalize'> {make} {model} </h2>
        </div>

        <p className='flex mt-6 text-[30px] leading-[30px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={'/hero.png'} alt='car model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
         <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className="flex flex-col items-center ">
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className="font-bold">{transmission === "a" ? "Automatic" : "Manual"} </p> 
          </div>
          <div className="flex flex-col items-center ">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="font-bold ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="font-bold ">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/vercel.svg'
            handleClick={() => setIsOpen(true)}
           
          />
        </div>

      </div>

      <CardDetails />
    </div>
  )
}


