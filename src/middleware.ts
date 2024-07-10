import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { NextRequest, NextResponse } from 'next/server'

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls: Routes = {
  '/': true,
}
const privateOnlyUrls: Routes = {
  '/my': true,
}

export async function middleware(request: NextRequest) {
  const session = await auth()
  const isPublicOnly = publicOnlyUrls[request.nextUrl.pathname]
  const isPrivateOnly = privateOnlyUrls[request.nextUrl.pathname]

  if (session?.user?.id) {
    if (isPublicOnly) {
      return NextResponse.redirect(new URL('/home', request.url))
    }
  } else {
    if (isPrivateOnly) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
