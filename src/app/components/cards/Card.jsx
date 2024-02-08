import Link from 'next/link'
import styles from './Card.module.css'

export default function Card({ propiedades }) {
  const {
    id,
    titulo,
    categoria,
    ubicacion,
    num_habitaciones: habitaciones,
    num_banos: banos,
    num_garage: garage,
    descripcion,
    precio,
    area,
    uso,
    ascensor
  } = propiedades

  return (
    <article className={styles.card}>
      <header className={styles.card__image}>
        <p className={styles.card__sale}>
          <strong>{categoria}</strong> <small>id: {id}</small>
        </p>
        <img src='https://picsum.photos/400/200' alt='Card' />
      </header>
      <div className={styles.card__content}>
        <header className={styles.card__header}>
          <Link href={`/inmobiliaria/${id}`} className={styles.card__title}>
            {titulo}
          </Link>
          <dl className={`${styles.card__location} ${styles.card__dl}`}>
            <dt className={styles.card__dt}>Ubicacion</dt>
            <dd className={styles.card__dd}>{ubicacion}</dd>
          </dl>
        </header>

        <div className={styles.card__characteristics}>
          {categoria === 'Terreno' ? (
            <>
              <dl className={`${styles.card__type} ${styles.card__dl}`}>
                <dt className={styles.card__dt}>Area</dt>
                <dd className={styles.card__dd}>
                  <img
                    src='/Icons/area.svg'
                    alt='icon-terreno'
                    width={35}
                    height={35}
                  />
                  {area + ' m2'}
                </dd>
              </dl>

              <dl className={`${styles.card__type} ${styles.card__dl}`}>
                <dt className={styles.card__dt}>Uso</dt>
                <dd className={styles.card__dd}>
                  <img
                    src='/Icons/use.svg'
                    alt='icon-terreno'
                    width={35}
                    height={35}
                  />
                  {uso}
                </dd>
              </dl>
            </>
          ) : (
            <>
              <dl className={`${styles.card__rooms} ${styles.card__dl}`}>
                <dt className={styles.card__dt}>Habitaciones</dt>
                <dd className={styles.card__dd}>
                  <img
                    src='/Icons/bed.svg'
                    alt='icon-cama'
                    width={35}
                    height={35}
                  />
                  {habitaciones}
                </dd>
              </dl>

              <dl className={`${styles.card__bathrooms} ${styles.card__dl}`}>
                <dt className={styles.card__dt}>Baños</dt>
                <dd className={styles.card__dd}>
                  <img
                    src='/Icons/bathroom.svg'
                    alt='icon-baño'
                    width={35}
                    height={35}
                  />
                  {banos}
                </dd>
              </dl>

              {ascensor && (
                <dl className={`${styles.card__elevator} ${styles.card__dl}`}>
                  <dt className={styles.card__dt}>Ascensor</dt>
                  <dd className={styles.card__dd}>
                    <img
                      src='/Icons/elevator.svg'
                      alt='icon-ascensor'
                      width={35}
                      height={35}
                    />
                    {ascensor ? 'Si' : 'No'}
                  </dd>
                </dl>
              )}

              {garage > 0 && (
                <dl className={`${styles.card__parking} ${styles.card__dl}`}>
                  <dt className={styles.card__dt}>Estacionamiento</dt>
                  <dd className={styles.card__dd}>
                    <img
                      src='/Icons/car.svg'
                      alt='icon-auto'
                      width={35}
                      height={35}
                    />
                    {garage}
                  </dd>
                </dl>
              )}
            </>
          )}
        </div>

        <footer className={styles.card__description}>
          <p>{descripcion}</p>
        </footer>
      </div>
      <footer className={styles.card__footer}>
        <Link href={`/inmobiliaria/${id}`}> Ver mas</Link>
        <dl>
          <dt className={styles.card__dt}>Precio</dt>
          <dd className={styles.card__price}>{precio}</dd>
        </dl>
      </footer>
    </article>
  )
}
