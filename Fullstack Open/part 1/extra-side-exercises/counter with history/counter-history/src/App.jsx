import { useState } from 'react'

const App =() =>{

  const [addCount, setAddCount] =useState(0)
  const [minusCount, setMinusCount] =useState(0)
  const [history, setHistory] = useState([])

  const handleAdd = () => {
    setAddCount(addCount + 1)
    // console.log(addCount); 
    setHistory(history.concat("+"))
    // console.log(newHistory)
  }
  // console.log( "history",history);
  
  const handleMinus = () => {
    setMinusCount(minusCount -1)
    // console.log(minusCount); 
    setHistory(history.concat("-"))
    // console.log(newHistory)    
  }
  if (history.length === 0){
    return (
      <div>
        <p>hello</p>
        <button onClick={handleAdd}>{addCount} :add</button>
        <button onClick={handleMinus}>{minusCount} :minus</button>
        <p>no clicks yet</p>
      </div>
      
    )
  }
  return (
    <div>
      <p>hello</p>
      <button onClick={handleAdd}>{addCount} :add</button>
      <button onClick={handleMinus}>{minusCount} :minus</button>    
      <p>{history.join(' ')}</p>
    </div>
  )
}


export default App
