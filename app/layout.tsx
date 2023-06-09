import Sidebar from '@/app/components/Sidebar'
import Navbar from '@/app/components/Navbar'
import InstanceProvider from '@/context/instance/instanceProvider'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

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
        <Navbar />
        <div className='flex h-full w-full'>
          <Sidebar />
          <InstanceProvider>{children}</InstanceProvider>
        </div>
      </body>
    </html>
  )
}
