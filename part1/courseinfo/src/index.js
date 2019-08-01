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
      <Part title={props.parts[0].name} excount={props.parts[0].exercises}/>
      <Part title={props.parts[1].name} excount={props.parts[1].exercises}/>
      <Part title={props.parts[2].name} excount={props.parts[2].exercises}/>
    </div>
  )

const Total = (props) => (
  <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )

const App = () => {
  const course = 'Half Stack application development'
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

return (
    <>
      <Header title = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))