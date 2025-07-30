import React from 'react';

function Summary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h2>Total Spent: ₹{total.toFixed(2)}</h2>
    </div>
  );
}

export default Summary;
