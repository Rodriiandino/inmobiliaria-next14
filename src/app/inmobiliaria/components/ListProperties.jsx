import Card from '@/app/components/cards/Card'
import { RealEstateApiFetcher } from './fetch/RealEstateApiFetcher'

export default async function ListProperties({ searchParams }) {
  const apiResults = await RealEstateApiFetcher({ params: searchParams })

  const realEstate = apiResults.results

  return (
    <>
      {realEstate.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
