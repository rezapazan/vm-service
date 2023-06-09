'use client'

import React from 'react'
import Locations from './components/Locations'
import { Slide, ToastContainer } from 'react-toastify'

const Page = () => {
  return (
    <>
      <Locations />
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
