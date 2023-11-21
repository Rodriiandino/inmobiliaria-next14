import { NextResponse } from 'next/server'
import { pool } from '@/config/db'

export const getFromDatabase = async (
  query,
  tableName,
  page = 1,
  limit = 10
) => {
  try {
    const [rows] = await pool.query(query)
    const [count] = await pool.query(
      `SELECT COUNT(*) AS total FROM ${tableName}`
    )
    const totalCount = count[0].total

    return NextResponse.json({
      count: totalCount,
      page: page,
      limit: limit,
      results: rows
    })
  } catch (error) {
    console.error('Error fetching data from database:', error)
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
    console.error('Error fetching data from database:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching data' },
      500
    )
  }
}
