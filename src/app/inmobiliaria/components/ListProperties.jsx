import Card from '@/app/components/cards/Card'

export default async function ListProperties({ realEstate }) {
  return (
    <>
      {realEstate.map(propiedad => (
        <Card key={propiedad.id} propiedades={propiedad} />
      ))}
    </>
  )
}
