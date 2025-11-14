"use client"

import React from 'react'

type Variant = 'cell-wall' | 'workflow' | 'results' | 'safety'

export function VisualPreview({ variant }: { variant: Variant }) {
  return (
    <div className="card p-5">
      {variant === 'cell-wall' && <CellWallDiagram />}
      {variant === 'workflow' && <WorkflowDiagram />}
      {variant === 'results' && <ResultsDiagram />}
      {variant === 'safety' && <SafetyDiagram />}
    </div>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mb-3 text-white/90">{children}</h3>
}

function CellWallDiagram() {
  return (
    <div>
      <Title>Acid-Fast Cell Wall vs Non?Acid-Fast</Title>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 rounded-xl p-3">
          <div className="text-sm mb-2 text-white/70">Acid-Fast (Mycobacterium)</div>
          <svg viewBox="0 0 220 140" className="w-full h-auto">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#2697e8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#114f82" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="200" height="120" rx="16" fill="url(#g1)" opacity="0.25" />
            <rect x="20" y="30" width="180" height="12" fill="#e0e7ff" />
            <rect x="20" y="50" width="180" height="18" fill="#94a3b8" />
            <rect x="20" y="72" width="180" height="26" fill="#ef476f" opacity="0.8" />
            <rect x="20" y="102" width="180" height="8" fill="#0ea5e9" />
            <text x="110" y="26" textAnchor="middle" fill="#fff" fontSize="10">Capsule (variable)</text>
            <text x="110" y="46" textAnchor="middle" fill="#fff" fontSize="10">Peptidoglycan</text>
            <text x="110" y="67" textAnchor="middle" fill="#fff" fontSize="10">Arabinogalactan</text>
            <text x="110" y="92" textAnchor="middle" fill="#fff" fontSize="10">Mycolic acids (hydrophobic barrier)</text>
            <text x="110" y="116" textAnchor="middle" fill="#fff" fontSize="10">Cytoplasmic membrane</text>
          </svg>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <div className="text-sm mb-2 text-white/70">Non?Acid-Fast (Gram-Positive)</div>
          <svg viewBox="0 0 220 140" className="w-full h-auto">
            <rect x="20" y="30" width="180" height="30" fill="#cbd5e1" />
            <rect x="20" y="70" width="180" height="10" fill="#0ea5e9" />
            <text x="110" y="50" textAnchor="middle" fill="#fff" fontSize="10">Thick peptidoglycan</text>
            <text x="110" y="86" textAnchor="middle" fill="#fff" fontSize="10">Cytoplasmic membrane</text>
          </svg>
        </div>
      </div>
    </div>
  )
}

function WorkflowDiagram() {
  return (
    <div>
      <Title>Ziehl?Neelsen Workflow</Title>
      <svg viewBox="0 0 600 200" className="w-full h-auto">
        <defs>
          <linearGradient id="b1" x1="0" x2="1">
            <stop offset="0%" stopColor="#2697e8" />
            <stop offset="100%" stopColor="#114f82" />
          </linearGradient>
        </defs>
        {['Carbol fuchsin + heat','Acid-alcohol decolorize','Methylene blue counterstain'].map((label, i) => (
          <g key={i} transform={`translate(${30 + i*190}, 50)`}>
            <rect width="170" height="60" rx="14" fill="url(#b1)" opacity="0.4" />
            <rect x="6" y="6" width="158" height="48" rx="12" fill="#0b1224" stroke="#3b82f6" opacity="0.9" />
            <text x="85" y="34" textAnchor="middle" fill="#c7d2fe" fontSize="12">{label}</text>
          </g>
        ))}
        <g>
          <polygon points="200,80 220,90 200,100" fill="#3b82f6" />
          <polygon points="390,80 410,90 390,100" fill="#3b82f6" />
        </g>
      </svg>
    </div>
  )
}

function ResultsDiagram() {
  return (
    <div>
      <Title>Interpretation</Title>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/70 rounded-xl p-3">
          <div className="text-sm mb-2 text-white/70">Positive (Acid-Fast)</div>
          <svg viewBox="0 0 220 140" className="w-full h-auto">
            <rect x="0" y="0" width="220" height="140" fill="#09090b" />
            {Array.from({length: 10}).map((_, i) => (
              <rect key={i} x={10 + i*18} y={20 + (i%3)*30} width="26" height="6" rx="3" fill="#ef476f" transform={`rotate(${(i%2?15:-15)}, ${10 + i*18 + 13}, ${20 + (i%3)*30 + 3})`} />
            ))}
          </svg>
        </div>
        <div className="bg-black/70 rounded-xl p-3">
          <div className="text-sm mb-2 text-white/70">Negative (Non?Acid-Fast)</div>
          <svg viewBox="0 0 220 140" className="w-full h-auto">
            <rect x="0" y="0" width="220" height="140" fill="#09090b" />
            {Array.from({length: 16}).map((_, i) => (
              <circle key={i} cx={10 + (i%8)*25} cy={20 + Math.floor(i/8)*50} r="6" fill="#3b82f6" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}

function SafetyDiagram() {
  return (
    <div>
      <Title>Biosafety Highlights</Title>
      <div className="grid sm:grid-cols-3 gap-3">
        {[{t:'BSL-2/3 practices', c:'#60a5fa'},{t:'Biological safety cabinet', c:'#f59e0b'},{t:'Heat caution', c:'#ef4444'}].map((o, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-white/80 font-medium">{o.t}</div>
            <div className="mt-2 h-1.5 rounded bg-white/10">
              <div className="h-1.5 rounded" style={{width: `${70+i*10}%`, background: o.c}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
