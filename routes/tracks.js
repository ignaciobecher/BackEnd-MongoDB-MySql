const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");

const { getItems, createItem, getItem } = require("../controllers/tracks");
//const validatorCreateItem = require("../validators/tracks");

//http://localhost/tracks
router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItem);
module.exports = router;
