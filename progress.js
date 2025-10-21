import { Router } from 'express'
import multer from 'multer'
import { rankFor, nextThreshold } from '../core/runes.js'
export const router=Router()
const upload=multer({dest:'/tmp'})
let progress={}
router.post('/log', upload.single('image'), (req,res)=>{const {userId,weight}=req.body; if(!progress[userId]) progress[userId]={logs:[],xp:0}; progress[userId].logs.push({weight,ts:Date.now(),imagePath:req.file?.path||null}); progress[userId].xp+=200; const rank=rankFor(progress[userId].xp); res.json({ok:true,xp:progress[userId].xp,rank,next:nextThreshold(rank.threshold||500)})})
router.get('/status/:userId',(req,res)=>{const p=progress[req.params.userId]||{xp:0,logs:[]}; const rank=rankFor(p.xp); res.json({xp:p.xp,rank,logs:p.logs})})
