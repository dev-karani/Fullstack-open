import { useState } from 'react'

const Button =(props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const App =()=> {
  const [count, setCount] = useState({good:0, bad:0, neutral:0})
  const [total, setTotal] = useState(0)

  const handleTotal = () => {
    const newTotal = setTotal(count.good + count.bad + count.neutral)
    return newTotal
  }
  const handleBad  = () =>{
    const newCount ={
      good: count.good,
      neutral: count.neutral,
      bad:count.bad + 1
    } 
    setCount(newCount)
    setTotal(total + 1)
  }
  const handleGood  = () =>{
    const newCount ={
      ...count,
      good: count.good + 1,
    } 
    setCount(newCount)
    setTotal(total + 1)

  }
   const handleNeutral  = () =>{
    const newCount ={
      ...count,
      neutral: count.neutral + 1,
    } 
    setCount(newCount)
    setTotal(total + 1)

  }
  return (
    <div>
         <h1>unicafe review</h1>
         <p>which one describes your service</p>
         <Button onClick = {handleGood} text= 'good'/>
         <Button onClick = {handleBad} text='bad'/>
         <Button onClick = {handleNeutral} text='neutral'/>
         <Button onClick = {handleTotal} text= 'total'/>

         <p>good {count.good}</p>
         <p>neutral {count.neutral}</p>
         <p>bad {count.bad}</p>
         <p>total {total}</p>
         <p>average: {total / count.entries}</p>
         <p>positive: {count.good/total * 100}</p>
    </div>
  )
}

export default App
// const App =()=> {
//   const [good, setGood] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [neutral, setNeutral] = useState(0)

//   const handleGood = () =>{
//     const updatedGood = setGood(good + 1)
//     return updatedGood
//   }
//   const handleNeutral = () =>{
//     const updatedNeutral = setNeutral(neutral + 1)
//     return updatedNeutral
//   }
//    const handleBad = () =>{
//     const updatedBad = setBad(bad + 1)
//     return updatedBad
//   }

//   return (
//     <>
//       <div>
//         <h1>unicafe review</h1>
//         <p>which one describes your service</p>
//         <button onClick={handleGood}>Good</button>
//         <button onClick={handleNeutral}>neutral</button>
//         <button onClick={handleBad}>bad</button>
//         <p>good {good}</p>
//         <p>neutral {neutral}</p>
//         <p>bad {bad}</p>
//       </div>
//     </>
//   )
// }

// export default App
