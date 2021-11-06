import React from "react";
import Clock from "./Clock";

function App({loggedIn}) {
  if(loggedIn) {
  return <Clock />
  } else {
    return null
  }
}

export default App;
