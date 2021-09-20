import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

function Home({ decks, setDecks }) {
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchDecks() {
      const decksData = await listDecks(abortController.signal);
      setDecks(decksData);
    }
    fetchDecks();
  }, [decks]);

  function handleDelete(deckId) {
    if (window.confirm("Are you sure?")) {
      deleteDeck(deckId);
    }
  }

  return (
    <>
      <Link to="/decks/new">
        <button type="button">Create Deck</button>
      </Link>
      <div>
        {decks.map((deck) => {
          return (
            <div className="card">
              <p>{deck.name}</p>
              <Link to="/decks/:deckId">
                <button type="button">View</button>
              </Link>
              <Link to="/decks/:deckId/study">
                <button type="button">Study</button>
              </Link>
              <button type="button" onClick={() => handleDelete(deck.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
