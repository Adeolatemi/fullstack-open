const Course = (props) => {
  const course = props.course

  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <h1>{course.name}</h1>

      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default Course