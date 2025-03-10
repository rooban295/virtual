import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code.jpg";
import { checklistItems } from '../constants';

export const Workflow = () => {
  return (
    <div className='mt-10'>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl text-center">Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'> coding workflow.</span></h1>

        <div className="flex flex-col mt-5 justify-between items-center p-6 lg:flex-row">
            <div className="w-full lg:w-1/2"><img src={codeImg} alt="" /></div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between ">
                {
                    checklistItems.map((item,index)=>(
                        <div className="flex flex-col justify-between shadow-2xl p-5 gap-4 rounded-lg" key={index}>
                            <div className='flex gap-2'>
                                <span className='text-green-900'><CheckCircle2/></span>
                                <h2 className='text-md'>{item.title}</h2>   
                            </div>
                            <p className='text-sm text-neutral-500 pl-8'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
