import React, {useEffect} from "react";
import './missions.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchMissions, updateMission } from "../../redux/missions/missions";

export default function Missions() {
  const allMissions = useSelector(state => state.missions);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(updateMission(id));
  }

  const activeButton = <button type="button" className="active">Active member</button>
  const inactiveButton = <button type="button" className="inactive">Not a member</button>
  const joinMission = <button type="button" className="join" onClick={handleClick}>Join mission</button>
  const leaveMission = <button type="button" className="leave" onClick={handleClick}>Leave Mission</button>

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th></th>
      </tr>
      {allMissions.map(mission => {
        mission.joined ? 
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{activeButton}</td>
            <td>{leaveMission}</td>
          </tr>
          :
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            <td>{inactiveButton}</td>
            <td>{joinMission}</td>
          </tr>
      })}
    </table>
  )
}