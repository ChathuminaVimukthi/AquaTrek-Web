'use client'

import { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales: { 'en-US': enUS },
})

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree',
  'sunrise-wildlife': 'Sunrise Wildlife',
  'standard-1hr': 'Standard (1hr)',
  celebration: 'Celebration',
}

const STATUS_COLORS: Record<string, string> = {
  pending: '#d97706',
  confirmed: '#16a34a',
  cancelled: '#dc2626',
}

const STATUS_STYLES: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
}

const STATUSES = ['all', 'pending', 'confirmed', 'cancelled']

type Booking = {
  id: string
  name: string | null
  contact_value: string | null
  contact_type: string | null
  tour_type: string
  tour_date: string
  group_size: number
  special_requests?: string
  status: string
  total_amount?: number
  source?: string
  created_at: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'table' | 'calendar'>('table')
  const [filter, setFilter] = useState('all')
  const [calView, setCalView] = useState<View>('month')
  const [calDate, setCalDate] = useState(new Date())

  const fetchBookings = async () => {
    const res = await fetch('/api/manager/bookings')
    const data = await res.json()
    setBookings(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  useEffect(() => { fetchBookings() }, [])

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/manager/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    fetchBookings()
  }

  const deleteBooking = async (id: string) => {
    if (!confirm('Delete this booking?')) return
    await fetch(`/api/manager/bookings/${id}`, { method: 'DELETE' })
    fetchBookings()
  }

  const filtered = filter === 'all' ? bookings : bookings.filter((b) => b.status === filter)

  const calEvents = bookings.map((b) => ({
    id: b.id,
    title: b.source === 'walkin'
      ? `Walk-in · ${TOUR_LABELS[b.tour_type] || b.tour_type}`
      : `${b.name} · ${TOUR_LABELS[b.tour_type] || b.tour_type}`,
    start: new Date(b.tour_date + 'T08:00:00'),
    end: new Date(b.tour_date + 'T10:00:00'),
    resource: b,
  }))

  const eventStyleGetter = (event: any) => ({
    style: {
      backgroundColor: STATUS_COLORS[event.resource.status] || '#6b7280',
      borderRadius: 0,
      border: 'none',
      fontSize: '12px',
    },
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-bold text-brand-navy"
          style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
        >
          Bookings
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView('table')}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${view === 'table' ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy border border-gray-300 hover:bg-gray-50'}`}
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Table
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${view === 'calendar' ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy border border-gray-300 hover:bg-gray-50'}`}
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Calendar
          </button>
        </div>
      </div>

      {view === 'table' && (
        <>
          {/* Filter */}
          <div className="flex gap-2 mb-4">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1 text-xs font-semibold capitalize transition-colors ${filter === s ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'}`}
                style={{ fontFamily: '"Asap", Sans-serif' }}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Contact</th>
                  <th className="px-4 py-3 text-left">Tour</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Group</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading && (
                  <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">Loading…</td></tr>
                )}
                {!loading && filtered.length === 0 && (
                  <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400">No bookings</td></tr>
                )}
                {filtered.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-brand-navy">
                      {b.source === 'walkin' ? (
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold">Walk-in</span>
                      ) : (
                        b.name
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {b.source === 'walkin' ? (
                        <span className="text-gray-400">—</span>
                      ) : (
                        <>
                          <span className="uppercase text-gray-400 mr-1">{b.contact_type}</span>
                          {b.contact_value}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{TOUR_LABELS[b.tour_type] || b.tour_type}</td>
                    <td className="px-4 py-3 text-gray-600">{b.tour_date}</td>
                    <td className="px-4 py-3 text-gray-600">{b.group_size}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {b.total_amount ? `Rs ${Number(b.total_amount).toLocaleString()}` : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={b.status}
                        onChange={(e) => updateStatus(b.id, e.target.value)}
                        className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_STYLES[b.status] || 'bg-gray-100 text-gray-600'}`}
                      >
                        <option value="pending">pending</option>
                        <option value="confirmed">confirmed</option>
                        <option value="cancelled">cancelled</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="text-xs text-red-500 hover:text-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {view === 'calendar' && (
        <div className="bg-white rounded-lg shadow-sm p-4" style={{ height: 600 }}>
          <Calendar
            localizer={localizer}
            events={calEvents}
            view={calView}
            onView={setCalView}
            date={calDate}
            onNavigate={setCalDate}
            eventPropGetter={eventStyleGetter}
            style={{ height: '100%' }}
          />
        </div>
      )}
    </div>
  )
}
