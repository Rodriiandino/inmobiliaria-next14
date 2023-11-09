import Link from 'next/link'
import styles from './Header.module.css'
import { link } from '../router/Link'
import NavExpanded from './NavExpanded'
import Image from 'next/image'

export default function Header() {
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
              <li key={route} className={styles.li}>
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
