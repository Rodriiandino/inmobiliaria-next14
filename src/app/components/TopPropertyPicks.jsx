import styles from './TopPropertyPicks.module.css'

export default function TopPropertyPicks() {
  return (
    <section className={styles.bestChoice}>
      <article className={styles.bestChoice__container}>
        <header className={styles.header}>
          <h4 className={styles.title__decor}>Propiedades Destacadas</h4>
          <h3 className={styles.title}>
            Inmobiliaria - Constructora<span>.</span>
          </h3>
        </header>
        <div className={styles.bestChoice__content}>
          <section className={styles.bestChoice__category}>
            <h4 className={styles.bestChoice__subtitle}>Casas</h4>
            <div className={styles.card__container}>Cards</div>
          </section>
          <section className={styles.bestChoice__category}>
            <h4 className={styles.bestChoice__subtitle}>Terrenos</h4>
            <div className={styles.card__container}>Cards</div>
          </section>
          <section className={styles.bestChoice__category}>
            <h4 className={styles.bestChoice__subtitle}>Departamentos</h4>
            <div className={styles.card__container}>Cards</div>
          </section>
        </div>
      </article>
    </section>
  )
}
