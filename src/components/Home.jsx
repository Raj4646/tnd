import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
        <h1 className="title">Truth or Dare</h1>
        <div className="buttons">
        <Link to="/game" state={{ mode: "friendly" }}>
          <button className="btn friendly">Friendly</button>
        </Link>
      
        <Link to="/game" state={{ mode: "challenging" }}>
          <button className="btn challenging">Challenging</button>
        </Link>
      
        <Link to="/game" state={{ mode: "adult" }}>
          <button className="btn adult" disabled>Adult</button>
        </Link>
        </div>
      
    </div>
  );
}

export default Home;
