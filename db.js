import mongoose from 'mongoose'
export async function connectDB(){ const uri=process.env.MONGODB_URI; if(!uri){console.warn('No MONGODB_URI'); return} await mongoose.connect(uri); console.log('🗿 Mongo connected') }
