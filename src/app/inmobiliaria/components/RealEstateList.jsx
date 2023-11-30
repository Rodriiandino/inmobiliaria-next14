import Filter from './Filter'
import styles from './RealEstateList.module.css'
import ListProperties from './ListProperties'
import { FilterProvider } from '../contexts/filterContext'
import { RealEstateApiFetcher } from './fetch/RealEstateApiFetcher'
import { Suspense } from 'react'
import Loading from '../loading'

export default async function RealEstateList({ searchParams }) {
  const apiResults = await RealEstateApiFetcher({ params: searchParams })

  const realEstate = apiResults.results
  const totalPages = apiResults.totalPages
  const page = apiResults.page

  return (
    <FilterProvider>
      <section className={styles.products}>
        <article className={styles.products__container}>
          <Filter
            className={styles.filter}
            page={page}
            totalPages={totalPages}
          />
          <div className={styles.products__list}>
            <Suspense key={page + searchParams} fallback={<Loading />}>
              <ListProperties realEstate={realEstate} />
            </Suspense>
          </div>
        </article>
      </section>
    </FilterProvider>
  )
}
