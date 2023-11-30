import fetchApi from '@/app/components/fetch/FetcheApi'

export async function RealEstateApiFetcher({ params }) {
  const searchParams = {
    limit: 2,
    ...params
  }

  const realEstate = await fetchApi({ searchParams: searchParams })

  return realEstate
}
