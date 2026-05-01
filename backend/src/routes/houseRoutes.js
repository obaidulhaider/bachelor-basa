const express = require("express");

const {
  createHouse,
  getAllHouses,
  getSingleHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houseController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllHouses);
router.get("/:id", getSingleHouse);

router.post("/", protect, adminOnly, createHouse);
router.put("/:id", protect, adminOnly, updateHouse);
router.delete("/:id", protect, adminOnly, deleteHouse);

module.exports = router;