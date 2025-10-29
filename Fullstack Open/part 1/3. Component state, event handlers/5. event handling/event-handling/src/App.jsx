
import { useState } from "react";

//this logs the ckilck in the console
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     console.log("clicked");
//   };

//   return (
//     <div>
//       <div>{counter}</div>

//       <button onClick={handleClick}>plus</button>
//     </div>
//   );
// };
// export default App;

const App = () => {
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

export default App

//we can change the ui as well with the help of setcounter