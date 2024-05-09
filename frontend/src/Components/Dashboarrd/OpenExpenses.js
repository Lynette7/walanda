import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Component for Open Expenses
function OpenExpenses({ openExpenses, handleCloseExpense }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Open Expenses</h2>
      {openExpenses.map((expense, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{expense.name}</div>
            <p className="text-gray-700 text-base">Amount: ${expense.amount}</p>
            <p className="text-gray-700 text-base">Date: {expense.date}</p>
            <button onClick={() => handleCloseExpense(index)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Close</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default OpenExpenses;



// import React from 'react';

// function DisplayExpense({ expenses }) {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {expenses.map((expense, index) => (
//         <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{expense.name}</div>
//             <p className="text-gray-700 text-base">Amount: ${expense.amount}</p>
//             <p className="text-gray-700 text-base">Date: {expense.date}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DisplayExpense;
