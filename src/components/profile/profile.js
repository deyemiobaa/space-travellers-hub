import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

export default function Profile() {
  const missionsList = useSelector((state) => state.missions);
  const filteredMissions = missionsList.filter((mission) => mission.joined);
  return (
    <div className="my-profile">
      <div className="my-missions">
        <h2 className="my-profile-header">My Missions</h2>
        <ul className="missions-list">
          {filteredMissions.length >= 1
            ? filteredMissions.map((mission) => (
              <li key={mission.name}>
                {mission.name}
                {' '}
                by
                {' '}
                {mission.manufacturer}
              </li>
            ))
            : <li>You have no missions</li>}
        </ul>
      </div>
      <div className="my-rockets">
        <h2 className="my-profile-header">My Rockets</h2>
        <ul className="rockets-list">
          <li>No rockets available</li>
        </ul>
      </div>
    </div>
  );
}
