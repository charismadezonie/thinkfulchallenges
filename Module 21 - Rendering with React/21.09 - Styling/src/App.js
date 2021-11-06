import "./App.css"
import React from "react";

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", fontFamily: "cursive"}}>Hello!</h1>
      <h4 style={{textAlign: "center", fontFamily: "monospace"}}>How are you?</h4>
      <h5 style={{textAlign: "center"}} className="App-weather-message">Today is a nice day!</h5>
    </div>
  );
}

export default App;
