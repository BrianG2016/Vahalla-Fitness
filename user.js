import { Router } from 'express'
export const router=Router()
let memory={}
router.post('/setup',(req,res)=>{const {userId,name,gender,height,weightCurrent,weightGoal,premium=false}=req.body; memory[userId]={userId,name,gender,height,weightCurrent,weightGoal,premium,xp:0}; res.json({ok:true,profile:memory[userId]})})
router.get('/profile/:userId',(req,res)=>{const p=memory[req.params.userId]; if(!p) return res.status(404).json({error:'not found'}); res.json(p)})
