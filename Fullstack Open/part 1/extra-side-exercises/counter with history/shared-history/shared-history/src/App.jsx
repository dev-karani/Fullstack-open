import { useState } from 'react'


function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)


  const handleCountA =() => setCountA(countA + 1)
  const handleCountB =() => setCountB(countB + 1)


  return (
    <>
    <div>
      <button onClick={handleCountA}>increase A: {countA}</button>
      <button onClick={handleCountB}>increase B: {countB}</button>
      <p>total:{countA + countB}</p>
    </div>
    </>
  )
}

export default App
