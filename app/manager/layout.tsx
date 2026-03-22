import Link from 'next/link'
import SignOutButton from '@/components/SignOutButton'
import { auth } from '@/auth'

const adminLinks = [
  { href: '/manager/dashboard', label: 'Dashboard' },
  { href: '/manager/bookings', label: 'Bookings' },
  { href: '/manager/finance', label: 'Finance' },
  { href: '/manager/admin/users', label: 'Users' },
]

const managerLinks = [
  { href: '/manager/dashboard', label: 'Dashboard' },
  { href: '/manager/bookings', label: 'Bookings' },
  { href: '/manager/finance', label: 'Finance' },
]

export default async function ManagerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  const isAdmin = (session?.user as any)?.role === 'admin'

  const navLinks = isAdmin ? adminLinks : managerLinks
  const portalLabel = isAdmin ? 'Admin Portal' : 'Manager Portal'

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-brand-navy flex flex-col flex-shrink-0">
        <div className="px-6 py-6 border-b border-white/10">
          <p
            className="text-white font-bold text-lg"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            AquaTrek
          </p>
          <p
            className={`text-xs mt-0.5 ${isAdmin ? 'text-brand-teal' : 'text-white/50'}`}
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            {portalLabel}
          </p>
        </div>

        <nav className="flex-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors ${isAdmin ? 'border-l-2 border-transparent hover:border-brand-teal' : ''}`}
              style={{ fontFamily: '"Asap", Sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 py-4">
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
