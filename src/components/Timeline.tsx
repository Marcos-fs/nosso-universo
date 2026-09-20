import { motion } from 'framer-motion'
import type { TimelineItem } from '../data/loveData'
import { VisualPlaceholder } from './VisualPlaceholder'

type TimelineProps = { items: readonly TimelineItem[] }

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      <div className="timeline__line" aria-hidden="true" />
      {items.map((item, index) => (
        <motion.article
          className={`timeline-item ${index % 2 === 1 ? 'timeline-item--reverse' : ''}`}
          key={`${item.title}-${index}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="timeline-item__content">
            <span className="timeline-item__date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <span className="timeline-item__dot" aria-hidden="true"><span /></span>
          <div className="timeline-item__visual">
            {item.image ? <TimelineImage src={item.image} alt={item.title} /> : <VisualPlaceholder label="[MEMÓRIA]" variant="memory" compact />}
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function TimelineImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="timeline-image">
      <VisualPlaceholder label="[MEMÓRIA]" variant="memory" compact />
      <img src={src} alt={alt} loading="lazy" onLoad={(event) => { event.currentTarget.classList.add('is-loaded'); event.currentTarget.previousElementSibling?.classList.add('is-hidden') }} onError={(event) => { event.currentTarget.style.display = 'none' }} />
    </div>
  )
}
