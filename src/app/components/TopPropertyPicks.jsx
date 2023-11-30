import styles from './TopPropertyPicks.module.css'
import categories from '../utils/enum-category'
import RealEstateFeaturedApiFetcher from './fetch/RealEstateFeaturedApiFetcher'
import { Suspense } from 'react'
import Loading from '../loading'

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
            <div className={styles.card__container}>
              <Suspense fallback={<Loading />}>
                <RealEstateFeaturedApiFetcher category={categories.CASA} />
              </Suspense>
            </div>
          </section>
          <section className={styles.bestChoice__category}>
            <h4 className={styles.bestChoice__subtitle}>Terrenos</h4>
            <div className={styles.card__container}>
              <Suspense fallback={<Loading />}>
                <RealEstateFeaturedApiFetcher category={categories.TERRENO} />
              </Suspense>
            </div>
          </section>
          <section className={styles.bestChoice__category}>
            <h4 className={styles.bestChoice__subtitle}>Departamentos</h4>
            <div className={styles.card__container}>
              <Suspense fallback={<Loading />}>
                <RealEstateFeaturedApiFetcher
                  category={categories.DEPARTAMENTO}
                />
              </Suspense>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}
