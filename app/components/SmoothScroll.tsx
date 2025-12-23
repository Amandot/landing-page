'use client'

import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Simple smooth scrolling behavior
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    handleSmoothScroll()

    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    
    const handleClick = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      if (href) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    links.forEach(link => {
      link.addEventListener('click', handleClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return null
}

export default SmoothScroll