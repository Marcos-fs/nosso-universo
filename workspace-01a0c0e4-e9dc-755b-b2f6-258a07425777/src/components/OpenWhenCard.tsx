import { ArrowUpRight, Mail } from 'lucide-react'
import type { OpenWhenItem } from '../data/loveData'

type OpenWhenCardProps = {
  item: OpenWhenItem
  index: number
  onOpen: (item: OpenWhenItem) => void
}

export function OpenWhenCard({ item, index, onOpen }: OpenWhenCardProps) {
  return (
    <button className={`open-card open-card--${item.accent}`} onClick={() => onOpen(item)}>
      <span className="open-card__number">0{index + 1}</span>
      <span className="open-card__icon"><Mail size={20} strokeWidth={1.2} /></span>
      <span className="open-card__eyebrow">{item.eyebrow}</span>
      <strong>{item.label}</strong>
      <span className="open-card__action">abrir carta <ArrowUpRight size={14} /></span>
    </button>
  )
}
