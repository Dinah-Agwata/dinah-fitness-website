import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import WorkWithMe from './components/WorkWithMe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="db-page">
      <Hero />
      <div className="db-content">
        <About />
        <WorkWithMe />
      </div>
      <Footer />
    </div>
  )
}

export default App