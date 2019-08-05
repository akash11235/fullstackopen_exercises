import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good,neutral,bad}) => {
    
  const getAverage = ({good,neutral,bad}) => {
      const wtSum = 1*good + 0*neutral - 1*bad
      const denom = ((good+neutral+bad)==0)? 1:good+neutral+bad
      return wtSum/denom
  }

  const getPositive = ({good,neutral,bad}) => {
     const denom = ((good+neutral+bad)==0)? 1:good+neutral+bad
     return good/denom * 100
  }
  return (
      (good===0 && neutral === 0 && bad === 0)?
      <p>No feed back given </p>
      :
   <div>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good+neutral+bad}</p>
    <p>average {getAverage({good,neutral,bad})}</p>
    <p>positive {getPositive({good,neutral,bad})}%</p>
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