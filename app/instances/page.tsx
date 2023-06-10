'use client'

import React, { useEffect } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import { useInstance } from '@/context/instance/instanceContext'
import PrevStepButton from './components/PrevStepButton'
import NextStepButton from './components/NextStepButton'
import Views from './views'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getLocations, getTypes } from '@/api/instances'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

// make this part more reusable
const prefetchLocations = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['instanceLocations'],
    queryFn: getLocations,
  })
}

const prefetchTypes = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['instanceTypes'],
    queryFn: getTypes,
  })
}

const Page = () => {
  const [instance] = useInstance()

  useEffect(() => {
    prefetchLocations()
    prefetchTypes()
  }, [])

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
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Slide}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Page
