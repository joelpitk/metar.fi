const path = require("path");
require("dotenv").config({path: path.join(__dirname, "../../.env")});
module.exports = {
  apiUrl: process.env.API_URL,
  apiKey: process.env.API_KEY
}