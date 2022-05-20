import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from '../components/missions/missions';
import Profile from '../components/profile/profile';
import Nav from '../components/nav/nav';
import './App.css';
import Rockets from '../components/rockets/Rockets';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
