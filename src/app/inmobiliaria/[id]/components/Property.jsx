import style from './Property.module.css'

export default function Property({ property }) {
  return (
    <section className={style.property}>
      <article className={style.property__container}>
        <header className={style.Property__header}>
          <h1 className={style.property__title}>
            {property.titulo} <span>{property.categoria}</span>
          </h1>
        </header>
        <article className={style.property__images}>
          <div className={style.images}>
            <img src='https://picsum.photos/1000/500' alt={property.titulo} />
            <img src='https://picsum.photos/1000/500' alt={property.titulo} />
            <img src='https://picsum.photos/1000/500' alt={property.titulo} />
            <img src='https://picsum.photos/1000/500' alt={property.titulo} />
            <img src='https://picsum.photos/1000/500' alt={property.titulo} />
          </div>
        </article>
        <aside className={style.property__aside}>
          <h2 className={style.property__subtitle}>Descripción</h2>
          <p className={style.property__description}>{property.descripcion}</p>
          <div className={style.property__details}>
            <div>
              <p>
                <strong>Precio:</strong> $
                {parseFloat(property.precio).toLocaleString()}
              </p>
              <p>
                <strong>Categoría:</strong> {property.categoria}
              </p>
              <p>
                <strong>Ubicación:</strong> {property.ubicacion}
              </p>

              {property.num_habitaciones !== null && (
                <p>
                  <strong>Habitaciones:</strong> {property.num_habitaciones}
                </p>
              )}

              {property.num_banos !== null && (
                <p>
                  <strong>Baños:</strong> {property.num_banos}
                </p>
              )}
            </div>

            <div>
              {property.num_garage !== null && (
                <p>
                  <strong>Garage:</strong> {property.num_garage} car(s)
                </p>
              )}
              <p>
                <strong>Área:</strong> {property.area} m2
              </p>
              <p>
                <strong>Uso:</strong> {property.uso}
              </p>
              {property.num_pisos !== null && (
                <p>
                  <strong>Pisos:</strong> {property.num_pisos}
                </p>
              )}
              {property.categoria === 'Casa' && (
                <p>
                  <strong>Patio:</strong> {property.patio ? 'Sí' : 'No'}
                </p>
              )}
              {property.categoria === 'Departamento' && (
                <p>
                  <strong>Ascensor:</strong> {property.ascensor ? 'Sí' : 'No'}
                </p>
              )}
            </div>
          </div>
        </aside>
        <footer className={style.Property__footer}>mapa</footer>
      </article>
    </section>
  )
}
