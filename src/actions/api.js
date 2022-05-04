const axios = require("axios");

const api = axios.create({
  baseURL: "https://us-real-estate.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
    "X-RapidAPI-Key": "942d526276msh2327b24f85690a7p13e988jsn34090db0fc48"
  }
});

export default api;
