const axios = require("axios");
require("dotenv").config();

const api = axios.create({
  baseURL: "https://us-real-estate.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "us-real-estate.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.USRE_API
  }
});

export default api;
