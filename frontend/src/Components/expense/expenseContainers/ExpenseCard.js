import React from "react";
import { useNavigate } from "react-router-dom";
import "../ExpenseF.css";

function ExpenseCard({ profile }) {
  const navigate = useNavigate();
  function handleProfile(profileId) {
    localStorage.setItem("profileId", profile.id);
    navigate(`/profilepage`);
  }

  return (
    <div className="container">
      <div className="expensecard">
        <div className="image">
          <img src={profile.image} alt="profile" />
          <h1 className="name"> {profile.username} </h1>
          <h2 className="occupation"> {profile.speciality} </h2>
        </div>

        <div className="info">
          <div className="info-top">
            <span className="location"> {profile.location} </span>
            <span className="rating"> {profile.rating} </span>
            <span
              className="button-span"
              onClick={() => handleProfile(profile.id)}
            >
              more
            </span>
          </div>

          <div className="info-bottom">
            <h2 className="description-heading"> Description </h2>
            <p className="paragraph"> {profile.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;
