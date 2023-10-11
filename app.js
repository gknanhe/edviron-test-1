const express = require("express");
const app = express();
const sls = require("serverless-http");
require("dotenv").config();
const mongoose = require("./config/mongoose.js");

const PORT = process.env.PORT || 3000;

app.use("/", require("./routes/index.js"));

module.exports.handler = sls(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
