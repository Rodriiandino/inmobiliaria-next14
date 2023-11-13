import Link from 'next/link'
import style from './Form.module.css'

export default function Form() {
  return (
    <section className={style.container}>
      <article className={style.container__form}>
        <h1 className={style.title}>PUBLICA TU INMUEBLE CON NOSOTROS</h1>
        <form className={style.form}>
          <div className={style.form_group}>
            <label className={style.form__label} htmlFor='nombre'>
              Nombre
            </label>
            <input
              type='text'
              className={style.form__control}
              id='nombre'
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form__label} htmlFor='apellido'>
              Apellido
            </label>
            <input
              type='text'
              className={style.form__control}
              id='apellido'
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form__label} htmlFor='email'>
              Correo electrónico
            </label>
            <input
              type='email'
              className={style.form__control}
              id='email'
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form__label} htmlFor='telefono'>
              Teléfono
            </label>
            <input
              type='text'
              className={style.form__control}
              id='telefono'
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.form__label} htmlFor='mensaje'>
              Mensaje
            </label>
            <textarea
              className={style.form__control}
              id='mensaje'
              rows='3'
              required
            ></textarea>
          </div>

          <div className={style.form_group_check}>
            <input
              type='checkbox'
              className={style.form__check_input}
              id='terminos'
            />
            <label className={style.form__check_label} htmlFor='terminos'>
              Acepto recibir información sobre ofertas inmobiliarias
            </label>
          </div>

          <button type='submit' className={style.form_btn}>
            Enviar Formulario
          </button>

          <p className={style.form__terms}>
            Al hacer clic en Enviar Formulario, acepta nuestros
            <Link href='contactenos/terminos-condiciones'>
              Términos de servicio y privacidad
            </Link>
            .
          </p>
        </form>
      </article>
    </section>
  )
}
