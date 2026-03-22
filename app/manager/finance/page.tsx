'use client'

import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns'

const EXPENSE_CATEGORIES = ['Equipment', 'Fuel', 'Staff', 'Marketing', 'Maintenance', 'Other']

const PIE_COLORS = ['#0ea5e9', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444', '#6b7280']

type Booking = { id: string; tour_date: string; total_amount: number; status: string; name: string | null; tour_type: string; source?: string }
type Expense = { id: string; date: string; category: string; amount: number; note?: string }

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree',
  'sunrise-wildlife': 'Sunrise Wildlife',
  'standard-1hr': 'Standard (1hr)',
  celebration: 'Celebration',
  walkin: 'Walk-in',
}

const emptyExpense = { date: '', category: 'Equipment', amount: '', note: '' }

const defaultWalkIn = { tour_date: '', group_size: 1, total_amount: 0 }

export default function FinancePage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState<typeof emptyExpense>(emptyExpense)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [showWalkIn, setShowWalkIn] = useState(false)
  const [walkIn, setWalkIn] = useState(defaultWalkIn)
  const [walkInSubmitting, setWalkInSubmitting] = useState(false)

  const fetchAll = async () => {
    const [bRes, eRes] = await Promise.all([
      fetch('/api/manager/bookings'),
      fetch('/api/manager/expenses'),
    ])
    const [b, e] = await Promise.all([bRes.json(), eRes.json()])
    setBookings(Array.isArray(b) ? b : [])
    setExpenses(Array.isArray(e) ? e : [])
    setLoading(false)
  }

  useEffect(() => { fetchAll() }, [])

  const confirmedBookings = bookings.filter((b) => b.status === 'confirmed' && b.total_amount)
  const totalIncome = confirmedBookings.reduce((s, b) => s + Number(b.total_amount), 0)
  const totalExpenses = expenses.reduce((s, e) => s + Number(e.amount), 0)

  // Bar chart: last 6 months revenue
  const barData = Array.from({ length: 6 }, (_, i) => {
    const d = subMonths(new Date(), 5 - i)
    const label = format(d, 'MMM')
    const start = format(startOfMonth(d), 'yyyy-MM-dd')
    const end = format(endOfMonth(d), 'yyyy-MM-dd')
    const revenue = confirmedBookings
      .filter((b) => b.tour_date >= start && b.tour_date <= end)
      .reduce((s, b) => s + Number(b.total_amount), 0)
    return { month: label, revenue }
  })

  // Pie chart: expense breakdown
  const expenseByCategory = EXPENSE_CATEGORIES.map((cat) => ({
    name: cat,
    value: expenses.filter((e) => e.category === cat).reduce((s, e) => s + Number(e.amount), 0),
  })).filter((e) => e.value > 0)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = async () => {
    if (!form.date || !form.category || !form.amount) return
    setSaving(true)
    const body = { date: form.date, category: form.category, amount: Number(form.amount), note: form.note }
    if (editingId) {
      await fetch(`/api/manager/expenses/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } else {
      await fetch('/api/manager/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    }
    setForm(emptyExpense)
    setEditingId(null)
    setSaving(false)
    fetchAll()
  }

  const handleEdit = (exp: Expense) => {
    setForm({ date: exp.date, category: exp.category, amount: String(exp.amount), note: exp.note || '' })
    setEditingId(exp.id)
  }

  const submitWalkIn = async () => {
    if (!walkIn.tour_date || !walkIn.group_size || !walkIn.total_amount) return
    setWalkInSubmitting(true)
    await fetch('/api/manager/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...walkIn, tour_type: 'walkin' }),
    })
    setShowWalkIn(false)
    setWalkIn(defaultWalkIn)
    setWalkInSubmitting(false)
    fetchAll()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this expense?')) return
    await fetch(`/api/manager/expenses/${id}`, { method: 'DELETE' })
    fetchAll()
  }

  const inputCls = 'px-3 py-2 bg-gray-100 border border-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary'

  return (
    <div className="p-8" style={{ fontFamily: '"Asap", Sans-serif' }}>
      <h1 className="text-2xl font-bold text-brand-navy mb-8" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
        Finance
      </h1>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-green-50 text-green-700 rounded-lg p-5">
          <p className="text-sm font-medium opacity-70">Total Income</p>
          <p className="text-3xl font-bold mt-1" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs {totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 text-red-700 rounded-lg p-5">
          <p className="text-sm font-medium opacity-70">Total Expenses</p>
          <p className="text-3xl font-bold mt-1" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs {totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-blue-50 text-blue-700 rounded-lg p-5">
          <p className="text-sm font-medium opacity-70">Net Profit</p>
          <p className="text-3xl font-bold mt-1" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs {(totalIncome - totalExpenses).toLocaleString()}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-base font-bold text-brand-navy mb-4" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Monthly Revenue (Last 6 Months)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: number) => [`Rs ${v.toLocaleString()}`, 'Revenue']} />
              <Bar dataKey="revenue" fill="#072D48" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-base font-bold text-brand-navy mb-4" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Expense Breakdown</h2>
          {expenseByCategory.length === 0 ? (
            <div className="h-[220px] flex items-center justify-center text-gray-400 text-sm">No expenses yet</div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={expenseByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                  {expenseByCategory.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `Rs ${v.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Walk-in modal */}
      {showWalkIn && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-brand-navy mb-4" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Record Walk-in Income
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Date</label>
                <input
                  type="date"
                  value={walkIn.tour_date}
                  onChange={(e) => setWalkIn({ ...walkIn, tour_date: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Number of People</label>
                <input
                  type="number"
                  min={1}
                  value={walkIn.group_size}
                  onChange={(e) => setWalkIn({ ...walkIn, group_size: Number(e.target.value) })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Total Amount (Rs)</label>
                <input
                  type="number"
                  min={0}
                  value={walkIn.total_amount}
                  onChange={(e) => setWalkIn({ ...walkIn, total_amount: Number(e.target.value) })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => { setShowWalkIn(false); setWalkIn(defaultWalkIn) }}
                className="flex-1 px-4 py-2 text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-50 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitWalkIn}
                disabled={walkInSubmitting || !walkIn.tour_date || !walkIn.total_amount}
                className="flex-1 px-4 py-2 text-sm font-semibold bg-brand-navy text-white rounded hover:bg-brand-navy/90 transition-colors disabled:opacity-50"
              >
                {walkInSubmitting ? 'Saving…' : 'Record Income'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Income table */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Income (Confirmed Bookings)</h2>
        <button
          onClick={() => setShowWalkIn(true)}
          className="px-4 py-2 text-sm font-semibold bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors rounded"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          + Record Income
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-10">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Tour</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading && <tr><td colSpan={4} className="px-4 py-6 text-center text-gray-400">Loading…</td></tr>}
            {!loading && confirmedBookings.length === 0 && <tr><td colSpan={4} className="px-4 py-6 text-center text-gray-400">No confirmed bookings</td></tr>}
            {confirmedBookings.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-brand-navy font-medium">
                  {b.source === 'walkin'
                    ? <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold">Walk-in</span>
                    : b.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{TOUR_LABELS[b.tour_type] || b.tour_type}</td>
                <td className="px-4 py-3 text-gray-600">{b.tour_date}</td>
                <td className="px-4 py-3 font-semibold text-green-700">Rs {Number(b.total_amount).toLocaleString()}</td>
              </tr>
            ))}
            {confirmedBookings.length > 0 && (
              <tr className="bg-gray-50 font-bold">
                <td colSpan={3} className="px-4 py-3 text-right text-brand-navy">Total</td>
                <td className="px-4 py-3 text-green-700">Rs {totalIncome.toLocaleString()}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Expenses */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Expenses</h2>
      </div>

      {/* Add/Edit form */}
      <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
        <p className="text-sm font-semibold text-brand-navy mb-3">{editingId ? 'Edit Expense' : 'Add Expense'}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <input type="date" name="date" value={form.date} onChange={handleFormChange} className={inputCls} />
          <select name="category" value={form.category} onChange={handleFormChange} className={inputCls}>
            {EXPENSE_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <input type="number" name="amount" value={form.amount} onChange={handleFormChange} placeholder="Amount (Rs)" className={inputCls} />
          <input type="text" name="note" value={form.note} onChange={handleFormChange} placeholder="Note (optional)" className={inputCls} />
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-brand-navy text-white px-5 py-2 text-sm font-semibold hover:bg-primary transition-colors disabled:opacity-60"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
          >
            {saving ? 'Saving…' : editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button onClick={() => { setEditingId(null); setForm(emptyExpense) }} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300">
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Note</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {!loading && expenses.length === 0 && <tr><td colSpan={5} className="px-4 py-6 text-center text-gray-400">No expenses yet</td></tr>}
            {expenses.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-600">{e.date}</td>
                <td className="px-4 py-3 text-gray-600">{e.category}</td>
                <td className="px-4 py-3 font-semibold text-red-600">Rs {Number(e.amount).toLocaleString()}</td>
                <td className="px-4 py-3 text-gray-400">{e.note || '—'}</td>
                <td className="px-4 py-3 flex gap-3">
                  <button onClick={() => handleEdit(e)} className="text-xs text-blue-500 hover:text-blue-700">Edit</button>
                  <button onClick={() => handleDelete(e.id)} className="text-xs text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
