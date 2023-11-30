import Card from '../cards/Card'
import fetchApi from './FetcheApi'
import RealEstateFeaturedFilter from './realEstateFeaturedFilter'

export default async function RealEstateFeaturedApiFetcher({ category }) {
  const feactured = {
    featured: 1
  }

  const { results } = await fetchApi({ searchParams: feactured })

  const filteredProperties = RealEstateFeaturedFilter({
    realEstate: results,
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
