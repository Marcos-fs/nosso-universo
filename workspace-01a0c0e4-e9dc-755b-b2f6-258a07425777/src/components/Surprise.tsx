import { useState } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { VisualPlaceholder } from './VisualPlaceholder'

type SurpriseProps = { image?: string; text: string; subtext: string; names: string }

export function Surprise({ image, text, subtext, names }: SurpriseProps) {
  const [revealed, setRevealed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`surprise ${revealed ? 'surprise--revealed' : ''}`}>
      {!revealed ? (
        <motion.div className="surprise__question" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="surprise__tiny-mark">✦</span>
          <p>Antes de você ir...</p>
          <h2>Você quer ver<br />uma última coisa?</h2>
          <button className="button button--outline" onClick={() => setRevealed(true)}>
            Sim <span>♡</span>
          </button>
        </motion.div>
      ) : (
        <motion.div className="surprise__reveal" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}>
          <div className={`surprise__image ${loaded ? 'surprise__image--loaded' : ''}`}>
            <VisualPlaceholder label="[FOTO ESPECIAL]" variant="surprise" />
            {image && <img src={image} alt="Foto especial" onLoad={() => setLoaded(true)} />}
          </div>
          <span className="eyebrow"><Sparkles size={12} /> último capítulo</span>
          <h2>{text.split('\n').map((line, index) => <span key={index}>{line}</span>)}</h2>
          <p>{subtext}</p>
          <div className="surprise__names">{names}</div>
          <ArrowDown className="surprise__arrow" size={16} aria-hidden="true" />
        </motion.div>
      )}
    </div>
  )
}
