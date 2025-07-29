import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Layout from './components/layout'
import Multimedia from './components/multimedia'
import Musico from './components/Musico'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musico" element={<Musico />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
    </Layout>
  )
}

export default App
