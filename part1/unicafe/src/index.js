import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    
  const getAverage = (props) => {
      const wtSum = 1*props.good + 0*props.neutral - 1*props.bad
      const denom = ((props.good+props.neutral+props.bad)==0)? 1:props.good+props.neutral+props.bad
      return wtSum/denom
  }

  const getPositive = (props) => {
     const denom = ((props.good+props.neutral+props.bad)==0)? 1:props.good+props.neutral+props.bad
     return props.good/denom * 100
  }
  return (
   <div>
    <h1>statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.good+props.neutral+props.bad}</p>
    <p>average {getAverage(props)}</p>
    <p>positive {getPositive(props)}%</p>
   </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => (setGood(good+1))
  const handleNeutral = () => (setNeutral(neutral+1))
  const handleBad = () => (setBad(bad+1))

  return (
    <div>
    <h2>give feedback</h2> 
    <button onClick={() => handleGood()}>good</button>
    <button onClick={() => handleNeutral()}>neutral</button>
    <button onClick={() => handleBad()}>bad</button>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)