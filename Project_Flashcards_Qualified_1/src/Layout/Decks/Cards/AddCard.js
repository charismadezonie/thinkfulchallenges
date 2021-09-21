import React, { useState, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { createCard } from "../../../utils/api";
import { readDeck } from "../../../utils/api";

function CreateCard() {
  const history = useHistory();
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const [currentDeck, setCurrentDeck] = useState({});
  const [newCardData, setNewCardData] = useState({
    front: "",
    back: "",
    deckId: deckId,
  });

  console.log(newCardData);
  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      setCurrentDeck(decksData);
    }
    fetchCards();
  }, [deckId]);

  function handleChange({ target }) {
    setNewCardData({
      ...newCardData,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createCard(newCardData.deckId, newCardData);
    history.push(`/decks/${response.deckId}`);
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">deck title</Link>
          </li>
          <li className="breadcrumb-item">Create Card</li>
        </ol>
      </nav>
      <h1>Create Card</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="front">
          Front
          <br />
          <textarea
            type="text"
            id="front"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={newCardData.front}
          />
        </label>
        <br />
        <label htmlFor="back">
          Back
          <br />
          <textarea
            id="back"
            name="back"
            className="text-area"
            placeholder="Back side of card"
            onChange={handleChange}
            value={newCardData.back}
          />
        </label>
        <br />
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateCard;
