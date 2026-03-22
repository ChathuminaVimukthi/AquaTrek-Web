'use client'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/manager/login' })}
      className="w-full text-left px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
      style={{ fontFamily: '"Asap", Sans-serif' }}
    >
      Sign Out
    </button>
  )
}
