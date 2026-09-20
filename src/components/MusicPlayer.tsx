import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

type MusicPlayerProps = {
  title: string
  artist: string
  file: string
  autoplaySignal?: number
}

export function MusicPlayer({ title, artist, file, autoplaySignal = 0 }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.72)
  const [audioMissing, setAudioMissing] = useState(false)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const togglePlay = async () => {
    if (!audioRef.current || audioMissing) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      return
    }
    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const formatTime = (value: number) => {
    if (!Number.isFinite(value)) return '00:00'
    return `${Math.floor(value / 60).toString().padStart(2, '0')}:${Math.floor(value % 60).toString().padStart(2, '0')}`
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={file}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setAudioMissing(true)}
      />
      <div className="music-player__record" aria-hidden="true"><span /><i /></div>
      <div className="music-player__info">
        <span className="eyebrow">trilha sonora</span>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
      <div className="music-player__wave" aria-hidden="true">
        {Array.from({ length: 20 }, (_, index) => <i className={isPlaying ? 'is-playing' : ''} key={index} style={{ height: `${20 + ((index * 17) % 46)}%`, animationDelay: `${index * 0.07}s` }} />)}
      </div>
      <button className="music-player__play" onClick={togglePlay} disabled={audioMissing} aria-label={audioMissing ? 'Adicione um arquivo de áudio para tocar' : isPlaying ? 'Pausar música' : 'Tocar música'}>
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
      </button>
      <div className="music-player__controls">
        <input
          className="music-player__progress"
          type="range"
          min="0"
          max={duration || 1}
          value={Math.min(currentTime, duration || 1)}
          onChange={(event) => {
            const value = Number(event.target.value)
            setCurrentTime(value)
            if (audioRef.current) audioRef.current.currentTime = value
          }}
          aria-label="Progresso da música"
        />
        <div className="music-player__time"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
        <label className="music-player__volume">
          {volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} aria-label="Volume" />
        </label>
      </div>
      <p className="music-player__note">{audioMissing ? 'Adicione sua música em public/audio/nossa-musica.mp3' : 'A música começa quando você quiser.'}</p>
    </div>
  )
}
