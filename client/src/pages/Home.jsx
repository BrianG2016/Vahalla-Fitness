import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <p>Welcome to Valhalla, Warrior. Choose your path:</p>
      <div className="space-x-4">
        <Link to="/arena" className="px-4 py-2 bg-gold text-stone rounded-xl font-bold">Arena of Training</Link>
        <Link to="/progress" className="px-4 py-2 bg-gold text-stone rounded-xl font-bold">Temple of Progress</Link>
        <Link to="/feasthall" className="px-4 py-2 bg-gold text-stone rounded-xl font-bold">Feast Hall</Link>
      </div>
    </div>
  )
}