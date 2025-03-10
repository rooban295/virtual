import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
export const Pricing = () => {
  return (
    <div>
        <h1 className='text-center text-4xl tracking-wide mb-10'>Pricing</h1>
        <div className='flex flex-col justify-center items-center gap-10 md:flex-row'>
            {
                pricingOptions.map((item,index)=>(
                    <div className=" flex flex-col gap-4 border w-[85%] sm:w-[90%] lg:w-full p-3 md:p-5 rounded-lg shadow-xl">
                        <h2 className='text-4xl my-2'>{item.title}{item.title=="Pro"&&(<span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-lg'> (Most Popular)</span>)}</h2>
                        <h1 className='text-neutral-500'><span className='text-4xl text-orange-500'>{item.price}</span> / month</h1>
                        <ul className='flex flex-col gap-8 my-6 mb-10'>
                            {
                                item.features.map((feature,index)=>(
                                    <li className='flex gap-3'><CheckCircle2 className='text-green-900'/>{feature}</li>
                                ))
                            }
                        </ul>
                        <button className='border w-full py-2 border-orange-800 shadow-orange-800 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 shadow-sm'>Subscribe</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
