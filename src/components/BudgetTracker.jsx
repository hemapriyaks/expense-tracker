import React, { useState, useEffect } from 'react';

function BudgetTracker({ budget, setBudget, expenses }) {
  const [inputBudget, setInputBudget] = useState(budget || '');

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - totalSpent;

  const handleSetBudget = () => {
    const amount = parseFloat(inputBudget);
    if (!isNaN(amount) && amount >= 0) {
      setBudget(amount);
    }
  };

  useEffect(() => {
    setInputBudget(budget);
  }, [budget]);

  return (
    <div>
      <h2>Set Budget</h2>
      <input
        type="number"
        placeholder="Enter your budget"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
      />
      <button onClick={handleSetBudget}>Update Budget</button>

      <h3>Total Spent: ₹{totalSpent.toFixed(2)}</h3>
      <h3>Remaining: ₹{remaining.toFixed(2)}</h3>

      {remaining < 0 && (
        <p style={{ color: 'red' }}>
          ⚠️ Warning: You have exceeded your budget!
        </p>
      )}
    </div>
  );
}

export default BudgetTracker;
