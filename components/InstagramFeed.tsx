'use client'

import Script from 'next/script'

export default function InstagramFeed() {
  return (
    <>
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
      <div className="elfsight-app-09720c07-be38-4157-87a9-bdf202e3915f" data-elfsight-app-lazy />
    </>
  )
}
