import Sidebar from '@/app/components/Sidebar'
import '../styles/globals.scss'
import Navbar from '@/app/components/Navbar'

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
          {children}
        </div>
      </body>
    </html>
  )
}
