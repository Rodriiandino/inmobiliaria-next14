import RealEstateApiFetcherById from '@/app/components/fetch/RealEstateApiFetcherById'
import Property from './components/Property'

export default async function ItemPage({ params: { id } }) {
  const property = await RealEstateApiFetcherById(id)

  return (
    <main>
      <Property property={property} />
    </main>
  )
}
