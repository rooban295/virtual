import React from 'react'
import { testimonials } from '../constants'

export const Testimonial = () => {
  return (
    <div className='mt-10 w-full'>
        <h1 className='text-center my-10 text-4xl'>What Pepole are saying</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 place-items-center">
            {
                testimonials.map((item,index)=>(
                    <div className="w-[90%] md:w-full rounded-lg p-4  text-white bg-neutral-900 border-neutral-800 font-thin grid border">
                        <p className='leading-7 text-justify tracking-normal text-md order-2 lg:order-1'>{item.text}</p>
                        <div className='flex flex-col justify-center items-center my-5 gap-5 order-1 lg:order-2 lg:flex-row lg:justify-start'>
                            <img src={item.image} alt=""  className='rounded-full w-[120px] lg:w-[40px]'/>
                            <div className='text-center lg:text-start'>
                                <p className='font-light'>{item.user}</p>
                                <p className='text-neutral-500 font-normal'>{item.company}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
