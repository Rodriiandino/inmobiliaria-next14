import Card from '../cards/Card'
import fetchApi from './FetcheApi'
import RealEstateFeaturedFilter from './realEstateFeaturedFilter'

export default async function RealEstateApiFetcher({ category }) {
  const feactured = {
    featured: 1
  }

  const realEstate = await fetchApi({ searchParams: feactured })

  const filteredProperties = RealEstateFeaturedFilter({
    realEstate,
    category
  })

  return (
    <>
      {filteredProperties.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
