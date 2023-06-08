'use client'

import React from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main className='flex flex-1 flex-col items-center justify-center font-grotesk font-bold'>
      <h2 className='mb-2'>Something Went Wrong!!!</h2>
      <p className='mb-5'>{error.message}</p>
      <button
        className='rounded-sm bg-black px-5 py-2 text-white'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </main>
  )
}

export default Error
