type VisualPlaceholderProps = {
  label?: string
  variant?: 'hero' | 'photo' | 'memory' | 'surprise'
  compact?: boolean
}

export function VisualPlaceholder({ label = '[FOTO]', variant = 'photo', compact = false }: VisualPlaceholderProps) {
  return (
    <div className={`visual-placeholder visual-placeholder--${variant} ${compact ? 'visual-placeholder--compact' : ''}`} aria-label={`Espaço reservado para ${label}`}>
      <span className="visual-placeholder__orbit visual-placeholder__orbit--one" />
      <span className="visual-placeholder__orbit visual-placeholder__orbit--two" />
      <span className="visual-placeholder__planet" />
      <span className="visual-placeholder__label">{label}</span>
      <span className="visual-placeholder__hint">adicione sua imagem aqui</span>
    </div>
  )
}
