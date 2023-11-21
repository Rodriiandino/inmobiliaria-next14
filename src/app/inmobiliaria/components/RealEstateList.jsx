import styles from './RealEstateList.module.css'
import RealEstateApiFetcher from '@/app/components/fetch/RealEstateApiFetcher'

export default function RealEstateList() {
  return (
    <section className={styles.products}>
      <article className={styles.products__container}>
        <div className={styles.products__list}>
          <RealEstateApiFetcher />
        </div>
      </article>
    </section>
  )
}
