
import { useState } from "react";


//in this lesson we check into stateful cmomponents. in simple terms , with use state, compnenets dont need a refresh function to update thier ui
const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
export default App;

