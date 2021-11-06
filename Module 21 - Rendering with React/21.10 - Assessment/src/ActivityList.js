import React from "react";
import "./ActivityList.css";
import activities from "./Activity"

function ActivityList({activities}) {
  if (activities) {
  const rows = activities.map(({time, description}, index) => (
    <tr key={index}>
      <td className='left-side'>{time}</td>
      <td className='right-side'>{description}</td>
    </tr>
  ))
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
    );
  } else {
    return null;
  }
}

export default ActivityList;
