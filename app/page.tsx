"use client"

import React, { useCallback, useState } from 'react'
import { generatePptx } from '../lib/generatePptx'
import { VisualPreview } from '../components/VisualPreview'

export default function Page() {
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDownload = useCallback(async () => {
    setError(null)
    setGenerating(true)
    try {
      await generatePptx()
    } catch (e: any) {
      setError(e?.message ?? 'Failed to generate PPTX')
    } finally {
      setGenerating(false)
    }
  }, [])

  return (
    <main className="min-h-screen hero-gradient">
      <section className="container-max pt-14 pb-8">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 bg-white/10 border border-white/15 rounded-full px-3 py-1">Microbiology ? Teaching Resource</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Acid Fast Staining
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Premium PPT Generator</span>
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">A beautifully-designed, content-rich presentation with custom visuals on Ziehl?Neelsen and Kinyoun methods. One click to download.</p>
          <div className="flex items-center gap-3">
            <button onClick={onDownload} disabled={generating} className="button-primary">
              {generating ? 'Generating?' : 'Download PPTX'}
            </button>
            <a href="#preview" className="button-secondary">Preview visuals</a>
          </div>
          {error && <p className="text-red-300">{error}</p>}
        </div>
      </section>

      <section id="preview" className="container-max pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <VisualPreview variant="cell-wall" />
          <VisualPreview variant="workflow" />
          <VisualPreview variant="results" />
          <VisualPreview variant="safety" />
        </div>
      </section>

      <footer className="container-max pb-10 text-center text-white/50 text-sm">? {new Date().getFullYear()} Acid Fast Staining PPT Generator</footer>
    </main>
  )
}
