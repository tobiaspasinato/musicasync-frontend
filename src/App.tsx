import './App.css'
import { Routes, Route } from 'react-router-dom'
import Multimedia from './components/multimedia'
import Layout from './components/layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Multimedia />} />
      </Routes>
    </Layout>
  )
}

export default App
