import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const handleGood  = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAvg(avg + 1)
  }

  const handleNeutral  = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAvg(avg + 0)
  }

  const handleBad  = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAvg(avg - 1)
  }


  return (

    
    <div>
      <h2>Give feedback</h2>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {avg/all}</p>
      <p>Positive: {100*good/all}%</p>
    </div>
  )
}

export default App