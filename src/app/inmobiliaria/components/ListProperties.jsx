'use client'
import Card from '@/app/components/cards/Card'
import { useApiData } from '../contexts/apiDataContext'
import { useFilter } from '../contexts/filterContext'
import { filteredProperties } from './FilteredProperties'

export default function ListProperties() {
  const { apiData } = useApiData()

  const { filter } = useFilter()

  const filtered = filteredProperties(apiData.results, filter)

  return (
    <>
      {filtered.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
