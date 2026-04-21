import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import WorkWithMe from './components/WorkWithMe'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'

function Home() {
  return (
    <div className="db-page">
      <Hero/>
      <div className="db-content">
        <About />
        <WorkWithMe />
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  )
}

export default App