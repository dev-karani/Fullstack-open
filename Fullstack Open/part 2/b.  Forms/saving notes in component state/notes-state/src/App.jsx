import { useState } from 'react'
import Note from './components/Note'

//continued from destructuring
//to update new notes, we pass them into usestate variable
//added a form and event handler when save is clicked


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (event)=>{
    event.preventDefault()
    console.log('button clicked' , event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
           <Note key={note.id} note={note}/>
           )}
      </ul>
      <form action={addNote}>
        <input/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App
