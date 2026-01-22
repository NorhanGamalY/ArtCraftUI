import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="fixed top-0 left-0 flex justify-between min-h-[60px] items-center z-50 w-full py-4 bg-transparent" >

        <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between items-center bg-black" >
        <a className="text-3xl no-underline font-extrabold text-[#504F4F]" href="/" >ArtCraft</a>

        <div className="bg-transparent flex w-[20%] justify-between text-white">
            <Link className='inline-block no-underline text-[#FAF7F5] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="/about">About</Link>
            <Link className='inline-block no-underline text-[#FAF7F5] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="/works">Works</Link>
            <Link className='inline-block no-underline text-[#FAF7F5] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="/contact">Contact</Link>  
        </div>

           <div className='py-2 px-4 border-2 hover:bg-[#504F4F]'><Link className='inline-block no-underline py-2 px-4 text-[#504F4F] hover:text-gray-100' href="/contact">Contact</Link></div>  
        </div>
    
    </nav>
    </>
  )
}

