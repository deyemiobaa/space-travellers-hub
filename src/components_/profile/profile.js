import React from "react";
import './profile.css'

export default function Profile() {
  return (
    <div className="my-profile">
      <div className="my-missions">
        <h2 className="my-profile-header">My Missions</h2>
        <ul className="missions-list">
          <li>Sodiq</li>
          <li>Sodiq</li>
          <li>Sodiq</li>
        </ul>
      </div>
      <div className="my-rockets">
        <h2 className="my-profile-header">My Rockets</h2>
        <ul className="rockets-list">
          <li>Sodiq</li>
          <li>Sodiq</li>
          <li>Sodiq</li>
        </ul>
      </div>
    </div>
  )
}