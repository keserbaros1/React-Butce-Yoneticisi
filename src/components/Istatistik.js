// import React from "react";
// import { PieChart, Pie, Tooltip, Legend } from 'recharts';

// const Istatistik = (props) => {
//   const chartDataPoints = [
//     { label: "Jan", value: 0 },
//     { label: "Feb", value: 0 },
//     { label: "Mar", value: 0 },
//     { label: "Apr", value: 0 },
//     { label: "May", value: 0 },
//     { label: "Jun", value: 0 },
//     { label: "Jul", value: 0 },
//     { label: "Agu", value: 0 },
//     { label: "Sep", value: 0 },
//     { label: "Oct", value: 0 },
//     { label: "Nov", value: 0 },
//     { label: "Dec", value: 0 },
//   ];

//   for (const expense of props.expenses) {
//     const expenseMonth = expense.date.getMonth(); // 0 based index
//     chartDataPoints[expenseMonth].value += expense.amount;
//   }

//   return (
//     <PieChart width={400} height={400}>
//       <Pie dataKey="value" nameKey="label" data={chartDataPoints} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label />
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   );
// };

// export default Istatistik;
