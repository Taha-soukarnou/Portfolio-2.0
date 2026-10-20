import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Section from './sections/Section'

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Section id="home" title="Home" />
        <Section id="about" title="About" />
        <Section id="projects" title="Projects" />
        <Section id="skills" title="Skills" />
        <Section id="contact" title="Contact" />
      </main>
      <Footer />
    </div>
  )
}

export default App