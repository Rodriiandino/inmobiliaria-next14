import styles from './Footer.module.css'
import InfoUbicacion from '../InfoRedes/InfoUbicacion'
import InfoPhone from '../InfoRedes/InfoPhone'
import InfoInstagram from '../InfoRedes/InfoInstagram'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.container__info}>
          <h3>Andino Rodrigo Agustín</h3>
          <h4>INMOBILIARIA-Next14</h4>
          <p>Pagina de prueba, para poner en practica Next14</p>
          <ul className={styles.info__redes}>
            <li>
              <InfoUbicacion />
            </li>
            <li>
              <InfoPhone />
            </li>
            <li>
              <InfoInstagram />
            </li>
          </ul>
        </div>
        <div className={styles.container__logo}>
          <Image
            src='/logo/logoTitle.svg'
            alt='Logo-Empresa'
            width={50}
            height={50}
          />
        </div>
      </div>
    </footer>
  )
}
