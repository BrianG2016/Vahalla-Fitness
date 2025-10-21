import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router as user } from './routes/user.js'
import { router as ai } from './routes/ai.js'
import { router as workouts } from './routes/workouts.js'
import { router as progress } from './routes/progress.js'
import { router as nutrition } from './routes/nutrition.js'
import { connectDB } from './db.js'

const app = express()
app.use(cors())
app.use(express.json({limit:'10mb'}))
app.get('/', (req,res)=>res.json({status:'Valhalla rises'}))
app.use('/api/user', user)
app.use('/api/ai', ai)
app.use('/api/workouts', workouts)
app.use('/api/progress', progress)
app.use('/api/nutrition', nutrition)

const PORT = process.env.PORT || 5000
connectDB().then(()=>{
  app.listen(PORT, ()=> console.log(`⚔️ Valhalla server on ${PORT}`))
}).catch(err=>{
  console.error('DB connection failed', err)
  app.listen(PORT, ()=> console.log(`⚔️ Valhalla server (no DB) on ${PORT}`))
})
