import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#d62728'];

function Analytics({ expenses }) {
  const categoryMap = {};

  expenses.forEach((expense) => {
    const cat = expense.category || 'Others';
    categoryMap[cat] = (categoryMap[cat] || 0) + expense.amount;
  });

  const chartData = Object.entries(categoryMap).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <div>
      <h2>Expense Analytics</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Analytics;

