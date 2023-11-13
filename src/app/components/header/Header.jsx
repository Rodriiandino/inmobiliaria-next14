'use client'

import Link from 'next/link'
import styles from './Header.module.css'
import { link } from '../router/Link'
import NavExpanded from './NavExpanded'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.container__logo}>
          <Image
            src='/logo/logo.svg'
            alt='Logo-Empresa'
            width={50}
            height={50}
          ></Image>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {link.map((label, route) => (
              <li
                style={{
                  color: pathname === label.router ? '#baa360' : '#f9f9f9'
                }}
                key={route}
                className={styles.li}
              >
                <Link href={label.router}> {label.label} </Link>
              </li>
            ))}
          </ul>
        </nav>
        <NavExpanded />
      </div>
    </header>
  )
}
