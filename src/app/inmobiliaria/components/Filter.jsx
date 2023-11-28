'use client'
import { useFilter } from '../contexts/filterContext'
import styles from './Filter.module.css'

export default function Filter() {
  const { filter, setFilter } = useFilter()

  const handleChange = e => {
    const { name, value, checked } = e.target

    if (name === 'categories') {
      if (checked) {
        setFilter(prevFilter => ({
          ...prevFilter,
          categories: [...prevFilter.categories, value]
        }))
      } else {
        setFilter(prevFilter => ({
          ...prevFilter,
          categories: prevFilter.categories.filter(
            category => category !== value
          )
        }))
      }
    } else {
      setFilter(prevFilter => ({
        ...prevFilter,
        [name]: value
      }))
    }
  }

  return (
    <aside className={styles.filter}>
      <div className={styles.filter__sticky}>
        <div className={styles.filter__container}>
          <details>
            <summary>
              <h3>Categoría</h3>
            </summary>
            <div className={styles.details__filter}>
              <ul>
                <li>
                  <input
                    type='checkbox'
                    name='categories'
                    id='casa'
                    value='Casa'
                    onChange={handleChange}
                    checked={filter.categories.includes('Casa')}
                  />
                  <label htmlFor='casa'>Casa</label>
                </li>
                <li>
                  <input
                    type='checkbox'
                    name='categories'
                    id='departamento'
                    value='Departamento'
                    onChange={handleChange}
                    checked={filter.categories.includes('Departamento')}
                  />
                  <label htmlFor='departamento'>Departamento</label>
                </li>
                <li>
                  <input
                    type='checkbox'
                    name='categories'
                    id='terreno'
                    value='Terreno'
                    onChange={handleChange}
                    checked={filter.categories.includes('Terreno')}
                  />
                  <label htmlFor='terreno'>Terreno</label>
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className={styles.filter__container}>
          <details>
            <summary>
              <h3>Precio</h3>
            </summary>
            <div className={styles.details__filter}>
              <label htmlFor='filterPriceFrom'>
                <span>$</span>
                <input
                  type='number'
                  name='priceMin'
                  placeholder='Desde'
                  id='filterPriceFrom'
                  value={filter.priceMin}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='filterPriceTo'>
                <span>$</span>
                <input
                  type='number'
                  name='priceMax'
                  placeholder='Hacia'
                  id='filterPriceTo'
                  value={filter.priceMax}
                  onChange={handleChange}
                />
              </label>
            </div>
          </details>
        </div>
        <div className={styles.filter__container}>
          <details>
            <summary>
              <h3>Más Filtros</h3>
            </summary>
            <div className={styles.details__filter}>
              <div>
                <h4>Baños</h4>
                <div>
                  <input
                    type='radio'
                    name='bathrooms'
                    id='bathrooms-0'
                    value='0'
                    onChange={handleChange}
                  />
                  <label htmlFor='bathrooms-0'>0</label>

                  <input
                    type='radio'
                    name='bathrooms'
                    id='bathrooms-1'
                    value='1'
                    onChange={handleChange}
                  />
                  <label htmlFor='bathrooms-1'>1</label>
                  <input
                    type='radio'
                    name='bathrooms'
                    id='bathrooms-2'
                    value='2'
                    onChange={handleChange}
                  />
                  <label htmlFor='bathrooms-2'>+2</label>
                  <input
                    type='radio'
                    name='bathrooms'
                    id='bathrooms-3'
                    value='3'
                    onChange={handleChange}
                  />
                  <label htmlFor='bathrooms-3'>+3</label>
                  <input
                    type='radio'
                    name='bathrooms'
                    id='bathrooms-4'
                    value='4'
                    onChange={handleChange}
                  />
                  <label htmlFor='bathrooms-4'>+4</label>
                </div>
              </div>
              <div>
                <h4>Habitaciones</h4>
                <div>
                  <input
                    type='radio'
                    name='rooms'
                    id='rooms-0'
                    value='0'
                    onChange={handleChange}
                  />
                  <label htmlFor='rooms-0'>0</label>
                  <input
                    type='radio'
                    name='rooms'
                    id='rooms-1'
                    value='1'
                    onChange={handleChange}
                  />
                  <label htmlFor='rooms-1'>+1</label>
                  <input
                    type='radio'
                    name='rooms'
                    id='rooms-2'
                    value='2'
                    onChange={handleChange}
                  />
                  <label htmlFor='rooms-2'>+2</label>
                  <input
                    type='radio'
                    name='rooms'
                    id='rooms-3'
                    value='3'
                    onChange={handleChange}
                  />
                  <label htmlFor='rooms-3'>+3</label>
                  <input
                    type='radio'
                    name='rooms'
                    id='rooms-4'
                    value='4'
                    onChange={handleChange}
                  />
                  <label htmlFor='rooms-4'>+4</label>
                </div>
              </div>

              <div>
                <h4>Superficie</h4>
                <div className={styles.filter__area}>
                  <label htmlFor='FilterAreaFrom'>
                    <span>m²</span>
                    <input
                      type='number'
                      name='areaMin'
                      id='FilterAreaFrom'
                      placeholder='Desde'
                      value={filter.areaMin}
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor='FilterAreaTo'>
                    <span>m²</span>
                    <input
                      type='number'
                      name='areaMax'
                      id='FilterAreaTo'
                      placeholder='Hacia'
                      value={filter.areaMax}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </aside>
  )
}
