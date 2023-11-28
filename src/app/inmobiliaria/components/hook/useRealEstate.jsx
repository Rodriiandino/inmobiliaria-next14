'use client'

import { useCallback, useEffect } from 'react'
import { useApiData } from '../../contexts/apiDataContext'
import fetchApi from '@/app/components/fetch/FetcheApi'

export function useRealEstate() {
  const { apiData, setApiData } = useApiData()

  const fetchRealEstate = useCallback(async () => {
    const filter = {
      page: apiData.page,
      limit: apiData.limit
    }

    try {
      const response = await fetchApi({ searchParams: filter })

      setApiData(prevApiData => ({
        ...prevApiData,
        count: response.count,
        totalPages: response.totalPages,
        results: response.results
      }))
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }, [apiData.page, apiData.limit, setApiData])

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
    enable: !apiData.count
  }
}
