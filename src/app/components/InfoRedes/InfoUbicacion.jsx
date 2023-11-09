export default function InfoUbicacion({ text }) {
  return (
    <a href='#' rel='me nofollow noopener noreferrer' target='_blank'>
      <img src='/Icons/pin.svg' alt='Mapa' width={40} height={40}></img>
      {text}
    </a>
  )
}
