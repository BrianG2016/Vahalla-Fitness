import { useState } from 'react'
import axios from 'axios'

export default function FeastHall() {
  const [plan, setPlan] = useState(null)
  const [allergy, setAllergy] = useState('')

  async function fetchMeal() {
    const res = await axios.post('https://YOUR-SERVER.onrender.com/api/nutrition/plan', { allergies: [allergy] })
    setPlan(res.data)
  }

  return (
    <div>
      <h2 className="text-2xl mb-2">Feast Hall</h2>
      <input placeholder="Enter allergy (optional)" value={allergy} onChange={e=>setAllergy(e.target.value)} className="p-1 text-black"/>
      <button onClick={fetchMeal} className="ml-2 bg-gold text-stone px-3 py-1 rounded">Summon Feast</button>
      {plan && (
        <div className="mt-4">
          <p>Calories: {plan.calories}</p>
          <ul>{[plan.pre, plan.post, plan.daily].map((m,i)=><li key={i}>{m.name}</li>)}</ul>
        </div>
      )}
    </div>
  )
}