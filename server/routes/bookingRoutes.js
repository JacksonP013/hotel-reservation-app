const { Router } = require("express");
const {auth} = require("../middleware/authMiddleware");


const {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookingController");

const router = Router();


//to get bookings
router.get("/", auth, getBookings);
router.get("/:id", getBooking);
router.post("/", auth, createBooking);
router.delete("/:id",auth, deleteBooking);
router.put("/:id",auth, updateBooking);

module.exports = router;
