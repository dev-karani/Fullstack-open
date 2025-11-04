  import { useState } from 'react'

const App =() =>{
  const [person, setNewPerson] = useState([
    {name: 'arto hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event)=> {
    event.preventDefault()

    const personExists =person.some(person => person.name.toLowerCase() === newName.toLowerCase())
    if(personExists){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name:newName}
    setNewPerson(person.concat(personObject))
    setNewName('')
  }
  // console.log(person)
  const handlePersonChange = (event) => setNewName(event.target.value)

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form 
      onSubmit={addPerson}
      >
        <div>
          name: <input  onChange={handlePersonChange} value={newName}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {person.map((person, i) => (
        <p key={i}>{person.name}</p>
      ))}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}


export default App
