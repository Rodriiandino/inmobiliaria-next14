import style from './Welcome.module.css'
import InfoUbicacion from './infoRedes/InfoUbicacion'
import InfoPhone from './infoRedes/InfoPhone'
import InfoInstagram from './infoRedes/InfoInstagram'

export default function Welcome() {
  return (
    <section className={style.welcome}>
      <article className={style.welcome__container}>
        <div className={style.title}>
          <h3 className={style.title__description}>
            DESCUBRE TU LUGAR IDEAL PARA TU VIDA FUTURA
          </h3>
          <h2 className={style.title__name}>Andino Rodrigo Agustín</h2>
        </div>

        <div className={style.container__logo}>
          <div className={style.logo}></div>
        </div>

        <footer className={style.footer}>
          <div className={style.footer__container}>
            <div>
              <InfoUbicacion text={'Mi - Ubicacion'} />
            </div>
            <div>
              <InfoPhone text={'123456789'} />
            </div>
            <div>
              <InfoInstagram text={'@rodriiandino'} />
            </div>
          </div>
        </footer>
      </article>
    </section>
  )
}
