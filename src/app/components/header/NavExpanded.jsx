'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './NavExpanded.module.css'
import { link } from '../router/Link'

export default function NavExpanded() {
  const [expanded, setExpanded] = useState(false)

  const handleIconClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <button
        className={`${styles.circle__icon} ${
          expanded ? styles.is__active : ''
        } `}
        onClick={handleIconClick}
      >
        <span className={styles.hamburger__box}>
          <span className={styles.hamburger__inner}></span>
        </span>
      </button>
      {expanded && (
        <div className={styles.expanded__screen}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              {link.map((label, route) => (
                <li key={route} className={styles.li}>
                  <Link href={label.router}>{label.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
