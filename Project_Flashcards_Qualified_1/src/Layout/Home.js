import React, { Card } from "react";

function Home() {
  return (
    <>
      <button type="button">Create Deck</button>
      <Card>
        <p>Here's a card</p>
        <button type="button">View</button>
        <button type="button">Study</button>
      </Card>
    </>
  );
}

export default Home;
