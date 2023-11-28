'use client'

import { useState, useContext, createContext } from 'react'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    categories: [],
    priceMin: '',
    priceMax: '',
    rooms: '',
    bathrooms: '',
    areaMin: '',
    areaMax: ''
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  return useContext(FilterContext)
}
