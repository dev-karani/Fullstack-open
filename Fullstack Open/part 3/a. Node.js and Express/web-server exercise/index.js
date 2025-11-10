const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))

morgan.token('tokenName', function (req, res) { return something })
morgan.token('body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) =>{
    response.send('<h1>only testing</h1>')
})

//get persons
app.get('/api/persons', (request, response)=>{
    response.json(persons)
})
//get info
app.get('/api/persons/info', (request, response)=>{
    const localDate = new Date();
    const gmtDate = localDate.toUTCString();

    response.send(`
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${gmtDate}</p>`
    )

})
//single resouce
app.get('/api/persons/:id', (request, response) =>{
    const id = request.params.id
    const person = persons.find(person => person.id === id)

    if (person){
        return response.json(person)
    }else{
        return response.status(404).end('<h1>it not here love</h1>')
    }
})

//delete resource
app.delete('/api/persons/:id', (request,response)=>{
    const id  = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

//post resource
const generateId = () => Math.floor(Math.random() * 1000)

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'name or number missing' })
    }

    const nameExists = persons.find(p => p.name === body.name)
    if (nameExists) {
        return response.status(400).json({ error: 'name must be unique' })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
    response.json(person)
})




const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    
})