import { useState } from 'react'
import axios from 'axios'

export default function Arena() {
  const [program, setProgram] = useState(null)

  async function fetchWorkouts() {
    const res = await axios.get('https://YOUR-SERVER.onrender.com/api/workouts/daily')
    setProgram(res.data.program)
  }

  return (
    <div>
      <h2 className="text-2xl mb-2">Arena of Training</h2>
      <button onClick={fetchWorkouts} className="bg-gold text-stone px-3 py-1 rounded">Summon Routine</button>
      {program && (
        <ul className="mt-4 space-y-3">
          {program.map((w, i) => (
            <li key={i} className="border border-gold p-2 rounded">
              <strong>{w.name}</strong>
              <ul className="text-sm mt-1">{w.moves.map((m, j) => <li key={j}>{m}</li>)}</ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}