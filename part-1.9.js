import { useState } from 'react'

const Statistics = (props) => {
if (props.all !== 0)
    return (
      <div>
        <h2>Statistics</h2>
        Good={props.good},
        Neutral={props.neutral},
        Bad={props.bad},
        All={props.all},
        Average={props.avg/props.all},
        Positive={100*props.good/props.all}%
      </div>
    )
}

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
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        //no idea why this doesnt work lmao
        average={avg/all}
        //no idea why this works lmao
        positive={123432423}
        />
          {console.log(avg)}    
    </div>
  )
}

export default App