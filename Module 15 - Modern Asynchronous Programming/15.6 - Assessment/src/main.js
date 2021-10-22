const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  try {
    return axios.put(
      `${BASE_URL}/constellations/${constellation.id}`,
      constellation
    );
  } catch {
    Promise.reject({error: `Updating constellation (id: ${constellation.id}) failed.`});
  }
}

async function bulkImport(constellations) {
  if (!Array.isArray(constellations))
    Promise.reject({ error: "Please input an array." });
  const promises = constellations.map((element) => {
    return isValid(element)
      ? update(element)
      : Promise.reject({ error: "Not a valid constellation." });
  });
  return Promise.allSettled(promises);
}

module.exports = { bulkImport, update };
