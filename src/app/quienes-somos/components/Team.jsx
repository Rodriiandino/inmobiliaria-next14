import styles from './Team.module.css'

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.team__container}>
        <h2 className={styles.title}>Inmobiliaria | Constructora</h2>
        <div className={styles.logo__container}>
          <img src='/logo/logoTitle.svg' alt='Logo' width={100} height={100} />
          <p>
            Juntos te ayudamos y te acompañamos a decidir la mejor inversión
            para vos.
          </p>
        </div>
      </div>
    </section>
  )
}
