
import { useState } from 'react'

const Check = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div>
    <Check/>
    </div>
  )
}
 export default App