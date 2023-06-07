import { Notification as Notif } from 'iconsax-react'
import React from 'react'

const Notification = () => {
  return (
    <div className='relative mr-5 cursor-pointer border-r border-gray-300 pr-5'>
      <Notif size={20} />
      <div className='absolute right-5 top-0 h-2 w-2 rounded-full bg-red-600'>
        &nbsp;
      </div>
    </div>
  )
}

export default Notification
