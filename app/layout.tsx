import Sidebar from '@/components/Sidebar'
import '../styles/globals.scss'
import Navbar from '@/components/Navbar'

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
        className=''
      >
        <Navbar />
        <div className='flex h-full'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
