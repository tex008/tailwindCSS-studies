import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from '../components/SideBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <SideBar />
          <main className=":pt-8 px-4 pb-12 pt-24 lg:col-start-2 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
