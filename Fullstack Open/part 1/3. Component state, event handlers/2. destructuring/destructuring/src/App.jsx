

//destructurng llevel 1
////by assigning variables directly
const Hello = (props) => {
    const name = props.name
    const age = props.age

    const bornYear = () => new Date(). getFullYear() - age

    return(
        <div>
            <p>Hello {name}, you are {age} yhears old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

//level 2
//destructuring variable assignment
///i changed the function nmae not to bug since they aall are the same
const pello = (props) => {

  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

//level3
//destructuring te object itself 
const tello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Hello name={"Arto Hellas"} age={35} />
    </div>
  )
}

export default App

