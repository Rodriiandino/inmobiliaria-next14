import Welcome from './components/Welcome'
import TopPropertyPicks from './components/TopPropertyPicks'
import Priority from './components/Priority'
import Contact from './components/Contact'

export default function HomePage() {
  return (
    <main>
      <Welcome />
      <TopPropertyPicks />
      <Priority />
      <Contact />
    </main>
  )
}
