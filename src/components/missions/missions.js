import React, { useEffect } from 'react';
import './missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, updateMission } from '../../redux/missions/missions';

export default function Missions() {
  const allMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allMissions.length) dispatch(fetchMissions());
  }, [dispatch]);

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(updateMission(id));
  };

  const activeButton = <button type="button" className="active">Active member</button>;
  const inactiveButton = <button type="button" className="inactive">Not a member</button>;

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-label="Empty cell" />
        </tr>
      </thead>
      <tbody>
        {allMissions.map((mission) => (mission.joined
          ? (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{activeButton}</td>
              <td><button id={mission.id} type="button" className="leave" onClick={handleClick}>Leave Mission</button></td>
            </tr>
          )
          : (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>{inactiveButton}</td>
              <td><button id={mission.id} type="button" className="join" onClick={handleClick}>Join mission</button></td>
            </tr>
          )))}
      </tbody>
    </table>
  );
}
