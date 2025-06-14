import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Check if the request is for an API route
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Allow public API routes
    if (
      request.nextUrl.pathname.startsWith('/api/auth/login') ||
      request.nextUrl.pathname.startsWith('/api/auth/register') ||
      request.nextUrl.pathname.startsWith('/api/contact')
    ) {
      return NextResponse.next();
    }

    // Check authentication for protected API routes
    if (!token) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // Verify the token
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your-secret-key'
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }
  }

  // For non-API routes, redirect to login if not authenticated
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
}; 