import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Arena from './pages/Arena'
import Progress from './pages/Progress'
import FeastHall from './pages/FeastHall'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen p-4 bg-gradient-to-b from-stone to-black text-gold">
      <h1 className="text-4xl font-display text-center mb-4">⚔️ Valhalla Fitness ⚔️</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/feasthall" element={<FeastHall />} />
      </Routes>
    </motion.div>
  )
}