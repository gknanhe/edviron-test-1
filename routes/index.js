const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {res.send("inside router")});
router.use("/api", require("./api"));

console.log("router loaded");

module.exports = router;