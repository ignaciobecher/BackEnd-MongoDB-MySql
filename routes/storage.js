const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage");

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);

router.delete("/:id", deleteItem);

module.exports = router;
