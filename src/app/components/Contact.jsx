import styles from './Contact.module.css'
import Link from 'next/link'
import { link } from './router/Link'

export default function Contact() {
  const linkToContact = link.find(item => item.label === 'CONTÁCTENOS')

  return (
    <section className={styles.contact}>
      <article className={styles.contact__container}>
        <header className={styles.header}>
          <h4 className={styles.title}>
            Envíanos un Mensaje<span>.</span>
          </h4>
          <div className={styles.header__text}>
            <p>Si tienes alguna duda o consulta, no dudes en contactarnos.</p>
          </div>
        </header>
        <div className={styles.container__btn}>
          <Link href={linkToContact.router} className={styles.btn}>
            {linkToContact.label}
          </Link>
        </div>
        <footer className={styles.footer}>
          <p>Publica tu inmueble con nosotros</p>
        </footer>
      </article>
    </section>
  )
}
