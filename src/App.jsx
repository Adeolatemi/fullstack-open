// import React from 'react'

// const Header = ({ course }) => {
//   return <h1>{course.name}</h1>
// }

// const Part = ({ part }) => {
//   return (
//     <p>
//       {part.name}: {part.exercises}
//     </p>
//   )
// }

// const Content = ({ course }) => {
//   return (
//     <div>
//       {course.parts.map((part, index) => (
//         <Part key={index} part={part} />
//       ))}
//     </div>
//   )
// }

// const Total = ({ course }) => {
//   const totalExercises = course.parts.reduce(
//     (sum, part) => sum + part.exercises,
//     0
//   )
//   return (
//     <div>
//       <p>Total exercises: {totalExercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       { name: 'Fundamentals of React', exercises: 10 },
//       { name: 'Using props to pass data', exercises: 7 },
//       { name: 'State of a component', exercises: 14 }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   )
// }

// export default App
// import { useState } from 'react'
// import Statistics from './Statistics'
// import Button from './Button'
// const App = () => {
  
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <button onClick={() => setGood(good + 1)}>good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
//       <button onClick={() => setBad(bad + 1)}>bad</button>
       
//        <h2>statistics</h2>
//        <Statistics good={good} neutral={neutral} bad={bad} />
//        </div>
//        )
//       }
       {/* <p>good {good}</p>
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>

       <h3>all { good + neutral + bad}</h3>
       <h3>average {(good - bad) / (good + neutral + bad) || 0}</h3>
       <h3>positive { (good / (good + neutral + bad) * 100) || 0}%</h3>
    </div>
  )
} */}

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState(Array(anecdotes.lebgth).fill(0))
  // function to pick a random anecdote
  const showRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
const voteForAnecdote = () => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}
const maxVotes = Math.max(...votes)
const topAnecdoteIndex = votes.indexOf(maxVotes)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteForAnecdote}>vote</button>
      <button onClick={showRandomAnecdote}>next anecdote</button>
    <h1>Anecdote with most votes</h1>
    {maxVotes === 0 ? (
      <p>No votes yet</p>
    ) : (
      <div>
        <p>{anecdotes[topAnecdoteIndex]}</p>
        <p>has {maxVotes} votes</p>
        </div>
    )}
    </div>

  )
}


export default App