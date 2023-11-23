export default function RealEstateFeaturedFilter({
  realEstate,
  category = 'ALL'
}) {
  if (category === 'ALL' && !showFeaturedOnly) {
    return realEstate
  } else {
    return realEstate.filter(realEstate => {
      const isMatchingCategory =
        category === 'ALL' || realEstate.categoria === category
      return isMatchingCategory
    })
  }
}
