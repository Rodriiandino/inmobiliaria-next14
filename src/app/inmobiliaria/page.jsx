import { Suspense } from 'react'
import Title from './components/Title'
import RealEstateList from './components/realEstateList'
import Loading from './loading'

export default function InmobiliariaPage({ searchParams }) {
  return (
    <main>
      <Title />
      <Suspense fallback={<Loading />}>
        <RealEstateList searchParams={searchParams} />
      </Suspense>
    </main>
  )
}
