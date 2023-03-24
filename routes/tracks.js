const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const authMiddleware = require("../middleware/session");
const validatorCreateItem = require("../validators/tracks");

//http://localhost/tracks
router.get("/", getItems);
router.post("/", createItem);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
module.exports = router;
