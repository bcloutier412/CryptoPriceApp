require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let COINAPI_KEY = process.env.COINAPI_KEY;

module.exports = {
  MONGODB_URI,
  PORT,
  COINAPI_KEY
};
