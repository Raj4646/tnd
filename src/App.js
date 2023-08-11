import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import './Home.css'
// import './Game.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
