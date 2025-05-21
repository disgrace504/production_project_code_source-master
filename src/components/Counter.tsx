import { useState } from 'react'
import style from './Counter.module.scss'

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div className={style.btn}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}
