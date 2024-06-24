const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");


const {
  getRooms,
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

const router = Router();


//to get all rooms
router.get("/", getRooms);

//to create roomss
router.post("/", auth, createRoom);

//get single room
router.get("/:id", getRoom);

//update room
router.put("/:id", auth, updateRoom);

//delee room
router.delete("/:id", auth, deleteRoom);

module.exports = router;
