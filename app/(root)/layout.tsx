import type { Metadata } from 'next'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'Orchestrate | Event manager for your events',
  description: 'Event Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
        </div>
  )
}
