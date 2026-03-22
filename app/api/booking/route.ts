import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree Tour (3hrs)',
  'sunrise-wildlife': 'Sunrise Wildlife Tour (3hrs)',
  'standard-1hr': 'Standard Kayaking (1hr)',
  celebration: 'Celebration Package',
}

const TOUR_RATES: Record<string, number | null> = {
  'sunset-banyan-tree': 3000,
  'sunrise-wildlife': 3000,
  'standard-1hr': 1000,
  celebration: null,
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, contactType, contactValue, tourType, tourDate, groupSize, specialRequests } =
    body as {
      name?: string
      contactType?: string
      contactValue?: string
      tourType?: string
      tourDate?: string
      groupSize?: number
      specialRequests?: string
    }

  // Validate required fields
  if (!name?.trim() || !contactType || !contactValue?.trim() || !tourType || !tourDate || !groupSize) {
    return NextResponse.json({ error: 'All required fields must be filled in.' }, { status: 400 })
  }
  if (!['email', 'whatsapp'].includes(contactType)) {
    return NextResponse.json({ error: 'Invalid contact type.' }, { status: 400 })
  }
  if (!TOUR_LABELS[tourType]) {
    return NextResponse.json({ error: 'Invalid tour type.' }, { status: 400 })
  }
  if (groupSize < 1 || groupSize > 20) {
    return NextResponse.json({ error: 'Group size must be between 1 and 20.' }, { status: 400 })
  }
  const today = new Date().toISOString().split('T')[0]
  if (tourDate < today) {
    return NextResponse.json({ error: 'Tour date cannot be in the past.' }, { status: 400 })
  }

  // Supabase env check
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: 'Booking service is not configured.' }, { status: 500 })
  }

  // Calculate total
  const rate = TOUR_RATES[tourType]
  const totalAmount = rate !== null ? rate * groupSize : null
  const tourLabel = TOUR_LABELS[tourType]

  // Insert to Supabase
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data: booking, error: dbError } = await supabase
    .from('bookings')
    .insert({
      name: name.trim(),
      contact_value: contactValue.trim(),
      contact_type: contactType,
      tour_type: tourType,
      tour_date: tourDate,
      group_size: groupSize,
      special_requests: specialRequests?.trim() || null,
      total_amount: totalAmount,
      status: 'pending',
    })
    .select('id')
    .single()

  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return NextResponse.json({ error: 'Failed to save booking. Please try again.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const totalDisplay = totalAmount ? `Rs ${totalAmount.toLocaleString()}` : 'Custom quote'

  // Customer confirmation (email)
  if (contactType === 'email' && process.env.RESEND_FROM_EMAIL) {
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: contactValue.trim(),
        subject: `Your AquaTrek booking is received — ${tourLabel}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #072D48;">Booking Received, ${name}!</h2>
            <p>Thank you for choosing AquaTrek Hikkaduwa. Here's a summary of your booking:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Tour</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tourLabel}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tourDate}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Group Size</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${groupSize} ${groupSize === 1 ? 'person' : 'people'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Estimated Total</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${totalDisplay}</td></tr>
            </table>
            <p>We'll confirm your booking within <strong>24 hours</strong>. If you have any questions, WhatsApp us at <strong>+94 77 336 6171</strong>.</p>
            <p style="color: #999; font-size: 12px;">AquaTrek Hikkaduwa · Rathgama Lake, Sri Lanka</p>
          </div>
        `,
      })
    } catch (err) {
      console.error('Customer email error:', err)
    }
  }

  // Customer confirmation (WhatsApp via Twilio)
  if (
    contactType === 'whatsapp' &&
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN
  ) {
    try {
      const twilio = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      )
      await twilio.messages.create({
        from: process.env.TWILIO_WHATSAPP_FROM,
        to: `whatsapp:${contactValue.trim()}`,
        body: `Hi ${name}! 🌊 We've received your AquaTrek booking for ${tourLabel} on ${tourDate} (${groupSize} ${groupSize === 1 ? 'person' : 'people'}). We'll confirm your spot within 24 hours. Questions? Just reply here!`,
      })
    } catch (err) {
      console.error('Twilio WhatsApp error:', err)
    }
  }

  // Manager alert
  if (process.env.RESEND_FROM_EMAIL && process.env.MANAGER_EMAIL) {
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.MANAGER_EMAIL,
        subject: `New Booking: ${name} — ${tourLabel} on ${tourDate}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #072D48;">New Booking Received</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Contact</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactType === 'whatsapp' ? '📱 WhatsApp: ' : '📧 Email: '}${contactValue}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Tour</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tourLabel}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${tourDate}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Group Size</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${groupSize}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Total</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${totalDisplay}</td></tr>
              ${specialRequests ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Special Requests</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${specialRequests}</td></tr>` : ''}
            </table>
            <p style="color: #999; font-size: 12px;">Booking ID: ${booking.id}</p>
          </div>
        `,
      })
    } catch (err) {
      console.error('Manager alert email error:', err)
    }
  }

  return NextResponse.json({ success: true, bookingId: booking.id })
}
