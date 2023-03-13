const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
// const { validatorCreateItem } = require("../validators/tracks");
const { getItems, createItem } = require("../controllers/tracks");

//http://localhost/tracks
router.get("/", getItems);
router.post("/", customHeader, createItem);
// router.get("/:id", getItem);
module.exports = router;
