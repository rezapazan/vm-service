import Sidebar from '@/app/components/Sidebar'
import Navbar from '@/app/components/Navbar'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import InstancesProvider from '@/context/instances/instancesProvider'

export const metadata = {
  title: 'abrNOC VM Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className='scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded'
      >
        {/* TODO: provider placement */}
        <InstancesProvider>
          <Navbar />
          <div className='flex h-full w-full'>
            <Sidebar />
            {children}
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
            />
          </div>
        </InstancesProvider>
      </body>
    </html>
  )
}
