'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const Stepper = () => {
  const pathname = usePathname()

  return (
    <div className='m-auto mb-12 flex h-[47px] w-3/4 items-start justify-between text-center font-grotesk text-xs font-bold text-[#747577]'>
      <div className='flex w-[99px] flex-col items-center'>
        <div
          className={`mb-2 flex h-6 w-6 items-center justify-center rounded-full ${
            pathname.includes('location') ? 'bg-yellow-primary' : 'bg-[#D1EFFE]'
          }`}
        >
          <div
            className={`h-[13px] w-[13px] rounded-full ${
              pathname.includes('location') ? 'bg-white' : 'bg-[#52C7FC]'
            }`}
          >
            &nbsp;
          </div>
        </div>
        <span>Instance Location</span>
      </div>

      <div className='mt-3 h-[3px] w-20 rounded-full bg-[#D1EFFE]'>&nbsp;</div>

      <div className='flex w-[99px] flex-col items-center'>
        <div
          className={`mb-2 flex h-6 w-6 items-center justify-center rounded-full ${
            pathname.includes('type') ? 'bg-yellow-primary' : 'bg-[#D1EFFE]'
          }`}
        >
          <div
            className={`h-[13px] w-[13px] rounded-full ${
              pathname.includes('type') ? 'bg-white' : 'bg-[#52C7FC]'
            }`}
          >
            &nbsp;
          </div>
        </div>
        <span>Instance Type</span>
      </div>

      <div className='mt-3 h-[3px] w-20 rounded-full bg-[#D1EFFE]'>&nbsp;</div>

      <div className='flex w-[99px] flex-col items-center'>
        <div className='mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#D1EFFE]'>
          <div className='h-[13px] w-[13px] rounded-full bg-[#52C7FC]'>
            &nbsp;
          </div>
        </div>
        <span>Instance Type</span>
      </div>

      <div className='mt-3 h-[3px] w-20 rounded-full bg-[#D1EFFE]'>&nbsp;</div>

      <div className='flex w-[99px] flex-col items-center'>
        <div className='mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#D1EFFE]'>
          <div className='h-[13px] w-[13px] rounded-full bg-[#52C7FC]'>
            &nbsp;
          </div>
        </div>
        <span>Instance Type</span>
      </div>

      <div className='mt-3 h-[3px] w-20 rounded-full bg-[#D1EFFE]'>&nbsp;</div>

      <div className='flex w-[99px] flex-col items-center'>
        <div className='mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#D1EFFE]'>
          <div className='h-[13px] w-[13px] rounded-full bg-[#52C7FC]'>
            &nbsp;
          </div>
        </div>
        <span>Instance Type</span>
      </div>
    </div>
  )
}

export default Stepper
