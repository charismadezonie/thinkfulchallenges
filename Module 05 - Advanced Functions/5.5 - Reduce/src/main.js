/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  return parks.reduce((acc, park) => (acc += park.areaInSquareKm), 0);
}

function parkNameAndState(parks) {
  return parks.reduce((acc, park) => {
    acc[park.name] = park.location.state;
    return acc;
  }, {});
}

function parkByState(parks) {
  const result = parks.reduce((acc, park) => {
    const state = park.location.state;
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(park);
    return acc;
  }, {});
  return result;
}

console.log(parkByState);
module.exports = { squareKmTotal, parkNameAndState, parkByState };
