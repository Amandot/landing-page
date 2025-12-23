'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  const startGlitch = () => {
    if (isGlitching) return
    
    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 10

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index]
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join('')
      )

      if (iterations >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
        setIsGlitching(false)
      }

      iterations += 1 / 3
    }, 30)
  }

  return (
    <motion.span
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={startGlitch}
      whileHover={{ scale: 1.02 }}
    >
      {displayText}
    </motion.span>
  )
}

export default GlitchText