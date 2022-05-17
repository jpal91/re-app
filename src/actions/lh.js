const axios = require("axios");

export default axios.create({
  baseURL: "https://re-api-mongo.herokuapp.com/"
});

//http://localhost:3001
//https://re-api-mongo.herokuapp.com/
