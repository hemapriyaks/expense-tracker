import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) return <p>No expenses added yet.</p>;

  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
