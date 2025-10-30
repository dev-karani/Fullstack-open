import { useState } from 'react'



const Button =(props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
const StasticLine = ({text,value}) =>{
  return (
      <tr>
        <td><p>{text}</p></td>
        <td><p>{value}</p></td>
      </tr>
  )
}
const Statistics = ({good, bad, neutral}) => {
    const total = good + bad + neutral
    const average = (good-bad) /total
    const positive = (good/total) * 100

    if (total === 0) {
      return <div><p>No feedback given</p></div>
    }

    return (
      <div>    
        <table>
          <tbody>
            <StasticLine text='good' value={good}/>
            <StasticLine text='bad' value={bad}/>
            <StasticLine text='neutral' value={neutral}/>
            <StasticLine text='total' value={total}/>
            <StasticLine text='average' value={average.toFixed(2)}/>
            <StasticLine text='average' value={positive.toFixed(1)}/>
          </tbody>
        </table>
        
      </div>

    )
    
}
const App =()=> {
  const [count, setCount] = useState({good:0, bad:0, neutral:0})

  const handleBad  = () =>{
    const newCount ={
      good: count.good,
      neutral: count.neutral,
      bad:count.bad + 1
    } 
    setCount(newCount)
  }
  const handleGood  = () =>{
    const newCount ={
      ...count,
      good: count.good + 1,
    } 
    setCount(newCount)

  }
    const handleNeutral = () => setCount({ ...count, neutral: count.neutral + 1 })

  return (
    <div>
         <h1>unicafe review</h1>
         <p>which one describes your service</p>
         <Button onClick = {handleGood} text= 'good'/>
         <Button onClick = {handleBad} text='bad'/>
         <Button onClick = {handleNeutral} text='neutral'/>

         <h2>Statistics</h2>
         <Statistics good = {count.good} bad={count.bad} neutral={count.neutral}/>
    </div>
  )
}

export default App
