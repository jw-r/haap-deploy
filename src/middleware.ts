import { auth } from '@/app/api/auth/[...nextauth]/auth'
import { NextResponse } from 'next/server'

interface Routes {
  [key: string]: boolean
}

const publicOnlyUrls: Routes = {
  '/': true,
}
const privateOnlyUrls: Routes = {
  '/my': true,
}

export default auth((req) => {
  const isPrivateOnly = privateOnlyUrls[req.nextUrl.pathname]
  const isPublicOnly = publicOnlyUrls[req.nextUrl.pathname]

  if (req.auth) {
    if (isPublicOnly) {
      return NextResponse.redirect(new URL('/home', 'http://localhost:3000'))
    }
  } else {
    if (isPrivateOnly) {
      return NextResponse.redirect(new URL('/', 'http://localhost:3000'))
    }
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
