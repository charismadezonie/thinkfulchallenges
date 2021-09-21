import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

function EditDeck() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const [deckToEdit, setDeckToEdit] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const deckData = await readDeck(deckId, abortController.signal);
      setDeckToEdit(deckData);
    }
    fetchData();
  }, [deckId]);

  if (deckToEdit) {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">title</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
        <div>
          <h1>Edit Deck</h1>
          <form>
            <label htmlFor="name">
              Name
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Deck Name"
                onChange={() => console.log("changed")}
                value={deckToEdit.name}
              />
            </label>
            <br />
            <label htmlFor="description">
              Description
              <br />
              <textarea
                id="description"
                name="description"
                className="text-area"
                placeholder="Brief description of the deck"
                onChange={() => console.log("changed")}
                value={deckToEdit.description}
              />
            </label>
            <br />
            <Link to={`/decks/${deckId}`}>
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default EditDeck;
