import React from "react";
import "./Header.css";

function Header({name, imageSrc, birthday}) {
  return (
    <div className="header">
      <img src={imageSrc}/>
      <div>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </div>
  )
}

export default Header;
