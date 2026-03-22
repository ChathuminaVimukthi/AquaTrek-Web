/**
 * Usage: node scripts/set-admin-password.mjs
 *
 * Generates the SQL to insert or update the admin user's password hash
 * in the manager_users table.
 */

import bcrypt from 'bcryptjs'
import readline from 'readline'

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('Admin email [aquatrekhikka@gmail.com]: ', (emailInput) => {
  const email = emailInput.trim() || 'aquatrekhikka@gmail.com'

  rl.question('New password: ', async (password) => {
    rl.close()

    if (!password.trim()) {
      console.error('Password cannot be empty.')
      process.exit(1)
    }

    const hash = await bcrypt.hash(password.trim(), 10)

    console.log('\n--- Run this in your Supabase SQL editor ---\n')
    console.log(`INSERT INTO manager_users (email, password_hash, name, role)`)
    console.log(`VALUES ('${email}', '${hash}', 'Admin', 'admin')`)
    console.log(`ON CONFLICT (email) DO UPDATE SET password_hash = '${hash}';\n`)
  })
})
