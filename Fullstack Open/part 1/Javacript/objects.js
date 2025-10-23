const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}
const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)
const fieldname = 'age'
console.log(object1[fieldname])

object1.address = 'Helsinki'
object1['secret number'] = 12312
console.log(object1.address )
console.log(object1['secret number'])