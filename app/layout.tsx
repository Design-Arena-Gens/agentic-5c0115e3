export const metadata = {
  title: 'Acid Fast Staining ? Beautiful PPT Generator',
  description: 'Generate a premium PPT on Acid Fast Staining with custom visuals.'
}

import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
