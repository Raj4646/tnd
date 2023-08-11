import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import './Home.css'
import GitRepo from "./components/GitRepo";
// import './Game.css'

function App() {
  return (
    <>
    <GitRepo/>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
