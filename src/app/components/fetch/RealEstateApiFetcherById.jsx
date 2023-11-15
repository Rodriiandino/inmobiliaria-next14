export default async function RealEstateApiFetcherById(id) {
  const res = await fetch(`http://localhost:3000/api/inmobiliarias/${id}`)
  const { results } = await res.json()
  const realEstate = results[0]

  return realEstate
}
