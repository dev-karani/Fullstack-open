  import { useEffect, useState } from 'react'
  import axios from 'axios'

const App =() =>{
  const [person, setNewPerson] = useState([

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () =>{
    axios.get('http://localhost:3001/persons')
    .then(response =>{
      const data = response.data
      // console.log(data);
      setNewPerson(data)
    })
  } 
  useEffect(hook, [])

  const addPerson = (event)=> {
    event.preventDefault()

    const personExists =person.some(person => person.name.toLowerCase() === newName.toLowerCase())
    if(personExists){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name:newName,
      number:newNumber 
    }
    setNewPerson(person.concat(personObject))
    setNewName('')
    setNewNumber('')

  }
  console.log(newNumber);
  console.log(person);
  
  
  const handlePersonChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const filteredPersons = person.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter phone-number: <input  value={filter} onChange={handleFilterChange}/>
      </div>
      

      <h2>add a new number</h2>
      <form 
      onSubmit={addPerson}
      >
        <div>
          name: <input  onChange={handlePersonChange} value={newName}/>
        </div>
        <div>
          number <input onChange={handleNumberChange} value={newNumber}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      {filteredPersons.map(person => (
        <p key={person.id}>
          {person.name}: {person.number}
        </p>))}

    </div>
  )
}


export default App
