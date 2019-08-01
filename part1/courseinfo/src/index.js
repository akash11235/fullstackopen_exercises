import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
    <h1>{props.title}</h1>
)

const Part = (props) => (
    <p>{props.title} {props.excount}</p>
  )

const Content = (props) => (
    <div>
      <Part title={props.parts[0]} excount={props.excounts[0]}/>
      <Part title={props.parts[1]} excount={props.excounts[1]}/>
      <Part title={props.parts[2]} excount={props.excounts[2]}/>
    </div>
  )

const Total = (props) => (
  <p>Number of exercises {props.count}</p>
  )

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

return (
    <>
      <Header title={course} />
      <Content parts={[part1.name,part2.name,part3.name]} excounts={[part1.exercises,part2.exercises,part3.exercises]}/>
      <Total count = {part1.exercises + part2.exercises + part3.exercises}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))