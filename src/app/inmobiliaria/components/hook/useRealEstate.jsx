'use client'

import { useCallback, useEffect } from 'react'
import { useApiData } from '../../contexts/apiDataContext'
import { useFilter } from '../../contexts/filterContext'
import fetchApi from '@/app/components/fetch/FetcheApi'

export function useRealEstate() {
  const { apiData, setApiData } = useApiData()
  const { filter } = useFilter()

  const fetchRealEstate = useCallback(async () => {
    const queryParams = Object.fromEntries(
      Object.entries({
        page: apiData.page,
        limit: apiData.limit,
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

    try {
      const response = await fetchApi({ searchParams: queryParams })

      setApiData(prevApiData => ({
        ...prevApiData,
        count: response.count,
        totalPages: response.totalPages,
        results: response.results
      }))
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }, [apiData.page, apiData.limit, filter, setApiData])

  useEffect(() => {
    fetchRealEstate()
  }, [fetchRealEstate])

  const nextPage = () => {
    if (apiData.page < apiData.totalPages) {
      setApiData(prevApiData => ({
        ...prevApiData,
        page: prevApiData.page + 1
      }))
    }
  }

  const prevPage = () => {
    if (apiData.page > 1) {
      setApiData(prevApiData => ({
        ...prevApiData,
        page: prevApiData.page - 1
      }))
    }
  }

  return {
    nextPage,
    prevPage,
    enable: !apiData.count,
    fetchRealEstate
  }
}
