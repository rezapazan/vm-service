import Notification from './Notification'
import React from 'react'
import Logo from './Logo'
import User from './User'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-10 flex h-[75px] w-full items-center justify-between border-b border-gray-300 bg-white'>
      <Logo />
      <div className='flex items-center justify-between pr-10 text-[#0D2D51]'>
        <Notification />
        <User />
      </div>
    </nav>
  )
}

export default Navbar
