'use client'

import { useRealEstate } from './hook/useRealEstate'
import Card from '@/app/components/cards/Card'

export default function Pagination() {
  const { nextPage, prevPage, page, enable, realEstate } = useRealEstate()

  return (
    <div className='btn__container'>
      <button onClick={prevPage} disabled={enable}>
        Pagina Anterior
      </button>

      <h3>{page} </h3>

      <button onClick={nextPage} disabled={enable}>
        Siguiente Pagina
      </button>
    </div>
  )
}
