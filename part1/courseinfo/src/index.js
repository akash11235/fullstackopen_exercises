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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

return (
    <>
      <Header title={course} />
      <Content parts={[part1,part2,part3]} excounts={[exercises1,exercises2,exercises3]}/>
      <Total count = {exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))