import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfil from "./components/Rockets/Rockets";
import Rockets from "./components/Myprofil/MyProfil";
import Missions from "./components/Missions/Missions";
import Nav from "./components/Nav/nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Myprofil" element={<MyProfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
