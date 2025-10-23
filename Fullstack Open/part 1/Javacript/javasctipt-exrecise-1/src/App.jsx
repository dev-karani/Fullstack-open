const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
    {
      name:'Fundamentals of React',
      exercises1: 10
    },
    {
      part2:'Using props to pass data',
      exercises2: 7
    },
    {
      part3:'State of a component',
      exercises3: 14
    }
  ]
  

  }
  
  
  return (
    <div>
      <Header course = {course}/>
      <Content parts={parts} />
      <Total parts={parts}/>

    </div>
  )
}

const Header = (props)=>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part =(props)=>{
  return(
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}
const Content =(props) =>{
  return (
    <>
     <Part part={props.part1} exercise={props.exercises1}/>
     <Part part={props.part2} exercise={props.exercises2}/>
     <Part part={props.part3} exercise={props.exercises3}/>
    </>
  )
}
const Total =(props)=>{
  return (
    <>
      <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

export default App