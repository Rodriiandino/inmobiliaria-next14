'use client'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const whatsappNumber = '123456789'

  const openWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`
    window.open(url, '_blank')
  }

  return (
    <button className={styles.whatsappButton} onClick={openWhatsAppChat}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
        <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
      </svg>
    </button>
  )
}
