import React from "react";
import { Link } from "react-router-dom";

function Study() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Deck Title</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>Deck Title</h1>
      <div className="card">
        <h4 className="card-title">Card Title from API</h4>
        <p>Card content from API</p>
        <button>Flip</button>
      </div>
    </>
  );
}

export default Study;
