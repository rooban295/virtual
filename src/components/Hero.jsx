import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
export const Hero = () => {
  return (
    <div className='flex items-center flex-col text-center mt-6 lg-mt-20  '>

        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            VirtualR bulid tools 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent  bg-clip-text'> for developers
                </span>
                </h1>

        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Enpower your creativity and brgin VR app ideas to life with our intuitive development tools Get started today and turn your imageination into immersive relative!</p>

        <div className="flex justify-center gap-3 mt-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Start for free</a>
        <a href="#" className="py-2 px-3 border rounded-md">Documentation</a>
        </div>

        <div className="flex w-full justify-center mt-10 ">
            <video autoPlay loop muted    className='w-1/2 border border-orange-700 shadow-orange-400  rounded-lg mx-2 my-4'><source src={video1} type='video/mp4' /></video>
            <video autoPlay loop muted    className='w-1/2 border border-orange-700 shadow-orange-400  rounded-lg  mx-2 my-4'><source src={video2} type='video/mp4' /></video>

        </div>
        
    </div>
  )
}
