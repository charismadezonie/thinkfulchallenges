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

function findParkByName(parks, name) {
  return parks.find((element) => element.name === name);
}

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((element) => element.areaInSquareKm > minSize);
}

function getBigParkNames(parks, minSize) {
  return parks
    .filter((element) => element.areaInSquareKm >= minSize)
    .map((element) => element.name);
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  return parks
    .filter((element) => element.location.state === state)
    .some((element) => element.areaInSquareKm >= minSize);
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
