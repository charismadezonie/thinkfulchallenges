const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = `${BASE_URL}/constellations`

function index() {
  return axios.get(url).then(({data}) => console.log(data))
}

function create(body) {
  return axios.post(url, body).then(({data}) => console.log(data))
}

function show(id) {
  return axios.get(`${url}/${id}`).then(({data}) => console.log(data))
}

function update(id, body) {
  return axios.put(`${url}/${id}`, body).then(({data}) => console.log(data))
}

function destroy(id) {
  return axios.delete(`${url}/${id}`).then(({data}) => console.log(data))
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
