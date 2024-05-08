import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import TanstackProvider from '@/providers/tanstack-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Haap',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'bg-background text-white')}>
        <TanstackProvider>
          <div className="relative m-auto min-h-screen max-w-[420px] overflow-hidden shadow-sm shadow-accent">
            {children}
          </div>
        </TanstackProvider>
      </body>
    </html>
  )
}
