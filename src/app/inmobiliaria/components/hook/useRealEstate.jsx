'use client'

import { useCallback, useEffect, useState } from 'react'
import fetchApi from '@/app/components/fetch/FetcheApi'

export function useRealEstate() {
  const [realEstate, setRealEstate] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [limitItems, setLimitItems] = useState(1)
  const [enable, setEnable] = useState(true)

  const fetchRealEstate = useCallback(async () => {
    const limit = {
      page: page,
      limit: limitItems
    }

    try {
      setEnable(false)
      const response = await fetchApi({ searchParams: limit })
      setRealEstate(response.results)
      setTotalPages(response.totalPages)
      setTotalItems(response.count)
    } catch (error) {
      setEnable(true)
      console.error('Error fetching properties:', error)
    }
  }, [page, limitItems])

  useEffect(() => {
    fetchRealEstate()
  }, [page, fetchRealEstate])

  const nextPage = () => {
    if (page === totalPages) return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  return {
    fetchRealEstate,
    realEstate,
    nextPage,
    prevPage,
    page,
    totalPages,
    totalItems,
    setLimitItems,
    enable
  }
}
