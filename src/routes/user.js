import { Router } from 'express'
export const router = Router()

const memory = {}

router.post('/setup', (req, res) => {
  const { userId='demo', name='Warrior', gender='male', height=175, weightCurrent=90, weightGoal=80, premium=false } = req.body
  memory[userId] = { userId, name, gender, height, weightCurrent, weightGoal, premium, xp: 0 }
  res.json({ ok: true, profile: memory[userId] })
})

router.get('/profile/:userId', (req, res) => {
  const profile = memory[req.params.userId]
  if (!profile) return res.status(404).json({ error: 'not found' })
  res.json(profile)
})