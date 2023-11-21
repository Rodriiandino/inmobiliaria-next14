import { getFromDatabase } from '@/app/utils/db-handler'

export const GET = async req => {
  console.log(req.nextUrl.searchParams)

  const reqParams = req.nextUrl.searchParams

  const page = parseInt(reqParams.get('page') || 1)
  const limit = parseInt(reqParams.get('limit') || 10)
  const offset = (page - 1) * limit

  let sqlQuery = `SELECT p.id, c.nombre AS categoria, u.nombre AS ubicacion, pc.num_banos, pc.num_garage,
    pc.num_habitaciones, pc.area, pc.uso, pc.num_pisos, pc.patio, pc.piso, pc.ascensor,
    p.titulo, p.descripcion, p.precio, p.destacado, u.latitud, u.longitud
  FROM Propiedad p
  JOIN Categorias c ON p.categoria_id = c.id
  JOIN Ubicaciones u ON p.ubicacion_id = u.id
  JOIN Propiedad_Caracteristicas pc ON p.propiedad_caracteristicas_id = pc.id
  LIMIT ? OFFSET ?;`

  sqlQuery = sqlQuery.replace('?', limit)
  sqlQuery = sqlQuery.replace('?', offset)

  return await getFromDatabase(sqlQuery, 'Propiedad', page, limit)
}
