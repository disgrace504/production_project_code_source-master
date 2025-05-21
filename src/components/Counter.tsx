import { useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}
