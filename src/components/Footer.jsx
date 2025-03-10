import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

export const Footer = () => {
  return (
    <footer className='flex justify-evenly items-center flex-wrap gap-10 border-t border-neutral-800 my-10 pt-5'>

        <div className="">
            <h1 className='font-bold mb-4'>Resources</h1>
            <ul>
                {
                    resourcesLinks.map((item,index)=>(
                        <li className='my-2' key={index}><a href={item.href}>{item.text}</a></li>
                    ))
                }
            </ul>
        </div>

        <div className="">
            <h1 className='font-bold mb-4'>Platform</h1>
            <ul>
                {
                    platformLinks.map((item,index)=>(
                        <li className='my-2' key={index}><a href={item.href}>{item.text}</a></li>
                    ))
                }
            </ul>
        </div>

        <div className="">
            <h1 className='font-bold mb-4'>Community</h1>
            <ul>
                {
                    communityLinks.map((item,index)=>(
                        <li className='my-2' key={index}><a href={item.href}>{item.text}</a></li>
                    ))
                }
            </ul>
        </div>
        
    </footer>
  )
}
