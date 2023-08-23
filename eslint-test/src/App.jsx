import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count+1)}>+</button>
      <div>{count}</div>
         </>
  )
}

export default App
