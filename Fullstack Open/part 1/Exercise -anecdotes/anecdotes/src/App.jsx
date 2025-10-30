import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    
  

  const randomHandler = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }

  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={voteHandler}>vote</button>
      <button onClick={randomHandler}>next anecdote</button>
<MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}
const MostVotes = ({ votes, anecdotes }) => {
  const sum = votes.reduce((a, b) => a + b, 0)

  if (sum === 0) {
    return <p>No votes yet</p>
  }

  const maxVotes = Math.max(...votes)
  const bestIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[bestIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}
  


export default App