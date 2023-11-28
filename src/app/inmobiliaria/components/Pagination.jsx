'use client'

import { useRealEstate } from './hook/useRealEstate'
import { useApiData } from '../contexts/apiDataContext'

export default function Pagination() {
  const { nextPage, prevPage, enable } = useRealEstate()
  const { apiData } = useApiData()

  return (
    <div className='btn__container'>
      <button onClick={prevPage} disabled={enable}>
        Pagina Anterior
      </button>

      <h3>{apiData.page} </h3>

      <button onClick={nextPage} disabled={enable}>
        Siguiente Pagina
      </button>
    </div>
  )
}
