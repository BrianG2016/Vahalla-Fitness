import { Router } from 'express'
import { divineReply } from '../core/aiCore.js'
import { speak } from '../core/voice.js'
export const router=Router()
router.post('/chat', async (req,res)=>{ try{ const {gender,userName,message,premium}=req.body; const reply=await divineReply({gender,userName,message,premium}); const voice=await speak(reply.deity, reply.text); res.json({...reply, voice}) }catch(e){ console.error(e); res.status(500).json({error:'AI error'}) }})
