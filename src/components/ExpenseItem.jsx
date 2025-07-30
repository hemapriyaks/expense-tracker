import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  const { id, title, amount, date } = expense;

  return (
    <div>
      <p><strong>{title}</strong></p>
      <p>₹{amount.toFixed(2)}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
