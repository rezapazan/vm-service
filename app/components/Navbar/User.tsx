import { ArrowDown2, UserSquare } from 'iconsax-react'
import React from 'react'

const User = () => {
  return (
    <div className='flex items-center justify-between'>
      <UserSquare
        variant='Bulk'
        size={45}
      />
      <div className='ml-2 flex cursor-pointer items-center justify-between'>
        <span className='mr-2 text-xs'>User</span>
        <ArrowDown2 size={13} />
      </div>
    </div>
  )
}

export default User
