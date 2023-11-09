'use client'
import { useState, useEffect } from 'react'
import styles from './ScrollToTopButton.module.css'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const scrollY = window.scrollY
    const breakpoint = 300
    setShowButton(scrollY > breakpoint)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`${styles.scrollToTopButton} ${showButton ? styles.show : ''}`}
      onClick={scrollToTop}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M12 5l0 14'></path>
        <path d='M18 11l-6 -6'></path>
        <path d='M6 11l6 -6'></path>
      </svg>
    </button>
  )
}
