import type { NextAuthConfig } from 'next-auth'

// Edge-compatible config (no Node.js-only imports like bcrypt)
export const authConfig = {
  pages: { signIn: '/manager/login' },
  session: { strategy: 'jwt' as const },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isLoginPage = nextUrl.pathname === '/manager/login'
      if (!isLoggedIn && !isLoginPage) {
        return Response.redirect(new URL('/manager/login', nextUrl))
      }
      if (isLoggedIn && isLoginPage) {
        return Response.redirect(new URL('/manager/dashboard', nextUrl))
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role
      return token
    },
    async session({ session, token }) {
      if (session.user) (session.user as any).role = token.role
      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig
