export default function RealEstateFeaturedFilter({
  realEstate,
  category = 'ALL',
  showFeaturedOnly = false
}) {
  if (category === 'ALL' && !showFeaturedOnly) {
    return realEstate
  } else {
    return realEstate.filter(realEstate => {
      const isMatchingCategory =
        category === 'ALL' || realEstate.categoria === category
      const isFeatured = showFeaturedOnly ? realEstate.destacado : true
      return isMatchingCategory && isFeatured
    })
  }
}
