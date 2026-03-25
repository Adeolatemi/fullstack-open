import StatisticLine from "./StatisticLine"
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }
return (
  <table>
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </tbody>
  </table>
  )
}
//   return (
//     <div>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>all {total}</p>
//       <p>average {average}</p>
//       <p>positive {positive} %</p>
//     </div>
//   )
// }

export default Statistics