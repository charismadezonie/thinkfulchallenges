import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../../../utils/api";

function EditCard() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const cardId = params.cardId;
  const [cardToEdit, setCardToEdit] = useState();
  const [editedData, setEditedData] = useState({
    deckId: deckId,
    id: cardId,
    name: "",
    description: "",
  });
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const cardData = await readCard(cardId, abortController.signal);
      setCardToEdit(cardData);
    }
    fetchData();
  }, [cardId]);

  function handleChange({ target }) {
    setEditedData({
      ...editedData,
      [target.name]: target.value,
    });
  }

  console.log(editedData);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await updateCard(editedData);
    history.push(`/decks/${deckId}`);
  }

  if (cardToEdit) {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{cardToEdit.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card
            </li>
          </ol>
        </nav>
        <div>
          <h1>Edit Card</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="front">
              Name
              <br />
              <textarea
                id="front"
                name="front"
                placeholder={cardToEdit.name}
                onChange={handleChange}
                value={editedData.name}
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
                placeholder={cardToEdit.description}
                onChange={handleChange}
                value={editedData.description}
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

export default EditCard;
