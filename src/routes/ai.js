import { Router } from 'express'
import { pickDeityByGender } from '../core/rotation.js'
import { invokeName } from '../core/invocation.js'

export const router = Router()

router.post('/chat', async (req, res) => {
  try {
    const { gender = 'male', userName = 'Warrior', message = '' } = req.body
    const { name } = pickDeityByGender(gender)
    const cannedMap = {
      Odin:   "steel your mind—consistency is your first victory. Enter the Arena and begin.",
      Thor:   "lift with fury and finish with pride. Your next set awaits in the Arena!",
      Freyja: "move with grace; strength follows where focus leads. Breathe and begin.",
      Frigg:  "restore your balance—consistency brings power. We start steady, then rise."
    }
    const text = invokeName(cannedMap[name], userName)
    res.json({ deity: name, text })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'AI error' })
  }
})