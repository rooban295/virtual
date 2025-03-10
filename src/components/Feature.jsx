import React from 'react'
import { features } from '../constants'

export const Feature = () => {
  return (
    <div className='mt-16'>
        <p className='text-center capitalize bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text tracking-wide'>feature</p>
        <h1 className='text-center mt-20 lg:text-7xl md:text-6xl sm:text-5xl max-sm:text-3xl'>Easily bulid <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>your code</span></h1>

        <div className='grid mt-20 gap-4 justify-center items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 x'>
        {
            features.map((item,index)=>(
                <div className='flex flex-col shadow-2xl rounded p-4' key={index}>
                    <div className="flex mb-7 gap-8">
                        <span className='bg-black rounded-full p-1.5 text-orange-700'>{item.icon}</span>
                        <h2>{item.text}</h2>
                    </div>
                    <div className="text-sm text-neutral-500 text-justify pl-16 tracking-wide leading-7">
                        <p>{item.description}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}
