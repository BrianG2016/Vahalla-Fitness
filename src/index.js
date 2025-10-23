import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { router as ai } from './routes/ai.js'
import { router as user } from './routes/user.js'
import { router as workouts } from './routes/workouts.js'
import { router as progress } from './routes/progress.js'
import { router as nutrition } from './routes/nutrition.js'

const app = express()
const allow = (process.env.CORS_ORIGIN || '*').split(',').map(s => s.trim())
app.use(cors({ origin: allow }))
app.use(express.json({ limit: '10mb' }))

app.get('/', (req, res) => res.json({ ok: true, msg: 'Valhalla server online' }))

app.use('/api/ai', ai)
app.use('/api/user', user)
app.use('/api/workouts', workouts)
app.use('/api/progress', progress)
app.use('/api/nutrition', nutrition)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`⚔️ Valhalla server running on ${PORT}`))