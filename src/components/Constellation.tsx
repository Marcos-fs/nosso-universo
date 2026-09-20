import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ConstellationMemory } from '../data/loveData'

type ConstellationProps = { memories: readonly ConstellationMemory[] }

export function Constellation({ memories }: ConstellationProps) {
  const [active, setActive] = useState<ConstellationMemory | null>(null)
  const lines = memories.slice(0, -1)

  return (
    <div className="constellation-wrap">
      <div className="constellation-orbit constellation-orbit--one" aria-hidden="true" />
      <div className="constellation-orbit constellation-orbit--two" aria-hidden="true" />
      <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {lines.map((memory, index) => {
          const next = memories[index + 1]
          return <line key={memory.id} x1={memory.x} y1={memory.y} x2={next.x} y2={next.y} />
        })}
      </svg>
      <div className="constellation-center" aria-hidden="true">
        <span>nós</span>
        <i />
      </div>
      {memories.map((memory) => (
        <motion.button
          key={memory.id}
          className={`constellation-star ${memory.featured ? 'constellation-star--featured' : ''}`}
          style={{ left: `${memory.x}%`, top: `${memory.y}%` }}
          onClick={() => setActive(memory)}
          whileHover={{ scale: 1.18 }}
          whileTap={{ scale: 0.94 }}
          aria-label={`Abrir memória: ${memory.title}`}
        >
          <span className="constellation-star__core" />
          <span className="constellation-star__halo" />
        </motion.button>
      ))}
      {active && (
        <motion.div className="constellation-memory" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status">
          <button className="constellation-memory__close" onClick={() => setActive(null)} aria-label="Fechar memória">×</button>
          <span className="eyebrow">memória {String(active.id).padStart(2, '0')}</span>
          <h3>{active.title}</h3>
          <p>{active.message}</p>
        </motion.div>
      )}
    </div>
  )
}
