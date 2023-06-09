import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      className='border-gray-border h-full w-[248px] border-r-2 pt-3 text-center font-grotesk'
      href={'/'}
    >
      <div className='w-full text-[28px] font-bold tracking-tighter text-blue-text'>
        Router
      </div>
      <div className='-mt-2 text-[10px] font-semibold uppercase tracking-[0.3rem] text-[#506781]'>
        Hosting
      </div>
    </Link>
  )
}

export default Logo
