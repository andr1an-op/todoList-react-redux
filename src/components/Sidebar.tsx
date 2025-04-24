import { useState } from 'react'
import UpcomingTodos from './UpcomingTodos'

export default function Sidebar() {
  const [selected, setSelected] = useState<'all' | 'upcoming'>('all')

  return (
    <div className="w-60 bg-white border-r p-4">
      <button onClick={() => setSelected('all')} className="block w-full text-left p-2 hover:bg-gray-100">All Tasks</button>
      <button onClick={() => setSelected('upcoming')} className="block w-full text-left p-2 hover:bg-gray-100">Upcoming</button>
      {selected === 'upcoming' && <UpcomingTodos />}
    </div>
  )
}