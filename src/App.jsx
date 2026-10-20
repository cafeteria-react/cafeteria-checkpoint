import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App