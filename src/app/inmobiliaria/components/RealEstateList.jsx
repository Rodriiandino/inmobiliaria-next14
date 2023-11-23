import Filter from './Filter'
import styles from './RealEstateList.module.css'
import ListProperties from './fetch/ListProperties'
import { FilterLogicProvider } from '../contexts/filterLogicContext'
import Pagination from './Pagination'

export default function RealEstateList() {
  return (
    <FilterLogicProvider>
      <section className={styles.products}>
        <article className={styles.products__container}>
          <Filter className={styles.filter} />
          <div className={styles.products__list}>
            <ListProperties />
          </div>
          <footer>
            <Pagination />
          </footer>
        </article>
      </section>
    </FilterLogicProvider>
  )
}
