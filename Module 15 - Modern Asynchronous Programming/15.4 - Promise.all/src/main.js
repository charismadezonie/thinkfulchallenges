const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const idArray = ids.map((element) => {
    const url = `${BASE_URL}/constellations/${element}`;
    return axios.delete(url).then(() => ({ id: element }));
  });
  return Promise.all(idArray);
}

module.exports = {
  bulkDelete,
};
