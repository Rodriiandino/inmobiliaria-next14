import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  user: 'InmobiliariaDB',
  password: 'InmobiliariaDB',
  port: 3306,
  database: 'InmobiliariaDB'
})

export { pool }
