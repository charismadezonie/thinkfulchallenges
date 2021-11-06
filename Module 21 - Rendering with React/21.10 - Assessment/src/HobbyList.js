import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if (hobbies && hobbies.length > 0) {
    const listItems = hobbies.map((element, index) => (
      <li key={index}>{element}</li>
    ));
    return (
      <div>                         
        <h4>Hobbies</h4>
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return null
  }
}

export default HobbyList;
