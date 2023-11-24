'use client'

import { useRealEstate } from './hook/useRealEstate'
import Card from '@/app/components/cards/Card'

export default function ListProperties() {
  const { realEstate } = useRealEstate()

  return (
    <>
      {realEstate.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
