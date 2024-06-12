import { BottomNavLayout } from '@/components/bottom-nav-layout'
import { Viewport } from 'next'
import { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {}

export const viewport: Viewport = {
  initialScale: 1.0,
  userScalable: false,
  maximumScale: 1.0,
  minimumScale: 1.0,
}

export default function TabsLayout({ children }: LayoutProps) {
  return <BottomNavLayout>{children}</BottomNavLayout>
}
