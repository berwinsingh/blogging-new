import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/components/font'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Content Canvas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        </body>
    </html>
  )
}