import { NextResponse } from 'next/server'
import { pool } from '@/config/db'

export const getFromDatabase = async (
  query,
  tableName,
  page = 1,
  limit = 10,
  filterConditions = [],
  queryParams = []
) => {
  try {
    const [rows] = await pool.query(query, queryParams)

    let countQuery = `SELECT COUNT(*) AS total FROM ${tableName} p
    JOIN Categorias c ON p.categoria_id = c.id
    JOIN Ubicaciones u ON p.ubicacion_id = u.id
    JOIN Propiedad_Caracteristicas pc ON p.propiedad_caracteristicas_id = pc.id`

    if (filterConditions.length > 0) {
      countQuery += ' WHERE '
      countQuery += filterConditions.join(' AND ')
    }

    const [count] = await pool.query(countQuery, queryParams)

    const totalCount = count[0]?.total
    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      count: totalCount,
      page: page,
      limit: limit,
      totalPages: totalPages,
      results: rows
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching data' },
      500
    )
  }
}

export const getFromDatabaseById = async query => {
  try {
    const [rows] = await pool.query(query)
    return NextResponse.json({
      results: rows
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching data' },
      500
    )
  }
}
