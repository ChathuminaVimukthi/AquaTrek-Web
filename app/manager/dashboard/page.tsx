import { createClient } from '@supabase/supabase-js'

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree',
  'sunrise-wildlife': 'Sunrise Wildlife',
  'standard-1hr': 'Standard (1hr)',
  celebration: 'Celebration',
}

const STATUS_STYLES: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
}

async function getStats() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: bookings } = await supabase.from('bookings').select('*')
  if (!bookings) return { total: 0, pending: 0, confirmed: 0, monthRevenue: 0, recent: [] }

  const now = new Date()
  const monthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`

  const total = bookings.length
  const pending = bookings.filter((b) => b.status === 'pending').length
  const confirmed = bookings.filter((b) => b.status === 'confirmed').length
  const monthRevenue = bookings
    .filter((b) => b.status === 'confirmed' && b.tour_date?.startsWith(monthPrefix))
    .reduce((sum, b) => sum + (Number(b.total_amount) || 0), 0)
  const recent = bookings.slice(0, 10)

  return { total, pending, confirmed, monthRevenue, recent }
}

export default async function DashboardPage() {
  const { total, pending, confirmed, monthRevenue, recent } = await getStats()

  const stats = [
    { label: 'Total Bookings', value: total, color: 'bg-blue-50 text-blue-700' },
    { label: 'Pending', value: pending, color: 'bg-yellow-50 text-yellow-700' },
    { label: 'Confirmed', value: confirmed, color: 'bg-green-50 text-green-700' },
    { label: 'This Month Revenue', value: `Rs ${monthRevenue.toLocaleString()}`, color: 'bg-purple-50 text-purple-700' },
  ]

  return (
    <div className="p-8">
      <h1
        className="text-2xl font-bold text-brand-navy mb-8"
        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
      >
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.color} rounded-lg p-5`}>
            <p className="text-sm font-medium opacity-70" style={{ fontFamily: '"Asap", Sans-serif' }}>
              {stat.label}
            </p>
            <p className="text-3xl font-bold mt-1" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <h2
        className="text-lg font-bold text-brand-navy mb-4"
        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
      >
        Recent Bookings
      </h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm" style={{ fontFamily: '"Asap", Sans-serif' }}>
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Tour</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Group</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {recent.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                  No bookings yet
                </td>
              </tr>
            )}
            {recent.map((b: any) => (
              <tr key={b.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-brand-navy">{b.name}</td>
                <td className="px-4 py-3 text-gray-600">{TOUR_LABELS[b.tour_type] || b.tour_type}</td>
                <td className="px-4 py-3 text-gray-600">{b.tour_date}</td>
                <td className="px-4 py-3 text-gray-600">{b.group_size}</td>
                <td className="px-4 py-3 text-gray-600">
                  {b.total_amount ? `Rs ${Number(b.total_amount).toLocaleString()}` : '—'}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_STYLES[b.status] || 'bg-gray-100 text-gray-600'}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
