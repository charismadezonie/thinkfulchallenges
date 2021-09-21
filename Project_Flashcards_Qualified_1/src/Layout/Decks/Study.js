import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

function Study() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const cards = readDeck(deckId).then(({ cards }) => cards);
  console.log(cards);
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
      <p>{cards.card}</p>
    </>
  );
}

export default Study;
