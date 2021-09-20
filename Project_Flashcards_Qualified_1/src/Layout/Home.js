import React from "react";

function Home(decks) {
  return (
    <>
      <button type="button">Create Deck</button>

      <div className="card">
        <p>Here's a card</p>
        <button type="button">View</button>
        <button type="button">Study</button>
      </div>
    </>
  );
}

export default Home;
