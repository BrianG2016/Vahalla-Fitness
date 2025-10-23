import { Router } from 'express'
import multer from 'multer'
export const router = Router()
const upload = multer({ dest: '/tmp' })

const track = {}

router.post('/log', upload.single('image'), (req, res) => {
  const { userId='demo', weight='' } = req.body
  if (!track[userId]) track[userId] = { logs:[], xp:0 }
  track[userId].logs.push({ weight, ts:Date.now(), image:req.file?.path||null })
  track[userId].xp += 200
  res.json({ ok:true, xp:track[userId].xp, logs:track[userId].logs })
})

router.get('/status/:userId', (req,res)=>{
  res.json(track[req.params.userId] || { xp:0, logs:[] })
})