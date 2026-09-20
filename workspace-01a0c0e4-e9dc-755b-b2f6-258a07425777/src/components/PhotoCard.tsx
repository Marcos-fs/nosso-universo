import { useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { PhotoItem } from '../data/loveData'
import { VisualPlaceholder } from './VisualPlaceholder'

type PhotoCardProps = {
  photo: PhotoItem
  index: number
  onOpen: (photo: PhotoItem) => void
}

export function PhotoCard({ photo, index, onOpen }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false)
  const rotation = [-2.2, 1.5, -1, 2.2, -1.4, 1][index % 6]

  return (
    <button
      className="photo-card"
      style={{ '--rotation': `${rotation}deg` } as CSSProperties}
      onClick={() => onOpen(photo)}
      aria-label={`Abrir foto: ${photo.title}`}
    >
      <span className="photo-card__tape" aria-hidden="true" />
      <span className="photo-card__image-wrap">
        <span className={`photo-card__placeholder ${loaded ? 'is-hidden' : ''}`}>
          <VisualPlaceholder label="[FOTO]" variant="photo" compact />
        </span>
        {photo.image && (
          <img
            className={`photo-card__image ${loaded ? 'is-loaded' : ''}`}
            src={photo.image}
            alt={photo.caption}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          />
        )}
        <span className="photo-card__open"><ArrowUpRight size={16} strokeWidth={1.5} /></span>
      </span>
      <span className="photo-card__meta">
        <span className="photo-card__title">{photo.title}</span>
        {photo.caption && !photo.caption.startsWith('[') && <span className="photo-card__caption">{photo.caption}</span>}
        {photo.date && !photo.date.startsWith('[') && <span className="photo-card__date">{photo.date}</span>}
      </span>
    </button>
  )
}
