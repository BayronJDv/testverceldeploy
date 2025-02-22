import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'
import Quiz from './pages/quiz/Quiz'
import Heart from './pages/Heart/Heart'
import LowBloodPreasure from './pages/Heart/low-blood-preasure/LowBloodPreasure'
import HighBloodPreasure from './pages/Heart/high-blood-preasure/HighBloodPreasure'
import Layout from './Layout/Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/corazon" element={<Heart />}>
        <Route path="presion-baja" element={<LowBloodPreasure />} />
        <Route path="presion-alta" element={<HighBloodPreasure />} />
      </Route>
    </Routes>
    </Layout>
    
  </BrowserRouter>,
)
