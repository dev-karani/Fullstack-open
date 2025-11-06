import { useEffect, useState } from 'react'
import phonebook from './services/phonebook'  // our backend service module

const App = () => {
  const [persons, setPersons] = useState([])     // all contacts
  const [newName, setNewName] = useState('')     // input name
  const [newNumber, setNewNumber] = useState('') // input number
  const [filter, setFilter] = useState('')       // search filter

  // 🔹 Fetch all persons once when app loads
  useEffect(() => {
    phonebook
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // 🔹 Handle adding (or updating) a person
  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(
      p => p.name.toLowerCase() === newName.toLowerCase()
    )

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`
      )

      if (confirmUpdate) {
        phonebook
          .update(existingPerson.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p =>
              p.id !== existingPerson.id ? p : returnedPerson
            ))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(
              `The person '${existingPerson.name}' was already deleted from the server`
            )
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
    } else {
      phonebook
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  // 🔹 Delete a person
  const deletePerson = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`)
    if (confirmDelete) {
      phonebook
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(`The person '${name}' was already deleted from the server`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  // 🔹 Controlled input handlers
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  // 🔹 Filter visible persons
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  // 🔹 UI
  return (
    <div>
      <h2>Phonebook</h2>

      {/* Search filter */}
      <div>
        filter shown with:{' '}
        <input value={filter} onChange={handleFilterChange} />
      </div>

      {/* Add new contact */}
      <h3>add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      {/* Contacts list */}
      <h3>Numbers</h3>
      {filteredPersons.map(person => (
        <p key={person.id}>
          {person.name}: {person.number}{' '}
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default App
