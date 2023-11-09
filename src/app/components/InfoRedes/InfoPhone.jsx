export default function InfoPhone({ text }) {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=123456789'
      rel='me nofollow noopener noreferrer'
      target='_blank'
    >
      <img src='/Icons/phone.svg' alt='Telefono' width={40} height={40}></img>
      {text}
    </a>
  )
}
