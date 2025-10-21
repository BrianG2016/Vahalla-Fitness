import { Router } from 'express'
import { validateMovement } from '../core/cv.js'
export const router=Router()
router.get('/daily',(req,res)=>{const premium=req.query.premium==='true'; const basic=[{name:'Shield Wall Warm-Up',sets:3,reps:[10,10,30],moves:['Pushups','Air Squats','Plank (sec)']},{name:'March of Endurance',sets:3,reps:[60,30,30],moves:['Walk (sec)','Stretch (sec)','Breath (sec)']}]; const advanced=[{name:'Thunder Circuit',sets:4,reps:[12,12,10,60],moves:['Dips','Goblet Squat','Pullups','Farmer Carry (sec)']},{name:'Valkyrie Flow',sets:3,reps:[45,12,12],moves:['Row (sec)','RDL','Lunge']}]; res.json({program: premium?advanced:basic})})
router.post('/validate', async (req,res)=>{const result=await validateMovement(req.body); res.json(result)})
