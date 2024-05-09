
import React, { useState } from 'react';
import './SideBar.css';
// import CreateExpense from "./CreateExpense";


function Home(){
    return(

        <div class="main">

        <div class="searchbar2">
            <input type="text"
                name=""
                id=""
                placeholder="Search"/>
            <div class="searchbtn">
            <img src=
"frontend/public/images/28.png"
                    class="icn srchicn"
                    alt="search-button"/>
            </div>
        </div>

        <div class="box-container">

            {/* <button onClick={handleClick}>Tru</button> */}
            {/* <CreateExpense show={modalShow} onHide={() => setModalShow(false)} /> */}

            <div class="box box1">
                <div class="text">
                    <h2 class="topic-heading">60.5k</h2>
                    <h2 class="topic">Article Views</h2>
                </div>

                <img src=
"frontend/public/images/28.png"
                    alt="Views"/>
            </div>

            <div class="box box2">
                <div class="text">
                    <h2 class="topic-heading">150</h2>
                    <h2 class="topic">Likes</h2>
                </div>

                <img src=
"frontend/public/images/14.png"
                    alt="likes"/>
            </div>

            <div class="box box3">
                <div class="text">
                    <h2 class="topic-heading">320</h2>
                    <h2 class="topic">Comments</h2>
                </div>

                <img src=
"frontend/public/images/32.png"
                    alt="comments"/>
            </div>

            <div class="box box4">
                <div class="text">
                    <h2 class="topic-heading">70</h2>
                    <h2 class="topic">Published</h2>
                </div>

                <img src=
"frontend/public/images/13.png" alt="published"/>
            </div>
        </div>

        <div class="report-container">
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
            </div>
        </div>
        </div>


    );
}

export default Home;
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
