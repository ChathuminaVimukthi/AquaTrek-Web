type GaEvent =
  | { name: 'whatsapp_click'; params: { source: string } }
  | { name: 'phone_click'; params: { source: string } }
  | { name: 'email_click'; params: { source: string } }
  | { name: 'booking_form_start'; params: Record<string, never> }
  | { name: 'booking_submitted'; params: { tour: string } }
  | { name: 'email_signup'; params: { source: string } }
  | { name: 'lead_magnet_download'; params: Record<string, never> }

export function trackEvent(event: GaEvent) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event.name, event.params)
  }
}
