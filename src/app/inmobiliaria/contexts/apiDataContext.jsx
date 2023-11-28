'use client'

import { useState, useContext, createContext } from 'react'

const ApiDataContext = createContext()

export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState({
    count: 0,
    page: 1,
    limit: 1,
    totalPages: 0,
    results: []
  })

  return (
    <ApiDataContext.Provider value={{ apiData, setApiData }}>
      {children}
    </ApiDataContext.Provider>
  )
}

export const useApiData = () => {
  return useContext(ApiDataContext)
}
