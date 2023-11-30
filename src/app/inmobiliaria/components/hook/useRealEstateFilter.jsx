'use client'

import { useFilter } from '../../contexts/filterContext'

export function useRealEstateFilter() {
  const { filter } = useFilter()

  const queryParams = Object.fromEntries(
    Object.entries({
      categories: filter.categories,
      priceMin: filter.priceMin,
      priceMax: filter.priceMax,
      rooms: filter.rooms,
      bathrooms: filter.bathrooms,
      areaMin: filter.areaMin,
      areaMax: filter.areaMax
    }).filter(([key, value]) => {
      if (key === 'categories') {
        return Array.isArray(value) ? value.length > 0 : value !== ''
      }
      return value !== ''
    })
  )

  return { queryParams }
}
