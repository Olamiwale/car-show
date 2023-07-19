import { SearchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

export default function SearchManufacturer({manufacturer, setManufacturer}:SearchManufactureProps) {
  return (
    <div>
        <Combobox>
          <div>
            <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg' 
              alt='car logo' 
              width={20} 
              height={20} 
              className='ml-4'  />
            </Combobox.Button>

            <Combobox.Input
            className='w-full h-[50px] pl-12 p-4 rounded-l-full max-sm:rounded-full outline-none cursor-pointer'
            placeholder='Volkswagen...'
          />

          <Transition>

        <Combobox.Options>
            
        </Combobox.Options> 
             

          </Transition>   
            
    

        </div>  
            
            </Combobox>
        
    </div>
  )
}
 