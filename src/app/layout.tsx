import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin DashBoard',
  description: 'Admin DashBoard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/*we are passing the modal provider here so that we can use it anywhere in our app to reuse our modal*/}
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
