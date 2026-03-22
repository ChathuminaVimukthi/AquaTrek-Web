'use client'

import { useEffect, useState } from 'react'

type User = {
  id: string
  email: string
  name: string
  role: string
  is_active: boolean
  created_at: string
}

const defaultForm = { name: '', email: '', password: '', role: 'manager' }

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editUser, setEditUser] = useState<User | null>(null)
  const [form, setForm] = useState(defaultForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('/api/manager/users')
    const data = await res.json()
    setUsers(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  const openAdd = () => {
    setEditUser(null)
    setForm(defaultForm)
    setError('')
    setShowModal(true)
  }

  const openEdit = (user: User) => {
    setEditUser(user)
    setForm({ name: user.name, email: user.email, password: '', role: user.role })
    setError('')
    setShowModal(true)
  }

  const submit = async () => {
    if (!form.name || !form.email || (!editUser && !form.password)) {
      setError('Name, email, and password are required.')
      return
    }
    setSubmitting(true)
    setError('')

    const res = editUser
      ? await fetch(`/api/manager/users/${editUser.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: form.name, role: form.role, ...(form.password ? { password: form.password } : {}) }),
        })
      : await fetch('/api/manager/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Something went wrong.')
    } else {
      setShowModal(false)
      fetchUsers()
    }
    setSubmitting(false)
  }

  const deactivate = async (id: string) => {
    if (!confirm('Deactivate this user? They will no longer be able to log in.')) return
    await fetch(`/api/manager/users/${id}`, { method: 'DELETE' })
    fetchUsers()
  }

  const reactivate = async (id: string) => {
    await fetch(`/api/manager/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: true }),
    })
    fetchUsers()
  }

  return (
    <div className="p-8" style={{ fontFamily: '"Asap", Sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-bold text-brand-navy"
          style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
        >
          Manager Accounts
        </h1>
        <button
          onClick={openAdd}
          className="px-4 py-2 text-sm font-semibold bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors rounded"
        >
          + Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">Loading…</td></tr>
            )}
            {!loading && users.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">No users</td></tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className={`hover:bg-gray-50 ${!u.is_active ? 'opacity-50' : ''}`}>
                <td className="px-4 py-3 font-medium text-brand-navy">{u.name}</td>
                <td className="px-4 py-3 text-gray-600">{u.email}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {u.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => openEdit(u)}
                    className="text-xs text-brand-navy hover:underline"
                  >
                    Edit
                  </button>
                  {u.is_active ? (
                    <button
                      onClick={() => deactivate(u.id)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => reactivate(u.id)}
                      className="text-xs text-green-600 hover:text-green-800"
                    >
                      Reactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / Edit modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2
              className="text-lg font-bold text-brand-navy mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              {editUser ? 'Edit User' : 'Add User'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  disabled={!!editUser}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy disabled:bg-gray-50 disabled:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                  {editUser ? 'New Password (leave blank to keep current)' : 'Password'}
                </label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Role</label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-50 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={submitting}
                className="flex-1 px-4 py-2 text-sm font-semibold bg-brand-navy text-white rounded hover:bg-brand-navy/90 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
