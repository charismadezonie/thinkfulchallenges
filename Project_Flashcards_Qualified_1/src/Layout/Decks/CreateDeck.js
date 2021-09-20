import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Create Deck</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default CreateDeck;
