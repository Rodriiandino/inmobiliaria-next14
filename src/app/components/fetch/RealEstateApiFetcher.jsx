import Card from '../cards/Card'
import RealEstateFeaturedFilter from './realEstateFeaturedFilter'

export default async function RealEstateApiFetcher({
  category,
  showFeaturedOnly
}) {
  const res = await fetch('http://localhost:3000/api/inmobiliarias')
  const { results } = await res.json()
  const realEstate = results

  const filteredProperties = RealEstateFeaturedFilter({
    realEstate: realEstate,
    category,
    showFeaturedOnly: showFeaturedOnly
  })

  return (
    <>
      {filteredProperties.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
