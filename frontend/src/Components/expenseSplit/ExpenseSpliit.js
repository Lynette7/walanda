import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import { fetchExpense } from "./ExpenseSpliitSlice";
import "./expenseSplit.css";

function ExpenseSpliit() {
  const profileId = localStorage.getItem("profileId");
  const dispatch = useDispatch();
  const token = localStorage.getItem("expense");
  const expenseSplit = useSelector(
    (state) => state.expenseSplit.expense
  );
  const status = useSelector((state) => state.expenseSplit.status);


  useEffect(() => {
    dispatch(fetchExpense(profileId, token));
  }, [profileId, token, dispatch]);

  if (status === "loading") {
    return <h2 style={{ fontSize: "30px" }}>Loading...</h2>;
  }
  return (
    <>
      <Header />

      <div className="profile-container">
        <div className="row-update">
          <img src={expenseSplit.image} alt="profile pic" />
          <FontAwesomeIcon
            icon={faCamera}
            className="user-update image-profile"
          />

        </div>

        <div className="row-update">
          <h2>
            {expenseSplit.username}
            <FontAwesomeIcon
              icon={faPen}
              // onClick={() => setTriggerName((prev) => !prev)}
              className="user-update pen"
            />
          </h2>

          {/* {triggerName ? (
            <UsernameUpdate setTriggerName={setTriggerName} />
          ) : null} */}
        </div>

        <div className="row-update">
          <h3>
            {expenseSplit.location}
            <FontAwesomeIcon
              icon={faPen}
              // onClick={() => setTriggerLocation((prev) => !prev)}
              className="user-update pen"
            />
          </h3>

          {/* {triggerLocation ? (
            <LocationUpdate setTriggerLocation={setTriggerLocation} />
          ) : null} */}
        </div>

        <div className="row-update">
          <h4>
            {expenseSplit.speciality}
            <FontAwesomeIcon
              icon={faPen}
              // onClick={() => setTriggerSpeciality((prev) => !prev)}
              className="user-update pen"
            />
          </h4>

          {/* {triggerSpeciality ? (
            <SpecialityUpdate setTriggerSpeciality={setTriggerSpeciality} />
          ) : null} */}
        </div>
        <div className="row-update">
          <h4>
            {expenseSplit.rating}
            <FontAwesomeIcon
              icon={faPen}
              // onClick={() => setTriggerRating((prev) => !prev)}
              className="user-update pen"
            />
          </h4>

          {/* {triggerRating ? (
            <RatingUpdate setTriggerRating={setTriggerRating} />
          ) : null} */}
        </div>
        <div className="row-update">
          <h5>
            Description
            <FontAwesomeIcon
              icon={faPen}
              // onClick={() => setTriggerDescription((prev) => !prev)}
              className="user-update pen"
            />
          </h5>
          <p>{expenseSplit.description}</p>

          <br />
          {/* {triggerDescription ? (
            <DescriptionUpdate setTriggerDescription={setTriggerDescription} />
          ) : null} */}
        </div>
      </div>
    </>
  );
}

export default ExpenseSpliit;
