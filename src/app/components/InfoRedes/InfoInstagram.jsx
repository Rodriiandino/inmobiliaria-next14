export default function InfoInstagram({ text }) {
  return (
    <a
      href='https://www.instagram.com/rodriiandino/'
      rel='me nofollow noopener noreferrer'
      target='_blank'
    >
      <img
        src='/Icons/instagram.svg'
        alt='Instagram'
        width={40}
        height={40}
      ></img>
      {text}
    </a>
  )
}
