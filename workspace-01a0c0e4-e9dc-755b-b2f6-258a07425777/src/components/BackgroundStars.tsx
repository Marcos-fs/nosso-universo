export function BackgroundStars() {
  const stars = Array.from({ length: 64 }, (_, index) => ({
    left: `${(index * 43 + 7) % 100}%`,
    top: `${(index * 67 + 11) % 100}%`,
    size: `${index % 7 === 0 ? 2.4 : index % 3 === 0 ? 1.8 : 1.1}px`,
    delay: `${(index % 12) * 0.65}s`,
    duration: `${4 + (index % 6)}s`,
    opacity: 0.28 + ((index * 13) % 50) / 100,
  }))

  return (
    <div className="background-stars" aria-hidden="true">
      <div className="background-stars__glow background-stars__glow--one" />
      <div className="background-stars__glow background-stars__glow--two" />
      {stars.map((star, index) => (
        <span
          className={`background-star ${index % 11 === 0 ? 'background-star--bright' : ''}`}
          key={index}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}
