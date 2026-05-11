import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

// Supabase table required:
// create table email_subscribers (
//   id         uuid primary key default gen_random_uuid(),
//   name       text not null,
//   email      text unique not null,
//   source     text,
//   created_at timestamptz default now()
// );

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })

  const { name, email, source } = body as { name?: string; email?: string; source?: string }

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Save to Supabase (server-side client uses service role key if available, else anon)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error: dbError } = await supabase
    .from('email_subscribers')
    .insert({ name: name.trim(), email: email.trim().toLowerCase(), source: source ?? 'unknown' })

  // Duplicate email is not an error from the user's perspective
  if (dbError && !dbError.message.includes('duplicate')) {
    console.error('Supabase insert error:', dbError)
    return NextResponse.json({ error: 'Could not save subscription' }, { status: 500 })
  }

  const alreadySubscribed = !!dbError

  // Send welcome email (skip if already subscribed to avoid duplicates)
  if (!alreadySubscribed) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const guideUrl = 'https://aquatrekhikkaduwa.com/guides/rathgama-wildlife-guide'

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: email.trim(),
        subject: 'Your Rathgama Lake Wildlife Guide is here 🦅',
        html: `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
          <body style="margin:0;padding:0;background:#F5F0E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#3D342A">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F0E8;padding:32px 16px">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

                  <!-- Header -->
                  <tr>
                    <td style="background:#1C3A2B;padding:32px;border-radius:12px 12px 0 0;text-align:center">
                      <p style="margin:0 0 8px;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:0.1em;text-transform:uppercase">AquaTrek · Hikkaduwa</p>
                      <h1 style="margin:0;color:#FFFFFF;font-size:28px;font-weight:700;line-height:1.2">Your Wildlife Guide<br>is ready, ${name}!</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="background:#FFFFFF;padding:40px 32px">
                      <p style="margin:0 0 20px;font-size:16px;line-height:1.7">
                        Welcome to AquaTrek! Here's the free <strong>Rathgama Lake Wildlife Spotting Guide</strong> you requested — your cheat sheet for what to look for on the lake.
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px">
                        <tr>
                          <td style="background:#EBF2EC;border-radius:8px;padding:20px 24px">
                            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#4A7C59;text-transform:uppercase;letter-spacing:0.05em">What's inside</p>
                            <ul style="margin:0;padding-left:20px;font-size:14px;line-height:2;color:#3D342A">
                              <li>Kingfishers, herons &amp; brahminy kites — best spots</li>
                              <li>Water monitor lizards — where to find them</li>
                              <li>Dawn vs. dusk — which tour sees more wildlife</li>
                              <li>What to wear and bring for photos</li>
                            </ul>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px">
                        <tr>
                          <td align="center">
                            <a href="${guideUrl}" style="display:inline-block;background:#C4623A;color:#FFFFFF;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:9999px">
                              Download Your Wildlife Guide →
                            </a>
                          </td>
                        </tr>
                      </table>

                      <hr style="border:none;border-top:1px solid #EDE5D4;margin:28px 0">

                      <p style="margin:0 0 12px;font-size:15px;line-height:1.7">
                        <strong>Ready to see them in person?</strong> Our Sunrise Wildlife Tour (6:00 AM, Rs 3,000/person) is the best time to spot wildlife on Rathgama Lake — calm water, golden light, and the most active birds of the day.
                      </p>
                      <p style="margin:0 0 24px;font-size:15px;line-height:1.7">
                        Just message us on WhatsApp and we'll sort the rest:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <a href="https://wa.me/94721301524" style="display:inline-block;background:#25D366;color:#FFFFFF;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:9999px">
                              Book on WhatsApp
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#1C3A2B;padding:24px 32px;border-radius:0 0 12px 12px;text-align:center">
                      <p style="margin:0 0 4px;color:rgba(255,255,255,0.5);font-size:12px">AquaTrek Water Adventures</p>
                      <p style="margin:0;color:rgba(255,255,255,0.5);font-size:12px">Dodandugoda Road, Dodanduwa, Hikkaduwa 80240, Sri Lanka</p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
          </html>
        `,
      })
    } catch (err) {
      // Email failure should not block a successful subscription
      console.error('Resend welcome email error:', err)
    }
  }

  return NextResponse.json({ success: true, alreadySubscribed })
}
