import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../../utils/api";

function AddCard({ deck, setDeck, card, setCard }) {
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchDeck() {
      const decksData = await readDeck(deckId, abortController.signal);
      setDeck(decksData);
    }
    fetchDeck();
  }, [deckId, setDeck]);

  function handleChange({ target }) {
    setCard({
      deckId: deckId,
      ...card,
      [target.name]: target.value,
    });
  }
  console.log(card);
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createCard(card.deckId, card);
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
            <Link to="/">{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">Add Card</li>
        </ol>
      </nav>
      <h1>{`${deck.name}: Add Card`}</h1>
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
            value={card.front}
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
            value={card.back}
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

export default AddCard;
