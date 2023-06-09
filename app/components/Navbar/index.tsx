import Notification from './Notification'
import React from 'react'
import Logo from './Logo'
import User from './User'

const Navbar = () => {
  return (
    <nav className='border-gray-border fixed top-0 z-10 flex h-[75px] w-full items-center justify-between border-b-2 bg-white'>
      <Logo />
      <div className='flex items-center justify-between pr-10 text-blue-text'>
        <Notification />
        <User />
      </div>
    </nav>
  )
}

export default Navbar
