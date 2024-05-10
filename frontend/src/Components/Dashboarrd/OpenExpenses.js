// import React from 'react';
// // import Modal from 'react-bootstrap/Modal';

// // Component for Open Expenses
// function OpenExpenses({ openExpenses, handleCloseExpense }) {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Open Expenses</h2>
//       {openExpenses.map((expense, index) => (
//         <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{expense.name}</div>
//             <p className="text-gray-700 text-base">Amount: ${expense.amount}</p>
//             <p className="text-gray-700 text-base">Date: {expense.date}</p>
//             <button onClick={() => handleCloseExpense(index)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">Close</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default OpenExpenses;





import React from 'react';
import './SideBar.css';
// import CreateExpense from "./CreateExpense";


function OpenExpenses(){
    return(

        <div class="main">

        <div class="searchbar2">
            <input type="text"
                name=""
                id=""
                placeholder="Search"/>
            <div class="searchbtn">
            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                    class="icn srchicn"
                    alt="search-button"/>
            </div>
        </div>

        <div class="box-container">

            {/* <button onClick={handleClick}>Tru</button> */}
            {/* <CreateExpense show={modalShow} onHide={() => setModalShow(false)} /> */}

            <div class="box box1">
                <div class="text">
                    <h2 class="topic-heading">Birthday</h2>
                    <h2 class="topic">300000</h2>
                    <h2 class="topic">Noela's Birthday</h2>
                    <h2 class="topic">0x1adB7Ec86b255B39cc6266A2cd8F0dd3C5B0156E</h2>
                </div>

                <img src=
"fhttps://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                    alt="Views"/>
            </div>

            <div class="box box2">
                <div class="text">
                <h2 class="topic-heading">Birthday</h2>
                    <h2 class="topic">300000</h2>
                    <h2 class="topic">Noela's Birthday</h2>
                    <h2 class="topic">0x1adB7Ec86b255B39cc6266A2cd8F0dd3C5B0156E</h2>
                </div>

                <img src=
"fhttps://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                    alt="likes"/>
            </div>

            <div class="box b   ox3">
                <div class="text">
                <h2 class="topic-heading">Birthday</h2>
                    <h2 class="topic">300000</h2>
                    <h2 class="topic">Noela's Birthday</h2>
                    <h2 class="topic">0x1adB7Ec86b255B39cc6266A2cd8F0dd3C5B0156E</h2>
                </div>

                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                    alt="comments"/>
            </div>

            <div class="box box4">
                <div class="text">
                <h2 class="topic-heading">Birthday</h2>
                    <h2 class="topic">300000</h2>
                    <h2 class="topic">Noela's Birthday</h2>
                    <h2 class="topic">0x1adB7Ec86b255B39cc6266A2cd8F0dd3C5B0156E</h2>
                </div>

                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"/>
            </div>
        </div>

        {/* <div class="report-container">
            <div class="report-header">
                <h1 class="recent-Articles">Recent Articles</h1>
                <button class="view">View All</button>
            </div>

            <div class="report-body">
                <div class="report-topic-heading">
                    <h3 class="t-op">Article</h3>
                    <h3 class="t-op">Views</h3>
                    <h3 class="t-op">Comments</h3>
                    <h3 class="t-op">Status</h3>
                </div>

                <div class="items">
                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 73</h3>
                        <h3 class="t-op-nextlvl">2.9k</h3>
                        <h3 class="t-op-nextlvl">210</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 72</h3>
                        <h3 class="t-op-nextlvl">1.5k</h3>
                        <h3 class="t-op-nextlvl">360</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 71</h3>
                        <h3 class="t-op-nextlvl">1.1k</h3>
                        <h3 class="t-op-nextlvl">150</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 70</h3>
                        <h3 class="t-op-nextlvl">1.2k</h3>
                        <h3 class="t-op-nextlvl">420</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 69</h3>
                        <h3 class="t-op-nextlvl">2.6k</h3>
                        <h3 class="t-op-nextlvl">190</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 68</h3>
                        <h3 class="t-op-nextlvl">1.9k</h3>
                        <h3 class="t-op-nextlvl">390</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 67</h3>
                        <h3 class="t-op-nextlvl">1.2k</h3>
                        <h3 class="t-op-nextlvl">580</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 66</h3>
                        <h3 class="t-op-nextlvl">3.6k</h3>
                        <h3 class="t-op-nextlvl">160</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div class="item1">
                        <h3 class="t-op-nextlvl">Article 65</h3>
                        <h3 class="t-op-nextlvl">1.3k</h3>
                        <h3 class="t-op-nextlvl">220</h3>
                        <h3 class="t-op-nextlvl label-tag">Published</h3>
                    </div>

                </div>
            </div> */}
        </div>


    );
}

export default OpenExpenses;
// {/* // import React from "react";
// // import { Link } from "react-router-dom";
// // import "../LandingTopHeader/LandingHeader.css";


// // function LandingHeader() {
// //   return (
// //     <header className="landing-header">
// //       <Link to="/">
// //         <h2 className="kazi-header">
// //           Wala
// //           <span>nda</span>
// //         </h2>
// //       </Link>

// //       <nav>
// //         <ul>
// //           <Link to="/expenseLogin">
// //             <li className=" landing-login "> Active Expenses </li>
// //           </Link>
// //           <Link to="/expenseSignUp">
// //             <li className="landing-signup"> Closed Expenses </li>
// //           </Link>

// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default LandingHeader; */}



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
