import React from "react";

function Roster({ detailed, roster }) {
  if (!detailed) {
    return (
      <ul>
        {roster.map((element) => <li>{element.firstName}</li>)}
      </ul>
    )
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {roster.map(({id, firstName, lastName, location}, index) => (
          <tr key={index}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{location}</td>
          </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Roster;
