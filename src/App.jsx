
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Exprience from './Components/Exprience'
import HeroSection from './Components/Hero'
import Links from './Components/Links'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skill from './Components/Skills'

function App() {

  return (
    <div className=' overflow-hidden grid grid-rows-[*] bg-zinc-900 '>
  <HeroSection id="home" />
  <About id="About"/>
  <Services id="Services" />
  <Projects id="Projects"/>
  <Skill id="Skills"/>
  <Exprience id="Exprience"/>
  <Contact id="contact"/>
  <Links />
    </div>
  )
}

export default App
