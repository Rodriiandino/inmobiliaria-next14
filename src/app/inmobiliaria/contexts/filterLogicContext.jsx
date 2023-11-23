'use client'

import { useState, useContext, createContext } from 'react'

const FilterLogicContext = createContext()

export const FilterLogicProvider = ({ children }) => {
  const [filterLogic, setFilterLogic] = useState({
    categories: [],
    priceMin: '',
    priceMax: '',
    rooms: '',
    bathrooms: '',
    areaMin: '',
    areaMax: ''
  })

  return (
    <FilterLogicContext.Provider value={{ filterLogic, setFilterLogic }}>
      {children}
    </FilterLogicContext.Provider>
  )
}

export const useFilterLogic = () => {
  return useContext(FilterLogicContext)
}
