const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  return axios.get(`${BASE_URL}/constellations`).then(({data}) => console.log(data.map((element) => element.name)))
}

function getConstellationsByQuadrant(quadrant) {
  return axios.get(`${BASE_URL}/constellations`).then(({data}) => console.log(data.filter((element) => element.quadrant === quadrant)))
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
