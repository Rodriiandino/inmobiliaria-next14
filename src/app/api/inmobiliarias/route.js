import { getFromDatabase } from '@/app/utils/db-handler'

export const GET = async req => {
  const reqParams = req.nextUrl.searchParams

  const feactured = reqParams.get('featured') === '1' ? true : false
  const page = parseInt(reqParams.get('page') || 1)
  const limit = parseInt(reqParams.get('limit') || 10)
  const offset = (page - 1) * limit

  let sqlQuery = `
    SELECT p.id, c.nombre AS categoria, u.nombre AS ubicacion, pc.num_banos, pc.num_garage,
      pc.num_habitaciones, pc.area, pc.uso, pc.num_pisos, pc.patio, pc.piso, pc.ascensor,
      p.titulo, p.descripcion, p.precio, p.destacado, u.latitud, u.longitud
    FROM Propiedad p
    JOIN Categorias c ON p.categoria_id = c.id
    JOIN Ubicaciones u ON p.ubicacion_id = u.id
    JOIN Propiedad_Caracteristicas pc ON p.propiedad_caracteristicas_id = pc.id
  `

  const filterConditions = []

  if (feactured) {
    filterConditions.push(`p.destacado = 1`)
  }

  if (reqParams.has('categories')) {
    const categories = reqParams.get('categories').split(',')
    filterConditions.push(
      `c.nombre IN (${categories.map(() => '?').join(',')})`
    )
  }

  if (reqParams.has('priceMin')) {
    filterConditions.push(`p.precio >= ?`)
  }

  if (reqParams.has('priceMax')) {
    filterConditions.push(`p.precio <= ?`)
  }

  if (reqParams.has('rooms')) {
    filterConditions.push(`pc.num_habitaciones >= ?`)
  }

  if (reqParams.has('bathrooms')) {
    filterConditions.push(`pc.num_banos >= ?`)
  }

  if (reqParams.has('areaMin')) {
    filterConditions.push(`pc.area >= ?`)
  }

  if (reqParams.has('areaMax')) {
    filterConditions.push(`pc.area <= ?`)
  }

  if (filterConditions.length > 0) {
    sqlQuery += ` WHERE ${filterConditions.join(' AND ')}`
  }

  sqlQuery += ` ORDER BY p.id DESC LIMIT ? OFFSET ?;`

  const queryParams = []

  if (reqParams.has('categories')) {
    const categories = reqParams.get('categories').split(',')
    queryParams.push(...categories)
  }

  if (reqParams.has('priceMin')) {
    queryParams.push(reqParams.get('priceMin'))
  }

  if (reqParams.has('priceMax')) {
    queryParams.push(reqParams.get('priceMax'))
  }

  if (reqParams.has('rooms')) {
    queryParams.push(reqParams.get('rooms'))
  }

  if (reqParams.has('bathrooms')) {
    queryParams.push(reqParams.get('bathrooms'))
  }

  if (reqParams.has('areaMin')) {
    queryParams.push(reqParams.get('areaMin'))
  }

  if (reqParams.has('areaMax')) {
    queryParams.push(reqParams.get('areaMax'))
  }

  queryParams.push(limit, offset)

  return await getFromDatabase(
    sqlQuery,
    'Propiedad',
    page,
    limit,
    filterConditions,
    queryParams
  )
}
