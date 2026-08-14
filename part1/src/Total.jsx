// const Total = ({ parts }) => {
//   const total = 
//                parts[0].exercises +
//                 parts[1].exercises +
//                 parts[2].exercises;

//   return <p>Number of exercises {total}</p>;
// };


const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

export default Total;