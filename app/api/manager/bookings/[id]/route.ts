import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { auth } from '@/auth'

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree Tour (3hrs)',
  'sunrise-wildlife': 'Sunrise Wildlife Tour (3hrs)',
  'standard-1hr': 'Standard Kayaking (1hr)',
  celebration: 'Celebration Package',
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => null)
  if (!body?.status) return NextResponse.json({ error: 'status is required' }, { status: 400 })

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Fetch current booking before update
  const { data: booking } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single()

  const { data, error } = await supabase
    .from('bookings')
    .update({ status: body.status })
    .eq('id', id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Send customer notification on status change (skip for walk-in bookings)
  if (booking && booking.source !== 'walkin' && process.env.RESEND_FROM_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const tourLabel = TOUR_LABELS[booking.tour_type] || booking.tour_type
    const totalDisplay = booking.total_amount ? `Rs ${Number(booking.total_amount).toLocaleString()}` : 'Custom quote'

    if (body.status === 'confirmed' && booking.contact_type === 'email') {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: booking.contact_value,
          subject: `Your AquaTrek booking is confirmed — ${tourLabel}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="color: #072D48;">Booking Confirmed! 🎉</h2>
              <p>Hi ${booking.name}, your booking is confirmed. See you on the water!</p>
              <table style="width:100%; border-collapse:collapse; margin:16px 0;">
                <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Tour</td><td style="padding:8px; border-bottom:1px solid #eee;">${tourLabel}</td></tr>
                <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Date</td><td style="padding:8px; border-bottom:1px solid #eee;">${booking.tour_date}</td></tr>
                <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Group Size</td><td style="padding:8px; border-bottom:1px solid #eee;">${booking.group_size}</td></tr>
                <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Total</td><td style="padding:8px; border-bottom:1px solid #eee;">${totalDisplay}</td></tr>
              </table>
              <p>Questions? WhatsApp us at <strong>+94 72 130 1524</strong></p>
            </div>`,
        })
      } catch (err) { console.error('Confirmation email error:', err) }
    }

    if (body.status === 'cancelled' && booking.contact_type === 'email') {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: booking.contact_value,
          subject: `Your AquaTrek booking has been cancelled`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2 style="color: #072D48;">Booking Cancelled</h2>
              <p>Hi ${booking.name}, your booking for <strong>${tourLabel}</strong> on <strong>${booking.tour_date}</strong> has been cancelled.</p>
              <p>If you'd like to rebook, visit <a href="https://aquatrekhikkaduwa.com/booking">aquatrekhikkaduwa.com/booking</a> or WhatsApp us at <strong>+94 72 130 1524</strong>.</p>
            </div>`,
        })
      } catch (err) { console.error('Cancellation email error:', err) }
    }

    // WhatsApp notifications (Twilio)
    if (
      (body.status === 'confirmed' || body.status === 'cancelled') &&
      booking.contact_type === 'whatsapp' &&
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN
    ) {
      try {
        const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
        const msg = body.status === 'confirmed'
          ? `Hi ${booking.name}! 🎉 Your AquaTrek booking for ${tourLabel} on ${booking.tour_date} is CONFIRMED. See you on the water! Questions? Reply here.`
          : `Hi ${booking.name}, your AquaTrek booking for ${tourLabel} on ${booking.tour_date} has been cancelled. To rebook, WhatsApp us or visit aquatrekhikkaduwa.com/booking`
        await twilio.messages.create({
          from: process.env.TWILIO_WHATSAPP_FROM,
          to: `whatsapp:${booking.contact_value}`,
          body: msg,
        })
      } catch (err) { console.error('Twilio status notification error:', err) }
    }
  }

  return NextResponse.json(data)
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase.from('bookings').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
