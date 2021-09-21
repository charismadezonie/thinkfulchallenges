import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

function Study() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const [currentDeck, setCurrentDeck] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      setCurrentDeck(decksData);
    }
    fetchCards();
    console.log("render");
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Study;
