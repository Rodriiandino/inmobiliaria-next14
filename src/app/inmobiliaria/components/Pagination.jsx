'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function Pagination({ page = 0, totalPages = 0 }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  const nextPage = () => {
    if (page < totalPages) {
      params.set('page', page + 1)
      replace(`${pathname}?${params.toString()}`)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      params.set('page', page - 1)
      replace(`${pathname}?${params.toString()}`)
    }
  }

  const disablePrev = page === 1

  const disableNext = page === totalPages

  return (
    <div className='btn__container'>
      <button onClick={prevPage} disabled={disablePrev}>
        Pagina Anterior
      </button>

      <h3>{page} </h3>

      <button onClick={nextPage} disabled={disableNext}>
        Siguiente Pagina
      </button>
    </div>
  )
}
