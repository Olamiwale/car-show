import React from 'react'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import CarCard from '@/components/CarCard'
import { fetchCars } from '@/utils'

export default async function page() {

  const allCars = await fetchCars()

  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 ;

 
  return (
    <main className='overflow-hidden'>
      <Hero />

       <div  className='mt-12 sm:px-16 px-6 py-4 max-width' id='discover'>

         <div className='flex flex-col items-start justify-start gap-y-2 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={''} />
            <CustomFilter title='year' options={''} />
          </div>
        </div>

{!isDataEmpty ? (
  <section>

    
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
    {allCars?.map((car) =>(
      <CarCard car= {car} />
    ))}
    </div>
  </section>
):(
  <div>
     <h2 className='text-xl text-black font-bold'>No result shown</h2>
     <p>{allCars?.message}</p>
  </div>
)}
       </div>
    </main>
  )
}
