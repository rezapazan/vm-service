import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='z-10 flex h-[75px] items-center justify-between border-b border-gray-300 bg-white'>
      <Link
        className='h-full w-[248px] border-r border-gray-300 pt-3 text-center font-grotesk'
        href={'/'}
      >
        <div className='w-full text-[28px] font-bold tracking-tighter text-[#0D2D51]'>
          Router
        </div>
        <div className='-mt-2 text-[10px] font-semibold uppercase tracking-[0.3rem] text-[#506781]'>
          Hosting
        </div>
      </Link>
      <div className='flex'></div>
    </nav>
  )
}

export default Navbar
