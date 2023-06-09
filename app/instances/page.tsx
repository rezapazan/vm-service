'use client'

import React, { useEffect } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import { useInstance } from '@/context/instance/instanceContext'
import Locations from './views/Locations'
import Types from './views/Types'
import PrevStepButton from './components/PrevStepButton'
import NextStepButton from './components/NextStepButton'

const Page = () => {
  const [instance] = useInstance()

  useEffect(() => {
    console.log(
      `%c instance =>`,
      'background: #e70000;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em',
      instance
    )
  }, [instance])

  return (
    <>
      {/* {instance.step === 2 ? <Types /> : <></>} */}
      <div
        className={`${
          instance.step === 1 ? 'justify-end' : 'justify-between'
        } flex h-10 items-center font-plex text-sm font-medium`}
      >
        {instance.step === 1 ? <></> : <PrevStepButton />}
        <NextStepButton />
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Slide}
      />
    </>
  )
}

export default Page
