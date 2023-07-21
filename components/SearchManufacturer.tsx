import { Fragment, useState } from 'react'
import Image from 'next/image'
import { SearchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/app/constants'




export default function SearchManufacturer({manufacturer, setManufacturer}:SearchManufactureProps) {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-full">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">

              
            <Image src='/car-logo.svg' alt='car logo' width={20} height={20} className='ml-4' /> 
            
            </Combobox.Button>

            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(manufacturer: string)=>manufacturer}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search for car brands' />
           
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} >
         
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <div>
                        <span
                          className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal' }`}>

                          {item}
                        </span>
                        {selected ? (
                          <span 
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 
                          ${active ? 'text-white' : 'text-blue-500'}`}>
                           
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}