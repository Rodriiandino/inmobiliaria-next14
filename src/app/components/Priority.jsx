import Image from 'next/image'
import styles from './Priority.module.css'
import Link from 'next/link'
import { link } from './router/Link'

export default function Priority() {
  const linkToAbout = link.find(item => item.label === 'QUIENES SOMOS')

  return (
    <section className={styles.priority}>
      <article className={styles.priority__container}>
        <header className={styles.header}>
          <h3 className={styles.title}>
            Nuestra Prioridad<span>.</span>
          </h3>
          <div className={styles.header__text}>
            <p>
              Nos especializamos en la venta de terrenos y casas. Nuestra misión
              es ayudarte a encontrar la propiedad perfecta que se ajuste a tus
              necesidades y sueños.
            </p>

            <p>
              En cada transacción, nuestro compromiso es brindar un servicio de
              calidad excepcional y asegurarnos de que nuestros clientes se
              sientan respaldados y satisfechos en todo momento.
            </p>
          </div>
        </header>
        <article className={styles.props}>
          <ul>
            <li>
              <img
                src='/Icons/home.svg'
                alt='icon-casa'
                width={50}
                height={50}
              />
              <h5>
                <strong>Expertos en Bienes Raíces</strong>
              </h5>
              <p>Tu socio confiable en la búsqueda de tu hogar ideal.</p>
            </li>
            <li>
              <img
                src='/Icons/list.svg'
                alt='icon-lista'
                width={50}
                height={50}
              />
              <h5>
                <strong>70+ inmobiliarias disponibles</strong>
              </h5>

              <p>Amplia selección de opciones para encontrar tu nuevo hogar.</p>
            </li>
            <li>
              <img
                src='/Icons/map.svg'
                alt='icon-mapa'
                width={50}
                height={50}
              />
              <h5>
                <strong>Encuentra tu hogar</strong>
              </h5>

              <p>
                Venta y Alquiler de propiedades que se adaptan a tu estilo de
                vida.
              </p>
            </li>
          </ul>
        </article>
        <footer className={styles.footer}>
          <div className={styles.footer__imageOne}>
            <Image
              src='/mock/house2.jpg'
              alt='house'
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.footer__text}>
            <h3 className={styles.title}>
              Lo que obtienes al elegirnos<span>.</span>
            </h3>
            <p>
              Obtendrás lo que no encontrarás en ningún otro lugar, como el
              precio más barato en su categoría, la garantía de calidad de los
              productos y muchos tipos de propiedades que ofrecemos.
            </p>
            <div className={styles.link__container}>
              <Link href={linkToAbout.router}>
                Ver más
                <img
                  src='/Icons/arrow.svg'
                  alt='arrow'
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
          <div className={styles.footer__imageTwo}>
            <Image
              src='/mock/house1.jpg'
              alt='house'
              width={1000}
              height={1000}
            />
          </div>
        </footer>
      </article>
    </section>
  )
}
