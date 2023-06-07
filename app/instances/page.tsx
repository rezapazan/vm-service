import React from 'react'
import Instance from './components/Instance'
import { ArrowRight2 } from 'iconsax-react'

const Page = () => {
  return (
    <main className=''>
      <div className='px-[70px] py-[50px]'>
        <div className='mb-[50px] bg-[#FAC802]'>&nbsp;</div>
        <h2 className='mb-5 font-grotesk text-[28px] font-bold text-[#0D2D51]'>
          Instance Location
        </h2>
        <div className='mb-[118px] grid h-80 grid-cols-4 gap-7 overflow-x-hidden overflow-y-scroll'>
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
          <Instance />
        </div>
        <div className='flex items-center justify-end'>
          <button className='flex h-10 w-28 items-center justify-around rounded bg-[#FAC802]'>
            <span className='mr-1'>Next Step</span>
            <ArrowRight2 size={17} />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Page
