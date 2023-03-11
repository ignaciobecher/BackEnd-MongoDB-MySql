const express = require("express");
const router = express.Router();
const { getItems, createItem } = require("../controllers/tracks");

//http://localhost/tracks
router.get("/", getItems);
router.post("/", createItem);
// router.get("/:id", getItem);
module.exports = router;
