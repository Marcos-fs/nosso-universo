import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Check, Clock3, Heart, LockKeyhole, Menu, Plus, Sparkles, X } from 'lucide-react'
import { BackgroundStars } from './components/BackgroundStars'
import { SectionTitle } from './components/SectionTitle'
import { VisualPlaceholder } from './components/VisualPlaceholder'
import { PhotoCard } from './components/PhotoCard'
import { Timeline } from './components/Timeline'
import { OpenWhenCard } from './components/OpenWhenCard'
import { MusicPlayer } from './components/MusicPlayer'
import { FinalLetter } from './components/FinalLetter'
import { Surprise } from './components/Surprise'
import { loveData, type OpenWhenItem, type PhotoItem } from './data/loveData'
import { useRelationshipCounter } from './hooks/useRelationshipCounter'
import { useScrollReveal } from './hooks/useScrollReveal'
import type { FormEvent } from 'react'

function App() {
  const [entered, setEntered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLetter, setActiveLetter] = useState<OpenWhenItem | null>(null)
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null)
  const [dreamModalOpen, setDreamModalOpen] = useState(false)
  const [secretVisible, setSecretVisible] = useState(false)
  const [secretClicks, setSecretClicks] = useState(0)
  const [newDream, setNewDream] = useState('')
  const [customDreams, setCustomDreams] = useState<string[]>([])
  const [reason, setReason] = useState('Clique no botão. Eu guardei alguns motivos para você.')
  const [reasonsShown, setReasonsShown] = useState(0)
  const reasonQueue = useRef<number[]>([])
  const counter = useRelationshipCounter(loveData.couple.startDate)
  const dreamReveal = useScrollReveal<HTMLElement>(0.1)

  const allDreams = useMemo(() => [...loveData.dreams, ...customDreams], [customDreams])
  const personalizedLetter = loveData.finalLetter
    .replace(/\[MEU NOME\]/g, loveData.couple.myName)
    .replace(/\[NOME DELA\]/g, loveData.couple.partnerName)
  const modalIsOpen = Boolean(activeLetter || activePhoto || dreamModalOpen || secretVisible)

  useEffect(() => {
    const saved = window.localStorage.getItem('nosso-universo-dreams')
    if (saved) {
      try {
        setCustomDreams(JSON.parse(saved))
      } catch {
        window.localStorage.removeItem('nosso-universo-dreams')
      }
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('modal-open', modalIsOpen)
    return () => document.body.classList.remove('modal-open')
  }, [modalIsOpen])

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveLetter(null)
        setActivePhoto(null)
        setDreamModalOpen(false)
        setSecretVisible(false)
      }
    }
    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [])

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const showNextReason = () => {
    if (!reasonQueue.current.length) {
      reasonQueue.current = loveData.reasons.map((_, index) => index)
      setReasonsShown(0)
    }
    const randomPosition = Math.floor(Math.random() * reasonQueue.current.length)
    const [selectedIndex] = reasonQueue.current.splice(randomPosition, 1)
    setReason(loveData.reasons[selectedIndex])
    setReasonsShown((current) => current >= loveData.reasons.length ? 1 : current + 1)
  }

  const addDream = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const cleanDream = newDream.trim()
    if (!cleanDream) return
    const updatedDreams = [...customDreams, cleanDream]
    setCustomDreams(updatedDreams)
    window.localStorage.setItem('nosso-universo-dreams', JSON.stringify(updatedDreams))
    setNewDream('')
    setDreamModalOpen(false)
  }

  const handleSecretClick = () => {
    const nextClicks = secretClicks + 1
    if (nextClicks >= 5) {
      setSecretVisible(true)
      setSecretClicks(0)
    } else {
      setSecretClicks(nextClicks)
    }
  }

  const counterItems = [
    ['dias', counter.days.toString().padStart(3, '0')],
    ['horas', counter.hours.toString().padStart(2, '0')],
    ['minutos', counter.minutes.toString().padStart(2, '0')],
    ['segundos', counter.seconds.toString().padStart(2, '0')],
  ]

  return (
    <div className={`app-shell ${entered ? 'app-shell--entered' : ''}`}>
      <BackgroundStars />
      <AnimatePresence>
        {!entered && <WelcomeScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <header className="site-header">
        <button className="brand-mark" onClick={() => goTo('inicio')} aria-label="Voltar ao início">
          <span className="brand-mark__symbol">✦</span>
          <span>nosso <b>universo</b></span>
        </button>
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
          <button onClick={() => goTo('historia')}>história</button>
          <button onClick={() => goTo('album')}>álbum</button>
          <button onClick={() => goTo('carta')}>carta</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main>
        <section className="hero section-shell" id="inicio">
          <div className="hero__copy">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={entered ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.25 }}>
              <span className="eyebrow"><span className="eyebrow__dot" /> um lugar só nosso</span>
              <h1>{loveData.hero.title.split('\n').map((line, index) => <span key={index}>{line}</span>)}</h1>
              <p className="hero__subtitle">{loveData.hero.subtitle}</p>
              <div className="hero__signature">
                <span>{loveData.couple.partnerName}</span><i>×</i><span>{loveData.couple.myName}</span>
              </div>
            </motion.div>
          </div>
          <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={entered ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <HeroImage src={loveData.hero.image} />
            <span className="hero__visual-note hero__visual-note--top">[FOTO 01]</span>
            <span className="hero__visual-note hero__visual-note--bottom">uma memória para começar</span>
          </motion.div>
          <button className="hero__scroll" onClick={() => goTo('contador')} aria-label="Rolar para a próxima seção"><span>continue descendo</span><ArrowDown size={16} /></button>
        </section>

        <section className="counter-section section-shell" id="contador">
          <div className="counter-section__intro">
            <span className="eyebrow">o tempo que a gente inventou</span>
            <h2>Desde que a nossa<br /><em>história começou.</em></h2>
            <p>Estamos escrevendo essa história há...</p>
            <div className="counter-date"><Clock3 size={13} /> {loveData.couple.startDateLabel}</div>
          </div>
          <div className="counter-grid" aria-label="Contador do relacionamento">
            {counterItems.map(([label, value]) => <div className="counter-unit" key={label}><strong>{loveData.couple.startDate ? value : '—'}</strong><span>{label}</span></div>)}
          </div>
          {!counter.isConfigured && <p className="config-hint">O contador aparece assim até você adicionar a data em <code>src/data/loveData.ts</code>.</p>}
        </section>

        <section className="story-section section-shell" id="historia">
          <SectionTitle eyebrow="capítulo um" title="Tudo começou em algum lugar." description="Não precisa ser uma história perfeita. Só precisa ser a nossa." />
          <Timeline items={loveData.timeline} />
        </section>

        <section className="little-section section-shell section-shell--narrow" id="pequenas-coisas">
          <SectionTitle eyebrow="inventário afetivo" title="Talvez sejam as pequenas coisas." description="As que parecem discretas, mas acabam ocupando os lugares mais importantes." />
          <div className="little-grid">
            {loveData.littleThings.map((thing, index) => (
              <motion.article className={`little-card little-card--${index % 4}`} key={thing} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.3) }}>
                <span className="little-card__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="little-card__spark">✦</span>
                <p>{thing}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="open-section section-shell" id="abra-quando">
          <div className="open-section__heading">
            <SectionTitle eyebrow="para dias específicos" title={<>Algumas coisas para você<br /><em>abrir quando precisar.</em></>} description="Não são respostas para tudo. São só lembretes de que você nunca precisa atravessar nada sozinha." />
            <span className="open-section__stamp">cartas<br /><b>♡</b><br />para guardar</span>
          </div>
          <div className="open-grid">
            {loveData.openWhen.map((item, index) => <OpenWhenCard item={item} index={index} key={item.label} onOpen={setActiveLetter} />)}
          </div>
        </section>

        <section className="album-section section-shell" id="album">
          <div className="album-section__heading">
            <SectionTitle eyebrow="arquivo de instantes" title="Nosso álbum." description="As fotos que ainda não foram colocadas aqui estão esperando por você em public/images/photos/." />
            <span className="album-section__counter">{String(loveData.photos.length).padStart(2, '0')} <small>memórias</small></span>
          </div>
          <div className="photo-grid">
            {loveData.photos.map((photo, index) => <PhotoCard photo={photo} index={index} key={photo.title} onOpen={setActivePhoto} />)}
          </div>
        </section>

        <section className="reasons-section section-shell section-shell--narrow" id="motivos">
          <div className="reasons-card">
            <span className="reasons-card__orb reasons-card__orb--one" /><span className="reasons-card__orb reasons-card__orb--two" />
            <div className="reasons-card__topline"><span>arquivo de motivos</span><span>{String(reasonsShown || 0).padStart(2, '0')} / 100</span></div>
            <span className="reasons-card__mark">01</span>
            <h2>Eu poderia tentar explicar<br />por que amo você.</h2>
            <p className={`reasons-card__reason ${reasonsShown ? 'reasons-card__reason--visible' : ''}`}>{reason}</p>
            <button className="button button--soft" onClick={showNextReason}>{reasonsShown ? 'Outro motivo' : 'Me mostra um'} <ArrowRight size={15} /></button>
            <div className="reasons-card__footer"><span>Mas talvez cem motivos ainda sejam poucos.</span><Heart size={13} fill="currentColor" /></div>
          </div>
        </section>

        <section className="dreams-section section-shell" ref={dreamReveal.ref} id="sonhos">
          <div className="dreams-section__copy">
            <span className="eyebrow">capítulo três</span>
            <h2>Ainda temos muita<br /><em>história pela frente.</em></h2>
            <p>Algumas coisas que eu quero viver com você. As maiores e as mais simples.</p>
            <button className="button button--outline" onClick={() => setDreamModalOpen(true)}><Plus size={16} /> adicionar outro sonho</button>
          </div>
          <div className={`dreams-list ${dreamReveal.isVisible ? 'is-visible' : ''}`}>
            {allDreams.map((dream, index) => <div className="dream-item" key={`${dream}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><p>{dream}</p><i>↗</i></div>)}
          </div>
        </section>

        <section className="music-section section-shell section-shell--narrow" id="musica">
          <div className="music-section__intro"><span className="eyebrow">quando as palavras não bastam</span><h2>Tem uma música<br /><em>tocando aqui.</em></h2><p>Coloque a nossa música em <code>public/audio/</code>. O player não quebra enquanto ela não chega.</p></div>
          <MusicPlayer title={loveData.music.title} artist={loveData.music.artist} file={loveData.music.file} />
        </section>

        <section className="letter-section section-shell" id="carta">
          <div className="letter-section__intro"><span className="eyebrow">última carta antes do fim</span><h2>Antes de você ir...</h2><p>Eu queria deixar uma coisa escrita. Do jeito mais simples que consegui.</p></div>
          <FinalLetter text={personalizedLetter} />
        </section>

        <section className="surprise-section section-shell" id="surpresa">
          <Surprise image={loveData.surprise.image} text={loveData.surprise.text} subtext={loveData.surprise.subtext} names={`${loveData.couple.partnerName}  ♡  ${loveData.couple.myName}`} />
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__line"><span /><button className="secret-trigger" onClick={handleSecretClick} aria-label="Pequena estrela"><Sparkles size={14} /></button><span /></div>
        <p>Feito com amor por <b>{loveData.couple.myName}</b>.</p>
        <p>Para <b>{loveData.couple.partnerName}</b>.</p>
        <small>Nosso universo — {loveData.couple.year}</small>
        <button className="footer-heart" onClick={handleSecretClick} aria-label="Encontrar uma surpresa escondida">♡</button>
      </footer>

      <AnimatePresence>
        {activeLetter && <LetterModal item={activeLetter} onClose={() => setActiveLetter(null)} />}
        {activePhoto && <PhotoModal photo={activePhoto} onClose={() => setActivePhoto(null)} />}
        {dreamModalOpen && <DreamModal value={newDream} onChange={setNewDream} onSubmit={addDream} onClose={() => setDreamModalOpen(false)} />}
        {secretVisible && <SecretModal message={loveData.secretMessage} onClose={() => setSecretVisible(false)} />}
      </AnimatePresence>
    </div>
  )
}

function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div className="welcome-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.85, ease: 'easeInOut' }}>
      <div className="welcome-screen__constellation" aria-hidden="true"><i /><i /><i /><i /><span /><span /></div>
      <div className="welcome-screen__content">
        <span className="welcome-screen__eyebrow"><span /> uma experiência particular <span /></span>
        <h1>Nós, em algum lugar<br /><em>do universo.</em></h1>
        <p>Um pequeno lugar que existe<br />só para nós dois.</p>
        <button className="button button--enter" onClick={onEnter}>entrar no nosso universo <span>♡</span><ArrowRight size={15} /></button>
        <small>aperte para começar</small>
      </div>
      <div className="welcome-screen__footer"><span>fechado para o resto do mundo</span><span>vol. 01 — nós</span></div>
    </motion.div>
  )
}

function HeroImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(Boolean(src))
  const [failed, setFailed] = useState(false)
  return <div className={`hero-art ${loaded && !failed ? 'hero-art--loaded' : ''}`}>
    <VisualPlaceholder label="" variant="hero" />
    {src && <img src={src} alt="Foto principal do casal" onLoad={() => { setFailed(false); setLoaded(true) }} onError={() => { setFailed(true); setLoaded(false) }} />}
    <span className="hero-art__ring hero-art__ring--one" /><span className="hero-art__ring hero-art__ring--two" />
  </div>
}

function LetterModal({ item, onClose }: { item: OpenWhenItem; onClose: () => void }) {
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <motion.div className={`letter-modal letter-modal--${item.accent}`} initial={{ opacity: 0, y: 24, rotate: -1.2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.45 }} role="dialog" aria-modal="true" aria-labelledby="open-letter-title">
      <button className="modal-close" onClick={onClose} aria-label="Fechar carta"><X size={18} /></button>
      <span className="letter-modal__stamp">♡</span><span className="eyebrow">{item.eyebrow}</span><h2 id="open-letter-title">{item.label}</h2><div className="letter-modal__rule" /><p>{item.message}</p><span className="letter-modal__signature">com carinho,<br /><b>{loveData.couple.myName}</b></span>
    </motion.div>
  </motion.div>
}

function PhotoModal({ photo, onClose }: { photo: PhotoItem; onClose: () => void }) {
  const [loaded, setLoaded] = useState(false)
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <motion.div className="photo-modal" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} role="dialog" aria-modal="true" aria-label={photo.title}>
      <button className="modal-close modal-close--dark" onClick={onClose} aria-label="Fechar foto"><X size={18} /></button>
      <div className={`photo-modal__image ${loaded ? 'photo-modal__image--loaded' : ''}`}><VisualPlaceholder label="[FOTO]" variant="photo" />{photo.image && <img src={photo.image} alt={photo.caption} onLoad={() => setLoaded(true)} />}</div>
      <div className="photo-modal__info">{photo.date && !photo.date.startsWith('[') && <span className="eyebrow">{photo.date}</span>}<h2>{photo.title}</h2>{photo.caption && !photo.caption.startsWith('[') && <p>{photo.caption}</p>}</div>
    </motion.div>
  </motion.div>
}

function DreamModal({ value, onChange, onSubmit, onClose }: { value: string; onChange: (value: string) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void; onClose: () => void }) {
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <motion.div className="form-modal" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} role="dialog" aria-modal="true" aria-labelledby="dream-title">
      <button className="modal-close" onClick={onClose} aria-label="Fechar"><X size={18} /></button><span className="eyebrow">um espaço em branco</span><h2 id="dream-title">Qual sonho a gente<br /><em>coloca aqui?</em></h2>
      <form onSubmit={onSubmit}><label htmlFor="dream-input">um desejo para o futuro</label><input id="dream-input" autoFocus value={value} onChange={(event) => onChange(event.target.value)} placeholder="Escreva alguma coisa que ainda queremos viver..." maxLength={120} /><button className="button button--soft" type="submit"><Check size={15} /> guardar sonho</button></form>
    </motion.div>
  </motion.div>
}

function SecretModal({ message, onClose }: { message: string; onClose: () => void }) {
  return <motion.div className="modal-backdrop modal-backdrop--secret" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <motion.div className="secret-modal" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} role="dialog" aria-modal="true"><button className="modal-close modal-close--dark" onClick={onClose} aria-label="Fechar"><X size={18} /></button><LockKeyhole size={22} strokeWidth={1.2} /><span className="eyebrow">você encontrou</span>{message.split('\n').map((line, index) => line ? <p key={index}>{line}</p> : <span className="secret-modal__space" key={index} />)}</motion.div>
  </motion.div>
}

export default App
