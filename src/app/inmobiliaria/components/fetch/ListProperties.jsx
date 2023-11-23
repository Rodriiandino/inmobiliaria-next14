'use client'

import { useState, useEffect } from 'react'
import { useFilterLogic } from '@/app/inmobiliaria/contexts/filterLogicContext'
import filteredProperties from './filteredProperties'
import fetchApi from '@/app/components/fetch/FetcheApi'
import Card from '@/app/components/cards/Card'

export default function ListProperties() {
  const { filterLogic } = useFilterLogic()
  const [Properties, setProperties] = useState([])

  useEffect(() => {
    const limit = {
      page: 1,
      limit: 10
    }
    async function fetchData() {
      const data = await fetchApi({ searchParams: limit })
      setProperties(data)
    }
    fetchData()
  }, [])

  const filtered = filteredProperties(Properties, filterLogic)

  return (
    <>
      {filtered.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
