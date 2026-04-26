import React from 'react'
import Image from 'next/image'

interface ImageWithOverlayProps {
  src: string
  alt: string
  overlayColor?: string
  overlayOpacity?: number
  children?: React.ReactNode
  className?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
}

export function ImageWithOverlay({
  src,
  alt,
  overlayColor,
  overlayOpacity,
  children,
  className = '',
  priority = false,
  fill = true,
  width,
  height,
}: ImageWithOverlayProps) {
  const gradient = overlayColor
    ? `rgba(0,0,0,${overlayOpacity ?? 0.4})`
    : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(28,58,43,0.55))'

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 800}
          priority={priority}
          className="object-cover w-full h-full"
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: overlayColor ? `rgba(0,0,0,${overlayOpacity ?? 0.4})` : gradient }}
      />
      {children && (
        <div className="absolute inset-0 z-10">{children}</div>
      )}
    </div>
  )
}
