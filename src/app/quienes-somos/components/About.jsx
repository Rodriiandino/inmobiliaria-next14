import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <article className={styles.about__container}>
        <div className={styles.about__info}>
          <div className={styles.info__primary}>
            <h1 className={styles.primary__title}>¿QUIÉNES SOMOS?</h1>
            <p>
              Somos una empresa joven e innovadora en constante desarrollo.
              Brindamos confianza y seguridad a todos nuestros clientes,
              alcanzando su mayor satisfacción.
            </p>
            <p>
              Contamos con todos los servicios inmobiliarios: compra, venta y
              alquiler de casas, departamentos, oficinas, locales comerciales y
              terrenos.
            </p>
            <p>
              Nos capacitamos constantemente para brindarle el mejor servicio a
              nuestros clientes, manteniéndolos constantemente actualizados.
            </p>
          </div>
          <div className={styles.info__secondary}>
            <div className={styles.secondarty__mision}>
              <img
                src='/Icons/mision.svg'
                alt='icon-Foco-idea'
                width={100}
                height={50}
              ></img>
              <div>
                <h4 className={styles.secondary__title}>MISIÓN</h4>
                <p>
                  Ser identificados por nuestro excelente servicio, generando
                  confianza y seguridad a todos nuestros clientes y así alcanzar
                  su máxima satisfacción.
                </p>
              </div>
            </div>
            <div className={styles.decor}></div>
            <div className={styles.secondarty__vision}>
              <img
                src='/Icons/vision.svg'
                alt='icon-Foco-idea'
                width={100}
                height={50}
              ></img>
              <div>
                <h4 className={styles.secondary__title}>VISIÓN</h4>
                <p>
                  Ser la inmobiliaria líder en el mercado, reconocida por su
                  integridad profesional a nivel nacional e internacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
