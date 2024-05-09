import React from "react";

function ClosedExpenses({ closedExpenses }) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Closed Expenses</h2>
        {closedExpenses.map((expense, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{expense.name}</div>
              <p className="text-gray-700 text-base">Amount: ${expense.amount}</p>
              <p className="text-gray-700 text-base">Date: {expense.date}</p>
              <p className="text-red-500 text-base">Closed</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default ClosedExpenses;
