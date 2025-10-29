import { useState } from 'react'

//in this lesson, the teacher emphasizes making handlers as functions 
//eg if u pass setcounter as a function call.it will result to a loop
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
export default App
