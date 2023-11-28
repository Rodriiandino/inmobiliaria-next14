'use client'
import Card from '@/app/components/cards/Card'
import { useApiData } from '../contexts/apiDataContext'

export default function ListProperties() {
  const { apiData } = useApiData()

  const realEstate = apiData.results

  return (
    <>
      {realEstate.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
