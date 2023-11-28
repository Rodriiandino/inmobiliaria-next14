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

    let countQuery = `SELECT COUNT(*) AS total FROM ${tableName}`
    let countQueryParams = []

    if (filterConditions.length > 0) {
      countQuery += ' WHERE '
      filterConditions.forEach((condition, index) => {
        if (index > 0) {
          countQuery += ' AND '
        }
        countQuery += condition
      })
      countQueryParams = [...queryParams]
    }

    console.log(countQuery)
    console.log(queryParams)

    const [count] = await pool.query(countQuery, countQueryParams)

    console.log(count[0].total)

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
