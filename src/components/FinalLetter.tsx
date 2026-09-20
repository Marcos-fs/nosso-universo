import { motion } from 'framer-motion'

type FinalLetterProps = { text: string }

export function FinalLetter({ text }: FinalLetterProps) {
  return (
    <motion.article
      className="letter-paper"
      initial={{ opacity: 0, y: 28, rotate: 0.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="letter-paper__topline"><span /> <span>para você</span> <span /></div>
      <div className="letter-paper__body">
        {text.split('\n').map((paragraph, index) => paragraph ? <p key={index}>{paragraph}</p> : <span className="letter-paper__space" key={index} />)}
      </div>
      <div className="letter-paper__seal" aria-hidden="true">♡</div>
    </motion.article>
  )
}
