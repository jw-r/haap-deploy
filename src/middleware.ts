import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { NextRequest, NextResponse } from 'next/server'

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls: Routes = {
  '/': true,
}

export async function middleware(request: NextRequest) {
  const session = await auth()
  const exists = publicOnlyUrls[request.nextUrl.pathname]

  if (session?.user?.id) {
    if (exists) {
      return NextResponse.redirect(new URL('/home', request.url))
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
