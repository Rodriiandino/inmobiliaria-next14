export function filteredProperties(Properties, filter) {
  const { categories, priceMin, priceMax, rooms, bathrooms, areaMin, areaMax } =
    filter

  return Properties.filter(property => {
    if (categories.length > 0 && !categories.includes(property.categoria)) {
      return false
    }

    if (priceMin !== '' && property.precio < parseFloat(priceMin)) {
      return false
    }

    if (priceMax !== '' && property.precio > parseFloat(priceMax)) {
      return false
    }

    if (rooms !== '' && property.num_habitaciones < parseInt(rooms)) {
      return false
    }

    if (bathrooms !== '' && property.num_banos < parseInt(bathrooms)) {
      return false
    }

    if (areaMin !== '' && property.area < parseFloat(areaMin)) {
      return false
    }

    if (areaMax !== '' && property.area > parseFloat(areaMax)) {
      return false
    }

    return true
  })
}
