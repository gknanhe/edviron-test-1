const express = require("express");
const router = express.Router();

const duesController = require("../../controllers/duesController");

router.get("/", (req, res) => {res.send("inside api")});
router.get("/defaulters", duesController.defaulters );

module.exports = router;