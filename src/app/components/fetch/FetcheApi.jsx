export default async function fetchApi({ searchParams } = {}) {
  const params = new URLSearchParams(searchParams)

  let url = `http://localhost:3000/api/inmobiliarias`

  if (params.toString().length > 0) url += `?${params.toString()}`

  try {
    // await new Promise(resolve => setTimeout(resolve, 2000))

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const results = await res.json()
    return results
  } catch (error) {
    console.error('Error fetching properties:', error)
    return []
  }
}
