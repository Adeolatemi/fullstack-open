// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       }
//     ]
//   }

//   return <Course course={course} />
// }

// export default App

// const Header = ({ name }) => {
//   return <h1>{name}</h1>;
// };

// const Part = ({ part }) => {
//   return (
//     <p>
//       {part.name} {part.exercises}
//     </p>
//   );
// };
// const Total = ({ parts }) => {
//   const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
//   return <p>Number of exercises {total}</p>;
// };

//   const Content = ({ parts }) => {
//   return (
//     <div>
//       <Part part={parts[0]} />
//       <Part part={parts[1]} />
//       <Part part={parts[2]} />
//     </div>
//   );
// };

// const Course = ({ course }) => {
//   return (
//     <div>
//       <Header name={course.name} />
//       <Content parts={course.parts} />
//     </div>
//   );
// };

// export default Course;

// Course.jsx

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Total parts={parts} />
    </div>
  );
};

const Total = ({ parts }) => {
  const total =
    parts[0].exercises +
    parts[1].exercises +
    parts[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;