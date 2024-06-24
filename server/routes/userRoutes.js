const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");

const {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

const router = Router();

// const {} = require("../controllers/userController");

//testing if routes work
// router.get("/", (req, res) => {
//   return res.json({ message: "get all users testing" });
// });

//get all users
router.get("/", auth, getUsers);

//create user
router.post("/", createUser);

//login user
router.post("/login", loginUser);

//logout user
router.get("/logout", logoutUser);

module.exports = router;
