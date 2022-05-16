import React from "react";
import './missions.css'

export default function Missions() {
  const activeButton = <button type="button" className="active">Active member</button>
  const inactiveButton = <button type="button" className="inactive">Not a member</button>
  const joinMission = <button type="button" className="join">Join mission</button>
  const leaveMission = <button type="button" className="leave">Leave Mission</button>

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th></th>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy
          is available.</td>
        <td><button type="button" className="inactive">Not a member</button></td>
        <td><button type="button" className="join">Join mission</button></td>
      </tr>
      <tr>
        <td>Telstar</td>
        <td>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy
          is available.</td>
        <td><button type="button" className="active">Active member</button></td>
        <td><button type="button" className="leave">Leave Mission</button></td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy
          is available.</td>
        <td><button type="button" className="inactive">Not a member</button></td>
        <td><button type="button" className="join">Join mission</button></td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy
          is available.</td>
        <td><button type="button" className="inactive">Not a member</button></td>
        <td><button type="button" className="join">Join mission</button></td>
      </tr>
    </table>
  )
}