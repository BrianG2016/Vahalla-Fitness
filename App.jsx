import React, { useState } from 'react'
import Chat from './components/Chat.jsx'
import HallOfOrigins from './components/HallOfOrigins.jsx'
import Training from './components/Training.jsx'
import Progress from './components/Progress.jsx'
import FeastHall from './components/FeastHall.jsx'

export default function App(){
  const [user, setUser] = useState(null)
  const [tab, setTab] = useState('throne')

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-neutral-950">
      <header className="p-4 flex items-center justify-between border-b border-neutral-800">
        <h1 className="text-2xl font-extrabold tracking-wide"><span className="text-amber-500">⚔️</span> Valhalla Fitness</h1>
        <nav className="flex gap-2">
          <button className="rune-btn" onClick={()=>setTab('origins')}>Hall of Origins</button>
          <button className="rune-btn" onClick={()=>setTab('throne')}>Throne</button>
          <button className="rune-btn" onClick={()=>setTab('arena')}>Arena</button>
          <button className="rune-btn" onClick={()=>setTab('progress')}>Temple</button>
          <button className="rune-btn" onClick={()=>setTab('feast')}>Feast</button>
        </nav>
      </header>
      <main className="p-6 max-w-6xl mx-auto">
        {tab==='origins' && <HallOfOrigins onSetup={setUser} />}
        {tab==='throne' && <Chat user={user}/>}
        {tab==='arena' && <Training user={user}/>}
        {tab==='progress' && <Progress user={user}/>}
        {tab==='feast' && <FeastHall user={user}/>}
      </main>
    </div>
  )
}
