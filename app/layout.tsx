import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const space_Grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '600', '700'], variable : '--font-space_Grotesk' })

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
    <ClerkProvider>
      <html lang="en">
        <body className={space_Grotesk.variable}>
            <NextTopLoader />
            {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
