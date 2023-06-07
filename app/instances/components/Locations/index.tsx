import React from 'react'
import Instance from './Location'
import { ArrowRight2 } from 'iconsax-react'

const Index = () => {
  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-[#0D2D51]'>
        Instance Location
      </h2>
      {/* TODO: hide scrollbar when instances are less than a specific count */}
      <div className='mb-[118px] grid h-80 grid-cols-4 gap-7 overflow-x-hidden overflow-y-scroll pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        <Instance
          name='germany'
          imageURL='https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
        />
      </div>
      <div className='flex items-center justify-end'>
        <button className='flex h-10 w-28 items-center justify-around rounded bg-[#FAC802]'>
          <span className='mr-1'>Next Step</span>
          <ArrowRight2 size={17} />
        </button>
      </div>
    </>
  )
}

export default Index
