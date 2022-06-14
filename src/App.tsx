import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <p className="text-4xl"> this  is tailwind</p>
    </div>
  )
}

export default App
