import { Routes, Route } from 'express'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App