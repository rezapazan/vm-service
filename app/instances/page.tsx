'use client'

import React from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import { useInstance } from '@/context/instance/instanceContext'
import PrevStepButton from './components/PrevStepButton'
import NextStepButton from './components/NextStepButton'
import Views from './views'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const Page = () => {
  const [instance] = useInstance()

  return (
    <QueryClientProvider client={queryClient}>
      <Views />
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Page
