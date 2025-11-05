  import { useState } from 'react'

const App =() =>{
  const [person, setNewPerson] = useState([
    {name: 'arto hellas'}, { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
